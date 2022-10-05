import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiscussionComponent } from './create-discussion.component';

describe('CreateDiscussionComponent', () => {
  let component: CreateDiscussionComponent;
  let fixture: ComponentFixture<CreateDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
