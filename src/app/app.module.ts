import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material-module/material.module';
import { ParticlesModule } from 'angular-particle';
// ######################### COMPONENTS
import{ HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MonitoringDashboardComponent } from './pages/monitoring-dashboard/monitoring-dashboard.component';
import { WmsComponent } from './pages/monitoring-dashboard/history/wms/wms.component';



import { WindowRef } from './services/window.service';
import { AdminComponent } from './pages/admin/admin.component'
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { NewCustomerComponent } from './pages/admin/dashboard/new-customer/new-customer.component';
import { EditExistingComponent } from './pages/admin/dashboard/edit-existing/edit-existing.component'
import { AdminLoginComponent } from './pages/admin/admin-login/admin-login.component';
import { AdminService } from './pages/admin/admin.service';
import { AuthService } from './services/auth.service';
import { DataStoreService} from './services/data-store.service';
import { ResolveParamsService } from './services/resolve-params.service';
import { DeviceMenuComponent } from './pages/monitoring-dashboard/history/device-menu/device-menu.component';
import { LoginComponent } from './components/login/login.component';
import { WidgetsComponent } from './pages/monitoring-dashboard/history/wms/widgets/widgets.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TilesComponent } from './pages/monitoring-dashboard/history/wms/widgets/tiles/tiles.component';
import { LoaderComponent } from './components/loader/loader.component';
import { WmsGraphComponent } from './pages/monitoring-dashboard/history/wms/widgets/wms-graph/wms-graph.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { WindRoseComponent } from './pages/monitoring-dashboard/history/wms/widgets/wind-rose/wind-rose.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HistoryComponent } from './pages/monitoring-dashboard/history/history.component';
import { DashboardMenuComponent } from './pages/monitoring-dashboard/dashboard-menu/dashboard-menu.component';
import { GlrComponent } from './pages/monitoring-dashboard/history/glr/glr.component';
import { ManageDevicesComponent } from './pages/monitoring-dashboard/manage-devices/manage-devices.component';
import { ErrorsDirective } from './directives/errors.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GraphsComponent,
    MonitoringDashboardComponent,
    WmsComponent,
    DeviceMenuComponent,
    LoginComponent,
    WidgetsComponent,
    SidenavComponent,
    TilesComponent,
    LoaderComponent,
    WmsGraphComponent,
    WindRoseComponent,
    DashboardComponent,
    AdminComponent,
    NewCustomerComponent,
    EditExistingComponent,
    AdminLoginComponent,
    SignUpComponent,
    HistoryComponent,
    DashboardMenuComponent,
    GlrComponent,
    ManageDevicesComponent,
    ErrorsDirective

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    ParticlesModule
  ],
  providers: [
    WindowRef,
    DataStoreService,
    AuthService,
    ResolveParamsService,
    AdminService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
