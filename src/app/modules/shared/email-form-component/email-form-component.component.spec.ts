import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailFormComponentComponent } from './email-form-component.component';

describe('EmailFormComponentComponent', () => {
  let component: EmailFormComponentComponent;
  let fixture: ComponentFixture<EmailFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
