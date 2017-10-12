"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var education_service_1 = require("./education.service");
var AppEducation = (function () {
    function AppEducation(_educationService) {
        this._educationService = _educationService;
    }
    AppEducation.prototype.ngOnInit = function () {
        var _this = this;
        this._educationService.getDegrees().subscribe(function (idegrees) { return _this.degrees = idegrees; });
    };
    return AppEducation;
}());
AppEducation = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'templates/education.html',
        providers: [education_service_1.EducationService]
    }),
    __metadata("design:paramtypes", [education_service_1.EducationService])
], AppEducation);
exports.AppEducation = AppEducation;
//# sourceMappingURL=education.component.js.map