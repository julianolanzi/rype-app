import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUploadTeamImgComponent } from './modal-upload-team-img.component';

describe('ModalUploadTeamImgComponent', () => {
  let component: ModalUploadTeamImgComponent;
  let fixture: ComponentFixture<ModalUploadTeamImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUploadTeamImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUploadTeamImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
