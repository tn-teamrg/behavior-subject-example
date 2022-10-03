import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isAdmin$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }
}
