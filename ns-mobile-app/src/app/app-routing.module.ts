import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {LoginComponent} from "~/app/login/login.component";
import {TabsComponent} from "~/app/tabs/tabs.component";
import {DetailComponent} from "~/app/detail/detail.component";
import {Tab2Component} from "~/app/tab2/tab2.component";

const routes: Routes = [
    // { path: "", redirectTo: "/items", pathMatch: "full" },
     { path: "", component: TabsComponent },
    { path: "tabs", component: TabsComponent },
    { path: "detail/:id", component: DetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
