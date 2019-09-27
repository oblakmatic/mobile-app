import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import {LoginComponent} from "~/app/login/login.component";
import {TabsComponent} from "~/app/tabs/tabs.component";
import {DetailComponent} from "~/app/detail/detail.component";

const routes: Routes = [

     { path: "", component: LoginComponent },
    { path: "tabs", component: TabsComponent },
    { path: "detail/:id", component: DetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
