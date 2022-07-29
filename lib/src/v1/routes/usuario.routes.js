"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controller_1 = require("../../controllers/usuarios-controller");
const router = (0, express_1.Router)();
router.post('/', usuarios_controller_1.createUser);
exports.default = router;
