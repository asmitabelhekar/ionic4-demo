(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-leadslist-leadslist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leadslist/leadslist.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leadslist/leadslist.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  class=\"new-background-color\">\n  <ion-toolbar  class=\"new-background-color\">\n    <ion-buttons slot=\"start\" style=\"color:white\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"font-size:20px\">Leads</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"background-color: #F1F4F9;\">\n  <div style=\"background-color:#F1F4F9;z-index: 1;position:fixed;top:45px;width:100%;padding-bottom:10px;\"> \n    <div fxLayoutAlign=\"center center\" style=\"margin-top:20px\">\n      <ion-row style=\"width:95%; border : 1px solid rgb(117, 115, 115); border-radius: 15px; margin-left:10px;margin-right:10px;margin-bottom:5px;background-color: white;\">\n        <ion-col size=\"1\">\n          <ion-icon name=\"search\" style=\"width:20px; height: 20px;margin-top:5px\"></ion-icon>  \n          </ion-col>\n        <ion-col size=\"11\" >\n          <input type=\"text\" [(ngModel)]=\"getSearchKey\" (input)=\"OnInput(getSearchKey)\" placeholder=\"Search\" style=\"width:96%;margin-right:2%;\"/>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  \n<div style=\"background-color: #F1F4F9;margin-top:65px;padding-bottom:20px;\" *ngIf=\"showData == 1 \">\n\n  <ion-card style=\"border-radius: 10px; margin:10px\" *ngFor=\"let item of leadList\">\n    <ion-card-content>\n    \n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon name=\"person\" style=\"color:grey; margin-left:10px; margin-top:2px\"> </ion-icon>\n        </ion-col>\n        <ion-col size=\"11\">\n          <label class=\"label_color \">{{item.name}}</label>\n        </ion-col>\n      </ion-row>\n    \n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon name=\"mail\" style=\"color:grey; margin-left:10px; margin-top:2px\"> </ion-icon>\n        </ion-col>\n        <ion-col size=\"11\">\n          <label class=\"label_color \">{{item.email}}</label>\n        </ion-col>\n      </ion-row>\n    \n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon name=\"call\" style=\"color:grey; margin-left:10px; margin-top:2px\"> </ion-icon>\n        </ion-col>\n        <ion-col size=\"11\">\n          <label class=\"label_color \">{{item.mobile}}</label>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n    \n    \n        <!-- <ion-card-content>\n         \n            \n          <label class=\"label_color \"><ion-icon name=\"person\" style=\"color:grey; margin-top: 15px\"> </ion-icon>{{item.name}}</label><br />\n          <label class=\"label_color \"><ion-icon name=\"mail\" style=\"color:grey; margin-top: 5px\"> </ion-icon>  {{item.email}}</label><br />\n          <label class=\"label_color \"><ion-icon name=\"call\" style=\"color:grey; margin-top: 5px\"> </ion-icon>  {{item.mobile}}</label><br />\n        </ion-card-content> -->\n      </ion-card>\n   \n</div>\n  \n<div>\n  <button (click)=\"addLeads()\" align=\"center\" style=\"position:fixed; width:60px;height:60px;right:30px; bottom:20px; background-color: rgb(22, 134, 185);border-radius: 50%;\"><ion-icon style=\"width:30px; height: 30px;color:white\" name=\"add\"></ion-icon></button>\n</div>\n<div *ngIf=\"showData == 0 \">\n  <h3>No records found.</h3>\n</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/leadslist/leadslist-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/leadslist/leadslist-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LeadslistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadslistPageRoutingModule", function() { return LeadslistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _leadslist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leadslist.page */ "./src/app/pages/leadslist/leadslist.page.ts");




var routes = [
    {
        path: '',
        component: _leadslist_page__WEBPACK_IMPORTED_MODULE_3__["LeadslistPage"]
    }
];
var LeadslistPageRoutingModule = /** @class */ (function () {
    function LeadslistPageRoutingModule() {
    }
    LeadslistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LeadslistPageRoutingModule);
    return LeadslistPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/leadslist/leadslist.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/leadslist/leadslist.module.ts ***!
  \*****************************************************/
/*! exports provided: LeadslistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadslistPageModule", function() { return LeadslistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _leadslist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leadslist-routing.module */ "./src/app/pages/leadslist/leadslist-routing.module.ts");
/* harmony import */ var _leadslist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leadslist.page */ "./src/app/pages/leadslist/leadslist.page.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");








