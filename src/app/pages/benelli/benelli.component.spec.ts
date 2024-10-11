import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenelliComponent } from './benelli.component';

describe('BenelliComponent', () => {
  let component: BenelliComponent;
  let fixture: ComponentFixture<BenelliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BenelliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenelliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
