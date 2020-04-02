"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
// import mongoose from 'mongoose'
class App {
    constructor() {
        this.express = express_1.default();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.express.use(express_1.default.json());
        this.express.use(cors_1.default());
    }
    /*
    private database() {
      const {DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME} = process.env
        mongoose.connect('mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_HOST}/tsnode', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      mongoose.connection.on('error', () => console.error('connection error:'))
      mongoose.connection.once('open', () => console.log('database connected'))
    }
    */
    routes() {
        this.express.use(routes_1.default);
    }
}
exports.default = new App().express;
