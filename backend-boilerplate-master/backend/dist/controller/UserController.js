"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    helloWorld(req, res) {
        return res.send('Hello from UserController');
    }
}
exports.default = new UserController();
