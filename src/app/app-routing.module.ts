import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './ui/login/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'categories',
    loadChildren: () =>
      import('./ui/categories/categories.module').then((m) => m.CategoriesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
