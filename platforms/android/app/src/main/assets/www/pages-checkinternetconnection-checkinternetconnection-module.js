(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkinternetconnection-checkinternetconnection-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkinternetconnection/checkinternetconnection.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkinternetconnection/checkinternetconnection.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-row>\n      <ion-col size=\"1\">\n        <button ion-button class=\"cl-back-button\" (click)=\"goBackword()\" style=\"color:white;margin:7px\"></button>\n      </ion-col>\n      <ion-col size=\"11\" class=\"TitleHeader TitleText\">\n        <ion-title style=\"font-size:20px; margin-left:5px\">Internet Connection</ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<img src=\"../../../assets/cloud.png\"  class=\"cl_no_connection\"/>\n<h1 align=\"center\">Ooops!</h1>\n<label style=\"margin-left:20%; margin-right:20%;\">No internet connection</label><br />\n<label style=\"margin-left:10%; margin-right:10%;\">Please check your internet setting.</label><br /><br />\n<button mat-raised-button class=\"loginButton\" (click)=\"checkConnection()\">Try Again</button>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/checkinternetconnection/checkinternetconnection-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/checkinternetconnection/checkinternetconnection-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: CheckinternetconnectionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinternetconnectionPageRoutingModule", function() { return CheckinternetconnectionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _checkinternetconnection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkinternetconnection.page */ "./src/app/pages/checkinternetconnection/checkinternetconnection.page.ts");




var routes = [
    {
        path: '',
        component: _checkinternetconnection_page__WEBPACK_IMPORTED_MODULE_3__["CheckinternetconnectionPage"]
    }
];
var CheckinternetconnectionPageRoutingModule = /** @class */ (function () {
    function CheckinternetconnectionPageRoutingModule() {
    }
    CheckinternetconnectionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CheckinternetconnectionPageRoutingModule);
    return CheckinternetconnectionPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/checkinternetconnection/checkinternetconnection.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/checkinternetconnection/checkinternetconnection.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CheckinternetconnectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinternetconnectionPageModule", function() { return CheckinternetconnectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _checkinternetconnection_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkinternetconnection-routing.module */ "./src/app/pages/checkinternetconnection/checkinternetconnection-routing.module.ts");
/* harmony import */ var _checkinternetconnection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkinternetconnection.page */ "./src/app/pages/checkinternetconnection/checkinternetconnection.page.ts");







var CheckinternetconnectionPageModule = /** @class */ (function () {
    function CheckinternetconnectionPageModule() {
    }
    CheckinternetconnectionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _checkinternetconnection_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckinternetconnectionPageRoutingModule"]
            ],
            declarations: [_checkinternetconnection_page__WEBPACK_IMPORTED_MODULE_6__["CheckinternetconnectionPage"]]
        })
    ], CheckinternetconnectionPageModule);
    return CheckinternetconnectionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/checkinternetconnection/checkinternetconnection.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/checkinternetconnection/checkinternetconnection.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  color: black;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.loginButton {\n  background-color: #1686b9;\n  color: white;\n  margin-left: 35%;\n  margin-right: 35%;\n  padding: 10px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 18px;\n}\n\n.cl_no_connection {\n  width: 30%;\n  height: 120px;\n  margin-left: 35%;\n  margin-right: 35%;\n  margin-top: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvZ3NwL3NyYy9hcHAvcGFnZXMvY2hlY2tpbnRlcm5ldGNvbm5lY3Rpb24vY2hlY2tpbnRlcm5ldGNvbm5lY3Rpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGVja2ludGVybmV0Y29ubmVjdGlvbi9jaGVja2ludGVybmV0Y29ubmVjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBRUEsWUFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDREo7O0FESUE7RUFDSSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFFQSx5QkFBQTtVQUFBLG1CQUFBO0FDRko7O0FES0E7RUFDSSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRko7O0FET0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFFQyxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNDLGlCQUFBO0VBQ0Esb0JBQUE7RUFDRixlQUFBO0FDTEo7O0FEVUU7RUFDRSxVQUFBO0VBQ0MsYUFBQTtFQUNBLGdCQUFBO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0FDUE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGVja2ludGVybmV0Y29ubmVjdGlvbi9jaGVja2ludGVybmV0Y29ubmVjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5UaXRsZUhlYWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4uVGl0bGVUZXh0e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgd2lkdGg6IDgxJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAvLyBmb250LXdlaWdodDogNzAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbC1iYWNrLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5cblxuLmxvZ2luQnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMTM0LCAxODUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyB3aWR0aDozMCU7XG4gICAgIG1hcmdpbi1sZWZ0OjM1JTsgXG4gICAgIG1hcmdpbi1yaWdodDozNSU7XG4gICAgIHBhZGRpbmc6MTBweDtcbiAgICAgIHBhZGRpbmctdG9wOjEwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDsgXG4gICAgZm9udC1zaXplOjE4cHg7XG4gIH1cbiAgXG5cbiAgXG4gIC5jbF9ub19jb25uZWN0aW9ue1xuICAgIHdpZHRoOjMwJTtcbiAgICAgaGVpZ2h0OjEyMHB4OyBcbiAgICAgbWFyZ2luLWxlZnQ6MzUlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzNSUgO1xuICAgICAgbWFyZ2luLXRvcDozMCU7XG4gIH1cbiAgIiwiLlRpdGxlSGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5UaXRsZVRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICB3aWR0aDogODElO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNsLWJhY2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2JhY2tfd2hpdGUucG5nXCIpIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMzBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmxvZ2luQnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2ODZiOTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMzUlO1xuICBtYXJnaW4tcmlnaHQ6IDM1JTtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jbF9ub19jb25uZWN0aW9uIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgbWFyZ2luLXJpZ2h0OiAzNSU7XG4gIG1hcmdpbi10b3A6IDMwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/checkinternetconnection/checkinternetconnection.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/checkinternetconnection/checkinternetconnection.page.ts ***!
  \*******************************************************************************/
/*! exports provided: CheckinternetconnectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinternetconnectionPage", function() { return CheckinternetconnectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/internet-service/internet-service.service */ "./src/app/services/internet-service/internet-service.service.ts");
/* harmony import */ var src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-service/api-service.service */ "./src/app/services/api-service/api-service.service.ts");
/* harmony import */ var src_app_services_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loaderservice/loader.service */ "./src/app/services/loaderservice/loader.service.ts");





