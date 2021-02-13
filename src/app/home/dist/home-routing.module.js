"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var registro_component_1 = require("./registro/registro.component");
var perfil_component_1 = require("./perfil/perfil.component");
var empresa_component_1 = require("./empresa/empresa.component");
var noticia_detalle_component_1 = require("./noticia-detalle/noticia-detalle.component");
var terminos_component_1 = require("./footer/terminos/terminos.component");
var privacidad_component_1 = require("./footer/privacidad/privacidad.component");
var cookies_component_1 = require("./footer/cookies/cookies.component");
var routesHome = [
    { path: 'registro', component: registro_component_1.RegistroComponent },
    { path: 'perfil/:user', component: perfil_component_1.PerfilComponent },
    { path: 'empresa', component: empresa_component_1.EmpresaComponent },
    { path: 'noticiaDetalle/:id', component: noticia_detalle_component_1.NoticiaDetalleComponent },
    { path: 'terminos', component: terminos_component_1.TerminosComponent },
    { path: 'privacidad', component: privacidad_component_1.PrivacidadComponent },
    { path: 'cookies', component: cookies_component_1.CookiesComponent },
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routesHome)],
            exports: [router_1.RouterModule]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());
exports.HomeRoutingModule = HomeRoutingModule;
