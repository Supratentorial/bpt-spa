import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBulletComponent } from './edit-bullet.component';

describe('EditBulletComponent', () => {
  let component: EditBulletComponent;
  let fixture: ComponentFixture<EditBulletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBulletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
