import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashiondetailComponent } from './fashiondetail.component';

describe('FashiondetailComponent', () => {
  let component: FashiondetailComponent;
  let fixture: ComponentFixture<FashiondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FashiondetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
