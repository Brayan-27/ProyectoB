(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-verusuadmin-verusuadmin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verusuadmin/verusuadmin.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verusuadmin/verusuadmin.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>REGISTRO DE ADMIN</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      Datos de Administradores Registrados\n    </ion-label>\n  </ion-item>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshadmin($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\"></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let user of users\">\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img class=\"icon\" src=\"assets/icon/usA.png\" alt=\"\" >\n        </ion-avatar>\n        <ion-label>{{user.usuarioadmin}}</ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option>MODIFICAR</ion-item-option>\n        <ion-item-option (click)=\"delDataadmin(user.id_usera)\" color=\"danger\">ELIMINAR</ion-item-option>\n      </ion-item-options> \n\n    </ion-item-sliding>\n  </ion-list>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/verusuadmin/verusuadmin-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/verusuadmin/verusuadmin-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: VerusuadminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerusuadminPageRoutingModule", function() { return VerusuadminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _verusuadmin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verusuadmin.page */ "./src/app/pages/verusuadmin/verusuadmin.page.ts");




const routes = [
    {
        path: '',
        component: _verusuadmin_page__WEBPACK_IMPORTED_MODULE_3__["VerusuadminPage"]
    }
];
let VerusuadminPageRoutingModule = class VerusuadminPageRoutingModule {
};
VerusuadminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerusuadminPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/verusuadmin/verusuadmin.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/verusuadmin/verusuadmin.module.ts ***!
  \*********************************************************/
/*! exports provided: VerusuadminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerusuadminPageModule", function() { return VerusuadminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _verusuadmin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verusuadmin-routing.module */ "./src/app/pages/verusuadmin/verusuadmin-routing.module.ts");
/* harmony import */ var _verusuadmin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verusuadmin.page */ "./src/app/pages/verusuadmin/verusuadmin.page.ts");







let VerusuadminPageModule = class VerusuadminPageModule {
};
VerusuadminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verusuadmin_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerusuadminPageRoutingModule"]
        ],
        declarations: [_verusuadmin_page__WEBPACK_IMPORTED_MODULE_6__["VerusuadminPage"]]
    })
], VerusuadminPageModule);



/***/ }),

/***/ "./src/app/pages/verusuadmin/verusuadmin.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/verusuadmin/verusuadmin.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlcnVzdWFkbWluL3ZlcnVzdWFkbWluLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/verusuadmin/verusuadmin.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/verusuadmin/verusuadmin.page.ts ***!
  \*******************************************************/
/*! exports provided: VerusuadminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerusuadminPage", function() { return VerusuadminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/access-providers */ "./src/app/providers/access-providers.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");






let VerusuadminPage = class VerusuadminPage {
    constructor(router, toastCtrl, alertCtrl, loadingCtrl, accsPrvds, navCtrl, storage) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.accsPrvds = accsPrvds;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.users = [];
        this.limit = 13;
        this.start = 0;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        //this.storage.get('storage_xxx').then((res)=>{
        //console.log(res);
        //this.datastorage = res;
        //this.name = this.datastorage.your_name;
        //});
        this.start = 0;
        this.users = [];
        this.loadUsersadmin();
    }
    loadUsersadmin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                let body = {
                    aksi: 'load_usersadmin',
                    start: this.start,
                    limit: this.limit
                };
                this.accsPrvds.postData(body, 'proses_api.php').subscribe((res) => {
                    for (let datas of res.result) {
                        this.users.push(datas);
                    }
                    resolve(true);
                });
            });
        });
    }
    doRefreshadmin(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loader = yield this.loadingCtrl.create({
                message: 'please wait....',
            });
            yield loader.present();
            this.ionViewDidEnter();
            event.target.complete();
            loader.dismiss();
        });
    }
    loadData() {
        this.start += this.limit;
        setTimeout(() => {
            this.loadUsersadmin().then(() => {
                //event.target.complete();
            });
        }, 500);
    }
    delDataadmin(a) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                let body = {
                    aksi: 'del_usersadmin',
                    id: a
                };
                this.accsPrvds.postData(body, 'proses_api.php').subscribe((res) => {
                    if (res.success == true) {
                        this.presentToast('Administrador Eliminado');
                        this.ionViewDidEnter();
                    }
                    else {
                        this.presentToast('delete error');
                    }
                });
            });
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
};
VerusuadminPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__["AccessProviders"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
VerusuadminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verusuadmin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./verusuadmin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verusuadmin/verusuadmin.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./verusuadmin.page.scss */ "./src/app/pages/verusuadmin/verusuadmin.page.scss")).default]
    })
], VerusuadminPage);



/***/ })

}]);
//# sourceMappingURL=pages-verusuadmin-verusuadmin-module-es2015.js.map