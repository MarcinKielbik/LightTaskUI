import { Component } from '@angular/core';
import { HomeService, Task } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
tasks: Task[] = [];

  constructor(private homeService: HomeService) {}

  /*ngOnInit(): void {
    this.homeService.getAllTasks().subscribe((data) => {
      this.tasks = data;
      console.log(data)
    });
  }*/

    ngOnInit(): void {
    this.homeService.getAllTasks().subscribe({
      next: (data) => {
        this.tasks = data;
        console.log('Odebrane zadania:', data);
      },
      error: (err) => {
        console.error('Błąd pobierania zadań:', err);
      }
    });
  }
}
