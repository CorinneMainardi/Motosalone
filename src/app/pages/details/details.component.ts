import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMotors } from '../../Modules/i-motors';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  motor: IMotors[] = [];
  available: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      fetch('db.json')
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('La risposta non è un 200');
          }
        })
        .then((res: IMotors[]) => {
          const foundMotor = res.find(
            (motor) =>
              motor.brand.toLowerCase() === params['brand'].toLowerCase()
          );

          if (foundMotor) {
            this.motor = [foundMotor];
            this.available = this.motor[0].available;
          } else {
            console.error('Moto non trovata');
            this.motor = [];
          }
        })

        .catch((err) => console.log(err));
    });
  }
}
