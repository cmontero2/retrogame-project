"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NoticiasComponent = void 0;
var core_1 = require("@angular/core");
var NoticiasComponent = /** @class */ (function () {
    function NoticiasComponent(noticiasService) {
        this.noticiasService = noticiasService;
        //noticias?: Noticia[];
        this.noticias = [];
    }
    NoticiasComponent.prototype.ngOnInit = function () {
        this.noticias = this.noticiasService.getNoticias();
        /*
        this.noticiasService.findAll()
        .subscribe(
          data =>{
            this.noticias = data;
            console.log('noticias', this.noticias)
          },
          error =>{
            console.log(error);
          })
          */
    };
    NoticiasComponent = __decorate([
        core_1.Component({
            selector: 'app-noticias',
            templateUrl: './noticias.component.html',
            styleUrls: ['./noticias.component.scss']
        })
    ], NoticiasComponent);
    return NoticiasComponent;
}());
exports.NoticiasComponent = NoticiasComponent;
