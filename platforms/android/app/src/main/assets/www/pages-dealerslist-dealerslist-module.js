(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dealerslist-dealerslist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dealerslist/dealerslist.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dealerslist/dealerslist.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"font-size:20px\">Dealers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"background-color: #F1F4F9;\">\n\n \n  <div style=\"background-color:#F1F4F9;z-index: 1;position:fixed;top:45px;width:100%;padding-bottom:5px;\">\n    <div fxLayoutAlign=\"center center\" style=\"margin-top:20px\">\n      <ion-row\n        style=\"width:95%; border : 1px solid rgb(117, 115, 115); border-radius: 15px; margin-left:10px;margin-right:10px;margin-bottom:5px;background-color: white;\">\n        <ion-col size=\"1\">\n          <ion-icon name=\"search\" style=\"width:20px; height: 20px;margin-top:5px\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"11\">\n          <input type=\"text\" [(ngModel)]=\"getSearchKey\" (input)=\"OnInput(getSearchKey)\" placeholder=\"Search\"\n            style=\"width:96%;margin-right:2%;\" />\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <div class=\"cl_dealer_list_css\" *ngIf=\"showData == 1 \">\n    <div class=\"cl_div_css\"></div>\n    <ion-card *ngFor=\"let item of dealerList\" class=\"cl_card_css\">\n      <div fxLayout=\"row\" class=\"width100\">\n        <div style=\"width:30%;height:100%\">\n          <img *ngIf=\"item.image == '' || item.image == null || item.image == undefined\"\n            src=\"../../../assets/noimage.png\" class=\"width100\" />\n          <img *ngIf=\"item.image != '' \" src=\"{{item.image}}\" class=\"width100\" />\n        </div>\n        <div style=\"width:68%;margin-left:2%\">\n\n          <ion-row style=\"margin-top:10px\">\n            <ion-col size=\"1\">\n              <ion-icon name=\"person\" class=\"cl_icon_css\"> </ion-icon>\n            </ion-col>\n            <ion-col size=\"11\">\n              <label class=\"label_color \">{{item.name}}</label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"1\">\n              <ion-icon name=\"call\" class=\"cl_icon_css\"> </ion-icon>\n            </ion-col>\n            <ion-col size=\"11\">\n              <label class=\"label_color \">{{item.mobile}}</label>\n            </ion-col>\n          </ion-row>\n\n\n          <ion-row>\n            <ion-col size=\"1\">\n              <ion-icon name=\"mail\" class=\"cl_icon_css\"> </ion-icon>\n            </ion-col>\n            <ion-col size=\"11\">\n              <label class=\"label_color \">{{item.email}}</label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf=\"item.address != '' || item.address != null || item.address != undefined\">\n            <ion-col size=\"1\">\n              <ion-icon name=\"home\" class=\"cl_icon_css\"> </ion-icon>\n            </ion-col>\n            <ion-col size=\"11\">\n              <label class=\"label_color \">{{item.address}} {{item.city}} {{item.state}} {{item.country}}\n                {{item.pincode}}</label>\n            </ion-col>\n          </ion-row>\n\n        </div>\n      </div>\n     \n    </ion-card>\n  </div>\n\n  <div>\n    <button (click)=\"addDealer()\" align=\"center\" class=\"cl_submit_css\">\n      <ion-icon style=\"width:30px; height: 30px;color:white\" name=\"add\"></ion-icon>\n    </button>\n  </div>\n\n\n  <div *ngIf=\"showData == 0 \">\n    <h3>No records found.</h3>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/dealerslist/dealerslist-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dealerslist/dealerslist-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DealerslistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerslistPageRoutingModule", function() { return DealerslistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dealerslist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dealerslist.page */ "./src/app/pages/dealerslist/dealerslist.page.ts");




var routes = [
    {
        path: '',
        component: _dealerslist_page__WEBPACK_IMPORTED_MODULE_3__["DealerslistPage"]
    }
];
var DealerslistPageRoutingModule = /** @class */ (function () {
    function DealerslistPageRoutingModule() {
    }
    DealerslistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DealerslistPageRoutingModule);
    return DealerslistPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/dealerslist/dealerslist.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/dealerslist/dealerslist.module.ts ***!
  \*********************************************************/
/*! exports provided: DealerslistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerslistPageModule", function() { return DealerslistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _dealerslist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dealerslist-routing.module */ "./src/app/pages/dealerslist/dealerslist-routing.module.ts");
/* harmony import */ var _dealerslist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dealerslist.page */ "./src/app/pages/dealerslist/dealerslist.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");








