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
  motors!: IMotors[];
  images: { src: string }[] = [];

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
        this.motorsKtm = shuffleKtm(this.motorsKtm);
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
        this.motorsKawasaki = shuffleKawasaki(this.motorsKawasaki);
        this.motors = [
          ...this.motorsBenelli,
          ...this.motorsKtm,
          ...this.motorsKawasaki,
        ];
        this.images = this.motors.map((moto) => ({ src: moto.modelImage }));
      })

      .catch((err) => {
        console.log(err);
      });
  }
}
