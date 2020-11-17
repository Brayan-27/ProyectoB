function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registro-pedi-semanal-v-registro-pedi-semanal-v-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.page.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.page.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegistroPediSemanalVRegistroPediSemanalVPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n\n    <ion-title>\n      REGISTRO DE DATOS REGIÓN VALLE \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      PEDIDO SEMANAL REGIÓN VALLE \n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-badge color=\"danger\" slot=\"start\">Costo total Pedido Diario</ion-badge>\n  </ion-item>\n\n  <ion-slides>\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Fecha</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Costo Total</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod2 of pruebas12\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod2.semana}}.</ion-card-subtitle>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod2 of pruebas12\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod2.total_costo}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Fecha</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Eliminar</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod2 of pruebas12\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod2.semana}}.</ion-card-subtitle>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod2 of pruebas12\">\n            <ion-button expand=\"fullscreen\" size=\"small\" shape=\"round\" fill=\"outline\"  (click)=\"delDatos(prod2.id_DV)\">E</ion-button>   \n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n  </ion-slides>\n\n  <form #formulario=\"ngForm\"  (ngSubmint)=\"agregarSE()\">\n\n    <ion-item>\n      <ion-label>N° de Semana</ion-label>\n      <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" placeholder=\"Seleccione una\" [(ngModel)]=\"objeto.Des_de_semana\" name=\"Des_de_semana\" required>\n        <ion-select-option value=\"SEMANA N° 1\">SEMANA N° 1</ion-select-option>\n        <ion-select-option value=\"SEMANA N° 2\">SEMANA N° 2</ion-select-option>\n        <ion-select-option value=\"SEMANA N° 3\">SEMANA N° 3</ion-select-option>\n        <ion-select-option value=\"SEMANA N° 4\">SEMANA N° 4</ion-select-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Mes</ion-label>\n      <ion-select value=\"brown\" okText=\"Ok\" cancelText=\"Salir\" [(ngModel)]=\"objeto.mes\" name=\"mes\" required>\n        <ion-select-option value=\"Enero\">Enero</ion-select-option>\n        <ion-select-option value=\"Febrero\">Febrero</ion-select-option>\n        <ion-select-option value=\"Marzo\">Marzo</ion-select-option>\n        <ion-select-option value=\"Abril\">Abril</ion-select-option>\n        <ion-select-option value=\"Mayo\">Mayo</ion-select-option>\n        <ion-select-option value=\"Junio\">Junio</ion-select-option>\n        <ion-select-option value=\"Julio\">Julio</ion-select-option>\n        <ion-select-option value=\"Agosto\">Agosto</ion-select-option>\n        <ion-select-option value=\"Septiembre\">Septiembre</ion-select-option>\n        <ion-select-option value=\"Octubre\">Octubre</ion-select-option>\n        <ion-select-option value=\"Noviembre\">Noviembre</ion-select-option>\n        <ion-select-option value=\"Diciembre\">Diciembre</ion-select-option>\n      </ion-select>\n    </ion-item>\n  \n  \n  \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n         Lunes</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.lunes\" name=\"lunes\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n         Martes\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.martes\" name=\"martes\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Miercoles</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.miercoles\" name=\"miercoles\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  \n    \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Jueves</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.jueves\" name=\"jueves\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  \n    \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Viernes</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.viernes\" name=\"viernes\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  \n  \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Sabado</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.sabado\" name=\"sabado\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  \n    \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Domingo</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.domingo\" name=\"domingo\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"formulario.invalid\"  [disabled]=\"disabledButton\"  (click)=\"agregarSE()\">\n      Registrar\n    </ion-button>\n\n\n  </form>\n\n\n  <ion-item>\n    <ion-badge color=\"danger\" slot=\"start\">TABLA DE REGISTRO</ion-badge>\n  </ion-item>\n\n  \n  <ion-slides>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>N° de Semana</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Mes</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_semana}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.mes}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Numero de Semana</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Datos numericos</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_semana}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.lunes}}-</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.martes}}-</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.miercoles}}-</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.jueves}}</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.viernes}}</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.sabado}}</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.domingo}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n    \n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Numero de Semana</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Eliminar</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_semana}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-button expand=\"fullscreen\" size=\"small\" shape=\"round\" fill=\"outline\"  (click)=\"delData(prod.id_PSV)\">E</ion-button>   \n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Numero de Semana</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Modificar</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_semana}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-button expand=\"fullscreen\" size=\"small\" shape=\"round\" fill=\"outline\" (click)=\"abrirCrud(prod.id_PSV)\">Modificar</ion-button>   \n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n    \n    \n  </ion-slides>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: RegistroPediSemanalVPageRoutingModule */

  /***/
  function srcAppPagesRegistroPediSemanalVRegistroPediSemanalVRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPediSemanalVPageRoutingModule", function () {
      return RegistroPediSemanalVPageRoutingModule;
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


    var _registro_pedi_semanal_v_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registro-pedi-semanal-v.page */
    "./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.page.ts");

    var routes = [{
      path: '',
      component: _registro_pedi_semanal_v_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPediSemanalVPage"]
    }];

    var RegistroPediSemanalVPageRoutingModule = function RegistroPediSemanalVPageRoutingModule() {
      _classCallCheck(this, RegistroPediSemanalVPageRoutingModule);
    };

    RegistroPediSemanalVPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistroPediSemanalVPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: RegistroPediSemanalVPageModule */

  /***/
  function srcAppPagesRegistroPediSemanalVRegistroPediSemanalVModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPediSemanalVPageModule", function () {
      return RegistroPediSemanalVPageModule;
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


    var _registro_pedi_semanal_v_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registro-pedi-semanal-v-routing.module */
    "./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v-routing.module.ts");
    /* harmony import */


    var _registro_pedi_semanal_v_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registro-pedi-semanal-v.page */
    "./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.page.ts");

    var RegistroPediSemanalVPageModule = function RegistroPediSemanalVPageModule() {
      _classCallCheck(this, RegistroPediSemanalVPageModule);
    };

    RegistroPediSemanalVPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registro_pedi_semanal_v_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPediSemanalVPageRoutingModule"]],
      declarations: [_registro_pedi_semanal_v_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPediSemanalVPage"]]
    })], RegistroPediSemanalVPageModule);
    /***/
  },

  /***/
  "./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.page.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.page.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegistroPediSemanalVRegistroPediSemanalVPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".summary_row {\n  display: flex;\n  flex-wrap: wrap;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.summarycell {\n  overflow: auto;\n  word-wrap: break-word;\n  width: 43vw;\n  border: 2px solid #052646;\n  border-radius: 10px 10px 10px 10px;\n  padding: 5px;\n  text-align: right;\n  font-weight: bold;\n  text-align: center;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8tcGVkaS1zZW1hbmFsLXYvQzpcXFVzZXJzXFx3YW1zc1xcRGVza3RvcFxccHJ1eWVjdG8gZW1pXFxwcm9HXFxwcm95ZWN0bzI3L3NyY1xcYXBwXFxwYWdlc1xccmVnaXN0cm8tcGVkaS1zZW1hbmFsLXZcXHJlZ2lzdHJvLXBlZGktc2VtYW5hbC12LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8tcGVkaS1zZW1hbmFsLXYvcmVnaXN0cm8tcGVkaS1zZW1hbmFsLXYucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNDSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJvLXBlZGktc2VtYW5hbC12L3JlZ2lzdHJvLXBlZGktc2VtYW5hbC12LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdW1tYXJ5X3Jvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcblxyXG59XHJcblxyXG4uc3VtbWFyeWNlbGx7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdpZHRoOiA0M3Z3O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgICMwNTI2NDY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuIiwiLnN1bW1hcnlfcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5zdW1tYXJ5Y2VsbCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiA0M3Z3O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDUyNjQ2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDExcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.page.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.page.ts ***!
    \*******************************************************************************/

  /*! exports provided: RegistroPediSemanalVPage */

  /***/
  function srcAppPagesRegistroPediSemanalVRegistroPediSemanalVPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPediSemanalVPage", function () {
      return RegistroPediSemanalVPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/access-providers */
    "./src/app/providers/access-providers.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var RegistroPediSemanalVPage = /*#__PURE__*/function () {
      function RegistroPediSemanalVPage(http, router, toastCtrl, loadingCtrl, alertCtrl, accsPrvds) {
        _classCallCheck(this, RegistroPediSemanalVPage);

        this.http = http;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.accsPrvds = accsPrvds; //dato de calculo

        this.objeto12 = {
          semana: "",
          total_costo: ""
        };
        this.pruebas12 = [];
        this.url3 = 'http://192.168.4.153/serve_api/menu_datoV.php';
        this.objeto = {
          Des_de_semana: "",
          mes: "",
          lunes: "",
          martes: "",
          miercoles: "",
          jueves: "",
          viernes: "",
          sabado: "",
          domingo: ""
        };
        this.pruebas = [];
        this.url = 'http://192.168.4.153/serve_api/crear_registroPSV.php';
        this.url2 = 'http://192.168.4.153/serve_api/menu_registroPSV.php';
        this.listarRegistroPSV();
        this.listarRegistroDV();
      }

      _createClass(RegistroPediSemanalVPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "agregarRegistroPSV",
        value: function agregarRegistroPSV(obj) {
          return this.http.post(this.url, JSON.stringify(obj));
        }
      }, {
        key: "agregarSE",
        value: function agregarSE() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.agregarRegistroPSV(this.objeto).subscribe(function (resp) {
                      _this.objeto.Des_de_semana = '';
                      _this.objeto.mes = '';
                      _this.objeto.lunes = '';
                      _this.objeto.martes = '';
                      _this.objeto.miercoles = '';
                      _this.objeto.jueves = '';
                      _this.objeto.viernes = '';
                      _this.objeto.sabado = '';
                      _this.objeto.domingo = '';

                      _this.listarRegistroPSV();

                      console.log(resp);
                    });
                    _context.next = 3;
                    return this.toastCtrl.create({
                      message: "Registro Exitoso",
                      duration: 1500
                    });

                  case 3:
                    toast = _context.sent;
                    toast.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getRegistroPSV",
        value: function getRegistroPSV() {
          return this.http.get(this.url2);
        }
      }, {
        key: "listarRegistroPSV",
        value: function listarRegistroPSV() {
          var _this2 = this;

          this.pruebas = [];
          this.getRegistroPSV().subscribe(function (res) {
            for (var i = 0; i < res.length; i++) {
              _this2.pruebas.push(res[i]);
            }
          });
        }
      }, {
        key: "delData",
        value: function delData(a) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    return _context2.abrupt("return", new Promise(function (resolve) {
                      var body = {
                        aksi: 'eliminar_PSV',
                        id: a
                      };

                      _this3.accsPrvds.postData(body, 'proses_api.php').subscribe(function (res) {
                        if (res.success == true) {
                          _this3.presentToast('Eliminado con exito');

                          _this3.listarRegistroPSV();
                        } else {
                          _this3.presentToast('delete error');
                        }
                      });
                    }));

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(a) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastCtrl.create({
                      message: a,
                      duration: 1500
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "abrirCrud",
        value: function abrirCrud(a) {
          this.router.navigate(['/modsemanav/' + a]);
        } /// datos visualizzar 

      }, {
        key: "getRegistroDV",
        value: function getRegistroDV() {
          return this.http.get(this.url3);
        }
      }, {
        key: "listarRegistroDV",
        value: function listarRegistroDV() {
          var _this4 = this;

          this.pruebas12 = [];
          this.getRegistroDV().subscribe(function (res) {
            for (var i = 0; i < res.length; i++) {
              _this4.pruebas12.push(res[i]);
            }
          });
        }
      }, {
        key: "delDatos",
        value: function delDatos(a) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    return _context4.abrupt("return", new Promise(function (resolve) {
                      var body = {
                        aksi: 'eliminar_DV',
                        id: a
                      };

                      _this5.accsPrvds.postData(body, 'proses_api.php').subscribe(function (res) {
                        if (res.success == true) {
                          _this5.presentToast('Eliminado con exito');

                          _this5.listarRegistroDV();
                        } else {
                          _this5.presentToast('delete error');
                        }
                      });
                    }));

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        }
      }]);

      return RegistroPediSemanalVPage;
    }();

    RegistroPediSemanalVPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__["AccessProviders"]
      }];
    };

    RegistroPediSemanalVPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registro-pedi-semanal-v',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./registro-pedi-semanal-v.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./registro-pedi-semanal-v.page.scss */
      "./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.page.scss"))["default"]]
    })], RegistroPediSemanalVPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-registro-pedi-semanal-v-registro-pedi-semanal-v-module-es5.js.map