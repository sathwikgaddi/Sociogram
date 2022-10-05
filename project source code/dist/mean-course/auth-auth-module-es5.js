function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'>\n<h1 id=\"name\" style=\"font-family: 'Amatic SC', cursive; color: rgb(74, 117, 209);\">LOGIN</h1>\n<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input matInput name=\"email\" ngModel type=\"email\" placeholder=\"eMail\" #emailInput=\"ngModel\" required email>\n      <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid email.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input type=\"password\" name=\"password\" ngModel matInput placeholder=\"password\" #passwordInput=\"ngModel\" required>\n      <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid password.</mat-error>\n    </mat-form-field>\n    <button mat-raised-button color=\"accent\" type=\"submit\" *ngIf=\"!isLoading\">Login</button>\n  </form>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'>\n<h1 id=\"name\" style=\"font-family: 'Amatic SC', cursive; color: rgb(74, 117, 209);\">REGISTER</h1>\n\n<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form (submit)=\"onSignup(signupForm)\" #signupForm=\"ngForm\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input matInput name=\"email\" ngModel type=\"email\" placeholder=\"eMail\" #emailInput=\"ngModel\" required email>\n      <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid email.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput name=\"username\" ngModel type=\"text\" placeholder=\"userName (everyOne see you by this name)\" #usernameInput=\"ngModel\" required >\n      <mat-error *ngIf=\"usernameInput.invalid\">Please enter a valid username.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input type=\"password\" name=\"password\" ngModel matInput placeholder=\"password\" #passwordInput=\"ngModel\" required>\n      <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid password.</mat-error>\n    </mat-form-field>\n    <button mat-raised-button color=\"accent\" type=\"submit\" *ngIf=\"!isLoading\">Register</button>\n  </form>\n</mat-card>\n";
    /***/
  },

  /***/
  "./src/app/auth/auth-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/auth-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthRoutingModule */

  /***/
  function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
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


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");

    var routes = [{
      path: "login",
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: "signup",
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    }];

    var AuthRoutingModule = function AuthRoutingModule() {
      _classCallCheck(this, AuthRoutingModule);
    };

    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");
    /* harmony import */


    var _angular_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../angular-material.module */
    "./src/app/angular-material.module.ts");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/auth/auth-routing.module.ts");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"]]
    })], AuthModule);
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.css":
  /*!************************************************!*\
    !*** ./src/app/auth/login/login.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#name {\n  text-align: center;\n  margin-top: 5%;\n}\n\nmat-card {\n  height: 50%;\n  width: 50%;\n  position: relative;\n  left: 25%;\n  margin-top: 5%;\n  background: rgb(94,169,168);\nbackground: -webkit-gradient(linear, left top, right top, color-stop(100%, rgba(94,169,168,0.45171572046787467)), color-stop(100%, rgba(88,138,100,0)), color-stop(100%, rgba(2,0,36,1)), color-stop(100%, rgba(96,178,186,0)), color-stop(100%, rgba(0,212,255,1)), to(rgba(84,116,51,1)));\nbackground: linear-gradient(90deg, rgba(94,169,168,0.45171572046787467) 100%, rgba(88,138,100,0) 100%, rgba(2,0,36,1) 100%, rgba(96,178,186,0) 100%, rgba(0,212,255,1) 100%, rgba(84,116,51,1) 100%);\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsY0FBYztFQUNkLDJCQUEyQjtBQUM3QiwyUkFBb007QUFBcE0sb01BQW9NO0FBQ3BNOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG5tYXQtY2FyZCB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI1JTtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGJhY2tncm91bmQ6IHJnYig5NCwxNjksMTY4KTtcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg5NCwxNjksMTY4LDAuNDUxNzE1NzIwNDY3ODc0NjcpIDEwMCUsIHJnYmEoODgsMTM4LDEwMCwwKSAxMDAlLCByZ2JhKDIsMCwzNiwxKSAxMDAlLCByZ2JhKDk2LDE3OCwxODYsMCkgMTAwJSwgcmdiYSgwLDIxMiwyNTUsMSkgMTAwJSwgcmdiYSg4NCwxMTYsNTEsMSkgMTAwJSk7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1zcGlubmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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
    /*! ../auth.service */
    "./src/app/auth/auth.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.isLoading = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
            _this.isLoading = false;
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin(form) {
          if (form.invalid) {
            return;
          }

          this.isLoading = true;
          this.authService.login(form.value.email, form.value.password);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authStatusSub.unsubscribe();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/auth/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/auth/signup/signup.component.css":
  /*!**************************************************!*\
    !*** ./src/app/auth/signup/signup.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#name {\n  text-align: center;\n  margin-top: 5%;\n}\n\nmat-card {\n  height: 50%;\n  width: 50%;\n  position: relative;\n  left: 25%;\n  margin-top: 5%;\n  background: rgb(94,169,168);\nbackground: -webkit-gradient(linear, left top, right top, color-stop(100%, rgba(94,169,168,0.45171572046787467)), color-stop(100%, rgba(88,138,100,0)), color-stop(100%, rgba(2,0,36,1)), color-stop(100%, rgba(96,178,186,0)), color-stop(100%, rgba(0,212,255,1)), to(rgba(84,116,51,1)));\nbackground: linear-gradient(90deg, rgba(94,169,168,0.45171572046787467) 100%, rgba(88,138,100,0) 100%, rgba(2,0,36,1) 100%, rgba(96,178,186,0) 100%, rgba(0,212,255,1) 100%, rgba(84,116,51,1) 100%);\n\n}\n\nmat-form-field {\n  width: 100%;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0VBQ2QsMkJBQTJCO0FBQzdCLDJSQUFvTTtBQUFwTSxvTUFBb007O0FBRXBNOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbm1hdC1jYXJkIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMjUlO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgYmFja2dyb3VuZDogcmdiKDk0LDE2OSwxNjgpO1xuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDk0LDE2OSwxNjgsMC40NTE3MTU3MjA0Njc4NzQ2NykgMTAwJSwgcmdiYSg4OCwxMzgsMTAwLDApIDEwMCUsIHJnYmEoMiwwLDM2LDEpIDEwMCUsIHJnYmEoOTYsMTc4LDE4NiwwKSAxMDAlLCByZ2JhKDAsMjEyLDI1NSwxKSAxMDAlLCByZ2JhKDg0LDExNiw1MSwxKSAxMDAlKTtcblxufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/auth/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/auth/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppAuthSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
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
    /*! ../auth.service */
    "./src/app/auth/auth.service.ts");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(authService) {
        _classCallCheck(this, SignupComponent);

        this.authService = authService;
        this.isLoading = false;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
            _this2.isLoading = false;
          });
        }
      }, {
        key: "onSignup",
        value: function onSignup(form) {
          if (form.invalid) {
            return;
          }

          this.isLoading = true;
          this.authService.createUser(form.value.email, form.value.password, form.value.username);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authStatusSub.unsubscribe();
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/auth/signup/signup.component.css")).default]
    })], SignupComponent);
    /***/
  }
}]);
//# sourceMappingURL=auth-auth-module-es5.js.map