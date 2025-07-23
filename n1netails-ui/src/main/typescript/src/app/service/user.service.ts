import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UiConfigService } from '../shared/util/ui-config.service';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  host: string = '';

  constructor(
    private http: HttpClient,
    private uiConfigService: UiConfigService
  ) {}

  editUser(user: User): Observable<User> {
    this.host = this.uiConfigService.getApiUrl();
    return this.http.post<User>(`${this.host}/ninetails/user/edit`, user);
  }
}
