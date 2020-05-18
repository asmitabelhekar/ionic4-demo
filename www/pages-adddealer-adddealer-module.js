(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-adddealer-adddealer-module"],{

/***/ "./node_modules/@ionic-native/camera/ngx/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@ionic-native/camera/ngx/index.js ***!
  \********************************************************/
/*! exports provided: DestinationType, EncodingType, MediaType, PictureSourceType, PopoverArrowDirection, Direction, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationType", function() { return DestinationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodingType", function() { return EncodingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaType", function() { return MediaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureSourceType", function() { return PictureSourceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverArrowDirection", function() { return PopoverArrowDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
var Camera = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            SAVEDPHOTOALBUM: 2
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1
        };
        return _this;
    }
    Camera.prototype.getPicture = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getPicture", { "callbackOrder": "reverse" }, arguments); };
    Camera.prototype.cleanup = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "cleanup", { "platforms": ["iOS"] }, arguments); };
    Camera.pluginName = "Camera";
    Camera.plugin = "cordova-plugin-camera";
    Camera.pluginRef = "navigator.camera";
    Camera.repo = "https://github.com/apache/cordova-plugin-camera";
    Camera.platforms = ["Android", "Browser", "iOS", "Windows"];
    Camera = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Camera);
    return Camera;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbWVyYS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQXNGeEUsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6Qiw2REFBWSxDQUFBO0lBQ1osNkRBQVEsQ0FBQTtJQUNSLGlFQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFFRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3RCLCtDQUFRLENBQUE7SUFDUiw2Q0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNuQiwrQ0FBVyxDQUFBO0lBQ1gsMkNBQUssQ0FBQTtJQUNMLGlEQUFRLENBQUE7QUFDVixDQUFDLEVBSlcsU0FBUyxLQUFULFNBQVMsUUFJcEI7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQzNCLHlFQUFnQixDQUFBO0lBQ2hCLDZEQUFNLENBQUE7SUFDTiwrRUFBZSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSTVCO0FBRUQsTUFBTSxDQUFOLElBQVkscUJBTVg7QUFORCxXQUFZLHFCQUFxQjtJQUMvQix5RUFBWSxDQUFBO0lBQ1osNkVBQVUsQ0FBQTtJQUNWLDZFQUFVLENBQUE7SUFDViwrRUFBVyxDQUFBO0lBQ1gsMkVBQVMsQ0FBQTtBQUNYLENBQUMsRUFOVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBTWhDO0FBRUQsTUFBTSxDQUFOLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix5Q0FBUSxDQUFBO0lBQ1IsMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjs7SUFxRDJCLDBCQUFpQjs7O1FBQzNDOztXQUVHO1FBQ0gscUJBQWUsR0FBRztZQUNoQixnS0FBZ0s7WUFDaEssUUFBUSxFQUFFLENBQUM7WUFDWCw0RUFBNEU7WUFDNUUsUUFBUSxFQUFFLENBQUM7WUFDWCwwREFBMEQ7WUFDMUQsVUFBVSxFQUFFLENBQUM7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxrQkFBWSxHQUFHO1lBQ2IsZ0NBQWdDO1lBQ2hDLElBQUksRUFBRSxDQUFDO1lBQ1AsK0JBQStCO1lBQy9CLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQztRQUVGOztXQUVHO1FBQ0gsZUFBUyxHQUFHO1lBQ1Ysd0dBQXdHO1lBQ3hHLE9BQU8sRUFBRSxDQUFDO1lBQ1Ysc0RBQXNEO1lBQ3RELEtBQUssRUFBRSxDQUFDO1lBQ1IsMkNBQTJDO1lBQzNDLFFBQVEsRUFBRSxDQUFDO1NBQ1osQ0FBQztRQUVGOztXQUVHO1FBQ0gsdUJBQWlCLEdBQUc7WUFDbEIsMkVBQTJFO1lBQzNFLFlBQVksRUFBRSxDQUFDO1lBQ2YsK0JBQStCO1lBQy9CLE1BQU0sRUFBRSxDQUFDO1lBQ1QsOEVBQThFO1lBQzlFLGVBQWUsRUFBRSxDQUFDO1NBQ25CLENBQUM7UUFFRjs7V0FFRztRQUNILDJCQUFxQixHQUFHO1lBQ3RCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUM7WUFDYixVQUFVLEVBQUUsQ0FBQztZQUNiLFdBQVcsRUFBRSxDQUFDO1lBQ2QsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxlQUFTLEdBQUc7WUFDVixpQ0FBaUM7WUFDakMsSUFBSSxFQUFFLENBQUM7WUFDUCxrQ0FBa0M7WUFDbEMsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDOzs7SUFVRiwyQkFBVSxhQUFDLE9BQXVCO0lBWWxDLHdCQUFPOzs7Ozs7SUF4RkksTUFBTTtRQURsQixVQUFVLEVBQUU7T0FDQSxNQUFNO2lCQTlLbkI7RUE4SzRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhT3B0aW9ucyB7XG4gIC8qKiBQaWN0dXJlIHF1YWxpdHkgaW4gcmFuZ2UgMC0xMDAuIERlZmF1bHQgaXMgNTAgKi9cbiAgcXVhbGl0eT86IG51bWJlcjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUuXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLkRlc3RpbmF0aW9uVHlwZS4gRGVmYXVsdCBpcyBGSUxFX1VSSS5cbiAgICogICAgICBEQVRBX1VSTCA6IDAsICAgUmV0dXJuIGltYWdlIGFzIGJhc2U2NC1lbmNvZGVkIHN0cmluZyAoREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlKSxcbiAgICogICAgICBGSUxFX1VSSSA6IDEsICAgUmV0dXJuIGltYWdlIGZpbGUgVVJJLFxuICAgKiAgICAgIE5BVElWRV9VUkkgOiAyICBSZXR1cm4gaW1hZ2UgbmF0aXZlIFVSSVxuICAgKiAgICAgICAgICAoZS5nLiwgYXNzZXRzLWxpYnJhcnk6Ly8gb24gaU9TIG9yIGNvbnRlbnQ6Ly8gb24gQW5kcm9pZClcbiAgICovXG4gIGRlc3RpbmF0aW9uVHlwZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFNldCB0aGUgc291cmNlIG9mIHRoZSBwaWN0dXJlLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5QaWN0dXJlU291cmNlVHlwZS4gRGVmYXVsdCBpcyBDQU1FUkEuXG4gICAqICAgICAgUEhPVE9MSUJSQVJZIDogMCxcbiAgICogICAgICBDQU1FUkEgOiAxLFxuICAgKiAgICAgIFNBVkVEUEhPVE9BTEJVTSA6IDJcbiAgICovXG4gIHNvdXJjZVR5cGU/OiBudW1iZXI7XG4gIC8qKiBBbGxvdyBzaW1wbGUgZWRpdGluZyBvZiBpbWFnZSBiZWZvcmUgc2VsZWN0aW9uLiAqL1xuICBhbGxvd0VkaXQ/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2hvb3NlIHRoZSByZXR1cm5lZCBpbWFnZSBmaWxlJ3MgZW5jb2RpbmcuXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLkVuY29kaW5nVHlwZS4gRGVmYXVsdCBpcyBKUEVHXG4gICAqICAgICAgSlBFRyA6IDAgICAgUmV0dXJuIEpQRUcgZW5jb2RlZCBpbWFnZVxuICAgKiAgICAgIFBORyA6IDEgICAgIFJldHVybiBQTkcgZW5jb2RlZCBpbWFnZVxuICAgKi9cbiAgZW5jb2RpbmdUeXBlPzogbnVtYmVyO1xuICAvKipcbiAgICogV2lkdGggaW4gcGl4ZWxzIHRvIHNjYWxlIGltYWdlLiBNdXN0IGJlIHVzZWQgd2l0aCB0YXJnZXRIZWlnaHQuXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxuICAgKi9cbiAgdGFyZ2V0V2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBIZWlnaHQgaW4gcGl4ZWxzIHRvIHNjYWxlIGltYWdlLiBNdXN0IGJlIHVzZWQgd2l0aCB0YXJnZXRXaWR0aC5cbiAgICogQXNwZWN0IHJhdGlvIHJlbWFpbnMgY29uc3RhbnQuXG4gICAqL1xuICB0YXJnZXRIZWlnaHQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHR5cGUgb2YgbWVkaWEgdG8gc2VsZWN0IGZyb20uIE9ubHkgd29ya3Mgd2hlbiBQaWN0dXJlU291cmNlVHlwZVxuICAgKiBpcyBQSE9UT0xJQlJBUlkgb3IgU0FWRURQSE9UT0FMQlVNLiBEZWZpbmVkIGluIENhbWVyYS5NZWRpYVR5cGVcbiAgICogICAgICBQSUNUVVJFOiAwICAgICAgYWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuXG4gICAqICAgICAgICAgIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZVxuICAgKiAgICAgIFZJREVPOiAxICAgICAgICBhbGxvdyBzZWxlY3Rpb24gb2YgdmlkZW8gb25seSwgV0lMTCBBTFdBWVMgUkVUVVJOIEZJTEVfVVJJXG4gICAqICAgICAgQUxMTUVESUEgOiAyICAgIGFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlc1xuICAgKi9cbiAgbWVkaWFUeXBlPzogbnVtYmVyO1xuICAvKiogUm90YXRlIHRoZSBpbWFnZSB0byBjb3JyZWN0IGZvciB0aGUgb3JpZW50YXRpb24gb2YgdGhlIGRldmljZSBkdXJpbmcgY2FwdHVyZS4gKi9cbiAgY29ycmVjdE9yaWVudGF0aW9uPzogYm9vbGVhbjtcbiAgLyoqIFNhdmUgdGhlIGltYWdlIHRvIHRoZSBwaG90byBhbGJ1bSBvbiB0aGUgZGV2aWNlIGFmdGVyIGNhcHR1cmUuICovXG4gIHNhdmVUb1Bob3RvQWxidW0/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2hvb3NlIHRoZSBjYW1lcmEgdG8gdXNlIChmcm9udC0gb3IgYmFjay1mYWNpbmcpLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5EaXJlY3Rpb24uIERlZmF1bHQgaXMgQkFDSy5cbiAgICogICAgICBCQUNLOiAwXG4gICAqICAgICAgRlJPTlQ6IDFcbiAgICovXG4gIGNhbWVyYURpcmVjdGlvbj86IG51bWJlcjtcbiAgLyoqIGlPUy1vbmx5IG9wdGlvbnMgdGhhdCBzcGVjaWZ5IHBvcG92ZXIgbG9jYXRpb24gaW4gaVBhZC4gRGVmaW5lZCBpbiBDYW1lcmFQb3BvdmVyT3B0aW9ucy4gKi9cbiAgcG9wb3Zlck9wdGlvbnM/OiBDYW1lcmFQb3BvdmVyT3B0aW9ucztcbn1cblxuLyoqXG4gKiBpT1Mtb25seSBwYXJhbWV0ZXJzIHRoYXQgc3BlY2lmeSB0aGUgYW5jaG9yIGVsZW1lbnQgbG9jYXRpb24gYW5kIGFycm93IGRpcmVjdGlvblxuICogb2YgdGhlIHBvcG92ZXIgd2hlbiBzZWxlY3RpbmcgaW1hZ2VzIGZyb20gYW4gaVBhZCdzIGxpYnJhcnkgb3IgYWxidW0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhUG9wb3Zlck9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKlxuICAgKiBEaXJlY3Rpb24gdGhlIGFycm93IG9uIHRoZSBwb3BvdmVyIHNob3VsZCBwb2ludC4gRGVmaW5lZCBpbiBDYW1lcmEuUG9wb3ZlckFycm93RGlyZWN0aW9uXG4gICAqIE1hdGNoZXMgaU9TIFVJUG9wb3ZlckFycm93RGlyZWN0aW9uIGNvbnN0YW50cy5cbiAgICogICAgICBBUlJPV19VUCA6IDEsXG4gICAqICAgICAgQVJST1dfRE9XTiA6IDIsXG4gICAqICAgICAgQVJST1dfTEVGVCA6IDQsXG4gICAqICAgICAgQVJST1dfUklHSFQgOiA4LFxuICAgKiAgICAgIEFSUk9XX0FOWSA6IDE1XG4gICAqL1xuICBhcnJvd0RpcjogbnVtYmVyO1xufVxuXG5leHBvcnQgZW51bSBEZXN0aW5hdGlvblR5cGUge1xuICBEQVRBX1VSTCA9IDAsXG4gIEZJTEVfVVJMLFxuICBOQVRJVkVfVVJJXG59XG5cbmV4cG9ydCBlbnVtIEVuY29kaW5nVHlwZSB7XG4gIEpQRUcgPSAwLFxuICBQTkdcbn1cblxuZXhwb3J0IGVudW0gTWVkaWFUeXBlIHtcbiAgUElDVFVSRSA9IDAsXG4gIFZJREVPLFxuICBBTExNRURJQVxufVxuXG5leHBvcnQgZW51bSBQaWN0dXJlU291cmNlVHlwZSB7XG4gIFBIT1RPTElCUkFSWSA9IDAsXG4gIENBTUVSQSxcbiAgU0FWRURQSE9UT0FMQlVNXG59XG5cbmV4cG9ydCBlbnVtIFBvcG92ZXJBcnJvd0RpcmVjdGlvbiB7XG4gIEFSUk9XX1VQID0gMSxcbiAgQVJST1dfRE9XTixcbiAgQVJST1dfTEVGVCxcbiAgQVJST1dfUklHSFQsXG4gIEFSUk9XX0FOWVxufVxuXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xuICBCQUNLID0gMCxcbiAgRlJPTlRcbn1cblxuLyoqXG4gKiBAbmFtZSBDYW1lcmFcbiAqIEBkZXNjcmlwdGlvblxuICogVGFrZSBhIHBob3RvIG9yIGNhcHR1cmUgdmlkZW8uXG4gKlxuICogUmVxdWlyZXMgdGhlIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tY2FtZXJhYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NvcmRvdmEgQ2FtZXJhIFBsdWdpbiBEb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYSkuXG4gKlxuICogW1dhcm5pbmddIFNpbmNlIElPUyAxMCB0aGUgY2FtZXJhIHJlcXVpcmVzIHBlcm1pc3Npb25zIHRvIGJlIHBsYWNlZCBpbiB5b3VyIGNvbmZpZy54bWwgYWRkXG4gKiBgYGB4bWxcbiAqIDxjb25maWctZmlsZSBwYXJlbnQ9XCJOU0NhbWVyYVVzYWdlRGVzY3JpcHRpb25cIiBwbGF0Zm9ybT1cImlvc1wiIHRhcmdldD1cIiotSW5mby5wbGlzdFwiPlxuICogIDxzdHJpbmc+WW91IGNhbiB0YWtlIHBob3Rvczwvc3RyaW5nPlxuICogPC9jb25maWctZmlsZT5cbiAqIGBgYFxuICogaW5zaWRlIG9mIHRoZSA8cGxhdGZvcm0gbmFtZT0naW9zPiBzZWN0aW9uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYW1lcmEsIENhbWVyYU9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbWVyYS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FtZXJhOiBDYW1lcmEpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBjb25zdCBvcHRpb25zOiBDYW1lcmFPcHRpb25zID0ge1xuICogICBxdWFsaXR5OiAxMDAsXG4gKiAgIGRlc3RpbmF0aW9uVHlwZTogdGhpcy5jYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLFxuICogICBlbmNvZGluZ1R5cGU6IHRoaXMuY2FtZXJhLkVuY29kaW5nVHlwZS5KUEVHLFxuICogICBtZWRpYVR5cGU6IHRoaXMuY2FtZXJhLk1lZGlhVHlwZS5QSUNUVVJFXG4gKiB9XG4gKlxuICogdGhpcy5jYW1lcmEuZ2V0UGljdHVyZShvcHRpb25zKS50aGVuKChpbWFnZURhdGEpID0+IHtcbiAqICAvLyBpbWFnZURhdGEgaXMgZWl0aGVyIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIG9yIGEgZmlsZSBVUklcbiAqICAvLyBJZiBpdCdzIGJhc2U2NCAoREFUQV9VUkwpOlxuICogIGxldCBiYXNlNjRJbWFnZSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCcgKyBpbWFnZURhdGE7XG4gKiB9LCAoZXJyKSA9PiB7XG4gKiAgLy8gSGFuZGxlIGVycm9yXG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIENhbWVyYU9wdGlvbnNcbiAqIENhbWVyYVBvcG92ZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2FtZXJhJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2FtZXJhJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmNhbWVyYScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgZGVzdGluYXRpb24gdHlwZXNcbiAgICovXG4gIERlc3RpbmF0aW9uVHlwZSA9IHtcbiAgICAvKiogUmV0dXJuIGJhc2U2NCBlbmNvZGVkIHN0cmluZy4gREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlICovXG4gICAgREFUQV9VUkw6IDAsXG4gICAgLyoqIFJldHVybiBmaWxlIHVyaSAoY29udGVudDovL21lZGlhL2V4dGVybmFsL2ltYWdlcy9tZWRpYS8yIGZvciBBbmRyb2lkKSAqL1xuICAgIEZJTEVfVVJJOiAxLFxuICAgIC8qKiBSZXR1cm4gbmF0aXZlIHVyaSAoZWcuIGFzc2V0LWxpYnJhcnk6Ly8uLi4gZm9yIGlPUykgKi9cbiAgICBOQVRJVkVfVVJJOiAyXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBFbmNvZGluZ1R5cGUgPSB7XG4gICAgLyoqIFJldHVybiBKUEVHIGVuY29kZWQgaW1hZ2UgKi9cbiAgICBKUEVHOiAwLFxuICAgIC8qKiBSZXR1cm4gUE5HIGVuY29kZWQgaW1hZ2UgKi9cbiAgICBQTkc6IDFcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIE1lZGlhVHlwZSA9IHtcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZSAqL1xuICAgIFBJQ1RVUkU6IDAsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBvZiB2aWRlbyBvbmx5LCBPTkxZIFJFVFVSTlMgVVJMICovXG4gICAgVklERU86IDEsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlcyAqL1xuICAgIEFMTE1FRElBOiAyXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBQaWN0dXJlU291cmNlVHlwZSA9IHtcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFBIT1RPTElCUkFSWSBmb3IgQW5kcm9pZCkgKi9cbiAgICBQSE9UT0xJQlJBUlk6IDAsXG4gICAgLyoqIFRha2UgcGljdHVyZSBmcm9tIGNhbWVyYSAqL1xuICAgIENBTUVSQTogMSxcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFNBVkVEUEhPVE9BTEJVTSBmb3IgQW5kcm9pZCkgKi9cbiAgICBTQVZFRFBIT1RPQUxCVU06IDJcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIFBvcG92ZXJBcnJvd0RpcmVjdGlvbiA9IHtcbiAgICBBUlJPV19VUDogMSxcbiAgICBBUlJPV19ET1dOOiAyLFxuICAgIEFSUk9XX0xFRlQ6IDQsXG4gICAgQVJST1dfUklHSFQ6IDgsXG4gICAgQVJST1dfQU5ZOiAxNVxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgRGlyZWN0aW9uID0ge1xuICAgIC8qKiBVc2UgdGhlIGJhY2stZmFjaW5nIGNhbWVyYSAqL1xuICAgIEJBQ0s6IDAsXG4gICAgLyoqIFVzZSB0aGUgZnJvbnQtZmFjaW5nIGNhbWVyYSAqL1xuICAgIEZST05UOiAxXG4gIH07XG5cbiAgLyoqXG4gICAqIFRha2UgYSBwaWN0dXJlIG9yIHZpZGVvLCBvciBsb2FkIG9uZSBmcm9tIHRoZSBsaWJyYXJ5LlxuICAgKiBAcGFyYW0ge0NhbWVyYU9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIHRoYXQgeW91IHdhbnQgdG8gcGFzcyB0byB0aGUgY2FtZXJhLiBFbmNvZGluZyB0eXBlLCBxdWFsaXR5LCBldGMuIFBsYXRmb3JtLXNwZWNpZmljIHF1aXJrcyBhcmUgZGVzY3JpYmVkIGluIHRoZSBbQ29yZG92YSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEjY2FtZXJhb3B0aW9ucy1lcnJhdGEtKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIEJhc2U2NCBlbmNvZGluZyBvZiB0aGUgaW1hZ2UgZGF0YSwgb3IgdGhlIGltYWdlIGZpbGUgVVJJLCBkZXBlbmRpbmcgb24gY2FtZXJhT3B0aW9ucywgb3RoZXJ3aXNlIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgZ2V0UGljdHVyZShvcHRpb25zPzogQ2FtZXJhT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBpbnRlcm1lZGlhdGUgaW1hZ2UgZmlsZXMgdGhhdCBhcmUga2VwdCBpbiB0ZW1wb3Jhcnkgc3RvcmFnZSBhZnRlciBjYWxsaW5nIGNhbWVyYS5nZXRQaWN0dXJlLlxuICAgKiBBcHBsaWVzIG9ubHkgd2hlbiB0aGUgdmFsdWUgb2YgQ2FtZXJhLnNvdXJjZVR5cGUgZXF1YWxzIENhbWVyYS5QaWN0dXJlU291cmNlVHlwZS5DQU1FUkEgYW5kIHRoZSBDYW1lcmEuZGVzdGluYXRpb25UeXBlIGVxdWFscyBDYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXVxuICB9KVxuICBjbGVhbnVwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/adddealer/adddealer.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/adddealer/adddealer.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <div fxLayout=\"row\">\n      <ion-icon name=\"arrow-back\" style=\"width:30px; height:30px; margin:10px ;color : #ffffff\" (click)=\"goBackword()\">\n      </ion-icon>\n      <ion-label class=\"TitleHeader TitleText\" style=\"font-size: 20px;\">\n        Add Dealer\n      </ion-label>\n    </div>\n\n    <!-- <ion-row>\n      <ion-col size=\"2\">\n        <ion-icon name=\"arrow-back\" style=\"width:30px; height:30px; margin:10px ;color : #000000\"\n          (click)=\"goBackword()\">\n        </ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-label class=\"TitleHeader TitleText\" style=\"font-size: 17px;\">\n          Add Dealer\n        </ion-label>\n      </ion-col>\n\n    </ion-row> -->\n\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"height: 115%;width:100%;background-color: #F1F4F9;\">\n\n  <div style=\"height:115%;background-color: #F1F4F9; margin-top:-30px\">\n    <form #userForm=\"ngForm\" style=\"width:100%;background-color: #F1F4F9;height:115%;\">\n\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"width: 100%;\">\n\n        <ion-row style=\"width:100%\">\n          <ion-col size=\"12\">\n            <!-- <mat-label *ngIf=\"profilePic != '' \" style=\"margin-left:2.5%;\">Image</mat-label> -->\n\n            <ion-row fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin-top:5px\">\n\n              <div\n                style=\"height:200px;width:95%;border-radius:5px;background-color: white; margin-top:10%\"\n                fxLayout=\"column\" fxLayoutAlign=\"center center\"\n                onclick=\"document.getElementById('image_upload').click()\">\n                <ion-icon *ngIf=\"profilePic == '' \" name=\"camera\" style=\"width:40%; height:40%; margin-top:15px;color:rgb(196, 184, 184)\">\n                </ion-icon>\n                <img *ngIf=\"profilePic != '' \" src=\"{{profilePic}}\"\n                  style=\"width:100%;border-radius:5px; height:100%;\" />\n\n\n                <input style=\"display: none;\" id=\"image_upload\" type=\"file\" (change)=\"detectEventGallery($event)\">\n\n                <div *ngIf=\"profilePic == '' \" style=\"margin-top:12px;color: black;width:100%;margin-bottom:15px\"\n                  fxLayoutAlign=\"center\">\n                  <label type=\"file\">Upload Pic</label>\n                </div>\n              </div>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n\n\n\n        <ion-row style=\"width:100%;margin-top:15px\">\n          <ion-col size=\"12\">\n            <ion-row fxLayout=\"row\" fxLayoutAlign=\"center center\">\n              <mat-form-field style=\"width:95%;\" appearance=\"fill\" class=\"mat-input-underline\">\n                <mat-label style=\"color:black; \">Full Name</mat-label>\n                <input matInput class=\"form-control \" name=\"fname\" required [(ngModel)]=\"dealerModel.fname\"\n                  #fname=\"ngModel\" pattern=\"[a-zA-z   ]+$\" />\n                <mat-error>\n                  <div class=\"form-group\">\n                    <div *ngIf=\"fname.invalid && (fname.dirty || fname.touched)\">\n                      Full Name Is Requird\n                    </div>\n                  </div>\n                </mat-error>\n\n              </mat-form-field>\n            </ion-row>\n\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"width:100%\">\n          <ion-col size=\"12\">\n            <ion-row fxLayout=\"row\" fxLayoutAlign=\"center center\">\n              <mat-form-field style=\"width:95%\" appearance=\"fill\">\n                <mat-label style=\"color:black; background-color: white;\">User Name</mat-label>\n                <input matInput class=\"form-control \" name=\"uname\" required [(ngModel)]=\"dealerModel.uname\"\n                  #uname=\"ngModel\" pattern=\"[a-zA-z   ]+$\" />\n                <mat-error>\n                  <div class=\"form-group\">\n                    <div *ngIf=\"uname.invalid && (uname.dirty || uname.touched)\">\n                      User Name Is Requird\n                    </div>\n                  </div>\n                </mat-error>\n\n              </mat-form-field>\n            </ion-row>\n\n\n          </ion-col>\n        </ion-row>\n\n\n\n\n        <ion-row style=\"width:100%\">\n\n          <ion-col size=\"12\">\n            <ion-row fxLayout=\"row\" fxLayoutAlign=\"center center\">\n              <mat-form-field style=\"width:95%;\" appearance=\"fill\">\n                <mat-label style=\"color:black; background-color: white;\">Mobile</mat-label>\n                <input matInput class=\"form-control \" name=\"mobile\" type=\"tel\" minlength=\"10\" maxlength=\"10\" id=\"mobile\"\n                  required [(ngModel)]=\"dealerModel.mobile\" #mobile=\"ngModel\" pattern=\"[0-9]+$\" />\n\n                <mat-error>\n                  <div class=\"form-group\">\n                    <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\">\n                      Mobile Number Is Requird\n                    </div>\n\n                  </div>\n                </mat-error>\n\n              </mat-form-field>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"width:100%\">\n          <ion-col size=\"12\">\n            <ion-row fxLayout=\"row\" fxLayoutAlign=\"center center\">\n              <mat-form-field style=\"width:95%;\" appearance=\"fill\">\n                <mat-label style=\"color:black; background-color: white;\">Email</mat-label>\n                <input matInput class=\"form-control \" name=\"email\" [(ngModel)]=\"dealerModel.email\" #email=\"ngModel\"\n                  pattern=\"[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" />\n                <mat-error>\n                  <div class=\"form-group\">\n                    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n                      Email Is Requird\n                    </div>\n                  </div>\n                </mat-error>\n\n              </mat-form-field>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row style=\"width:100%\">\n          <ion-col size=\"12\">\n            <ion-row fxLayout=\"row\" fxLayoutAlign=\"center center\">\n              <mat-form-field style=\"width:95%\" appearance=\"fill\">\n                <mat-label style=\"color:black; background-color: white;\">Password</mat-label>\n                <input matInput class=\"form-control \" name=\"password\" required [(ngModel)]=\"dealerModel.password\"\n                  #password=\"ngModel\" />\n                <mat-error>\n                  <div class=\"form-group\">\n                    <div *ngIf=\"password.invalid && (password.dirty || password.touched)\">\n                      Password Is Requird\n                    </div>\n                  </div>\n                </mat-error>\n\n              </mat-form-field>\n            </ion-row>\n\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"width:100%\">\n          <ion-col size=\"12\">\n            <ion-row fxLayout=\"row\" fxLayoutAlign=\"center center\">\n              <mat-form-field style=\"width:95%;\" appearance=\"fill\">\n                <mat-label style=\"color:black; background-color: white;\">Address</mat-label>\n                <input matInput placeholder=\"Location\" [(ngModel)]=\"loc.location\" ngx-google-places-autocomplete\n                  [options]='options' #placesRef=\"ngx-places\" name=\"city\"\n                  (onAddressChange)=\"handleAddressChange($event)\">\n              </mat-form-field>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"margin-top:-10px;width:100%; margin-bottom:5%\">\n          <ion-col size=\"12\">\n            <ion-row fxLayout=\"row\" fxLayoutAlign=\"center center\">\n              <mat-form-field style=\"width:95%;\" appearance=\"fill\">\n                <mat-label style=\"color:black;\">Comment</mat-label>\n                <textarea matInput class=\"form-control \" name=\"comment\" [(ngModel)]=\"dealerModel.comment\"\n                  #comment=\"ngModel\" pattern=\"[a-zA-z  ,-.]+$\"></textarea>\n              </mat-form-field>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <!-- <div class=\"MyLocation\" (click)=\"loadMap()\" style=\"margin-bottom:50px\">\n          <button mat-raised-button style=\"padding:10px\">Set Location</button>\n        </div> -->\n        <div *ngIf=\"showMap == 0 \" id=\"map_canvas\" style=\"margin-bottom:15%; margin-top:15px\"></div>\n       \n\n        <!-- <div class=\"inner-one-div\">\n          <mat-form-field style=\"width:95%;\"  appearance=\"fill\">\n            <input matInput placeholder=\"Location\" [(ngModel)]=\"loc.location\" ngx-google-places-autocomplete\n              [options]='options' #placesRef=\"ngx-places\" name=\"city\" (onAddressChange)=\"handleAddressChange($event)\"\n              required>\n          </mat-form-field>\n        </div> -->\n\n      </div>\n\n\n      <!-- <button mat-raised-button (click)=\"detectEventGallery($event)\">Capture image</button> -->\n\n\n\n\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <button mat-raised-button [disabled]=\"mobile.invalid || fname.invalid || uname.invalid \" class=\"loginButton\"\n          (click)=\"addDealerData(dealerModel)\"><b>Save</b></button>\n\n      </div>\n    </form>\n  </div>\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/adddealer/adddealer-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/adddealer/adddealer-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AdddealerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdddealerPageRoutingModule", function() { return AdddealerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adddealer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adddealer.page */ "./src/app/pages/adddealer/adddealer.page.ts");




