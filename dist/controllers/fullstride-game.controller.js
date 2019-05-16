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
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let FullstrideGameController = class FullstrideGameController {
    constructor(fullstrideGameRepository) {
        this.fullstrideGameRepository = fullstrideGameRepository;
    }
    async create(fullstrideGame) {
        return await this.fullstrideGameRepository.create(fullstrideGame);
    }
    async count(where) {
        return await this.fullstrideGameRepository.count(where);
    }
    async find(filter) {
        return await this.fullstrideGameRepository.find(filter);
    }
    async updateAll(fullstrideGame, where) {
        return await this.fullstrideGameRepository.updateAll(fullstrideGame, where);
    }
    async findById(id) {
        return await this.fullstrideGameRepository.findById(id);
    }
    async updateById(id, fullstrideGame) {
        await this.fullstrideGameRepository.updateById(id, fullstrideGame);
    }
    async replaceById(id, fullstrideGame) {
        await this.fullstrideGameRepository.replaceById(id, fullstrideGame);
    }
    async deleteById(id) {
        await this.fullstrideGameRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/fullstride-games', {
        responses: {
            '200': {
                description: 'FullstrideGame model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.FullstrideGame } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.FullstrideGame]),
    __metadata("design:returntype", Promise)
], FullstrideGameController.prototype, "create", null);
__decorate([
    rest_1.get('/fullstride-games/count', {
        responses: {
            '200': {
                description: 'FullstrideGame model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.FullstrideGame))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FullstrideGameController.prototype, "count", null);
__decorate([
    rest_1.get('/fullstride-games', {
        responses: {
            '200': {
                description: 'Array of FullstrideGame model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.FullstrideGame } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.FullstrideGame))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FullstrideGameController.prototype, "find", null);
__decorate([
    rest_1.patch('/fullstride-games', {
        responses: {
            '200': {
                description: 'FullstrideGame PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.FullstrideGame))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.FullstrideGame, Object]),
    __metadata("design:returntype", Promise)
], FullstrideGameController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/fullstride-games/{id}', {
        responses: {
            '200': {
                description: 'FullstrideGame model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.FullstrideGame } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FullstrideGameController.prototype, "findById", null);
__decorate([
    rest_1.patch('/fullstride-games/{id}', {
        responses: {
            '204': {
                description: 'FullstrideGame PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.FullstrideGame]),
    __metadata("design:returntype", Promise)
], FullstrideGameController.prototype, "updateById", null);
__decorate([
    rest_1.put('/fullstride-games/{id}', {
        responses: {
            '204': {
                description: 'FullstrideGame PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.FullstrideGame]),
    __metadata("design:returntype", Promise)
], FullstrideGameController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/fullstride-games/{id}', {
        responses: {
            '204': {
                description: 'FullstrideGame DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FullstrideGameController.prototype, "deleteById", null);
FullstrideGameController = __decorate([
    __param(0, repository_1.repository(repositories_1.FullstrideGameRepository)),
    __metadata("design:paramtypes", [repositories_1.FullstrideGameRepository])
], FullstrideGameController);
exports.FullstrideGameController = FullstrideGameController;
//# sourceMappingURL=fullstride-game.controller.js.map