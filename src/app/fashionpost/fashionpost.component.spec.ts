import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionpostComponent } from './fashionpost.component';

describe('FashionpostComponent', () => {
  let component: FashionpostComponent;
  let fixture: ComponentFixture<FashionpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FashionpostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