var LeadslistPageModule = /** @class */ (function () {
    function LeadslistPageModule() {
    }
    LeadslistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _leadslist_routing_module__WEBPACK_IMPORTED_MODULE_5__["LeadslistPageRoutingModule"]
            ],
            declarations: [_leadslist_page__WEBPACK_IMPORTED_MODULE_6__["LeadslistPage"]]
        })
    ], LeadslistPageModule);
    return LeadslistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/leadslist/leadslist.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/leadslist/leadslist.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label_color {\n  color: black;\n  font-size: 15px;\n}\n\n.padding {\n  margin: 5px;\n}\n\ninput {\n  border: none;\n}\n\ninput:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvZ3NwL3NyYy9hcHAvcGFnZXMvbGVhZHNsaXN0L2xlYWRzbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xlYWRzbGlzdC9sZWFkc2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNDSjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURJRTtFQUNFLGFBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYWRzbGlzdC9sZWFkc2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsX2NvbG9ye1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGZvbnQtc2l6ZToxNXB4O1xuICAgXG59XG5cbi5wYWRkaW5ne1xuICAgIG1hcmdpbiA6IDVweDtcbn1cblxuaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBcbiAgXG4gIGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9IiwiLmxhYmVsX2NvbG9yIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5wYWRkaW5nIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/leadslist/leadslist.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/leadslist/leadslist.page.ts ***!
  \***************************************************/
/*! exports provided: LeadslistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadslistPage", function() { return LeadslistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-service/api-service.service */ "./src/app/services/api-service/api-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/loaderservice/loader.service */ "./src/app/services/loaderservice/loader.service.ts");
/* harmony import */ var src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/internet-service/internet-service.service */ "./src/app/services/internet-service/internet-service.service.ts");








var LeadslistPage = /** @class */ (function () {
    function LeadslistPage(menuController, apiCall, loader, networkServices, router) {
        this.menuController = menuController;
        this.apiCall = apiCall;
        this.loader = loader;
        this.networkServices = networkServices;
        this.router = router;
        this.leadsList = [];
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "leads";
        this.menuController.enable(true);
        this.getLeadsList(this.url);
    }
    LeadslistPage.prototype.ngOnInit = function () {
        this.getLeadsList(this.url);
    };
    LeadslistPage.prototype.ionViewWillEnter = function () {
        this.getLeadsList(this.url);
    };
    LeadslistPage.prototype.getLeadsList = function (url) {
        var _this = this;
        // this.loader.presentLoading();
        var displayName = "Leads";
        this.apiCall.get(url).subscribe(function (MyResponse) {
            _this.leadList = MyResponse['result']['list'];
            if (MyResponse['result']['count'] > 0) {
                _this.showData = 1;
                console.log("check count inside::" + MyResponse['result']['count']);
            }
            else {
                _this.router.navigate(['/nodatafound', { title: displayName }]);
                console.log("check count outside::" + MyResponse['result']['count']);
                _this.showData = 0;
            }
            // this.loader.stopLoading();
        }, function (error) {
            _this.networkServices.checkInternetConnection();
            _this.networkServices.onPageLoadCheckInternet();
        });
    };
    LeadslistPage.prototype.addLeads = function () {
        this.router.navigate(['/addleads']);
    };
    LeadslistPage.prototype.OnInput = function (event) {
        this.serchKey = (event);
        if (this.serchKey.length > 3) {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "leads?" + "search=" + this.serchKey;
            this.getLeadsList(url);
        }
        else {
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].base_url + "leads";
            this.getLeadsList(url);
        }
    };
    LeadslistPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"] },
        { type: src_app_services_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"] },
        { type: src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_7__["InternetServiceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    LeadslistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leadslist',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./leadslist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leadslist/leadslist.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./leadslist.page.scss */ "./src/app/pages/leadslist/leadslist.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"],
            src_app_services_loaderservice_loader_service__WEBPACK_IMPORTED_MODULE_6__["LoaderService"],
            src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_7__["InternetServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LeadslistPage);
    return LeadslistPage;
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
//# sourceMappingURL=pages-leadslist-leadslist-module.js.map