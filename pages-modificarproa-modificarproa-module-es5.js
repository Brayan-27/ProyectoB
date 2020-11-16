function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modificarproa-modificarproa-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modificarproa/modificarproa.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modificarproa/modificarproa.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesModificarproaModificarproaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n\n    <ion-title>\n      MODIFICAR ALIMENTO\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  padding [fullscreen]=\"true\">\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Nombre del Alimento</ion-label>\n      <ion-input type=\"text\" name=\"nombreali\" [(ngModel)]=\"nombreali\" *ngIf=\"id!=0\" required pattern=\"[A-Za-z]+\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-item>\n    <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n    <ion-label>Tipo de Alimento</ion-label>\n    <ion-select value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" *ngIf=\"id!=0\" [(ngModel)]=\"tipo\" name=\"tipo\" required>\n      <ion-select-option value=\"Verduras\">Verduras</ion-select-option>\n      <ion-select-option value=\"Frutas\">Frutas</ion-select-option>\n      <ion-select-option value=\"Legumbres\">Legumbres</ion-select-option>\n      <ion-select-option value=\"Tuberculos\">Tuberculos</ion-select-option>\n      <ion-select-option value=\"Grasas\">Grasas</ion-select-option>\n      <ion-select-option value=\"Huevos\">Huevos</ion-select-option>\n      <ion-select-option value=\"Carnes rojas y blancas\">Carnes rojas y blancas</ion-select-option>\n      <ion-select-option value=\"Cereales\">Cereales</ion-select-option>\n      <ion-select-option value=\"Lacteos\">Lacteos</ion-select-option>\n      <ion-select-option value=\"Frutos secos\">Frutos secos</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n    <ion-label>Unidad de Medida</ion-label>\n    <ion-select value=\"brown\" okText=\"Confirmar\" cancelText=\"Descartar\" *ngIf=\"id!=0\" [(ngModel)]=\"cantidad_pro\" name=\"cantidad_pro\" required>\n      <ion-select-option value=\"Kg\">Kg</ion-select-option>\n      <ion-select-option value=\"Lb\">Lb</ion-select-option>\n      <ion-select-option value=\"Amrr\">Amrr</ion-select-option>\n      <ion-select-option value=\"Lt\">Lt</ion-select-option>\n      <ion-select-option value=\"g\">g</ion-select-option>\n      <ion-select-option value=\"ml\">ml</ion-select-option>\n      <ion-select-option value=\"unidad\">unidad</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Unidad Minima</ion-label>\n      <ion-input type=\"text\" name=\"cantidad_min\" [(ngModel)]=\"cantidad_min\" *ngIf=\"id!=0\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Unidad Media</ion-label>\n      <ion-input type=\"text\" name=\"cantidad_med\" [(ngModel)]=\"cantidad_med\" *ngIf=\"id!=0\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">\n        <ion-icon color=\"warning\" name=\"receipt-sharp\"></ion-icon>\n        Unidad Maxima</ion-label>\n      <ion-input type=\"text\" name=\"cantidad_max\" [(ngModel)]=\"cantidad_max\" *ngIf=\"id!=0\" required pattern=\"[0-9\\.]+\"></ion-input>\n    </ion-item>\n  </ion-list>\n\n\n\n  <ion-button expand=\"full\" type=\"submit\" *ngIf=\"id!=0\"  [disabled]=\"disabledbutton\"  (click)=\"crudActionguardar(Update)\">\n    Guardar\n  </ion-button>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/modificarproa/modificarproa-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/modificarproa/modificarproa-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ModificarproaPageRoutingModule */

  /***/
  function srcAppPagesModificarproaModificarproaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModificarproaPageRoutingModule", function () {
      return ModificarproaPageRoutingModule;
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


    var _modificarproa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modificarproa.page */
    "./src/app/pages/modificarproa/modificarproa.page.ts");

    var routes = [{
      path: '',
      component: _modificarproa_page__WEBPACK_IMPORTED_MODULE_3__["ModificarproaPage"]
    }];

    var ModificarproaPageRoutingModule = function ModificarproaPageRoutingModule() {
      _classCallCheck(this, ModificarproaPageRoutingModule);
    };

    ModificarproaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ModificarproaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/modificarproa/modificarproa.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/modificarproa/modificarproa.module.ts ***!
    \*************************************************************/

  /*! exports provided: ModificarproaPageModule */

  /***/
  function srcAppPagesModificarproaModificarproaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModificarproaPageModule", function () {
      return ModificarproaPageModule;
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


    var _modificarproa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modificarproa-routing.module */
    "./src/app/pages/modificarproa/modificarproa-routing.module.ts");
    /* harmony import */


    var _modificarproa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modificarproa.page */
    "./src/app/pages/modificarproa/modificarproa.page.ts");

    var ModificarproaPageModule = function ModificarproaPageModule() {
      _classCallCheck(this, ModificarproaPageModule);
    };

    ModificarproaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modificarproa_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModificarproaPageRoutingModule"]],
      declarations: [_modificarproa_page__WEBPACK_IMPORTED_MODULE_6__["ModificarproaPage"]]
    })], ModificarproaPageModule);
    /***/
  },

  /***/
  "./src/app/pages/modificarproa/modificarproa.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/modificarproa/modificarproa.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesModificarproaModificarproaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZGlmaWNhcnByb2EvbW9kaWZpY2FycHJvYS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/modificarproa/modificarproa.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/modificarproa/modificarproa.page.ts ***!
    \***********************************************************/

  /*! exports provided: ModificarproaPage */

  /***/
  function srcAppPagesModificarproaModificarproaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModificarproaPage", function () {
      return ModificarproaPage;
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

    var ModificarproaPage = /*#__PURE__*/function () {
      function ModificarproaPage(router, toastCtrl, alertCtrl, loadingCtrl, accsPrvds, actRoute) {
        _classCallCheck(this, ModificarproaPage);

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

      _createClass(ModificarproaPage, [{
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
              aksi: 'load_single_dataPA',
              id: _this2.id
            };

            _this2.accsPrvds.postData(body, 'proses_api.php').subscribe(function (res) {
              _this2.tipo = res.result.tipo;
              _this2.nombreali = res.result.nombreali;
              _this2.cantidad_pro = res.result.cantidad_pro;
              _this2.cantidad_min = res.result.cantidad_min;
              _this2.cantidad_med = res.result.cantidad_med;
              _this2.cantidad_max = res.result.cantidad_max;
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
                    if (!(this.tipo == "", this.nombreali == "", this.cantidad_pro == "", this.cantidad_min == "", this.cantidad_med == "", this.cantidad_max == "")) {
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
                        aksi: 'mod_crudPA',
                        id: _this3.id,
                        tipo: _this3.tipo,
                        nombreali: _this3.nombreali,
                        cantidad_pro: _this3.cantidad_pro,
                        cantidad_min: _this3.cantidad_min,
                        cantidad_med: _this3.cantidad_med,
                        cantidad_max: _this3.cantidad_max,
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

      return ModificarproaPage;
    }();

    ModificarproaPage.ctorParameters = function () {
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

    ModificarproaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modificarproa',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modificarproa.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modificarproa/modificarproa.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modificarproa.page.scss */
      "./src/app/pages/modificarproa/modificarproa.page.scss"))["default"]]
    })], ModificarproaPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-modificarproa-modificarproa-module-es5.js.map