import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import {LoginComponent} from "~/app/login/login.component";
import {AuthenticationService} from "~/app/services/authentication.service";

import {HttpClientModule} from "@angular/common/http";
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './components/list/list.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import {BooksService} from "~/app/services/books.service";
import {UserService} from "~/app/services/user.service";
import {NativeScriptUIListViewModule} from "nativescript-ui-listview/angular";
import { DetailComponent } from './detail/detail.component';
import {NativeScriptFormsModule} from "nativescript-angular";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        HttpClientModule,
        NativeScriptUIListViewModule,
        NativeScriptFormsModule

    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        LoginComponent,
        ItemDetailComponent,
        TabsComponent,
        ListComponent,
        Tab1Component,
        Tab2Component,
        Tab3Component,
        DetailComponent
    ],
    providers: [AuthenticationService, BooksService, UserService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
