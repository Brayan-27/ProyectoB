(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-intro-intro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      MENU SEMANAL\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding [fullscreen]=\"true\">\n  <ion-item>\n    <ion-badge color=\"danger\" slot=\"start\">TABLAS DEL MENÚ SEMANAL</ion-badge>\n  </ion-item>\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      Region Altiplano\n    </ion-label>\n  </ion-item>\n  \n  \n  \n  <ion-slides>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>SEMANA</div>\n      </div>\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          \n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod.id_a}}.</ion-card-subtitle>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.descripcion}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-label style=\"font-size: 15px;\">{{prod.numsemana}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>LUNES</div>\n      </div>\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          \n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod.id_a}}.</ion-card-subtitle>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.descripcion}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-label style=\"font-size: 15px;\">{{prod.lunes}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>MARTES</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle color=\"danger\">{{prod.id_a}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-label style=\"font-size: 15px;\">{{prod.martes}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>MIERCOLES</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle color=\"danger\">{{prod.id_a}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-label style=\"font-size: 15px;\">{{prod.miercoles}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>JUEVES</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle color=\"danger\">{{prod.id_a}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-label style=\"font-size: 15px;\">{{prod.jueves}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n     \n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>VIERNES</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle color=\"danger\">{{prod.id_a}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-label style=\"font-size: 15px;\">{{prod.viernes}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>SABADO</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle color=\"danger\">{{prod.id_a}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-label style=\"font-size: 15px;\">{{prod.sabado}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>DOMINGO</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle color=\"danger\">{{prod.id_a}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-label style=\"font-size: 15px;\">{{prod.domingo}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      Region Valle\n    </ion-label>\n  </ion-item>\n\n \n\n\n  <ion-slides>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>SEMANA</div>\n      </div>\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          \n          <ion-item *ngFor=\"let prod2 of semanas2\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod2.id_s}}.</ion-card-subtitle>\n            <ion-card-title style=\"font-size: 15px;\">{{prod2.descripcion}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod2 of semanas2\">\n            <ion-label style=\"font-size: 15px;\">{{prod2.numsemana}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>LUNES</div>\n      </div>\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          \n          <ion-item *ngFor=\"let prod2 of semanas2\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod2.id_s}}.</ion-card-subtitle>\n            <ion-card-title style=\"font-size: 15px;\">{{prod2.descripcion}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod2 of semanas2\">\n            <ion-label style=\"font-size: 15px;\">{{prod2.lunes}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n   \n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>MARTES</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod2 of semanas2\">\n            <ion-card-subtitle color=\"danger\">{{prod2.id_s}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod2.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod2 of semanas2\">\n            <ion-label style=\"font-size: 15px;\">{{prod2.martes}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>MIERCOLES</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod2 of semanas2\">\n            <ion-card-subtitle color=\"danger\">{{prod2.id_s}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod2.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod2 of semanas2\">\n            <ion-label style=\"font-size: 15px;\">{{prod2.miercoles}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>JUEVES</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod2 of semanas2\">\n            <ion-card-subtitle color=\"danger\">{{prod2.id_s}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod2.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod2 of semanas2\">\n            <ion-label style=\"font-size: 15px;\">{{prod2.jueves}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>VIERNES</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod2 of semanas2\">\n            <ion-card-subtitle color=\"danger\">{{prod2.id_s}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod2.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod2 of semanas2\">\n            <ion-label style=\"font-size: 15px;\">{{prod2.viernes}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>SABADO</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod2 of semanas2\">\n            <ion-card-subtitle color=\"danger\">{{prod2.id_s}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod2.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod2 of semanas2\">\n            <ion-label style=\"font-size: 15px;\">{{prod2.sabado}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>DOMINGO</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod2 of semanas2\">\n            <ion-card-subtitle color=\"danger\">{{prod2.id_s}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod2.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod2 of semanas2\">\n            <ion-label style=\"font-size: 15px;\">{{prod2.domingo}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n\n\n    </ion-slide>\n\n\n  \n  </ion-slides>\n\n\n\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      Region Llanos\n    </ion-label>\n  </ion-item>\n\n  \n\n  <ion-slides>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>SEMANA</div>\n      </div>\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod1 of semanas1\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod1.id_l}}.</ion-card-subtitle>\n            <ion-card-title style=\"font-size: 15px;\">{{prod1.descripcion}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod1 of semanas1\">\n            <ion-label style=\"font-size: 15px;\">{{prod1.numsemana}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    \n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>LUNES</div>\n      </div>\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod1 of semanas1\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod1.id_l}}.</ion-card-subtitle>\n            <ion-card-title style=\"font-size: 15px;\">{{prod1.descripcion}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod1 of semanas1\">\n            <ion-label style=\"font-size: 15px;\">{{prod1.lunes}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n   \n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>MARTES</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod1 of semanas1\">\n            <ion-card-subtitle color=\"danger\">{{prod1.id_l}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod1.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod1 of semanas1\">\n            <ion-label style=\"font-size: 15px;\">{{prod1.martes}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>MIERCOLES</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod1 of semanas1\">\n            <ion-card-subtitle color=\"danger\">{{prod1.id_l}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod1.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod1 of semanas1\">\n            <ion-label style=\"font-size: 15px;\">{{prod1.miercoles}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>JUEVES</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod1 of semanas1\">\n            <ion-card-subtitle color=\"danger\">{{prod1.id_l}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod1.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod1 of semanas1\">\n            <ion-label style=\"font-size: 15px;\">{{prod1.jueves}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>VIERNES</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod1 of semanas1\">\n            <ion-card-subtitle color=\"danger\">{{prod1.id_l}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod1.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod1 of semanas1\">\n            <ion-label style=\"font-size: 15px;\">{{prod1.viernes}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>SABADO</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod1 of semanas1\">\n            <ion-card-subtitle color=\"danger\">{{prod1.id_l}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod1.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod1 of semanas1\">\n            <ion-label style=\"font-size: 15px;\">{{prod1.sabado}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>DOMINGO</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod1 of semanas1\">\n            <ion-card-subtitle color=\"danger\">{{prod1.id_l}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod1.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod1 of semanas1\">\n            <ion-label style=\"font-size: 15px;\">{{prod1.domingo}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n      \n    </ion-slide>\n\n    \n  </ion-slides>\n\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/intro/intro-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/intro/intro-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: IntroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageRoutingModule", function() { return IntroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro.page */ "./src/app/pages/intro/intro.page.ts");




const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_3__["IntroPage"]
    }
];
let IntroPageRoutingModule = class IntroPageRoutingModule {
};
IntroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IntroPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/intro/intro.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/intro/intro.module.ts ***!
  \*********************************************/
