import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CategorywiseProductsComponent } from './categorywise-products.component';

describe('CategorywiseProductsComponent', () => {
  let component: CategorywiseProductsComponent;
  let fixture: ComponentFixture<CategorywiseProductsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorywiseProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorywiseProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
