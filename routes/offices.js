module.exports = {
    getAllOffices: (req, res) => {
        let query = "SELECT * FROM `offices` ORDER BY id ASC"; // query database to get all the offices

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            //Usage of res.json instead of res.send to convert non json files in any case
            res.json({offices: result});
        });
    },


    addOffice: (req, res) => {
        let message = '';
        let name = req.body.name;

        let nameQuery = "SELECT * FROM `offices` WHERE name = '" + name + "'";

        db.query(nameQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'office already exists';
                res.json({error: message});
            } else {
                // send the office's details to the database
                let query = "INSERT INTO `offices` (name) VALUES ('" + name + "')";
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    let returnQuery = "SELECT * FROM `offices` WHERE name = '" + name + "'";
                    db.query(returnQuery, (err, result) => {
                        if (err) {
                            return res.status(500).send(err);
                        }
                        res.json({office: result});
                    });
                });
            }
        });
    },

    editOffice: (req, res) => {
        let officeId = req.params.id;
        let name = req.body.name;

        let query = "UPDATE `offices` SET `name` = '" + name + "' WHERE `offices`.`id` = '" + officeId + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }

            let returnQuery = "SELECT * FROM `offices` WHERE id = '" + officeId + "'";
            db.query(returnQuery, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.json({office: result});
            });
        });
    },

    deleteOffice: (req, res) => {
        let officeId = req.params.id;
        let deleteQuery = 'DELETE FROM offices WHERE id = "' + officeId + '"';

        db.query(deleteQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.json({office_deleted: result});
        });
    }
};