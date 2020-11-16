function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n    <ion-menu menuId=\"main-menu\" contentId=\"main\">\n        <ion-content>\n            <div class=\"menu-header-bg\"></div>\n            <div class=\"header-content\">\n                <img src=\"../assets/icon/user.png\" alt=\"\">\n                <ion-label>\n                    <ion-title>MENU</ion-title>\n                </ion-label>\n            </div>\n            <div class=\"action-button\">\n                <img src=\"../assets/icon/eje.png\" alt=\"\">\n            </div>\n            \n        \n      \n            <ion-list class=\"menu-items\" lines=\"none\">\n             \n                <ion-menu-toggle>\n\t\t\t\t\t<ion-item routerLink=\"/informacion\" routerDirection=\"forward\">\n\t\t\t\t\t\t<ion-icon name=\"pie-chart-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t\t<ion-label>Informacion</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-menu-toggle>\n      \n                \n\t\t\t\t<ion-menu-toggle>\n\t\t\t\t\t<ion-item routerLink=\"/tabs/about\" routerDirection=\"forward\">\n\t\t\t\t\t\t<ion-icon name=\"browsers-outline\" slot=\"start\"></ion-icon>\n\t\t\t\t\t\t<ion-label>Ajustes</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-menu-toggle>\n      \n                <ion-menu-toggle>\n\t\t\t\t\t<ion-item (click)=\" prosesLogout()\" button>\n\t\t\t\t\t\t<ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n\t\t\t\t\t\t<ion-label>Salir</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-menu-toggle>\n      \n            </ion-list>\n        </ion-content>\n      </ion-menu>\n      <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-home-home-module */
        "pages-home-home-module").then(__webpack_require__.bind(null,
        /*! ./pages/home/home.module */
        "./src/app/pages/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'intro',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-intro-intro-module */
        "pages-intro-intro-module").then(__webpack_require__.bind(null,
        /*! ./pages/intro/intro.module */
        "./src/app/pages/intro/intro.module.ts")).then(function (m) {
          return m.IntroPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "pages-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-register-register-module */
        "pages-register-register-module").then(__webpack_require__.bind(null,
        /*! ./pages/register/register.module */
        "./src/app/pages/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'crud/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-crud-crud-module */
        "pages-crud-crud-module").then(__webpack_require__.bind(null,
        /*! ./pages/crud/crud.module */
        "./src/app/pages/crud/crud.module.ts")).then(function (m) {
          return m.CrudPageModule;
        });
      }
    }, {
      path: 'menu-altiplano',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-menu-altiplano-menu-altiplano-module */
        [__webpack_require__.e("default~pages-menu-altiplano-menu-altiplano-module~pages-menu-llanos-menu-llanos-module~pages-menu-v~1064d68a"), __webpack_require__.e("pages-menu-altiplano-menu-altiplano-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/menu-altiplano/menu-altiplano.module */
        "./src/app/pages/menu-altiplano/menu-altiplano.module.ts")).then(function (m) {
          return m.MenuAltiplanoPageModule;
        });
      }
    }, {
      path: 'menu-llanos',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-menu-llanos-menu-llanos-module */
        [__webpack_require__.e("default~pages-menu-altiplano-menu-altiplano-module~pages-menu-llanos-menu-llanos-module~pages-menu-v~1064d68a"), __webpack_require__.e("pages-menu-llanos-menu-llanos-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/menu-llanos/menu-llanos.module */
        "./src/app/pages/menu-llanos/menu-llanos.module.ts")).then(function (m) {
          return m.MenuLlanosPageModule;
        });
      }
    }, {
      path: 'menu-valle',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-menu-valle-menu-valle-module */
        [__webpack_require__.e("default~pages-menu-altiplano-menu-altiplano-module~pages-menu-llanos-menu-llanos-module~pages-menu-v~1064d68a"), __webpack_require__.e("pages-menu-valle-menu-valle-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/menu-valle/menu-valle.module */
        "./src/app/pages/menu-valle/menu-valle.module.ts")).then(function (m) {
          return m.MenuVallePageModule;
        });
      }
    }, {
      path: 'informacion',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-informacion-informacion-module */
        "pages-informacion-informacion-module").then(__webpack_require__.bind(null,
        /*! ./pages/informacion/informacion.module */
        "./src/app/pages/informacion/informacion.module.ts")).then(function (m) {
          return m.InformacionPageModule;
        });
      }
    }, {
      path: 'product',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | product-product-module */
        "product-product-module").then(__webpack_require__.bind(null,
        /*! ./product/product.module */
        "./src/app/product/product.module.ts")).then(function (m) {
          return m.ProductPageModule;
        });
      }
    }, {
      path: 'home2',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-home2-home2-module */
        "pages-home2-home2-module").then(__webpack_require__.bind(null,
        /*! ./pages/home2/home2.module */
        "./src/app/pages/home2/home2.module.ts")).then(function (m) {
          return m.Home2PageModule;
        });
      }
    }, {
      path: 'pedido-r-alt',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-pedido-r-alt-pedido-r-alt-module */
        "pages-pedido-r-alt-pedido-r-alt-module").then(__webpack_require__.bind(null,
        /*! ./pages/pedido-r-alt/pedido-r-alt.module */
        "./src/app/pages/pedido-r-alt/pedido-r-alt.module.ts")).then(function (m) {
          return m.PedidoRAltPageModule;
        });
      }
    }, {
      path: 'pedido-r-llan',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-pedido-r-llan-pedido-r-llan-module */
        "pages-pedido-r-llan-pedido-r-llan-module").then(__webpack_require__.bind(null,
        /*! ./pages/pedido-r-llan/pedido-r-llan.module */
        "./src/app/pages/pedido-r-llan/pedido-r-llan.module.ts")).then(function (m) {
          return m.PedidoRLlanPageModule;
        });
      }
    }, {
      path: 'pedido-r-vall',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-pedido-r-vall-pedido-r-vall-module */
        "pages-pedido-r-vall-pedido-r-vall-module").then(__webpack_require__.bind(null,
        /*! ./pages/pedido-r-vall/pedido-r-vall.module */
        "./src/app/pages/pedido-r-vall/pedido-r-vall.module.ts")).then(function (m) {
          return m.PedidoRVallPageModule;
        });
      }
    }, {
      path: 'pedido-s-a',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-pedido-s-a-pedido-s-a-module */
        "pages-pedido-s-a-pedido-s-a-module").then(__webpack_require__.bind(null,
        /*! ./pages/pedido-s-a/pedido-s-a.module */
        "./src/app/pages/pedido-s-a/pedido-s-a.module.ts")).then(function (m) {
          return m.PedidoSAPageModule;
        });
      }
    }, {
      path: 'pedido-s-v',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-pedido-s-v-pedido-s-v-module */
        "pages-pedido-s-v-pedido-s-v-module").then(__webpack_require__.bind(null,
        /*! ./pages/pedido-s-v/pedido-s-v.module */
        "./src/app/pages/pedido-s-v/pedido-s-v.module.ts")).then(function (m) {
          return m.PedidoSVPageModule;
        });
      }
    }, {
      path: 'pedido-s-ll',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-pedido-s-ll-pedido-s-ll-module */
        "pages-pedido-s-ll-pedido-s-ll-module").then(__webpack_require__.bind(null,
        /*! ./pages/pedido-s-ll/pedido-s-ll.module */
        "./src/app/pages/pedido-s-ll/pedido-s-ll.module.ts")).then(function (m) {
          return m.PedidoSLlPageModule;
        });
      }
    }, {
      path: 'registro-pedi-dia',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-registro-pedi-dia-registro-pedi-dia-module */
        "pages-registro-pedi-dia-registro-pedi-dia-module").then(__webpack_require__.bind(null,
        /*! ./pages/registro-pedi-dia/registro-pedi-dia.module */
        "./src/app/pages/registro-pedi-dia/registro-pedi-dia.module.ts")).then(function (m) {
          return m.RegistroPediDiaPageModule;
        });
      }
    }, {
      path: 'menu-admin',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-menu-admin-menu-admin-module */
        "pages-menu-admin-menu-admin-module").then(__webpack_require__.bind(null,
        /*! ./pages/menu-admin/menu-admin.module */
        "./src/app/pages/menu-admin/menu-admin.module.ts")).then(function (m) {
          return m.MenuAdminPageModule;
        });
      }
    }, {
      path: 'registro-pedi-dia-ll',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-registro-pedi-dia-ll-registro-pedi-dia-ll-module */
        "pages-registro-pedi-dia-ll-registro-pedi-dia-ll-module").then(__webpack_require__.bind(null,
        /*! ./pages/registro-pedi-dia-ll/registro-pedi-dia-ll.module */
        "./src/app/pages/registro-pedi-dia-ll/registro-pedi-dia-ll.module.ts")).then(function (m) {
          return m.RegistroPediDiaLlPageModule;
        });
      }
    }, {
      path: 'registro-pedi-dia-v',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-registro-pedi-dia-v-registro-pedi-dia-v-module */
        "pages-registro-pedi-dia-v-registro-pedi-dia-v-module").then(__webpack_require__.bind(null,
        /*! ./pages/registro-pedi-dia-v/registro-pedi-dia-v.module */
        "./src/app/pages/registro-pedi-dia-v/registro-pedi-dia-v.module.ts")).then(function (m) {
          return m.RegistroPediDiaVPageModule;
        });
      }
    }, {
      path: 'registro-pedi-semanal-al',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-registro-pedi-semanal-al-registro-pedi-semanal-al-module */
        "pages-registro-pedi-semanal-al-registro-pedi-semanal-al-module").then(__webpack_require__.bind(null,
        /*! ./pages/registro-pedi-semanal-al/registro-pedi-semanal-al.module */
        "./src/app/pages/registro-pedi-semanal-al/registro-pedi-semanal-al.module.ts")).then(function (m) {
          return m.RegistroPediSemanalAlPageModule;
        });
      }
    }, {
      path: 'registro-pedi-semanal-ll',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-registro-pedi-semanal-ll-registro-pedi-semanal-ll-module */
        "pages-registro-pedi-semanal-ll-registro-pedi-semanal-ll-module").then(__webpack_require__.bind(null,
        /*! ./pages/registro-pedi-semanal-ll/registro-pedi-semanal-ll.module */
        "./src/app/pages/registro-pedi-semanal-ll/registro-pedi-semanal-ll.module.ts")).then(function (m) {
          return m.RegistroPediSemanalLlPageModule;
        });
      }
    }, {
      path: 'registro-pedi-semanal-v',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-registro-pedi-semanal-v-registro-pedi-semanal-v-module */
        "pages-registro-pedi-semanal-v-registro-pedi-semanal-v-module").then(__webpack_require__.bind(null,
        /*! ./pages/registro-pedi-semanal-v/registro-pedi-semanal-v.module */
        "./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.module.ts")).then(function (m) {
          return m.RegistroPediSemanalVPageModule;
        });
      }
    }, {
      path: 'registeradmin',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-registeradmin-registeradmin-module */
        "pages-registeradmin-registeradmin-module").then(__webpack_require__.bind(null,
        /*! ./pages/registeradmin/registeradmin.module */
        "./src/app/pages/registeradmin/registeradmin.module.ts")).then(function (m) {
          return m.RegisteradminPageModule;
        });
      }
    }, {
      path: 'verusuadmin',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-verusuadmin-verusuadmin-module */
        "pages-verusuadmin-verusuadmin-module").then(__webpack_require__.bind(null,
        /*! ./pages/verusuadmin/verusuadmin.module */
        "./src/app/pages/verusuadmin/verusuadmin.module.ts")).then(function (m) {
          return m.VerusuadminPageModule;
        });
      }
    }, {
      path: 'mod-pda/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-mod-pda-mod-pda-module */
        "pages-mod-pda-mod-pda-module").then(__webpack_require__.bind(null,
        /*! ./pages/mod-pda/mod-pda.module */
        "./src/app/pages/mod-pda/mod-pda.module.ts")).then(function (m) {
          return m.ModPDAPageModule;
        });
      }
    }, {
      path: 'mod-pdv/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-mod-pdv-mod-pdv-module */
        "pages-mod-pdv-mod-pdv-module").then(__webpack_require__.bind(null,
        /*! ./pages/mod-pdv/mod-pdv.module */
        "./src/app/pages/mod-pdv/mod-pdv.module.ts")).then(function (m) {
          return m.ModPDVPageModule;
        });
      }
    }, {
      path: 'mod-pdl/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-mod-pdl-mod-pdl-module */
        "pages-mod-pdl-mod-pdl-module").then(__webpack_require__.bind(null,
        /*! ./pages/mod-pdl/mod-pdl.module */
        "./src/app/pages/mod-pdl/mod-pdl.module.ts")).then(function (m) {
          return m.ModPDLPageModule;
        });
      }
    }, {
      path: 'mod-menua/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-mod-menua-mod-menua-module */
        "pages-mod-menua-mod-menua-module").then(__webpack_require__.bind(null,
        /*! ./pages/mod-menua/mod-menua.module */
        "./src/app/pages/mod-menua/mod-menua.module.ts")).then(function (m) {
          return m.ModMenuaPageModule;
        });
      }
    }, {
      path: 'mod-menuv/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-mod-menuv-mod-menuv-module */
        "pages-mod-menuv-mod-menuv-module").then(__webpack_require__.bind(null,
        /*! ./pages/mod-menuv/mod-menuv.module */
        "./src/app/pages/mod-menuv/mod-menuv.module.ts")).then(function (m) {
          return m.ModMenuvPageModule;
        });
      }
    }, {
      path: 'mod-menul/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-mod-menul-mod-menul-module */
        "pages-mod-menul-mod-menul-module").then(__webpack_require__.bind(null,
        /*! ./pages/mod-menul/mod-menul.module */
        "./src/app/pages/mod-menul/mod-menul.module.ts")).then(function (m) {
          return m.ModMenulPageModule;
        });
      }
    }, {
      path: 'modsemanaal/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-modsemanaal-modsemanaal-module */
        "pages-modsemanaal-modsemanaal-module").then(__webpack_require__.bind(null,
        /*! ./pages/modsemanaal/modsemanaal.module */
        "./src/app/pages/modsemanaal/modsemanaal.module.ts")).then(function (m) {
          return m.ModsemanaalPageModule;
        });
      }
    }, {
      path: 'modsemanav/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-modsemanav-modsemanav-module */
        "pages-modsemanav-modsemanav-module").then(__webpack_require__.bind(null,
        /*! ./pages/modsemanav/modsemanav.module */
        "./src/app/pages/modsemanav/modsemanav.module.ts")).then(function (m) {
          return m.ModsemanavPageModule;
        });
      }
    }, {
      path: 'modsemanall/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-modsemanall-modsemanall-module */
        "pages-modsemanall-modsemanall-module").then(__webpack_require__.bind(null,
        /*! ./pages/modsemanall/modsemanall.module */
        "./src/app/pages/modsemanall/modsemanall.module.ts")).then(function (m) {
          return m.ModsemanallPageModule;
        });
      }
    }, {
      path: 'productoa',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-productoa-productoa-module */
        "pages-productoa-productoa-module").then(__webpack_require__.bind(null,
        /*! ./pages/productoa/productoa.module */
        "./src/app/pages/productoa/productoa.module.ts")).then(function (m) {
          return m.ProductoaPageModule;
        });
      }
    }, {
      path: 'productov',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-productov-productov-module */
        "pages-productov-productov-module").then(__webpack_require__.bind(null,
        /*! ./pages/productov/productov.module */
        "./src/app/pages/productov/productov.module.ts")).then(function (m) {
          return m.ProductovPageModule;
        });
      }
    }, {
      path: 'productol',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-productol-productol-module */
        "pages-productol-productol-module").then(__webpack_require__.bind(null,
        /*! ./pages/productol/productol.module */
        "./src/app/pages/productol/productol.module.ts")).then(function (m) {
          return m.ProductolPageModule;
        });
      }
    }, {
      path: 'modificarproa/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-modificarproa-modificarproa-module */
        "pages-modificarproa-modificarproa-module").then(__webpack_require__.bind(null,
        /*! ./pages/modificarproa/modificarproa.module */
        "./src/app/pages/modificarproa/modificarproa.module.ts")).then(function (m) {
          return m.ModificarproaPageModule;
        });
      }
    }, {
      path: 'modificarprov/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-modificarprov-modificarprov-module */
        "pages-modificarprov-modificarprov-module").then(__webpack_require__.bind(null,
        /*! ./pages/modificarprov/modificarprov.module */
        "./src/app/pages/modificarprov/modificarprov.module.ts")).then(function (m) {
          return m.ModificarprovPageModule;
        });
      }
    }, {
      path: 'modificarprol/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-modificarprol-modificarprol-module */
        "pages-modificarprol-modificarprol-module").then(__webpack_require__.bind(null,
        /*! ./pages/modificarprol/modificarprol.module */
        "./src/app/pages/modificarprol/modificarprol.module.ts")).then(function (m) {
          return m.ModificarprolPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: lato;\n}\n\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background-color: #073b4d;\n  background: linear-gradient(90deg, #073b4d 0%, #4d71d7 100%);\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.header-content img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 7px solid #ffffff;\n}\n\n.header-content h2 {\n  font-weight: 300;\n  color: #fff;\n}\n\n.header-content p {\n  font-size: 12px;\n  color: #ffffff;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n}\n\n.action-button {\n  width: 115px;\n  height: 115px;\n  display: flex;\n  justify-content: center;\n}\n\n.menu-items {\n  margin-right: 20px;\n  color: #86979f;\n}\n\n.menu-items ion-item {\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n\n.menu-items .active {\n  border-left: 5px solid;\n  color: #628cff;\n  padding-left: 15px;\n}\n\n.menu-items .active ion-icon {\n  color: #628cff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFx3YW1zc1xcRGVza3RvcFxccHJ1ZWJhIGVsZWN0dHJvblxccHJvR1xccHJveWVjdG8yNy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDREQUFBO0VBQ0EsZ0RBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNDTjs7QURFSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0FOOztBREdJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDRE47O0FETUU7RUFDRSxZQUFBO0VBQWMsYUFBQTtFQUNkLGFBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBRE9FO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDSko7O0FET0k7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDTE47O0FEUUk7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ05OOztBRFFNO0VBQ0UsY0FBQTtBQ05SIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LWZhbWlseTogbGF0bztcclxuICB9XHJcbiAgXHJcbiAgLm1lbnUtaGVhZGVyLWJne1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzNiNGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIzA3M2I0ZCAwJSwgIzRkNzFkNyAxMDAlKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDk4LCAxNDAsIDI1NSwgMC41KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLWNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlcjogN3B4IHNvbGlkICNmZmZmZmY7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmFjdGlvbi1idXR0b257XHJcbiAgICB3aWR0aDogMTE1cHg7IGhlaWdodDogMTE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLm1lbnUtaXRlbXMge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM4Njk3OWY7IFxyXG4gIFxyXG4gIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZDtcclxuICAgICAgY29sb3I6ICM2MjhjZmY7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBcclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjNjI4Y2ZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSIsIioge1xuICBmb250LWZhbWlseTogbGF0bztcbn1cblxuLm1lbnUtaGVhZGVyLWJnIHtcbiAgaGVpZ2h0OiAxODBweDtcbiAgd2lkdGg6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDczYjRkO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNzNiNGQgMCUsICM0ZDcxZDcgMTAwJSk7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDk4LCAxNDAsIDI1NSwgMC41KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggNTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xOHB4O1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cblxuLmhlYWRlci1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyLWNvbnRlbnQgaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDdweCBzb2xpZCAjZmZmZmZmO1xufVxuLmhlYWRlci1jb250ZW50IGgyIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNmZmY7XG59XG4uaGVhZGVyLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICB3aWR0aDogMTE1cHg7XG4gIGhlaWdodDogMTE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWVudS1pdGVtcyB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgY29sb3I6ICM4Njk3OWY7XG59XG4ubWVudS1pdGVtcyBpb24taXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tZW51LWl0ZW1zIC5hY3RpdmUge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkO1xuICBjb2xvcjogIzYyOGNmZjtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLm1lbnUtaXRlbXMgLmFjdGl2ZSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjI4Y2ZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, toastCtrl, splashScreen, statusBar, storage, navCtl) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.storage = storage;
        this.navCtl = navCtl;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
          this.storage.get('storage_xxx').then(function (res) {
            if (res == null) {
              _this.navCtl.navigateRoot('/login');
            } else {
              _this.navCtl.navigateRoot('/home');
            }
          });
          this.storage.get('storage_xxxadmin').then(function (res) {
            if (res == null) {
              _this.navCtl.navigateRoot('/login');
            } else {
              _this.navCtl.navigateRoot('/menu-admin');
            }
          });
        }
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
                    this.navCtl.navigateRoot(['/login']);
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

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _providers_access_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./providers/access-providers */
    "./src/app/providers/access-providers.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts"); //http client


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_12__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production
      })],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _providers_access_providers__WEBPACK_IMPORTED_MODULE_11__["AccessProviders"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/providers/access-providers.ts":
  /*!***********************************************!*\
    !*** ./src/app/providers/access-providers.ts ***!
    \***********************************************/

  /*! exports provided: AccessProviders */

  /***/
  function srcAppProvidersAccessProvidersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccessProviders", function () {
      return AccessProviders;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var rxjs_add_operator_timeout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/add/operator/timeout */
    "./node_modules/rxjs-compat/_esm2015/add/operator/timeout.js");

    var AccessProviders = /*#__PURE__*/function () {
      function AccessProviders(http) {
        _classCallCheck(this, AccessProviders);

        this.http = http; //url backen api json

        this.server = 'http://localhost/proG/server_api/';
      }

      _createClass(AccessProviders, [{
        key: "postData",
        value: function postData(body, file) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=UTF-8'
          });
          var options = {
            headers: headers
          };
          return this.http.post(this.server + file, JSON.stringify(body), options).timeout(59000).map(function (res) {
            return res;
          });
        }
      }]);

      return AccessProviders;
    }();

    AccessProviders.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AccessProviders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AccessProviders);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\wamss\Desktop\prueba electtron\proG\proyecto27\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map