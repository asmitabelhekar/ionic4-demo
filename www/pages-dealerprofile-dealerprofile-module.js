(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dealerprofile-dealerprofile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dealerprofile/dealerprofile.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dealerprofile/dealerprofile.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"font-size:20px\">Profile</ion-title>\n    \n  </ion-toolbar>\n\n</ion-header>\n<ion-content>\n\n  <div style=\"height:320px;position: relative; top:0px;background-color: rgb(196, 189, 189);\" *ngIf=\"noInternet == '1' \">\n    <!-- <img src=\"../../../assets/noimage.png\" style=\"width:100%; height:100%;\" /> -->\n\n    <div style=\"height:190px;background-color: rgb(196, 189, 189); \"></div>\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-icon name=\"person\" style=\"width:40px; height:40px; border-radius: 100%;margin-left: 15px;color:white;background-color: rgb(168, 158, 158) ; padding:18px\" ></ion-icon>\n      </ion-col>\n\n      <ion-col size=\"9\" style=\"margin-top:23px; padding-left:15px; font-size: 18px\">\n        <label>{{name}}</label> \n\n      </ion-col>\n    </ion-row>\n</div>\n\n  <ion-card class=\"cl_card_css\" *ngIf=\"noInternet == '1' \">\n    <div style=\"margin-top:10px\">\n\n      <!-- <ion-row style=\"margin:20px;\">\n        <ion-col size=\"1\" >\n          <ion-icon  style=\"height:19px;width:18px; margin:4px\" name=\"person\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"11\" >\n          <ion-label class=\"cl_content_fontsize\">{{name}}</ion-label><br />\n        </ion-col>\n      \n      </ion-row> -->\n\n\n      <ion-row style=\"margin:20px\">\n        <ion-col size=\"1\">\n          <ion-icon style=\"height:19px;width:18px; margin:4px\" name=\"person\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"11\">\n          <ion-label class=\"cl_content_fontsize\">{{username}}</ion-label><br />\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin:20px\">\n        <ion-col size=\"1\">\n          <ion-icon style=\"height:19px;width:18px; margin:4px\" name=\"call\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"11\">\n          <ion-label class=\"cl_content_fontsize\">{{mobile}}</ion-label><br />\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin:20px\">\n        <ion-col size=\"1\">\n          <ion-icon style=\"height:19px;width:18px; margin:4px\" name=\"mail\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"11\">\n          <ion-label class=\"cl_content_fontsize\">{{email}}</ion-label><br />\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin:20px\">\n        <ion-col size=\"1\">\n          <ion-icon style=\"height:19px;width:18px; margin:4px\" name=\"home\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"11\">\n          <ion-label class=\"cl_content_fontsize\">{{city}}</ion-label><br />\n        </ion-col>\n      </ion-row>\n\n\n\n\n\n    </div>\n\n\n\n  </ion-card>\n\n\n\n\n\n\n\n\n\n <!-- <div style=\"background-color: rgb(223, 239, 247);height:80px;width:100%;\"></div>\n \n <div style=\"background-color: rgb(223, 239, 247);margin-top:-50px; padding-bottom:30px\">\n  <img src=\"../../../assets/userprofile.png\" class=\"centerImg\" style=\"width:100px; height:100px;\"/>\n \n  <h3 align=\"center\" class=\"cl_title_fontsize\" style=\"color: black; \">\n    {{name}}\n  </h3>\n </div> -->\n    \n\n  <!-- <ion-item style=\"margin-top:25px;margin-left:-20px;\" lines=\"none\">\n    <div style=\"margin-left:30px;\">\n      <label style=\"font-size:20px\">Contact Details</label><br /><br />\n\n      <ion-label class=\"cl_title_fontsize\">Name</ion-label>\n      <ion-label class=\"cl_content_fontsize\">{{name}}</ion-label><br />\n\n      <ion-label class=\"cl_title_fontsize\">User Name</ion-label>\n      <ion-label class=\"cl_content_fontsize\">{{username}}</ion-label><br />\n\n      <ion-label class=\"cl_title_fontsize\">Phone Number</ion-label>\n      <ion-label class=\"cl_content_fontsize\">{{mobile}}</ion-label><br />\n\n      <ion-label class=\"cl_title_fontsize\">Email Id</ion-label>\n      <ion-label class=\"cl_content_fontsize\">{{email}}</ion-label><br />\n\n      <ion-label class=\"cl_title_fontsize\">City</ion-label>\n      <ion-label class=\"cl_content_fontsize\">{{city}}</ion-label><br />\n\n     \n    </div>\n  </ion-item> -->\n\n\n  <div style=\"margin-top:5%\" *ngIf=\"noInternet == '1' \">\n \n    <button mat-raised-button class=\"loginButton\" (click)=\"logOut()\">Log Out</button>\n\n    \n</div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/dealerprofile/dealerprofile-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/dealerprofile/dealerprofile-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DealerprofilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerprofilePageRoutingModule", function() { return DealerprofilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dealerprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dealerprofile.page */ "./src/app/pages/dealerprofile/dealerprofile.page.ts");




var routes = [
    {
        path: '',
        component: _dealerprofile_page__WEBPACK_IMPORTED_MODULE_3__["DealerprofilePage"]
    }
];
var DealerprofilePageRoutingModule = /** @class */ (function () {
    function DealerprofilePageRoutingModule() {
    }
    DealerprofilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DealerprofilePageRoutingModule);
    return DealerprofilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/dealerprofile/dealerprofile.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/dealerprofile/dealerprofile.module.ts ***!
  \*************************************************************/
/*! exports provided: DealerprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerprofilePageModule", function() { return DealerprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _dealerprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dealerprofile-routing.module */ "./src/app/pages/dealerprofile/dealerprofile-routing.module.ts");
/* harmony import */ var _dealerprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dealerprofile.page */ "./src/app/pages/dealerprofile/dealerprofile.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");








