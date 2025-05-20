// backend/server.js
require("dotenv").config();
const express  = require("express");
const passport = require("passport");
const cors     = require("cors");

// Connectors
const connectMongo = require("./config/db");
const db           = require("./models/postgres");

// Passport OAuth strategy
require("./config/passport");

// Routers
const authRouter        = require("./routes/auth.routes");
const userRouter        = require("./routes/user.routes");
// (Once you build them)  
// const analysisRouter   = require("./routes/analysis.routes");
// const presentationRouter = require("./routes/presentation.routes");

const app = express();

// ————————————— Middleware —————————————

// Enable CORS only for your frontend origin
app.use(cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],  // Add both variations
    credentials: true,
  }));

// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies (for form submits, if needed)
app.use(express.urlencoded({ extended: true }));

// Initialize Passport (for Google OAuth)
app.use(passport.initialize());

app.get("/healthz", (req, res) => {
    res.status(200).json({ status: "ok", uptime: process.uptime() });
  });


// ————————————— Routes —————————————

// Kick off the Google OAuth dance and handle callback
app.use("/auth", authRouter);

// User endpoints (get profile, complete registration)
app.use("/user", userRouter);

// TODO: once implemented, mount these as well
// app.use("/analysis", analysisRouter);
// app.use("/presentation", presentationRouter);

// A simple health-check endpoint
app.get("/healthz", (req, res) => {
  res.status(200).json({ status: "ok", uptime: process.uptime() });
});


// ————————————— Startup —————————————

const start = async () => {
  console.log("⚡️ [server] Starting…");
  try {
    // 1) MongoDB
    await connectMongo();
    

    // 2) Postgres (Sequelize)
    await db.sequelize.sync({ alter: true });
    console.log("✅ [postgres] Sequelize synced");

    // 3) Listen
    const PORT = process.env.PORT || 6000;
    app.listen(PORT, () =>
      console.log(`🚀 [server] Listening on port ${PORT}`)
    );

  } catch (err) {
    console.error("🔥 [server] Startup error:", err);
    process.exit(1);
  }
};

start();
