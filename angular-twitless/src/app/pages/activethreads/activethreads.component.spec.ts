import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivethreadsComponent } from './activethreads.component';

describe('ActivethreadsComponent', () => {
  let component: ActivethreadsComponent;
  let fixture: ComponentFixture<ActivethreadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivethreadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivethreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
