import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

@NgModule({
  imports: [BrowserModule, FormsModule, NgxSkeletonLoaderModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
