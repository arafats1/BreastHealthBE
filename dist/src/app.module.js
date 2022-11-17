"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const sign_ups_module_1 = require("./sign-ups/sign-ups.module");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
const prisma_module_1 = require("./prisma/prisma.module");
const questionnaires_module_1 = require("./questionnaires/questionnaires.module");
const selfchecks_module_1 = require("./selfchecks/selfchecks.module");
const articles_module_1 = require("./articles/articles.module");
const faqs_module_1 = require("./faqs/faqs.module");
const followups_module_1 = require("./followups/followups.module");
const healthtips_module_1 = require("./healthtips/healthtips.module");
const reviews_module_1 = require("./reviews/reviews.module");
const doctors_module_1 = require("./doctors/doctors.module");
const uploads_module_1 = require("./uploads/uploads.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, sign_ups_module_1.SignUpsModule, auth_module_1.AuthModule, questionnaires_module_1.QuestionnairesModule, selfchecks_module_1.SelfchecksModule, articles_module_1.ArticlesModule, faqs_module_1.FaqsModule, followups_module_1.FollowupsModule, healthtips_module_1.HealthtipsModule, reviews_module_1.ReviewsModule, doctors_module_1.DoctorsModule, uploads_module_1.UploadsModule,],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, {
                provide: core_1.APP_PIPE,
                useClass: common_1.ValidationPipe,
            }],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map