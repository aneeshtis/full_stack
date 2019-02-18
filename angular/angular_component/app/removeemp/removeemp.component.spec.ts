import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveempComponent } from './removeemp.component';

describe('RemoveempComponent', () => {
  let component: RemoveempComponent;
  let fixture: ComponentFixture<RemoveempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
