import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoRoneyComponent } from './do-roney.component';

describe('DoRoneyComponent', () => {
  let component: DoRoneyComponent;
  let fixture: ComponentFixture<DoRoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoRoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoRoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
