/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
import * as i0 from "./home.component.css.shim.ngstyle";
import * as i1 from "@angular/core";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "./home.component";
import * as i5 from "../services/auth.service";
var styles_HomeComponent = [i0.styles];
var RenderType_HomeComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_HomeComponent, data: {} });
export { RenderType_HomeComponent as RenderType_HomeComponent };
function View_HomeComponent_1(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i1.ɵted(1, null, [" Welcome ", "\n"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.authService.currentUser()["userId"]; _ck(_v, 1, 0, currVal_0); }); }
function View_HomeComponent_2(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "a", [["routerLink", "/admin"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Admin"]))], function (_ck, _v) { var currVal_2 = "/admin"; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_HomeComponent_3(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "a", [["routerLink", "/login"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Login"]))], function (_ck, _v) { var currVal_2 = "/login"; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_HomeComponent_4(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 2, "a", [["routerLink", "/"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i1.ɵnov(_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.authService.logout() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), i1.ɵdid(2, 671744, null, 0, i2.RouterLinkWithHref, [i2.Router, i2.ActivatedRoute, i3.LocationStrategy], { routerLink: [0, "routerLink"] }, null), (_l()(), i1.ɵted(-1, null, ["Logout"]))], function (_ck, _v) { var currVal_2 = "/"; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = i1.ɵnov(_v, 2).target; var currVal_1 = i1.ɵnov(_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
export function View_HomeComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ["Home Page"])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_1)), i1.ɵdid(3, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵeld(4, 0, null, null, 6, "ul", [], null, null, null, null, null)), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_2)), i1.ɵdid(6, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_3)), i1.ɵdid(8, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_HomeComponent_4)), i1.ɵdid(10, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.authService.isLoggedIn(); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_co.authService.isLoggedIn() && _co.authService.currentUser()["admin"]); _ck(_v, 6, 0, currVal_1); var currVal_2 = !_co.authService.isLoggedIn(); _ck(_v, 8, 0, currVal_2); var currVal_3 = _co.authService.isLoggedIn(); _ck(_v, 10, 0, currVal_3); }, null); }
export function View_HomeComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), i1.ɵdid(1, 114688, null, 0, i4.HomeComponent, [i5.AuthService], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HomeComponentNgFactory = i1.ɵccf("app-home", i4.HomeComponent, View_HomeComponent_Host_0, {}, {}, []);
export { HomeComponentNgFactory as HomeComponentNgFactory };
//# sourceMappingURL=home.component.ngfactory.js.map