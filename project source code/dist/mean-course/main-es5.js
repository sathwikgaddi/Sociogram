function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./auth/auth.module": ["./src/app/auth/auth.module.ts", "auth-auth-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n<!-- <app-error *ngIf=\"hasError\"></app-error> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppErrorErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>An Error Occurred!</h1>\n<div mat-dialog-content>\n  <p class=\"mat-body-1\">{{ data?.message }}</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>Okay</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link href=\"https://fonts.googleapis.com/css?family=Shadows+Into+Light&display=swap\" rel=\"stylesheet\">\n\n<mat-toolbar color = \"primary\">\n  <span>\n    <a routerLink=\"/\" style = \"font-family: 'Shadows Into Light', cursive; font-size: 30px; color: black; font-weight: 500;\">myPosts</a>\n  </span>\n  <span class=\"spacer\"></span>\n  <ul>\n    <li *ngIf=\"userIsAuthenticated\">\n      <a style=\"font-family: 'Amatic SC', cursive; color: rgb(171, 233, 71); font-size: 20px;\" mat-button routerLink=\"/create\" routerLinkActive=\"mat-accent\" >newPost</a>\n    </li>\n    <li *ngIf=\"!userIsAuthenticated\">\n      <a style=\"font-family: 'Amatic SC', cursive; color: rgb(171, 233, 71); font-size: 20px;\" mat-button routerLink=\"/auth/login\" routerLinkActive=\"mat-accent\">login</a>\n    </li>\n    <li *ngIf=\"!userIsAuthenticated\">\n      <a style=\"font-family: 'Amatic SC', cursive; color: rgb(171, 233, 71); font-size: 20px;\" mat-button routerLink=\"/auth/signup\" routerLinkActive=\"mat-accent\">signUp</a>\n    </li>\n    <li *ngIf=\"userIsAuthenticated\">\n      <button style=\"font-family: 'Amatic SC', cursive; color: rgb(233, 130, 71); font-size: 20px;\" mat-button (click)=\"onLogout()\">signOut</button>\n    </li>\n  </ul>\n</mat-toolbar>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-create/post-create.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-create/post-create.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostsPostCreatePostCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form [formGroup]=\"form\" (submit)=\"onSavePost()\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input matInput type=\"text\" formControlName=\"title\" placeholder=\"A Good Name for your Post\" minlength=4 maxlength=20>\n      <mat-error *ngIf=\"form.get('title').invalid\">Hey, length must be greater than 3.</mat-error>\n    </mat-form-field>\n\n    <br><br><br>\n\n    <mat-form-field>\n      <textarea matInput rows=\"4\" formControlName=\"content\" placeholder=\"Describe it\" ></textarea>\n      <mat-error *ngIf=\"form.get('content').invalid\">Probably you forgot to fill this here.</mat-error>\n    </mat-form-field>\n\n    <br><br><br>\n\n    <div>\n      <button mat-stroked-button type=\"button\" (click)=\"filePicker.click()\">Pick your Post from Computer</button>\n      <input type=\"file\" #filePicker (change)=\"onImagePicked($event)\">\n    </div>\n    <div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">\n      <img [src]=\"imagePreview\" [alt]=\"form.value.title\">\n    </div>\n\n    <br><br><br><br>\n\n    <button id=\"submit\" mat-raised-button color=\"accent\" type=\"submit\">Save Post</button>\n  </form>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-list/post-list.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-list/post-list.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPostsPostListPostListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n<mat-accordion multi=\"true\" *ngIf=\"posts.length > 0 && !isLoading\">\n  <mat-expansion-panel *ngFor=\"let post of posts\">\n    <mat-expansion-panel-header style=\"background-color: rgb(218, 213, 206);\">\n      <mat-panel-title>\n        {{post.title}}\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <h3 style=\"color: rgb(103, 189, 226);\">by {{post.username}}</h3> <br>\n    <div class=\"post-image\">\n      <img [src]=\"post.imagePath\" [alt]=\"post.title\">\n    </div>\n    <p>{{ post.content }}</p>\n    <mat-action-row *ngIf=\"userIsAuthenticated && userId === post.creator\" style=\"background-color: rgb(192, 217, 228);\">\n      <a mat-button color=\"primary\" [routerLink]=\"['/edit', post.id]\">EDIT</a>\n      <button mat-button color=\"warn\" (click)=\"onDelete(post.id)\">DELETE</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n</mat-accordion>\n<mat-paginator [length]=\"totalPosts\" [pageSize]=\"postsPerPage\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onChangedPage($event)\"\n  *ngIf=\"posts.length > 0\"></mat-paginator>\n<p class=\"info-text mat-body-1\" *ngIf=\"posts.length <= 0 && !isLoading\" style=\"font-family: 'Amatic SC', cursive; color: rgb(74, 117, 209);\">No posts added yet!</p>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/angular-material.module.ts":
  /*!********************************************!*\
    !*** ./src/app/angular-material.module.ts ***!
    \********************************************/

  /*! exports provided: AngularMaterialModule */

  /***/
  function srcAppAngularMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () {
      return AngularMaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AngularMaterialModule = function AngularMaterialModule() {
      _classCallCheck(this, AngularMaterialModule);
    };

    AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]]
    })], AngularMaterialModule);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./posts/post-list/post-list.component */
    "./src/app/posts/post-list/post-list.component.ts");
    /* harmony import */


    var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./posts/post-create/post-create.component */
    "./src/app/posts/post-create/post-create.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");

    var routes = [{
      path: '',
      component: _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__["PostListComponent"]
    }, {
      path: 'create',
      component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__["PostCreateComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'edit/:postId',
      component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__["PostCreateComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
      path: 'auth',
      loadChildren: './auth/auth.module#AuthModule'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\nmain {\n  width: 80%;\n  margin: 1rem auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5tYWluIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/auth/auth.service.ts"); // import { Subscription } from "rxjs";
    // import { ErrorService } from "./error/error.service";


    var AppComponent =
    /*#__PURE__*/
    function () {
      // hasError = false;
      // private errorSub: Subscription;
      function AppComponent(authService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.autoAuthUser(); // this.errorSub = this.errorService.getErrorListener().subscribe(
          //   message => this.hasError = message !== null
          // );
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./auth/auth-interceptor */
    "./src/app/auth/auth-interceptor.ts");
    /* harmony import */


    var _error_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./error-interceptor */
    "./src/app/error-interceptor.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _angular_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./angular-material.module */
    "./src/app/angular-material.module.ts");
    /* harmony import */


    var _posts_posts_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./posts/posts.module */
    "./src/app/posts/posts.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_11__["AngularMaterialModule"], _posts_posts_module__WEBPACK_IMPORTED_MODULE_12__["PostsModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth-interceptor.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/auth-interceptor.ts ***!
    \******************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(authService) {
        _classCallCheck(this, AuthInterceptor);

        this.authService = authService;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authToken = this.authService.getToken();
          var authRequest = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + authToken)
          });
          return next.handle(authRequest);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var isAuth = this.authService.getIsAuth();

          if (!isAuth) {
            this.router.navigate(['/login']);
          }

          return isAuth;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/user/';

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, router) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(AuthService, [{
        key: "getToken",
        value: function getToken() {
          return this.token;
        }
      }, {
        key: "getIsAuth",
        value: function getIsAuth() {
          return this.isAuthenticated;
        }
      }, {
        key: "getUserId",
        value: function getUserId() {
          return this.userId;
        }
      }, {
        key: "getAuthStatusListener",
        value: function getAuthStatusListener() {
          return this.authStatusListener.asObservable();
        }
      }, {
        key: "createUser",
        value: function createUser(email1, password1, username1) {
          var _this = this;

          var authData = {
            email: email1,
            password: password1,
            username: username1
          };
          this.http.post(BACKEND_URL + '/signup', authData).subscribe(function () {
            _this.router.navigate(['/']);
          }, function (error) {
            _this.authStatusListener.next(false);
          });
        }
      }, {
        key: "login",
        value: function login(email1, password1) {
          var _this2 = this;

          var authData = {
            email: email1,
            password: password1
          };
          this.http.post(BACKEND_URL + '/login', authData).subscribe(function (response) {
            var token = response.token;
            _this2.token = token;

            if (token) {
              var expiresInDuration = response.expiresIn;

              _this2.setAuthTimer(expiresInDuration);

              _this2.isAuthenticated = true;
              _this2.userId = response.userId;
              _this2.username = response.username;

              _this2.authStatusListener.next(true);

              var now = new Date();
              var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);

              _this2.saveAuthData(token, expirationDate, _this2.userId, _this2.username);

              _this2.router.navigate(['/']);
            }
          }, function (error) {
            _this2.authStatusListener.next(false);
          });
        }
      }, {
        key: "autoAuthUser",
        value: function autoAuthUser() {
          var authInformation = this.getAuthData();

          if (!authInformation) {
            return;
          }

          var now = new Date();
          var expiresIn = authInformation.expirationDate.getTime() - now.getTime();

          if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.token = null;
          this.isAuthenticated = false;
          this.authStatusListener.next(false);
          this.userId = null;
          clearTimeout(this.tokenTimer);
          this.clearAuthData();
          this.router.navigate(['/']);
        }
      }, {
        key: "setAuthTimer",
        value: function setAuthTimer(duration) {
          var _this3 = this;

          this.tokenTimer = setTimeout(function () {
            _this3.logout();
          }, duration * 1000);
        }
      }, {
        key: "saveAuthData",
        value: function saveAuthData(token, expirationDate, userId, username) {
          localStorage.setItem('token', token);
          localStorage.setItem('expiration', expirationDate.toISOString());
          localStorage.setItem('userId', userId);
          localStorage.setItem('username', username);
        }
      }, {
        key: "clearAuthData",
        value: function clearAuthData() {
          localStorage.removeItem('token');
          localStorage.removeItem('expiration');
          localStorage.removeItem('userId');
        }
      }, {
        key: "getAuthData",
        value: function getAuthData() {
          var token = localStorage.getItem('token');
          var expirationDate = localStorage.getItem('expiration');
          var userId = localStorage.getItem('userId');

          if (!token || !expirationDate) {
            return;
          }

          return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId
          };
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/error-interceptor.ts":
  /*!**************************************!*\
    !*** ./src/app/error-interceptor.ts ***!
    \**************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _error_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./error/error.service */
    "./src/app/error/error.service.ts");

    var ErrorInterceptor =
    /*#__PURE__*/
    function () {
      function ErrorInterceptor(dialog, errorService) {
        _classCallCheck(this, ErrorInterceptor);

        this.dialog = dialog;
        this.errorService = errorService;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this4 = this;

          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            var errorMessage = "An unknown error occurred!";

            if (error.error.message) {
              errorMessage = error.error.message;
            }

            _this4.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], {
              data: {
                message: errorMessage
              }
            }); // this.errorService.throwError(errorMessage);


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _error_error_service__WEBPACK_IMPORTED_MODULE_6__["ErrorService"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/error/error.component.ts":
  /*!******************************************!*\
    !*** ./src/app/error/error.component.ts ***!
    \******************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js"); // import { Subscription } from "rxjs";
    // import { ErrorService } from "./error.service";


    var ErrorComponent = // data: { message: string };
    // private errorSub: Subscription;
    function ErrorComponent(data) {
      _classCallCheck(this, ErrorComponent);

      this.data = data;
    };

    ErrorComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html")).default,
      selector: 'app-error'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ErrorComponent);
    /***/
  },

  /***/
  "./src/app/error/error.service.ts":
  /*!****************************************!*\
    !*** ./src/app/error/error.service.ts ***!
    \****************************************/

  /*! exports provided: ErrorService */

  /***/
  function srcAppErrorErrorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorService", function () {
      return ErrorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ErrorService =
    /*#__PURE__*/
    function () {
      function ErrorService() {
        _classCallCheck(this, ErrorService);

        this.errorListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(ErrorService, [{
        key: "getErrorListener",
        value: function getErrorListener() {
          return this.errorListener.asObservable();
        }
      }, {
        key: "throwError",
        value: function throwError(message) {
          this.errorListener.next(message);
        }
      }, {
        key: "handleError",
        value: function handleError() {
          this.errorListener.next(null);
        }
      }]);

      return ErrorService;
    }();

    ErrorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], ErrorService);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\nul {\n  display: -webkit-box;\n  display: flex;\n}\n\n.spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBYztVQUFkLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(authService) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
        this.userIsAuthenticated = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.userIsAuthenticated = this.authService.getIsAuth();
          this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
            _this5.userIsAuthenticated = isAuthenticated;
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authService.logout();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authListenerSubs.unsubscribe();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-header",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/posts/post-create/mime-type.validator.ts":
  /*!**********************************************************!*\
    !*** ./src/app/posts/post-create/mime-type.validator.ts ***!
    \**********************************************************/

  /*! exports provided: mimeType */

  /***/
  function srcAppPostsPostCreateMimeTypeValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mimeType", function () {
      return mimeType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var mimeType = function mimeType(control) {
      if (typeof control.value === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
      }

      var file = control.value;
      var fileReader = new FileReader();
      var frObs = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
        fileReader.addEventListener("loadend", function () {
          var arr = new Uint8Array(fileReader.result).subarray(0, 4);
          var header = "";
          var isValid = false;

          for (var i = 0; i < arr.length; i++) {
            header += arr[i].toString(16);
          }

          switch (header) {
            case "89504e47":
              isValid = true;
              break;

            case "ffd8ffe0":
            case "ffd8ffe1":
            case "ffd8ffe2":
            case "ffd8ffe3":
            case "ffd8ffe8":
              isValid = true;
              break;

            default:
              isValid = false; // Or you can use the blob.type as fallback

              break;
          }

          if (isValid) {
            observer.next(null);
          } else {
            observer.next({
              invalidMimeType: true
            });
          }

          observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
      });
      return frObs;
    };
    /***/

  },

  /***/
  "./src/app/posts/post-create/post-create.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/posts/post-create/post-create.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostsPostCreatePostCreateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field,\ntextarea {\n  width: 100%;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\ninput[type=\"file\"] {\n  visibility: hidden;\n}\n\n.image-preview {\n  height: 5rem;\n  margin: 1rem 0;\n}\n\n.image-preview img {\n  height: 100%;\n}\n\n#submit {\n  margin-left: 40%;\n}\n\nmat-card {\n  margin-top: 8%;\n  background-color: blanchedalmond;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1jcmVhdGUvcG9zdC1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFHQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0LWNyZWF0ZS9wb3N0LWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQsXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5pbWFnZS1wcmV2aWV3IHtcbiAgaGVpZ2h0OiA1cmVtO1xuICBtYXJnaW46IDFyZW0gMDtcbn1cblxuLmltYWdlLXByZXZpZXcgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbiNzdWJtaXQge1xuICBtYXJnaW4tbGVmdDogNDAlO1xufVxuXG5tYXQtY2FyZCB7XG4gIG1hcmdpbi10b3A6IDglO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/posts/post-create/post-create.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/posts/post-create/post-create.component.ts ***!
    \************************************************************/

  /*! exports provided: PostCreateComponent */

  /***/
  function srcAppPostsPostCreatePostCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function () {
      return PostCreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../posts.service */
    "./src/app/posts/posts.service.ts");
    /* harmony import */


    var _mime_type_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mime-type.validator */
    "./src/app/posts/post-create/mime-type.validator.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var PostCreateComponent =
    /*#__PURE__*/
    function () {
      function PostCreateComponent(postsService, route, authService) {
        _classCallCheck(this, PostCreateComponent);

        this.postsService = postsService;
        this.route = route;
        this.authService = authService;
        this.enteredTitle = '';
        this.enteredContent = '';
        this.isLoading = false;
        this.mode = 'create';
      }

      _createClass(PostCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
            _this6.isLoading = false;
          });
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]
            }),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_5__["mimeType"]]
            })
          });
          this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('postId')) {
              _this6.mode = 'edit';
              _this6.postId = paramMap.get('postId');
              _this6.isLoading = true;

              _this6.postsService.getPost(_this6.postId).subscribe(function (postData) {
                _this6.isLoading = false;
                _this6.post = {
                  id: postData._id,
                  title: postData.title,
                  content: postData.content,
                  imagePath: postData.imagePath,
                  creator: postData.creator,
                  username: postData.username
                };

                _this6.form.setValue({
                  title: _this6.post.title,
                  content: _this6.post.content,
                  image: _this6.post.imagePath
                });
              });
            } else {
              _this6.mode = 'create';
              _this6.postId = null;
            }
          });
        }
      }, {
        key: "onImagePicked",
        value: function onImagePicked(event) {
          var _this7 = this;

          var file = event.target.files[0];
          this.form.patchValue({
            image: file
          });
          this.form.get('image').updateValueAndValidity();
          var reader = new FileReader();

          reader.onload = function () {
            _this7.imagePreview = reader.result;
          };

          reader.readAsDataURL(file);
        }
      }, {
        key: "onSavePost",
        value: function onSavePost() {
          if (this.form.invalid) {
            return;
          }

          this.isLoading = true;

          if (this.mode === 'create') {
            this.postsService.addPost(this.form.value.title, this.form.value.content, this.form.value.image);
          } else {
            this.postsService.updatePost(this.postId, this.form.value.title, this.form.value.content, this.form.value.image);
          }

          this.form.reset();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authStatusSub.unsubscribe();
        }
      }]);

      return PostCreateComponent;
    }();

    PostCreateComponent.ctorParameters = function () {
      return [{
        type: _posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    PostCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-post-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-create/post-create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-create.component.css */
      "./src/app/posts/post-create/post-create.component.css")).default]
    })], PostCreateComponent);
    /***/
  },

  /***/
  "./src/app/posts/post-list/post-list.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/posts/post-list/post-list.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPostsPostListPostListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  margin-top: 1rem;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\nmat-paginator {\n  margin-top: 2rem;\n}\n\n.info-text {\n  text-align: center;\n}\n\n.post-image {\n  margin-top: 1rem;\n  width: 100%;\n}\n\n.post-image img {\n  width: 20%;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n}\n\nmat-expansion-panel-header {\n  display: -webkit-box;\n  display: flex;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5tYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxubWF0LXBhZ2luYXRvciB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5pbmZvLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wb3N0LWltYWdlIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wb3N0LWltYWdlIGltZyB7XG4gIHdpZHRoOiAyMCU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/posts/post-list/post-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/posts/post-list/post-list.component.ts ***!
    \********************************************************/

  /*! exports provided: PostListComponent */

  /***/
  function srcAppPostsPostListPostListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostListComponent", function () {
      return PostListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../posts.service */
    "./src/app/posts/posts.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../auth/auth.service */
    "./src/app/auth/auth.service.ts");

    var PostListComponent =
    /*#__PURE__*/
    function () {
      function PostListComponent(postsService, authService) {
        _classCallCheck(this, PostListComponent);

        this.postsService = postsService;
        this.authService = authService; // posts = [
        //   { title: "First Post", content: "This is the first post's content" },
        //   { title: "Second Post", content: "This is the second post's content" },
        //   { title: "Third Post", content: "This is the third post's content" }
        // ];

        this.posts = [];
        this.isLoading = false;
        this.totalPosts = 0;
        this.postsPerPage = 2;
        this.currentPage = 1;
        this.pageSizeOptions = [1, 2, 5, 10];
        this.userIsAuthenticated = false;
      }

      _createClass(PostListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.isLoading = true;
          this.postsService.getPosts(this.postsPerPage, this.currentPage);
          this.userId = this.authService.getUserId();
          this.postsSub = this.postsService.getPostUpdateListener().subscribe(function (postData) {
            _this8.isLoading = false;
            _this8.totalPosts = postData.postCount;
            _this8.posts = postData.posts;
          });
          this.userIsAuthenticated = this.authService.getIsAuth();
          this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (isAuthenticated) {
            _this8.userIsAuthenticated = isAuthenticated;
            _this8.userId = _this8.authService.getUserId();
          });
        }
      }, {
        key: "onChangedPage",
        value: function onChangedPage(pageData) {
          this.isLoading = true;
          this.currentPage = pageData.pageIndex + 1;
          this.postsPerPage = pageData.pageSize;
          this.postsService.getPosts(this.postsPerPage, this.currentPage);
        }
      }, {
        key: "onDelete",
        value: function onDelete(postId) {
          var _this9 = this;

          this.isLoading = true;
          this.postsService.deletePost(postId).subscribe(function () {
            _this9.postsService.getPosts(_this9.postsPerPage, _this9.currentPage);
          }, function () {
            _this9.isLoading = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.postsSub.unsubscribe();
          this.authStatusSub.unsubscribe();
        }
      }]);

      return PostListComponent;
    }();

    PostListComponent.ctorParameters = function () {
      return [{
        type: _posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-post-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./post-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-list/post-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./post-list.component.css */
      "./src/app/posts/post-list/post-list.component.css")).default]
    })], PostListComponent);
    /***/
  },

  /***/
  "./src/app/posts/posts.module.ts":
  /*!***************************************!*\
    !*** ./src/app/posts/posts.module.ts ***!
    \***************************************/

  /*! exports provided: PostsModule */

  /***/
  function srcAppPostsPostsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsModule", function () {
      return PostsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./post-create/post-create.component */
    "./src/app/posts/post-create/post-create.component.ts");
    /* harmony import */


    var _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./post-list/post-list.component */
    "./src/app/posts/post-list/post-list.component.ts");
    /* harmony import */


    var _angular_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../angular-material.module */
    "./src/app/angular-material.module.ts");

    var PostsModule = function PostsModule() {
      _classCallCheck(this, PostsModule);
    };

    PostsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__["PostCreateComponent"], _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_6__["PostListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })], PostsModule);
    /***/
  },

  /***/
  "./src/app/posts/posts.service.ts":
  /*!****************************************!*\
    !*** ./src/app/posts/posts.service.ts ***!
    \****************************************/

  /*! exports provided: PostsService */

  /***/
  function srcAppPostsPostsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsService", function () {
      return PostsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/posts/';

    var PostsService =
    /*#__PURE__*/
    function () {
      function PostsService(http, router) {
        _classCallCheck(this, PostsService);

        this.http = http;
        this.router = router;
        this.posts = [];
        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(PostsService, [{
        key: "getPosts",
        value: function getPosts(postsPerPage, currentPage) {
          var _this10 = this;

          var queryParams = "?pagesize=".concat(postsPerPage, "&page=").concat(currentPage);
          this.http.get(BACKEND_URL + queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (postData) {
            return {
              posts: postData.posts.map(function (post) {
                return {
                  title: post.title,
                  content: post.content,
                  id: post._id,
                  imagePath: post.imagePath,
                  creator: post.creator,
                  username: post.username
                };
              }),
              maxPosts: postData.maxPosts
            };
          })).subscribe(function (transformedPostData) {
            _this10.posts = transformedPostData.posts;

            _this10.postsUpdated.next({
              posts: _toConsumableArray(_this10.posts),
              postCount: transformedPostData.maxPosts
            });
          });
        }
      }, {
        key: "getPostUpdateListener",
        value: function getPostUpdateListener() {
          return this.postsUpdated.asObservable();
        }
      }, {
        key: "getPost",
        value: function getPost(id) {
          return this.http.get(BACKEND_URL + id);
        }
      }, {
        key: "addPost",
        value: function addPost(title, content, image) {
          var _this11 = this;

          var postData = new FormData();
          postData.append('title', title);
          postData.append('content', content);
          postData.append('image', image, title);
          this.http.post(BACKEND_URL, postData).subscribe(function (responseData) {
            _this11.router.navigate(['/']);
          });
        }
      }, {
        key: "updatePost",
        value: function updatePost(id, title, content, image) {
          var _this12 = this;

          var postData;

          if (typeof image === 'object') {
            postData = new FormData();
            postData.append('id', id);
            postData.append('title', title);
            postData.append('content', content);
            postData.append('image', image, title);
          } else {
            postData = {
              id: id,
              title: title,
              content: content,
              imagePath: image,
              creator: null,
              username: null
            };
          }

          this.http.put(BACKEND_URL + id, postData).subscribe(function (response) {
            _this12.router.navigate(['/']);
          });
        }
      }, {
        key: "deletePost",
        value: function deletePost(postId) {
          return this.http.delete(BACKEND_URL + postId);
        }
      }]);

      return PostsService;
    }();

    PostsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PostsService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: "http://localhost:3000/api"
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\mean\mean-course\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map