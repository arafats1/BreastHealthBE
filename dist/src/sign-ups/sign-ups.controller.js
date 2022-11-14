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
exports.SignUpsController = void 0;
const common_1 = require("@nestjs/common");
const sign_ups_service_1 = require("./sign-ups.service");
const update_sign_up_dto_1 = require("./dto/update-sign-up.dto");
const swagger_1 = require("@nestjs/swagger");
const sign_up_entity_1 = require("./entities/sign-up.entity");
const create_followup_dto_1 = require("../followups/dto/create-followup.dto");
const create_review_dto_1 = require("../reviews/dto/create-review.dto");
let SignUpsController = class SignUpsController {
    constructor(signUpsService) {
        this.signUpsService = signUpsService;
    }
    async findAll() {
        const signUps = await this.signUpsService.findAll();
        return signUps.map((signUp) => new sign_up_entity_1.SignUpEntity(signUp));
    }
    createFollowup(id, createFollowupDto) {
        return this.signUpsService.createFollowup(+id, createFollowupDto);
    }
    createReview(id, createReviewDto) {
        return this.signUpsService.createReview(+id, createReviewDto);
    }
    findOneByEmail(email) {
        return this.signUpsService.findOneByEmail(email);
    }
    async findDashboard(id) {
        return new sign_up_entity_1.SignUpEntity(await this.signUpsService.findOne(+id));
    }
    update(id, updateSignUpDto) {
        return this.signUpsService.update(+id, updateSignUpDto);
    }
    remove(id) {
        return this.signUpsService.remove(+id);
    }
};
__decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Get)('users'),
    (0, swagger_1.ApiOperation)({ summary: 'Displays all users of the system' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SignUpsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('users/:id/followups'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a followup question for a user' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                swellingOnLeftOrone: {
                    type: 'string',
                    example: 'yes',
                },
                unUsualDischarge: {
                    type: 'string',
                    example: 'No',
                },
                hardSpotOnBreast: {
                    type: 'string',
                    example: 'yes',
                },
                lastPeriodDate: {
                    type: 'string',
                    example: '22-02-2021',
                },
                daysPeriodLasted: {
                    type: 'string',
                    example: '5',
                }
            }
        }
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_followup_dto_1.CreateFollowupDto]),
    __metadata("design:returntype", void 0)
], SignUpsController.prototype, "createFollowup", null);
__decorate([
    (0, common_1.Post)('users/:id/reviews'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a review for a user' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                review: {
                    type: 'string',
                    example: 'This is a review',
                }
            }
        }
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_review_dto_1.CreateReviewDto]),
    __metadata("design:returntype", void 0)
], SignUpsController.prototype, "createReview", null);
__decorate([
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SignUpsController.prototype, "findOneByEmail", null);
__decorate([
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Get)('users/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user by id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SignUpsController.prototype, "findDashboard", null);
__decorate([
    (0, common_1.Patch)('users/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update specific user information' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Created',
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sign_up_dto_1.UpdateSignUpDto]),
    __metadata("design:returntype", void 0)
], SignUpsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('users/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete specific user' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful',
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden',
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SignUpsController.prototype, "remove", null);
SignUpsController = __decorate([
    (0, common_1.Controller)(''),
    (0, swagger_1.ApiTags)('Users'),
    __metadata("design:paramtypes", [sign_ups_service_1.SignUpsService])
], SignUpsController);
exports.SignUpsController = SignUpsController;
//# sourceMappingURL=sign-ups.controller.js.map