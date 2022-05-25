import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgxMapboxGLModule } from "ngx-mapbox-gl";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxMapboxGLModule.withConfig({
      accessToken:
        "pk.eyJ1IjoiYnJhbm5pZ2FuODkiLCJhIjoiY2tjaDFscjlrMGk3NTJ4bGl3Zzg4MXMyNSJ9.m6kVeK4jArfQFpP1-dsYrw" // Optional, can also be set per map (accessToken input of mgl-map)
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
