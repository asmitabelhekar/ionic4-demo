(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-addleads-addleads-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addleads/addleads.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addleads/addleads.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-icon name=\"arrow-back\" style=\"width:30px; height:30px; margin:10px ;color : #ffffff\" (click)=\"goBackword()\">\n        </ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-label class=\"TitleHeader TitleText\" style=\"font-size: 20px;\">\n          Add Leads\n        </ion-label>\n      </ion-col>\n\n    </ion-row>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"width:100%;background-color: #DCDCDC;height:100%\">\n\n  <div style=\"background-color: #DCDCDC;height:100%\">\n    <form #userForm=\"ngForm\" style=\"width:100%;background-color: #DCDCDC;height:100%\">\n\n\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width: 100%;\">\n\n        <ion-row style=\"width:100%;margin-top:15px;\" >\n          <ion-col size=\"12\">\n            <ion-row fxLayout=\"row\" fxLayoutAlign=\"center center\">\n              <mat-form-field style=\"width:95%;\" appearance=\"fill\" class=\"mat-input-underline\" >\n                <mat-label style=\"color:black; background-color: white;\">Full Name</mat-label>\n                <input matInput class=\"form-control \" name=\"fname\" required [(ngModel)]=\"leadModel.fname\"\n                  #fname=\"ngModel\" pattern=\"[a-zA-z   ]+$\" />\n                <mat-error>\n                  <div class=\"form-group\">\n                    <div *ngIf=\"fname.invalid && (fname.dirty || fname.touched)\">\n                      Full Name Is Requird\n                    </div>\n                  </div>\n                </mat-error>\n\n              </mat-form-field>\n            </ion-row>\n\n\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row style=\"width:100%\">\n\n          <ion-col size=\"12\">\n            <ion-row fxLayout=\"row\" fxLayoutAlign=\"center center\">\n              <mat-form-field style=\"width:95%;\" appearance=\"fill\">\n                <mat-label style=\"color:black; background-color: white;\">Mobile</mat-label>\n                <input matInput class=\"form-control \" name=\"mobile\" type=\"tel\" minlength=\"10\" maxlength=\"10\" id=\"mobile\"\n                  required [(ngModel)]=\"leadModel.mobile\" #mobile=\"ngModel\" pattern=\"[0-9]+$\" />\n\n                <mat-error>\n                  <div class=\"form-group\">\n                    <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\">\n                      Mobile Number Is Requird\n                    </div>\n\n                  </div>\n                </mat-error>\n\n              </mat-form-field>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"width:100%\">\n          <ion-col size=\"12\">\n            <ion-row fxLayout=\"row\" fxLayoutAlign=\"center center\">\n              <mat-form-field style=\"width:95%;\" appearance=\"fill\">\n                <mat-label style=\"color:black; background-color: white;\">Email</mat-label>\n                <input matInput class=\"form-control \" name=\"email\" [(ngModel)]=\"leadModel.email\" #email=\"ngModel\"\n                  pattern=\"[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" />\n                <mat-error>\n                  <div class=\"form-group\">\n                    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n                      Email Is Requird\n                    </div>\n                  </div>\n                </mat-error>\n\n              </mat-form-field>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"width:100%\">\n          <ion-col size=\"12\">\n            <ion-row fxLayout=\"row\" fxLayoutAlign=\"center center\">\n              <mat-form-field style=\"width:95%;\"  appearance=\"fill\">\n                <mat-label style=\"color:black; background-color: white;\">Address</mat-label>\n                <input matInput  [(ngModel)]=\"leadModel.location\" ngx-google-places-autocomplete\n                  [options]='options' #placesRef=\"ngx-places\" name=\"city\" (onAddressChange)=\"handleAddressChange($event)\"\n                  >\n              </mat-form-field>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n\n        <!-- <div class=\"inner-one-div\">\n          <mat-form-field style=\"width:95%;\"  appearance=\"fill\">\n            <input matInput placeholder=\"Location\" [(ngModel)]=\"leadModel.location\" ngx-google-places-autocomplete\n              [options]='options' #placesRef=\"ngx-places\" name=\"city\" (onAddressChange)=\"handleAddressChange($event)\"\n              required>\n          </mat-form-field>\n        </div> -->\n\n      </div>\n\n\n      <!-- <button mat-raised-button (click)=\"detectEventGallery($event)\">Capture image</button> -->\n\n\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <button mat-raised-button [disabled]=\"mobile.invalid || fname.invalid\" class=\"loginButton\"\n          (click)=\"addLeadsData(leadModel)\"><b>Save</b></button>\n\n      </div>\n    </form>\n  </div>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/addleads/addleads-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/addleads/addleads-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddleadsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddleadsPageRoutingModule", function() { return AddleadsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addleads_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addleads.page */ "./src/app/pages/addleads/addleads.page.ts");




var routes = [
    {
        path: '',
        component: _addleads_page__WEBPACK_IMPORTED_MODULE_3__["AddleadsPage"]
    }
];
var AddleadsPageRoutingModule = /** @class */ (function () {
    function AddleadsPageRoutingModule() {
    }
    AddleadsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddleadsPageRoutingModule);
    return AddleadsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/addleads/addleads.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/addleads/addleads.module.ts ***!
  \***************************************************/
/*! exports provided: AddleadsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddleadsPageModule", function() { return AddleadsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _addleads_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addleads-routing.module */ "./src/app/pages/addleads/addleads-routing.module.ts");
/* harmony import */ var _addleads_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addleads.page */ "./src/app/pages/addleads/addleads.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__);













var AddleadsPageModule = /** @class */ (function () {
    function AddleadsPageModule() {
    }
    AddleadsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__["GooglePlaceModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _addleads_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddleadsPageRoutingModule"]
            ],
            declarations: [_addleads_page__WEBPACK_IMPORTED_MODULE_6__["AddleadsPage"]]
        })
    ], AddleadsPageModule);
    return AddleadsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/addleads/addleads.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/addleads/addleads.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  color: black;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.registration-main {\n  margin-top: 5%;\n  width: 100%;\n  border: 1px solid red;\n}\n\nmat-card {\n  min-width: 80%;\n}\n\n.submitButton {\n  height: 48px;\n  width: 94%;\n  border-radius: 25px;\n  background-color: #2e2d2d;\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n}\n\n.cl_table_title_css {\n  font-size: 13px;\n  color: #383737;\n}\n\n.cl_table_content_css {\n  font-size: 12px;\n}\n\n.loginButton {\n  background-color: #1686b9;\n  color: white;\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  border-radius: 2px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvZ3NwL3NyYy9hcHAvcGFnZXMvYWRkbGVhZHMvYWRkbGVhZHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZGRsZWFkcy9hZGRsZWFkcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSxXQUFBO0VBRUEsWUFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDREo7O0FESUE7RUFDSSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFFQSx5QkFBQTtVQUFBLG1CQUFBO0FDRko7O0FES0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDRko7O0FESUk7RUFDQSxjQUFBO0FDREo7O0FESUk7RUFFSSxZQUFBO0VBQ0EsVUFBQTtFQUdBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FDSlI7O0FEZUU7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ1pOOztBRGVFO0VBQ0ksZUFBQTtBQ1pOOztBRGdCQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBR0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNGLGVBQUE7QUNmSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZGxlYWRzL2FkZGxlYWRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbC1iYWNrLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5cbi5UaXRsZUhlYWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4uVGl0bGVUZXh0e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgd2lkdGg6IDgxJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAvLyBmb250LXdlaWdodDogNzAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yZWdpc3RyYXRpb24tbWFpbntcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgfVxuICAgIG1hdC1jYXJke1xuICAgIG1pbi13aWR0aDogODAlO1xuICAgIH1cbiAgICBcbiAgICAuc3VibWl0QnV0dG9ue1xuICAgXG4gICAgICAgIGhlaWdodDogNDhweDtcdFxuICAgICAgICB3aWR0aDogOTQlOyBcbiAgICAgICAgLy8gIG1hcmdpbi1sZWZ0OiAxNSU7IFxuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcdFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkO1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcdFxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcdFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHRcbiAgICAgICAgLy8gcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAvLyBib3R0b206IDEwcHg7XG4gICAgICAgIC8vIHJpZ2h0OiAxMHB4O1xuICAgIH1cbiBcblxuLy8gLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuLy8gICAgIC0tYmFja2dyb3VuZDogIzQ5NDc0Nztcbi8vICAgfVxuXG4gIC5jbF90YWJsZV90aXRsZV9jc3N7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBjb2xvcjogcmdiKDU2LCA1NSwgNTUpO1xuICB9XG5cbiAgLmNsX3RhYmxlX2NvbnRlbnRfY3Nze1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cblxuLmxvZ2luQnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMTM0LCAxODUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6MnB4O1xuICAgIC8vICBtYXJnaW4tbGVmdDo0JTsgXG4gICAgLy8gIG1hcmdpbi1yaWdodDo0JTtcbiAgICAgIHBhZGRpbmctdG9wOjE1cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDsgXG4gICAgZm9udC1zaXplOjE4cHg7XG4gIH0iLCIuY2wtYmFjay1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja193aGl0ZS5wbmdcIikgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uVGl0bGVIZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLlRpdGxlVGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE5cHg7XG4gIHdpZHRoOiA4MSU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmVnaXN0cmF0aW9uLW1haW4ge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxubWF0LWNhcmQge1xuICBtaW4td2lkdGg6IDgwJTtcbn1cblxuLnN1Ym1pdEJ1dHRvbiB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDk0JTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmQyZDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5jbF90YWJsZV90aXRsZV9jc3Mge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMzgzNzM3O1xufVxuXG4uY2xfdGFibGVfY29udGVudF9jc3Mge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sb2dpbkJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjg2Yjk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/addleads/addleads.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/addleads/addleads.page.ts ***!
  \*************************************************/
/*! exports provided: AddleadsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddleadsPage", function() { return AddleadsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-service/api-service.service */ "./src/app/services/api-service/api-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/internet-service/internet-service.service */ "./src/app/services/internet-service/internet-service.service.ts");







var AddleadsPage = /** @class */ (function () {
    function AddleadsPage(router, platform, toast, networkService, changeDetectorRef, apiCall) {
        this.router = router;
        this.platform = platform;
        this.toast = toast;
        this.networkService = networkService;
        this.changeDetectorRef = changeDetectorRef;
        this.apiCall = apiCall;
        this.isActive = false;
        this.loc = {};
        this.leadModel = {};
    }
    AddleadsPage.prototype.ngOnInit = function () {
    };
    AddleadsPage.prototype.addLeadsData = function (data) {
        var _this = this;
        var send_data = {};
        send_data['name'] = this.leadModel['fname'];
        send_data['mobile'] = this.leadModel['mobile'];
        send_data['email'] = this.leadModel['email'];
        if (this.cityName == "" || this.cityName == null || this.cityName == undefined) {
        }
        else {
            send_data['city'] = this.cityName;
        }
        if (this.stateName == "" || this.stateName == null || this.stateName == undefined) {
        }
        else {
            send_data['state'] = this.stateName;
        }
        if (this.countryName == "" || this.countryName == null || this.countryName == undefined) {
        }
        else {
            send_data['country'] = this.countryName;
        }
        if (this.loc['address'] == "" || this.loc['address'] == null || this.loc['address'] == undefined) {
        }
        else {
            send_data['address'] = this.loc['address'];
        }
        if (this.pincode == "" || this.pincode == null || this.pincode == undefined) {
        }
        else {
            send_data['pincode'] = this.pincode;
        }
        if (this.lattitude == "" || this.lattitude == null || this.lattitude == undefined) {
        }
        else {
            send_data['latitude'] = this.lattitude;
        }
        if (this.longitude == "" || this.longitude == null || this.longitude == undefined) {
        }
        else {
            send_data['longitude'] = this.longitude;
        }
        // send_data['address'] = this.loc['address'];
        // send_data['pincode'] = this.pincode;
        // send_data['latitude'] = this.lattitude;
        // send_data['longitude'] = this.longitude;
        send_data['extraFields'] = {};
        console.log("Show leads data::" + JSON.stringify(data));
        var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "leads";
        this.apiCall.post(url, send_data).subscribe(function (MyResponse) {
            // alert("success:"+MyResponse);
            _this.presentToast(MyResponse['message']);
            _this.router.navigate(['/leadslist']);
            // this.leadList = MyResponse['result']['list'];
        }, function (error) {
            _this.networkService.checkInternetConnection();
            _this.networkService.onPageLoadCheckInternet();
            _this.presentToast(error['message']);
        });
    };
    AddleadsPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: message,
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
    AddleadsPage.prototype.goBackword = function () {
        this.router.navigate(['/leadslist']);
    };
    AddleadsPage.prototype.handleAddressChange = function (data) {
        console.log("Address Data", data);
        this.lattitude = data.geometry.location.lat();
        this.longitude = data.geometry.location.lng();
        this.addMarker();
        console.log("lat", this.lattitude, this.longitude);
        var string = "";
        string = data['formatted_address'];
        var arr = [];
        var str = "";
        var ss = [];
        arr = string.split(",");
        for (var index = arr.length - 1; index >= 0; index--) {
            console.log(index, "data ", arr[index]);
            this.loc['landmark'] = arr[2];
            this.loc['address'] = data.vicinity;
            this.loc['location'] = data.name;
            this.countryName = arr[arr.length - 1] != null ? arr[arr.length - 1] : "";
            str = arr[arr.length - 2] != null ? arr[arr.length - 2] : "";
            var statestr = str.split(' ');
            ss = statestr;
            this.stateName = ss[1];
            this.pincode = ss[2];
            this.cityName = arr[arr.length - 3] != null ? arr[arr.length - 3] : "";
            this.changeDetectorRef.detectChanges();
        }
        console.log(this.cityName, this.stateName, this.countryName, this.pincode, this.loc['landmark'], this.loc['location']);
    };
    AddleadsPage.prototype.addMarker = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.platform.ready().then(function (val) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var marker;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log("map", val);
                                return [4 /*yield*/, this.map.addMarker({
                                        title: 'Move pin to adjust',
                                        icon: 'red',
                                        animation: 'DROP',
                                        draggable: true,
                                        visible: true,
                                        position: {
                                            lat: this.lattitude,
                                            lng: this.longitude
                                        },
                                    })];
                            case 1:
                                marker = _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    AddleadsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_6__["InternetServiceService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AddleadsPage.prototype, "mapElement", void 0);
    AddleadsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addleads',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addleads.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addleads/addleads.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addleads.page.scss */ "./src/app/pages/addleads/addleads.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_6__["InternetServiceService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"]])
    ], AddleadsPage);
    return AddleadsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-addleads-addleads-module.js.map