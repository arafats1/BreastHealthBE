"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthtipsController = void 0;
const common_1 = require("@nestjs/common");
const healthtips_service_1 = require("./healthtips.service");
const create_healthtip_dto_1 = require("./dto/create-healthtip.dto");
const update_healthtip_dto_1 = require("./dto/update-healthtip.dto");
const swagger_1 = require("@nestjs/swagger");
let HealthtipsController = class HealthtipsController {
    constructor(healthtipsService) {
        this.healthtipsService = healthtipsService;
    }
    create(createHealthtipDto) {
        return this.healthtipsService.create(createHealthtipDto);
    }
    findAll() {
        return this.healthtipsService.findAll();
    }
    findOne(id) {
        return this.healthtipsService.findOne(+id);
    }
    update(id, updateHealthtipDto) {
        return this.healthtipsService.update(+id, updateHealthtipDto);
    }
    remove(id) {
        return this.healthtipsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_healthtip_dto_1.CreateHealthtipDto]),
    __metadata("design:returntype", void 0)
], HealthtipsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthtipsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthtipsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_healthtip_dto_1.UpdateHealthtipDto]),
    __metadata("design:returntype", void 0)
], HealthtipsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthtipsController.prototype, "remove", null);
HealthtipsController = __decorate([
    (0, common_1.Controller)('healthtips'),
    (0, swagger_1.ApiTags)('Health Tips'),
    __metadata("design:paramtypes", [healthtips_service_1.HealthtipsService])
], HealthtipsController);
exports.HealthtipsController = HealthtipsController;
//# sourceMappingURL=healthtips.controller.js.map