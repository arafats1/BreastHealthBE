"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSelfcheckDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_selfcheck_dto_1 = require("./create-selfcheck.dto");
class UpdateSelfcheckDto extends (0, swagger_1.PartialType)(create_selfcheck_dto_1.CreateSelfcheckDto) {
}
exports.UpdateSelfcheckDto = UpdateSelfcheckDto;
//# sourceMappingURL=update-selfcheck.dto.js.map