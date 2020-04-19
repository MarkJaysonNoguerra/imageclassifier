import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifierUploadComponent } from './classifier-upload.component';

describe('ClassifierUploadComponent', () => {
  let component: ClassifierUploadComponent;
  let fixture: ComponentFixture<ClassifierUploadComponent>;

  beforeEach(async(() => {
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
