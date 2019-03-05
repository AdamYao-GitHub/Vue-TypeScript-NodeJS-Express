"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
(() => __awaiter(this, void 0, void 0, function* () {
    try {
        app_1.default.listen(app_1.default.get('port'), () => {
            console.log(' App is running at http://localhost:%d in %s mode', app_1.default.get('port'), app_1.default.get('env'));
            console.log(' Press CTRL-C to stop\n');
        });
    }
    catch (err) {
        console.log(err);
    }
}))();
//# sourceMappingURL=server.js.map