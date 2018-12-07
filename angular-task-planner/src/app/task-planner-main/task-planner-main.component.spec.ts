import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPlannerMainComponent } from './task-planner-main.component';

describe('TaskPlannerMainComponent', () => {
  let component: TaskPlannerMainComponent;
  let fixture: ComponentFixture<TaskPlannerMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskPlannerMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPlannerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
