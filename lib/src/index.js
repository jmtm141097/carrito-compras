"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_functions_1 = __importDefault(require("firebase-functions"));
const express_1 = __importDefault(require("express"));
const usuario_routes_1 = __importDefault(require("./v1/routes/usuario.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/v1/users', usuario_routes_1.default);
app.get('/', (_req, res) => res.status(200).send({
    title: 'Por fin canequero',
    message: 'Ahora si nos vamos a poner a programar de lo lindo'
}));
exports.app = firebase_functions_1.default.https.onRequest(app);
