import { Component, OnInit } from '@angular/core';
import { IMotors } from '../../Modules/i-motors';

@Component({
  selector: 'app-kawasaki',
  templateUrl: './kawasaki.component.html',
  styleUrl: './kawasaki.component.scss',
})
export class KawasakiComponent implements OnInit {
  kawasakiArr!: IMotors[];
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
        this.kawasakiArr = res.filter(
          (moto: IMotors) => moto.brand === 'kawasaki'
        );
      })
      .catch((err) => {
        console.log('ERRORE');
      });
  }
}
