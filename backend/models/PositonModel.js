const {model} = require ("mongoose");

const {PositionSchema} = require("../schema/PositionSchema");

const PositionModel = new model("postion", PositionSchema);

module.exports = { PositionModel };