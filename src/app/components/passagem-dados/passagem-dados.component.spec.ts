import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemDadosComponent } from './passagem-dados.component';

describe('PassagemDadosComponent', () => {
  let component: PassagemDadosComponent;
  let fixture: ComponentFixture<PassagemDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassagemDadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassagemDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
