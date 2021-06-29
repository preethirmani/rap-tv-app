import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageDescriptionComponent } from './pagedescription/page-description.component';
import { DescriptionService } from './description.service';






@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PageDescriptionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [DescriptionService],

   bootstrap: [AppComponent],
})
export class AppModule { }
