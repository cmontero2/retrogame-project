"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegistroComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(activeModal, fb, accountService) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.accountService = accountService;
        this.userForm = this.fb.group({
            username: [null, [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            password: [null, [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            email: [null, [forms_1.Validators.email, forms_1.Validators.required]],
            rol_id: ["3", []]
        });
        this.companyForm = this.fb.group({
            username: [null, [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            password: [null, [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            email: [null, [forms_1.Validators.email, forms_1.Validators.required]],
            nombre: [null, [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            cif: [null, [forms_1.Validators.required, forms_1.Validators.minLength(9), forms_1.Validators.maxLength(9)]],
            direccion: [null, [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            poblacion: [null, [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            telf: [null, [forms_1.Validators.required, forms_1.Validators.minLength(9), forms_1.Validators.maxLength(9)]],
            nacimiento: [null, [forms_1.Validators.required]],
            rol_id: ["1", []]
        });
        this.isCompany = false;
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    RegistroComponent.prototype.setCompany = function (isCompany) {
        this.isCompany = isCompany;
    };
    RegistroComponent.prototype.save = function () {
        //const usuario = this.createFromForm();
        // this.subscribeToSaveResponse(this.usuarioService.create(usuario)); // Cuando este creado la clase usuario y la clase UsuarioService
        //console.log("Usuario: " + JSON.stringify(usuario, null, 2));
        this.cerrarModal();
    };
    RegistroComponent.prototype.createFromFormUser = function () {
        return {
            // ...new Usuario(), Crear clase usuario
            username: this.userForm.get(['username']).value,
            password: this.userForm.get(['password']).value,
            email: this.userForm.get(['email']).value,
            rol_id: this.userForm.get(['rol_id']).value
        };
    };
    RegistroComponent.prototype.createFromFormCompany = function () {
        return {
            // ...new Usuario(), Crear clase usuario
            username: this.companyForm.get(['username']).value,
            password: this.companyForm.get(['password']).value,
            email: this.companyForm.get(['email']).value,
            nombre: this.companyForm.get(['nombre']).value,
            cif: this.companyForm.get(['cif']).value,
            direccion: this.companyForm.get(['direccion']).value,
            poblacion: this.companyForm.get(['poblacion']).value,
            telf: this.companyForm.get(['telf']).value,
            nacimiento: this.companyForm.get(['nacimiento']).value,
            rol_id: this.companyForm.get(['rol_id']).value
        };
    };
    RegistroComponent.prototype.register = function () {
        if (!this.userForm.invalid) {
            var usuario = this.createFromFormUser();
            this.accountService.register(usuario);
            this.cerrarModal();
        }
        else if (!this.companyForm.invalid) {
            var usuario = this.createFromFormCompany();
            this.accountService.register(usuario);
            this.cerrarModal();
        }
    };
    RegistroComponent.prototype.cerrarModal = function () {
        this.activeModal.close();
    };
    RegistroComponent = __decorate([
        core_1.Component({
            selector: 'app-registro',
            templateUrl: './registro.component.html',
            styleUrls: ['./registro.component.scss']
        })
    ], RegistroComponent);
    return RegistroComponent;
}());
exports.RegistroComponent = RegistroComponent;
