function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">INICIAR SESION</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager=\"true\">\n    <ion-slide class=\"slide-one\">\n\n      <ion-list>\n        <ion-item> \n          <ion-icon slot=\"start\" name=\"moon\"></ion-icon>\n          <ion-label>Activar el tema oscuro</ion-label>\n          <ion-toggle slot=\"end\" [ngModel]=\"darkMode\"  (ionChange)=\"cambio\"></ion-toggle>\n        </ion-item>\n      </ion-list>\n    \n      <img class=\"icon\" src=\"assets/icon/eje.png\" alt=\"\" >\n    \n      <ion-list>\n        <ion-item class=\"\">\n          <ion-icon color=\"danger\" name=\"person-circle\"></ion-icon>\n          <ion-label position=\"stacked\" > USUARIO <span class=\"text-danger\">*</span></ion-label>\n          <ion-input type=\"email_address\" placeholder=\"Usuario\" [(ngModel)]=\"email_address\"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-icon color=\"danger\" name=\"key\"></ion-icon>\n          <ion-label position=\"stacked\" > CONTRASEÑA <span class=\"text-danger\">*</span></ion-label>\n          <ion-input type=\"password\" placeholder=\"Contraseña\" [(ngModel)]=\"password\"></ion-input>\n        </ion-item>\n        <ion-button expand=\"full\" class=\"ion-padding\" color=\"primary\" (click)=\"tryLogin()\">INGRESAR</ion-button>\n      \n        \n      <p class=\"ion-padding info-1\">\n        Para iniciar sesion  <br/>\n        si no tienes una cuenta haz clic, <span (click)=\"openRegister()\">Registro Nuevo</span>\n       \n      </p>\n    \n      </ion-list>\n\n\n    </ion-slide>\n\n    <ion-slide class=\"slide-two\">\n      <icon-item  src=\"../assets/icon/eje.png\" ></icon-item>\n      <p class=\"labelintro\">\n        ADMINISTRADOR  \n      </p>\n\n      <ion-item class=\"\">\n        <ion-icon color=\"danger\" name=\"person-circle\"></ion-icon>\n        <ion-label position=\"stacked\" > USUARIO <span class=\"text-danger\">*</span></ion-label>\n        <ion-input type=\"tex\" placeholder=\"Usuario\" [(ngModel)]=\"usuarioadmin\"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-icon color=\"danger\" name=\"key\"></ion-icon>\n        <ion-label position=\"stacked\" > CONTRASEÑA <span class=\"text-danger\">*</span></ion-label>\n        <ion-input type=\"password\" placeholder=\"Contraseña\" [(ngModel)]=\"passadmin\"></ion-input>\n      </ion-item>\n      \n      <ion-button expand=\"full\" class=\"ion-padding\" color=\"primary\" (click)=\"tryLoginAbmin()\">INGRESAR</ion-button>\n    \n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text-danger {\n  color: #cf3c4f;\n}\n\n.info-1 {\n  font-size: 14px;\n  color: #999;\n}\n\n.info-1 span {\n  color: blue;\n}\n\nion-slide {\n  height: 92vh;\n  flex-direction: column;\n}\n\nion-imag {\n  max-width: 50vw;\n  max-height: 50vh;\n  overflow: hidden;\n}\n\n.slide-one {\n  background: #fff;\n  color: #49776c;\n}\n\n.slide-two {\n  background: #49776c;\n  color: #fff;\n}\n\n.labelintro {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.labelintro span {\n  font-size: 14px;\n}\n\n.icon {\n  width: 60%;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFx3YW1zc1xcRGVza3RvcFxccHJ1ZWJhIGVsZWN0dHJvblxccHJvR1xccHJveWVjdG8yNy9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FES0E7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUNGSjs7QURLQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRko7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNGSjs7QURLQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBREtBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtBQ0ZKOztBREtBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRleHQtZGFuZ2Vye1xyXG4gICAgY29sb3I6ICNjZjNjNGY7XHJcbn1cclxuXHJcbi5pbmZvLTF7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzk5OTtcclxufVxyXG4uaW5mby0xIHNwYW57XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuXHJcbi8vaW9uIHNpZGxlIFxyXG5cclxuaW9uLXNsaWRle1xyXG4gICAgaGVpZ2h0OiA5MnZoO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuaW9uLWltYWd7XHJcbiAgICBtYXgtd2lkdGg6IDUwdnc7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNsaWRlLW9uZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICAjNDk3NzZjO1xyXG59XHJcblxyXG4uc2xpZGUtdHdvIHtcclxuICAgIGJhY2tncm91bmQ6ICAjNDk3NzZjO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5sYWJlbGludHJvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubGFiZWxpbnRybyBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmljb257XHJcbiAgICB3aWR0aDogNjAlOyBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87IFxyXG59XHJcblxyXG5cclxuICAgICIsIi50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiAjY2YzYzRmO1xufVxuXG4uaW5mby0xIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzk5OTtcbn1cblxuLmluZm8tMSBzcGFuIHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbmlvbi1zbGlkZSB7XG4gIGhlaWdodDogOTJ2aDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaW9uLWltYWcge1xuICBtYXgtd2lkdGg6IDUwdnc7XG4gIG1heC1oZWlnaHQ6IDUwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zbGlkZS1vbmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzQ5Nzc2Yztcbn1cblxuLnNsaWRlLXR3byB7XG4gIGJhY2tncm91bmQ6ICM0OTc3NmM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubGFiZWxpbnRybyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5sYWJlbGludHJvIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDYwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(router, toastCtrl, loadingCtrl, alertCtrl, accsPrvds, storage, navCtrl) {
        _classCallCheck(this, LoginPage);

        this.router = router;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.accsPrvds = accsPrvds;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.email_address = "";
        this.password = ""; //ADMIN

        this.usuarioadmin = "";
        this.passadmin = "";
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDiEnter",
        value: function ionViewDiEnter() {
          this.disabledbutton = false;
        } ///ADMIN

      }, {
        key: "tryLoginAbmin",
        value: function tryLoginAbmin() {
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

                    this.presentToast('El usuario es requerido');
                    _context.next = 15;
                    break;

                  case 4:
                    if (!(this.passadmin == "")) {
                      _context.next = 8;
                      break;
                    }

                    this.presentToast('La contrsena es requerido');
                    _context.next = 15;
                    break;

                  case 8:
                    this.disabledbutton = true;
                    _context.next = 11;
                    return this.loadingCtrl.create({
                      message: 'Prease wait.......'
                    });

                  case 11:
                    loader = _context.sent;
                    _context.next = 14;
                    return loader.present();

                  case 14:
                    return _context.abrupt("return", new Promise(function (resolve) {
                      var body = {
                        aksi: 'proses_loginadim',
                        usuarioadmin: _this.usuarioadmin,
                        passadmin: _this.passadmin
                      };

                      _this.accsPrvds.postData(body, 'proses_api.php').subscribe(function (res) {
                        if (res.success == true) {
                          loader.dismiss();
                          _this.disabledbutton = false;

                          _this.presentToast('Inicio de Sesión Exitoso');

                          _this.storage.set('storage_xxxadmin', res.result); //storag secion creacion


                          _this.navCtrl.navigateRoot(['/menu-admin']);
                        } else {
                          loader.dismiss();
                          _this.disabledbutton = false;

                          _this.presentToast('Email or password is wrong');
                        }
                      }, function (err) {
                        loader.dismiss();
                        _this.disabledbutton = false;

                        _this.presentAlert('Timeout'); //this.presentToast('registro ');
                        //this.navCtrl.navigateRoot(['/home']);

                      });
                    }));

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } //registro

      }, {
        key: "tryLogin",
        value: function tryLogin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.email_address == "")) {
                      _context2.next = 4;
                      break;
                    }

                    this.presentToast('Email is requerid');
                    _context2.next = 15;
                    break;

                  case 4:
                    if (!(this.password == "")) {
                      _context2.next = 8;
                      break;
                    }

                    this.presentToast('Password is requerid');
                    _context2.next = 15;
                    break;

                  case 8:
                    this.disabledbutton = true;
                    _context2.next = 11;
                    return this.loadingCtrl.create({
                      message: 'Prease wait.......'
                    });

                  case 11:
                    loader = _context2.sent;
                    _context2.next = 14;
                    return loader.present();

                  case 14:
                    return _context2.abrupt("return", new Promise(function (resolve) {
                      var body = {
                        aksi: 'proses_login',
                        email_address: _this2.email_address,
                        password: _this2.password
                      };

                      _this2.accsPrvds.postData(body, 'proses_api.php').subscribe(function (res) {
                        if (res.success == true) {
                          loader.dismiss();
                          _this2.disabledbutton = false;

                          _this2.presentToast('Inicio de Sesión Exitoso');

                          _this2.storage.set('storage_xxx', res.result); //storag secion creacion


                          _this2.navCtrl.navigateRoot(['/home']);
                        } else {
                          loader.dismiss();
                          _this2.disabledbutton = false;

                          _this2.presentToast('Email or password is wrong');
                        }
                      }, function (err) {
                        loader.dismiss();
                        _this2.disabledbutton = false;

                        _this2.presentAlert('Timeout'); //this.presentToast('registro ');
                        //this.navCtrl.navigateRoot(['/home']);

                      });
                    }));

                  case 15:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(a) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastCtrl.create({
                      message: a,
                      duration: 1500
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(a) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
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
                          _this3.tryLogin();
                        }
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "openRegister",
        value: function openRegister() {
          this.router.navigate(['/register']);
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
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
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map