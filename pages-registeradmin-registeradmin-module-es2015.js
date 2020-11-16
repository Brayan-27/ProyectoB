(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registeradmin-registeradmin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registeradmin/registeradmin.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registeradmin/registeradmin.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      REGISTRO DE ADMINISTRADOR\n    </ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    \n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      Registrar Administrador\n    </ion-label>\n  </ion-item>\n\n  <ion-list>\n\n    <div>\n      <ion-item>\n        <ion-input type=\"text\" placeholder=\"Usuario\" [(ngModel)]=\"usuarioadmin\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type=\"password\" placeholder=\"Contraseña\" [(ngModel)]=\"passadmin\" required pattern=\"(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$\"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-input type=\"password\" placeholder=\"Confime su contraseña\" [(ngModel)]=\"confirm_passadmin\" required pattern=\"(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$\"></ion-input>\n      </ion-item>\n\n      <ion-button expand=\"full\" class=\"ion-padding\" color=\"primary\" (click)=\"tryRegisteradmin()\" [disabled]=\"disabledButton\">REGISTRAR</ion-button>\n\n      <p style=\"font-size: 14px; color: #999;\" class=\"ion-padding\" >\n        Ingrese Maximo 8 Caracteres.<br/>\n        Ingrese un Numero.<br/>\n        Ingrese una Mayuscula.<br/>\n        Ingrese un Singno.<br/>\n      </p>\n\n      <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n        <ion-label>\n          Visualizar Registro de Administradores\n        </ion-label>\n\n      <ion-button expand=\"full\" class=\"ion-padding\" color=\"primary\" routerLink=\"/verusuadmin\" >VER DATOS DEL ADMIN</ion-button>\n  \n    </div>\n\n  \n      \n  </ion-list>\n\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/registeradmin/registeradmin-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/registeradmin/registeradmin-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: RegisteradminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteradminPageRoutingModule", function() { return RegisteradminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registeradmin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registeradmin.page */ "./src/app/pages/registeradmin/registeradmin.page.ts");




const routes = [
    {
        path: '',
        component: _registeradmin_page__WEBPACK_IMPORTED_MODULE_3__["RegisteradminPage"]
    }
];
let RegisteradminPageRoutingModule = class RegisteradminPageRoutingModule {
};
RegisteradminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisteradminPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/registeradmin/registeradmin.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/registeradmin/registeradmin.module.ts ***!
  \*************************************************************/
/*! exports provided: RegisteradminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteradminPageModule", function() { return RegisteradminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registeradmin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registeradmin-routing.module */ "./src/app/pages/registeradmin/registeradmin-routing.module.ts");
/* harmony import */ var _registeradmin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registeradmin.page */ "./src/app/pages/registeradmin/registeradmin.page.ts");







let RegisteradminPageModule = class RegisteradminPageModule {
};
RegisteradminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registeradmin_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisteradminPageRoutingModule"]
        ],
        declarations: [_registeradmin_page__WEBPACK_IMPORTED_MODULE_6__["RegisteradminPage"]]
    })
], RegisteradminPageModule);



/***/ }),

/***/ "./src/app/pages/registeradmin/registeradmin.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/registeradmin/registeradmin.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyYWRtaW4vcmVnaXN0ZXJhZG1pbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/registeradmin/registeradmin.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/registeradmin/registeradmin.page.ts ***!
  \***********************************************************/
/*! exports provided: RegisteradminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteradminPage", function() { return RegisteradminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/access-providers */ "./src/app/providers/access-providers.ts");





let RegisteradminPage = class RegisteradminPage {
    constructor(router, toastCtrl, loadingCtrl, alertCtrl, accsPrvds) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.accsPrvds = accsPrvds;
        this.usuarioadmin = "";
        this.passadmin = "";
        this.confirm_passadmin = "";
    }
    ngOnInit() {
    }
    ionViewDiEnter() {
        this.disabledButton = false;
    }
    tryRegisteradmin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.usuarioadmin == "") {
                this.presentToast('Tu nombre es requerido');
            }
            else if (this.passadmin == "") {
                this.presentToast('Se requiere la Contraseña');
            }
            else if (this.confirm_passadmin != this.passadmin) {
                this.presentToast('Se requiere que confirme su Contraseña');
            }
            else {
                this.disabledButton = true;
                const loader = yield this.loadingCtrl.create({
                    message: 'Espere por favor....',
                });
                yield loader.present();
                return new Promise(resolve => {
                    let body = {
                        aksi: 'proses_registeradmin',
                        usuarioadmin: this.usuarioadmin,
                        passadmin: this.passadmin
                    };
                    this.accsPrvds.postData(body, 'proses_api.php').subscribe((res) => {
                        if (res.success == true) {
                            loader.dismiss();
                            this.disabledButton = false;
                            this.presentToast(res.msg);
                            this.router.navigate(['/menu-admin']);
                        }
                        else {
                            loader.dismiss();
                            this.disabledButton = false;
                            this.presentToast(res.msg);
                        }
                    }, (err) => {
                        loader.dismiss();
                        //this.presentToast('registro ');
                        //this.router.navigate(['/login']);
                        this.disabledButton = false;
                        this.presentAlert('Timeout');
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
                position: 'top'
            });
            toast.present();
        });
    }
    presentAlert(a) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: a,
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Close',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                            //action
                        }
                    }, {
                        text: 'Try Again',
                        handler: () => {
                            this.tryRegisteradmin();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
RegisteradminPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__["AccessProviders"] }
];
RegisteradminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registeradmin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registeradmin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registeradmin/registeradmin.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registeradmin.page.scss */ "./src/app/pages/registeradmin/registeradmin.page.scss")).default]
    })
], RegisteradminPage);



/***/ })

}]);
//# sourceMappingURL=pages-registeradmin-registeradmin-module-es2015.js.map