const Locaciones = require('../models/Locaciones');

exports.getLocacionById = async (id) => {
    return await Locaciones.findById(id);
}

exports.getLocaciones = async () => {
    return await Locaciones.find();
}