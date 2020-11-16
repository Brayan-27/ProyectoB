function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mod-pdv-mod-pdv-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mod-pdv/mod-pdv.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mod-pdv/mod-pdv.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesModPdvModPdvPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n\n    <ion-title>\n      MODIFICAR REGISTRO DE PEDIDO DIARIO \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content padding [fullscreen]=\"true\">\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      Pedido Diario \n    </ion-label>\n  </ion-item>\n\n  \n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Descripcion</ion-label>\n      <ion-input type=\"text\" name=\"Des_de_alimnentos\" *ngIf=\"id!=0\" [(ngModel)]=\"Des_de_alimnentos\" required pattern=\"[A-Za-z]+\" ></ion-input>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-item>\n    <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n    <ion-label>Unidad de Medida</ion-label>\n    <ion-select value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\"  *ngIf=\"id!=0\" [(ngModel)]=\"Unidad_de_Media\" name=\"Unidad_de_Media\" required>\n      <ion-select-option value=\"Kg\">Kg</ion-select-option>\n      <ion-select-option value=\"Lb\">Lb</ion-select-option>\n      <ion-select-option value=\"Amrr\">Amrr</ion-select-option>\n      <ion-select-option value=\"Lt\">Lt</ion-select-option>\n      <ion-select-option value=\"g\">g</ion-select-option>\n      <ion-select-option value=\"ml\">ml</ion-select-option>\n      <ion-select-option value=\"unidad\">unidad</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Desayuno</ion-label>\n      <ion-input type=\"number\" name=\"Gr_ML_Desayuno\"  *ngIf=\"id!=0\"  [(ngModel)]=\"Gr_ML_Desayuno\" required pattern=\"[0-9\\.]+\" ></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Sopa</ion-label>\n      <ion-input type=\"number\" name=\"Gr_ML_Sopa\"  *ngIf=\"id!=0\"   [(ngModel)]=\"Gr_ML_Sopa\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Segundo</ion-label>\n      <ion-input type=\"number\" name=\"Gr_ML_Segundo\"  *ngIf=\"id!=0\"  [(ngModel)]=\"Gr_ML_Segundo\" required pattern=\"[0-9\\.]+\" ></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Cena</ion-label>\n      <ion-input type=\"number\" name=\"Gr_ML_Cena\"  *ngIf=\"id!=0\" [(ngModel)]=\"Gr_ML_Cena\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n \n  <ion-button expand=\"full\" type=\"submit\"  *ngIf=\"id!=0\"  [disabled]=\"disabledButton\"  (click)=\"crudActionguardar(Update)\">\n\n    Guardar \n  </ion-button>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/mod-pdv/mod-pdv-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/mod-pdv/mod-pdv-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ModPDVPageRoutingModule */

  /***/
  function srcAppPagesModPdvModPdvRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModPDVPageRoutingModule", function () {
      return ModPDVPageRoutingModule;
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


    var _mod_pdv_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mod-pdv.page */
    "./src/app/pages/mod-pdv/mod-pdv.page.ts");

    var routes = [{
      path: '',
      component: _mod_pdv_page__WEBPACK_IMPORTED_MODULE_3__["ModPDVPage"]
    }];

    var ModPDVPageRoutingModule = function ModPDVPageRoutingModule() {
      _classCallCheck(this, ModPDVPageRoutingModule);
    };

    ModPDVPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ModPDVPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/mod-pdv/mod-pdv.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/mod-pdv/mod-pdv.module.ts ***!
    \*************************************************/

  /*! exports provided: ModPDVPageModule */

  /***/
  function srcAppPagesModPdvModPdvModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModPDVPageModule", function () {
      return ModPDVPageModule;
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


    var _mod_pdv_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mod-pdv-routing.module */
    "./src/app/pages/mod-pdv/mod-pdv-routing.module.ts");
    /* harmony import */


    var _mod_pdv_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mod-pdv.page */
    "./src/app/pages/mod-pdv/mod-pdv.page.ts");

    var ModPDVPageModule = function ModPDVPageModule() {
      _classCallCheck(this, ModPDVPageModule);
    };

    ModPDVPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mod_pdv_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModPDVPageRoutingModule"]],
      declarations: [_mod_pdv_page__WEBPACK_IMPORTED_MODULE_6__["ModPDVPage"]]
    })], ModPDVPageModule);
    /***/
  },

  /***/
  "./src/app/pages/mod-pdv/mod-pdv.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/mod-pdv/mod-pdv.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesModPdvModPdvPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZC1wZHYvbW9kLXBkdi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/mod-pdv/mod-pdv.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/mod-pdv/mod-pdv.page.ts ***!
    \***********************************************/

  /*! exports provided: ModPDVPage */

  /***/
  function srcAppPagesModPdvModPdvPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModPDVPage", function () {
      return ModPDVPage;
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

    var ModPDVPage = /*#__PURE__*/function () {
      function ModPDVPage(router, toastCtrl, alertCtrl, loadingCtrl, accsPrvds, actRoute) {
        _classCallCheck(this, ModPDVPage);

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

      _createClass(ModPDVPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.actRoute.params.subscribe(function (data) {
            console.log(data);
            _this.id = data.id;

            if (_this.id != 0) {
              _this.cargarUser();
            }
          });
        }
      }, {
        key: "cargarUser",
        value: function cargarUser() {
          var _this2 = this;

          return new Promise(function (resolve) {
            var body = {
              aksi: 'load_single_dataPDV',
              id: _this2.id
            };

            _this2.accsPrvds.postData(body, 'proses_api.php').subscribe(function (res) {
              _this2.Des_de_alimnentos = res.result.Des_de_alimnentos;
              _this2.Unidad_de_Media = res.result.Unidad_de_Media;
              _this2.Gr_ML_Desayuno = res.result.Gr_ML_Desayuno;
              _this2.Gr_ML_Sopa = res.result.Gr_ML_Sopa;
              _this2.Gr_ML_Segundo = res.result.Gr_ML_Segundo;
              _this2.Gr_ML_Cena = res.result.Gr_ML_Cena;
            });
          });
        }
      }, {
        key: "crudActionguardar",
        value: function crudActionguardar(a) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.Des_de_alimnentos == "", this.Unidad_de_Media == "", this.Gr_ML_Desayuno == "", this.Gr_ML_Sopa == "", this.Gr_ML_Segundo == "", this.Gr_ML_Cena == "")) {
                      _context.next = 3;
                      break;
                    }

                    _context.next = 10;
                    break;

                  case 3:
                    this.disabledbutton = true;
                    _context.next = 6;
                    return this.loadingCtrl.create({
                      message: 'Espere por favor....'
                    });

                  case 6:
                    loader = _context.sent;
                    _context.next = 9;
                    return loader.present();

                  case 9:
                    return _context.abrupt("return", new Promise(function (resolve) {
                      var body = {
                        aksi: 'mod_crudPDV',
                        id: _this3.id,
                        Des_de_alimnentos: _this3.Des_de_alimnentos,
                        Unidad_de_Media: _this3.Unidad_de_Media,
                        Gr_ML_Desayuno: _this3.Gr_ML_Desayuno,
                        Gr_ML_Sopa: _this3.Gr_ML_Sopa,
                        Gr_ML_Segundo: _this3.Gr_ML_Segundo,
                        Gr_ML_Cena: _this3.Gr_ML_Cena,
                        action: a
                      };

                      _this3.accsPrvds.postData(body, 'proses_api.php').subscribe(function (res) {
                        if (res.success == true) {
                          loader.dismiss();
                          _this3.disabledbutton = false;

                          _this3.presentToast(res.msg);

                          _this3.router.navigate(['/menu-admin']);
                        } else {
                          loader.dismiss();
                          _this3.disabledbutton = false;

                          _this3.presentAlert(res.msg, a);
                        }
                      }, function (err) {
                        loader.dismiss();
                        _this3.disabledbutton = false;

                        _this3.presentAlert('Timeout', a);
                      });
                    }));

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(a) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastCtrl.create({
                      message: a,
                      duration: 1500
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(a, b) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertCtrl.create({
                      header: a,
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Close',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Try Again',
                        handler: function handler() {
                          _this4.crudActionguardar(b);
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ModPDVPage;
    }();

    ModPDVPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _providers_access_providers__WEBPACK_IMPORTED_MODULE_4__["AccessProviders"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ModPDVPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mod-pdv',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mod-pdv.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mod-pdv/mod-pdv.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mod-pdv.page.scss */
      "./src/app/pages/mod-pdv/mod-pdv.page.scss"))["default"]]
    })], ModPDVPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-mod-pdv-mod-pdv-module-es5.js.map