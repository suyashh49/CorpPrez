// config/db.js
const mongoose = require("mongoose");

async function connectMongo() {
  console.log("🔗 [mongo] Connecting to Atlas Serverless" );
  await mongoose.connect(process.env.MONGO_URI);
  console.log("✅ [mongo] Connected");
}

module.exports = connectMongo;
