"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_container_component_1 = require("./home/home-container/home-container.component");
var foro_container_component_1 = require("./foro/foro-container/foro-container.component");
var entrada_detalle_component_1 = require("./foro/entrada-detalle/entrada-detalle.component");
var secciones_component_1 = require("./foro/secciones/secciones.component");
var entradas_component_1 = require("./foro/entradas/entradas.component");
var login_component_1 = require("./home/login/login.component");
var registro_component_1 = require("./home/registro/registro.component");
var juego_container_component_1 = require("./juegos/juego-container/juego-container.component");
var contacto_component_1 = require("./home/footer/contacto/contacto.component");
var juego_detalle_container_component_1 = require("./juego-detalle/juego-detalle-container/juego-detalle-container.component");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_container_component_1.HomeContainerComponent },
    { path: 'foro/foro-container', component: foro_container_component_1.ForoContainerComponent },
    { path: 'foro/entrada-detalle', component: entrada_detalle_component_1.EntradaDetalleComponent },
    { path: 'foro/secciones', component: secciones_component_1.SeccionesComponent },
    { path: 'foro/entradas', component: entradas_component_1.EntradasComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'juegos', component: juego_container_component_1.JuegoContainerComponent },
    { path: 'juegos/:id', component: juego_container_component_1.JuegoContainerComponent },
    { path: 'registro', component: registro_component_1.RegistroComponent },
    { path: 'contacto', component: contacto_component_1.ContactoComponent },
    { path: 'juego/:id', component: juego_detalle_container_component_1.JuegoDetalleContainerComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
