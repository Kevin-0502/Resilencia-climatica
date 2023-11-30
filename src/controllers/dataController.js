const Data = require('../models/data');

//list all items
exports.list = async (req, res) => {
    try {
        const data = await Data.find({});
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(200).send(error);
        next();
    }
};

exports.show = async (req, res, next) => {
    try {
        const data = await Data.findOne({ id: req.params.id });
        if (!data) {
            res.status(404).json({ message: "Message not found" });
        }
        res.json(data);

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error" });
        next();
    }
};

exports.Date_show_top25 = async (req, res) => {
    const { initial_date, final_date } = req.body;
    if (!initial_date || !final_date) {
        return res.status(500).send({ message: "Error, se debe introducir fecha de inicio y fin." });
    } else {
        var isDateOK1 = isDateValid(initial_date);
        var isDateOK2 = isDateValid(final_date);

        if (isDateOK1 && isDateOK2) {
            if (Date.parse(initial_date) >= Date.parse(final_date)) {
                return res.status(500).send({ message: "Error, la fecha de inicio tiene que ser mayor a la fecha final." });
            } else {
                var date1 = new Date(initial_date);
                var date2 = new Date(final_date);
                
                const data = await Data.find({createdAt: { $gt: date1, $lt: date2 }}).sort({createdAt: -1}).limit(25);
                return res.status(200).send({  initial: date1, final: date2, data:data});
                
            }
        } else {
            return res.status(500).send({ message: "Error, las fechas tienen que tener el formato: MM/DD/YYYY, alguna fecha puede estar mala." });
        }
    }
};

exports.Date_show = async (req, res) => {
    const { initial_date, final_date } = req.body;
    if (!initial_date || !final_date) {
        return res.status(500).send({ message: "Error, se debe introducir fecha de inicio y fin." });
    } else {
        var isDateOK1 = isDateValid(initial_date);
        var isDateOK2 = isDateValid(final_date);

        if (isDateOK1 && isDateOK2) {
            if (Date.parse(initial_date) >= Date.parse(final_date)) {
                return res.status(500).send({ message: "Error, la fecha de inicio tiene que ser mayor a la fecha final." });
            } else {
                var date1 = new Date(initial_date);
                var date2 = new Date(final_date);
                
                const data = await Data.find({createdAt: { $gt: date1, $lt: date2 }});
                return res.status(200).send({  initial: date1, final: date2, data:data});
                
            }
        } else {
            return res.status(500).send({ message: "Error, las fechas tienen que tener el formato: MM/DD/YYYY, alguna fecha puede estar mala." });
        }
    }
};

function isDateValid(dateStr) {
    var isDateOK = !isNaN(new Date(dateStr));
    var date = new Date(dateStr);
    if (isDateOK) {
        let day = date.getDate();
        day = day < 10 ? "0" + day : day;
        let month = date.getMonth() + 1;
        month = month < 10 ? "0" + month : month;
        const year = date.getFullYear();
        return true;
    } else {
        return false;
    }
};

exports.add = async (req, res) => {
    const data = new Data(req.body);

    try {
        await data.save();
        res.json({ message: "Added new message", data: data });
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

exports.update = async (req, res, next) => {
    try {
        const data = await Data.findOneAndUpdate(
            { id: req.params.id }, req.body
        );
        res.json({ message: "Updated message", data: data });

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Error" });
        next();
    }

};

exports.delete = async (req, res, next) => {
    try {
        const data = await Data.findOneAndDelete({ id: req.params.id });
        res.json({ message: "Deleted message", data: data });

    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "El mensaje no existe" });
        next();
    }
};