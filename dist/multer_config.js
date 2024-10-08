"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
console.log(__dirname);
const uploadsDir = path_1.default.join(__dirname, '../../', 'uploads');
if (!fs_1.default.existsSync(uploadsDir)) {
    fs_1.default.mkdirSync(uploadsDir);
}
console.log(uploadsDir);
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${new Date().toISOString()}-` + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (['image/jpeg', 'image/png', 'image/jpg'].includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        // reject file
        cb(new Error('Unsupported file format'), false);
    }
};
const multer_upload = (0, multer_1.default)({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: fileFilter
});
exports.default = multer_upload;
