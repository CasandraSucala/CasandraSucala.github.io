import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isDarkTheme: boolean = true;
  private readonly THEME: string = 'theme';

  public ngOnInit(): void {
    this.isDarkTheme = localStorage.getItem(this.THEME) === Themes.Dark;
  }

  public onThemeChange(): void {
    localStorage.setItem(this.THEME, this.isDarkTheme ? Themes.Dark : Themes.Light);
  }
}

enum Themes {
  Dark = 'Dark',
  Light = 'Light'
}
