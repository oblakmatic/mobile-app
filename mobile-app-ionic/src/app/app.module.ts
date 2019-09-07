import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {BooksService} from './services/books-service.service';
import { AuthenticateService } from './services/authentication.service';

import {HttpClientModule} from '@angular/common/http';

import {AngularFireAuthModule} from '@angular/fire/auth';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {UserService} from './services/user.service';
import {AuthGuard} from './auth.guard';
import {GooglePlus} from '@ionic-native/google-plus/ngx';

import {ComponentsModule} from './components/components.module';
import {NgwWowModule} from 'ngx-wow';
import {NavigationService} from './services/navigation.service';
import {DeviceMotion} from '@ionic-native/device-motion/ngx';
import {ShakeService} from './services/shake.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      AngularFireAuthModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      ComponentsModule,
      NgwWowModule
  ],
  providers: [
      StatusBar,
      SplashScreen,
      BooksService,
      AuthenticateService,
      AuthGuard,
      UserService,
      NavigationService,
      GooglePlus,
      DeviceMotion,
      ShakeService,
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
