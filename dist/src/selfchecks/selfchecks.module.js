"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfchecksModule = void 0;
const common_1 = require("@nestjs/common");
const selfchecks_service_1 = require("./selfchecks.service");
const selfchecks_controller_1 = require("./selfchecks.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let SelfchecksModule = class SelfchecksModule {
};
SelfchecksModule = __decorate([
    (0, common_1.Module)({
        controllers: [selfchecks_controller_1.SelfchecksController],
        providers: [selfchecks_service_1.SelfchecksService],
        imports: [prisma_module_1.PrismaModule],
        exports: [selfchecks_service_1.SelfchecksService],
    })
], SelfchecksModule);
exports.SelfchecksModule = SelfchecksModule;
//# sourceMappingURL=selfchecks.module.js.map