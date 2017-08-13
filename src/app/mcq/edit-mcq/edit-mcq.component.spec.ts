/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMcqComponent } from './edit-mcq.component';

describe('EditMcqComponent', () => {
  let component: EditMcqComponent;
  let fixture: ComponentFixture<EditMcqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMcqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
