import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClassifierUploadComponent } from './classifier-upload.component';

describe('ClassifierUploadComponent', () => {
  let component: ClassifierUploadComponent;
  let fixture: ComponentFixture<ClassifierUploadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifierUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifierUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