var routes = [
    {
        path: '',
        component: _adddealer_page__WEBPACK_IMPORTED_MODULE_3__["AdddealerPage"]
    }
];
var AdddealerPageRoutingModule = /** @class */ (function () {
    function AdddealerPageRoutingModule() {
    }
    AdddealerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AdddealerPageRoutingModule);
    return AdddealerPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/adddealer/adddealer.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/adddealer/adddealer.module.ts ***!
  \*****************************************************/
/*! exports provided: AdddealerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdddealerPageModule", function() { return AdddealerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _adddealer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adddealer-routing.module */ "./src/app/pages/adddealer/adddealer-routing.module.ts");
/* harmony import */ var _adddealer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adddealer.page */ "./src/app/pages/adddealer/adddealer.page.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
















var AdddealerPageModule = /** @class */ (function () {
    function AdddealerPageModule() {
    }
    AdddealerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_12__["GooglePlaceModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                _adddealer_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdddealerPageRoutingModule"]
            ],
            providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"], _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_13__["GoogleMaps"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_15__["NativeGeocoder"],
                _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_14__["Geolocation"],],
            declarations: [_adddealer_page__WEBPACK_IMPORTED_MODULE_6__["AdddealerPage"]]
        })
    ], AdddealerPageModule);
    return AdddealerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/adddealer/adddealer.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/adddealer/adddealer.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cl-back-button {\n  background: url('back_white.png') center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 30px;\n  color: black;\n  height: 30px;\n  outline: 0;\n  box-shadow: 0 0 0 0;\n  margin-right: 15px;\n}\n\n.TitleHeader {\n  width: 100%;\n  height: 50px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.TitleText {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  text-align: left;\n  font-size: 19px;\n  width: 81%;\n  color: #ffffff;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.registration-main {\n  margin-top: 5%;\n  width: 100%;\n  border: 1px solid red;\n}\n\nmat-card {\n  min-width: 80%;\n}\n\n.submitButton {\n  height: 48px;\n  width: 30%;\n  margin-left: 15%;\n  margin-right: 15%;\n  border-radius: 25px;\n  background: -webkit-gradient(linear, left top, right top, from(#3672f6), to(#52caf9));\n  background: linear-gradient(to right, #3672f6, #52caf9);\n  color: #FFFFFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n}\n\n.cl_table_title_css {\n  font-size: 13px;\n  color: #383737;\n}\n\n.cl_table_content_css {\n  font-size: 12px;\n}\n\n.centerImg {\n  border: 1px solid #bdafaf;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70px;\n  color: grey;\n  height: 70px;\n  border-radius: 50%;\n}\n\n.editIcon {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 30px;\n  color: black;\n  height: 30px;\n}\n\n.img-circle {\n  border-radius: 50%;\n  margin: 10px;\n  border: 2px solid #3486E8;\n}\n\n.loginButton {\n  background-color: #1686b9;\n  color: white;\n  width: 100%;\n  position: fixed;\n  bottom: 0px;\n  border-radius: 2px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  font-size: 18px;\n}\n\npage-home .scroll {\n  height: 100%;\n}\n\npage-home #map {\n  width: 100%;\n  height: 100%;\n}\n\n#map_canvas {\n  width: 100%;\n  height: 35vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RoYW5hbmpheXJhdXQvZ3NwL3NyYy9hcHAvcGFnZXMvYWRkZGVhbGVyL2FkZGRlYWxlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkZGRlYWxlci9hZGRkZWFsZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdBO0VBQ0ksV0FBQTtFQUVBLFlBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksMkJBQUE7RUFBQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBRUEseUJBQUE7VUFBQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBRElJO0VBQ0EsY0FBQTtBQ0RKOztBRElJO0VBRUksWUFBQTtFQUNBLFVBQUE7RUFDQyxnQkFBQTtFQUNELGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxRkFBQTtFQUFBLHVEQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQ0ZSOztBRFNFO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNOTjs7QURTRTtFQUNJLGVBQUE7QUNOTjs7QURTRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFHQSxrQkFBQTtBQ1JKOztBRFdFO0VBRUUsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNUSjs7QURZRTtFQUNFLGtCQUFBO0VBRUEsWUFBQTtFQUNBLHlCQUFBO0FDVko7O0FEY0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUdFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDRixlQUFBO0FDYko7O0FEaUJJO0VBQ0ksWUFBQTtBQ2RSOztBRGlCSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDZlI7O0FEbUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNoQkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGRkZWFsZXIvYWRkZGVhbGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbC1iYWNrLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZycpIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5cbi5UaXRsZUhlYWRlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBwYWRkaW5nOiAwIDEwcHggMCAxMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4uVGl0bGVUZXh0e1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgd2lkdGg6IDgxJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAvLyBmb250LXdlaWdodDogNzAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yZWdpc3RyYXRpb24tbWFpbntcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgfVxuICAgIG1hdC1jYXJke1xuICAgIG1pbi13aWR0aDogODAlO1xuICAgIH1cbiAgICBcbiAgICAuc3VibWl0QnV0dG9ue1xuICAgXG4gICAgICAgIGhlaWdodDogNDhweDtcdFxuICAgICAgICB3aWR0aDogMzAlOyBcbiAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNSU7IFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcdFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNjcyZjYgLCAjNTJjYWY5KTtcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHRcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XHRcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1x0XG4gICAgICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgLy8gYm90dG9tOiAxMHB4O1xuICAgICAgICAvLyByaWdodDogMTBweDtcbiAgICB9XG4gXG5cbiAgLmNsX3RhYmxlX3RpdGxlX2Nzc3tcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGNvbG9yOiByZ2IoNTYsIDU1LCA1NSk7XG4gIH1cblxuICAuY2xfdGFibGVfY29udGVudF9jc3N7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAuY2VudGVySW1nIHtcbiAgICBib3JkZXIgOiAxcHggc29saWQgI2JkYWZhZjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgY29sb3I6Z3JleTtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDo1JTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAzMmYwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5lZGl0SWNvbntcbiAgICAvLyBib3JkZXIgOiAxcHggc29saWQgI2JkYWZhZjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmMDMyZjA7XG4gIH1cbiAgLmltZy1jaXJjbGV7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC8vIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzM0ODZFODtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmxvZ2luQnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMTM0LCAxODUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6MnB4O1xuICAgIC8vICBtYXJnaW4tbGVmdDo0JTsgXG4gICAgLy8gIG1hcmdpbi1yaWdodDo0JTtcbiAgICAgIHBhZGRpbmctdG9wOjIwcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDsgXG4gICAgZm9udC1zaXplOjE4cHg7XG4gIH1cblxuICBwYWdlLWhvbWUge1xuICAgIC5zY3JvbGwge1xuICAgICAgICBoZWlnaHQ6IDEwMCVcbiAgICB9XG5cbiAgICAjbWFwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbiNtYXBfY2FudmFze1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6IDM1dmg7XG59XG5cbi8vIC5NeUxvY2F0aW9ue1xuLy8gICB3aWR0aDo1MHB4O1xuLy8gICBoZWlnaHQ6NTBweDtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICByaWdodDogMTlweDtcbi8vICAgdG9wOiAzNCU7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgcGFkZGluZzogMTRweDtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbi8vIH1cbiIsIi5jbC1iYWNrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrX3doaXRlLnBuZ1wiKSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5UaXRsZUhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uVGl0bGVUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgd2lkdGg6IDgxJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yZWdpc3RyYXRpb24tbWFpbiB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG5tYXQtY2FyZCB7XG4gIG1pbi13aWR0aDogODAlO1xufVxuXG4uc3VibWl0QnV0dG9uIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzY3MmY2LCAjNTJjYWY5KTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5jbF90YWJsZV90aXRsZV9jc3Mge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMzgzNzM3O1xufVxuXG4uY2xfdGFibGVfY29udGVudF9jc3Mge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jZW50ZXJJbWcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmRhZmFmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDcwcHg7XG4gIGNvbG9yOiBncmV5O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmVkaXRJY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmltZy1jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzM0ODZFODtcbn1cblxuLmxvZ2luQnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2ODZiOTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxucGFnZS1ob21lIC5zY3JvbGwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5wYWdlLWhvbWUgI21hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNtYXBfY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzV2aDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/adddealer/adddealer.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/adddealer/adddealer.page.ts ***!
  \***************************************************/
/*! exports provided: AdddealerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdddealerPage", function() { return AdddealerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-service/api-service.service */ "./src/app/services/api-service/api-service.service.ts");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/ngx/index.js");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "./node_modules/@ionic-native/location-accuracy/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/internet-service/internet-service.service */ "./src/app/services/internet-service/internet-service.service.ts");






// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   Marker,
//   GoogleMapsAnimation,
//   MyLocation
// } from '@ionic-native/google-maps/ngx';

// import { GoogleMaps } from '@ionic-native/google-maps/ngx';






var AdddealerPage = /** @class */ (function () {
    function AdddealerPage(router, apiCall, platform, diagnostic, toast, networkService, toastCtrl, googleMaps, locationAccuracy, geolocation, nativeGeocoder, changeDetectorRef, camera) {
        this.router = router;
        this.apiCall = apiCall;
        this.platform = platform;
        this.diagnostic = diagnostic;
        this.toast = toast;
        this.networkService = networkService;
        this.toastCtrl = toastCtrl;
        this.googleMaps = googleMaps;
        this.locationAccuracy = locationAccuracy;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.changeDetectorRef = changeDetectorRef;
        this.camera = camera;
        this.showMap = 1;
        this.profilePic = "";
        this.urls = [];
        this.loc = {};
        this.dealerModel = {};
    }
    AdddealerPage.prototype.ionViewWillEnter = function () {
        // this.initMap();
    };
    AdddealerPage.prototype.detectEventGallery = function (event) {
        console.log(event);
        var files = event.target.files;
        console.log(files);
        if (files) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var reader = new FileReader();
                reader.onload = function (e) {
                };
                console.log(file);
                this.fileToUpload = file;
                reader.readAsDataURL(this.fileToUpload);
            }
            this.handleFileInput(this.fileToUpload); // 1 for event gallery upload 
        }
        // console.log("file uploaded::"+JSON.stringify(this.fileToUpload));
    };
    AdddealerPage.prototype.handleFileInput = function (files) {
        var _this = this;
        if (this.fileToUpload == null || this.fileToUpload == undefined) {
        }
        var url = "http://3.6.135.154:9000/api/" + "upload-image";
        console.log("check url : " + url);
        this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(function (MyResponse) {
            _this.urls.push(MyResponse['result']['url']);
            _this.profilePic = MyResponse['result']['url'];
            console.log("print url resonce:" + _this.urls);
        }, function (error) {
            console.log(error);
        });
    };
    AdddealerPage.prototype.handleAddressChange = function (data) {
        console.log("Address Data", data);
        this.lattitude = data.geometry.location.lat();
        this.longitude = data.geometry.location.lng();
        console.log("Address Data lattitude one::", this.lattitude);
        console.log("Address Data longitude one::", this.longitude);
        this.loadMap();
        // this.addMarker();
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
    AdddealerPage.prototype.addMarker = function () {
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
                                this.getAddressFromCoords(event[0]['lat'], event[0]['lng']);
                                console.log("Address Data lattitude three::", this.lattitude);
                                console.log("Address Data longitude three::", this.longitude);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    AdddealerPage.prototype.captureImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            // this.profilePic = imageData;
            _this.handleFileInput(imageData);
            console.log("check base64 image::" + base64Image);
            console.log("capture image::" + imageData);
        }, function (err) {
            // Handle error
        });
    };
    AdddealerPage.prototype.goBackword = function () {
        this.router.navigate(['/dealerslist']);
    };
    AdddealerPage.prototype.addDealerData = function (data) {
        var _this = this;
        if (this.profilePic == "") {
            alert("Please upload image first");
        }
        else {
            console.log("dealer dayta::" + JSON.stringify(data));
            var send_data = {};
            send_data['name'] = this.dealerModel['fname'];
            send_data['mobile'] = this.dealerModel['mobile'];
            send_data['email'] = this.dealerModel['email'];
            send_data['username'] = this.dealerModel['uname'];
            send_data['city'] = this.cityName;
            send_data['state'] = this.stateName;
            send_data['country'] = this.countryName;
            send_data['address'] = this.loc['address'];
            if (this.pincode == "" || this.pincode == null || this.pincode == undefined) {
                send_data['pincode'] = "123456";
            }
            else {
                send_data['pincode'] = this.pincode;
            }
            send_data['pincode'] = this.pincode;
            send_data['latitude'] = this.lattitude;
            send_data['longitude'] = this.longitude;
            send_data['password'] = this.dealerModel['password'];
            send_data['extraFields'] = {};
            send_data['isActive'] = 1;
            // send_data['password'] = this.lattitude;
            send_data['image'] = this.profilePic;
            console.log("Show users data::" + JSON.stringify(data));
            var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].base_url + "roles/" + 2 + "/users";
            this.apiCall.post(url, send_data).subscribe(function (MyResponse) {
                // alert("success:" + MyResponse);
                _this.router.navigate(['/dealerslist']);
                _this.presentToast(MyResponse['message']);
                // this.leadList = MyResponse['result']['list'];
            }, function (error) {
                _this.networkService.checkInternetConnection();
                _this.networkService.onPageLoadCheckInternet();
                _this.presentToast(error['message']);
            });
        }
    };
    AdddealerPage.prototype.presentToast = function (message) {
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
    AdddealerPage.prototype.requestAccuracy = function () {
        var _this = this;
        this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function (val) {
                    console.log('Request successful.', val);
                }, function (error) {
                    console.log('Error requesting location permissions', error);
                });
            }
        });
    };
    AdddealerPage.prototype.ngOnInit = function () {
        // this.getCurrentPosition();
        console.log("im onit");
        // this.loader.showBlockingLoaderAuth();
        //  this.storage.get('location_data').then((val)=>{
        //    console.log("latlng val",val)
        //    if(val != null){
        //     this.loc = val;
        //     this.lattitude = this.loc['lat'];
        //     this.longitude = this.loc['lng'];
        //     this.load();
        //    }
        //    else{
        //     this.platform.ready().then((val) => {
        //      this.getCurrentPosition();
        //     })
        //    }
        //  })
    };
    AdddealerPage.prototype.getCurrentPosition = function () {
        var _this = this;
        console.log("current pos call");
        var options = { enableHighAccuracy: true };
        this.geolocation.getCurrentPosition(options).then(function (resp) {
            console.log("cord", resp.coords.latitude, resp.coords.longitude);
            _this.lattitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            _this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
            _this.load();
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    AdddealerPage.prototype.load = function () {
        var _this = this;
        try {
            this.platform.ready().then(function (val) {
                _this.loadMap();
            });
        }
        catch (err) {
            console.log("location", err);
        }
    };
    AdddealerPage.prototype.getAddressFromCoords = function (lattitude, longitude) {
        var _this = this;
        try {
            console.log("getAddressFromCoords " + lattitude + " " + longitude);
            var options = {
                useLocale: true,
                maxResults: 5
            };
            this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
                .then(function (result) {
                _this.address = "";
                var responseAddress = [];
                console.log("result", result);
                _this.loc = {};
                _this.loc['location'] = result[0]['subLocality'] + ", " + result[0]['locality'] + ", " + result[0]['subAdministrativeArea'];
                _this.loc['address'] = result[0]['thoroughfare'];
                _this.cityName = result[0]['subAdministrativeArea'] == "" ? result[0]['locality'] : result[0]['subAdministrativeArea'];
                _this.stateName = result[0]['administrativeArea'];
                _this.countryName = result[0]['countryName'];
                // this.loader.hideBlockingLoaderAuth();
                // for (let [key, value] of Object.entries(result[0])) {
                //   if(value.length>0)
                //   responseAddress.push(value);
                // }
                console.log("address", _this.loc);
            })
                .catch(function (error) {
                _this.address = "Address Not Available!";
                // this.loader.hideBlockingLoaderAuth();
            });
        }
        catch (err) {
            console.log("get address function", err);
            // this.loader.hideBlockingLoaderAuth();
        }
    };
    AdddealerPage.prototype.loadMap = function () {
        var _this = this;
        try {
            console.log("lat lng", this.longitude, this.lattitude);
            this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMaps"].create('map_canvas', {
                camera: {
                    target: {
                        lat: this.lattitude,
                        lng: this.longitude
                    },
                    zoom: 18,
                    tilt: 30
                }
            });
            console.log("Address Data lattitude two::", this.lattitude);
            console.log("Address Data longitude two::", this.longitude);
            this.showMap = 0;
            this.map.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsEvent"].MAP_READY).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var marker;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log("Click MAP", data);
                            return [4 /*yield*/, this.map.animateCamera({
                                    target: {
                                        lat: this.lattitude,
                                        lng: this.longitude
                                    },
                                    zoom: 17,
                                    duration: 2000
                                })];
                        case 1:
                            _a.sent();
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
                                })
                                // marker.on(GoogleMapsEvent.MARKER_DRAG_END)
                                // .subscribe((event) => {
                                //   console.log("drag end",event);
                                // });
                            ];
                        case 2:
                            marker = _a.sent();
                            // marker.on(GoogleMapsEvent.MARKER_DRAG_END)
                            // .subscribe((event) => {
                            //   console.log("drag end",event);
                            // });
                            this.getAddressFromCoords(event[0]['lat'], event[0]['lng']);
                            return [2 /*return*/];
                    }
                });
            }); });
        }
        catch (err) {
            // this.loader.hideBlockingLoaderAuth();
            console.log("loadmap function", err);
        }
    };
    AdddealerPage.prototype.goToMyLocation = function () {
        var _this = this;
        try {
            this.diagnostic.getLocationAuthorizationStatus().then(function (successCallback) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    console.log("success", successCallback);
                    this.requestAccuracy();
                    return [2 /*return*/];
                });
            }); });
            // this.loader.hideBlockingLoaderAuth();
        }
        catch (err) {
            // this.loader.hideBlockingLoaderAuth();
            console.log("go to my location function", err);
        }
    };
    AdddealerPage.prototype.showToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 2000,
                            position: 'middle'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // async goBackword() {
    //   let send_data = {};
    //   send_data['lat'] = this.lattitude;
    //   send_data['lng'] = this.longitude;
    //   send_data['location'] = this.loc['location'];
    //   send_data['address'] = this.loc['address'];
    //   send_data['landmark'] = this.loc['landmark'];
    //   send_data['cityName'] = this.cityName;
    //   send_data['stateName'] = this.stateName;
    //   send_data['countryName'] = this.countryName;
    // }
    AdddealerPage.prototype.refresh = function () {
        this.ngOnInit();
    };
    AdddealerPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_5__["ApiServiceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"] },
        { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_7__["Diagnostic"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"] },
        { type: src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_12__["InternetServiceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"] },
        { type: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMaps"] },
        { type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__["LocationAccuracy"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"] },
        { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeGeocoder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AdddealerPage.prototype, "mapElement", void 0);
    AdddealerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adddealer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adddealer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/adddealer/adddealer.page.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adddealer.page.scss */ "./src/app/pages/adddealer/adddealer.page.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_api_service_api_service_service__WEBPACK_IMPORTED_MODULE_5__["ApiServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["Platform"],
            _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_7__["Diagnostic"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"],
            src_app_services_internet_service_internet_service_service__WEBPACK_IMPORTED_MODULE_12__["InternetServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"],
            _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMaps"],
            _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__["LocationAccuracy"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"],
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeGeocoder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]])
    ], AdddealerPage);
    return AdddealerPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-adddealer-adddealer-module.js.map