var DealerprofilePageModule = /** @class */ (function () {
    function DealerprofilePageModule() {
    }
    DealerprofilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _dealerprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["DealerprofilePageRoutingModule"]
            ],
            declarations: [_dealerprofile_page__WEBPACK_IMPORTED_MODULE_6__["DealerprofilePage"]]
        })
    ], DealerprofilePageModule);
    return DealerprofilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/dealerprofile/dealerprofile.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/dealerprofile/dealerprofile.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centerImg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  color: grey;\n  background-color: white;\n  border-radius: 50%;\n}\n\n.BackButton {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  height: 30px;\n  outline: 0;\n  color: white;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.cl_title_fontsize {\n  font-size: 16px;\n  padding: 3px;\n  color: #a09999;\n}\n\n.cl_content_fontsize {\n  font-size: 14px;\n  color: black;\n  padding: 3px;\n}\n\n.loginButton {\n  background-color: #1686b9;\n  color: white;\n  width: 25%;\n  margin-left: 35%;\n  margin-right: 35%;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  font-size: 18px;\n}\n\n.cl_card_css {\n  width: 100%;\n  box-shadow: none !important;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  padding-bottom: 20px;\n  margin: 0px;\n  margin-top: -30px;\n}\n\n.cl_content_fontsize {\n  font-size: 18px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvZ3NwL3NyYy9hcHAvcGFnZXMvZGVhbGVycHJvZmlsZS9kZWFsZXJwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGVhbGVycHJvZmlsZS9kZWFsZXJwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUVBLHVCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLRTtFQUNFLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLQTtFQUNJLFdBQUE7RUFFQSxZQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNISjs7QURNQTtFQUNJLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO1VBQUEsbUJBQUE7QUNKSjs7QURPQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0pBOztBRE9BO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDSkE7O0FEaUJFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNDLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQyxpQkFBQTtFQUNBLG9CQUFBO0VBQ0YsZUFBQTtBQ2RKOztBRG1CQTtFQUNFLFdBQUE7RUFHQSwyQkFBQTtFQUVBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ25CRjs7QURzQkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ25CRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlYWxlcnByb2ZpbGUvZGVhbGVycHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVySW1nIHtcbiAgICAvLyBib3JkZXIgOiAxcHggc29saWQgIzAwMDAwMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgLy8gd2lkdGg6IDcwcHg7XG4gICAgY29sb3I6Z3JleTtcbiAgICAvLyBoZWlnaHQ6IDcwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLkJhY2tCdXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmcnKSBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5UaXRsZUhlYWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4uVGl0bGVUZXh0e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgd2lkdGg6IDgxJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAvLyBmb250LXdlaWdodDogNzAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbF90aXRsZV9mb250c2l6ZXtcbmZvbnQtc2l6ZTogMTZweDtcbnBhZGRpbmc6M3B4O1xuY29sb3I6IHJnYigxNjAsIDE1MywgMTUzKTtcbn1cblxuLmNsX2NvbnRlbnRfZm9udHNpemV7XG5mb250LXNpemU6MTRweDtcbmNvbG9yOiBibGFjaztcbnBhZGRpbmc6M3B4O1xufVxuXG5cblxuLy8gLm9kZHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMDgxMzI7XG4vLyAgIH1cbi8vICAgLmV2ZW57XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgNTYsIDE4Myk7XG4vLyAgIH1cblxuXG4gIC5sb2dpbkJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDEzNCwgMTg1KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6MjUlO1xuICAgICBtYXJnaW4tbGVmdDozNSU7IFxuICAgICBtYXJnaW4tcmlnaHQ6MzUlO1xuICAgICAgcGFkZGluZy10b3A6MTJweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOjEycHg7IFxuICAgIGZvbnQtc2l6ZToxOHB4O1xuICBcbn1cblxuXG4uY2xfY2FyZF9jc3N7XG4gIHdpZHRoOjEwMCU7XG4gIC8vIGhlaWdodDo4MCU7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbToyMHB4O1xuICBtYXJnaW46MHB4O1xuICBtYXJnaW4tdG9wOi0zMHB4O1xufVxuXG4uY2xfY29udGVudF9mb250c2l6ZXtcbiAgZm9udC1zaXplOjE4cHg7XG4gIGNvbG9yOmJsYWNrO1xuXG59IiwiLmNlbnRlckltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBjb2xvcjogZ3JleTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLkJhY2tCdXR0b24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmdcIikgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG91dGxpbmU6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uVGl0bGVIZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLlRpdGxlVGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE5cHg7XG4gIHdpZHRoOiA4MSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2xfdGl0bGVfZm9udHNpemUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgY29sb3I6ICNhMDk5OTk7XG59XG5cbi5jbF9jb250ZW50X2ZvbnRzaXplIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLmxvZ2luQnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2ODZiOTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW4tbGVmdDogMzUlO1xuICBtYXJnaW4tcmlnaHQ6IDM1JTtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jbF9jYXJkX2NzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4uY2xfY29udGVudF9mb250c2l6ZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/dealerprofile/dealerprofile.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/dealerprofile/dealerprofile.page.ts ***!
  \***********************************************************/
/*! exports provided: DealerprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerprofilePage", function() { return DealerprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-service/api-service.service */ "./src/app/services/api-service/api-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/internet-service/internet-service.service */ "./src/app/services/internet-service/internet-service.service.ts");






var DealerprofilePage = /** @class */ (function () {
    function DealerprofilePage(apiCall, networkService, router) {
        this.apiCall = apiCall;
        this.networkService = networkService;
        this.router = router;
        // url = "http://www.mocky.io/v2/5e7b73fc2d00005c6311a122";
        this.noInternet = 1;
    }
    DealerprofilePage.prototype.ngOnInit = function () {
        this.getProfileDetails();
        this.noInternet = 1;
    };
    DealerprofilePage.prototype.ionViewWillEnter = function () {
        this.noInternet = 1;
    };
    DealerprofilePage.prototype.goBack = function () {
        this.router.navigate(['/dealerslist']);
    };
    DealerprofilePage.prototype.getProfileDetails = function () {
        var _this = this;
        var profileId = localStorage.getItem('profileId');
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + "roles/" + 1 + "/users/" + profileId;
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.noInternet = 1;
            _this.profileDetail = MyResponse['result'];
            _this.name = _this.profileDetail.name;
            _this.mobile = _this.profileDetail.mobile;
            _this.email = _this.profileDetail.email;
            _this.city = _this.profileDetail.city;
            _this.username = _this.profileDetail.username;
            _this.showImage = _this.profileDetail.image;
            _this.firstLetter = _this.name.charAt(0);
        }, function (error) {
            _this.networkService.checkInternetConnection();
            _this.networkService.onPageLoadCheckInternet();
            _this.noInternet = 0;
        });
    };
    DealerprofilePage.prototype.logOut = function () {
        localStorage.setItem("loginStatus", "no");
        this.router.navigate(['/login']);
    };
    DealerprofilePage.ctorParameters = function () { return [
        { type: src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"] },
        { type: src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_5__["InternetServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    DealerprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dealerprofile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dealerprofile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dealerprofile/dealerprofile.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dealerprofile.page.scss */ "./src/app/pages/dealerprofile/dealerprofile.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"],
            src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_5__["InternetServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DealerprofilePage);
    return DealerprofilePage;
}());



/***/ }),

/***/ "./src/app/services/internet-service/internet-service.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/services/internet-service/internet-service.service.ts ***!
  \***********************************************************************/
/*! exports provided: InternetServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternetServiceService", function() { return InternetServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var InternetServiceService = /** @class */ (function () {
    function InternetServiceService(network, router, toastController, platform, http) {
        this.network = network;
        this.router = router;
        this.toastController = toastController;
        this.platform = platform;
        this.http = http;
        console.log('Hello NetworkConnectivityProvider');
        this.NetworkStatus = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false); // Assume Network is offline
        this.CheckNetworkStatus();
        this.CreateNetworkObserverSubscriptions();
    }
    InternetServiceService.prototype.checkInternetConnection = function () {
        var _this = this;
        this.network.onDisconnect().subscribe(function () {
            // this.presentToast()
            _this.navigateInternetPage();
            // this.dialogs.alert('You are not connected to the internet');
        });
        this.network.onConnect().subscribe(function () {
            // this.presentSuccessToast()
            // this.dialogs.alert('You are connected to the internet');
            setTimeout(function () {
            }, 2000);
        });
    };
    InternetServiceService.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'You are not connected to the internet',
                            duration: 2000,
                            cssClass: 'my-custom-fail-class',
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    InternetServiceService.prototype.presentSuccessToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: "You are connected to the internet",
                            cssClass: "my-custom-success-class",
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    InternetServiceService.prototype.CheckNetworkStatus = function () {
        if (this.platform.is('cordova')) {
            if (this.network.type === undefined || this.network.type === null || this.network.type === 'unknown') {
                this.UpdateNetworkStatus(false);
            }
            else {
                this.UpdateNetworkStatus(true);
            }
        }
        else {
            this.UpdateNetworkStatus(navigator.onLine);
        }
        return this.network.type;
    };
    InternetServiceService.prototype.onPageLoadCheckInternet = function () {
        this.checkStatus = this.CheckNetworkStatus();
        if (this.checkStatus == "none" || this.checkStatus == "" || this.checkStatus == undefined || this.checkStatus == null) {
            // this.presentToast();
            this.navigateInternetPage();
        }
        else {
            // this.presentSuccessToast()
        }
        return this.checkStatus;
    };
    InternetServiceService.prototype.CreateNetworkObserverSubscriptions = function () {
        var _this = this;
        this.WatchConnect = this.network.onConnect().subscribe(function (data) { _this.UpdateNetworkStatus(true); }, function (error) { console.log(error); });
        this.WatchDisconnect = this.network.onDisconnect().subscribe(function (data) { _this.UpdateNetworkStatus(false); }, function (error) { console.log(error); });
    };
    InternetServiceService.prototype.UpdateNetworkStatus = function (IsOnline) {
        console.log('Network ', (IsOnline == true ? 'Online' : 'Offline'));
        this.NetworkStatus.next(IsOnline);
        return IsOnline;
    };
    InternetServiceService.prototype.navigateInternetPage = function () {
        this.router.navigate(['/checkinternetconnection']);
    };
    InternetServiceService.ctorParameters = function () { return [
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    InternetServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], InternetServiceService);
    return InternetServiceService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dealerprofile-dealerprofile-module.js.map