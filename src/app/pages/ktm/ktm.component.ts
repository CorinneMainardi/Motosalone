import { Component, OnInit } from '@angular/core';
import { IMotors } from '../../Modules/i-motors';

@Component({
  selector: 'app-ktm',
  templateUrl: './ktm.component.html',
  styleUrl: './ktm.component.scss',
})
export class KtmComponent implements OnInit {
  ktmArr!: IMotors[];
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
        this.ktmArr = res.filter((moto: IMotors) => moto.brand === 'ktm');
      })
      .catch((err) => {
        console.log('ERRORE');
      });
  }
}
