import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDisplayComponent } from './post-display/post-display.component';
import { FormsModule } from '@angular/forms';
import { PostCreateComponent } from './post-create/post-create.component';
import { NewpostComponent } from './newpost/newpost.component';
import { PostUpdateComponent } from './post-update/post-update.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDisplayComponent,
    PostCreateComponent,
    NewpostComponent,
    PostUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
