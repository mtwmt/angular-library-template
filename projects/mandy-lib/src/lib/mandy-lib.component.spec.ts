import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandyLibComponent } from './mandy-lib.component';

describe('MandyLibComponent', () => {
  let component: MandyLibComponent;
  let fixture: ComponentFixture<MandyLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandyLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
