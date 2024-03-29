const { Comment } = require('../models');

exports.getCommentForOneMaterial = async (req, res, next) => {
    const { id } = req.params;
    try {
        const comments = await Comment.findAll({
            where: {
                comment_id: id
            }
        });
        return res.status(200).json(comments);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.storeComment = async (req, res, next) => {
    const { owner_id, material_id } = req.body;
    try {
        const comment = await Comment.create({
            comment: req.body.text || null,
            owner_id: owner_id,
            material_id: material_id,
            image: req.file.path || null
        });
        return res.status(201).json(comment);
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.updateComment = async (req, res, next) => {
    const { id } = req.params;
    const { text } = req.body;
    try {
        const comment = await Comment.findByPk(id);
        if (!comment) {
            return res.status(404).json({message: 'comment not found'});
        }
        comment.comment = text || null;
        if (req.file) {
            comment.image = req.file.path;
        }
        await comment.save();
        return res.status(201).json({message: 'comment updated sucessfully'});
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.deleteComment = async (req, res, next) => {
    const { id } = req.params;
    try {
        const comment = await Comment.findByPk(id);
        if (!comment) {
            return res.status(404).json({message: 'comment not found'});
        }
        await comment.destroy();
        return res.status(201).json({message: 'comment deleted sucessfully'});
    } catch (error) {
        return res.status(500).json(error);
    }
};