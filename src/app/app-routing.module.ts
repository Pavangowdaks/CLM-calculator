import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./calculator/pages/calculator/calculator.module').then( m => m.CalculatorPageModule)
  },
  {
    path: 'dashboards',
    loadChildren: () => import('./dashboard/pages/dashboards/dashboards.module').then( m => m.DashboardsPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'sign-out',
    loadChildren: () => import('./sign-out/pages/sign-out/sign-out.module').then( m => m.SignOutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
