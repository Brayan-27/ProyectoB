function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-verusuadmin-verusuadmin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verusuadmin/verusuadmin.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verusuadmin/verusuadmin.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesVerusuadminVerusuadminPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>REGISTRO DE ADMIN</ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n          [text]=\"buttonText\"\n          [icon]=\"buttonIcon\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-buutons color=\"light\">\n        <ion-icon slot=\"icon-only\" name=\"list-circle\"></ion-icon>\n      </ion-buutons>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item>\n    <ion-icon color=\"Black\" name=\"reader\"></ion-icon>\n    <ion-label>\n      Datos de Administradores Registrados\n    </ion-label>\n  </ion-item>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefreshadmin($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\"></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let user of users\">\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img class=\"icon\" src=\"assets/icon/usA.png\" alt=\"\" >\n        </ion-avatar>\n        <ion-label>{{user.usuarioadmin}}</ion-label>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option>MODIFICAR</ion-item-option>\n        <ion-item-option (click)=\"delDataadmin(user.id_usera)\" color=\"danger\">ELIMINAR</ion-item-option>\n      </ion-item-options> \n\n    </ion-item-sliding>\n  </ion-list>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/verusuadmin/verusuadmin-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/verusuadmin/verusuadmin-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: VerusuadminPageRoutingModule */

  /***/
  function srcAppPagesVerusuadminVerusuadminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerusuadminPageRoutingModule", function () {
      return VerusuadminPageRoutingModule;
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


    var _verusuadmin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./verusuadmin.page */
    "./src/app/pages/verusuadmin/verusuadmin.page.ts");

    var routes = [{
      path: '',
      component: _verusuadmin_page__WEBPACK_IMPORTED_MODULE_3__["VerusuadminPage"]
    }];

    var VerusuadminPageRoutingModule = function VerusuadminPageRoutingModule() {
      _classCallCheck(this, VerusuadminPageRoutingModule);
    };

    VerusuadminPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VerusuadminPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/verusuadmin/verusuadmin.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/verusuadmin/verusuadmin.module.ts ***!
    \*********************************************************/

  /*! exports provided: VerusuadminPageModule */

  /***/
  function srcAppPagesVerusuadminVerusuadminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerusuadminPageModule", function () {
      return VerusuadminPageModule;
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


    var _verusuadmin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./verusuadmin-routing.module */
    "./src/app/pages/verusuadmin/verusuadmin-routing.module.ts");
    /* harmony import */


    var _verusuadmin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./verusuadmin.page */
    "./src/app/pages/verusuadmin/verusuadmin.page.ts");

    var VerusuadminPageModule = function VerusuadminPageModule() {
      _classCallCheck(this, VerusuadminPageModule);
    };

    VerusuadminPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _verusuadmin_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerusuadminPageRoutingModule"]],
      declarations: [_verusuadmin_page__WEBPACK_IMPORTED_MODULE_6__["VerusuadminPage"]]
    })], VerusuadminPageModule);
    /***/
  },

  /***/
  "./src/app/pages/verusuadmin/verusuadmin.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/verusuadmin/verusuadmin.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesVerusuadminVerusuadminPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlcnVzdWFkbWluL3ZlcnVzdWFkbWluLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/verusuadmin/verusuadmin.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/verusuadmin/verusuadmin.page.ts ***!
    \*******************************************************/

  /*! exports provided: VerusuadminPage */

  /***/
  function srcAppPagesVerusuadminVerusuadminPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerusuadminPage", function () {
      return VerusuadminPage;
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

    var VerusuadminPage = /*#__PURE__*/function () {
      function VerusuadminPage(router, toastCtrl, alertCtrl, loadingCtrl, accsPrvds, navCtrl, storage) {
        _classCallCheck(this, VerusuadminPage);

        this.router = router;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.accsPrvds = accsPrvds;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.users = [];
        this.limit = 13;
        this.start = 0;
      }

      _createClass(VerusuadminPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          //this.storage.get('storage_xxx').then((res)=>{
          //console.log(res);
          //this.datastorage = res;
          //this.name = this.datastorage.your_name;
          //});
          this.start = 0;
          this.users = [];
          this.loadUsersadmin();
        }
      }, {
        key: "loadUsersadmin",
        value: function loadUsersadmin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    return _context.abrupt("return", new Promise(function (resolve) {
                      var body = {
                        aksi: 'load_usersadmin',
                        start: _this.start,
                        limit: _this.limit
                      };

                      _this.accsPrvds.postData(body, 'proses_api.php').subscribe(function (res) {
                        var _iterator = _createForOfIteratorHelper(res.result),
                            _step;

                        try {
                          for (_iterator.s(); !(_step = _iterator.n()).done;) {
                            var datas = _step.value;

                            _this.users.push(datas);
                          }
                        } catch (err) {
                          _iterator.e(err);
                        } finally {
                          _iterator.f();
                        }

                        resolve(true);
                      });
                    }));

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "doRefreshadmin",
        value: function doRefreshadmin(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var loader;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingCtrl.create({
                      message: 'please wait....'
                    });

                  case 2:
                    loader = _context2.sent;
                    _context2.next = 5;
                    return loader.present();

                  case 5:
                    this.ionViewDidEnter();
                    event.target.complete();
                    loader.dismiss();

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this2 = this;

          this.start += this.limit;
          setTimeout(function () {
            _this2.loadUsersadmin().then(function () {//event.target.complete();
            });
          }, 500);
        }
      }, {
        key: "delDataadmin",
        value: function delDataadmin(a) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    return _context3.abrupt("return", new Promise(function (resolve) {
                      var body = {
                        aksi: 'del_usersadmin',
                        id: a
                      };

                      _this3.accsPrvds.postData(body, 'proses_api.php').subscribe(function (res) {
                        if (res.success == true) {
                          _this3.presentToast('Administrador Eliminado');

                          _this3.ionViewDidEnter();
                        } else {
                          _this3.presentToast('delete error');
                        }
                      });
                    }));

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(a) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.toastCtrl.create({
                      message: a,
                      duration: 1500
                    });

                  case 2:
                    toast = _context4.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return VerusuadminPage;
    }();

    VerusuadminPage.ctorParameters = function () {
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
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }];
    };

    VerusuadminPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verusuadmin',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./verusuadmin.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/verusuadmin/verusuadmin.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./verusuadmin.page.scss */
      "./src/app/pages/verusuadmin/verusuadmin.page.scss"))["default"]]
    })], VerusuadminPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-verusuadmin-verusuadmin-module-es5.js.map