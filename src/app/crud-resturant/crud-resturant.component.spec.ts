import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudResturantComponent } from './crud-resturant.component';

describe('CrudResturantComponent', () => {
  let component: CrudResturantComponent;
  let fixture: ComponentFixture<CrudResturantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudResturantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
