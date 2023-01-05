import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManangerMemberTeamComponent } from './mananger-member-team.component';

describe('ManangerMemberTeamComponent', () => {
  let component: ManangerMemberTeamComponent;
  let fixture: ComponentFixture<ManangerMemberTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManangerMemberTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManangerMemberTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
