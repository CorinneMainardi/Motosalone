import { Component, OnInit } from '@angular/core';
import { IMotors } from '../../Modules/i-motors';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  motorsBenelli!: IMotors[];
  motorsKtm!: IMotors[];
  motorsKawasaki!: IMotors[];

  ngOnInit(): void {
    fetch('db.json')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('errore nella richiesta');
        }
      })
      .then((res) => {
        this.motorsBenelli = res.filter(
          (moto: IMotors) => moto.brand === 'benelli'
        );
        const shuffleBenelli = (array: IMotors[]) => {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };
        this.motorsBenelli = shuffleBenelli(this.motorsBenelli);
        this.motorsKtm = res.filter((moto: IMotors) => moto.brand === 'ktm');
        const shuffleKtm = (array: IMotors[]) => {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };
        this.motorsKtm = shuffleBenelli(this.motorsKtm);
        this.motorsKawasaki = res.filter(
          (moto: IMotors) => moto.brand === 'kawasaki'
        );
        const shuffleKawasaki = (array: IMotors[]) => {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };
        this.motorsKawasaki = shuffleBenelli(this.motorsKawasaki);
      })
      .catch((err) => {
        console.log('ERRORE');
      });
  }
}
