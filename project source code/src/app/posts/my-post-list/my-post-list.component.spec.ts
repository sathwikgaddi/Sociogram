import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPostListComponent } from './my-post-list.component';

describe('MyPostListComponent', () => {
  let component: MyPostListComponent;
  let fixture: ComponentFixture<MyPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
