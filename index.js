import 'dotenv/config'
import app from './app.js'
import connectDatabase from './config/db.js';
import connectToCloudinary from './config/cloudinary.js';

// database
connectDatabase()

// cloudinary
connectToCloudinary()

// testing api
app.get("/health", (req, res) => {
  res.send("Site is completely healthy !");
});

// running server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
