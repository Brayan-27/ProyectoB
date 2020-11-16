function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registeradmin-registeradmin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registeradmin/registeradmin.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registeradmin/registeradmin.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisteradminRegisteradminPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      REGISTRO DE ADMINISTRADOR\n    </ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    \n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      Registrar Administrador\n    </ion-label>\n  </ion-item>\n\n  <ion-list>\n\n    <div>\n      <ion-item>\n        <ion-input type=\"text\" placeholder=\"Usuario\" [(ngModel)]=\"usuarioadmin\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type=\"password\" placeholder=\"Contraseña\" [(ngModel)]=\"passadmin\" required pattern=\"(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$\"></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-input type=\"password\" placeholder=\"Confime su contraseña\" [(ngModel)]=\"confirm_passadmin\" required pattern=\"(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$\"></ion-input>\n      </ion-item>\n\n      <ion-button expand=\"full\" class=\"ion-padding\" color=\"primary\" (click)=\"tryRegisteradmin()\" [disabled]=\"disabledButton\">REGISTRAR</ion-button>\n\n      <p style=\"font-size: 14px; color: #999;\" class=\"ion-padding\" >\n        Ingrese Maximo 8 Caracteres.<br/>\n        Ingrese un Numero.<br/>\n        Ingrese una Mayuscula.<br/>\n        Ingrese un Singno.<br/>\n      </p>\n\n      <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n        <ion-label>\n          Visualizar Registro de Administradores\n        </ion-label>\n\n      <ion-button expand=\"full\" class=\"ion-padding\" color=\"primary\" routerLink=\"/verusuadmin\" >VER DATOS DEL ADMIN</ion-button>\n  \n    </div>\n\n  \n      \n  </ion-list>\n\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/registeradmin/registeradmin-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/registeradmin/registeradmin-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: RegisteradminPageRoutingModule */

  /***/
  function srcAppPagesRegisteradminRegisteradminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisteradminPageRoutingModule", function () {
      return RegisteradminPageRoutingModule;
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


    var _registeradmin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registeradmin.page */
    "./src/app/pages/registeradmin/registeradmin.page.ts");

    var routes = [{
      path: '',
      component: _registeradmin_page__WEBPACK_IMPORTED_MODULE_3__["RegisteradminPage"]
    }];

    var RegisteradminPageRoutingModule = function RegisteradminPageRoutingModule() {
      _classCallCheck(this, RegisteradminPageRoutingModule);
    };

    RegisteradminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisteradminPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/registeradmin/registeradmin.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/registeradmin/registeradmin.module.ts ***!
    \*************************************************************/

  /*! exports provided: RegisteradminPageModule */

  /***/
  function srcAppPagesRegisteradminRegisteradminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisteradminPageModule", function () {
      return RegisteradminPageModule;
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


    var _registeradmin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registeradmin-routing.module */
    "./src/app/pages/registeradmin/registeradmin-routing.module.ts");
    /* harmony import */


    var _registeradmin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registeradmin.page */
    "./src/app/pages/registeradmin/registeradmin.page.ts");

    var RegisteradminPageModule = function RegisteradminPageModule() {
      _classCallCheck(this, RegisteradminPageModule);
    };

    RegisteradminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registeradmin_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisteradminPageRoutingModule"]],
      declarations: [_registeradmin_page__WEBPACK_IMPORTED_MODULE_6__["RegisteradminPage"]]
    })], RegisteradminPageModule);
    /***/
  },

  /***/
  "./src/app/pages/registeradmin/registeradmin.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/registeradmin/registeradmin.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegisteradminRegisteradminPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyYWRtaW4vcmVnaXN0ZXJhZG1pbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/registeradmin/registeradmin.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/registeradmin/registeradmin.page.ts ***!
    \***********************************************************/

  /*! exports provided: RegisteradminPage */

  /***/
  function srcAppPagesRegisteradminRegisteradminPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisteradminPage", function () {
      return RegisteradminPage;
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

    var RegisteradminPage = /*#__PURE__*/function () {
      function RegisteradminPage(router, toastCtrl, loadingCtrl, alertCtrl, accsPrvds) {
        _classCallCheck(this, RegisteradminPage);

        this.router = router;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.accsPrvds = accsPrvds;
        this.usuarioadmin = "";
        this.passadmin = "";
        this.confirm_passadmin = "";
      }

      _createClass(RegisteradminPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDiEnter",
        value: function ionViewDiEnter() {
          this.disabledButton = false;
        }
      }, {
        key: "tryRegisteradmin",
        value: function tryRegisteradmin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.usuarioadmin == "")) {
                      _context.next = 4;
                      break;
                    }

                    this.presentToast('Tu nombre es requerido');
                    _context.next = 19;
                    break;

                  case 4:
                    if (!(this.passadmin == "")) {
                      _context.next = 8;
                      break;
                    }

                    this.presentToast('Se requiere la Contraseña');
                    _context.next = 19;
                    break;

                  case 8:
                    if (!(this.confirm_passadmin != this.passadmin)) {
                      _context.next = 12;
                      break;
                    }

                    this.presentToast('Se requiere que confirme su Contraseña');
                    _context.next = 19;
                    break;

                  case 12:
                    this.disabledButton = true;
                    _context.next = 15;
                    return this.loadingCtrl.create({
                      message: 'Espere por favor....'
                    });

                  case 15:
                    loader = _context.sent;
                    _context.next = 18;
                    return loader.present();

                  case 18:
                    return _context.abrupt("return", new Promise(function (resolve) {
                      var body = {
                        aksi: 'proses_registeradmin',
                        usuarioadmin: _this.usuarioadmin,
                        passadmin: _this.passadmin
                      };

                      _this.accsPrvds.postData(body, 'proses_api.php').subscribe(function (res) {
                        if (res.success == true) {
                          loader.dismiss();
                          _this.disabledButton = false;

                          _this.presentToast(res.msg);

                          _this.router.navigate(['/menu-admin']);
                        } else {
                          loader.dismiss();
                          _this.disabledButton = false;

                          _this.presentToast(res.msg);
                        }
                      }, function (err) {
                        loader.dismiss(); //this.presentToast('registro ');
                        //this.router.navigate(['/login']);

                        _this.disabledButton = false;

                        _this.presentAlert('Timeout');
                      });
                    }));

                  case 19:
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
                      duration: 1500,
                      position: 'top'
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
        value: function presentAlert(a) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

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
                          console.log('Confirm Cancel: blah'); //action
                        }
                      }, {
                        text: 'Try Again',
                        handler: function handler() {
                          _this2.tryRegisteradmin();
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

      return RegisteradminPage;
    }();

    RegisteradminPage.ctorParameters = function () {
      return [{
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

    RegisteradminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registeradmin',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./registeradmin.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registeradmin/registeradmin.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./registeradmin.page.scss */
      "./src/app/pages/registeradmin/registeradmin.page.scss"))["default"]]
    })], RegisteradminPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-registeradmin-registeradmin-module-es5.js.map