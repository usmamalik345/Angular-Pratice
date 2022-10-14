import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFComponent } from './todo-f.component';

describe('TodoFComponent', () => {
  let component: TodoFComponent;
  let fixture: ComponentFixture<TodoFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
