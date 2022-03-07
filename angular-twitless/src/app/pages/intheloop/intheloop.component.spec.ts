import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntheloopComponent } from './intheloop.component';

describe('IntheloopComponent', () => {
  let component: IntheloopComponent;
  let fixture: ComponentFixture<IntheloopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntheloopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntheloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
