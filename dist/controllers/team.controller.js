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
let TeamController = class TeamController {
    constructor(teamRepository) {
        this.teamRepository = teamRepository;
    }
    async create(team) {
        return await this.teamRepository.create(team);
    }
    async count(where) {
        return await this.teamRepository.count(where);
    }
    async find(filter) {
        return await this.teamRepository.find(filter);
    }
    async updateAll(team, where) {
        return await this.teamRepository.updateAll(team, where);
    }
    async findById(id) {
        return await this.teamRepository.findById(id);
    }
    async updateById(id, team) {
        await this.teamRepository.updateById(id, team);
    }
    async replaceById(id, team) {
        await this.teamRepository.replaceById(id, team);
    }
    async deleteById(id) {
        await this.teamRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/teams', {
        responses: {
            '200': {
                description: 'Team model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Team } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Team]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "create", null);
__decorate([
    rest_1.get('/teams/count', {
        responses: {
            '200': {
                description: 'Team model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Team))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "count", null);
__decorate([
    rest_1.get('/teams', {
        responses: {
            '200': {
                description: 'Array of Team model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Team } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Team))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "find", null);
__decorate([
    rest_1.patch('/teams', {
        responses: {
            '200': {
                description: 'Team PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Team))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Team, Object]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/teams/{id}', {
        responses: {
            '200': {
                description: 'Team model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Team } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "findById", null);
__decorate([
    rest_1.patch('/teams/{id}', {
        responses: {
            '204': {
                description: 'Team PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Team]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "updateById", null);
__decorate([
    rest_1.put('/teams/{id}', {
        responses: {
            '204': {
                description: 'Team PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Team]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/teams/{id}', {
        responses: {
            '204': {
                description: 'Team DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "deleteById", null);
TeamController = __decorate([
    __param(0, repository_1.repository(repositories_1.TeamRepository)),
    __metadata("design:paramtypes", [repositories_1.TeamRepository])
], TeamController);
exports.TeamController = TeamController;
//# sourceMappingURL=team.controller.js.map