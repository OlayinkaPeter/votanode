module.exports = {
    getAllCandidates: (req, res) => {
        let query = "SELECT * FROM `candidates` ORDER BY id ASC"; // query database to get all the candidates

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            //Usage of res.json instead of res.send to convert non json files in any case
            res.json({candidates: result});
        });
    },


    addCandidate: (req, res) => {
        let message = '';
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let party_id = req.body.party_id;

        let nameQuery = "SELECT * FROM `candidates` WHERE first_name = '" + first_name + "'";

        db.query(nameQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Candidate already exists';
                res.json({error: message});
            } else {
                // send the candidates's details to the database
                let query = "INSERT INTO `candidates` (first_name, last_name, party_id) VALUES ('" + first_name + "', '" + last_name + "', '" + party_id + "')";
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    let returnQuery = "SELECT * FROM `candidates` WHERE first_name = '" + first_name + "'";
                    db.query(returnQuery, (err, result) => {
                        if (err) {
                            return res.status(500).send(err);
                        }
                        res.json({candidate: result});
                    });
                });
            }
        });
    },

    editCandidate: (req, res) => {
        let candidateId = req.params.id;
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let party_id = req.body.party_id;

        let query = "UPDATE `candidates` SET `first_name` = '" + first_name + "', `last_name` = '" + last_name + "',  `party_id` = '"
            + party_id + "' WHERE `candidates`.`id` = '" + candidateId + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }

            let returnQuery = "SELECT * FROM `candidates` WHERE id = '" + candidateId + "'";
            db.query(returnQuery, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.json({candidate: result});
            });
        });
    },

    deleteCandidate: (req, res) => {
        let candidateId = req.params.id;
        let deleteQuery = 'DELETE FROM candidates WHERE id = "' + candidateId + '"';

        db.query(deleteQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.json({candidate_deleted: result});
        });
    }
};