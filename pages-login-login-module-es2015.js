(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">INICIAR SESION</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager=\"true\">\n    <ion-slide class=\"slide-one\">\n\n      <ion-list>\n        <ion-item> \n          <ion-icon slot=\"start\" name=\"moon\"></ion-icon>\n          <ion-label>Activar el tema oscuro</ion-label>\n          <ion-toggle slot=\"end\" [ngModel]=\"darkMode\"  (ionChange)=\"cambio\"></ion-toggle>\n        </ion-item>\n      </ion-list>\n    \n     \n    \n      <ion-list>\n        <img class=\"icon\" src=\"assets/icon/eje.png\" alt=\"\" >\n        <ion-item class=\"\">\n          <ion-icon color=\"danger\" name=\"person-circle\"></ion-icon>\n          <ion-label position=\"stacked\" > USUARIO <span class=\"text-danger\">*</span></ion-label>\n          <ion-input type=\"email_address\" placeholder=\"Usuario\" [(ngModel)]=\"email_address\"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-icon color=\"danger\" name=\"key\"></ion-icon>\n          <ion-label position=\"stacked\" > CONTRASEÑA <span class=\"text-danger\">*</span></ion-label>\n          <ion-input type=\"password\" placeholder=\"Contraseña\" [(ngModel)]=\"password\"></ion-input>\n        </ion-item>\n        <ion-button expand=\"full\" class=\"ion-padding\" color=\"primary\" (click)=\"tryLogin()\">INGRESAR</ion-button>\n      \n        \n      <p class=\"ion-padding info-1\">\n        Para iniciar sesion  <br/>\n        si no tienes una cuenta haz clic, <span (click)=\"openRegister()\">Registro Nuevo</span>\n       \n      </p>\n    \n      </ion-list>\n\n\n    </ion-slide>\n\n    <ion-slide class=\"slide-two\">\n      <icon-item  src=\"../assets/icon/eje.png\" ></icon-item>\n      <p class=\"labelintro\">\n        ADMINISTRADOR  \n      </p>\n\n      <ion-item class=\"\">\n        <ion-icon color=\"danger\" name=\"person-circle\"></ion-icon>\n        <ion-label position=\"stacked\" > USUARIO <span class=\"text-danger\">*</span></ion-label>\n        <ion-input type=\"tex\" placeholder=\"Usuario\" [(ngModel)]=\"usuarioadmin\"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-icon color=\"danger\" name=\"key\"></ion-icon>\n        <ion-label position=\"stacked\" > CONTRASEÑA <span class=\"text-danger\">*</span></ion-label>\n        <ion-input type=\"password\" placeholder=\"Contraseña\" [(ngModel)]=\"passadmin\"></ion-input>\n      </ion-item>\n      \n      <ion-button expand=\"full\" class=\"ion-padding\" color=\"primary\" (click)=\"tryLoginAbmin()\">INGRESAR</ion-button>\n    \n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n\n");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-danger {\n  color: #cf3c4f;\n}\n\n.info-1 {\n  font-size: 14px;\n  color: #999;\n}\n\n.info-1 span {\n  color: blue;\n}\n\nion-slide {\n  height: 92vh;\n  flex-direction: column;\n}\n\nion-imag {\n  max-width: 50vw;\n  max-height: 50vh;\n  overflow: hidden;\n}\n\n.slide-one {\n  background: #fff;\n  color: #49776c;\n}\n\n.slide-two {\n  background: #49776c;\n  color: #fff;\n}\n\n.labelintro {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.labelintro span {\n  font-size: 14px;\n}\n\n.icon {\n  width: 50%;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFx3YW1zc1xcRGVza3RvcFxccHJ1eWVjdG8gZW1pXFxwcm9HXFxwcm95ZWN0bzI3L3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURLQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDRko7O0FES0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FES0E7RUFDSSxlQUFBO0FDRko7O0FES0E7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGV4dC1kYW5nZXJ7XHJcbiAgICBjb2xvcjogI2NmM2M0ZjtcclxufVxyXG5cclxuLmluZm8tMXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG59XHJcbi5pbmZvLTEgc3BhbntcclxuICAgIGNvbG9yOiBibHVlO1xyXG59XHJcblxyXG5cclxuLy9pb24gc2lkbGUgXHJcblxyXG5pb24tc2xpZGV7XHJcbiAgICBoZWlnaHQ6IDkydmg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5pb24taW1hZ3tcclxuICAgIG1heC13aWR0aDogNTB2dztcclxuICAgIG1heC1oZWlnaHQ6IDUwdmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc2xpZGUtb25lIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogICM0OTc3NmM7XHJcbn1cclxuXHJcbi5zbGlkZS10d28ge1xyXG4gICAgYmFja2dyb3VuZDogICM0OTc3NmM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmxhYmVsaW50cm8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5sYWJlbGludHJvIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uaWNvbntcclxuICAgIHdpZHRoOiA1MCU7IFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bzsgXHJcbn1cclxuXHJcblxyXG4gICAgIiwiLnRleHQtZGFuZ2VyIHtcbiAgY29sb3I6ICNjZjNjNGY7XG59XG5cbi5pbmZvLTEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uaW5mby0xIHNwYW4ge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuaW9uLXNsaWRlIHtcbiAgaGVpZ2h0OiA5MnZoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5pb24taW1hZyB7XG4gIG1heC13aWR0aDogNTB2dztcbiAgbWF4LWhlaWdodDogNTB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNsaWRlLW9uZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjNDk3NzZjO1xufVxuXG4uc2xpZGUtdHdvIHtcbiAgYmFja2dyb3VuZDogIzQ5Nzc2YztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5sYWJlbGludHJvIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmxhYmVsaW50cm8gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmljb24ge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/access-providers */ "./src/app/providers/access-providers.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");






let LoginPage = class LoginPage {
    constructor(router, toastCtrl, loadingCtrl, alertCtrl, accsPrvds, storage, navCtrl) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.accsPrvds = accsPrvds;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.email_address = "";
        this.password = "";
        //ADMIN
        this.usuarioadmin = "";
        this.passadmin = "";
    }
    ngOnInit() {
    }
    ionViewDiEnter() {
        this.disabledbutton = false;
    }
    ///ADMIN
    tryLoginAbmin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.usuarioadmin == "") {
                this.presentToast('El usuario es requerido');
            }
            else if (this.passadmin == "") {
                this.presentToast('La contrsena es requerido');
            }
            else {
                this.disabledbutton = true;
                const loader = yield this.loadingCtrl.create({
                    message: 'Prease wait.......',
                });
                yield loader.present();
                return new Promise(resolve => {
                    let body = {
                        aksi: 'proses_loginadim',
                        usuarioadmin: this.usuarioadmin,
                        passadmin: this.passadmin
                    };
                    this.accsPrvds.postData(body, 'proses_api.php').subscribe((res) => {
                        if (res.success == true) {
                            loader.dismiss();
                            this.disabledbutton = false;
                            this.presentToast('Inicio de Sesión Exitoso');
                            this.storage.set('storage_xxxadmin', res.result); //storag secion creacion
                            this.navCtrl.navigateRoot(['/menu-admin']);
                        }
                        else {
                            loader.dismiss();
                            this.disabledbutton = false;
                            this.presentToast('Email or password is wrong');
                        }
                    }, (err) => {
                        loader.dismiss();
                        this.disabledbutton = false;
                        this.presentAlert('Timeout');
                        //this.presentToast('registro ');
                        //this.navCtrl.navigateRoot(['/home']);
                    });
                });
            }
        });
    }
    //registro
    tryLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.email_address == "") {
                this.presentToast('Email is requerid');
            }
            else if (this.password == "") {
                this.presentToast('Password is requerid');
            }
            else {
                this.disabledbutton = true;
                const loader = yield this.loadingCtrl.create({
                    message: 'Prease wait.......',
                });
                yield loader.present();
                return new Promise(resolve => {
                    let body = {
                        aksi: 'proses_login',
                        email_address: this.email_address,
                        password: this.password
                    };
                    this.accsPrvds.postData(body, 'proses_api.php').subscribe((res) => {
                        if (res.success == true) {
                            loader.dismiss();
                            this.disabledbutton = false;
                            this.presentToast('Inicio de Sesión Exitoso');
                            this.storage.set('storage_xxx', res.result); //storag secion creacion
                            this.navCtrl.navigateRoot(['/home']);
                        }
                        else {
                            loader.dismiss();
                            this.disabledbutton = false;
                            this.presentToast('Email or password is wrong');
                        }
                    }, (err) => {
                        loader.dismiss();
                        this.disabledbutton = false;
                        this.presentAlert('Timeout');
                        //this.presentToast('registro ');
                        //this.navCtrl.navigateRoot(['/home']);
                    });
                });
            }
        });
    }
    presentToast(a) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: a,
                duration: 1500
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
                        }
                    }, {
                        text: 'Try Again',
                        handler: () => {
                            this.tryLogin();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    openRegister() {
        this.router.navigate(['/register']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__["AccessProviders"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map