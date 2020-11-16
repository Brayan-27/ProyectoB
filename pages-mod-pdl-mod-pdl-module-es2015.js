(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mod-pdl-mod-pdl-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mod-pdl/mod-pdl.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mod-pdl/mod-pdl.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n\n    <ion-title>\n      MODIFICAR REGISTRO DE PEDIDO DIARIO \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding [fullscreen]=\"true\">\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      Pedido Diario \n    </ion-label>\n  </ion-item>\n\n  \n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Descripcion</ion-label>\n      <ion-input type=\"text\" name=\"Des_de_alimnentos\" *ngIf=\"id!=0\" [(ngModel)]=\"Des_de_alimnentos\" required pattern=\"[A-Za-z]+\" ></ion-input>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-item>\n    <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n    <ion-label>Unidad de Medida</ion-label>\n    <ion-select value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\"  *ngIf=\"id!=0\" [(ngModel)]=\"Unidad_de_Media\" name=\"Unidad_de_Media\" required>\n      <ion-select-option value=\"Kg\">Kg</ion-select-option>\n      <ion-select-option value=\"Lb\">Lb</ion-select-option>\n      <ion-select-option value=\"Amrr\">Amrr</ion-select-option>\n      <ion-select-option value=\"Lt\">Lt</ion-select-option>\n      <ion-select-option value=\"g\">g</ion-select-option>\n      <ion-select-option value=\"ml\">ml</ion-select-option>\n      <ion-select-option value=\"unidad\">unidad</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Desayuno</ion-label>\n      <ion-input type=\"number\" name=\"Gr_ML_Desayuno\"  *ngIf=\"id!=0\"  [(ngModel)]=\"Gr_ML_Desayuno\" required pattern=\"[0-9\\.]+\" ></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Sopa</ion-label>\n      <ion-input type=\"number\" name=\"Gr_ML_Sopa\"  *ngIf=\"id!=0\"   [(ngModel)]=\"Gr_ML_Sopa\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Segundo</ion-label>\n      <ion-input type=\"number\" name=\"Gr_ML_Segundo\"  *ngIf=\"id!=0\"  [(ngModel)]=\"Gr_ML_Segundo\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Cena</ion-label>\n      <ion-input type=\"number\" name=\"Gr_ML_Cena\"  *ngIf=\"id!=0\" [(ngModel)]=\"Gr_ML_Cena\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n \n  <ion-button expand=\"full\" type=\"submit\"  *ngIf=\"id!=0\"  [disabled]=\"disabledButton\"  (click)=\"crudActionguardar(Update)\">\n\n    Guardar \n  </ion-button>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/mod-pdl/mod-pdl-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/mod-pdl/mod-pdl-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ModPDLPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModPDLPageRoutingModule", function() { return ModPDLPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mod_pdl_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mod-pdl.page */ "./src/app/pages/mod-pdl/mod-pdl.page.ts");




const routes = [
    {
        path: '',
        component: _mod_pdl_page__WEBPACK_IMPORTED_MODULE_3__["ModPDLPage"]
    }
];
let ModPDLPageRoutingModule = class ModPDLPageRoutingModule {
};
ModPDLPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModPDLPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/mod-pdl/mod-pdl.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/mod-pdl/mod-pdl.module.ts ***!
  \*************************************************/
/*! exports provided: ModPDLPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModPDLPageModule", function() { return ModPDLPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mod_pdl_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mod-pdl-routing.module */ "./src/app/pages/mod-pdl/mod-pdl-routing.module.ts");
/* harmony import */ var _mod_pdl_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mod-pdl.page */ "./src/app/pages/mod-pdl/mod-pdl.page.ts");







let ModPDLPageModule = class ModPDLPageModule {
};
ModPDLPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mod_pdl_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModPDLPageRoutingModule"]
        ],
        declarations: [_mod_pdl_page__WEBPACK_IMPORTED_MODULE_6__["ModPDLPage"]]
    })
], ModPDLPageModule);



/***/ }),

