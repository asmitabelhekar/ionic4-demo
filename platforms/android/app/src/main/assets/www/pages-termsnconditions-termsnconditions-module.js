(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-termsnconditions-termsnconditions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/termsnconditions/termsnconditions.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/termsnconditions/termsnconditions.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Terms and Conditions</ion-title>\n   \n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n \n</ion-content>");

/***/ }),

/***/ "./src/app/pages/termsnconditions/termsnconditions-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/termsnconditions/termsnconditions-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: TermsnconditionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsnconditionsPageRoutingModule", function() { return TermsnconditionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _termsnconditions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./termsnconditions.page */ "./src/app/pages/termsnconditions/termsnconditions.page.ts");




var routes = [
    {
        path: '',
        component: _termsnconditions_page__WEBPACK_IMPORTED_MODULE_3__["TermsnconditionsPage"]
    }
];
var TermsnconditionsPageRoutingModule = /** @class */ (function () {
    function TermsnconditionsPageRoutingModule() {
    }
    TermsnconditionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TermsnconditionsPageRoutingModule);
    return TermsnconditionsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/termsnconditions/termsnconditions.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/termsnconditions/termsnconditions.module.ts ***!
  \*******************************************************************/
/*! exports provided: TermsnconditionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsnconditionsPageModule", function() { return TermsnconditionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _termsnconditions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./termsnconditions-routing.module */ "./src/app/pages/termsnconditions/termsnconditions-routing.module.ts");
/* harmony import */ var _termsnconditions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./termsnconditions.page */ "./src/app/pages/termsnconditions/termsnconditions.page.ts");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");








