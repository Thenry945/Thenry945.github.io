"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var technologies_component_1 = require("./technologies.component");
var education_component_1 = require("./education.component");
var contact_component_1 = require("./contact.component");
var notfound_component_1 = require("./notfound.component");
var appRoutes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: home_component_1.AppHome },
    { path: 'About', component: about_component_1.AppAbout },
    { path: 'Technologies', component: technologies_component_1.AppTechnologies },
    { path: 'Education', component: education_component_1.AppEducation },
    { path: 'Contact', component: contact_component_1.AppContact },
    { path: '**', component: notfound_component_1.AppPageNotFound }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes), http_1.HttpModule],
        declarations: [app_component_1.AppComponent, home_component_1.AppHome, about_component_1.AppAbout, technologies_component_1.AppTechnologies, education_component_1.AppEducation, contact_component_1.AppContact, notfound_component_1.AppPageNotFound],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map