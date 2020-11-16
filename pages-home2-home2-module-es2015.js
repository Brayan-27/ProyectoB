(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home2-home2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home2/home2.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home2/home2.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>ADMINISTRADOR</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n \n\n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\" (click)=\"prosesLogout()\">\n        <ion-icon slot=\"icon-only\" name=\"exit\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      Control de Usuarios Registrados \n    </ion-label>\n  </ion-item>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\"></ion-refresher-content>\n  </ion-refresher>\n\n  \n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button size=\"small\" (click)=\"openCrud('0')\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-list>\n\n\n    <ion-item-sliding *ngFor=\"let user of users\">\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img class=\"icon\" src=\"assets/icon/usA.png\" alt=\"\" >\n        </ion-avatar>\n        <ion-label>{{user.your_name}}</ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"openCrud(user.id_user)\">Modificar</ion-item-option>\n        <ion-item-option (click)=\"delData(user.id_user)\" color=\"danger\">ELIMINAR</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/home2/home2-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/home2/home2-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: Home2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home2PageRoutingModule", function() { return Home2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home2.page */ "./src/app/pages/home2/home2.page.ts");




const routes = [
    {
        path: '',
        component: _home2_page__WEBPACK_IMPORTED_MODULE_3__["Home2Page"]
    }
];
let Home2PageRoutingModule = class Home2PageRoutingModule {
};
Home2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Home2PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home2/home2.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/home2/home2.module.ts ***!
  \*********************************************/
/*! exports provided: Home2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home2PageModule", function() { return Home2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home2-routing.module */ "./src/app/pages/home2/home2-routing.module.ts");
/* harmony import */ var _home2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home2.page */ "./src/app/pages/home2/home2.page.ts");







let Home2PageModule = class Home2PageModule {
};
Home2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Home2PageRoutingModule"]
        ],
        declarations: [_home2_page__WEBPACK_IMPORTED_MODULE_6__["Home2Page"]]
    })
], Home2PageModule);



/***/ }),

/***/ "./src/app/pages/home2/home2.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/home2/home2.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUyL2hvbWUyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/home2/home2.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home2/home2.page.ts ***!
  \*******************************************/
/*! exports provided: Home2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home2Page", function() { return Home2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/access-providers */ "./src/app/providers/access-providers.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");






let Home2Page = class Home2Page {
    constructor(router, toastCtrl, alertCtrl, loadingCtrl, accsPrvds, navCtrl, storage) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.accsPrvds = accsPrvds;
        this.navCtrl = navCtrl;
        this.storage = storage;
        //datastorage: any;
        //name: string;
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
        this.loadUsers();
    }
    prosesLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.clear();
            this.navCtrl.navigateRoot(['/login']);
            const toast = yield this.toastCtrl.create({
                message: 'Sesion Cerrada',
                duration: 1500
            });
            toast.present();
        });
    }
    loadUsers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                let body = {
                    aksi: 'load_users',
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
    doRefresh(event) {
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
            this.loadUsers().then(() => {
                //event.target.complete();
            });
        }, 500);
    }
    delData(a) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                let body = {
                    aksi: 'del_users',
                    id: a
                };
                this.accsPrvds.postData(body, 'proses_api.php').subscribe((res) => {
                    if (res.success == true) {
                        this.presentToast('Usuario Eliminado');
                        this.ionViewDidEnter();
                    }
                    else {
                        this.presentToast('Error al Eliminar');
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
    openCrud(a) {
        this.router.navigate(['/crud/' + a]);
    }
};
Home2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__["AccessProviders"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
Home2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home2/home2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home2.page.scss */ "./src/app/pages/home2/home2.page.scss")).default]
    })
], Home2Page);



/***/ })

}]);
//# sourceMappingURL=pages-home2-home2-module-es2015.js.map