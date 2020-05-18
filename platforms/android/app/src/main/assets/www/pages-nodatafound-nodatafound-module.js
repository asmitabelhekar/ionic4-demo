(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-nodatafound-nodatafound-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nodatafound/nodatafound.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nodatafound/nodatafound.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"1\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"11\" class=\"TitleHeader TitleText\">\n        <ion-title style=\"font-size:20px; margin-left:5px\">{{title}}</ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"background-color:#f1f4f9; width:100%; height:100% ;\">\n\n    <img src=\"../../../assets/datanotfound.png\" style=\"width:40%; height:300px; margin-left:30%; margin-right: 30%; margin-top:20%\"/>\n    <h1 align=\"center\">No data available</h1>\n    <label style=\"margin-left:5%; margin-right:5%; color: gray\">There is no data to show you right now.</label>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/nodatafound/nodatafound-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/nodatafound/nodatafound-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: NodatafoundPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodatafoundPageRoutingModule", function() { return NodatafoundPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nodatafound_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nodatafound.page */ "./src/app/pages/nodatafound/nodatafound.page.ts");




var routes = [
    {
        path: '',
        component: _nodatafound_page__WEBPACK_IMPORTED_MODULE_3__["NodatafoundPage"]
    }
];
var NodatafoundPageRoutingModule = /** @class */ (function () {
    function NodatafoundPageRoutingModule() {
    }
    NodatafoundPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NodatafoundPageRoutingModule);
    return NodatafoundPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/nodatafound/nodatafound.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/nodatafound/nodatafound.module.ts ***!
  \*********************************************************/
/*! exports provided: NodatafoundPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodatafoundPageModule", function() { return NodatafoundPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _nodatafound_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nodatafound-routing.module */ "./src/app/pages/nodatafound/nodatafound-routing.module.ts");
/* harmony import */ var _nodatafound_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nodatafound.page */ "./src/app/pages/nodatafound/nodatafound.page.ts");







var NodatafoundPageModule = /** @class */ (function () {
    function NodatafoundPageModule() {
    }
    NodatafoundPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _nodatafound_routing_module__WEBPACK_IMPORTED_MODULE_5__["NodatafoundPageRoutingModule"]
            ],
            declarations: [_nodatafound_page__WEBPACK_IMPORTED_MODULE_6__["NodatafoundPage"]]
        })
    ], NodatafoundPageModule);
    return NodatafoundPageModule;
}());



/***/ }),

/***/ "./src/app/pages/nodatafound/nodatafound.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/nodatafound/nodatafound.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  color: black;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvZ3NwL3NyYy9hcHAvcGFnZXMvbm9kYXRhZm91bmQvbm9kYXRhZm91bmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ub2RhdGFmb3VuZC9ub2RhdGFmb3VuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FES0E7RUFDSSxXQUFBO0VBRUEsWUFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSEo7O0FETUE7RUFDSSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFFQSx5QkFBQTtVQUFBLG1CQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ub2RhdGFmb3VuZC9ub2RhdGFmb3VuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jbC1iYWNrLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5cblxuLlRpdGxlSGVhZGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cbi5UaXRsZVRleHR7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB3aWR0aDogODElO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC8vIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iLCIuY2wtYmFjay1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmdcIikgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uVGl0bGVIZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLlRpdGxlVGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE5cHg7XG4gIHdpZHRoOiA4MSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/nodatafound/nodatafound.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/nodatafound/nodatafound.page.ts ***!
  \*******************************************************/
/*! exports provided: NodatafoundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodatafoundPage", function() { return NodatafoundPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NodatafoundPage = /** @class */ (function () {
    function NodatafoundPage(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    NodatafoundPage.prototype.ngOnInit = function () {
        this.title = this.activatedRoute.snapshot.params['title'];
    };
    NodatafoundPage.prototype.goBackword = function () {
        window.history.back();
    };
    NodatafoundPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    NodatafoundPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nodatafound',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nodatafound.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nodatafound/nodatafound.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nodatafound.page.scss */ "./src/app/pages/nodatafound/nodatafound.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NodatafoundPage);
    return NodatafoundPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-nodatafound-nodatafound-module.js.map