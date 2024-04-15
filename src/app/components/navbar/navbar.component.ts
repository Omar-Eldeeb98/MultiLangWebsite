import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private _TranslateService: TranslateService) {}

  ngOnInit(): void {}

  switchLang(lang: string): void {
    this._TranslateService.use(lang);
  }
}
