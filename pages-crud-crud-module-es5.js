function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-crud-crud-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crud/crud.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crud/crud.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCrudCrudPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title>REGISTRO DE USUARIOS</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons> \n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <div>\n      <ion-item>\n        <ion-input type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"your_name\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label style=\"color:#999\">Genero</ion-label>\n        <ion-select interface=\"popover\" [(ngModel)]=\"gender\" >\n          <ion-select-option value=\"f\">F</ion-select-option>\n          <ion-select-option value=\"m\">M</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item style=\"color: #999;\">\n        <ion-label position=\"floating\">Año de Nacimiento</ion-label>\n        <ion-datetime displayFormat=\"YY/MM/DD\" [(ngModel)]=\"date_birth\" min=\"1945-08-17\" max=\"2020-12-09\"></ion-datetime>\n      </ion-item>\n      \n   \n      <ion-item>\n        <ion-input type=\"email_address\" placeholder=\"Usuario\" *ngIf=\"id==0\" [(ngModel)]=\"email_address\"></ion-input>\n        <ion-input type=\"email_address\" placeholder=\"Usuario\" *ngIf=\"id!=0\" readonly=\"true\" [(ngModel)]=\"email_address\"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-input type=\"password\" placeholder=\"Contrasena\" [(ngModel)]=\"password\" required pattern=\"(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$\"></ion-input>\n      </ion-item>\n\n      <ion-button expand=\"full\" class=\"ion-padding\" *ngIf=\"id==0\"  color=\"primary\" (click)=\"crudAction('Create')\" [disabled]=\"disabledbutton\">Registrar</ion-button>\n      <ion-button expand=\"full\" class=\"ion-padding\" *ngIf=\"id!=0\" color=\"primary\" (click)=\"crudAction('Update')\" [disabled]=\"disabledbutton\">Cargar</ion-button>\n  \n    </div>\n\n    <p style=\"font-size: 14px; color: #999;\" class=\"ion-padding\" *ngIf=\"id!=0\">\n      Deje la contraseña en blanco si no desea cambiarla\n    </p>\n      \n  </ion-list>\n\n</ion-content>\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/pages/crud/crud-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/crud/crud-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CrudPageRoutingModule */

  /***/
  function srcAppPagesCrudCrudRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrudPageRoutingModule", function () {
      return CrudPageRoutingModule;
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


    var _crud_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./crud.page */
    "./src/app/pages/crud/crud.page.ts");

    var routes = [{
      path: '',
      component: _crud_page__WEBPACK_IMPORTED_MODULE_3__["CrudPage"]
    }];

    var CrudPageRoutingModule = function CrudPageRoutingModule() {
      _classCallCheck(this, CrudPageRoutingModule);
    };

    CrudPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CrudPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/crud/crud.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/crud/crud.module.ts ***!
    \*******************************************/

  /*! exports provided: CrudPageModule */

  /***/
  function srcAppPagesCrudCrudModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrudPageModule", function () {
      return CrudPageModule;
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


    var _crud_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./crud-routing.module */
    "./src/app/pages/crud/crud-routing.module.ts");
    /* harmony import */


    var _crud_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./crud.page */
    "./src/app/pages/crud/crud.page.ts");

    var CrudPageModule = function CrudPageModule() {
      _classCallCheck(this, CrudPageModule);
    };

    CrudPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _crud_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrudPageRoutingModule"]],
      declarations: [_crud_page__WEBPACK_IMPORTED_MODULE_6__["CrudPage"]]
    })], CrudPageModule);
    /***/
  },

  /***/
  "./src/app/pages/crud/crud.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/crud/crud.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCrudCrudPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NydWQvY3J1ZC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/crud/crud.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/crud/crud.page.ts ***!
    \*****************************************/

  /*! exports provided: CrudPage */

  /***/
  function srcAppPagesCrudCrudPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrudPage", function () {
      return CrudPage;
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

    var CrudPage = /*#__PURE__*/function () {
      function CrudPage(router, toastCtrl, alertCtrl, loadingCtrl, accsPrvds, actRoute) {
        _classCallCheck(this, CrudPage);

        this.router = router;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.accsPrvds = accsPrvds;
        this.actRoute = actRoute;
        this.your_name = "";
        this.gender = "";
        this.date_birth = "";
        this.email_address = "";
        this.password = "";
        this.confirm_pass = "";
      }

      _createClass(CrudPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.actRoute.params.subscribe(function (data) {
            console.log(data);
            _this.id = data.id;

            if (_this.id != 0) {
              _this.loadUser();
            }
          });
        }
      }, {
        key: "loadUser",
        value: function loadUser() {
          var _this2 = this;

          return new Promise(function (resolve) {
            var body = {
              aksi: 'load_single_data',
              id: _this2.id
            };

            _this2.accsPrvds.postData(body, 'proses_api.php').subscribe(function (res) {
              _this2.your_name = res.result.your_name;
              _this2.gender = res.result.gender;
              _this2.date_birth = res.result.date_birthday;
              _this2.email_address = res.result.email_address;
            });
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.disabledbutton = false;
        }
      }, {
        key: "crudAction",
        value: function crudAction(a) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var loader;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.your_name == "")) {
                      _context.next = 4;
                      break;
                    }

                    this.presentToast('Tu nombre es requerido');
                    _context.next = 27;
                    break;

                  case 4:
                    if (!(this.gender == "")) {
                      _context.next = 8;
                      break;
                    }

                    this.presentToast('El genero es requerico');
                    _context.next = 27;
                    break;

                  case 8:
                    if (!(this.date_birth == "")) {
                      _context.next = 12;
                      break;
                    }

                    this.presentToast('Se requiere la Fecha de Nacimiento');
                    _context.next = 27;
                    break;

                  case 12:
                    if (!(this.email_address == "")) {
                      _context.next = 16;
                      break;
                    }

                    this.presentToast('SE requiere el Correo');
                    _context.next = 27;
                    break;

                  case 16:
                    if (!(this.password == '' && this.id == 0)) {
                      _context.next = 20;
                      break;
                    }

                    this.presentToast('Se requiere la Contraseña');
                    _context.next = 27;
                    break;

                  case 20:
                    this.disabledbutton = true;
                    _context.next = 23;
                    return this.loadingCtrl.create({
                      message: 'Espere por favor....'
                    });

                  case 23:
                    loader = _context.sent;
                    _context.next = 26;
                    return loader.present();

                  case 26:
                    return _context.abrupt("return", new Promise(function (resolve) {
                      var body = {
                        aksi: 'proses_crud',
                        id: _this3.id,
                        your_name: _this3.your_name,
                        gender: _this3.gender,
                        date_birth: _this3.date_birth,
                        email_address: _this3.email_address,
                        password: _this3.password,
                        action: a
                      };

                      _this3.accsPrvds.postData(body, 'proses_api.php').subscribe(function (res) {
                        if (res.success == true) {
                          loader.dismiss();
                          _this3.disabledbutton = false;

                          _this3.presentToast(res.msg);

                          _this3.router.navigate(['/home2']);
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

                  case 27:
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
                          _this4.crudAction(b);
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

      return CrudPage;
    }();

    CrudPage.ctorParameters = function () {
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

    CrudPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-crud',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./crud.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/crud/crud.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./crud.page.scss */
      "./src/app/pages/crud/crud.page.scss"))["default"]]
    })], CrudPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-crud-crud-module-es5.js.map