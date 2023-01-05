import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewTeamComponent } from './overview-team.component';

describe('OverviewTeamComponent', () => {
  let component: OverviewTeamComponent;
  let fixture: ComponentFixture<OverviewTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
