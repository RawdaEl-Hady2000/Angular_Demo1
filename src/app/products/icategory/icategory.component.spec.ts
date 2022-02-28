import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcategoryComponent } from './icategory.component';

describe('IcategoryComponent', () => {
  let component: IcategoryComponent;
  let fixture: ComponentFixture<IcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
