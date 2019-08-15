import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaBienEtreComponent } from './spa-bien-etre.component';

describe('SpaBienEtreComponent', () => {
  let component: SpaBienEtreComponent;
  let fixture: ComponentFixture<SpaBienEtreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaBienEtreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaBienEtreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