var TermsnconditionsPageModule = /** @class */ (function () {
    function TermsnconditionsPageModule() {
    }
    TermsnconditionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _termsnconditions_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermsnconditionsPageRoutingModule"]
            ],
            providers: [_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_7__["GoogleMaps"]],
            declarations: [_termsnconditions_page__WEBPACK_IMPORTED_MODULE_6__["TermsnconditionsPage"]]
        })
    ], TermsnconditionsPageModule);
    return TermsnconditionsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/termsnconditions/termsnconditions.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/termsnconditions/termsnconditions.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".TitleHeader {\n  width: 100%;\n  padding: 0 10px 0 10px;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 1.5rem;\n  width: 70%;\n  color: black;\n  font-weight: 700;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleSider {\n  display: inline-block;\n  text-align: right;\n  font-size: 1rem;\n  font-weight: 600;\n  width: 100%;\n}\n\n.BackButton {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n}\n\n#map_canvas {\n  width: 100%;\n  height: 40vh;\n}\n\n.LocationContainer {\n  width: 100vw;\n  padding: 21px 22px 0 23px;\n  height: 41vh;\n  overflow-y: auto !important;\n}\n\n.FullWidth {\n  width: 100%;\n}\n\n.Manual {\n  color: #000000;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.15px;\n  line-height: 26px;\n  margin-top: 20px;\n  margin-bottom: 0;\n}\n\n.SubmitDivFull {\n  width: 100%;\n  height: 70px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n  z-index: 1;\n}\n\n.ButtonFillContent {\n  width: 100%;\n  padding: 25px 20px 20px 20px;\n}\n\n.ActionDiv {\n  width: 100%;\n  display: inline-block;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: right;\n}\n\n.LogoutBtn {\n  box-sizing: border-box;\n  height: 45px;\n  width: 131px;\n  border-radius: 25px;\n  background-color: #FFFFFF;\n  color: #D73C56;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  line-height: 19px;\n}\n\n.MyLocation {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  right: 19px;\n  top: 34%;\n  border-radius: 50%;\n  padding: 14px;\n  background-color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvZ3NwL3NyYy9hcHAvcGFnZXMvdGVybXNuY29uZGl0aW9ucy90ZXJtc25jb25kaXRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVybXNuY29uZGl0aW9ucy90ZXJtc25jb25kaXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0VKOztBREFBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNHSjs7QUREQTtFQUVJLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0tKOztBREZBO0VBQ0ksV0FBQTtBQ0tKOztBREZBO0VBQ0ksY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBR0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxVQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0VBQ0EsNEJBQUE7QUNLSjs7QURGQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREhBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDTUo7O0FESkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVybXNuY29uZGl0aW9ucy90ZXJtc25jb25kaXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5UaXRsZUhlYWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLlRpdGxlVGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgd2lkdGg6IDcwJTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLlRpdGxlU2lkZXJ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uQmFja0J1dHRvbntcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9CYWNrLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdXRsaW5lOiAwO1xufVxuI21hcF9jYW52YXN7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6IDQwdmg7XG59XG4uTG9jYXRpb25Db250YWluZXJ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHBhZGRpbmc6IDIxcHggMjJweCAwIDIzcHg7XG4gICAgaGVpZ2h0OiA0MXZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcbiAgICBcbn1cbi5GdWxsV2lkdGh7XG4gICAgd2lkdGg6MTAwJTtcbiAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLk1hbnVhbHtcbiAgICBjb2xvcjogIzAwMDAwMDtcdFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gICAgZm9udC1zaXplOiAyMHB4O1x0XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcdFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XHRcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG4uU3VibWl0RGl2RnVsbHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgLy8gcG9zaXRpb246IGZpeGVkO1xuICAgIC8vIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDE7XG59XG4uQnV0dG9uRmlsbENvbnRlbnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjVweCAyMHB4IDIwcHggMjBweDtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbi5BY3Rpb25EaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uTG9nb3V0QnRue1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHRcbiAgICBoZWlnaHQ6IDQ1cHg7XHRcbiAgICB3aWR0aDogMTMxcHg7XHRcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1x0XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICBjb2xvcjogI0Q3M0M1NjtcdFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1x0XG4gICAgZm9udC1zaXplOiAxNXB4O1x0XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcdFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcdFxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuLk15TG9jYXRpb257XG4gICAgd2lkdGg6NTBweDtcbiAgICBoZWlnaHQ6NTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE5cHg7XG4gICAgdG9wOiAzNCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cbiIsIi5UaXRsZUhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB3aWR0aDogNzAlO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVNpZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLkJhY2tCdXR0b24ge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG91dGxpbmU6IDA7XG59XG5cbiNtYXBfY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDB2aDtcbn1cblxuLkxvY2F0aW9uQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBwYWRkaW5nOiAyMXB4IDIycHggMCAyM3B4O1xuICBoZWlnaHQ6IDQxdmg7XG4gIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLkZ1bGxXaWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uTWFudWFsIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uU3VibWl0RGl2RnVsbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiAxO1xufVxuXG4uQnV0dG9uRmlsbENvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjVweCAyMHB4IDIwcHggMjBweDtcbn1cblxuLkFjdGlvbkRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uTG9nb3V0QnRuIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogMTMxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGNvbG9yOiAjRDczQzU2O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuXG4uTXlMb2NhdGlvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE5cHg7XG4gIHRvcDogMzQlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/termsnconditions/termsnconditions.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/termsnconditions/termsnconditions.page.ts ***!
  \*****************************************************************/
/*! exports provided: TermsnconditionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsnconditionsPage", function() { return TermsnconditionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TermsnconditionsPage = /** @class */ (function () {
    function TermsnconditionsPage() {
    }
    TermsnconditionsPage.prototype.ngOnInit = function () {
    };
    TermsnconditionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-termsnconditions',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./termsnconditions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/termsnconditions/termsnconditions.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./termsnconditions.page.scss */ "./src/app/pages/termsnconditions/termsnconditions.page.scss")).default]
        })
    ], TermsnconditionsPage);
    return TermsnconditionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-termsnconditions-termsnconditions-module.js.map