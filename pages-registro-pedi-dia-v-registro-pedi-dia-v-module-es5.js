function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registro-pedi-dia-v-registro-pedi-dia-v-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-pedi-dia-v/registro-pedi-dia-v.page.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-pedi-dia-v/registro-pedi-dia-v.page.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegistroPediDiaVRegistroPediDiaVPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n\n    <ion-title>\n      REGISTRO DE DATOS REGIÓN VALLE \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding [fullscreen]=\"true\">\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      Pedido Diario región Valle\n    </ion-label>\n  </ion-item>\n\n  <ion-slides>\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Nombre del Alimento</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Tipo de Alimento</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas1\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.nombreali}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas1\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.tipo}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Nombre del Alimento</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Cantidad</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas1\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.nombreali}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas1\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.cantidad_pro}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n    \n  </ion-slides>\n\n\n\n\n  <form #formulario=\"ngForm\"  (ngSubmint)=\"agregarNU()\">\n\n    \n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Asignar Alimento</ion-label>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\"  name=\"Des_de_alimnentos\" [(ngModel)]=\"objeto.Des_de_alimnentos\" required >\n        <ion-select-option *ngFor=\"let prod of pruebas1\" value=\"{{prod.nombreali}}\" >{{prod.nombreali}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    \n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Unidad de Medida</ion-label>\n      <ion-select value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" [(ngModel)]=\"objeto.Unidad_de_Media\" name=\"Unidad_de_Media\" required>\n        <ion-select-option value=\"Kg\">Kg</ion-select-option>\n        <ion-select-option value=\"Lb\">Lb</ion-select-option>\n        <ion-select-option value=\"Amrr\">Amrr</ion-select-option>\n        <ion-select-option value=\"Lt\">Lt</ion-select-option>\n        <ion-select-option value=\"g\">g</ion-select-option>\n        <ion-select-option value=\"ml\">ml</ion-select-option>\n        <ion-select-option value=\"unidad\">unidad</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n      <ion-label>\n        Desayuno \n      </ion-label>\n    </ion-item>\n\n   \n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Cantidad Min Max </ion-label>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Desayuno\" [(ngModel)]=\"objeto.Gr_ML_Desayuno\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_min}}\"> {{prod.nombreali}} = {{prod.cantidad_min}}</ion-select-option>\n        <ion-label *ngFor=\"let prod of pruebas1\">{{prod.nombreali}}</ion-label>\n      </ion-select>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Desayuno\" [(ngModel)]=\"objeto.Gr_ML_Desayuno\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_med}}\">{{prod.nombreali}} = {{prod.cantidad_med}}</ion-select-option>\n      </ion-select>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Desayuno\" [(ngModel)]=\"objeto.Gr_ML_Desayuno\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_max}}\">{{prod.nombreali}} = {{prod.cantidad_max}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">\n          <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n          Desayuno</ion-label>\n        <ion-input type=\"number\" name=\"Gr_ML_Desayuno\" [(ngModel)]=\"objeto.Gr_ML_Desayuno\" required pattern=\"[0-9\\.]+\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n\n\n    <ion-item>\n      <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n      <ion-label>\n        Sopa\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Cantidad Min Max </ion-label>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Sopa\" [(ngModel)]=\"objeto.Gr_ML_Sopa\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_min}}\"> {{prod.nombreali}} = {{prod.cantidad_min}}</ion-select-option>\n        <ion-label *ngFor=\"let prod of pruebas1\">{{prod.nombreali}}</ion-label>\n      </ion-select>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Sopa\" [(ngModel)]=\"objeto.Gr_ML_Sopa\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_med}}\">{{prod.nombreali}} = {{prod.cantidad_med}}</ion-select-option>\n      </ion-select>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Sopa\" [(ngModel)]=\"objeto.Gr_ML_Sopa\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_max}}\">{{prod.nombreali}} = {{prod.cantidad_max}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    \n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">\n          <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n          Sopa</ion-label>\n        <ion-input type=\"number\" name=\"Gr_ML_Sopa\" [(ngModel)]=\"objeto.Gr_ML_Sopa\" required pattern=\"[0-9\\.]+\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-item>\n      <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n      <ion-label>\n        Segundo\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Cantidad Min Max </ion-label>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Segundo\" [(ngModel)]=\"objeto.Gr_ML_Segundo\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_min}}\"> {{prod.nombreali}} = {{prod.cantidad_min}}</ion-select-option>\n        <ion-label *ngFor=\"let prod of pruebas1\">{{prod.nombreali}}</ion-label>\n      </ion-select>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Segundo\" [(ngModel)]=\"objeto.Gr_ML_Segundo\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_med}}\">{{prod.nombreali}} = {{prod.cantidad_med}}</ion-select-option>\n      </ion-select>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Segundo\" [(ngModel)]=\"objeto.Gr_ML_Segundo\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_max}}\">{{prod.nombreali}} = {{prod.cantidad_max}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">\n          <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n          Segundo</ion-label>\n        <ion-input type=\"number\" name=\"Gr_ML_Segundo\" [(ngModel)]=\"objeto.Gr_ML_Segundo\" required pattern=\"[0-9\\.]+\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-item>\n      <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n      <ion-label>\n        Cena\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Cantidad Min Max </ion-label>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Cena\" [(ngModel)]=\"objeto.Gr_ML_Cena\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_min}}\"> {{prod.nombreali}} = {{prod.cantidad_min}}</ion-select-option>\n        <ion-label *ngFor=\"let prod of pruebas1\">{{prod.nombreali}}</ion-label>\n      </ion-select>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Cena\" [(ngModel)]=\"objeto.Gr_ML_Cena\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_med}}\">{{prod.nombreali}} = {{prod.cantidad_med}}</ion-select-option>\n      </ion-select>\n      <ion-select  value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" name=\"Gr_ML_Cena\" [(ngModel)]=\"objeto.Gr_ML_Cena\" required >\n        <ion-select-option  *ngFor=\"let prod of pruebas1\" value=\"{{prod.cantidad_max}}\">{{prod.nombreali}} = {{prod.cantidad_max}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">\n          <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n          Cena</ion-label>\n        <ion-input type=\"number\" name=\"Gr_ML_Cena\" [(ngModel)]=\"objeto.Gr_ML_Cena\" required pattern=\"[0-9\\.]+\"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    \n\n   \n    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"formulario.invalid\"  [disabled]=\"disabledButton\"  (click)=\"agregarNU()\">\n  \n      Registrar\n    </ion-button>\n\n  </form>\n\n\n  <ion-item>\n    <ion-badge color=\"danger\" slot=\"start\">TABLA DE REGISTRO</ion-badge>\n  </ion-item>\n\n  \n  \n  <ion-slides>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Alimento</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Unidad de Medida</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_alimnentos}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Unidad_de_Media}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Alimento</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Datos numericos</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_alimnentos}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Gr_ML_Desayuno}}-</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Gr_ML_Sopa}}-</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Gr_ML_Segundo}}-</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Gr_ML_Cena}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n   \n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Alimento</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Eliminar</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_alimnentos}}</ion-card-title>\n    \n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-button expand=\"fullscreen\" size=\"small\" shape=\"round\" fill=\"outline\"  (click)=\"delData(prod.id_PDV)\">E</ion-button>   \n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Alimento</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Modificar</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_alimnentos}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-button expand=\"fullscreen\" size=\"small\" shape=\"round\" fill=\"outline\"  (click)=\"abrirCrud(prod.id_PDV)\">Modificar</ion-button>   \n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n  \n  </ion-slides>\n\n\n</ion-content>\n\n  \n \n\n\n";
    /***/
  },

  /***/
  "./src/app/pages/registro-pedi-dia-v/registro-pedi-dia-v-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/registro-pedi-dia-v/registro-pedi-dia-v-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: RegistroPediDiaVPageRoutingModule */

  /***/
  function srcAppPagesRegistroPediDiaVRegistroPediDiaVRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPediDiaVPageRoutingModule", function () {
      return RegistroPediDiaVPageRoutingModule;
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


    var _registro_pedi_dia_v_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registro-pedi-dia-v.page */
    "./src/app/pages/registro-pedi-dia-v/registro-pedi-dia-v.page.ts");

    var routes = [{
      path: '',
      component: _registro_pedi_dia_v_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPediDiaVPage"]
    }];

    var RegistroPediDiaVPageRoutingModule = function RegistroPediDiaVPageRoutingModule() {
      _classCallCheck(this, RegistroPediDiaVPageRoutingModule);
    };

    RegistroPediDiaVPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistroPediDiaVPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/registro-pedi-dia-v/registro-pedi-dia-v.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/registro-pedi-dia-v/registro-pedi-dia-v.module.ts ***!
    \*************************************************************************/

  /*! exports provided: RegistroPediDiaVPageModule */

  /***/
  function srcAppPagesRegistroPediDiaVRegistroPediDiaVModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPediDiaVPageModule", function () {
      return RegistroPediDiaVPageModule;
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


    var _registro_pedi_dia_v_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registro-pedi-dia-v-routing.module */
    "./src/app/pages/registro-pedi-dia-v/registro-pedi-dia-v-routing.module.ts");
    /* harmony import */


    var _registro_pedi_dia_v_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registro-pedi-dia-v.page */
    "./src/app/pages/registro-pedi-dia-v/registro-pedi-dia-v.page.ts");

    var RegistroPediDiaVPageModule = function RegistroPediDiaVPageModule() {
      _classCallCheck(this, RegistroPediDiaVPageModule);
    };

    RegistroPediDiaVPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registro_pedi_dia_v_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPediDiaVPageRoutingModule"]],
      declarations: [_registro_pedi_dia_v_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPediDiaVPage"]]
    })], RegistroPediDiaVPageModule);
    /***/
  },

  /***/
  "./src/app/pages/registro-pedi-dia-v/registro-pedi-dia-v.page.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/registro-pedi-dia-v/registro-pedi-dia-v.page.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegistroPediDiaVRegistroPediDiaVPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".summary_row {\n  display: flex;\n  flex-wrap: wrap;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.summarycell {\n  overflow: auto;\n  word-wrap: break-word;\n  width: 43vw;\n  border: 2px solid #052646;\n  border-radius: 10px 10px 10px 10px;\n  padding: 5px;\n  text-align: right;\n  font-weight: bold;\n  text-align: center;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8tcGVkaS1kaWEtdi9DOlxcVXNlcnNcXHdhbXNzXFxEZXNrdG9wXFxwcnVlYmEgZWxlY3R0cm9uXFxwcm9HXFxwcm95ZWN0bzI3L3NyY1xcYXBwXFxwYWdlc1xccmVnaXN0cm8tcGVkaS1kaWEtdlxccmVnaXN0cm8tcGVkaS1kaWEtdi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJvLXBlZGktZGlhLXYvcmVnaXN0cm8tcGVkaS1kaWEtdi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ0NKOztBREdBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0cm8tcGVkaS1kaWEtdi9yZWdpc3Ryby1wZWRpLWRpYS12LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdW1tYXJ5X3Jvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcblxyXG59XHJcblxyXG4uc3VtbWFyeWNlbGx7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdpZHRoOiA0M3Z3O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgICMwNTI2NDY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuIiwiLnN1bW1hcnlfcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5zdW1tYXJ5Y2VsbCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiA0M3Z3O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDUyNjQ2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDExcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/registro-pedi-dia-v/registro-pedi-dia-v.page.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/registro-pedi-dia-v/registro-pedi-dia-v.page.ts ***!
    \***********************************************************************/

  /*! exports provided: RegistroPediDiaVPage */

  /***/
  function srcAppPagesRegistroPediDiaVRegistroPediDiaVPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroPediDiaVPage", function () {
      return RegistroPediDiaVPage;
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

    var RegistroPediDiaVPage = /*#__PURE__*/function () {
      function RegistroPediDiaVPage(http, router, toastCtrl, loadingCtrl, alertCtrl, accsPrvds) {
        _classCallCheck(this, RegistroPediDiaVPage);

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
        this.url = 'http://localhost/proG/server_api/crear_registroPDV.php';
        this.url2 = 'http://localhost/proG/server_api/menu_registroPDV.php';
        this.objeto1 = {
          tipo: "",
          nombreali: "",
          cantidad_pro: "",
          cantidad_min: "",
          cantidad_med: "",
          cantidad_max: ""
        };
        this.pruebas1 = [];
        this.url3 = 'http://localhost/proG/server_api/menu_productov.php';
        this.listarRegistroPDV();
        this.listarRegistroPA();
      }

      _createClass(RegistroPediDiaVPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "agregarRegistroPDV",
        value: function agregarRegistroPDV(obj) {
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
                    this.agregarRegistroPDV(this.objeto).subscribe(function (resp) {
                      _this.objeto.Des_de_alimnentos = '';
                      _this.objeto.Unidad_de_Media = '';
                      _this.objeto.Gr_ML_Desayuno = '';
                      _this.objeto.Gr_ML_Sopa = '';
                      _this.objeto.Gr_ML_Segundo = '';
                      _this.objeto.Gr_ML_Cena = '';

                      _this.listarRegistroPDV();

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
        key: "getRegistroPDV",
        value: function getRegistroPDV() {
          return this.http.get(this.url2);
        }
      }, {
        key: "listarRegistroPDV",
        value: function listarRegistroPDV() {
          var _this2 = this;

          this.pruebas = [];
          this.getRegistroPDV().subscribe(function (res) {
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
                        aksi: 'eliminar_PDV',
                        id: a
                      };

                      _this3.accsPrvds.postData(body, 'proses_api.php').subscribe(function (res) {
                        if (res.success == true) {
                          _this3.presentToast('Eliminado con exito');

                          _this3.listarRegistroPDV();
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
          this.router.navigate(['/mod-pdv/' + a]);
        }
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

      return RegistroPediDiaVPage;
    }();

    RegistroPediDiaVPage.ctorParameters = function () {
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

    RegistroPediDiaVPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registro-pedi-dia-v',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./registro-pedi-dia-v.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-pedi-dia-v/registro-pedi-dia-v.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./registro-pedi-dia-v.page.scss */
      "./src/app/pages/registro-pedi-dia-v/registro-pedi-dia-v.page.scss"))["default"]]
    })], RegistroPediDiaVPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-registro-pedi-dia-v-registro-pedi-dia-v-module-es5.js.map