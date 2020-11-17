(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registro-pedi-semanal-v-registro-pedi-semanal-v-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n\n    <ion-title>\n      REGISTRO DE DATOS REGIÓN VALLE \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      PEDIDO SEMANAL REGIÓN VALLE \n    </ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-badge color=\"danger\" slot=\"start\">Costo total Pedido Diario</ion-badge>\n  </ion-item>\n\n  <ion-slides>\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Fecha</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Costo Total</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod2 of pruebas12\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod2.semana}}.</ion-card-subtitle>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod2 of pruebas12\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod2.total_costo}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Fecha</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Eliminar</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod2 of pruebas12\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod2.semana}}.</ion-card-subtitle>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod2 of pruebas12\">\n            <ion-button expand=\"fullscreen\" size=\"small\" shape=\"round\" fill=\"outline\"  (click)=\"delDatos(prod2.id_DV)\">E</ion-button>   \n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n  </ion-slides>\n\n  <form #formulario=\"ngForm\"  (ngSubmint)=\"agregarSE()\">\n\n    <ion-item>\n      <ion-label>N° de Semana</ion-label>\n      <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" placeholder=\"Seleccione una\" [(ngModel)]=\"objeto.Des_de_semana\" name=\"Des_de_semana\" required>\n        <ion-select-option value=\"SEMANA N° 1\">SEMANA N° 1</ion-select-option>\n        <ion-select-option value=\"SEMANA N° 2\">SEMANA N° 2</ion-select-option>\n        <ion-select-option value=\"SEMANA N° 3\">SEMANA N° 3</ion-select-option>\n        <ion-select-option value=\"SEMANA N° 4\">SEMANA N° 4</ion-select-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Mes</ion-label>\n      <ion-select value=\"brown\" okText=\"Ok\" cancelText=\"Salir\" [(ngModel)]=\"objeto.mes\" name=\"mes\" required>\n        <ion-select-option value=\"Enero\">Enero</ion-select-option>\n        <ion-select-option value=\"Febrero\">Febrero</ion-select-option>\n        <ion-select-option value=\"Marzo\">Marzo</ion-select-option>\n        <ion-select-option value=\"Abril\">Abril</ion-select-option>\n        <ion-select-option value=\"Mayo\">Mayo</ion-select-option>\n        <ion-select-option value=\"Junio\">Junio</ion-select-option>\n        <ion-select-option value=\"Julio\">Julio</ion-select-option>\n        <ion-select-option value=\"Agosto\">Agosto</ion-select-option>\n        <ion-select-option value=\"Septiembre\">Septiembre</ion-select-option>\n        <ion-select-option value=\"Octubre\">Octubre</ion-select-option>\n        <ion-select-option value=\"Noviembre\">Noviembre</ion-select-option>\n        <ion-select-option value=\"Diciembre\">Diciembre</ion-select-option>\n      </ion-select>\n    </ion-item>\n  \n  \n  \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n         Lunes</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.lunes\" name=\"lunes\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n         Martes\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.martes\" name=\"martes\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Miercoles</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.miercoles\" name=\"miercoles\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  \n    \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Jueves</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.jueves\" name=\"jueves\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  \n    \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Viernes</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.viernes\" name=\"viernes\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  \n  \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Sabado</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.sabado\" name=\"sabado\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  \n    \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Domingo</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.domingo\" name=\"domingo\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"formulario.invalid\"  [disabled]=\"disabledButton\"  (click)=\"agregarSE()\">\n      Registrar\n    </ion-button>\n\n\n  </form>\n\n\n  <ion-item>\n    <ion-badge color=\"danger\" slot=\"start\">TABLA DE REGISTRO</ion-badge>\n  </ion-item>\n\n  \n  <ion-slides>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>N° de Semana</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Mes</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_semana}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.mes}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Numero de Semana</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Datos numericos</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_semana}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.lunes}}-</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.martes}}-</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.miercoles}}-</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.jueves}}</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.viernes}}</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.sabado}}</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.domingo}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n    \n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Numero de Semana</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Eliminar</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_semana}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-button expand=\"fullscreen\" size=\"small\" shape=\"round\" fill=\"outline\"  (click)=\"delData(prod.id_PSV)\">E</ion-button>   \n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Numero de Semana</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Modificar</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_semana}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-button expand=\"fullscreen\" size=\"small\" shape=\"round\" fill=\"outline\" (click)=\"abrirCrud(prod.id_PSV)\">Modificar</ion-button>   \n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n    \n    \n  </ion-slides>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: RegistroPediSemanalVPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPediSemanalVPageRoutingModule", function() { return RegistroPediSemanalVPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registro_pedi_semanal_v_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro-pedi-semanal-v.page */ "./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.page.ts");




const routes = [
    {
        path: '',
        component: _registro_pedi_semanal_v_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPediSemanalVPage"]
    }
];
let RegistroPediSemanalVPageRoutingModule = class RegistroPediSemanalVPageRoutingModule {
};
RegistroPediSemanalVPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistroPediSemanalVPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.module.ts ***!
  \*********************************************************************************/
/*! exports provided: RegistroPediSemanalVPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPediSemanalVPageModule", function() { return RegistroPediSemanalVPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registro_pedi_semanal_v_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-pedi-semanal-v-routing.module */ "./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v-routing.module.ts");
/* harmony import */ var _registro_pedi_semanal_v_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro-pedi-semanal-v.page */ "./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.page.ts");







let RegistroPediSemanalVPageModule = class RegistroPediSemanalVPageModule {
};
RegistroPediSemanalVPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registro_pedi_semanal_v_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPediSemanalVPageRoutingModule"]
        ],
        declarations: [_registro_pedi_semanal_v_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPediSemanalVPage"]]
    })
], RegistroPediSemanalVPageModule);



