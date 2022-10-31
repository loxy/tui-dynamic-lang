import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiTablePaginationModule } from '@taiga-ui/addon-table';
import { TuiAlertModule, TuiButtonModule, TuiDialogModule, TuiRootModule } from "@taiga-ui/core";
import { TuiLanguageName, tuiLanguageSwitcher } from '@taiga-ui/i18n';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiTablePaginationModule
],
  providers: [
    tuiLanguageSwitcher(
      /**
       * @note:
       * then the i18n language files will be loaded from node_modules
       */
      async (language: TuiLanguageName): Promise<unknown> =>
        import(
          /* webpackMode: "lazy" */
          /* webpackChunkName: "i18n-lazy-" */
          `@taiga-ui/i18n/languages/${language}`
          //`@taiga-ui/i18n/languages/${language}/index.d`
          // also you can override the paths to your i18n language files
          )
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
