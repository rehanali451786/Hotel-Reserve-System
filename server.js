const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const bookingRoutes = require("./routes/bookings");
const userRoutes = require("./routes/users");
const contactRoutes = require("./routes/contactRoutes");
// const uploadRoutes = require("./routes/Upload");
// const uploadImageRoute = require("./routes/uploadRoomImage");


const app = express();
const PORT = 5000;


app.use(cors());            
app.use(express.json());    


// app.use("/api", uploadImageRoute);


app.use("/api/bookings", bookingRoutes);
app.use("/api/users", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", require("./routes/auth"));

// app.use("/api", uploadRoutes);
// app.use("/uploads", express.static("uploads"));



mongoose.connect("mongodb://localhost:27017/hotelDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(" MongoDB Connected");
  app.listen(PORT, () => console.log(` Server running at http://localhost:${PORT}`));
}).catch(err => {
  console.error(" MongoDB connection error:", err);
});
