(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modificarprov-modificarprov-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modificarprov/modificarprov.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modificarprov/modificarprov.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n\n    <ion-title>\n      MODIFICAR ALIMENTO\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  padding [fullscreen]=\"true\">\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Nombre del Alimento</ion-label>\n      <ion-input type=\"text\" name=\"nombreali\" [(ngModel)]=\"nombreali\" *ngIf=\"id!=0\" required pattern=\"[A-Za-z]+\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-item>\n    <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n    <ion-label>Tipo de Alimento</ion-label>\n    <ion-select value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" *ngIf=\"id!=0\" [(ngModel)]=\"tipo\" name=\"tipo\" required>\n      <ion-select-option value=\"Verduras\">Verduras</ion-select-option>\n      <ion-select-option value=\"Frutas\">Frutas</ion-select-option>\n      <ion-select-option value=\"Legumbres\">Legumbres</ion-select-option>\n      <ion-select-option value=\"Tuberculos\">Tuberculos</ion-select-option>\n      <ion-select-option value=\"Grasas\">Grasas</ion-select-option>\n      <ion-select-option value=\"Huevos\">Huevos</ion-select-option>\n      <ion-select-option value=\"Carnes rojas y blancas\">Carnes rojas y blancas</ion-select-option>\n      <ion-select-option value=\"Cereales\">Cereales</ion-select-option>\n      <ion-select-option value=\"Lacteos\">Lacteos</ion-select-option>\n      <ion-select-option value=\"Frutos secos\">Frutos secos</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n    <ion-label>Unidad de Medida</ion-label>\n    <ion-select value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" *ngIf=\"id!=0\" [(ngModel)]=\"cantidad_pro\" name=\"cantidad_pro\" required>\n      <ion-select-option value=\"Kg\">Kg</ion-select-option>\n      <ion-select-option value=\"Lb\">Lb</ion-select-option>\n      <ion-select-option value=\"Amrr\">Amrr</ion-select-option>\n      <ion-select-option value=\"Lt\">Lt</ion-select-option>\n      <ion-select-option value=\"g\">g</ion-select-option>\n      <ion-select-option value=\"ml\">ml</ion-select-option>\n      <ion-select-option value=\"unidad\">unidad</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Unidad Minima</ion-label>\n      <ion-input type=\"text\" name=\"cantidad_min\" [(ngModel)]=\"cantidad_min\" *ngIf=\"id!=0\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Unidad Media</ion-label>\n      <ion-input type=\"text\" name=\"cantidad_med\" [(ngModel)]=\"cantidad_med\" *ngIf=\"id!=0\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Unidad Maxima</ion-label>\n      <ion-input type=\"text\" name=\"cantidad_max\" [(ngModel)]=\"cantidad_max\" *ngIf=\"id!=0\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n\n\n  <ion-button expand=\"full\" type=\"submit\" *ngIf=\"id!=0\"  [disabled]=\"disabledbutton\"  (click)=\"crudActionguardar(Update)\">\n    Guardar\n  </ion-button>\n\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/modificarprov/modificarprov-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/modificarprov/modificarprov-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ModificarprovPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarprovPageRoutingModule", function() { return ModificarprovPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modificarprov_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modificarprov.page */ "./src/app/pages/modificarprov/modificarprov.page.ts");




const routes = [
    {
        path: '',
        component: _modificarprov_page__WEBPACK_IMPORTED_MODULE_3__["ModificarprovPage"]
    }
];
let ModificarprovPageRoutingModule = class ModificarprovPageRoutingModule {
};
ModificarprovPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModificarprovPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/modificarprov/modificarprov.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/modificarprov/modificarprov.module.ts ***!
  \*************************************************************/
/*! exports provided: ModificarprovPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarprovPageModule", function() { return ModificarprovPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modificarprov_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modificarprov-routing.module */ "./src/app/pages/modificarprov/modificarprov-routing.module.ts");
/* harmony import */ var _modificarprov_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modificarprov.page */ "./src/app/pages/modificarprov/modificarprov.page.ts");







let ModificarprovPageModule = class ModificarprovPageModule {
};
ModificarprovPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modificarprov_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModificarprovPageRoutingModule"]
        ],
        declarations: [_modificarprov_page__WEBPACK_IMPORTED_MODULE_6__["ModificarprovPage"]]
    })
], ModificarprovPageModule);



/***/ }),

/***/ "./src/app/pages/modificarprov/modificarprov.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/modificarprov/modificarprov.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGlmaWNhcnByb3YvbW9kaWZpY2FycHJvdi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/modificarprov/modificarprov.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/modificarprov/modificarprov.page.ts ***!
  \***********************************************************/
/*! exports provided: ModificarprovPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarprovPage", function() { return ModificarprovPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/access-providers */ "./src/app/providers/access-providers.ts");





let ModificarprovPage = class ModificarprovPage {
    constructor(router, toastCtrl, alertCtrl, loadingCtrl, accsPrvds, actRoute) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.accsPrvds = accsPrvds;
        this.actRoute = actRoute;
        this.tipo = "";
        this.nombreali = "";
        this.cantidad_pro = "";
        this.cantidad_min = "";
        this.cantidad_med = "";
        this.cantidad_max = "";
    }
    ngOnInit() {
        this.actRoute.params.subscribe((data) => {
            console.log(data);
            this.id = data.id;
            if (this.id != 0) {
                this.cargarMenu();
            }
        });
    }
    cargarMenu() {
        return new Promise(resolve => {
            let body = {
                aksi: 'load_single_dataPV',
                id: this.id
            };
            this.accsPrvds.postData(body, 'proses_api.php').subscribe((res) => {
                this.tipo = res.result.tipo;
                this.nombreali = res.result.nombreali;
                this.cantidad_pro = res.result.cantidad_pro;
                this.cantidad_min = res.result.cantidad_min;
                this.cantidad_med = res.result.cantidad_med;
                this.cantidad_max = res.result.cantidad_max;
            });
        });
    }
    crudActionguardar(a) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.tipo == "",
                this.nombreali == "",
                this.cantidad_pro == "",
                this.cantidad_min == "",
                this.cantidad_med == "",
                this.cantidad_max == "") {
            }
            else {
                this.disabledbutton = true;
                const loader = yield this.loadingCtrl.create({
                    message: 'Espere por favor....',
                });
                yield loader.present();
                return new Promise(resolve => {
                    let body = {
                        aksi: 'mod_crudPV',
                        id: this.id,
                        tipo: this.tipo,
                        nombreali: this.nombreali,
                        cantidad_pro: this.cantidad_pro,
                        cantidad_min: this.cantidad_min,
                        cantidad_med: this.cantidad_med,
                        cantidad_max: this.cantidad_max,
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
ModificarprovPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__["AccessProviders"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ModificarprovPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modificarprov',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modificarprov.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modificarprov/modificarprov.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./modificarprov.page.scss */ "./src/app/pages/modificarprov/modificarprov.page.scss")).default]
    })
], ModificarprovPage);



/***/ })

}]);
//# sourceMappingURL=pages-modificarprov-modificarprov-module-es2015.js.map