import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DetailComponent } from "./detail/detail.component";
import { FavoritComponent } from "./favorit/favorit.component";
import { GlobalvarService } from "./globalvar.service";

const ROUTES: Routes = [
  { path: "detail", component: DetailComponent },
  { path: "detail/:judul", component: DetailComponent },
  { path: "favorit", component: FavoritComponent },
  { path: "input", component: AppComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  declarations: [
    AppComponent,
    HelloComponent,
    DetailComponent,
    FavoritComponent
  ],
  bootstrap: [AppComponent],
  providers: [GlobalvarService]
})
export class AppModule {}
