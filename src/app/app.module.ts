import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/*
  Defines a module that contains components, directives, pipes, and providers.
*/
@NgModule({
  /*
    List of modules to import into this module. 
    Everything from the imported modules is available to declarations of this module.
  */
  imports: [
    BrowserModule,
  ],
  // List of components, directives, and pipes that belong to this module.
  declarations: [AppComponent],
  /*
    List of dependency injection providers visible both to the contents of this module and to importers of this module.
  */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
