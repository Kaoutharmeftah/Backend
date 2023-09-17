const User = require('../models/users');
exports.register = async (req, res) => {
    try{
        console.log('req.body', req.body);
        const user= User (req.body);
        const newUser = await user.save();
        res.status(200).json(newUser);   
    } catch (err) {
       res.status(500).json(err);
    }
}

exports.login = async (req, res) => {
    try{
        const {
            username,
            password,
        } = req.body;
        const user = await User.findOne({ username: username})
        if(!user) {
            throw new ERROR('INVALID_USERNAME')
            // res.status(500).json('INVALID_USERNAME');
        }
        const isSamePss = password === user.password;
        if(!isSamePss){
            res.status(500).json({message:'INVALID_PASSWORD'});
        }
        res.status(200).json(user);  
    } catch (err) { 
        console.log('error', err.message);
        if (err.message == 'INVALID_USERNAME') {
            console.log('iff');
            res.status(500).json({message: 'INVALID_USERNAME'})
        } else {
            res.status(500).json(err);
                }
    }
}