/***/ }),

/***/ "./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".summary_row {\n  display: flex;\n  flex-wrap: wrap;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.summarycell {\n  overflow: auto;\n  word-wrap: break-word;\n  width: 43vw;\n  border: 2px solid #052646;\n  border-radius: 10px 10px 10px 10px;\n  padding: 5px;\n  text-align: right;\n  font-weight: bold;\n  text-align: center;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8tcGVkaS1zZW1hbmFsLXYvQzpcXFVzZXJzXFx3YW1zc1xcRGVza3RvcFxccHJ1eWVjdG8gZW1pXFxwcm9HXFxwcm95ZWN0bzI3L3NyY1xcYXBwXFxwYWdlc1xccmVnaXN0cm8tcGVkaS1zZW1hbmFsLXZcXHJlZ2lzdHJvLXBlZGktc2VtYW5hbC12LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8tcGVkaS1zZW1hbmFsLXYvcmVnaXN0cm8tcGVkaS1zZW1hbmFsLXYucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNDSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJvLXBlZGktc2VtYW5hbC12L3JlZ2lzdHJvLXBlZGktc2VtYW5hbC12LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdW1tYXJ5X3Jvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcblxyXG59XHJcblxyXG4uc3VtbWFyeWNlbGx7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdpZHRoOiA0M3Z3O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgICMwNTI2NDY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuIiwiLnN1bW1hcnlfcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5zdW1tYXJ5Y2VsbCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiA0M3Z3O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDUyNjQ2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDExcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.page.ts ***!
  \*******************************************************************************/
/*! exports provided: RegistroPediSemanalVPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPediSemanalVPage", function() { return RegistroPediSemanalVPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/access-providers */ "./src/app/providers/access-providers.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






let RegistroPediSemanalVPage = class RegistroPediSemanalVPage {
    constructor(http, router, toastCtrl, loadingCtrl, alertCtrl, accsPrvds) {
        this.http = http;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.accsPrvds = accsPrvds;
        //dato de calculo
        this.objeto12 = { semana: "", total_costo: "" };
        this.pruebas12 = [];
        this.url3 = 'http://localhost/proG/server_api/menu_datoV.php';
        this.objeto = { Des_de_semana: "", mes: "", lunes: "", martes: "", miercoles: "", jueves: "", viernes: "", sabado: "", domingo: "" };
        this.pruebas = [];
        this.url = 'http://localhost/proG/server_api/crear_registroPSV.php';
        this.url2 = 'http://localhost/proG/server_api/menu_registroPSV.php';
        this.listarRegistroPSV();
        this.listarRegistroDV();
    }
    ngOnInit() {
    }
    agregarRegistroPSV(obj) {
        return this.http.post(this.url, JSON.stringify(obj));
    }
    agregarSE() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.agregarRegistroPSV(this.objeto)
                .subscribe((resp) => {
                this.objeto.Des_de_semana = '';
                this.objeto.mes = '';
                this.objeto.lunes = '';
                this.objeto.martes = '';
                this.objeto.miercoles = '';
                this.objeto.jueves = '';
                this.objeto.viernes = '';
                this.objeto.sabado = '';
                this.objeto.domingo = '';
                this.listarRegistroPSV();
                console.log(resp);
            });
            const toast = yield this.toastCtrl.create({
                message: "Registro Exitoso",
                duration: 1500
            });
            toast.present();
        });
    }
    getRegistroPSV() {
        return this.http.get(this.url2);
    }
    listarRegistroPSV() {
        this.pruebas = [];
        this.getRegistroPSV().subscribe(res => {
            for (let i = 0; i < res.length; i++) {
                this.pruebas.push(res[i]);
            }
        });
    }
    delData(a) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                let body = {
                    aksi: 'eliminar_PSV',
                    id: a
                };
                this.accsPrvds.postData(body, 'proses_api.php').subscribe((res) => {
                    if (res.success == true) {
                        this.presentToast('Eliminado con exito');
                        this.listarRegistroPSV();
                    }
                    else {
                        this.presentToast('delete error');
                    }
                });
            });
        });
    }
    presentToast(a) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: a,
                duration: 1500
            });
            toast.present();
        });
    }
    abrirCrud(a) {
        this.router.navigate(['/modsemanav/' + a]);
    }
    /// datos visualizzar 
    getRegistroDV() {
        return this.http.get(this.url3);
    }
    listarRegistroDV() {
        this.pruebas12 = [];
        this.getRegistroDV().subscribe(res => {
            for (let i = 0; i < res.length; i++) {
                this.pruebas12.push(res[i]);
            }
        });
    }
    delDatos(a) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                let body = {
                    aksi: 'eliminar_DV',
                    id: a
                };
                this.accsPrvds.postData(body, 'proses_api.php').subscribe((res) => {
                    if (res.success == true) {
                        this.presentToast('Eliminado con exito');
                        this.listarRegistroDV();
                    }
                    else {
                        this.presentToast('delete error');
                    }
                });
            });
        });
    }
};
RegistroPediSemanalVPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__["AccessProviders"] }
];
RegistroPediSemanalVPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro-pedi-semanal-v',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registro-pedi-semanal-v.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registro-pedi-semanal-v.page.scss */ "./src/app/pages/registro-pedi-semanal-v/registro-pedi-semanal-v.page.scss")).default]
    })
], RegistroPediSemanalVPage);



/***/ })

}]);
//# sourceMappingURL=pages-registro-pedi-semanal-v-registro-pedi-semanal-v-module-es2015.js.map