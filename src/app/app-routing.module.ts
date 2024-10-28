import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashiondetailComponent } from './fashiondetail/fashiondetail.component';
import { FashionpostComponent } from './fashionpost/fashionpost.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'fashion', component: FashionComponent},
  {path: 'fashiondetail/:id', component: FashiondetailComponent},
  {path: 'fashionpost', component: FashionpostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
