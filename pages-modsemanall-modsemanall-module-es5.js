function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modsemanall-modsemanall-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modsemanall/modsemanall.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modsemanall/modsemanall.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesModsemanallModsemanallPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n\n    <ion-title>\n      MODIFICAR PEDIDO SEMANAL \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding [fullscreen]=\"true\">\n\n  <ion-item>\n    <ion-label>N° de Semana</ion-label>\n    <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" placeholder=\"Seleccione una\"  *ngIf=\"id!=0\" [(ngModel)]=\"Des_de_semana\" name=\"Des_de_semana\" required>\n      <ion-select-option value=\"SEMANA N° 1\">SEMANA N° 1</ion-select-option>\n      <ion-select-option value=\"SEMANA N° 2\">SEMANA N° 2</ion-select-option>\n      <ion-select-option value=\"SEMANA N° 3\">SEMANA N° 3</ion-select-option>\n      <ion-select-option value=\"SEMANA N° 4\">SEMANA N° 4</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n    <ion-label>Mes</ion-label>\n    <ion-select value=\"brown\" okText=\"Ok\" cancelText=\"Salir\" *ngIf=\"id!=0\" [(ngModel)]=\"mes\" name=\"mes\" required>\n      <ion-select-option value=\"Enero\">Enero</ion-select-option>\n      <ion-select-option value=\"Febrero\">Febrero</ion-select-option>\n      <ion-select-option value=\"Marzo\">Marzo</ion-select-option>\n      <ion-select-option value=\"Abril\">Abril</ion-select-option>\n      <ion-select-option value=\"Mayo\">Mayo</ion-select-option>\n      <ion-select-option value=\"Junio\">Junio</ion-select-option>\n      <ion-select-option value=\"Julio\">Julio</ion-select-option>\n      <ion-select-option value=\"Agosto\">Agosto</ion-select-option>\n      <ion-select-option value=\"Septiembre\">Septiembre</ion-select-option>\n      <ion-select-option value=\"Octubre\">Octubre</ion-select-option>\n      <ion-select-option value=\"Noviembre\">Noviembre</ion-select-option>\n      <ion-select-option value=\"Diciembre\">Diciembre</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n\n\n  <ion-item>\n    <ion-label position=\"floating\">\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n       Lunes</ion-label>\n    <ion-input type=\"text\" *ngIf=\"id!=0\" [(ngModel)]=\"lunes\" name=\"lunes\" required pattern=\"[0-9\\.]+\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n       Martes\n    </ion-label>\n    <ion-input type=\"text\" *ngIf=\"id!=0\" [(ngModel)]=\"martes\" name=\"martes\" required pattern=\"[0-9\\.]+\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      Miercoles</ion-label>\n    <ion-input type=\"text\" *ngIf=\"id!=0\" [(ngModel)]=\"miercoles\" name=\"miercoles\" required pattern=\"[0-9\\.]+\"></ion-input>\n  </ion-item>\n\n  \n  <ion-item>\n    <ion-label position=\"floating\">\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      Jueves</ion-label>\n    <ion-input type=\"text\" *ngIf=\"id!=0\" [(ngModel)]=\"jueves\" name=\"jueves\" required pattern=\"[0-9\\.]+\"></ion-input>\n  </ion-item>\n\n  \n  <ion-item>\n    <ion-label position=\"floating\">\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      Viernes</ion-label>\n    <ion-input type=\"text\" *ngIf=\"id!=0\" [(ngModel)]=\"viernes\" name=\"viernes\" required pattern=\"[0-9\\.]+\"></ion-input>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label position=\"floating\">\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      Sabado</ion-label>\n    <ion-input type=\"text\" *ngIf=\"id!=0\" [(ngModel)]=\"sabado\" name=\"sabado\" required pattern=\"[0-9\\.]+\"></ion-input>\n  </ion-item>\n\n  \n  <ion-item>\n    <ion-label position=\"floating\">\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      Domingo</ion-label>\n    <ion-input type=\"text\" *ngIf=\"id!=0\" [(ngModel)]=\"domingo\" name=\"domingo\" required pattern=\"[0-9\\.]+\"></ion-input>\n  </ion-item>\n\n  \n  <ion-button expand=\"full\" type=\"submit\"  *ngIf=\"id!=0\"  [disabled]=\"disabledbutton\"  (click)=\"crudActionguardar(Update)\">\n    Guardar \n  </ion-button>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/modsemanall/modsemanall-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/modsemanall/modsemanall-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ModsemanallPageRoutingModule */

  /***/
  function srcAppPagesModsemanallModsemanallRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModsemanallPageRoutingModule", function () {
      return ModsemanallPageRoutingModule;
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


    var _modsemanall_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modsemanall.page */
    "./src/app/pages/modsemanall/modsemanall.page.ts");

    var routes = [{
      path: '',
      component: _modsemanall_page__WEBPACK_IMPORTED_MODULE_3__["ModsemanallPage"]
    }];

    var ModsemanallPageRoutingModule = function ModsemanallPageRoutingModule() {
      _classCallCheck(this, ModsemanallPageRoutingModule);
    };

    ModsemanallPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ModsemanallPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/modsemanall/modsemanall.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/modsemanall/modsemanall.module.ts ***!
    \*********************************************************/

  /*! exports provided: ModsemanallPageModule */

  /***/
  function srcAppPagesModsemanallModsemanallModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModsemanallPageModule", function () {
      return ModsemanallPageModule;
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


    var _modsemanall_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modsemanall-routing.module */
    "./src/app/pages/modsemanall/modsemanall-routing.module.ts");
    /* harmony import */


    var _modsemanall_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modsemanall.page */
    "./src/app/pages/modsemanall/modsemanall.page.ts");

    var ModsemanallPageModule = function ModsemanallPageModule() {
      _classCallCheck(this, ModsemanallPageModule);
    };

    ModsemanallPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modsemanall_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModsemanallPageRoutingModule"]],
      declarations: [_modsemanall_page__WEBPACK_IMPORTED_MODULE_6__["ModsemanallPage"]]
    })], ModsemanallPageModule);
    /***/
  },

  /***/
  "./src/app/pages/modsemanall/modsemanall.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/modsemanall/modsemanall.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesModsemanallModsemanallPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZHNlbWFuYWxsL21vZHNlbWFuYWxsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/modsemanall/modsemanall.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/modsemanall/modsemanall.page.ts ***!
    \*******************************************************/

  /*! exports provided: ModsemanallPage */

  /***/
  function srcAppPagesModsemanallModsemanallPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModsemanallPage", function () {
      return ModsemanallPage;
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

    var ModsemanallPage = /*#__PURE__*/function () {
      function ModsemanallPage(router, toastCtrl, alertCtrl, loadingCtrl, accsPrvds, actRoute) {
        _classCallCheck(this, ModsemanallPage);

        this.router = router;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.accsPrvds = accsPrvds;
        this.actRoute = actRoute;
        this.Des_de_semana = "";
        this.mes = "";
        this.lunes = "";
        this.martes = "";
        this.miercoles = "";
        this.jueves = "";
        this.viernes = "";
        this.sabado = "";
        this.domingo = "";
      }

      _createClass(ModsemanallPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.actRoute.params.subscribe(function (data) {
            console.log(data);
            _this.id = data.id;

            if (_this.id != 0) {
              _this.cargarMenu();
            }
          });
        }
      }, {
        key: "cargarMenu",
        value: function cargarMenu() {
          var _this2 = this;

          return new Promise(function (resolve) {
            var body = {
              aksi: 'load_single_dataPSL',
              id: _this2.id
            };

            _this2.accsPrvds.postData(body, 'proses_api.php').subscribe(function (res) {
              _this2.Des_de_semana = res.result.Des_de_semana;
              _this2.mes = res.result.mes;
              _this2.lunes = res.result.lunes;
              _this2.martes = res.result.martes;
              _this2.miercoles = res.result.miercoles;
              _this2.jueves = res.result.jueves;
              _this2.viernes = res.result.viernes;
              _this2.sabado = res.result.sabado;
              _this2.domingo = res.result.domingo;
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
                    if (!(this.Des_de_semana == "", this.mes == "", this.lunes == "", this.martes == "", this.miercoles == "", this.jueves == "", this.viernes == "", this.sabado == "", this.domingo == "")) {
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
                        aksi: 'mod_crudPSL',
                        id: _this3.id,
                        Des_de_semana: _this3.Des_de_semana,
                        mes: _this3.mes,
                        lunes: _this3.lunes,
                        martes: _this3.martes,
                        miercoles: _this3.miercoles,
                        jueves: _this3.jueves,
                        viernes: _this3.viernes,
                        sabado: _this3.sabado,
                        domingo: _this3.domingo,
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

      return ModsemanallPage;
    }();

    ModsemanallPage.ctorParameters = function () {
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

    ModsemanallPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modsemanall',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modsemanall.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modsemanall/modsemanall.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modsemanall.page.scss */
      "./src/app/pages/modsemanall/modsemanall.page.scss"))["default"]]
    })], ModsemanallPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-modsemanall-modsemanall-module-es5.js.map