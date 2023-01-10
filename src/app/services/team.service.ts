import { TeamInfo } from './../models/teams/team-info';
import { catchError, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { EventService } from './event.service';
import { RegisrTeam } from '../models/teams/team-register';
import { TeamsSearch } from '../models/teams/search-teams';
import { UpdateTeamInfo } from '../models/teams/team-register copy';

@Injectable()
export class TeamService extends BaseService {
  constructor(private http: HttpClient, public eventService: EventService) {
    super();
  }

  GetUser = new EventEmitter();

  getUserTeam(id: string): Observable<TeamInfo> {
    let response = this.http
      .get(
        this.UrlServiceV1 + '/teams/search/user/' + id,
        this.ObterAuthHeaderJson()
      )
      .pipe(
        map(this.eventService.getTeamExtract),
        catchError(this.serviceError)
      );
    return response;
  }

  cadastroTeam(team: RegisrTeam): Observable<RegisrTeam> {
    let response = this.http
      .post(this.UrlServiceV1 + '/teams', team, this.ObterAuthHeaderJson())
      .pipe(map(this.extractData), catchError(this.serviceError));
    return response;
  }

  searchTeams(key: string): Observable<TeamsSearch> {
    let response = this.http
      .get(
        this.UrlServiceV1 + '/teams/search/' + key,
        this.ObterAuthHeaderJson()
      )
      .pipe(map(this.extractData), catchError(this.serviceError));
    return response;
  }

  joinTeamPublic(data: any): Observable<any> {
    let response = this.http
      .post(
        this.UrlServiceV1 + '/teams/teampublic',
        data,
        this.ObterAuthHeaderJson()
      )
      .pipe(map(this.extractData), catchError(this.serviceError));
    return response;
  }

  quitTeam(id: string): Observable<any> {
    let response = this.http
      .delete(
        this.UrlServiceV1 + '/teams/quit/team/' + id,
        this.ObterAuthHeaderJson()
      )
      .pipe(map(this.extractData), catchError(this.serviceError));
    return response;
  }

  updateInfoTeam(
    upTeam: UpdateTeamInfo,
    id: string
  ): Observable<UpdateTeamInfo> {
    let response = this.http
      .put(
        this.UrlServiceV1 + '/teams/' + id,
        upTeam,
        this.ObterAuthHeaderJson()
      )
      .pipe(map(this.extractData), catchError(this.serviceError));

    return response;
  }

  updateAdminMember(team: string, user: any): Observable<any> {
    let response = this.http
      .put(
        this.UrlServiceV1 + '/teams/admin/' + team,
        user,
        this.ObterAuthHeaderJson()
      )
      .pipe(map(this.extractData), catchError(this.serviceError));

    return response;
  }

  quitMember(team: string, user: any): Observable<any> {
    let response = this.http
      .put(
        this.UrlServiceV1 + '/teams/quit/member/' + team,
        user,
        this.ObterAuthHeaderJson(),
      )
      .pipe(map(this.extractData), catchError(this.serviceError));

    return response;
  }
  updateRole(team: string, user: any): Observable<any> {
    let response = this.http
      .put(
        this.UrlServiceV1 + '/teams/update/member/' + team,
        user,
        this.ObterAuthHeaderJson(),
      )
      .pipe(map(this.extractData), catchError(this.serviceError));

    return response;
  }

  updateMemberTeam(team: string, user: any): Observable<any> {
    let response = this.http
      .put(
        this.UrlServiceV1 + '/teams/member/' + team,
        user,
        this.ObterAuthHeaderJson()
      )
      .pipe(map(this.extractData), catchError(this.serviceError));

    return response;
  }
}
