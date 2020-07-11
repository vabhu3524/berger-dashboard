import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NvD3Module } from 'ng2-nvd3';

import 'd3';
//import * as d3 from 'd3';

import 'nvd3';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardService } from './services/dashboard.service';
import { FrontInterceptor } from './front.interceptor';
import { LoginModule } from './login/login.module';
import { AuthGuard } from 'app/authguard.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    LoginModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    // }),
    NvD3Module,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,


  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: FrontInterceptor,
    multi: true,
  },DashboardService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
