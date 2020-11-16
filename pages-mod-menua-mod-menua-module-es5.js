function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mod-menua-mod-menua-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mod-menua/mod-menua.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mod-menua/mod-menua.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesModMenuaModMenuaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n\n    <ion-title>\n      MODIFICAR MENU SEMANAL \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      Menu Semanal\n    </ion-label>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label>N° de Semana</ion-label>\n    <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" placeholder=\"Seleccione una\" *ngIf=\"id!=0\" [(ngModel)]=\"numsemana\" name=\"numsemana\" required>\n      <ion-select-option value=\"SEMANA N° 1\">SEMANA N° 1</ion-select-option>\n      <ion-select-option value=\"SEMANA N° 2\">SEMANA N° 2</ion-select-option>\n      <ion-select-option value=\"SEMANA N° 3\">SEMANA N° 3</ion-select-option>\n      <ion-select-option value=\"SEMANA N° 4\">SEMANA N° 4</ion-select-option>\n      <ion-select-option value=\"SEMANA N° 5\">SEMANA N° 5</ion-select-option>\n      <ion-select-option value=\"SEMANA N° 6\">SEMANA N° 6</ion-select-option>\n      <ion-select-option value=\"SEMANA N° 7\">SEMANA N° 7</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n    <ion-label>Descripcion</ion-label>\n    <ion-select value=\"brown\" okText=\"Ok\" cancelText=\"Salir\" *ngIf=\"id!=0\" [(ngModel)]=\"descripcion\" name=\"descripcion\" required>\n      <ion-select-option value=\"Desayuno\">Desayuno</ion-select-option>\n      <ion-select-option value=\"Sopa\">Sopa</ion-select-option>\n      <ion-select-option value=\"Segundo\">Segundo</ion-select-option>\n      <ion-select-option value=\"Postre\">Postre</ion-select-option>\n      <ion-select-option value=\"Refresco\">Refresco</ion-select-option>\n      <ion-select-option value=\"Cena\">Cena</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      Lunes</ion-label>\n    <ion-input type=\"text\" required pattern=\"[A-Za-z]+\" *ngIf=\"id!=0\"  [(ngModel)]=\"lunes\" name=\"lunes\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      Martes</ion-label>\n    <ion-input type=\"text\" required pattern=\"[A-Za-z]+\" *ngIf=\"id!=0\" [(ngModel)]=\"martes\" name=\"martes\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      Miercoles</ion-label>\n    <ion-input type=\"text\" required pattern=\"[A-Za-z]+\" *ngIf=\"id!=0\"  [(ngModel)]=\"miercoles\" name=\"miercoles\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      Jueves</ion-label>\n    <ion-input type=\"text\" required pattern=\"[A-Za-z]+\" *ngIf=\"id!=0\"  [(ngModel)]=\"jueves\" name=\"jueves\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      viernes</ion-label>\n    <ion-input type=\"text\" required pattern=\"[A-Za-z]+\" *ngIf=\"id!=0\" [(ngModel)]=\"viernes\" name=\"viernes\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      Sabado</ion-label>\n    <ion-input type=\"text\" required pattern=\"[A-Za-z]+\" *ngIf=\"id!=0\" [(ngModel)]=\"sabado\" name=\"sabado\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">\n      <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n      Domingo</ion-label>\n    <ion-input type=\"text\" required pattern=\"[A-Za-z]+\" *ngIf=\"id!=0\"  [(ngModel)]=\"domingo\" name=\"domingo\"></ion-input>\n  </ion-item>\n \n  <ion-button expand=\"full\" type=\"submit\"  [disabled]=\"disabledbutton\"  *ngIf=\"id!=0\"  (click)=\" crudActionguardar(Update)\">\n    Guardar\n  </ion-button>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/mod-menua/mod-menua-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/mod-menua/mod-menua-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ModMenuaPageRoutingModule */

  /***/
  function srcAppPagesModMenuaModMenuaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModMenuaPageRoutingModule", function () {
      return ModMenuaPageRoutingModule;
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


    var _mod_menua_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mod-menua.page */
    "./src/app/pages/mod-menua/mod-menua.page.ts");

    var routes = [{
      path: '',
      component: _mod_menua_page__WEBPACK_IMPORTED_MODULE_3__["ModMenuaPage"]
    }];

    var ModMenuaPageRoutingModule = function ModMenuaPageRoutingModule() {
      _classCallCheck(this, ModMenuaPageRoutingModule);
    };

    ModMenuaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ModMenuaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/mod-menua/mod-menua.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/mod-menua/mod-menua.module.ts ***!
    \*****************************************************/

  /*! exports provided: ModMenuaPageModule */

  /***/
  function srcAppPagesModMenuaModMenuaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModMenuaPageModule", function () {
      return ModMenuaPageModule;
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


    var _mod_menua_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mod-menua-routing.module */
    "./src/app/pages/mod-menua/mod-menua-routing.module.ts");
    /* harmony import */


    var _mod_menua_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mod-menua.page */
    "./src/app/pages/mod-menua/mod-menua.page.ts");

    var ModMenuaPageModule = function ModMenuaPageModule() {
      _classCallCheck(this, ModMenuaPageModule);
    };

    ModMenuaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mod_menua_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModMenuaPageRoutingModule"]],
      declarations: [_mod_menua_page__WEBPACK_IMPORTED_MODULE_6__["ModMenuaPage"]]
    })], ModMenuaPageModule);
    /***/
  },

  /***/
  "./src/app/pages/mod-menua/mod-menua.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/mod-menua/mod-menua.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesModMenuaModMenuaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZC1tZW51YS9tb2QtbWVudWEucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/mod-menua/mod-menua.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/mod-menua/mod-menua.page.ts ***!
    \***************************************************/

  /*! exports provided: ModMenuaPage */

  /***/
  function srcAppPagesModMenuaModMenuaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModMenuaPage", function () {
      return ModMenuaPage;
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

    var ModMenuaPage = /*#__PURE__*/function () {
      function ModMenuaPage(router, toastCtrl, alertCtrl, loadingCtrl, accsPrvds, actRoute) {
        _classCallCheck(this, ModMenuaPage);

        this.router = router;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.accsPrvds = accsPrvds;
        this.actRoute = actRoute;
        this.numsemana = "";
        this.descripcion = "";
        this.lunes = "";
        this.martes = "";
        this.miercoles = "";
        this.jueves = "";
        this.viernes = "";
        this.sabado = "";
        this.domingo = "";
      }

      _createClass(ModMenuaPage, [{
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
              aksi: 'load_single_dataMSA',
              id: _this2.id
            };

            _this2.accsPrvds.postData(body, 'proses_api.php').subscribe(function (res) {
              _this2.numsemana = res.result.numsemana;
              _this2.descripcion = res.result.descripcion;
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
                    if (!(this.numsemana == "", this.descripcion == "", this.lunes == "", this.martes == "", this.miercoles == "", this.jueves == "", this.viernes == "", this.sabado == "", this.domingo == "")) {
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
                        aksi: 'mod_crudMSA',
                        id: _this3.id,
                        numsemana: _this3.numsemana,
                        descripcion: _this3.descripcion,
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

                          _this3.router.navigate(['/home']);
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

      return ModMenuaPage;
    }();

    ModMenuaPage.ctorParameters = function () {
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

    ModMenuaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mod-menua',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mod-menua.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mod-menua/mod-menua.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mod-menua.page.scss */
      "./src/app/pages/mod-menua/mod-menua.page.scss"))["default"]]
    })], ModMenuaPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-mod-menua-mod-menua-module-es5.js.map