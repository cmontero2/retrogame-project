"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PerfilUpdateComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var user_1 = require("src/app/account/user");
var PerfilUpdateComponent = /** @class */ (function () {
    function PerfilUpdateComponent(fb, accountService, activatedRoute) {
        this.fb = fb;
        this.accountService = accountService;
        this.activatedRoute = activatedRoute;
        this.id = 0;
        this.editForm = this.fb.group({
            username: [null, [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            password: [null, [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            email: [null, [forms_1.Validators.email, forms_1.Validators.required]],
            nombre: [null, [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            cif: [null, [forms_1.Validators.required, forms_1.Validators.minLength(9), forms_1.Validators.maxLength(9)]],
            direccion: [null, [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            poblacion: [null, [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            telf: [null, [forms_1.Validators.required, forms_1.Validators.minLength(9), forms_1.Validators.maxLength(9)]],
            nacimiento: [null, [forms_1.Validators.required]]
        });
        this.user = new user_1.User();
    }
    PerfilUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*
        * sacar informacion del token para poder poner en el formulario
        * requerido en ciertos campos si es empresa
        */
        this.accountService.user.subscribe(function (data) {
            _this.user = data ? data : new user_1.User();
        });
        //recojo los datos(id) de la ruta
        this.activatedRoute.params.subscribe(function (parametros) {
            _this.id = parametros.id;
            console.log("id " + _this.id);
        });
        this.imgPath = "../../../assets/img/usuarios/user" + this.id + ".png";
    };
    PerfilUpdateComponent.prototype.createFromForm = function () {
        return {
            // ...new Usuario(), Crear clase usuario
            username: this.editForm.get(['username']).value,
            password: this.editForm.get(['password']).value,
            email: this.editForm.get(['email']).value,
            nombre: this.editForm.get(['nombre']).value,
            cif: this.editForm.get(['cif']).value,
            direccion: this.editForm.get(['direccion']).value,
            poblacion: this.editForm.get(['poblacion']).value,
            telf: this.editForm.get(['telf']).value,
            nacimiento: this.editForm.get(['nacimiento']).value
        };
    };
    PerfilUpdateComponent.prototype.update = function () {
        if (!this.editForm.invalid) {
            var usuario = this.createFromForm();
            this.accountService.update(this.id, usuario);
        }
    };
    PerfilUpdateComponent = __decorate([
        core_1.Component({
            selector: 'app-perfil-update',
            templateUrl: './perfil-update.component.html',
            styleUrls: ['./perfil-update.component.scss']
        })
    ], PerfilUpdateComponent);
    return PerfilUpdateComponent;
}());
exports.PerfilUpdateComponent = PerfilUpdateComponent;
