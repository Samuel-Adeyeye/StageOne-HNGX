"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./config/index"));
const routes_1 = __importDefault(require("./routes"));
const { PORT } = index_1.default;
console.log(PORT);
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use('/', routes_1.default);
const BUILD_PORT = PORT;
app.listen(BUILD_PORT || 3000, () => {
    console.log(`profile api is running at http://localhost:${BUILD_PORT}/api?slack_name=SamAde&track=backend`);
});
exports.default = app;
