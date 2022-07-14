import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUploadModelComponent } from './dialog-upload-model.component';

describe('DialogUploadModelComponent', () => {
  let component: DialogUploadModelComponent;
  let fixture: ComponentFixture<DialogUploadModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUploadModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUploadModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
