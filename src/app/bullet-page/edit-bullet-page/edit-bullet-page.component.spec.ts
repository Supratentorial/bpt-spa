import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBulletPageComponent } from './edit-bullet-page.component';

describe('EditBulletPageComponent', () => {
  let component: EditBulletPageComponent;
  let fixture: ComponentFixture<EditBulletPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBulletPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBulletPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
