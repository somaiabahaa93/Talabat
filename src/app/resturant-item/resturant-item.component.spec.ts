import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantItemComponent } from './resturant-item.component';

describe('ResturantItemComponent', () => {
  let component: ResturantItemComponent;
  let fixture: ComponentFixture<ResturantItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
