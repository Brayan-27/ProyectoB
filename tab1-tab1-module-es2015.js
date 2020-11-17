(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab1/tab1.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab1/tab1.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"fuente1\" >\n    <ion-title>\n      MENU SEMANAL\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button  (click)=\"prosesLogout()\">\n        <ion-icon slot=\"icon-only\" name=\"exit\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <p class=\"tam\">\n          <ion-title>\n            Usuario: {{name}}\n          </ion-title>\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  \n  <ion-item>\n    <img class=\"icon\" src=\"assets/icon/paisaje.png\" alt=\"\" >\n    <ion-icon color=\"danger\" name=\"reader\"></ion-icon>\n    <ion-label>\n      REGION ALTIPLANO\n    </ion-label>\n  </ion-item>\n  <ion-col>\n    <ion-button class=\"my-button\" routerLink=\"/menu-altiplano\" name=\"document-text\"  type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n  </ion-col>\n  \n\n  <ion-item>\n    <img class=\"icon\" src=\"assets/icon/naturaleza.png\" alt=\"\" >\n    <ion-icon color=\"danger\" name=\"reader\"></ion-icon>\n    <ion-label>\n      REGION VALLE\n    </ion-label>\n  </ion-item>\n  <ion-col>\n    <ion-button class=\"my-button\" routerLink=\"/menu-valle\"  type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n  </ion-col>\n\n \n  <ion-item>\n    <img class=\"icon\" src=\"assets/icon/selva.png\" alt=\"\" >\n    <ion-icon color=\"danger\" name=\"reader\"></ion-icon>\n    <ion-label>\n      REGION LLANOS\n    </ion-label>\n  </ion-item>\n  <ion-col>\n    <ion-button class=\"my-button\" routerLink=\"/menu-llanos\" type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n  </ion-col>\n\n \n\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./src/app/pages/tab1/tab1-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tab1/tab1-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/pages/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tab1/tab1.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.module.ts ***!
  \*******************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/pages/tab1/tab1-routing.module.ts");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/pages/tab1/tab1.page.ts");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab1PageRoutingModule"]
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/pages/tab1/tab1.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-button {\n  font: oblique bold 100% cursive;\n  font-family: \"Segoe UI\";\n}\n\n.fuente1 {\n  font: oblique bold 2% cursive;\n  font-family: \"Segoe UI\";\n}\n\n.icon {\n  width: 5%;\n}\n\n.logoeje {\n  width: 15%;\n}\n\n.logoeje {\n  width: 15%;\n}\n\n.tam {\n  background-color: #49776c;\n  background: linear-gradient(90deg, #49776c 0%, #4d71d7 100%);\n  color: #000000;\n  font: oblique bold 100% cursive;\n  font-family: \"Segoe UI\";\n  padding: 10px;\n  width: 100%;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFiMS9DOlxcVXNlcnNcXHdhbXNzXFxEZXNrdG9wXFxwcnV5ZWN0byBlbWlcXHByb0dcXHByb3llY3RvMjcvc3JjXFxhcHBcXHBhZ2VzXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLCtCQUFBO0VBQ0EsdUJBQUE7QUNBSjs7QURHQTtFQUVJLDZCQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURLQTtFQUNJLFNBQUE7QUNGSjs7QURPQTtFQUNJLFVBQUE7QUNKSjs7QURTQTtFQUNJLFVBQUE7QUNOSjs7QURXQTtFQUNJLHlCQUFBO0VBQ0EsNERBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1JKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1idXR0b257XHJcbiAgIFxyXG4gICAgZm9udDogb2JsaXF1ZSBib2xkIDEwMCUgY3Vyc2l2ZTsgICBcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7ICAgXHJcbn1cclxuXHJcbi5mdWVudGUxe1xyXG4gICAgXHJcbiAgICBmb250OiBvYmxpcXVlIGJvbGQgMiUgY3Vyc2l2ZTsgICBcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7IFxyXG5cclxufVxyXG5cclxuLmljb257XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi5sb2dvZWple1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIFxyXG5cclxufVxyXG5cclxuLmxvZ29lamV7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4udGFte1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5Nzc2YztcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywjNDk3NzZjIDAlLCAjNGQ3MWQ3IDEwMCUpO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250OiBvYmxpcXVlIGJvbGQgMTAwJSBjdXJzaXZlOyAgIFxyXG4gICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIjsgICBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDVweDtcclxufVxyXG5cclxuXHJcbiAgXHJcbiAgIiwiLm15LWJ1dHRvbiB7XG4gIGZvbnQ6IG9ibGlxdWUgYm9sZCAxMDAlIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7XG59XG5cbi5mdWVudGUxIHtcbiAgZm9udDogb2JsaXF1ZSBib2xkIDIlIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDUlO1xufVxuXG4ubG9nb2VqZSB7XG4gIHdpZHRoOiAxNSU7XG59XG5cbi5sb2dvZWplIHtcbiAgd2lkdGg6IDE1JTtcbn1cblxuLnRhbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTc3NmM7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzQ5Nzc2YyAwJSwgIzRkNzFkNyAxMDAlKTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQ6IG9ibGlxdWUgYm9sZCAxMDAlIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/tab1/tab1.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.ts ***!
  \*****************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/access-providers */ "./src/app/providers/access-providers.ts");






let Tab1Page = class Tab1Page {
    constructor(router, toastCtrl, loadingCtrl, alertCtrl, accsPrvds, storage, navCtrl) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.accsPrvds = accsPrvds;
        this.storage = storage;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    prosesLogout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.clear();
            this.navCtrl.navigateRoot(['/login']);
            const toast = yield this.toastCtrl.create({
                message: "Secion Cerrada",
                duration: 1500
            });
            toast.present();
        });
    }
    ionViewDidEnter() {
        this.storage.get('storage_xxx').then((res) => {
            console.log(res);
            this.datastorage = res;
            this.name = this.datastorage.your_name;
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_5__["AccessProviders"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/pages/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map