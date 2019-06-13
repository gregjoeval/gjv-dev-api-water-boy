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
let SportingEventController = class SportingEventController {
    constructor(sportingEventRepository) {
        this.sportingEventRepository = sportingEventRepository;
    }
    async create(sportingEvent) {
        return await this.sportingEventRepository.create(sportingEvent);
    }
    async count(where) {
        return await this.sportingEventRepository.count(where);
    }
    async find(filter) {
        return await this.sportingEventRepository.find(filter);
    }
    async updateAll(sportingEvent, where) {
        return await this.sportingEventRepository.updateAll(sportingEvent, where);
    }
    async findById(id) {
        return await this.sportingEventRepository.findById(id);
    }
    async updateById(id, sportingEvent) {
        await this.sportingEventRepository.updateById(id, sportingEvent);
    }
    async replaceById(id, sportingEvent) {
        await this.sportingEventRepository.replaceById(id, sportingEvent);
    }
    async deleteById(id) {
        await this.sportingEventRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/sporting-events', {
        responses: {
            '200': {
                description: 'SportingEvent model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.SportingEvent } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.SportingEvent]),
    __metadata("design:returntype", Promise)
], SportingEventController.prototype, "create", null);
__decorate([
    rest_1.get('/sporting-events/count', {
        responses: {
            '200': {
                description: 'SportingEvent model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.SportingEvent))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SportingEventController.prototype, "count", null);
__decorate([
    rest_1.get('/sporting-events', {
        responses: {
            '200': {
                description: 'Array of SportingEvent model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.SportingEvent } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.SportingEvent))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SportingEventController.prototype, "find", null);
__decorate([
    rest_1.patch('/sporting-events', {
        responses: {
            '200': {
                description: 'SportingEvent PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.SportingEvent))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.SportingEvent, Object]),
    __metadata("design:returntype", Promise)
], SportingEventController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/sporting-events/{id}', {
        responses: {
            '200': {
                description: 'SportingEvent model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.SportingEvent } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SportingEventController.prototype, "findById", null);
__decorate([
    rest_1.patch('/sporting-events/{id}', {
        responses: {
            '204': {
                description: 'SportingEvent PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.SportingEvent]),
    __metadata("design:returntype", Promise)
], SportingEventController.prototype, "updateById", null);
__decorate([
    rest_1.put('/sporting-events/{id}', {
        responses: {
            '204': {
                description: 'SportingEvent PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.SportingEvent]),
    __metadata("design:returntype", Promise)
], SportingEventController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/sporting-events/{id}', {
        responses: {
            '204': {
                description: 'SportingEvent DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SportingEventController.prototype, "deleteById", null);
SportingEventController = __decorate([
    __param(0, repository_1.repository(repositories_1.SportingEventRepository)),
    __metadata("design:paramtypes", [repositories_1.SportingEventRepository])
], SportingEventController);
exports.SportingEventController = SportingEventController;
//# sourceMappingURL=sporting-event.controller.js.map