import { Component } from '@angular/core';
import { HomeService, Task } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  tasks: Task[] = [];

  isLoading = true;

  searchTerm = '';

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
        this.isLoading = false;
        console.log('Odebrane zadania:', data);
      },
      error: (err) => {
        console.error('Błąd pobierania zadań:', err);
        this.isLoading = false;
      }
    });
  }

  filteredTasks(): Task[] {
  return this.tasks.filter(task =>
    task.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}
}