/***/ "./src/app/pages/mod-pdl/mod-pdl.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/mod-pdl/mod-pdl.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZC1wZGwvbW9kLXBkbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/mod-pdl/mod-pdl.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/mod-pdl/mod-pdl.page.ts ***!
  \***********************************************/
/*! exports provided: ModPDLPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModPDLPage", function() { return ModPDLPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/access-providers */ "./src/app/providers/access-providers.ts");





let ModPDLPage = class ModPDLPage {
    constructor(router, toastCtrl, alertCtrl, loadingCtrl, accsPrvds, actRoute) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.accsPrvds = accsPrvds;
        this.actRoute = actRoute;
        this.Des_de_alimnentos = "";
        this.Unidad_de_Media = "";
        this.Gr_ML_Desayuno = "";
        this.Gr_ML_Sopa = "";
        this.Gr_ML_Segundo = "";
        this.Gr_ML_Cena = "";
    }
    ngOnInit() {
        this.actRoute.params.subscribe((data) => {
            console.log(data);
            this.id = data.id;
            if (this.id != 0) {
                this.cargarUser();
            }
        });
    }
    cargarUser() {
        return new Promise(resolve => {
            let body = {
                aksi: 'load_single_dataPDL',
                id: this.id
            };
            this.accsPrvds.postData(body, 'proses_api.php').subscribe((res) => {
                this.Des_de_alimnentos = res.result.Des_de_alimnentos;
                this.Unidad_de_Media = res.result.Unidad_de_Media;
                this.Gr_ML_Desayuno = res.result.Gr_ML_Desayuno;
                this.Gr_ML_Sopa = res.result.Gr_ML_Sopa;
                this.Gr_ML_Segundo = res.result.Gr_ML_Segundo;
                this.Gr_ML_Cena = res.result.Gr_ML_Cena;
            });
        });
    }
    crudActionguardar(a) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.Des_de_alimnentos == "",
                this.Unidad_de_Media == "",
                this.Gr_ML_Desayuno == "",
                this.Gr_ML_Sopa == "",
                this.Gr_ML_Segundo == "",
                this.Gr_ML_Cena == "") {
            }
            else {
                this.disabledbutton = true;
                const loader = yield this.loadingCtrl.create({
                    message: 'Espere por favor....',
                });
                yield loader.present();
                return new Promise(resolve => {
                    let body = {
                        aksi: 'mod_crudPDL',
                        id: this.id,
                        Des_de_alimnentos: this.Des_de_alimnentos,
                        Unidad_de_Media: this.Unidad_de_Media,
                        Gr_ML_Desayuno: this.Gr_ML_Desayuno,
                        Gr_ML_Sopa: this.Gr_ML_Sopa,
                        Gr_ML_Segundo: this.Gr_ML_Segundo,
                        Gr_ML_Cena: this.Gr_ML_Cena,
                        action: a
                    };
                    this.accsPrvds.postData(body, 'proses_api.php').subscribe((res) => {
                        if (res.success == true) {
                            loader.dismiss();
                            this.disabledbutton = false;
                            this.presentToast(res.msg);
                            this.router.navigate(['/menu-admin']);
                        }
                        else {
                            loader.dismiss();
                            this.disabledbutton = false;
                            this.presentAlert(res.msg, a);
                        }
                    }, (err) => {
                        loader.dismiss();
                        this.disabledbutton = false;
                        this.presentAlert('Timeout', a);
                    });
                });
            }
        });
    }
    presentToast(a) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: a,
                duration: 1500,
            });
            toast.present();
        });
    }
    presentAlert(a, b) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: a,
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Close',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Try Again',
                        handler: () => {
                            this.crudActionguardar(b);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ModPDLPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__["AccessProviders"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ModPDLPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mod-pdl',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mod-pdl.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mod-pdl/mod-pdl.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mod-pdl.page.scss */ "./src/app/pages/mod-pdl/mod-pdl.page.scss")).default]
    })
], ModPDLPage);



/***/ })

}]);
//# sourceMappingURL=pages-mod-pdl-mod-pdl-module-es2015.js.map