/*! exports provided: IntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro-routing.module */ "./src/app/pages/intro/intro-routing.module.ts");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro.page */ "./src/app/pages/intro/intro.page.ts");







let IntroPageModule = class IntroPageModule {
};
IntroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntroPageRoutingModule"]
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
    })
], IntroPageModule);



/***/ }),

/***/ "./src/app/pages/intro/intro.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/intro/intro.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".summary_row {\n  display: flex;\n  flex-wrap: wrap;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.summarycell {\n  overflow: auto;\n  word-wrap: break-word;\n  width: 43vw;\n  border: 2px solid #052646;\n  border-radius: 10px 10px 10px 10px;\n  padding: 5px;\n  text-align: right;\n  font-weight: bold;\n  text-align: center;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW50cm8vQzpcXFVzZXJzXFx3YW1zc1xcRGVza3RvcFxccHJ1eWVjdG8gZW1pXFxwcm9HXFxwcm95ZWN0bzI3L3NyY1xcYXBwXFxwYWdlc1xcaW50cm9cXGludHJvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW50cm8vaW50cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNDSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ludHJvL2ludHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdW1tYXJ5X3Jvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcblxyXG59XHJcblxyXG4uc3VtbWFyeWNlbGx7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdpZHRoOiA0M3Z3O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgICMwNTI2NDY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxuIiwiLnN1bW1hcnlfcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5zdW1tYXJ5Y2VsbCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiA0M3Z3O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDUyNjQ2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDExcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/intro/intro.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/intro/intro.page.ts ***!
  \*******************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/access-providers */ "./src/app/providers/access-providers.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let IntroPage = class IntroPage {
    constructor(http, toastCtrl, accsPrvds) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.accsPrvds = accsPrvds;
        //SEMANA A
        this.objeto = { numsemana: "", descripcion: "", lunes: "", martes: "", miercoles: "", jueves: "", viernes: "", sabado: "", domingo: "" };
        this.semanas = [];
        this.url2 = 'http://localhost/proG/server_api/menu_semanal_A.php';
        //SEMANA lLANOS
        this.objeto1 = { numsemana: "", descripcion: "", lunes: "", martes: "", miercoles: "", jueves: "", viernes: "", sabado: "", domingo: "" };
        this.semanas1 = [];
        this.url3 = 'http://localhost/proG/server_api/menu_semanal_L.php';
        //SEMANA VALLE
        this.objeto2 = { numsemana: "", descripcion: "", lunes: "", martes: "", miercoles: "", jueves: "", viernes: "", sabado: "", domingo: "" };
        this.semanas2 = [];
        this.url4 = 'http://localhost/proG/server_api/menu_semanalv.php';
        this.listarSemanas();
        this.listarSemanas1();
        this.listarSemanas2();
    }
    ngOnInit() {
    }
    //SEMANA A
    getSemanas() {
        return this.http.get(this.url2);
    }
    listarSemanas() {
        this.semanas = [];
        this.getSemanas().subscribe(res => {
            for (let i = 0; i < res.length; i++) {
                this.semanas.push(res[i]);
            }
        });
    }
    //SEMANA LLANOS
    getSemanas1() {
        return this.http.get(this.url3);
    }
    listarSemanas1() {
        this.semanas1 = [];
        this.getSemanas1().subscribe(res => {
            for (let i = 0; i < res.length; i++) {
                this.semanas1.push(res[i]);
            }
        });
    }
    //SEMANA VALLLE
    getSemanas2() {
        return this.http.get(this.url4);
    }
    listarSemanas2() {
        this.semanas = [];
        this.getSemanas2().subscribe(res => {
            for (let i = 0; i < res.length; i++) {
                this.semanas2.push(res[i]);
            }
        });
    }
};
IntroPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_3__["AccessProviders"] }
];
IntroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./intro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./intro.page.scss */ "./src/app/pages/intro/intro.page.scss")).default]
    })
], IntroPage);



/***/ })

}]);
//# sourceMappingURL=pages-intro-intro-module-es2015.js.map