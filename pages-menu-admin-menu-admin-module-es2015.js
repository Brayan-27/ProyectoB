(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-admin-menu-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-admin/menu-admin.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-admin/menu-admin.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"fuente\">\n    <ion-title>\n      ADMINISTRADOR  \n    </ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button  (click)=\"prosesLogout()\">\n        <ion-icon slot=\"icon-only\" name=\"exit\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar class=\"fuente1\" >\n      <ion-title size=\"large\">ADMINISTRADOR</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-slides pager=\"true\" class=\"punto\">\n    <ion-slide>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Calep1.png\" alt=\"\" >\n              REGISTRO DE USUARIOS \n            </p>\n            <ion-button class=\"punto\" routerLink=\"/home2\"   type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </ion-slide>\n\n\n    <ion-slide>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Calep1.png\" alt=\"\" >\n              REGISTRO DE ADMINISTRADOR\n            </p>\n            <ion-button class=\"punto\" routerLink=\"/registeradmin\"   type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </ion-slide>\n\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Prod.png\" alt=\"\" >\n              REGISTRAR ALIMENTOS REGION ALTIPLANO\n            </p>\n            <ion-button class=\"punto\" routerLink=\"/productoa\"   type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Prod.png\" alt=\"\" >\n              REGISTRAR ALIMENTOS REGION LLANOS\n            </p>\n            <ion-button class=\"punto\" routerLink=\"/productol\"   type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n\n\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Prod.png\" alt=\"\" >\n              REGISTRAR ALIMENTOS REGION VALLE\n            </p>\n            <ion-button class=\"punto\" routerLink=\"/productov\"   type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Calep2.png\" alt=\"\" >\n              REGISTRAR PEDIDO DIARIO REGION ALTIPLANO \n            </p>\n            <ion-button class=\"punto\" routerLink=\"/registro-pedi-dia\"   type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n     \n    </ion-slide>\n\n    <ion-slide>          \n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Calep2.png\" alt=\"\" >\n              REGISTRAR PEDIDO DIARIO REGION VALLE \n            </p>\n            <ion-button class=\"punto\"  routerLink=\"/registro-pedi-dia-v\"   type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n\n\n\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Calep2.png\" alt=\"\" >\n              REGISTRAR PEDIDO DIARIO REGION LLANOS\n            </p>\n            <ion-button class=\"punto\"  routerLink=\"/registro-pedi-dia-ll\"  type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </ion-slide>\n\n    <ion-slide>  \n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Calep3.png\" alt=\"\" >\n              REGISTRAR PEDIDO SEMANAL REGION ALTIPLANO\n            </p>\n            <ion-button class=\"punto\"  routerLink=\"/registro-pedi-semanal-al\"  type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-slide>\n\n\n    \n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Calep3.png\" alt=\"\" >\n              REGISTRAR PEDIDO SEMANAL REGION LLANOS\n            </p>\n            <ion-button class=\"punto\"  routerLink=\"/registro-pedi-semanal-ll\"  type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </ion-slide>\n\n\n\n    \n    <ion-slide>\n  \n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Calep3.png\" alt=\"\" >\n              REGISTRAR PEDIDO SEMANAL REGION VALLE\n            </p>\n            <ion-button class=\"punto\"  routerLink=\"/registro-pedi-semanal-v\"  type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </ion-slide>\n\n    <ion-slide>\n  \n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Calep4.png\" alt=\"\" >\n              REGISTRO DEL MENU SEMANAL\n            </p>\n            <ion-button class=\"punto\"  routerLink=\"/intro\"  type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </ion-slide>\n\n\n  </ion-slides>\n\n  \n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/menu-admin/menu-admin-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/menu-admin/menu-admin-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MenuAdminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAdminPageRoutingModule", function() { return MenuAdminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _menu_admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-admin.page */ "./src/app/pages/menu-admin/menu-admin.page.ts");




const routes = [
    {
        path: '',
        component: _menu_admin_page__WEBPACK_IMPORTED_MODULE_3__["MenuAdminPage"]
    }
];
let MenuAdminPageRoutingModule = class MenuAdminPageRoutingModule {
};
MenuAdminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuAdminPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/menu-admin/menu-admin.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/menu-admin/menu-admin.module.ts ***!
  \*******************************************************/
/*! exports provided: MenuAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAdminPageModule", function() { return MenuAdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _menu_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-admin-routing.module */ "./src/app/pages/menu-admin/menu-admin-routing.module.ts");
/* harmony import */ var _menu_admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-admin.page */ "./src/app/pages/menu-admin/menu-admin.page.ts");







