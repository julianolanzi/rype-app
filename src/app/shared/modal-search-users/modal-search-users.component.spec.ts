import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSearchUsersComponent } from './modal-search-users.component';

describe('ModalSearchUsersComponent', () => {
  let component: ModalSearchUsersComponent;
  let fixture: ComponentFixture<ModalSearchUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSearchUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSearchUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
