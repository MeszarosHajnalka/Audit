import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditInputComponent } from './audit-input.component';

describe('AuditInputComponent', () => {
  let component: AuditInputComponent;
  let fixture: ComponentFixture<AuditInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
