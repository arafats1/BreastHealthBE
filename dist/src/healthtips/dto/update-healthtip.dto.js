"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHealthtipDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_healthtip_dto_1 = require("./create-healthtip.dto");
class UpdateHealthtipDto extends (0, swagger_1.PartialType)(create_healthtip_dto_1.CreateHealthtipDto) {
}
exports.UpdateHealthtipDto = UpdateHealthtipDto;
//# sourceMappingURL=update-healthtip.dto.js.map