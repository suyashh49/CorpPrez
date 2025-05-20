const mongoose = require("mongoose");

const AnalysisSchema = new mongoose.Schema({
    repositoryId: Number,
    processedAt: {type: Date, default: Date.now},
    ast: mongoose.Schema.Types.Mixed,
    sequenceDiagram: mongoose.Schema.Types.Mixed,
    metrics: mongoose.Schema.Types.Mixed,
});

module.exports = mongoose.model("Analysis", AnalysisSchema);