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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const brypt = require("bcrypt");
let SignUpsService = class SignUpsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createSignUpDto) {
        const saltOrRounds = 10;
        const password = createSignUpDto.password;
        const salt = brypt.genSaltSync(saltOrRounds);
        const hash = brypt.hashSync(password, salt);
        createSignUpDto.password = hash;
        return this.prisma.signUp.create({
            data: {
                email: createSignUpDto.email,
                firstName: createSignUpDto.firstName,
                lastName: createSignUpDto.lastName,
                phone: createSignUpDto.phone,
                password: createSignUpDto.password,
                questions: {
                    create: createSignUpDto.questions,
                },
            }
        });
    }
    createFollowup(id, createFollowupDto) {
        return this.prisma.followUp.create({
            data: Object.assign(Object.assign({}, createFollowupDto), { signUp: {
                    connect: {
                        id,
                    },
                } }),
        });
    }
    createReview(id, createReviewDto) {
        return this.prisma.review.create({
            data: Object.assign(Object.assign({}, createReviewDto), { signUp: {
                    connect: {
                        id,
                    },
                } }),
        });
    }
    findFollowups(id) {
        return this.prisma.followUp.findMany({
            where: {
                signUpId: id,
            },
        });
    }
    findReviews(id) {
        return this.prisma.review.findMany({
            where: {
                signUpId: id,
            },
        });
    }
    findAll() {
        return this.prisma.signUp.findMany({ include: { questions: { select: { gender: true, ageRange: true, district: true, educationLevel: true, breastCondition: true, knowSomeoneWithBreastCondition: true, yourMotivation: true } }, reviews: { select: { review: true } }, followUps: { select: { swellingOnLeftOrone: true, unUsualDischarge: true, hardSpotOnBreast: true, lastPeriodDate: true, daysPeriodLasted: true } } } });
    }
    findOne(id) {
        return this.prisma.signUp.findUnique({ where: { id: id }, include: { questions: { select: { gender: true, ageRange: true, district: true, educationLevel: true, breastCondition: true, knowSomeoneWithBreastCondition: true, yourMotivation: true } }, reviews: { select: { review: true } }, followUps: { select: { swellingOnLeftOrone: true, unUsualDischarge: true, hardSpotOnBreast: true, lastPeriodDate: true, daysPeriodLasted: true } } } });
    }
    findOneByEmail(email) {
        return this.prisma.signUp.findUnique({ where: { email: email } });
    }
    update(id, updateSignUpDto) {
        return this.prisma.signUp.update({ where: { id }, data: updateSignUpDto });
    }
    remove(id) {
        return this.prisma.signUp.delete({ where: { id } });
    }
};
SignUpsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SignUpsService);
exports.SignUpsService = SignUpsService;
//# sourceMappingURL=sign-ups.service.js.map