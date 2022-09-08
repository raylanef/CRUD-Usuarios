"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const service_1 = require("./service");
class UsersController {
    constructor() {
        this.service = new service_1.UsersService();
    }
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.service.process(req, res);
            }
            catch (error) {
                return error;
            }
        });
    }
}
exports.UsersController = UsersController;
