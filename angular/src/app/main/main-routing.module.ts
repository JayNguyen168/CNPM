import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                children: [
                    {
                        path: 'dashboard',
                        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
                        data: { permission: 'Pages.Tenant.Dashboard' },
                    },
                    {
                        path: 'quan-ly-van-ban',
                        loadChildren: () => import('./quanlyvanban/quanlyvanban.module').then(m => m.QuanlyvanbanModule)
                    },
                    {
                        path: 'don-vi-kham-chua-benh',
                        loadChildren: () => import('./donvikhamchuabenh/donvikhamchuabenh.module').then(m => m.DonvikhamchuabenhModule)
                    },
                    {
                        path: 'document',
                        loadChildren: () => import('./document/document.module').then(m => m.DocumentModule)
                    },    
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: '**', redirectTo: 'dashboard' },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class MainRoutingModule {}