var DealerslistPageModule = /** @class */ (function () {
    function DealerslistPageModule() {
    }
    DealerslistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _dealerslist_routing_module__WEBPACK_IMPORTED_MODULE_5__["DealerslistPageRoutingModule"]
            ],
            declarations: [_dealerslist_page__WEBPACK_IMPORTED_MODULE_6__["DealerslistPage"]]
        })
    ], DealerslistPageModule);
    return DealerslistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/dealerslist/dealerslist.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/dealerslist/dealerslist.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label_color {\n  color: black;\n  font-size: 15px;\n}\n\n.padding {\n  padding: 5px;\n}\n\ninput {\n  border: none;\n}\n\ninput:focus {\n  outline: none;\n}\n\n.cl_dealer_list_css {\n  background-color: #F1F4F9;\n  width: 100%;\n  height: 100%;\n  margin-top: 45px;\n  padding-bottom: 20px;\n}\n\n.cl_div_css {\n  height: 10px;\n  background-color: #F1F4F9;\n}\n\n.cl_card_css {\n  margin: 10px;\n  border-radius: 10px;\n  min-height: 120px;\n  max-height: 190px;\n  height: 100%;\n  margin-top: 15px;\n}\n\n.width100 {\n  width: 100%;\n  height: 100%;\n}\n\n.cl_icon_css {\n  color: grey;\n  margin-right: 20px;\n  margin-top: 2px;\n}\n\n.cl_submit_css {\n  position: fixed;\n  width: 60px;\n  height: 60px;\n  right: 30px;\n  bottom: 20px;\n  background-color: #1686b9;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvZ3NwL3NyYy9hcHAvcGFnZXMvZGVhbGVyc2xpc3QvZGVhbGVyc2xpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZWFsZXJzbGlzdC9kZWFsZXJzbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREdBO0VBQ0ksWUFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtBQ0FKOztBRElFO0VBQ0UsYUFBQTtBQ0RKOztBRElFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNESjs7QURJRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0RKOztBRElFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQyxpQkFBQTtFQUNBLFlBQUE7RUFDRCxnQkFBQTtBQ0RKOztBRElFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNESjs7QURJRTtFQUNFLFdBQUE7RUFDQyxrQkFBQTtFQUNBLGVBQUE7QUNETDs7QURJRTtFQUNFLGVBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQyxZQUFBO0VBQ0MseUJBQUE7RUFDSCxrQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGVhbGVyc2xpc3QvZGVhbGVyc2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsX2NvbG9ye1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgXG59XG5cbi5wYWRkaW5ne1xuICAgIHBhZGRpbmcgOiA1cHg7XG59XG5cbmlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgXG4gIFxuICBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIC5jbF9kZWFsZXJfbGlzdF9jc3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjRGOTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIG1hcmdpbi10b3A6NDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbToyMHB4O1xuICB9XG5cbiAgLmNsX2Rpdl9jc3N7XG4gICAgaGVpZ2h0OjEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojRjFGNEY5O1xuICB9XG5cbiAgLmNsX2NhcmRfY3Nze1xuICAgIG1hcmdpbjoxMHB4OyBcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgIG1heC1oZWlnaHQ6IDE5MHB4O1xuICAgICBoZWlnaHQ6MTAwJTsgXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xuICB9XG5cbiAgLndpZHRoMTAwe1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gIH1cblxuICAuY2xfaWNvbl9jc3N7XG4gICAgY29sb3I6Z3JleTtcbiAgICAgbWFyZ2luLXJpZ2h0OjIwcHg7XG4gICAgIG1hcmdpbi10b3A6MnB4O1xuICB9XG5cbiAgLmNsX3N1Ym1pdF9jc3N7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgIHdpZHRoOjYwcHg7XG4gICAgIGhlaWdodDo2MHB4O1xuICAgICByaWdodDozMHB4O1xuICAgICAgYm90dG9tOjIwcHg7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAxMzQsIDE4NSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9IiwiLmxhYmVsX2NvbG9yIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY2xfZGVhbGVyX2xpc3RfY3NzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjRGOTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNDVweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5jbF9kaXZfY3NzIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGNEY5O1xufVxuXG4uY2xfY2FyZF9jc3Mge1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICBtYXgtaGVpZ2h0OiAxOTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ud2lkdGgxMDAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2xfaWNvbl9jc3Mge1xuICBjb2xvcjogZ3JleTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5jbF9zdWJtaXRfY3NzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICByaWdodDogMzBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY4NmI5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/dealerslist/dealerslist.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/dealerslist/dealerslist.page.ts ***!
  \*******************************************************/
/*! exports provided: DealerslistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerslistPage", function() { return DealerslistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-service/api-service.service */ "./src/app/services/api-service/api-service.service.ts");
/* harmony import */ var src_app_services_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loaderservice/loader.service */ "./src/app/services/loaderservice/loader.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/internet-service/internet-service.service */ "./src/app/services/internet-service/internet-service.service.ts");








