const Message = require('../models/message');

//list all items
exports.list = async(req, res) =>{
    try{
    const message = await Message.find({});
    res.json(message);
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
};

exports.show = async(req, res, next) =>{
    try{
        const message = await Message.findOne({id: req.params.id});
        if(!message){
            res.status(404).json({message: "Message not finded"});
        }
        res.json(message);

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }
};

exports.add = async(req, res) =>{
    const message = new Message(req.body);

    try{
        await message.save();
        res.json({message: "Added new message"});
        }catch(error){
            console.log(error);
            res.send(error);
            next();
        }
};

exports.update = async (req, res, next) =>{
    try{
        const message = await Message.findOneAndUpdate(
            {id: req.params.id},req.body
        );
        res.json({message: "Updated message"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }

};

exports.delete = async (req, res, next) =>{
    try{
        const message = await Message.findOneAndDelete({id: req.params.id});
        res.json({message: "Deleted message"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "El mensaje no existe"});
        next();
    }
};