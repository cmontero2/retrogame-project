"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NoticiaDetalleComponent = void 0;
var core_1 = require("@angular/core");
var NoticiaDetalleComponent = /** @class */ (function () {
    function NoticiaDetalleComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.id = 0;
    }
    /*
      findById(id: number) {
        return this.noticia.filter(not => not.id == this.id);
      }
    */
    NoticiaDetalleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (parametros) {
            _this.id = parametros.id;
        });
    };
    NoticiaDetalleComponent = __decorate([
        core_1.Component({
            selector: 'app-noticia-detalle',
            templateUrl: './noticia-detalle.component.html',
            styleUrls: ['./noticia-detalle.component.scss']
        })
    ], NoticiaDetalleComponent);
    return NoticiaDetalleComponent;
}());
exports.NoticiaDetalleComponent = NoticiaDetalleComponent;
