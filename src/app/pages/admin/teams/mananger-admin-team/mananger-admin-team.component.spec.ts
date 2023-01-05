import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManangerAdminTeamComponent } from './mananger-admin-team.component';

describe('ManangerAdminTeamComponent', () => {
  let component: ManangerAdminTeamComponent;
  let fixture: ComponentFixture<ManangerAdminTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManangerAdminTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManangerAdminTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
