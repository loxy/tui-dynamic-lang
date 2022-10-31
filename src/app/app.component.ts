import { Component, Inject } from '@angular/core';
import { TuiLanguageSwitcher } from '@taiga-ui/i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    @Inject(TuiLanguageSwitcher) readonly switcher: TuiLanguageSwitcher
  ) {}

  selectLang(lang: string) {
    this.switcher.setLanguage(lang);
  }
}
