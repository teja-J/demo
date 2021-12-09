import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideTheHideBoxComponent } from './inside-the-hide-box.component';

describe('InsideTheHideBoxComponent', () => {
  let component: InsideTheHideBoxComponent;
  let fixture: ComponentFixture<InsideTheHideBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsideTheHideBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideTheHideBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
