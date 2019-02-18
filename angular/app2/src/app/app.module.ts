import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { NewempComponent } from './newemp/newemp.component';
import { RemoveempComponent } from './removeemp/removeemp.component';
import {FormsModule} from '@angular/forms';
//import { from } from 'rxjs';
import { RouterModule, Routes} from '@angular/router';
import { ServiceTestService } from '../app/myservice/service-test.service';

//cookie
import {CookieService} from 'angular2-cookie/services/cookies.service';


const appRoutes:Routes = [
  {path: '', component: ViewempComponent},
  {path: 'newemp', component: NewempComponent},
  {path: 'viewemp', component: ViewempComponent},
  {path: 'editemp', component: EditempComponent},
  {path: 'removeemp', component: RemoveempComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ViewempComponent,
    EditempComponent,
    NewempComponent,
    RemoveempComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [ServiceTestService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
