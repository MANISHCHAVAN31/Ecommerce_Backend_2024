import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Folder path based on req.user._id
    const userFolderPath = "/tmp/products/" + req.user._id;

    // Check if the folder exists
    if (!fs.existsSync(userFolderPath)) {
      console.log("here 1");
      // If the folder doesn't exist, create it
      fs.mkdirSync(userFolderPath, { recursive: true });
    }

    // Set the destination to the created/existing folder
    // cb(null, userFolderPath);
  },
  // filename: function (req, file, cb) {
  //   const uniqueSuffix = Date.now();
  //   cb(null, file.fieldname + "-" + uniqueSuffix);
  // },
});

const productUpload = multer({ storage: storage });

export default productUpload;
