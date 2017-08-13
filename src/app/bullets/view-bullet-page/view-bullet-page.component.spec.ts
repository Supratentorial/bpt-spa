import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBulletPageComponent } from './view-bullet-page.component';

describe('ViewBulletPageComponent', () => {
  let component: ViewBulletPageComponent;
  let fixture: ComponentFixture<ViewBulletPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBulletPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBulletPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
