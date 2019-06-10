import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnployeesComponent } from './add-enployees.component';

describe('AddEnployeesComponent', () => {
  let component: AddEnployeesComponent;
  let fixture: ComponentFixture<AddEnployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEnployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
