import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  protected http= inject(HttpClient);
  protected apiURL = environment.apiURL; // Replace with your API URL
}
