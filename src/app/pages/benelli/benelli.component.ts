import { Component, OnInit } from '@angular/core';
import { IMotors } from '../../Modules/i-motors';

@Component({
  selector: 'app-benelli',
  templateUrl: './benelli.component.html',
  styleUrl: './benelli.component.scss',
})
export class BenelliComponent implements OnInit {
  benelliArr!: IMotors[];
  ngOnInit() {
    fetch('db.json')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('errore nella richiesta');
        }
      })
      .then((res) => {
        this.benelliArr = res.filter(
          (moto: IMotors) => moto.brand === 'benelli'
        );
      })
      .catch((err) => {
        console.log('ERRORE');
      });
  }
}
