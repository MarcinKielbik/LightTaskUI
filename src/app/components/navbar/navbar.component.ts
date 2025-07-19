import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

    private router = inject(Router);


    navigateToHome(): void {

    }

    navigateToCreateNewTaskForm(): void {
        this.router.navigate(['/new-task']);

  }

}
