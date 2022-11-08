"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFollowupDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_followup_dto_1 = require("./create-followup.dto");
class UpdateFollowupDto extends (0, swagger_1.PartialType)(create_followup_dto_1.CreateFollowupDto) {
}
exports.UpdateFollowupDto = UpdateFollowupDto;
//# sourceMappingURL=update-followup.dto.js.map