function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-informacion-informacion-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/informacion/informacion.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/informacion/informacion.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInformacionInformacionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>informacion</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"about-info\">\n    <img class=\"icon\" src=\"assets/icon/2.jpg\" alt=\"\" >\n    <h3 class=\"ion-padding-top ion-padding-start\">INFORMACION</h3>\n    <p class=\"ion-padding-start ion-padding-end\">\n      El Batallón de Producción del Ejército II “Cnl. Oscar Moscoso”, el cual tiene estrecha relación en sus inicios con la Novena División del Ejército, que fue creada en RURRENABAQUE por Orden del Día No. 01/87 en fecha 21-ENE-87, siendo el comandante fundador destinado al cargo el Sr. Cnl. DAEN. FRANZ ORDÓÑEZ CARRIÓN, posesionado el 230830-ENE-87, en el Gran Cuartel de Miraflores de la ciudad de La Paz, por no contar la GUC. con infraestructura cuartelaría en la Localidad de RURRENABAQUE.\n    </p>\n  \n\n\n\n  </div>\n\n\n\n \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/informacion/informacion-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/informacion/informacion-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: InformacionPageRoutingModule */

  /***/
  function srcAppPagesInformacionInformacionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InformacionPageRoutingModule", function () {
      return InformacionPageRoutingModule;
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


    var _informacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./informacion.page */
    "./src/app/pages/informacion/informacion.page.ts");

    var routes = [{
      path: '',
      component: _informacion_page__WEBPACK_IMPORTED_MODULE_3__["InformacionPage"]
    }];

    var InformacionPageRoutingModule = function InformacionPageRoutingModule() {
      _classCallCheck(this, InformacionPageRoutingModule);
    };

    InformacionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InformacionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/informacion/informacion.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/informacion/informacion.module.ts ***!
    \*********************************************************/

  /*! exports provided: InformacionPageModule */

  /***/
  function srcAppPagesInformacionInformacionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InformacionPageModule", function () {
      return InformacionPageModule;
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


    var _informacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./informacion-routing.module */
    "./src/app/pages/informacion/informacion-routing.module.ts");
    /* harmony import */


    var _informacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./informacion.page */
    "./src/app/pages/informacion/informacion.page.ts");

    var InformacionPageModule = function InformacionPageModule() {
      _classCallCheck(this, InformacionPageModule);
    };

    InformacionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _informacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["InformacionPageRoutingModule"]],
      declarations: [_informacion_page__WEBPACK_IMPORTED_MODULE_6__["InformacionPage"]]
    })], InformacionPageModule);
    /***/
  },

  /***/
  "./src/app/pages/informacion/informacion.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/informacion/informacion.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInformacionInformacionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\n\nion-toolbar ion-button,\nion-toolbar ion-back-button,\nion-toolbar ion-menu-button {\n  --color: white;\n}\n\n.about-header {\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n\n.about-header .about-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  opacity: 0;\n  transition: opacity 500ms ease-in-out;\n}\n\n.about-header .madison {\n  background-image: url(/assets/img/about/madison.jpg);\n}\n\n.about-header .austin {\n  background-image: url(/assets/img/about/austin.jpg);\n}\n\n.about-header .chicago {\n  background-image: url(/assets/img/about/chicago.jpg);\n}\n\n.about-header .seattle {\n  background-image: url(/assets/img/about/seattle.jpg);\n}\n\n.about-info {\n  position: absolute;\n  margin-top: -10px;\n  border-radius: 10px;\n  background: var(--ion-background-color, #fff);\n}\n\n.about-info h3 {\n  margin-top: 0;\n}\n\n.about-info ion-list {\n  padding-top: 0;\n}\n\n.about-info p {\n  line-height: 130%;\n  color: var(--ion-color-dark);\n}\n\n.about-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n\n/*\n * iOS Only\n */\n\n.ios .about-info {\n  --ion-padding: 19px;\n}\n\n.ios .about-info h3 {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5mb3JtYWNpb24vQzpcXFVzZXJzXFx3YW1zc1xcRGVza3RvcFxccHJ1ZWJhIGVsZWN0dHJvblxccHJvR1xccHJveWVjdG8yNy9zcmNcXGFwcFxccGFnZXNcXGluZm9ybWFjaW9uXFxpbmZvcm1hY2lvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luZm9ybWFjaW9uL2luZm9ybWFjaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEseUJBQUE7RUFDQSxjQUFBO0FDREo7O0FESUU7OztFQUdFLGNBQUE7QUNESjs7QURJRTtFQUNFLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0VBRUEsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUVBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUVBLFVBQUE7RUFFQSxxQ0FBQTtBQ05KOztBRFNFO0VBQ0Usb0RBQUE7QUNOSjs7QURRRTtFQUNFLG1EQUFBO0FDTEo7O0FET0U7RUFDRSxvREFBQTtBQ0pKOztBRE1FO0VBQ0Usb0RBQUE7QUNISjs7QURNRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FDSEo7O0FETUU7RUFDRSxhQUFBO0FDSEo7O0FETUU7RUFDRSxjQUFBO0FDSEo7O0FETUU7RUFDRSxpQkFBQTtFQUVBLDRCQUFBO0FDSko7O0FET0U7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDSko7O0FET0U7O0VBQUE7O0FBSUE7RUFDRSxtQkFBQTtBQ0xKOztBRFFFO0VBQ0UsZ0JBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZm9ybWFjaW9uL2luZm9ybWFjaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICBcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcclxuICBpb24tdG9vbGJhciBpb24tYmFjay1idXR0b24sXHJcbiAgaW9uLXRvb2xiYXIgaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuYWJvdXQtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5hYm91dC1oZWFkZXIgLmFib3V0LWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIFxyXG4gICAgb3BhY2l0eTogMDtcclxuICBcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5hYm91dC1oZWFkZXIgLm1hZGlzb24ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L21hZGlzb24uanBnKTtcclxuICB9XHJcbiAgLmFib3V0LWhlYWRlciAuYXVzdGluIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9hdXN0aW4uanBnKTtcclxuICB9XHJcbiAgLmFib3V0LWhlYWRlciAuY2hpY2FnbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvY2hpY2Fnby5qcGcpO1xyXG4gIH1cclxuICAuYWJvdXQtaGVhZGVyIC5zZWF0dGxlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9zZWF0dGxlLmpwZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5hYm91dC1pbmZvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTtcclxuICB9XHJcbiAgXHJcbiAgLmFib3V0LWluZm8gaDMge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmFib3V0LWluZm8gaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5hYm91dC1pbmZvIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzMCU7XHJcbiAgXHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gIH1cclxuICBcclxuICAuYWJvdXQtaW5mbyBpb24taWNvbiB7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMzJweDtcclxuICB9XHJcbiAgXHJcbiAgLypcclxuICAgKiBpT1MgT25seVxyXG4gICAqL1xyXG4gIFxyXG4gIC5pb3MgLmFib3V0LWluZm8ge1xyXG4gICAgLS1pb24tcGFkZGluZzogMTlweDtcclxuICB9XHJcbiAgXHJcbiAgLmlvcyAuYWJvdXQtaW5mbyBoMyB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuICAiLCJpb24tdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIGlvbi1idXR0b24sXG5pb24tdG9vbGJhciBpb24tYmFjay1idXR0b24sXG5pb24tdG9vbGJhciBpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmFib3V0LWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xufVxuXG4uYWJvdXQtaGVhZGVyIC5hYm91dC1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5hYm91dC1oZWFkZXIgLm1hZGlzb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvbWFkaXNvbi5qcGcpO1xufVxuXG4uYWJvdXQtaGVhZGVyIC5hdXN0aW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvYXVzdGluLmpwZyk7XG59XG5cbi5hYm91dC1oZWFkZXIgLmNoaWNhZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvY2hpY2Fnby5qcGcpO1xufVxuXG4uYWJvdXQtaGVhZGVyIC5zZWF0dGxlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L3NlYXR0bGUuanBnKTtcbn1cblxuLmFib3V0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZik7XG59XG5cbi5hYm91dC1pbmZvIGgzIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmFib3V0LWluZm8gaW9uLWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLmFib3V0LWluZm8gcCB7XG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuXG4uYWJvdXQtaW5mbyBpb24taWNvbiB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAzMnB4O1xufVxuXG4vKlxuICogaU9TIE9ubHlcbiAqL1xuLmlvcyAuYWJvdXQtaW5mbyB7XG4gIC0taW9uLXBhZGRpbmc6IDE5cHg7XG59XG5cbi5pb3MgLmFib3V0LWluZm8gaDMge1xuICBmb250LXdlaWdodDogNzAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/informacion/informacion.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/informacion/informacion.page.ts ***!
    \*******************************************************/

  /*! exports provided: InformacionPage */

  /***/
  function srcAppPagesInformacionInformacionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InformacionPage", function () {
      return InformacionPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InformacionPage = /*#__PURE__*/function () {
      function InformacionPage() {
        _classCallCheck(this, InformacionPage);

        this.location = 'madison';
        this.conferenceDate = '2047-05-17';
        this.selectOptions = {
          header: 'Select a Location'
        };
      }

      _createClass(InformacionPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InformacionPage;
    }();

    InformacionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-informacion',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./informacion.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/informacion/informacion.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./informacion.page.scss */
      "./src/app/pages/informacion/informacion.page.scss"))["default"]]
    })], InformacionPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-informacion-informacion-module-es5.js.map