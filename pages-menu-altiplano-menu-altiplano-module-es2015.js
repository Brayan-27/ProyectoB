(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-altiplano-menu-altiplano-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-altiplano/menu-altiplano.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-altiplano/menu-altiplano.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      REGIÓN ALTIPLANO\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding [fullscreen]=\"true\">\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      Menu Semanal\n    </ion-label>\n  </ion-item>\n\n  <!--  calendario -->\n\n  <div class=\"ion-padding\">\n\n    <ion-calendar class=\"color\" [(ngModel)]=\"dateMulti\"\n        [options]=\"optionsMulti\"\n        [type]=\"type\"\n        [format]=\"'YYYY-MM-DD'\">\n    </ion-calendar>\n  </div>\n\n  <!-- nombre  -->\n\n  <ion-item>\n    <ion-icon color=\"danger\" name=\"fast-food-sharp\"></ion-icon>\n    <ion-label color=\"danger\">\n      Ingrese datos del Menu semanal\n    </ion-label>\n  </ion-item>\n\n  <form #formulario=\"ngForm\"  (ngSubmint)=\"agregar()\">\n    \n    <ion-item>\n      <ion-label>N° de Semana</ion-label>\n      <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" placeholder=\"Seleccione una\" [(ngModel)]=\"objeto.numsemana\" name=\"numsemana\" required>\n        <ion-select-option value=\"SEMANA N° 1\">SEMANA N° 1</ion-select-option>\n        <ion-select-option value=\"SEMANA N° 2\">SEMANA N° 2</ion-select-option>\n        <ion-select-option value=\"SEMANA N° 3\">SEMANA N° 3</ion-select-option>\n        <ion-select-option value=\"SEMANA N° 4\">SEMANA N° 4</ion-select-option>\n        <ion-select-option value=\"SEMANA N° 5\">SEMANA N° 5</ion-select-option>\n        <ion-select-option value=\"SEMANA N° 6\">SEMANA N° 6</ion-select-option>\n        <ion-select-option value=\"SEMANA N° 7\">SEMANA N° 7</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      <ion-label>Descripcion</ion-label>\n      <ion-select value=\"brown\" okText=\"Ok\" cancelText=\"Salir\" [(ngModel)]=\"objeto.descripcion\" name=\"descripcion\" required>\n        <ion-select-option value=\"Desayuno\">Desayuno</ion-select-option>\n        <ion-select-option value=\"Sopa\">Sopa</ion-select-option>\n        <ion-select-option value=\"Segundo\">Segundo</ion-select-option>\n        <ion-select-option value=\"Postre\">Postre</ion-select-option>\n        <ion-select-option value=\"Refresco\">Refresco</ion-select-option>\n        <ion-select-option value=\"Cena\">Cena</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Lunes</ion-label>\n      <ion-input type=\"text\" required pattern=\"[A-Za-z- -]+\"  [(ngModel)]=\"objeto.lunes\" name=\"lunes\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Martes</ion-label>\n      <ion-input type=\"text\" required pattern=\"[A-Za-z- -]+\" [(ngModel)]=\"objeto.martes\" name=\"martes\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Miercoles</ion-label>\n      <ion-input type=\"text\" required pattern=\"[A-Za-z- -]+\"  [(ngModel)]=\"objeto.miercoles\" name=\"miercoles\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Jueves</ion-label>\n      <ion-input type=\"text\" required pattern=\"[A-Za-z- -]+\"  [(ngModel)]=\"objeto.jueves\" name=\"jueves\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        viernes</ion-label>\n      <ion-input type=\"text\" required pattern=\"[A-Za-z- -]+\" [(ngModel)]=\"objeto.viernes\" name=\"viernes\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Sabado</ion-label>\n      <ion-input type=\"text\" required pattern=\"[A-Za-z- -]+\" [(ngModel)]=\"objeto.sabado\" name=\"sabado\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Domingo</ion-label>\n      <ion-input type=\"text\" required pattern=\"[A-Za-z- -]+\"  [(ngModel)]=\"objeto.domingo\" name=\"domingo\"></ion-input>\n    </ion-item>\n   \n    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"formulario.invalid\"  [disabled]=\"disabledButton\"  (click)=\"agregar()\">\n      Agregar\n    </ion-button>\n\n  </form>\n\n\n<!-- tablas mostrar datos  -->\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      LUNES\n    </ion-label>\n  </ion-item>\n\n\n  <ion-slides>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>SEMANA</div>\n      </div>\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          \n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod.id_a}}.</ion-card-subtitle>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.descripcion}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle style=\"font-size: 15px;\">{{prod.numsemana}}.</ion-card-subtitle>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>LUNES</div>\n      </div>\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          \n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod.id_a}}.</ion-card-subtitle>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.descripcion}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-label style=\"font-size: 15px;\">{{prod.lunes}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>ELIMINAR</div>\n      </div>\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          \n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod.id_a}}.</ion-card-subtitle>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.descripcion}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-button expand=\"fullscreen\" size=\"small\" shape=\"round\" fill=\"outline\" (click)=\"delData(prod.id_a)\">E</ion-button>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>MODIFICAR</div>\n      </div>\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          \n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod.id_a}}.</ion-card-subtitle>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.descripcion}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-button expand=\"fullscreen\" size=\"small\" shape=\"round\" fill=\"outline\" (click)=\"abrirCrud(prod.id_a)\">Modificar</ion-button>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n    \n\n  </ion-slides>\n\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      MARTES\n    </ion-label>\n  </ion-item>\n\n  <ion-slides>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>SEMANA</div>\n      </div>\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          \n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod.id_a}}.</ion-card-subtitle>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.descripcion}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle style=\"font-size: 15px;\">{{prod.numsemana}}.</ion-card-subtitle>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>MARTES</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle color=\"danger\">{{prod.id_a}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-label style=\"font-size: 15px;\">{{prod.martes}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n\n\n    </ion-slide>\n\n\n  </ion-slides>\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      MIERCOLES\n    </ion-label>\n  </ion-item>\n\n  <ion-slides>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>SEMANA</div>\n      </div>\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          \n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod.id_a}}.</ion-card-subtitle>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.descripcion}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle style=\"font-size: 15px;\">{{prod.numsemana}}.</ion-card-subtitle>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>MIERCOLES</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle color=\"danger\">{{prod.id_a}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-label style=\"font-size: 15px;\">{{prod.miercoles}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n      \n    </ion-slide>\n\n  </ion-slides>\n\n\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      JUEVES\n    </ion-label>\n  </ion-item>\n\n\n  <ion-slides>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>SEMANA</div>\n      </div>\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          \n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod.id_a}}.</ion-card-subtitle>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.descripcion}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle style=\"font-size: 15px;\">{{prod.numsemana}}.</ion-card-subtitle>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>JUEVES</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle color=\"danger\">{{prod.id_a}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-label style=\"font-size: 15px;\">{{prod.jueves}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n  </ion-slides>\n\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      VIERNES\n    </ion-label>\n  </ion-item>\n\n  <ion-slides>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>SEMANA</div>\n      </div>\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          \n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod.id_a}}.</ion-card-subtitle>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.descripcion}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle style=\"font-size: 15px;\">{{prod.numsemana}}.</ion-card-subtitle>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>VIERNES</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle color=\"danger\">{{prod.id_a}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-label style=\"font-size: 15px;\">{{prod.viernes}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n      \n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      SABADO\n    </ion-label>\n  </ion-item>\n\n  <ion-slides>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>SEMANA</div>\n      </div>\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          \n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod.id_a}}.</ion-card-subtitle>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.descripcion}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle style=\"font-size: 15px;\">{{prod.numsemana}}.</ion-card-subtitle>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>SABADO</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle color=\"danger\">{{prod.id_a}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-label style=\"font-size: 15px;\">{{prod.sabado}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    \n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      DOMINGO\n    </ion-label>\n  </ion-item>\n\n  <ion-slides>\n\n    <ion-slide class='summary_row'>\n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>SEMANA</div>\n      </div>\n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          \n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle style=\"font-size: 15px;\" color=\"danger\">{{prod.id_a}}.</ion-card-subtitle>\n            <ion-card-title style=\"font-size: 15px;\">{{prod.descripcion}}</ion-card-title>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle style=\"font-size: 15px;\">{{prod.numsemana}}.</ion-card-subtitle>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n    </ion-slide>\n\n\n    <ion-slide class='summary_row'>\n      \n      <div class='summary_row' style=\"background: #e59b47;\">\n        <div  class='summarycell'>DETALLE</div>\n        <div  class='summarycell'>DOMINGO</div>\n      </div>\n      \n      <ion-list class='summary_row'>\n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-card-subtitle color=\"danger\">{{prod.id_a}} .-</ion-card-subtitle>\n            <ion-label style=\"font-size: 15px;\">{{prod.descripcion}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n        \n        <ion-item-sliding class='summarycell'>\n          <ion-item *ngFor=\"let prod of semanas\">\n            <ion-label style=\"font-size: 15px;\">{{prod.domingo}}</ion-label>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n  \n    </ion-slide>\n\n  </ion-slides>\n\n  \n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/menu-altiplano/menu-altiplano.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/menu-altiplano/menu-altiplano.module.ts ***!
  \***************************************************************/
/*! exports provided: MenuAltiplanoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAltiplanoPageModule", function() { return MenuAltiplanoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _menu_altiplano_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-altiplano.page */ "./src/app/pages/menu-altiplano/menu-altiplano.page.ts");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/__ivy_ngcc__/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_7__);







