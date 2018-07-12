import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// COMPONENTS
import { HomeComponent } from './pages/home/home.component';
import { MonitoringDashboardComponent } from './pages/monitoring-dashboard/monitoring-dashboard.component';
import { DashboardMenuComponent } from './pages/monitoring-dashboard/dashboard-menu/dashboard-menu.component';
import { HistoryComponent } from './pages/monitoring-dashboard/history/history.component';
import { ManageDevicesComponent } from './pages/monitoring-dashboard/manage-devices/manage-devices.component';
import { DeviceMenuComponent } from './pages/monitoring-dashboard/history/device-menu/device-menu.component';
import { WmsComponent } from './pages/monitoring-dashboard/history/wms/wms.component';
import { GlrComponent } from './pages/monitoring-dashboard/history/glr/glr.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignUpComponent },
        ]
    },
    {
        path: 'monitoring-dashboard', component: MonitoringDashboardComponent, children: [
            { path: '', component: DashboardMenuComponent },
            {
                path: 'history', component: HistoryComponent, children: [
                    { path: '', component: DeviceMenuComponent },
                    { path: 'wms', component: WmsComponent },
                    { path: 'glr', component: GlrComponent },
                ]
            },
            {
                path: 'manage-devices', component: ManageDevicesComponent
            }

        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
