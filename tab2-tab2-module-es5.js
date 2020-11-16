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


    __webpack_exports__["default"] = ".logoeje {\n  width: 15%;\n}\n\n.tam {\n  background-color: #49776c;\n  background: linear-gradient(90deg, #49776c 0%, #4d71d7 100%);\n  color: #ffffff;\n  font: oblique bold 100% cursive;\n  font-family: \"Segoe UI\";\n  font-size: 13px;\n  padding: 9px;\n  width: 100%;\n  height: 100px;\n}\n\n.fuente {\n  font: oblique bold 2% cursive;\n  font-family: \"Segoe UI\";\n}\n\n.icon {\n  width: 80px;\n  height: 80px;\n  border-radius: 80%;\n  border: 7px solid #ffffff;\n}\n\n.hola {\n  border-radius: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFiMi9DOlxcVXNlcnNcXHdhbXNzXFxEZXNrdG9wXFxwcnVlYmEgZWxlY3R0cm9uXFxwcm9HXFxwcm95ZWN0bzI3L3NyY1xcYXBwXFxwYWdlc1xcdGFiMlxcdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0o7O0FESUE7RUFDSSx5QkFBQTtFQUNBLDREQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDREo7O0FETUE7RUFFSSw2QkFBQTtFQUNBLHVCQUFBO0FDSko7O0FEUUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNMSjs7QURTQTtFQUNJLG1CQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWIyL3RhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ29lamV7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4udGFte1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5Nzc2YztcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzQ5Nzc2YyAwJSwgIzRkNzFkNyAxMDAlKTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udDogb2JsaXF1ZSBib2xkIDEwMCUgY3Vyc2l2ZTsgICBcclxuICAgIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCI7IFxyXG4gICAgZm9udC1zaXplOiAxM3B4OyAgIFxyXG4gICAgcGFkZGluZzogOXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuLmZ1ZW50ZXtcclxuICAgIFxyXG4gICAgZm9udDogb2JsaXF1ZSBib2xkIDIlIGN1cnNpdmU7ICAgXHJcbiAgICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiO1xyXG4gICBcclxufVxyXG5cclxuLmljb257XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDgwJTtcclxuICAgIGJvcmRlcjogN3B4IHNvbGlkICNmZmZmZmY7XHJcbn1cclxuXHJcblxyXG4uaG9sYXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcblxyXG4iLCIubG9nb2VqZSB7XG4gIHdpZHRoOiAxNSU7XG59XG5cbi50YW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk3NzZjO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0OTc3NmMgMCUsICM0ZDcxZDcgMTAwJSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250OiBvYmxpcXVlIGJvbGQgMTAwJSBjdXJzaXZlO1xuICBmb250LWZhbWlseTogXCJTZWdvZSBVSVwiO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDlweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5mdWVudGUge1xuICBmb250OiBvYmxpcXVlIGJvbGQgMiUgY3Vyc2l2ZTtcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIjtcbn1cblxuLmljb24ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA4MCU7XG4gIGJvcmRlcjogN3B4IHNvbGlkICNmZmZmZmY7XG59XG5cbi5ob2xhIHtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn0iXX0= */";
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