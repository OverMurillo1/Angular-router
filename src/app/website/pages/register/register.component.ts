import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OnExit } from 'src/app/guards/exit.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnExit {

  constructor() { }
  onExit!: () => boolean | Observable<boolean> | Promise<boolean>;

  ngOnInit(): void {
  }

  OnExit(){
    const rta = confirm('Vas a salir ?');
    return rta
  }
}
