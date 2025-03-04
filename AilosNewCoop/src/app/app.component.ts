import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/infrastructure/sidebar/sidebar.component";
import { HeaderComponent } from "./components/infrastructure/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Ailos';
}
