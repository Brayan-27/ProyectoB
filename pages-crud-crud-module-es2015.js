(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-crud-crud-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crud/crud.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crud/crud.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar>\n    <ion-title>REGISTRO DE USUARIOS</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons> \n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <div>\n      <ion-item>\n        <ion-input type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"your_name\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label style=\"color:#999\">Genero</ion-label>\n        <ion-select interface=\"popover\" [(ngModel)]=\"gender\" >\n          <ion-select-option value=\"f\">F</ion-select-option>\n          <ion-select-option value=\"m\">M</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item style=\"color: #999;\">\n        <ion-label position=\"floating\">Año de Nacimiento</ion-label>\n        <ion-datetime displayFormat=\"YY/MM/DD\" [(ngModel)]=\"date_birth\" min=\"1945-08-17\" max=\"2020-12-09\"></ion-datetime>\n      </ion-item>\n      \n   \n      <ion-item>\n        <ion-input type=\"email_address\" placeholder=\"Usuario\" *ngIf=\"id==0\" [(ngModel)]=\"email_address\"></ion-input>\n        <ion-input type=\"email_address\" placeholder=\"Usuario\" *ngIf=\"id!=0\" readonly=\"true\" [(ngModel)]=\"email_address\"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-input type=\"password\" placeholder=\"Contrasena\" [(ngModel)]=\"password\" required pattern=\"(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$\"></ion-input>\n      </ion-item>\n\n      <ion-button expand=\"full\" class=\"ion-padding\" *ngIf=\"id==0\"  color=\"primary\" (click)=\"crudAction('Create')\" [disabled]=\"disabledbutton\">Registrar</ion-button>\n      <ion-button expand=\"full\" class=\"ion-padding\" *ngIf=\"id!=0\" color=\"primary\" (click)=\"crudAction('Update')\" [disabled]=\"disabledbutton\">Cargar</ion-button>\n  \n    </div>\n\n    <p style=\"font-size: 14px; color: #999;\" class=\"ion-padding\" *ngIf=\"id!=0\">\n      Deje la contraseña en blanco si no desea cambiarla\n    </p>\n      \n  </ion-list>\n\n</ion-content>\n\n\n\n\n\n");

/***/ }),

/***/ "./src/app/pages/crud/crud-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/crud/crud-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CrudPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudPageRoutingModule", function() { return CrudPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _crud_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crud.page */ "./src/app/pages/crud/crud.page.ts");




const routes = [
    {
        path: '',
        component: _crud_page__WEBPACK_IMPORTED_MODULE_3__["CrudPage"]
    }
];
let CrudPageRoutingModule = class CrudPageRoutingModule {
};
CrudPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrudPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/crud/crud.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/crud/crud.module.ts ***!
  \*******************************************/
/*! exports provided: CrudPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudPageModule", function() { return CrudPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _crud_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crud-routing.module */ "./src/app/pages/crud/crud-routing.module.ts");
/* harmony import */ var _crud_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crud.page */ "./src/app/pages/crud/crud.page.ts");







let CrudPageModule = class CrudPageModule {
};
CrudPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _crud_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrudPageRoutingModule"]
        ],
        declarations: [_crud_page__WEBPACK_IMPORTED_MODULE_6__["CrudPage"]]
    })
], CrudPageModule);



/***/ }),

/***/ "./src/app/pages/crud/crud.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/crud/crud.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NydWQvY3J1ZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/crud/crud.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/crud/crud.page.ts ***!
  \*****************************************/
/*! exports provided: CrudPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudPage", function() { return CrudPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/access-providers */ "./src/app/providers/access-providers.ts");





let CrudPage = class CrudPage {
    constructor(router, toastCtrl, alertCtrl, loadingCtrl, accsPrvds, actRoute) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.accsPrvds = accsPrvds;
        this.actRoute = actRoute;
        this.your_name = "";
        this.gender = "";
        this.date_birth = "";
        this.email_address = "";
        this.password = "";
        this.confirm_pass = "";
    }
    ngOnInit() {
        this.actRoute.params.subscribe((data) => {
            console.log(data);
            this.id = data.id;
            if (this.id != 0) {
                this.loadUser();
            }
        });
    }
    loadUser() {
        return new Promise(resolve => {
            let body = {
                aksi: 'load_single_data',
                id: this.id
            };
            this.accsPrvds.postData(body, 'proses_api.php').subscribe((res) => {
                this.your_name = res.result.your_name;
                this.gender = res.result.gender;
                this.date_birth = res.result.date_birthday;
                this.email_address = res.result.email_address;
            });
        });
    }
    ionViewDidEnter() {
        this.disabledbutton = false;
    }
    crudAction(a) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.your_name == "") {
                this.presentToast('Tu nombre es requerido');
            }
            else if (this.gender == "") {
                this.presentToast('El genero es requerico');
            }
            else if (this.date_birth == "") {
                this.presentToast('Se requiere la Fecha de Nacimiento');
            }
            else if (this.email_address == "") {
                this.presentToast('SE requiere el Correo');
            }
            else if (this.password == '' && this.id == 0) {
                this.presentToast('Se requiere la Contraseña');
            }
            else {
                this.disabledbutton = true;
                const loader = yield this.loadingCtrl.create({
                    message: 'Espere por favor....',
                });
                yield loader.present();
                return new Promise(resolve => {
                    let body = {
                        aksi: 'proses_crud',
                        id: this.id,
                        your_name: this.your_name,
                        gender: this.gender,
                        date_birth: this.date_birth,
                        email_address: this.email_address,
                        password: this.password,
                        action: a
                    };
                    this.accsPrvds.postData(body, 'proses_api.php').subscribe((res) => {
                        if (res.success == true) {
                            loader.dismiss();
                            this.disabledbutton = false;
                            this.presentToast(res.msg);
                            this.router.navigate(['/home2']);
                        }
                        else {
                            loader.dismiss();
                            this.disabledbutton = false;
                            this.presentAlert(res.msg, a);
                        }
                    }, (err) => {
                        loader.dismiss();
                        this.disabledbutton = false;
                        this.presentAlert('Timeout', a);
                    });
                });
            }
        });
    }
    presentToast(a) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: a,
                duration: 1500,
            });
            toast.present();
        });
    }
    presentAlert(a, b) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: a,
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Close',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Try Again',
                        handler: () => {
                            this.crudAction(b);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
CrudPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__["AccessProviders"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CrudPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crud',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crud.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crud/crud.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./crud.page.scss */ "./src/app/pages/crud/crud.page.scss")).default]
    })
], CrudPage);



/***/ })

}]);
//# sourceMappingURL=pages-crud-crud-module-es2015.js.map