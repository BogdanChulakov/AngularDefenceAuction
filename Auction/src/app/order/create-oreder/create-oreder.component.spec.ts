import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrederComponent } from './create-oreder.component';

describe('CreateOrederComponent', () => {
  let component: CreateOrederComponent;
  let fixture: ComponentFixture<CreateOrederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrederComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
