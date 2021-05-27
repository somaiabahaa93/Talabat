import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantsListComponent } from './resturants-list.component';

describe('ResturantsListComponent', () => {
  let component: ResturantsListComponent;
  let fixture: ComponentFixture<ResturantsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
