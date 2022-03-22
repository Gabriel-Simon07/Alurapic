import { ServerLog } from './server-log';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

const API = 'http://localhost:7000';
@Injectable({providedIn: 'root'})

export class ServerLogService {
  constructor(private http: HttpClient) { }

  log(serverLog: ServerLog) {
    this.http.post(API + '/infra/log', serverLog);
  }
}