let MenuAdminPageModule = class MenuAdminPageModule {
};
MenuAdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuAdminPageRoutingModule"]
        ],
        declarations: [_menu_admin_page__WEBPACK_IMPORTED_MODULE_6__["MenuAdminPage"]]
    })
], MenuAdminPageModule);



/***/ }),

/***/ "./src/app/pages/menu-admin/menu-admin.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/menu-admin/menu-admin.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logoeje {\n  width: 15%;\n}\n\n.punto {\n  margin-bottom: 70px;\n}\n\n.tam {\n  background-color: #7db7f0;\n  background: linear-gradient(150deg, #7db7f0 0%, #aeb6bf 100%);\n  color: #194b7c;\n  font: oblique bold 70% cursive;\n  font-family: \"Segoe UI\";\n  padding: 9px;\n  width: 100%;\n  height: 400px;\n}\n\n.fuente {\n  font: oblique bold 2% cursive;\n  font-family: \"Segoe UI\";\n}\n\n.icon {\n  width: 270px;\n  height: 270px;\n  border-radius: 130%;\n  border: 15px solid #194b7c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS1hZG1pbi9DOlxcVXNlcnNcXHdhbXNzXFxEZXNrdG9wXFxwcnVlYmEgZWxlY3R0cm9uXFxwcm9HXFxwcm95ZWN0bzI3L3NyY1xcYXBwXFxwYWdlc1xcbWVudS1hZG1pblxcbWVudS1hZG1pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lbnUtYWRtaW4vbWVudS1hZG1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0o7O0FESUE7RUFDSSxtQkFBQTtBQ0RKOztBRElBO0VBQ0kseUJBQUE7RUFDQSw2REFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDREo7O0FESUE7RUFFSSw2QkFBQTtFQUNBLHVCQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtYWRtaW4vbWVudS1hZG1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb2VqZXtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi5wdW50b3tcclxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbn1cclxuXHJcbi50YW17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzdkYjdmMCA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTUwZGVnLCAjN2RiN2YwICAwJSwgICNhZWI2YmYgIDEwMCUpO1xyXG4gICAgY29sb3I6ICMxOTRiN2M7XHJcbiAgICBmb250OiBvYmxpcXVlIGJvbGQgNzAlIGN1cnNpdmU7ICAgXHJcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiOyAgIFxyXG4gICAgcGFkZGluZzogOXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4uZnVlbnRle1xyXG4gICAgXHJcbiAgICBmb250OiBvYmxpcXVlIGJvbGQgMiUgY3Vyc2l2ZTsgICBcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgaGVpZ2h0OiAyNzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzMCU7XHJcbiAgICBib3JkZXI6IDE1cHggc29saWQgICMxOTRiN2M7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsIi5sb2dvZWplIHtcbiAgd2lkdGg6IDE1JTtcbn1cblxuLnB1bnRvIHtcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cblxuLnRhbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZGI3ZjA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTBkZWcsICM3ZGI3ZjAgMCUsICNhZWI2YmYgMTAwJSk7XG4gIGNvbG9yOiAjMTk0YjdjO1xuICBmb250OiBvYmxpcXVlIGJvbGQgNzAlIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7XG4gIHBhZGRpbmc6IDlweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbi5mdWVudGUge1xuICBmb250OiBvYmxpcXVlIGJvbGQgMiUgY3Vyc2l2ZTtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIjtcbn1cblxuLmljb24ge1xuICB3aWR0aDogMjcwcHg7XG4gIGhlaWdodDogMjcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEzMCU7XG4gIGJvcmRlcjogMTVweCBzb2xpZCAjMTk0YjdjO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/menu-admin/menu-admin.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/menu-admin/menu-admin.page.ts ***!
  \*****************************************************/
/*! exports provided: MenuAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAdminPage", function() { return MenuAdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");




let MenuAdminPage = class MenuAdminPage {
    constructor(toastCtrl, storage, navCtrl) {
        this.toastCtrl = toastCtrl;
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
};
MenuAdminPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
MenuAdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-admin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu-admin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-admin/menu-admin.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu-admin.page.scss */ "./src/app/pages/menu-admin/menu-admin.page.scss")).default]
    })
], MenuAdminPage);



/***/ })

}]);
//# sourceMappingURL=pages-menu-admin-menu-admin-module-es2015.js.map