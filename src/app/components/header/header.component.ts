import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth-service/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  tokenData: any; 
  errorMessage: string | undefined;

  constructor(private authService : AuthService){}


  ngOnInit(): void {
    this.authenticateApplication();
  }

  authenticateApplication(): void {
    this.authService.authenticate().subscribe({
      next: (response) => {
        console.log('Autenticado:', response);
        this.tokenData = response; // Guarda el token recibido
      },
      error: (error) => {
        console.error('Error de autenticación:', error);
        this.errorMessage = 'Error al autenticar.';
      },
    });
  }

}
