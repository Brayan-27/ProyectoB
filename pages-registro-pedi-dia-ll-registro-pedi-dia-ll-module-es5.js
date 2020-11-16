function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registro-pedi-dia-ll-registro-pedi-dia-ll-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-pedi-dia-ll/registro-pedi-dia-ll.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-pedi-dia-ll/registro-pedi-dia-ll.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegistroPediDiaLlRegistroPediDiaLlPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n\n    <ion-title>\n      REGISTRO DE DATOS REGIÓN LLANO\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding [fullscreen]=\"true\">\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      Pedido Diario región Llanos \n    </ion-label>\n  </ion-item>\n\n  <ion-slides>\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Nombre del Alimento</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Tipo de Alimento</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas1\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.nombreali}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas1\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.tipo}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Nombre del Alimento</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Cantidad</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas1\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.nombreali}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas1\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.cantidad_pro}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n  </ion-slides>\n\n\n  <form #formulario=\"ngForm\"  (ngSubmint)=\"agregarNU()\">\n\n\n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Asignar Alimento</ion-label>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\"  name=\"Des_de_alimnentos\" [(ngModel)]=\"objeto.Des_de_alimnentos\" required >\n        <ion-select-option *ngFor=\"let prod of pruebas1\" value=\"{{prod.nombreali}}\" >{{prod.nombreali}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Unidad de Medida</ion-label>\n      <ion-select value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" [(ngModel)]=\"objeto.Unidad_de_Media\" name=\"Unidad_de_Media\" required>\n        <ion-select-option value=\"Kg\">Kg</ion-select-option>\n        <ion-select-option value=\"Lb\">Lb</ion-select-option>\n        <ion-select-option value=\"Amrr\">Amrr</ion-select-option>\n        <ion-select-option value=\"Lt\">Lt</ion-select-option>\n        <ion-select-option value=\"g\">g</ion-select-option>\n        <ion-select-option value=\"ml\">ml</ion-select-option>\n        <ion-select-option value=\"unidad\">unidad</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n      <ion-label>\n        Desayuno \n      </ion-label>\n    </ion-item>\n\n   \n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Cantidad Min Max </ion-label>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Desayuno\" [(ngModel)]=\"objeto.Gr_ML_Desayuno\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_min}}\"> {{prod.nombreali}} = {{prod.cantidad_min}}</ion-select-option>\n        <ion-label *ngFor=\"let prod of pruebas1\">{{prod.nombreali}}</ion-label>\n      </ion-select>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Desayuno\" [(ngModel)]=\"objeto.Gr_ML_Desayuno\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_med}}\">{{prod.nombreali}} = {{prod.cantidad_med}}</ion-select-option>\n      </ion-select>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Desayuno\" [(ngModel)]=\"objeto.Gr_ML_Desayuno\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_max}}\">{{prod.nombreali}} = {{prod.cantidad_max}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">\n          <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n          Desayuno</ion-label>\n        <ion-input type=\"number\" name=\"Gr_ML_Desayuno\" [(ngModel)]=\"objeto.Gr_ML_Desayuno\" required pattern=\"[0-9\\.]+\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n\n\n    <ion-item>\n      <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n      <ion-label>\n        Sopa\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Cantidad Min Max </ion-label>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Sopa\" [(ngModel)]=\"objeto.Gr_ML_Sopa\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_min}}\"> {{prod.nombreali}} = {{prod.cantidad_min}}</ion-select-option>\n        <ion-label *ngFor=\"let prod of pruebas1\">{{prod.nombreali}}</ion-label>\n      </ion-select>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Sopa\" [(ngModel)]=\"objeto.Gr_ML_Sopa\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_med}}\">{{prod.nombreali}} = {{prod.cantidad_med}}</ion-select-option>\n      </ion-select>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Sopa\" [(ngModel)]=\"objeto.Gr_ML_Sopa\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_max}}\">{{prod.nombreali}} = {{prod.cantidad_max}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    \n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">\n          <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n          Sopa</ion-label>\n        <ion-input type=\"number\" name=\"Gr_ML_Sopa\" [(ngModel)]=\"objeto.Gr_ML_Sopa\" required pattern=\"[0-9\\.]+\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-item>\n      <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n      <ion-label>\n        Segundo\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Cantidad Min Max </ion-label>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Segundo\" [(ngModel)]=\"objeto.Gr_ML_Segundo\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_min}}\"> {{prod.nombreali}} = {{prod.cantidad_min}}</ion-select-option>\n        <ion-label *ngFor=\"let prod of pruebas1\">{{prod.nombreali}}</ion-label>\n      </ion-select>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Segundo\" [(ngModel)]=\"objeto.Gr_ML_Segundo\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_med}}\">{{prod.nombreali}} = {{prod.cantidad_med}}</ion-select-option>\n      </ion-select>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Segundo\" [(ngModel)]=\"objeto.Gr_ML_Segundo\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_max}}\">{{prod.nombreali}} = {{prod.cantidad_max}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">\n          <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n          Segundo</ion-label>\n        <ion-input type=\"number\" name=\"Gr_ML_Segundo\" [(ngModel)]=\"objeto.Gr_ML_Segundo\" required pattern=\"[0-9\\.]+\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-item>\n      <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n      <ion-label>\n        Cena\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Cantidad Min Max </ion-label>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Cena\" [(ngModel)]=\"objeto.Gr_ML_Cena\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_min}}\"> {{prod.nombreali}} = {{prod.cantidad_min}}</ion-select-option>\n        <ion-label *ngFor=\"let prod of pruebas1\">{{prod.nombreali}}</ion-label>\n      </ion-select>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Cena\" [(ngModel)]=\"objeto.Gr_ML_Cena\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_med}}\">{{prod.nombreali}} = {{prod.cantidad_med}}</ion-select-option>\n      </ion-select>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Cena\" [(ngModel)]=\"objeto.Gr_ML_Cena\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_max}}\">{{prod.nombreali}} = {{prod.cantidad_max}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">\n          <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n          Cena</ion-label>\n        <ion-input type=\"number\" name=\"Gr_ML_Cena\" [(ngModel)]=\"objeto.Gr_ML_Cena\" required pattern=\"[0-9\\.]+\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    \n    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"formulario.invalid\"  [disabled]=\"disabledButton\"  (click)=\"agregarNU()\">\n  \n      Registrar\n    </ion-button>\n\n  </form>\n\n\n  <ion-item>\n    <ion-badge color=\"danger\" slot=\"start\">TABLA DE REGISTRO</ion-badge>\n  </ion-item>\n\n\n  \n  <ion-slides>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Alimento</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Unidad de Medida</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_alimnentos}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Unidad_de_Media}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Alimento</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Datos numericos</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_alimnentos}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Gr_ML_Desayuno}}-</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Gr_ML_Sopa}}-</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Gr_ML_Segundo}}-</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Gr_ML_Cena}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n    \n  \n  \n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Alimento</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Eliminar</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_alimnentos}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-button expand=\"fullscreen\" size=\"small\" shape=\"round\" fill=\"outline\"  (click)=\"delData(prod.id_PDL)\">E</ion-button>   \n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    \n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Alimento</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Modificar</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_alimnentos}}</ion-card-title>\n\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-button expand=\"fullscreen\" size=\"small\" shape=\"round\" fill=\"outline\"  (click)=\"abrirCrud(prod.id_PDL)\">Modificar</ion-button>   \n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n    \n  </ion-slides>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/registro-pedi-dia-ll/registro-pedi-dia-ll-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/registro-pedi-dia-ll/registro-pedi-dia-ll-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: RegistroPediDiaLlPageRoutingModule */

  /***/
  function srcAppPagesRegistroPediDiaLlRegistroPediDiaLlRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPediDiaLlPageRoutingModule", function () {
      return RegistroPediDiaLlPageRoutingModule;
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


    var _registro_pedi_dia_ll_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registro-pedi-dia-ll.page */
    "./src/app/pages/registro-pedi-dia-ll/registro-pedi-dia-ll.page.ts");

    var routes = [{
      path: '',
      component: _registro_pedi_dia_ll_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPediDiaLlPage"]
    }];

    var RegistroPediDiaLlPageRoutingModule = function RegistroPediDiaLlPageRoutingModule() {
      _classCallCheck(this, RegistroPediDiaLlPageRoutingModule);
    };

    RegistroPediDiaLlPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistroPediDiaLlPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/registro-pedi-dia-ll/registro-pedi-dia-ll.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/registro-pedi-dia-ll/registro-pedi-dia-ll.module.ts ***!
    \***************************************************************************/

  /*! exports provided: RegistroPediDiaLlPageModule */

  /***/
  function srcAppPagesRegistroPediDiaLlRegistroPediDiaLlModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPediDiaLlPageModule", function () {
      return RegistroPediDiaLlPageModule;
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


    var _registro_pedi_dia_ll_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registro-pedi-dia-ll-routing.module */
    "./src/app/pages/registro-pedi-dia-ll/registro-pedi-dia-ll-routing.module.ts");
    /* harmony import */


    var _registro_pedi_dia_ll_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registro-pedi-dia-ll.page */
    "./src/app/pages/registro-pedi-dia-ll/registro-pedi-dia-ll.page.ts");

    var RegistroPediDiaLlPageModule = function RegistroPediDiaLlPageModule() {
      _classCallCheck(this, RegistroPediDiaLlPageModule);
    };

    RegistroPediDiaLlPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registro_pedi_dia_ll_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPediDiaLlPageRoutingModule"]],
      declarations: [_registro_pedi_dia_ll_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPediDiaLlPage"]]
    })], RegistroPediDiaLlPageModule);
    /***/
  },

  /***/
  "./src/app/pages/registro-pedi-dia-ll/registro-pedi-dia-ll.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/registro-pedi-dia-ll/registro-pedi-dia-ll.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegistroPediDiaLlRegistroPediDiaLlPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".summary_row {\n  display: flex;\n  flex-wrap: wrap;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.summarycell {\n  overflow: auto;\n  word-wrap: break-word;\n  width: 43vw;\n  border: 2px solid #052646;\n  border-radius: 10px 10px 10px 10px;\n  padding: 5px;\n  text-align: right;\n  font-weight: bold;\n  text-align: center;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8tcGVkaS1kaWEtbGwvQzpcXFVzZXJzXFx3YW1zc1xcRGVza3RvcFxccHJ1ZWJhIGVsZWN0dHJvblxccHJvR1xccHJveWVjdG8yNy9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdHJvLXBlZGktZGlhLWxsXFxyZWdpc3Ryby1wZWRpLWRpYS1sbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJvLXBlZGktZGlhLWxsL3JlZ2lzdHJvLXBlZGktZGlhLWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Ryby1wZWRpLWRpYS1sbC9yZWdpc3Ryby1wZWRpLWRpYS1sbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VtbWFyeV9yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG5cclxufVxyXG5cclxuLnN1bW1hcnljZWxse1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3aWR0aDogNDN2dztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICAjMDUyNjQ2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbiIsIi5zdW1tYXJ5X3JvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4uc3VtbWFyeWNlbGwge1xuICBvdmVyZmxvdzogYXV0bztcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aWR0aDogNDN2dztcbiAgYm9yZGVyOiAycHggc29saWQgIzA1MjY0NjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/registro-pedi-dia-ll/registro-pedi-dia-ll.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/registro-pedi-dia-ll/registro-pedi-dia-ll.page.ts ***!
    \*************************************************************************/

  /*! exports provided: RegistroPediDiaLlPage */

  /***/
  function srcAppPagesRegistroPediDiaLlRegistroPediDiaLlPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPediDiaLlPage", function () {
      return RegistroPediDiaLlPage;
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

    var RegistroPediDiaLlPage = /*#__PURE__*/function () {
      function RegistroPediDiaLlPage(http, router, toastCtrl, loadingCtrl, alertCtrl, accsPrvds) {
        _classCallCheck(this, RegistroPediDiaLlPage);

        this.http = http;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.accsPrvds = accsPrvds;
        this.objeto = {
          Des_de_alimnentos: "",
          Unidad_de_Media: "",
          Gr_ML_Desayuno: "",
          Gr_ML_Sopa: "",
          Gr_ML_Segundo: "",
          Gr_ML_Cena: ""
        };
        this.pruebas = [];
        this.url = 'http://localhost/proG/server_api/crear_registroPDL.php';
        this.url2 = 'http://localhost/proG/server_api/menu_registroPDL.php'; //producto

        this.objeto1 = {
          tipo: "",
          nombreali: "",
          cantidad_pro: "",
          cantidad_min: "",
          cantidad_med: "",
          cantidad_max: ""
        };
        this.pruebas1 = [];
        this.url3 = 'http://localhost/proG/server_api/menu_productol.php';
        this.listarRegistroPDL();
        this.listarRegistroPA();
      }

      _createClass(RegistroPediDiaLlPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "agregarRegistroPDL",
        value: function agregarRegistroPDL(obj) {
          return this.http.post(this.url, JSON.stringify(obj));
        }
      }, {
        key: "agregarNU",
        value: function agregarNU() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.agregarRegistroPDL(this.objeto).subscribe(function (resp) {
                      _this.objeto.Des_de_alimnentos = '';
                      _this.objeto.Unidad_de_Media = '';
                      _this.objeto.Gr_ML_Desayuno = '';
                      _this.objeto.Gr_ML_Sopa = '';
                      _this.objeto.Gr_ML_Segundo = '';
                      _this.objeto.Gr_ML_Cena = '';

                      _this.listarRegistroPDL();

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
        key: "getRegistroPDL",
        value: function getRegistroPDL() {
          return this.http.get(this.url2);
        }
      }, {
        key: "listarRegistroPDL",
        value: function listarRegistroPDL() {
          var _this2 = this;

          this.pruebas = [];
          this.getRegistroPDL().subscribe(function (res) {
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
                        aksi: 'eliminar_PDL',
                        id: a
                      };

                      _this3.accsPrvds.postData(body, 'proses_api.php').subscribe(function (res) {
                        if (res.success == true) {
                          _this3.presentToast('Eliminado con exito');

                          _this3.listarRegistroPDL();
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
          this.router.navigate(['/mod-pdl/' + a]);
        } //producto /////////////////

      }, {
        key: "getRegistroPA",
        value: function getRegistroPA() {
          return this.http.get(this.url3);
        }
      }, {
        key: "listarRegistroPA",
        value: function listarRegistroPA() {
          var _this4 = this;

          this.pruebas1 = [];
          this.getRegistroPA().subscribe(function (res) {
            for (var i = 0; i < res.length; i++) {
              _this4.pruebas1.push(res[i]);
            }
          });
        }
      }]);

      return RegistroPediDiaLlPage;
    }();

    RegistroPediDiaLlPage.ctorParameters = function () {
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

    RegistroPediDiaLlPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registro-pedi-dia-ll',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./registro-pedi-dia-ll.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-pedi-dia-ll/registro-pedi-dia-ll.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./registro-pedi-dia-ll.page.scss */
      "./src/app/pages/registro-pedi-dia-ll/registro-pedi-dia-ll.page.scss"))["default"]]
    })], RegistroPediDiaLlPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-registro-pedi-dia-ll-registro-pedi-dia-ll-module-es5.js.map