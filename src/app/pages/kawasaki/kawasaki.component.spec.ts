import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KawasakiComponent } from './kawasaki.component';

describe('KawasakiComponent', () => {
  let component: KawasakiComponent;
  let fixture: ComponentFixture<KawasakiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KawasakiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KawasakiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
