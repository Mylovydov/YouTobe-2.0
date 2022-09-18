"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalCrudOptions = void 0;
exports.globalCrudOptions = {
    query: {
        cache: 2000
    },
    params: {
        id: {
            type: 'string',
            primary: true,
            field: 'id'
        },
        channelId: {
            type: 'string',
            field: 'channelId'
        }
    },
    routes: {
        updateOneBase: {
            allowParamsOverride: true
        },
        deleteOneBase: {
            returnDeleted: true
        }
    }
};
//# sourceMappingURL=global.crud-options.js.map