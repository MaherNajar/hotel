import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambresSuitesComponent } from './chambres-suites.component';

describe('ChambresSuitesComponent', () => {
  let component: ChambresSuitesComponent;
  let fixture: ComponentFixture<ChambresSuitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChambresSuitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChambresSuitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
