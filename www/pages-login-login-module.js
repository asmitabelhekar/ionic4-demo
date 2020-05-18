(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"MainLoginClass\">\n\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <img class=\"centerImg\" src=\"../../../assets/applogo.png\" style=\"width:200px;height:120px;margin-top:5%\" />\n      <!-- <h2>Login</h2> -->\n    </div>\n    <div class=\"LoginFormClass\">\n\n      <!-- <form name=\"entryform\" style=\"width: 100%;\" #f=\"ngForm\" novalidate> -->\n\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width:100%\">\n        <mat-form-field style=\"width:92%; margin-top:15%;margin-left:4%;color:white; margin-right:4%\"\n          appearance=\"fill\">\n          <mat-label style=\"color:black\">Phone Number</mat-label>\n          <input matInput (input)=\"valueEnter()\" type=\"tel\" id=\"mobile\" class=\"form-control\" required minlength=\"10\"\n            maxlength=\"10\" [(ngModel)]=\"loginModel.mobile\" #mobile=\"ngModel\" />\n          <mat-error>\n            <div class=\"form-group\">\n              <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\" class=\"alert alert-danger\">\n                <div class=\"LoginError\" *ngIf=\"mobile.errors.required\">\n                  Please Enter Phone Number\n                </div>\n                <div class=\"LoginError\" *ngIf=\"mobile.errors.minlength\">\n                  Phone Number must be at least 10 digits long.\n                </div>\n\n\n              </div>\n            </div>\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field style=\"width:92%;color:white\" appearance=\"fill\">\n          <mat-label style=\"color:black\">Password</mat-label>\n          <input matInput (input)=\"valueEnter()\" [type]=\"hide ? 'password' : 'text'\" id=\"password\" class=\"form-control\"\n            required [(ngModel)]=\"loginModel.password\" #password=\"ngModel\" style=\"color:black\"/>\n          <mat-icon matSuffix (click)=\"hide = !hide\" style=\"color:black\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n          <mat-error>\n            <div class=\"form-group\">\n              <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n                <div class=\"LoginError\" *ngIf=\"password.errors.required\">\n                  Please Enter Password\n                </div>\n\n\n\n              </div>\n            </div>\n          </mat-error>\n        </mat-form-field>\n        <div *ngIf=\"is_error\" class=\"LoginError\">\n          {{message}}\n        </div>\n      </div>\n\n\n\n\n\n      <div style=\"margin-top:5%\">\n        <!-- <button mat-raised-button class=\"loginButton\" (click)=\"login(loginModel)\">Login</button> -->\n        <button [disabled]=\"mobile.invalid || password.invalid\" mat-raised-button class=\"loginButton\" (click)=\"login(loginModel)\">Login</button>\n\n\n      </div>\n\n\n      <!-- </form> -->\n\n    </div>\n\n  </div>\n\n\n</div>");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");












