(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registro-pedi-semanal-ll-registro-pedi-semanal-ll-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-pedi-semanal-ll/registro-pedi-semanal-ll.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-pedi-semanal-ll/registro-pedi-semanal-ll.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n\n    <ion-title>\n      REGISTRO DE DATOS REGIÓN LLANOS \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      PEDIDO SEMANAL REGIÓN LLANOS\n    </ion-label>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-badge color=\"danger\" slot=\"start\">Costo total Pedido Diario</ion-badge>\n  </ion-item>\n\n  <ion-slides>\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Fecha</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Costo Total</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod2 of pruebas12\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod2.semana}}.</ion-card-subtitle>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod2 of pruebas12\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod2.total_costo}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Fecha</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Eliminar</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod2 of pruebas12\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod2.semana}}.</ion-card-subtitle>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod2 of pruebas12\">\n            <ion-button expand=\"fullscreen\" size=\"small\" shape=\"round\" fill=\"outline\"  (click)=\"delDatos(prod2.id_DL)\">E</ion-button>   \n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n  </ion-slides>\n  <form #formulario=\"ngForm\"  (ngSubmint)=\"agregarSE()\">\n\n    <ion-item>\n      <ion-label>N° de Semana</ion-label>\n      <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" placeholder=\"Seleccione una\" [(ngModel)]=\"objeto.Des_de_semana\" name=\"Des_de_semana\" required>\n        <ion-select-option value=\"SEMANA N° 1\">SEMANA N° 1</ion-select-option>\n        <ion-select-option value=\"SEMANA N° 2\">SEMANA N° 2</ion-select-option>\n        <ion-select-option value=\"SEMANA N° 3\">SEMANA N° 3</ion-select-option>\n        <ion-select-option value=\"SEMANA N° 4\">SEMANA N° 4</ion-select-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Mes</ion-label>\n      <ion-select value=\"brown\" okText=\"Ok\" cancelText=\"Salir\" [(ngModel)]=\"objeto.mes\" name=\"mes\" required>\n        <ion-select-option value=\"Enero\">Enero</ion-select-option>\n        <ion-select-option value=\"Febrero\">Febrero</ion-select-option>\n        <ion-select-option value=\"Marzo\">Marzo</ion-select-option>\n        <ion-select-option value=\"Abril\">Abril</ion-select-option>\n        <ion-select-option value=\"Mayo\">Mayo</ion-select-option>\n        <ion-select-option value=\"Junio\">Junio</ion-select-option>\n        <ion-select-option value=\"Julio\">Julio</ion-select-option>\n        <ion-select-option value=\"Agosto\">Agosto</ion-select-option>\n        <ion-select-option value=\"Septiembre\">Septiembre</ion-select-option>\n        <ion-select-option value=\"Octubre\">Octubre</ion-select-option>\n        <ion-select-option value=\"Noviembre\">Noviembre</ion-select-option>\n        <ion-select-option value=\"Diciembre\">Diciembre</ion-select-option>\n      </ion-select>\n    </ion-item>\n  \n  \n  \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n         Lunes</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.lunes\" name=\"lunes\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n         Martes\n      </ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.martes\" name=\"martes\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Miercoles</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.miercoles\" name=\"miercoles\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  \n    \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Jueves</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.jueves\" name=\"jueves\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  \n    \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Viernes</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.viernes\" name=\"viernes\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  \n  \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Sabado</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.sabado\" name=\"sabado\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  \n    \n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Domingo</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objeto.domingo\" name=\"domingo\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"formulario.invalid\"  [disabled]=\"disabledButton\"  (click)=\"agregarSE()\">\n      Registrar\n    </ion-button>\n\n\n  </form>\n\n  <ion-item>\n    <ion-badge color=\"danger\" slot=\"start\">TABLA DE REGISTRO</ion-badge>\n  </ion-item>\n\n\n  \n  <ion-slides>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>N° de Semana</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Mes</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_semana}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.mes}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Numero de Semana</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Datos numericos</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_semana}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.lunes}}-</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.martes}}-</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.miercoles}}-</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.jueves}}</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.viernes}}</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.sabado}}</ion-card-title>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.domingo}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n    \n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Numero de Semana</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Eliminar</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_semana}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-button expand=\"fullscreen\" size=\"small\" shape=\"round\" fill=\"outline\"  (click)=\"delData(prod.id_PSL)\">E</ion-button>   \n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\"  class='summarycell'>Numero de Semana</div>\n        <div  style=\"color:#ffffff\"  class='summarycell'>Modificar</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class=\"summarycell\">\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_semana}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n     \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-button expand=\"fullscreen\" size=\"small\" shape=\"round\" fill=\"outline\" (click)=\"abrirCrud(prod.id_PSL)\">Modificar</ion-button>   \n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n    \n  </ion-slides>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/registro-pedi-semanal-ll/registro-pedi-semanal-ll-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/registro-pedi-semanal-ll/registro-pedi-semanal-ll-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: RegistroPediSemanalLlPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPediSemanalLlPageRoutingModule", function() { return RegistroPediSemanalLlPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registro_pedi_semanal_ll_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registro-pedi-semanal-ll.page */ "./src/app/pages/registro-pedi-semanal-ll/registro-pedi-semanal-ll.page.ts");




const routes = [
    {
        path: '',
        component: _registro_pedi_semanal_ll_page__WEBPACK_IMPORTED_MODULE_3__["RegistroPediSemanalLlPage"]
    }
];
let RegistroPediSemanalLlPageRoutingModule = class RegistroPediSemanalLlPageRoutingModule {
};
RegistroPediSemanalLlPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistroPediSemanalLlPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/registro-pedi-semanal-ll/registro-pedi-semanal-ll.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/registro-pedi-semanal-ll/registro-pedi-semanal-ll.module.ts ***!
  \***********************************************************************************/
/*! exports provided: RegistroPediSemanalLlPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPediSemanalLlPageModule", function() { return RegistroPediSemanalLlPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registro_pedi_semanal_ll_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro-pedi-semanal-ll-routing.module */ "./src/app/pages/registro-pedi-semanal-ll/registro-pedi-semanal-ll-routing.module.ts");
/* harmony import */ var _registro_pedi_semanal_ll_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registro-pedi-semanal-ll.page */ "./src/app/pages/registro-pedi-semanal-ll/registro-pedi-semanal-ll.page.ts");







