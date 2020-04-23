import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecipiesComponent } from './create-recipies.component';

describe('CreateRecipiesComponent', () => {
  let component: CreateRecipiesComponent;
  let fixture: ComponentFixture<CreateRecipiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRecipiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
