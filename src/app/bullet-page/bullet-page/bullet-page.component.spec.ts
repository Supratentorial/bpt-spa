import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletPageComponent } from './bullet-page.component';

describe('BulletPageComponent', () => {
  let component: BulletPageComponent;
  let fixture: ComponentFixture<BulletPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
