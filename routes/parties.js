module.exports = {
    getAllParties: (req, res) => {
        let query = "SELECT * FROM `parties` ORDER BY id ASC"; // query database to get all the parties

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            //Usage of res.json instead of res.send to convert non json files in any case
            res.json({parties: result});
        });
    },


    addParty: (req, res) => {
        let message = '';
        let name = req.body.name;
        let leader = req.body.leader;

        let nameQuery = "SELECT * FROM `parties` WHERE name = '" + name + "'";

        db.query(nameQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Party already exists';
                res.json({error: message});
            } else {
                // send the party's details to the database
                let query = "INSERT INTO `parties` (name, leader) VALUES ('" + name + "', '" + leader + "')";
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    let returnQuery = "SELECT * FROM `parties` WHERE name = '" + name + "'";
                    db.query(returnQuery, (err, result) => {
                        if (err) {
                            return res.status(500).send(err);
                        }
                        res.json({party: result});
                    });
                });
            }
        });
    },

    editParty: (req, res) => {
        let partyId = req.params.id;
        let name = req.body.name;
        let leader = req.body.leader;

        let query = "UPDATE `parties` SET `name` = '" + name + "', `leader` = '" + leader + "' WHERE `parties`.`id` = '" + partyId + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }

            let returnQuery = "SELECT * FROM `parties` WHERE id = '" + partyId + "'";
            db.query(returnQuery, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.json({party: result});
            });
        });
    },

    deleteParty: (req, res) => {
        let partyId = req.params.id;
        let deleteQuery = 'DELETE FROM parties WHERE id = "' + partyId + '"';

        db.query(deleteQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.json({party_deleted: result});
        });
    }
};