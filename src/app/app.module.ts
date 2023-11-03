import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EnterDetailsComponent } from './enter-details/enter-details.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { FormsModule } from '@angular/forms';
import { userDetailsComponent } from './show-details/user-details/user-details.component';
import { userReposComponent } from './show-details/user-repos/user-repos.component';
@NgModule({
  declarations: [
    AppComponent,
    EnterDetailsComponent,
    ShowDetailsComponent,
    userDetailsComponent,
    userReposComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
