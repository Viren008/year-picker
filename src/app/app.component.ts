import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { YearPickerModule } from '@viren_chudasama/year-picker';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,YearPickerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'year-picker-demo';

  onYearSelected(e:any){
console.log(e);
  }
}
