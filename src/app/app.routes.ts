// import { Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { ProductsComponent } from './products/products.component';
// import { SettingsComponent } from './settings/settings.component';
// import { PagesComponent } from './pages/pages.component';
// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
// import { SignupComponent } from './signup/signup.component';
// export const routes: Routes = [

//   // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
//   { path: '', component: HomeComponent, pathMatch: 'full' },

//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'products', component: ProductsComponent },
//   { path: 'settings', component: SettingsComponent },
//    { path: 'login', component: LoginComponent },
//     { path: 'home', component: HomeComponent },
//     {path:'signup',component:SignupComponent},
//   { path: 'pages', component: PagesComponent },
 
   
// ];


import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  // ✅ Public Routes (NO layout)
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
   { path: 'home', component: HomeComponent },

  // ✅ Protected Routes (WITH layout)
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'pages', component: PagesComponent },
      

    ]
  },
];

