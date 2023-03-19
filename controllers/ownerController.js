const { Owner } = require('../models');


exports.ownerLogin = async (req, res, next) => {
    const { email, password } = req.body;
    const owner = await Owner.findOne({
        where: {
            email: email
        }
    });
    if (!owner) {
        return res.status(401).json({massage: 0});
    } else {
        if (owner.password === password) {
            return res.status(200).json(owner);
        }
        return res.status(401).json({massage: 1});
    }
};

exports.ownerSearch = async (req, res, next) => {
    const { name } = req.body;
    try {
        const owner = await Owner.findOne({
            where: {
                first_name: name
            }
        });
        if (!owner) {
            return res.status(401).json({massage: 'not found'});
        } else {
            return res.status(200).json(owner);
        }   
    } catch (error) {
        return res.status(500).json(error);
    }
};

