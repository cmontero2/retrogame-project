"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./home/header/header.component");
var home_module_1 = require("./home/home.module");
var juegos_module_1 = require("./juegos/juegos.module");
var juego_detalle_module_1 = require("./juego-detalle/juego-detalle.module");
var foro_module_1 = require("./foro/foro.module");
var categorias_component_1 = require("./home/categorias/categorias.component");
var categorias_service_1 = require("./home/categorias/categorias.service");
var footer_component_1 = require("./home/footer/footer.component");
var scroll_bar_module_1 = require("./scroll-bar/scroll-bar.module");
var contacto_component_1 = require("./home/footer/contacto/contacto.component");
var jwt_interceptor_1 = require("./helpers/jwt.interceptor");
var http_2 = require("@angular/common/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                categorias_component_1.CategoriasComponent,
                footer_component_1.FooterComponent,
                contacto_component_1.ContactoComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                home_module_1.HomeModule,
                juegos_module_1.JuegosModule,
                foro_module_1.ForoModule,
                scroll_bar_module_1.ScrollBarModule,
                http_1.HttpClientModule,
                juego_detalle_module_1.JuegoDetalleModule
            ],
            exports: [home_module_1.HomeModule],
            providers: [categorias_service_1.CategoriasService, { provide: http_2.HTTP_INTERCEPTORS, useClass: jwt_interceptor_1.JwtInterceptor, multi: true }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
