const multer = require("multer");

const path = require("path");

const disckStorage = multer.diskStorage({
  destination: (request, file, cb) => cb(null, "uploads"),
  filename: (request, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = Date.now();
    cb(null, uniqueName + ext);
  },
});

const uploader = multer({ storage: disckStorage });

module.exports = { uploader };
