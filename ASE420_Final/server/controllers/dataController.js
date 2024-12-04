const dataModel = require('../models/dataModel');


exports.getAllData = (req, res) => {
    dataModel.getAllData((err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ data: rows });
        }
    });
};

exports.addData = (req, res) => {
    const newData = req.body;
    if (!newData.name) {
        return res.status(400).json({ error: 'error' });
    }

    dataModel.addData(newData, (err, id) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Data added', id });
        }
    });
};