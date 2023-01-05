import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoTeamComponent } from './basic-info-team.component';

describe('BasicInfoTeamComponent', () => {
  let component: BasicInfoTeamComponent;
  let fixture: ComponentFixture<BasicInfoTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInfoTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicInfoTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
