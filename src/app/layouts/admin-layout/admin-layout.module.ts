import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { NvD3Module } from 'ng2-nvd3';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'd3';
import 'nvd3';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { UserDataComponent } from 'app/user-data/user-data.component';
import { FeaturesComponent } from 'app/features/features.component';
import { ProductDetailsComponent } from 'app/product-details/product-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NvD3Module,HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [
    DashboardComponent,
    UserDataComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    FeaturesComponent,
    ProductDetailsComponent,
  ],
})

export class AdminLayoutModule {}
