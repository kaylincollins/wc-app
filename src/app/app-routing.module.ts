import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book.component';
import { FormComponent } from './form/form.component';
import { AdminComponent } from './admin/admin.component';
import { TipsComponent } from './tips/tips.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'tips',
    component: TipsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
