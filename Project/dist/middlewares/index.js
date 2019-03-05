"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("./router"));
const logger_1 = __importDefault(require("./logger"));
const statics_1 = __importDefault(require("./statics"));
const parser_1 = __importDefault(require("./parser"));
exports.default = (app) => {
    logger_1.default(app);
    statics_1.default(app);
    parser_1.default(app);
    router_1.default(app);
};
//# sourceMappingURL=index.js.map