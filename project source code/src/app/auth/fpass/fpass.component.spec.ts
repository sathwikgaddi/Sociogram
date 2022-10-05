import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpassComponent } from './fpass.component';

describe('FpassComponent', () => {
  let component: FpassComponent;
  let fixture: ComponentFixture<FpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
