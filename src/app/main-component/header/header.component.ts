import { Component, OnInit } from '@angular/core';
import { IMotors } from '../../Modules/i-motors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchInput: string = '';
  motors!: IMotors[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    fetch('db.json')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('errore');
        }
      })
      .then((res) => {
        this.motors = res;
      })
      .catch((e) => console.log(e));
  }

  onSearch(): void {
    console.log('Input di ricerca:', this.searchInput);

    const found = this.motors.find(
      (motor) => motor.model.toLowerCase() === this.searchInput.toLowerCase()
    );

    if (found) {
      this.router.navigate(['/detail', found.brand], {
        state: { available: found.available },
      });
    } else {
      alert('Moto non trovata');
    }
  }
}
