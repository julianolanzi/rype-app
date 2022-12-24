import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUploadProfileImgComponent } from './modal-upload-profile-img.component';

describe('ModalUploadProfileImgComponent', () => {
  let component: ModalUploadProfileImgComponent;
  let fixture: ComponentFixture<ModalUploadProfileImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUploadProfileImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUploadProfileImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
