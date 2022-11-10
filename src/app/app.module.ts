import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DonutListComponent } from './components/donut-list/donut-list.component';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes:Routes = [
  {path:'donuts', component: DonutListComponent},
  {path:'donuts/:id', component: DonutDetailsComponent},
  {path:"cart", component: CartPageComponent},
  {path: '', redirectTo: '/donuts', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DonutListComponent,
    DonutDetailsComponent,
    CartPageComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
