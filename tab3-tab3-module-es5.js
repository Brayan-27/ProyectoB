function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab3/tab3.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab3/tab3.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      PEDIDO SEMANAL\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button  (click)=\"prosesLogout()\">\n        <ion-icon slot=\"icon-only\" name=\"exit\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content [fullscreen]=\"true\" padding>\n  <ion-header collapse=\"condense\">\n    <ion-toolbar class=\"fuente1\" >\n      <ion-title size=\"large\">PEDIDO DIARIO</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <p class=\"tam\">\n          <img class=\"icon\" src=\"assets/icon/comi1.png\" alt=\"\" >\n          PEDIDO SEMANAL REGION ALTIPLANO\n        </p>\n        <ion-button class=\"hola\" routerLink=\"/pedido-s-a\"   type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <p class=\"tam\">\n          <img class=\"icon\" src=\"assets/icon/comi2.png\" alt=\"\" >\n          PEDIDO SEMANAL REGION VALLE\n        </p>\n        <ion-button class=\"hola\" routerLink=\"/pedido-s-v\"   type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <p class=\"tam\">\n          <img class=\"icon\" src=\"assets/icon/comi3.png\" alt=\"\" >\n          PEDIDO SEMANAL REGION LLANOS\n        </p>\n        <ion-button class=\"hola\" routerLink=\"/pedido-s-ll\"   type=\"submit\" expand=\"block\">INGRESAR</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n \n  \n</ion-content>\n\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/pages/tab3/tab3-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/tab3/tab3-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: Tab3PageRoutingModule */

  /***/
  function srcAppPagesTab3Tab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
      return Tab3PageRoutingModule;
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


    var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/pages/tab3/tab3.page.ts");

    var routes = [{
      path: '',
      component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
    }];

    var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
      _classCallCheck(this, Tab3PageRoutingModule);
    };

    Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab3PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tab3/tab3.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/tab3/tab3.module.ts ***!
    \*******************************************/

  /*! exports provided: Tab3PageModule */

  /***/
  function srcAppPagesTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
      return Tab3PageModule;
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


    var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab3-routing.module */
    "./src/app/pages/tab3/tab3-routing.module.ts");
    /* harmony import */


    var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab3.page */
    "./src/app/pages/tab3/tab3.page.ts");

    var Tab3PageModule = function Tab3PageModule() {
      _classCallCheck(this, Tab3PageModule);
    };

    Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tab3_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab3PageRoutingModule"]],
      declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })], Tab3PageModule);
    /***/
  },

  /***/
  "./src/app/pages/tab3/tab3.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/tab3/tab3.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logoeje {\n  width: 15%;\n}\n\n.tam {\n  background-color: #49776c;\n  background: linear-gradient(90deg, #49776c 0%, #4d71d7 100%);\n  color: #ffffff;\n  font: oblique bold 100% cursive;\n  font-family: \"Segoe UI\";\n  font-size: 12px;\n  padding: 10px;\n  width: 100%;\n  height: 100px;\n}\n\n.fuente {\n  font: oblique bold 2% cursive;\n  font-family: \"Segoe UI\";\n}\n\n.icon {\n  width: 80px;\n  height: 80px;\n  border-radius: 80%;\n  border: 7px solid #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFiMy9DOlxcVXNlcnNcXHdhbXNzXFxEZXNrdG9wXFxwcnVlYmEgZWxlY3R0cm9uXFxwcm9HXFxwcm95ZWN0bzI3L3NyY1xcYXBwXFxwYWdlc1xcdGFiM1xcdGFiMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYjMvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0o7O0FESUE7RUFDSSx5QkFBQTtFQUNBLDREQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDREo7O0FESUE7RUFFSSw2QkFBQTtFQUNBLHVCQUFBO0FDRko7O0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb2VqZXtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi50YW17XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk3NzZjO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCM0OTc3NmMgMCUsICM0ZDcxZDcgMTAwJSk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQ6IG9ibGlxdWUgYm9sZCAxMDAlIGN1cnNpdmU7ICAgXHJcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiOyBcclxuICAgIGZvbnQtc2l6ZTogMTJweDsgICBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgfVxyXG5cclxuLmZ1ZW50ZXtcclxuICAgIFxyXG4gICAgZm9udDogb2JsaXF1ZSBib2xkIDIlIGN1cnNpdmU7ICAgXHJcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiOyBcclxufVxyXG5cclxuLmljb257XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDgwJTtcclxuICAgIGJvcmRlcjogN3B4IHNvbGlkICNmZmZmZmY7XHJcbn1cclxuXHJcblxyXG4iLCIubG9nb2VqZSB7XG4gIHdpZHRoOiAxNSU7XG59XG5cbi50YW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk3NzZjO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0OTc3NmMgMCUsICM0ZDcxZDcgMTAwJSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250OiBvYmxpcXVlIGJvbGQgMTAwJSBjdXJzaXZlO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uZnVlbnRlIHtcbiAgZm9udDogb2JsaXF1ZSBib2xkIDIlIGN1cnNpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogODAlO1xuICBib3JkZXI6IDdweCBzb2xpZCAjZmZmZmZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/tab3/tab3.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/tab3/tab3.page.ts ***!
    \*****************************************/

  /*! exports provided: Tab3Page */

  /***/
  function srcAppPagesTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
      return Tab3Page;
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

    var Tab3Page = /*#__PURE__*/function () {
      function Tab3Page(toastCtrl, storage, navCtrl) {
        _classCallCheck(this, Tab3Page);

        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
      }

      _createClass(Tab3Page, [{
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

      return Tab3Page;
    }();

    Tab3Page.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab3',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab3/tab3.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab3.page.scss */
      "./src/app/pages/tab3/tab3.page.scss"))["default"]]
    })], Tab3Page);
    /***/
  }
}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map