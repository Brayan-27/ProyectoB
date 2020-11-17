function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab2/tab2.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab2/tab2.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"fuente\">\n    <ion-title>\n      PEDIDO DIARIO  \n    </ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button  (click)=\"prosesLogout()\">\n        <ion-icon slot=\"icon-only\" name=\"exit\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar class=\"fuente1\" >\n      <ion-title size=\"large\">PEDIDO DIARIO</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <p class=\"tam\">\n          <img class=\"icon\" src=\"assets/icon/pollo.png\" alt=\"\" >\n          PEDIDO DIARIO REGION ALTIPLANO\n        </p>\n        <ion-button class=\"hola\" routerLink=\"/pedido-r-alt\"   type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <p class=\"tam\">\n          <img class=\"icon\" src=\"assets/icon/taza.png\" alt=\"\" >\n          PEDIDO DIARIO REGION VALLE  \n        </p>\n        <ion-button class=\"hola\" routerLink=\"/pedido-r-vall\"   type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n \n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <p class=\"tam\">\n          <img class=\"icon\" src=\"assets/icon/hor.png\" alt=\"\" >\n          PEDIDO DIARIO REGION LLANOS\n        </p>\n        <ion-button class=\"hola\" routerLink=\"/pedido-r-llan\"   type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  \n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/tab2/tab2-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/tab2/tab2-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: Tab2PageRoutingModule */

  /***/
  function srcAppPagesTab2Tab2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
      return Tab2PageRoutingModule;
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


    var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/pages/tab2/tab2.page.ts");

    var routes = [{
      path: '',
      component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
    }];

    var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
      _classCallCheck(this, Tab2PageRoutingModule);
    };

    Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tab2/tab2.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/tab2/tab2.module.ts ***!
    \*******************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppPagesTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
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


    var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab2-routing.module */
    "./src/app/pages/tab2/tab2-routing.module.ts");
    /* harmony import */


    var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/pages/tab2/tab2.page.ts");

    var Tab2PageModule = function Tab2PageModule() {
      _classCallCheck(this, Tab2PageModule);
    };

    Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab2PageRoutingModule"]],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/pages/tab2/tab2.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/tab2/tab2.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logoeje {\n  width: 15%;\n}\n\n.tam {\n  background-color: #49776c;\n  background: linear-gradient(90deg, #49776c 0%, #4d71d7 100%);\n  color: #ffffff;\n  font: oblique bold 100% cursive;\n  font-family: \"Segoe UI\";\n  font-size: 13px;\n  padding: 9px;\n  width: 100%;\n  height: 100px;\n}\n\n.fuente {\n  font: oblique bold 2% cursive;\n  font-family: \"Segoe UI\";\n}\n\n.icon {\n  width: 80px;\n  height: 80px;\n  border-radius: 80%;\n  border: 7px solid #ffffff;\n}\n\n.hola {\n  border-radius: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFiMi9DOlxcVXNlcnNcXHdhbXNzXFxEZXNrdG9wXFxwcnV5ZWN0byBlbWlcXHByb0dcXHByb3llY3RvMjcvc3JjXFxhcHBcXHBhZ2VzXFx0YWIyXFx0YWIyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUNDSjs7QURJQTtFQUNJLHlCQUFBO0VBQ0EsNERBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNESjs7QURNQTtFQUVJLDZCQUFBO0VBQ0EsdUJBQUE7QUNKSjs7QURRQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0xKOztBRFNBO0VBQ0ksbUJBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb2VqZXtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi50YW17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk3NzZjO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNDk3NzZjIDAlLCAjNGQ3MWQ3IDEwMCUpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250OiBvYmxpcXVlIGJvbGQgMTAwJSBjdXJzaXZlOyAgIFxyXG4gICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIjsgXHJcbiAgICBmb250LXNpemU6IDEzcHg7ICAgXHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4uZnVlbnRle1xyXG4gICAgXHJcbiAgICBmb250OiBvYmxpcXVlIGJvbGQgMiUgY3Vyc2l2ZTsgICBcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7XHJcbiAgIFxyXG59XHJcblxyXG4uaWNvbntcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogODAlO1xyXG4gICAgYm9yZGVyOiA3cHggc29saWQgI2ZmZmZmZjtcclxufVxyXG5cclxuXHJcbi5ob2xhe1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuXHJcbiIsIi5sb2dvZWplIHtcbiAgd2lkdGg6IDE1JTtcbn1cblxuLnRhbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTc3NmM7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzQ5Nzc2YyAwJSwgIzRkNzFkNyAxMDAlKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQ6IG9ibGlxdWUgYm9sZCAxMDAlIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogOXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmZ1ZW50ZSB7XG4gIGZvbnQ6IG9ibGlxdWUgYm9sZCAyJSBjdXJzaXZlO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiO1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDgwJTtcbiAgYm9yZGVyOiA3cHggc29saWQgI2ZmZmZmZjtcbn1cblxuLmhvbGEge1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/tab2/tab2.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/tab2/tab2.page.ts ***!
    \*****************************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppPagesTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
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

    var Tab2Page = /*#__PURE__*/function () {
      function Tab2Page(toastCtrl, storage, navCtrl) {
        _classCallCheck(this, Tab2Page);

        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
      }

      _createClass(Tab2Page, [{
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

      return Tab2Page;
    }();

    Tab2Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab2',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab2/tab2.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/pages/tab2/tab2.page.scss"))["default"]]
    })], Tab2Page);
    /***/
  }
}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map