//calendario

let MenuAltiplanoPageModule = class MenuAltiplanoPageModule {
};
MenuAltiplanoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            //MenuAltiplanoPageRoutingModule
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _menu_altiplano_page__WEBPACK_IMPORTED_MODULE_6__["MenuAltiplanoPage"]
                }
            ]),
            ion2_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"]
        ],
        declarations: [_menu_altiplano_page__WEBPACK_IMPORTED_MODULE_6__["MenuAltiplanoPage"]]
    })
], MenuAltiplanoPageModule);



/***/ }),

/***/ "./src/app/pages/menu-altiplano/menu-altiplano.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/menu-altiplano/menu-altiplano.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".summary_row {\n  display: flex;\n  flex-wrap: wrap;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.summarycell {\n  overflow: auto;\n  word-wrap: break-word;\n  width: 43vw;\n  border: 2px solid #052646;\n  border-radius: 10px 10px 10px 10px;\n  padding: 5px;\n  text-align: right;\n  font-weight: bold;\n  text-align: center;\n  font-size: 11px;\n}\n\n.color {\n  border: 5px solid #052646;\n  background-color: #e5e9ef;\n  border-radius: 10px 10px 10px 10px;\n  padding: 5px;\n  text-align: right;\n  font-weight: bold;\n  text-align: center;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS1hbHRpcGxhbm8vQzpcXFVzZXJzXFx3YW1zc1xcRGVza3RvcFxccHJ1eWVjdG8gZW1pXFxwcm9HXFxwcm95ZWN0bzI3L3NyY1xcYXBwXFxwYWdlc1xcbWVudS1hbHRpcGxhbm9cXG1lbnUtYWx0aXBsYW5vLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWVudS1hbHRpcGxhbm8vbWVudS1hbHRpcGxhbm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNDSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURLQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW51LWFsdGlwbGFuby9tZW51LWFsdGlwbGFuby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VtbWFyeV9yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG5cclxufVxyXG5cclxuLnN1bW1hcnljZWxse1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3aWR0aDogNDN2dztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICAjMDUyNjQ2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmNvbG9ye1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzA1MjY0NjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICAgI2U1ZTllZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59IiwiLnN1bW1hcnlfcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5zdW1tYXJ5Y2VsbCB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdpZHRoOiA0M3Z3O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDUyNjQ2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5jb2xvciB7XG4gIGJvcmRlcjogNXB4IHNvbGlkICMwNTI2NDY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU5ZWY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/menu-altiplano/menu-altiplano.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/menu-altiplano/menu-altiplano.page.ts ***!
  \*************************************************************/
/*! exports provided: MenuAltiplanoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAltiplanoPage", function() { return MenuAltiplanoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/access-providers */ "./src/app/providers/access-providers.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






let MenuAltiplanoPage = class MenuAltiplanoPage {
    constructor(http, router, toastCtrl, loadingCtrl, alertCtrl, accsPrvds, actRoute) {
        this.http = http;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.accsPrvds = accsPrvds;
        this.actRoute = actRoute;
        this.optionsMulti = {
            pickMode: 'multi'
        };
        //del registro de la semana
        this.objeto = { numsemana: "", descripcion: "", lunes: "", martes: "", miercoles: "", jueves: "", viernes: "", sabado: "", domingo: "" };
        this.semanas = [];
        this.url2 = 'http://192.168.4.153/serve_api/menu_semanal_A.php';
        this.url = 'http://192.168.4.153/serve_api/crear_semana_A.php';
        this.listarSemanas();
    }
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
    agregarSemana(obj) {
        return this.http.post(this.url, JSON.stringify(obj));
    }
    agregar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.agregarSemana(this.objeto)
                .subscribe((resp) => {
                this.objeto.numsemana = '';
                this.objeto.descripcion = '';
                this.objeto.lunes = '';
                this.objeto.martes = '';
                this.objeto.miercoles = '';
                this.objeto.jueves = '';
                this.objeto.viernes = '';
                this.objeto.sabado = '';
                this.objeto.domingo = '';
                this.listarSemanas();
                console.log(resp);
            });
            const toast = yield this.toastCtrl.create({
                message: "Registro Exitoso",
                duration: 1500
            });
            toast.present();
        });
    }
    ngOnInit() {
    }
    //calendario
    onChange($event) {
        console.log($event);
    }
    delData(a) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                let body = {
                    aksi: 'eliminar_MSA',
                    id: a
                };
                this.accsPrvds.postData(body, 'proses_api.php').subscribe((res) => {
                    if (res.success == true) {
                        this.presentToast('Eliminado con exito');
                        this.listarSemanas();
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
        this.router.navigate(['/mod-menua/' + a]);
    }
};
MenuAltiplanoPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__["AccessProviders"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
MenuAltiplanoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-altiplano',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu-altiplano.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-altiplano/menu-altiplano.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu-altiplano.page.scss */ "./src/app/pages/menu-altiplano/menu-altiplano.page.scss")).default]
    })
], MenuAltiplanoPage);



/***/ })

}]);
//# sourceMappingURL=pages-menu-altiplano-menu-altiplano-module-es2015.js.map