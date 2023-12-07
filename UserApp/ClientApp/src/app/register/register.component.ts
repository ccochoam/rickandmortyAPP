import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register/register.service';
import { Users } from '../user/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      doctoIdent: ['', Validators.required],
      email: ['', Validators.required],
      clave: ['', Validators.required],
      cia: [10, Validators.required]
    });
  }

  onSubmit() {
    const userData: Users = this.registerForm.value as Users;
    this.registerService.register(userData).subscribe((respuesta) => {
      console.log('Respuesta del registro:', respuesta);
      // Resto del código en el componente
      this.router.navigateByUrl('/Home');
    });
    
  }
}