var CheckinternetconnectionPage = /** @class */ (function () {
    function CheckinternetconnectionPage(loader, networkService, apiCall) {
        this.loader = loader;
        this.networkService = networkService;
        this.apiCall = apiCall;
        this.url = "http://3.6.135.154:37354/api/test";
    }
    CheckinternetconnectionPage.prototype.ngOnInit = function () {
    };
    CheckinternetconnectionPage.prototype.checkConnection = function () {
        var _this = this;
        this.loader.presentLoading();
        // let url = environment.base_url + "roles/" + 1 + "/users/" + 12 ;
        this.apiCall.get(this.url).subscribe(function (MyResponse) {
            console.log("check success:");
            window.history.back();
            _this.loader.stopLoading();
        }, function (error) {
            console.log("check failure:");
            _this.networkService.checkInternetConnection();
            _this.networkService.onPageLoadCheckInternet();
            _this.loader.stopLoading();
        });
    };
    CheckinternetconnectionPage.prototype.goBackword = function () {
        window.history.back();
    };
    CheckinternetconnectionPage.ctorParameters = function () { return [
        { type: src_app_services_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
        { type: src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_2__["InternetServiceService"] },
        { type: src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"] }
    ]; };
    CheckinternetconnectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkinternetconnection',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkinternetconnection.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkinternetconnection/checkinternetconnection.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkinternetconnection.page.scss */ "./src/app/pages/checkinternetconnection/checkinternetconnection.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_2__["InternetServiceService"],
            src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"]])
    ], CheckinternetconnectionPage);
    return CheckinternetconnectionPage;
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
//# sourceMappingURL=pages-checkinternetconnection-checkinternetconnection-module.js.map