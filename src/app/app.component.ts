import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // title = 'multiLangsApp';

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
      this.updateTitle();
    });
  }
  constructor(
    private _Renderer2: Renderer2,
    private translate: TranslateService,
    private titleService: Title
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  updateTitle() {
    this.translate.get('app.title').subscribe((res: string) => {
      this.titleService.setTitle(res);
    });
  }
  scrolTop(): void {
    this._Renderer2.setProperty(document.documentElement, 'scrollTop', 0);
  }
}
