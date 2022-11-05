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
exports.SelfchecksController = void 0;
const common_1 = require("@nestjs/common");
const selfchecks_service_1 = require("./selfchecks.service");
const create_selfcheck_dto_1 = require("./dto/create-selfcheck.dto");
const update_selfcheck_dto_1 = require("./dto/update-selfcheck.dto");
const swagger_1 = require("@nestjs/swagger");
let SelfchecksController = class SelfchecksController {
    constructor(selfchecksService) {
        this.selfchecksService = selfchecksService;
    }
    create(createSelfcheckDto) {
        return this.selfchecksService.create(createSelfcheckDto);
    }
    findAll() {
        return this.selfchecksService.findAll();
    }
    findOne(id) {
        return this.selfchecksService.findOne(+id);
    }
    update(id, updateSelfcheckDto) {
        return this.selfchecksService.update(+id, updateSelfcheckDto);
    }
    remove(id) {
        return this.selfchecksService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Posts self check photos to guide users' }),
    (0, swagger_1.ApiBody)({ type: create_selfcheck_dto_1.CreateSelfcheckDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_selfcheck_dto_1.CreateSelfcheckDto]),
    __metadata("design:returntype", void 0)
], SelfchecksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all selfchecks' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SelfchecksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get selfcheck by id' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SelfchecksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update selfcheck by id' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_selfcheck_dto_1.UpdateSelfcheckDto]),
    __metadata("design:returntype", void 0)
], SelfchecksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete selfcheck by id' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SelfchecksController.prototype, "remove", null);
SelfchecksController = __decorate([
    (0, common_1.Controller)('selfchecks'),
    (0, swagger_1.ApiTags)('Selfchecks'),
    __metadata("design:paramtypes", [selfchecks_service_1.SelfchecksService])
], SelfchecksController);
exports.SelfchecksController = SelfchecksController;
//# sourceMappingURL=selfchecks.controller.js.map