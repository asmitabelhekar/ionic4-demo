(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-ios.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-action-sheet-ios.entry.js ***!
  \*****************************************************************************/
/*! exports provided: ion_action_sheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_action_sheet", function() { return ActionSheet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@ionic/core/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-0a8d4d2e.js */ "./node_modules/@ionic/core/dist/esm-es5/core-0a8d4d2e.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-46f4a262.js");
/* harmony import */ var _animation_56279521_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation-56279521.js */ "./node_modules/@ionic/core/dist/esm-es5/animation-56279521.js");
/* harmony import */ var _hardware_back_button_1ed0083a_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hardware-back-button-1ed0083a.js */ "./node_modules/@ionic/core/dist/esm-es5/hardware-back-button-1ed0083a.js");
/* harmony import */ var _overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overlays-e336664a.js */ "./node_modules/@ionic/core/dist/esm-es5/overlays-e336664a.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");








/**
 * iOS Action Sheet Enter Animation
 */
var iosEnterAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var backdropAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
        .beforeStyles({
        'pointer-events': 'none'
    })
        .afterClearStyles(['pointer-events']);
    wrapperAnimation
        .addElement(baseEl.querySelector('.action-sheet-wrapper'))
        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * iOS Action Sheet Leave Animation
 */
var iosLeaveAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var backdropAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 'var(--backdrop-opacity)', 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.action-sheet-wrapper'))
        .fromTo('transform', 'translateY(0%)', 'translateY(100%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(450)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * MD Action Sheet Enter Animation
 */
var mdEnterAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var backdropAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
        .beforeStyles({
        'pointer-events': 'none'
    })
        .afterClearStyles(['pointer-events']);
    wrapperAnimation
        .addElement(baseEl.querySelector('.action-sheet-wrapper'))
        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(400)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * MD Action Sheet Leave Animation
 */
var mdLeaveAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var backdropAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    var wrapperAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_4__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 'var(--backdrop-opacity)', 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.action-sheet-wrapper'))
        .fromTo('transform', 'translateY(0%)', 'translateY(100%)');
    return baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(.36,.66,.04,1)')
        .duration(450)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
var ActionSheet = /** @class */ (function () {
    function class_1(hostRef) {
        var _this = this;
        Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["r"])(this, hostRef);
        this.presented = false;
        this.mode = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = true;
        /**
         * An array of buttons for the action sheet.
         */
        this.buttons = [];
        /**
         * If `true`, the action sheet will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = true;
        /**
         * If `true`, the action sheet will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * If `true`, the action sheet will animate.
         */
        this.animated = true;
        this.onBackdropTap = function () {
            _this.dismiss(undefined, _overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_6__["B"]);
        };
        this.dispatchCancelHandler = function (ev) {
            var role = ev.detail.role;
            if (Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_6__["i"])(role)) {
                var cancelButton = _this.getButtons().find(function (b) { return b.role === 'cancel'; });
                _this.callButtonHandler(cancelButton);
            }
        };
        Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_6__["d"])(this.el);
        this.didPresent = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionActionSheetDidPresent", 7);
        this.willPresent = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionActionSheetWillPresent", 7);
        this.willDismiss = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionActionSheetWillDismiss", 7);
        this.didDismiss = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this, "ionActionSheetDidDismiss", 7);
    }
    /**
     * Present the action sheet overlay after it has been created.
     */
    class_1.prototype.present = function () {
        return Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_6__["e"])(this, 'actionSheetEnter', iosEnterAnimation, mdEnterAnimation);
    };
    /**
     * Dismiss the action sheet overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the action sheet.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the action sheet.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */
    class_1.prototype.dismiss = function (data, role) {
        return Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_6__["f"])(this, data, role, 'actionSheetLeave', iosLeaveAnimation, mdLeaveAnimation);
    };
    /**
     * Returns a promise that resolves when the action sheet did dismiss.
     */
    class_1.prototype.onDidDismiss = function () {
        return Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_6__["g"])(this.el, 'ionActionSheetDidDismiss');
    };
    /**
     * Returns a promise that resolves when the action sheet will dismiss.
     *
     */
    class_1.prototype.onWillDismiss = function () {
        return Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_6__["g"])(this.el, 'ionActionSheetWillDismiss');
    };
    class_1.prototype.buttonClick = function (button) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var role, shouldDismiss;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        role = button.role;
                        if (Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_6__["i"])(role)) {
                            return [2 /*return*/, this.dismiss(undefined, role)];
                        }
                        return [4 /*yield*/, this.callButtonHandler(button)];
                    case 1:
                        shouldDismiss = _a.sent();
                        if (shouldDismiss) {
                            return [2 /*return*/, this.dismiss(undefined, button.role)];
                        }
                        return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    class_1.prototype.callButtonHandler = function (button) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var rtn;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!button) return [3 /*break*/, 2];
                        return [4 /*yield*/, Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_6__["s"])(button.handler)];
                    case 1:
                        rtn = _a.sent();
                        if (rtn === false) {
                            // if the return value of the handler is false then do not dismiss
                            return [2 /*return*/, false];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, true];
                }
            });
        });
    };
    class_1.prototype.getButtons = function () {
        return this.buttons.map(function (b) {
            return (typeof b === 'string')
                ? { text: b }
                : b;
        });
    };
    class_1.prototype.render = function () {
        var _a;
        var _this = this;
        var mode = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this);
        var allButtons = this.getButtons();
        var cancelButton = allButtons.find(function (b) { return b.role === 'cancel'; });
        var buttons = allButtons.filter(function (b) { return b.role !== 'cancel'; });
        return (Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["h"])(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["H"], { role: "dialog", "aria-modal": "true", style: {
                zIndex: "" + (20000 + this.overlayIndex),
            }, class: Object.assign(Object.assign((_a = {}, _a[mode] = true, _a), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_7__["g"])(this.cssClass)), { 'action-sheet-translucent': this.translucent }), onIonActionSheetWillDismiss: this.dispatchCancelHandler, onIonBackdropTap: this.onBackdropTap }, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-backdrop", { tappable: this.backdropDismiss }), Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "action-sheet-wrapper", role: "dialog" }, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "action-sheet-container" }, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "action-sheet-group" }, this.header !== undefined &&
            Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "action-sheet-title" }, this.header, this.subHeader && Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "action-sheet-sub-title" }, this.subHeader)), buttons.map(function (b) { return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", { type: "button", class: buttonClass(b), onClick: function () { return _this.buttonClick(b); } }, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { class: "action-sheet-button-inner" }, b.icon && Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { icon: b.icon, lazy: false, class: "action-sheet-icon" }), b.text), mode === 'md' && Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-ripple-effect", null)); })), cancelButton &&
            Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "action-sheet-group action-sheet-group-cancel" }, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["h"])("button", { type: "button", class: buttonClass(cancelButton), onClick: function () { return _this.buttonClick(cancelButton); } }, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { class: "action-sheet-button-inner" }, cancelButton.icon &&
                Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-icon", { icon: cancelButton.icon, lazy: false, class: "action-sheet-icon" }), cancelButton.text), mode === 'md' && Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-ripple-effect", null)))))));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return ".sc-ion-action-sheet-ios-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;font-family:var(--ion-font-family,inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios:after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}.action-sheet-selected.sc-ion-action-sheet-ios{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-ios:after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios:after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios:after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}\@media (any-hover:hover){.action-sheet-button.sc-ion-action-sheet-ios:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-ios:hover:after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--backdrop-opacity:var(--ion-backdrop-opacity,0.4);--button-background:linear-gradient(0deg,rgba(var(--ion-text-color-rgb,0,0,0),0.08),rgba(var(--ion-text-color-rgb,0,0,0),0.08) 50%,transparent 0) bottom/100% 1px no-repeat transparent;--button-background-activated:var(--ion-text-color,#000);--button-background-activated-opacity:.08;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-background-selected:var(--ion-background-color,#fff);--button-background-selected-opacity:1;--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-400,#999);text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top,0);margin-bottom:var(--ion-safe-area-bottom,0)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-container.sc-ion-action-sheet-ios{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-container.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios, .action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-background-color-rgb,255,255,255),.8)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8))),-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-background-color-rgb,255,255,255),.4)),color-stop(50%,rgba(var(--ion-background-color-rgb,255,255,255),.4)),color-stop(50%,rgba(var(--ion-background-color-rgb,255,255,255),.8)));background-image:linear-gradient(0deg,rgba(var(--ion-background-color-rgb,255,255,255),.8),rgba(var(--ion-background-color-rgb,255,255,255),.8) 100%),linear-gradient(0deg,rgba(var(--ion-background-color-rgb,255,255,255),.4),rgba(var(--ion-background-color-rgb,255,255,255),.4) 50%,rgba(var(--ion-background-color-rgb,255,255,255),.8) 0);background-repeat:no-repeat;background-position:top,bottom;background-size:100% calc(100% - 1px),100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.ion-activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--button-background-selected)}}.action-sheet-title.sc-ion-action-sheet-ios{background:-webkit-gradient(linear,left bottom,left top,from(rgba(var(--ion-text-color-rgb,0,0,0),.08)),color-stop(50%,rgba(var(--ion-text-color-rgb,0,0,0),.08)),color-stop(50%,transparent)) bottom/100% 1px no-repeat transparent;background:linear-gradient(0deg,rgba(var(--ion-text-color-rgb,0,0,0),.08),rgba(var(--ion-text-color-rgb,0,0,0),.08) 50%,transparent 0) bottom/100% 1px no-repeat transparent;padding-left:10px;padding-right:10px;padding-top:14px;padding-bottom:13px;color:var(--color,var(--ion-color-step-400,#999));font-size:13px;font-weight:400;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-title.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:15px;padding-bottom:0;font-size:12px}.action-sheet-button.sc-ion-action-sheet-ios{padding-left:18px;padding-right:18px;padding-top:18px;padding-bottom:18px;height:56px;font-size:20px;contain:strict}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:18px;padding-inline-start:18px;-webkit-padding-end:18px;padding-inline-end:18px}}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:.1em;font-size:28px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:unset;-webkit-margin-end:.1em;margin-inline-end:.1em}}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{font-weight:700}.action-sheet-cancel.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-cancel.sc-ion-action-sheet-ios:after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-destructive.sc-ion-action-sheet-ios, .action-sheet-destructive.ion-activated.sc-ion-action-sheet-ios, .action-sheet-destructive.ion-focused.sc-ion-action-sheet-ios{color:var(--ion-color-danger,#eb445a)}\@media (any-hover:hover){.action-sheet-destructive.sc-ion-action-sheet-ios:hover{color:var(--ion-color-danger,#eb445a)}}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var buttonClass = function (button) {
    var _a;
    return Object.assign((_a = { 'action-sheet-button': true, 'ion-activatable': true, 'ion-focusable': true }, _a["action-sheet-" + button.role] = button.role !== undefined, _a), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_7__["g"])(button.cssClass));
};



/***/ })

}]);
//# sourceMappingURL=2.js.map