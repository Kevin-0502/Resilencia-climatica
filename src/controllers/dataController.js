const Data = require('../models/data');

//list all items
exports.list = async(req, res) =>{
    try{
    const data = await Data.find({});
    res.json(data);
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
};

exports.show = async(req, res, next) =>{
    try{
        const data = await Data.findOne({id: req.params.id});
        if(!data){
            res.status(404).json({message: "Message not found"});
        }
        res.json(data);

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }
};

exports.add = async(req, res) =>{
    const data = new Data(req.body);

    try{
        await data.save();
        res.json({message: "Added new message",data:data});
        }catch(error){
            console.log(error);
            res.send(error);
            next();
        }
};

exports.update = async (req, res, next) =>{
    try{
        const data = await Data.findOneAndUpdate(
            {id: req.params.id},req.body
        );
        res.json({message: "Updated message",data:data});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }

};

exports.delete = async (req, res, next) =>{
    try{
        const data = await Data.findOneAndDelete({id: req.params.id});
        res.json({message: "Deleted message",data:data});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "El mensaje no existe"});
        next();
    }
};