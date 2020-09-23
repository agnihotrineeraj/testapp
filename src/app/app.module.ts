import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from  '@angular/router'
import { AppComponent } from './app.component';
import { TestingComponent } from './testing/testing.component';
import { AppdemoComponent } from './appdemo/appdemo.component';
import { CommonService } from './common.service';
import {HttpClientModule} from '@angular/common/http'
const app :Routes  = [{path: '',component:TestingComponent},{path: 'add',component:AppComponent}];
@NgModule({
  declarations: [
    AppComponent,
    TestingComponent,
    AppdemoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(app),
    HttpClientModule
  ],
  providers: [CommonService],
  bootstrap: [AppdemoComponent]
})
export class AppModule { }