var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".LoginFormClass {\n  width: 100%;\n}\n\n.FullWidth {\n  width: 96%;\n  margin-top: 20px;\n}\n\n.LoginError {\n  color: #FF6464;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.4px;\n  line-height: 16px;\n  text-align: right;\n}\n\n.LogoutBtn {\n  box-sizing: border-box;\n  height: 48px;\n  width: 131px;\n  border-radius: 25px;\n  background-color: linear-gradient(to right, #3672f6, #52caf9);\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  line-height: 19px;\n  margin-bottom: 25px;\n}\n\n.LoginClass {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  margin-top: 40px;\n}\n\n.centerImg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 140px;\n  color: grey;\n  height: 120px;\n  top: 25%;\n  position: relative;\n}\n\n.outerWrapper {\n  width: 100%;\n  height: 100vh;\n}\n\n.innerWrapper {\n  width: 100%;\n  height: 50vh;\n}\n\n.blueGradient {\n  width: 100%;\n  height: 100%;\n  background-color: #3672f6;\n  background-image: -webkit-gradient(linear, left top, right top, from(#3672f6), to(#52caf9));\n  background-image: linear-gradient(to right, #3672f6, #52caf9);\n}\n\n.loginCurveOverlay {\n  width: 100%;\n  height: 50vh;\n  border-radius: 15% 15% 0 0;\n  border: 2px solid #FFF;\n  background: #FFF;\n  position: absolute;\n  top: calc(50% - (15vh / 2));\n}\n\n.loginOverlay {\n  width: 80%;\n  height: auto;\n  background-color: #FFF;\n  margin: 0 auto;\n  border: 1px solid #FFF;\n  position: relative;\n  padding: 5px;\n  top: -38px;\n}\n\n.loginOverlayNew {\n  width: 80%;\n  height: auto;\n  background-color: #FFF;\n  box-shadow: 1px 1px 1px 1px #CCC;\n  margin: 0 auto;\n  height: 325px;\n  border: 1px solid #FFF;\n  border-radius: 5px;\n  top: -100px;\n  position: relative;\n  padding: 5px;\n}\n\n.logo {\n  background: url('applogo.png') center;\n  width: 150px;\n  height: 150px;\n  position: relative;\n  top: 15%;\n  margin: 0 auto;\n  border-radius: 100%;\n}\n\n.FullWidth {\n  width: 100%;\n}\n\n.MainLoginClass {\n  margin-top: 35%;\n  height: 100%;\n  width: 100%;\n}\n\n.loginButton {\n  background-color: #1686b9;\n  color: white;\n  width: 30%;\n  margin-left: 35%;\n  margin-right: 35%;\n  padding: 5px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvZ3NwL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDRTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLG1CQUFBO0VBQ0EsNkRBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURDRTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDRTtFQUVFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FES0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNGSjs7QURLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwyRkFBQTtFQUFBLDZEQUFBO0FDRko7O0FEU0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUNOSjs7QURTQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDTko7O0FEVUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDUEo7O0FEV0E7RUFDRSxxQ0FBQTtFQUVBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDVEY7O0FEY0E7RUFDRSxXQUFBO0FDWEY7O0FEY0E7RUFDQyxlQUFBO0VBRUMsWUFBQTtFQUNBLFdBQUE7QUNaRjs7QURlQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0VBQ0MsWUFBQTtFQUNGLGVBQUE7QUNaRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5Mb2dpbkZvcm1DbGFzc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBtYXJnaW46IDMwcHggMCAwIDA7XG4gIH1cbiAgLkZ1bGxXaWR0aHtcbiAgICB3aWR0aDo5NiU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICAuTG9naW5FcnJvcntcbiAgICBjb2xvcjogI0ZGNjQ2NDtcdFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gICAgZm9udC1zaXplOiAxMnB4O1x0XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcdFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcdFxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1x0XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgLkxvZ291dEJ0bntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1x0XG4gICAgaGVpZ2h0OiA0OHB4O1x0XG4gICAgd2lkdGg6IDEzMXB4O1x0XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcdFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHRcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzY3MmY2ICwgIzUyY2FmOSk7XG4gICAgY29sb3I6ICNGRkZGRkY7XHRcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcdFxuICAgIGZvbnQtc2l6ZTogMTVweDtcdFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHRcbiAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHRcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIC8vIGJveC1zaGFkb3c6IDAgNHB4IDhweCAycHggI0ZGRjNFMCwgMCAycHggMnB4IDAgI0ZGRjNFMDtcbiAgfVxuICAuTG9naW5DbGFzc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gIH1cblxuICAuY2VudGVySW1nIHtcbiAgICAvLyBib3JkZXIgOiAxcHggc29saWQgI2JkYWZhZjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDE0MHB4O1xuICAgIGNvbG9yOmdyZXk7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICB0b3A6MjUlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvLyBtYXJnaW4tdG9wOjIwJTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAzMmYwO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5vdXRlcldyYXBwZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmlubmVyV3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHZoO1xufVxuXG4uYmx1ZUdyYWRpZW50e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzNjcyZjY7IFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM2NzJmNiAsICM1MmNhZjkpOyBcbn1cblxuLnNlY29uZEhhbGYge1xuICAgIFxufVxuXG4ubG9naW5DdXJ2ZU92ZXJsYXkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTB2aDtcbiAgICBib3JkZXItcmFkaXVzOiAxNSUgMTUlIDAgMDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkZGO1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogY2FsYyg1MCUgLSAoMTV2aCAvIDIpKTtcbn1cblxuLmxvZ2luT3ZlcmxheXtcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0b3A6IC0zOHB4O1xufVxuXG5cbi5sb2dpbk92ZXJsYXlOZXd7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggI0NDQztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBoZWlnaHQ6IDMyNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRvcDogLTEwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbiBcbi5sb2dvIHtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYXBwbG9nby5wbmcnKSBjZW50ZXI7XG4gIC8vIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLkZ1bGxXaWR0aHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5NYWluTG9naW5DbGFzc3tcbiBtYXJnaW4tdG9wOjM1JTtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzBmMjQzMTtcbiAgaGVpZ2h0OjEwMCU7XG4gIHdpZHRoOjEwMCU7XG59XG5cbi5sb2dpbkJ1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAxMzQsIDE4NSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6MzAlO1xuICAgbWFyZ2luLWxlZnQ6MzUlOyBcbiAgIG1hcmdpbi1yaWdodDozNSU7XG4gICAgcGFkZGluZzo1cHg7IFxuICBmb250LXNpemU6MThweDtcbn0iLCIuTG9naW5Gb3JtQ2xhc3Mge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLkZ1bGxXaWR0aCB7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5Mb2dpbkVycm9yIHtcbiAgY29sb3I6ICNGRjY0NjQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uTG9nb3V0QnRuIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTMxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM2NzJmNiwgIzUyY2FmOSk7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uTG9naW5DbGFzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmNlbnRlckltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTQwcHg7XG4gIGNvbG9yOiBncmV5O1xuICBoZWlnaHQ6IDEyMHB4O1xuICB0b3A6IDI1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub3V0ZXJXcmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5pbm5lcldyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHZoO1xufVxuXG4uYmx1ZUdyYWRpZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM2NzJmNjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzY3MmY2LCAjNTJjYWY5KTtcbn1cblxuLmxvZ2luQ3VydmVPdmVybGF5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTUlIDE1JSAwIDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkY7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtICgxNXZoIC8gMikpO1xufVxuXG4ubG9naW5PdmVybGF5IHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG4gIHRvcDogLTM4cHg7XG59XG5cbi5sb2dpbk92ZXJsYXlOZXcge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCAjQ0NDO1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAzMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0b3A6IC0xMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5sb2dvIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2FwcGxvZ28ucG5nXCIpIGNlbnRlcjtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuLkZ1bGxXaWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uTWFpbkxvZ2luQ2xhc3Mge1xuICBtYXJnaW4tdG9wOiAzNSU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbkJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjg2Yjk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgbWFyZ2luLXJpZ2h0OiAzNSU7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-service/api-service.service */ "./src/app/services/api-service/api-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/internet-service/internet-service.service */ "./src/app/services/internet-service/internet-service.service.ts");







