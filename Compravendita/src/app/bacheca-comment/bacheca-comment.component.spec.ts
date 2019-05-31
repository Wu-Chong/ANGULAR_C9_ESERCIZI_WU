import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BachecaCommentComponent } from './bacheca-comment.component';

describe('BachecaCommentComponent', () => {
  let component: BachecaCommentComponent;
  let fixture: ComponentFixture<BachecaCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BachecaCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BachecaCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