let RegistroPediSemanalLlPageModule = class RegistroPediSemanalLlPageModule {
};
RegistroPediSemanalLlPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registro_pedi_semanal_ll_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistroPediSemanalLlPageRoutingModule"]
        ],
        declarations: [_registro_pedi_semanal_ll_page__WEBPACK_IMPORTED_MODULE_6__["RegistroPediSemanalLlPage"]]
    })
], RegistroPediSemanalLlPageModule);



/***/ }),

/***/ "./src/app/pages/registro-pedi-semanal-ll/registro-pedi-semanal-ll.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/registro-pedi-semanal-ll/registro-pedi-semanal-ll.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".summary_row {\n  display: flex;\n  flex-wrap: wrap;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.summarycell {\n  overflow: auto;\n  word-wrap: break-word;\n  width: 43vw;\n  border: 2px solid #052646;\n  border-radius: 10px 10px 10px 10px;\n  padding: 5px;\n  text-align: right;\n  font-weight: bold;\n  text-align: center;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cm8tcGVkaS1zZW1hbmFsLWxsL0M6XFxVc2Vyc1xcd2Ftc3NcXERlc2t0b3BcXHBydWViYSBlbGVjdHRyb25cXHByb0dcXHByb3llY3RvMjcvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3Ryby1wZWRpLXNlbWFuYWwtbGxcXHJlZ2lzdHJvLXBlZGktc2VtYW5hbC1sbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJvLXBlZGktc2VtYW5hbC1sbC9yZWdpc3Ryby1wZWRpLXNlbWFuYWwtbGwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNDSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJvLXBlZGktc2VtYW5hbC1sbC9yZWdpc3Ryby1wZWRpLXNlbWFuYWwtbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1bW1hcnlfcm93e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuXHJcbn1cclxuXHJcbi5zdW1tYXJ5Y2VsbHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgd2lkdGg6IDQzdnc7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAgIzA1MjY0NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcbiIsIi5zdW1tYXJ5X3JvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4uc3VtbWFyeWNlbGwge1xuICBvdmVyZmxvdzogYXV0bztcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aWR0aDogNDN2dztcbiAgYm9yZGVyOiAycHggc29saWQgIzA1MjY0NjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/registro-pedi-semanal-ll/registro-pedi-semanal-ll.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/registro-pedi-semanal-ll/registro-pedi-semanal-ll.page.ts ***!
  \*********************************************************************************/
/*! exports provided: RegistroPediSemanalLlPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPediSemanalLlPage", function() { return RegistroPediSemanalLlPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/access-providers */ "./src/app/providers/access-providers.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






let RegistroPediSemanalLlPage = class RegistroPediSemanalLlPage {
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
        this.url3 = 'http://localhost/proG/server_api/menu_datoL.php';
        this.objeto = { Des_de_semana: "", mes: "", lunes: "", martes: "", miercoles: "", jueves: "", viernes: "", sabado: "", domingo: "" };
        this.pruebas = [];
        this.url = 'http://localhost/proG/server_api/crear_registroPSL.php';
        this.url2 = 'http://localhost/proG/server_api/menu_registroPSL.php';
        this.listarRegistroPSL();
        this.listarRegistroDL();
    }
    ngOnInit() {
    }
    agregarRegistroPSL(obj) {
        return this.http.post(this.url, JSON.stringify(obj));
    }
    agregarSE() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.agregarRegistroPSL(this.objeto)
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
                this.listarRegistroPSL();
                console.log(resp);
            });
            const toast = yield this.toastCtrl.create({
                message: "Registro Exitoso",
                duration: 1500
            });
            toast.present();
        });
    }
    getRegistroPSL() {
        return this.http.get(this.url2);
    }
    listarRegistroPSL() {
        this.pruebas = [];
        this.getRegistroPSL().subscribe(res => {
            for (let i = 0; i < res.length; i++) {
                this.pruebas.push(res[i]);
            }
        });
    }
    delData(a) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                let body = {
                    aksi: 'eliminar_PSL',
                    id: a
                };
                this.accsPrvds.postData(body, 'proses_api.php').subscribe((res) => {
                    if (res.success == true) {
                        this.presentToast('Eliminado con exito');
                        this.listarRegistroPSL();
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
        this.router.navigate(['/modsemanall/' + a]);
    }
    /// datos visualizzar 
    getRegistroDL() {
        return this.http.get(this.url3);
    }
    listarRegistroDL() {
        this.pruebas12 = [];
        this.getRegistroDL().subscribe(res => {
            for (let i = 0; i < res.length; i++) {
                this.pruebas12.push(res[i]);
            }
        });
    }
    delDatos(a) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                let body = {
                    aksi: 'eliminar_DL',
                    id: a
                };
                this.accsPrvds.postData(body, 'proses_api.php').subscribe((res) => {
                    if (res.success == true) {
                        this.presentToast('Eliminado con exito');
                        this.listarRegistroDL();
                    }
                    else {
                        this.presentToast('delete error');
                    }
                });
            });
        });
    }
};
RegistroPediSemanalLlPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__["AccessProviders"] }
];
RegistroPediSemanalLlPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro-pedi-semanal-ll',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registro-pedi-semanal-ll.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registro-pedi-semanal-ll/registro-pedi-semanal-ll.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registro-pedi-semanal-ll.page.scss */ "./src/app/pages/registro-pedi-semanal-ll/registro-pedi-semanal-ll.page.scss")).default]
    })
], RegistroPediSemanalLlPage);



/***/ })

}]);
//# sourceMappingURL=pages-registro-pedi-semanal-ll-registro-pedi-semanal-ll-module-es2015.js.map