var DealerslistPage = /** @class */ (function () {
    function DealerslistPage(menuController, router, loader, networkServices, apiCall) {
        this.menuController = menuController;
        this.router = router;
        this.loader = loader;
        this.networkServices = networkServices;
        this.apiCall = apiCall;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + "roles/" + 2 + "/users";
        this.menuController.enable(true);
        this.getDealersList(this.url);
    }
    DealerslistPage.prototype.ngOnInit = function () {
        this.getDealersList(this.url);
        // this.events.subscribe('Event-AddCustomer', () => {
        //   this.getCustomerList(this.url);
        // });
    };
    DealerslistPage.prototype.ionViewWillEnter = function () {
        this.getDealersList(this.url);
    };
    DealerslistPage.prototype.OnInput = function (event) {
        this.serchKey = (event);
        if (this.serchKey.length > 3) {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + "roles/" + 2 + "/users?" + "search=" + this.serchKey;
            this.getDealersList(url);
        }
        else {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].base_url + "roles/" + 2 + "/users";
            this.getDealersList(url);
        }
    };
    DealerslistPage.prototype.getDealersList = function (url) {
        var _this = this;
        var displayName = "Dealers";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.dealerList = MyResponse['result']['list'];
            if (MyResponse['result']['count'] > 0) {
                _this.showData = 1;
                console.log("check count inside::" + MyResponse['result']['count']);
            }
            else {
                _this.router.navigate(['/nodatafound', { title: displayName }]);
                console.log("check count outside::" + MyResponse['result']['count']);
                _this.showData = 0;
            }
        }, function (error) {
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    DealerslistPage.prototype.addDealer = function () {
        this.router.navigate(['/adddealer']);
    };
    DealerslistPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] },
        { type: src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_7__["InternetServiceService"] },
        { type: src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiceService"] }
    ]; };
    DealerslistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dealerslist',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dealerslist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dealerslist/dealerslist.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dealerslist.page.scss */ "./src/app/pages/dealerslist/dealerslist.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_7__["InternetServiceService"],
            src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_4__["ApiServiceService"]])
    ], DealerslistPage);
    return DealerslistPage;
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
//# sourceMappingURL=pages-dealerslist-dealerslist-module.js.map