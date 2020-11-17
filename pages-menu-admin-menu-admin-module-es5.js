function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-admin-menu-admin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-admin/menu-admin.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-admin/menu-admin.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMenuAdminMenuAdminPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"fuente\">\n    <ion-title>\n      ADMINISTRADOR  \n    </ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button  (click)=\"prosesLogout()\">\n        <ion-icon slot=\"icon-only\" name=\"exit\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar class=\"fuente1\" >\n      <ion-title size=\"large\">ADMINISTRADOR</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-slides pager=\"true\" class=\"punto\">\n    <ion-slide>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Calep1.png\" alt=\"\" >\n              REGISTRO DE USUARIOS \n            </p>\n            <ion-button class=\"punto\" routerLink=\"/home2\"   type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </ion-slide>\n\n\n    <ion-slide>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Calep1.png\" alt=\"\" >\n              REGISTRO DE ADMINISTRADOR\n            </p>\n            <ion-button class=\"punto\" routerLink=\"/registeradmin\"   type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </ion-slide>\n\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Prod.png\" alt=\"\" >\n              REGISTRAR ALIMENTOS REGION ALTIPLANO\n            </p>\n            <ion-button class=\"punto\" routerLink=\"/productoa\"   type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Prod.png\" alt=\"\" >\n              REGISTRAR ALIMENTOS REGION LLANOS\n            </p>\n            <ion-button class=\"punto\" routerLink=\"/productol\"   type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n\n\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Prod.png\" alt=\"\" >\n              REGISTRAR ALIMENTOS REGION VALLE\n            </p>\n            <ion-button class=\"punto\" routerLink=\"/productov\"   type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Calep2.png\" alt=\"\" >\n              REGISTRAR PEDIDO DIARIO REGION ALTIPLANO \n            </p>\n            <ion-button class=\"punto\" routerLink=\"/registro-pedi-dia\"   type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n     \n    </ion-slide>\n\n    <ion-slide>          \n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Calep2.png\" alt=\"\" >\n              REGISTRAR PEDIDO DIARIO REGION VALLE \n            </p>\n            <ion-button class=\"punto\"  routerLink=\"/registro-pedi-dia-v\"   type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n\n\n\n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Calep2.png\" alt=\"\" >\n              REGISTRAR PEDIDO DIARIO REGION LLANOS\n            </p>\n            <ion-button class=\"punto\"  routerLink=\"/registro-pedi-dia-ll\"  type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </ion-slide>\n\n    <ion-slide>  \n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Calep3.png\" alt=\"\" >\n              REGISTRAR PEDIDO SEMANAL REGION ALTIPLANO\n            </p>\n            <ion-button class=\"punto\"  routerLink=\"/registro-pedi-semanal-al\"  type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-slide>\n\n\n    \n    <ion-slide>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Calep3.png\" alt=\"\" >\n              REGISTRAR PEDIDO SEMANAL REGION LLANOS\n            </p>\n            <ion-button class=\"punto\"  routerLink=\"/registro-pedi-semanal-ll\"  type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </ion-slide>\n\n\n\n    \n    <ion-slide>\n  \n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Calep3.png\" alt=\"\" >\n              REGISTRAR PEDIDO SEMANAL REGION VALLE\n            </p>\n            <ion-button class=\"punto\"  routerLink=\"/registro-pedi-semanal-v\"  type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </ion-slide>\n\n    <ion-slide>\n  \n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p class=\"tam\">\n              <img class=\"icon\" src=\"assets/icon/Calep4.png\" alt=\"\" >\n              REGISTRO DEL MENU SEMANAL\n            </p>\n            <ion-button class=\"punto\"  routerLink=\"/intro\"  type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </ion-slide>\n\n\n  </ion-slides>\n\n  \n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/menu-admin/menu-admin-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/menu-admin/menu-admin-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: MenuAdminPageRoutingModule */

  /***/
  function srcAppPagesMenuAdminMenuAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuAdminPageRoutingModule", function () {
      return MenuAdminPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _menu_admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu-admin.page */
    "./src/app/pages/menu-admin/menu-admin.page.ts");

    var routes = [{
      path: '',
      component: _menu_admin_page__WEBPACK_IMPORTED_MODULE_3__["MenuAdminPage"]
    }];

    var MenuAdminPageRoutingModule = function MenuAdminPageRoutingModule() {
      _classCallCheck(this, MenuAdminPageRoutingModule);
    };

    MenuAdminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MenuAdminPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/menu-admin/menu-admin.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/menu-admin/menu-admin.module.ts ***!
    \*******************************************************/

  /*! exports provided: MenuAdminPageModule */

  /***/
  function srcAppPagesMenuAdminMenuAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuAdminPageModule", function () {
      return MenuAdminPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _menu_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./menu-admin-routing.module */
    "./src/app/pages/menu-admin/menu-admin-routing.module.ts");
    /* harmony import */


    var _menu_admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menu-admin.page */
    "./src/app/pages/menu-admin/menu-admin.page.ts");

    var MenuAdminPageModule = function MenuAdminPageModule() {
      _classCallCheck(this, MenuAdminPageModule);
    };

    MenuAdminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuAdminPageRoutingModule"]],
      declarations: [_menu_admin_page__WEBPACK_IMPORTED_MODULE_6__["MenuAdminPage"]]
    })], MenuAdminPageModule);
    /***/
  },

  /***/
  "./src/app/pages/menu-admin/menu-admin.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/menu-admin/menu-admin.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMenuAdminMenuAdminPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logoeje {\n  width: 15%;\n}\n\n.punto {\n  margin-bottom: 70px;\n}\n\n.tam {\n  background-color: #7db7f0;\n  background: linear-gradient(150deg, #7db7f0 0%, #aeb6bf 100%);\n  color: #194b7c;\n  font: oblique bold 70% cursive;\n  font-family: \"Segoe UI\";\n  padding: 9px;\n  width: 100%;\n  height: 400px;\n}\n\n.fuente {\n  font: oblique bold 2% cursive;\n  font-family: \"Segoe UI\";\n}\n\n.icon {\n  width: 270px;\n  height: 270px;\n  border-radius: 130%;\n  border: 15px solid #194b7c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS1hZG1pbi9DOlxcVXNlcnNcXHdhbXNzXFxEZXNrdG9wXFxwcnV5ZWN0byBlbWlcXHByb0dcXHByb3llY3RvMjcvc3JjXFxhcHBcXHBhZ2VzXFxtZW51LWFkbWluXFxtZW51LWFkbWluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWVudS1hZG1pbi9tZW51LWFkbWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSjs7QURJQTtFQUNJLG1CQUFBO0FDREo7O0FESUE7RUFDSSx5QkFBQTtFQUNBLDZEQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNESjs7QURJQTtFQUVJLDZCQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURLQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVudS1hZG1pbi9tZW51LWFkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvZWple1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIFxyXG5cclxufVxyXG5cclxuLnB1bnRve1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxufVxyXG5cclxuLnRhbXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAjN2RiN2YwIDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTBkZWcsICM3ZGI3ZjAgIDAlLCAgI2FlYjZiZiAgMTAwJSk7XHJcbiAgICBjb2xvcjogIzE5NGI3YztcclxuICAgIGZvbnQ6IG9ibGlxdWUgYm9sZCA3MCUgY3Vyc2l2ZTsgICBcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7ICAgXHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5mdWVudGV7XHJcbiAgICBcclxuICAgIGZvbnQ6IG9ibGlxdWUgYm9sZCAyJSBjdXJzaXZlOyAgIFxyXG4gICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIjtcclxufVxyXG5cclxuLmljb257XHJcbiAgICB3aWR0aDogMjcwcHg7XHJcbiAgICBoZWlnaHQ6IDI3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTMwJTtcclxuICAgIGJvcmRlcjogMTVweCBzb2xpZCAgIzE5NGI3YztcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiLmxvZ29lamUge1xuICB3aWR0aDogMTUlO1xufVxuXG4ucHVudG8ge1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuXG4udGFtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdkYjdmMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1MGRlZywgIzdkYjdmMCAwJSwgI2FlYjZiZiAxMDAlKTtcbiAgY29sb3I6ICMxOTRiN2M7XG4gIGZvbnQ6IG9ibGlxdWUgYm9sZCA3MCUgY3Vyc2l2ZTtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIjtcbiAgcGFkZGluZzogOXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLmZ1ZW50ZSB7XG4gIGZvbnQ6IG9ibGlxdWUgYm9sZCAyJSBjdXJzaXZlO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiO1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAyNzBweDtcbiAgaGVpZ2h0OiAyNzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTMwJTtcbiAgYm9yZGVyOiAxNXB4IHNvbGlkICMxOTRiN2M7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/menu-admin/menu-admin.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/menu-admin/menu-admin.page.ts ***!
    \*****************************************************/

  /*! exports provided: MenuAdminPage */

  /***/
  function srcAppPagesMenuAdminMenuAdminPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuAdminPage", function () {
      return MenuAdminPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var MenuAdminPage = /*#__PURE__*/function () {
      function MenuAdminPage(toastCtrl, storage, navCtrl) {
        _classCallCheck(this, MenuAdminPage);

        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
      }

      _createClass(MenuAdminPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "prosesLogout",
        value: function prosesLogout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.storage.clear();
                    this.navCtrl.navigateRoot(['/login']);
                    _context.next = 4;
                    return this.toastCtrl.create({
                      message: "Secion Cerrada",
                      duration: 1500
                    });

                  case 4:
                    toast = _context.sent;
                    toast.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return MenuAdminPage;
    }();

    MenuAdminPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    MenuAdminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu-admin',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./menu-admin.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-admin/menu-admin.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./menu-admin.page.scss */
      "./src/app/pages/menu-admin/menu-admin.page.scss"))["default"]]
    })], MenuAdminPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-menu-admin-menu-admin-module-es5.js.map