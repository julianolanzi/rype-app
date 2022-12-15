import { LocalStorageUtils } from './../../utils/localstorage';
import { CommingSoonComponent } from './../../pages/site/comming-soon/comming-soon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from 'src/app/pages/site/loading/loading.component';
import { HomeComponent } from 'src/app/pages/admin/home/home.component';
import { TeamsComponent } from 'src/app/pages/admin/teams/teams.component';
import { ComponetsModule } from "../../components/componets.module";
import { BuildComponent } from 'src/app/pages/admin/build/build.component';

@NgModule({
    declarations: [
        AdminLayoutComponent,
        CommingSoonComponent,
        HomeComponent,
        TeamsComponent,
        BuildComponent,
    ],
    providers: [LocalStorageUtils],
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        HttpClientModule,
        ComponetsModule
    ]
})
export class AdminLayoutModule {}