var LoginPage = /** @class */ (function () {
    function LoginPage(menuController, apiCall, router, networkServices, toastcontroller) {
        this.menuController = menuController;
        this.apiCall = apiCall;
        this.router = router;
        this.networkServices = networkServices;
        this.toastcontroller = toastcontroller;
        this.loginModel = {};
        this.hide = true;
        this.menuController.enable(false);
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.valueEnter = function () {
        this.is_error = 0;
    };
    LoginPage.prototype.ngOnDestroy = function () {
        this.loginModel = {};
    };
    LoginPage.prototype.login = function (data) {
        var _this = this;
        var send_date = {};
        send_date['mobile'] = this.loginModel['mobile'];
        send_date['password'] = this.loginModel['password'];
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].base_url + "users/login";
        this.apiCall.post(url, send_date).subscribe(function (MyResponse) {
            localStorage.setItem('userRole', MyResponse['result']);
            localStorage.setItem('profileId', MyResponse['result']['id']);
            _this.presentToast("Login Successfully");
            localStorage.setItem("loginStatus", "yes");
            _this.router.navigate(['/dealerslist']);
        }, function (error) {
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
            _this.presentToast("Please try again");
        });
    };
    LoginPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastcontroller.create({
                            message: msg,
                            duration: 4000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_6__["InternetServiceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_6__["InternetServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map