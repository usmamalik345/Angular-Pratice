import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdInputComponent } from './td-input.component';

describe('TdInputComponent', () => {
  let component: TdInputComponent;
  let fixture: ComponentFixture<TdInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
