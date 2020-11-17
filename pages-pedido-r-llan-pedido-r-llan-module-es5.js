function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pedido-r-llan-pedido-r-llan-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedido-r-llan/pedido-r-llan.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedido-r-llan/pedido-r-llan.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPedidoRLlanPedidoRLlanPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n    <ion-title>\n      Pedido Region Llano\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\" >\n\n  <ion-item>\n    <ion-badge color=\"danger\" slot=\"start\">TABLA DE CANTIDADES DE LOS ALIMENTOS</ion-badge>\n  </ion-item>\n\n  \n  <ion-slides>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\" class='summarycell'>Descripcion</div>\n        <div  style=\"color:#ffffff\" class='summarycell'>Unidad de Medida</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_alimnentos}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Unidad_de_Media}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #052646;\">\n        <div  style=\"color:#ffffff\" class='summarycell'>Descripcion</div>\n        <div  style=\"color:#ffffff\" class='summarycell'>Desayuno</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_alimnentos}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Gr_ML_Desayuno}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n\n      <div class='summary_row' style=\"background: #052646;\">\n        <div style=\"color:#ffffff\" class='summarycell'>Descripcion</div>\n        <div style=\"color:#ffffff\" class='summarycell'>Sopa</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_alimnentos}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Gr_ML_Sopa}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n\n    </ion-slide>\n\n    \n    <ion-slide class='summary_row'>\n\n      <div class='summary_row' style=\"background: #052646;\">\n        <div style=\"color:#ffffff\"  class='summarycell'>Descripcion</div>\n        <div style=\"color:#ffffff\"  class='summarycell'>Segundo</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_alimnentos}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Gr_ML_Segundo}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n\n      <div class='summary_row' style=\"background: #052646;\">\n        <div style=\"color:#ffffff\"  class='summarycell'>Descripcio</div>\n        <div style=\"color:#ffffff\"  class='summarycell'>Cena</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_alimnentos}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Gr_ML_Cena}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n\n      <div class='summary_row' style=\"background: #052646;\">\n        <div style=\"color:#ffffff\" class='summarycell'>Descripcion</div>\n        <div style=\"color:#ffffff\"  class='summarycell'>total</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_alimnentos}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{ prod.Gr_ML_Desayuno * cantE + prod.Gr_ML_Sopa * cantE + prod.Gr_ML_Segundo * cantE + prod.Gr_ML_Cena * cantE }}</ion-card-title>\n            <ion-card-title  style=\"color:#ffffff\">_</ion-card-title>\n            <ion-card-title style=\"font-size: 15px; color: cornflowerblue;\"> {{prod.Unidad_de_Media}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-item>\n    <ion-badge color=\"danger\" slot=\"start\">CANTIDAD DE EFECTIVOS</ion-badge>\n  </ion-item>\n\n  <div>\n    <ion-item>\n      <ion-input type=\"text\" placeholder=\"Ingrese la Cantidad\" [(ngModel)]=\"cantE\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  </div>\n\n  <ion-item>\n    <ion-badge color=\"danger\" slot=\"start\">COSTOS DE LA CANTIDAD DE ALIMENTO</ion-badge>\n  </ion-item>\n\n\n  \n  <ion-slides>\n    <ion-slide class='summary_row'>\n\n      <div class='summary_row' style=\"background: #052646;\">\n        <div style=\"color:#ffffff\"  class='summarycell'>Descripcion</div>\n        <div style=\"color:#ffffff\"  class='summarycell'>Precio unitario</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_alimnentos}}</ion-card-title>\n      \n          </ion-item>\n        </ion-item-sliding>\n        <ion-item-sliding class='summarycell'>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota1\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota2\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota3\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota4\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota5\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item> \n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota6\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item> \n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota7\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item> \n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota8\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>  \n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota9\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item> \n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota10\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item> \n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota11\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          \n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota12\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota13\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota14\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota15\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota16\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item> \n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota17\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item> \n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota18\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item> \n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota19\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>  \n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota20\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item> \n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"nota21\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>  \n        </ion-item-sliding>\n      </ion-list>\n\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n\n      <div class='summary_row' style=\"background: #052646;\">\n        <div style=\"color:#ffffff\"  class='summarycell'>Descripcion</div>\n        <div style=\"color:#ffffff\"  class='summarycell'> div</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_alimnentos}}</ion-card-title>\n          \n          </ion-item>\n        </ion-item-sliding>\n        <ion-item-sliding class='summarycell'>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num1\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num2\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num3\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num4\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num5\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num6\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num7\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num8\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num9\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num10\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num11\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n\n\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num12\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num13\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num14\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num15\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num16\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num17\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num18\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num19\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num20\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type=\"number\" placeholder=\"\" [(ngModel)]=\"num21\" required pattern=\"[0-9\\.]+\"></ion-input>\n          </ion-item>\n\n\n\n\n\n        </ion-item-sliding>\n      </ion-list>\n\n    </ion-slide>\n   \n\n\n    <ion-slide class='summary_row'>\n\n      <div class='summary_row' style=\"background: #052646;\">\n        <div style=\"color:#ffffff\"  class='summarycell'>Descripcion</div>\n        <div style=\"color:#ffffff\"  class='summarycell'> Importe Total</div>\n      </div>\n\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of pruebas\">\n            <ion-card-title style=\"font-size: 15px;\">{{prod.Des_de_alimnentos}}</ion-card-title>\n        \n          </ion-item>\n        </ion-item-sliding>\n        <ion-item-sliding class='summarycell'>\n          <ion-item>\n            <ion-label>{{promedio}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{promedio2}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{promedio3}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{promedio4}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{promedio5}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{promedio6}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{promedio7}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{promedio8}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{promedio9}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{promedio10}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{promedio11}}</ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>{{promedio12}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{promedio13}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{promedio14}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{promedio15}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{promedio16}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{promedio17}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{promedio18}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{promedio19}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{promedio20}}</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{promedio21}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-item>\n    <ion-button fill=\"outline\"  (click)=\"calcular();\">Calcular</ion-button>\n  </ion-item>\n\n  <div>\n    <ion-item>\n      <ion-label floating>TOTAL</ion-label>\n      <ion-input type=\"text\" placeholder=\"\" [(ngModel)]=\"sum\"></ion-input>\n    </ion-item>\n  </div>\n\n  <form #formulario=\"ngForm\"  (ngSubmint)=\"agregarDL()\">\n\n    <div>\n      <ion-item>\n        <ion-label floating>INGRESE EL TOTAL</ion-label>\n        <ion-input type=\"text\" placeholder=\"\"  [(ngModel)]=\"objeto12.total_costo\" name=\"total_costo\" required pattern=\"[0-9\\.]+\"></ion-input>\n      </ion-item>\n    </div>\n  \n    <ion-item style=\"color: #999;\">\n      <ion-label position=\"floating\">Fecha</ion-label>\n      <ion-datetime displayFormat=\"YY/MM/DD\" [(ngModel)]=\"objeto12.semana\" min=\"1945-08-17\" max=\"2020-12-09\" name=\"semana\" required></ion-datetime>\n    </ion-item>\n  \n   \n    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"formulario.invalid\" (click)=\"agregarDL()\">\n      Registrar\n    </ion-button>\n  \n  </form>\n\n  \n\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/pedido-r-llan/pedido-r-llan-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/pedido-r-llan/pedido-r-llan-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: PedidoRLlanPageRoutingModule */

  /***/
  function srcAppPagesPedidoRLlanPedidoRLlanRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidoRLlanPageRoutingModule", function () {
      return PedidoRLlanPageRoutingModule;
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


    var _pedido_r_llan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pedido-r-llan.page */
    "./src/app/pages/pedido-r-llan/pedido-r-llan.page.ts");

    var routes = [{
      path: '',
      component: _pedido_r_llan_page__WEBPACK_IMPORTED_MODULE_3__["PedidoRLlanPage"]
    }];

    var PedidoRLlanPageRoutingModule = function PedidoRLlanPageRoutingModule() {
      _classCallCheck(this, PedidoRLlanPageRoutingModule);
    };

    PedidoRLlanPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PedidoRLlanPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/pedido-r-llan/pedido-r-llan.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/pedido-r-llan/pedido-r-llan.module.ts ***!
    \*************************************************************/

  /*! exports provided: PedidoRLlanPageModule */

  /***/
  function srcAppPagesPedidoRLlanPedidoRLlanModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidoRLlanPageModule", function () {
      return PedidoRLlanPageModule;
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


    var _pedido_r_llan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pedido-r-llan-routing.module */
    "./src/app/pages/pedido-r-llan/pedido-r-llan-routing.module.ts");
    /* harmony import */


    var _pedido_r_llan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pedido-r-llan.page */
    "./src/app/pages/pedido-r-llan/pedido-r-llan.page.ts");

    var PedidoRLlanPageModule = function PedidoRLlanPageModule() {
      _classCallCheck(this, PedidoRLlanPageModule);
    };

    PedidoRLlanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pedido_r_llan_routing_module__WEBPACK_IMPORTED_MODULE_5__["PedidoRLlanPageRoutingModule"]],
      declarations: [_pedido_r_llan_page__WEBPACK_IMPORTED_MODULE_6__["PedidoRLlanPage"]]
    })], PedidoRLlanPageModule);
    /***/
  },

  /***/
  "./src/app/pages/pedido-r-llan/pedido-r-llan.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/pedido-r-llan/pedido-r-llan.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPedidoRLlanPedidoRLlanPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".summary_row {\n  display: flex;\n  flex-wrap: wrap;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.summarycell {\n  overflow: auto;\n  word-wrap: break-word;\n  width: 42vw;\n  border: 2px solid #052646;\n  border-radius: 10px 10px 10px 10px;\n  padding: 5px;\n  text-align: right;\n  font-weight: bold;\n  text-align: center;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVkaWRvLXItbGxhbi9DOlxcVXNlcnNcXHdhbXNzXFxEZXNrdG9wXFxwcnV5ZWN0byBlbWlcXHByb0dcXHByb3llY3RvMjcvc3JjXFxhcHBcXHBhZ2VzXFxwZWRpZG8tci1sbGFuXFxwZWRpZG8tci1sbGFuLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGVkaWRvLXItbGxhbi9wZWRpZG8tci1sbGFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wZWRpZG8tci1sbGFuL3BlZGlkby1yLWxsYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1bW1hcnlfcm93e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuXHJcbn1cclxuXHJcbi5zdW1tYXJ5Y2VsbHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgd2lkdGg6IDQydnc7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAgIzA1MjY0NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4iLCIuc3VtbWFyeV9yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLnN1bW1hcnljZWxsIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2lkdGg6IDQydnc7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwNTI2NDY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/pedido-r-llan/pedido-r-llan.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/pedido-r-llan/pedido-r-llan.page.ts ***!
    \***********************************************************/

  /*! exports provided: PedidoRLlanPage */

  /***/
  function srcAppPagesPedidoRLlanPedidoRLlanPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PedidoRLlanPage", function () {
      return PedidoRLlanPage;
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

    var PedidoRLlanPage = /*#__PURE__*/function () {
      function PedidoRLlanPage(http, router, toastCtrl, loadingCtrl, alertCtrl, accsPrvds) {
        _classCallCheck(this, PedidoRLlanPage);

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
        this.url3 = 'http://192.168.4.153/serve_api/crear_datoL.php';
        this.history = [];
        this.objeto = {
          Des_de_alimnentos: "",
          Unidad_de_Media: "",
          Gr_ML_Desayuno: "",
          Gr_ML_Sopa: "",
          Gr_ML_Segundo: "",
          Gr_ML_Cena: ""
        };
        this.pruebas = [];
        this.url2 = 'http://192.168.4.153/serve_api/menu_registroPDL.php';
        this.listarRegistroPDL();
      }

      _createClass(PedidoRLlanPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "calcular",
        value: function calcular() {
          this.promedio = this.nota1 * this.num1;
          this.promedio2 = this.nota2 * this.num2;
          this.promedio3 = this.nota3 * this.num3;
          this.promedio4 = this.nota4 * this.num4;
          this.promedio5 = this.nota5 * this.num5;
          this.promedio6 = this.nota6 * this.num6;
          this.promedio7 = this.nota7 * this.num7;
          this.promedio8 = this.nota8 * this.num8;
          this.promedio9 = this.nota9 * this.num9;
          this.promedio10 = this.nota10 * this.num10;
          this.promedio11 = this.nota11 * this.num11;
          this.promedio12 = this.nota12 * this.num12;
          this.promedio13 = this.nota13 * this.num13;
          this.promedio14 = this.nota14 * this.num14;
          this.promedio15 = this.nota15 * this.num15;
          this.promedio16 = this.nota16 * this.num16;
          this.promedio17 = this.nota17 * this.num17;
          this.promedio18 = this.nota18 * this.num18;
          this.promedio19 = this.nota19 * this.num19;
          this.promedio20 = this.nota20 * this.num20;
          this.promedio21 = this.nota21 * this.num21;
          this.sum = +this.promedio + +this.promedio2 + +this.promedio3 + +this.promedio4 + +this.promedio5 + +this.promedio6 + +this.promedio7 + +this.promedio8 + +this.promedio9 + +this.promedio10 + +this.promedio11 + +this.promedio12 + +this.promedio13 + +this.promedio14 + +this.promedio15 + +this.promedio16 + +this.promedio17 + +this.promedio18 + +this.promedio19 + +this.promedio20 + +this.promedio21;

          if (this.promedio) {
            this.equi = "f";
          } else if (this.promedio < 80) {
            this.equi = "c";
          } else if (this.promedio < 90) {
            this.equi = "B";
          } else {
            this.equi = "A";
          }

          var moment = {
            nota1: this.nota1,
            nota2: this.nota2,
            nota3: this.nota3,
            nota4: this.nota4,
            num1: this.num1,
            num2: this.num2,
            num3: this.num3,
            num4: this.num4,
            prom: this.promedio,
            promedio2: this.promedio2,
            promedio3: this.promedio3,
            promedio4: this.promedio4,
            promedio5: this.promedio5,
            promedio6: this.promedio6,
            promedio7: this.promedio7,
            promedio8: this.promedio8,
            promedio9: this.promedio9,
            promedio10: this.promedio10,
            promedio11: this.promedio11,
            promedio12: this.promedio12,
            promedio13: this.promedio13,
            promedio14: this.promedio14,
            promedio15: this.promedio15,
            promedio16: this.promedio16,
            promedio17: this.promedio17,
            promedio18: this.promedio18,
            promedio19: this.promedio19,
            promedio20: this.promedio20,
            promedio21: this.promedio21,
            sum: this.sum
          };
          this.history.push(moment);
        }
      }, {
        key: "getRegistroPDL",
        value: function getRegistroPDL() {
          return this.http.get(this.url2);
        }
      }, {
        key: "listarRegistroPDL",
        value: function listarRegistroPDL() {
          var _this = this;

          this.pruebas = [];
          this.getRegistroPDL().subscribe(function (res) {
            for (var i = 0; i < res.length; i++) {
              _this.pruebas.push(res[i]);
            }
          });
        } ///datos del pedido 

      }, {
        key: "agregardatoDA",
        value: function agregardatoDA(obj) {
          return this.http.post(this.url3, JSON.stringify(obj));
        }
      }, {
        key: "agregarDL",
        value: function agregarDL() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.agregardatoDA(this.objeto12).subscribe(function (resp) {
                      _this2.objeto12.semana = '';
                      _this2.objeto12.total_costo = '';
                      console.log(resp);
                    });
                    _context.next = 3;
                    return this.toastCtrl.create({
                      message: "Se ingreso el dato al pedido semanal",
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
      }]);

      return PedidoRLlanPage;
    }();

    PedidoRLlanPage.ctorParameters = function () {
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

    PedidoRLlanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pedido-r-llan',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pedido-r-llan.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedido-r-llan/pedido-r-llan.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pedido-r-llan.page.scss */
      "./src/app/pages/pedido-r-llan/pedido-r-llan.page.scss"))["default"]]
    })], PedidoRLlanPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-pedido-r-llan-pedido-r-llan-module-es5.js.map