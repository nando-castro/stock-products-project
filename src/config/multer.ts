import crypto from "crypto";
import multer from "multer";
import path from "path";

export const multerConfig = {
  dest: path.resolve(__dirname, "..", "public", "uploads", "images"),
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "public", "uploads", "images"),
    filename(req, file, cb) {
      const hash = crypto.randomBytes(6).toString("hex");

      const filename = `${hash}-${file.originalname}`;

      cb(null, filename);
    },
  }),
  limits: {
    fileSize: 1024 * 1024 * 5, //5MB
  },
  fileFilter: (req, file, cb) => {
    const formats = ["image/png", "image/jpg", "image/jpeg"];
    if (formats.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Format not accepted"));
    }
  },
} as multer.Options;