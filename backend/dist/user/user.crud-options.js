"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCrudOptions = void 0;
const user_entity_1 = require("../entities/user.entity");
const create_user_dto_1 = require("./dto/create-user.dto");
const user_dto_1 = require("./dto/user.dto");
exports.userCrudOptions = {
    model: {
        type: user_entity_1.UserEntity
    },
    query: {
        join: {
            videos: {
                eager: true,
                exclude: ['updatedAt', 'createdAt']
            },
            'videos.comments': {
                eager: true
            },
            'videos.likes': {
                eager: true
            }
        },
        exclude: ['updatedAt', 'createdAt'],
        persist: ['updatedAt'],
        sort: [
            {
                field: 'updatedAt',
                order: 'DESC'
            }
        ],
        alwaysPaginate: true
    },
    params: {
        channelId: {
            type: 'string',
            field: 'channelId'
        }
    },
    dto: {
        create: create_user_dto_1.CreateUserDto,
        update: user_dto_1.UserDto
    }
};
//# sourceMappingURL=user.crud-options.js.map