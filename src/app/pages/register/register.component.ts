import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private _TranslateService: TranslateService) {}

  ngOnInit(): void {}

  switchLang(lang: string): void {
    this._TranslateService.use(lang);
  }
}
