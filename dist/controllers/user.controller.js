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
let UserController = class UserController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(user) {
        return await this.userRepository.create(user);
    }
    async count(where) {
        return await this.userRepository.count(where);
    }
    async find(filter) {
        return await this.userRepository.find(filter);
    }
    async updateAll(user, where) {
        return await this.userRepository.updateAll(user, where);
    }
    async findById(id) {
        return await this.userRepository.findById(id);
    }
    async updateById(id, user) {
        await this.userRepository.updateById(id, user);
    }
    async replaceById(id, user) {
        await this.userRepository.replaceById(id, user);
    }
    async deleteById(id) {
        await this.userRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/users', {
        responses: {
            '200': {
                description: 'User model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.User } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    rest_1.get('/users/count', {
        responses: {
            '200': {
                description: 'User model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.User))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "count", null);
__decorate([
    rest_1.get('/users', {
        responses: {
            '200': {
                description: 'Array of User model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.User } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.User))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "find", null);
__decorate([
    rest_1.patch('/users', {
        responses: {
            '200': {
                description: 'User PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.User))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.User, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/users/{id}', {
        responses: {
            '200': {
                description: 'User model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.User } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findById", null);
__decorate([
    rest_1.patch('/users/{id}', {
        responses: {
            '204': {
                description: 'User PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateById", null);
__decorate([
    rest_1.put('/users/{id}', {
        responses: {
            '204': {
                description: 'User PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/users/{id}', {
        responses: {
            '204': {
                description: 'User DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteById", null);
UserController = __decorate([
    __param(0, repository_1.repository(repositories_1.UserRepository)),
    __metadata("design:paramtypes", [repositories_1.UserRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map