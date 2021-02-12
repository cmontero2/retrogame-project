"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NoticiasService = void 0;
var core_1 = require("@angular/core");
var noticia_1 = require("./noticia");
var app_constants_1 = require("../../services/app.constants");
var noticias_json_1 = require("../../../assets/json/noticias.json");
var NoticiasService = /** @class */ (function () {
    function NoticiasService(http) {
        this.http = http;
        this.baseUrl = app_constants_1.URL_API.SERVER_URL_API + "entradas?seccion=6";
    }
    NoticiasService.prototype.findAll = function () {
        return this.http.get(this.baseUrl);
    };
    NoticiasService.prototype.getNoticias = function () {
        var noticias = [];
        noticias_json_1["default"].forEach(function (not) {
            noticias.push(new noticia_1.Noticia(not.id, not.titulo, not.texto));
        });
        return noticias;
    };
    NoticiasService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], NoticiasService);
    return NoticiasService;
}());
exports.NoticiasService = NoticiasService;
