import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBulletPagesComponent } from './list-bullet-pages.component';

describe('ListBulletPagesComponent', () => {
  let component: ListBulletPagesComponent;
  let fixture: ComponentFixture<ListBulletPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBulletPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBulletPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
