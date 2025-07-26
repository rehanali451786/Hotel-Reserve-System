const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User"); 

mongoose.connect("mongodb://localhost:27017/hotelDB", {
  
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

async function createAdmin() {
  try {
    
    const existingAdmin = await User.findOne({ email: "admin@example.com" });
    if (existingAdmin) {
      console.log("Admin already exists!");
      mongoose.disconnect();
      return;
    }

    const hashedPassword = await bcrypt.hash("admin123", 10); 

    const admin = new User({
      name: "Admin User",
      email: "admin@example.com",
      password: hashedPassword,
      isAdmin: true
    });

    await admin.save();
    console.log(" Admin created!");
  } catch (error) {
    console.error("Error creating admin:", error);
  } finally {
    mongoose.disconnect();
  }
}

createAdmin();
