import 'dotenv/config'
import app from './app.js'
import connectDatabase from './config/db.js';

// database
connectDatabase()

app.get("/health", (req, res) => {
  res.send("Site is completely healthy !");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
