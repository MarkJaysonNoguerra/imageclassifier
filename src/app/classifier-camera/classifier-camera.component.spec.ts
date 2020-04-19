import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifierCameraComponent } from './classifier-camera.component';

describe('ClassifierCameraComponent', () => {
  let component: ClassifierCameraComponent;
  let fixture: ComponentFixture<ClassifierCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifierCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifierCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
