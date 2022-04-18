import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TherepoService {
  getProfileRepos() {
    throw new Error('Method not implemented.');
  }
  updateProfile(repos: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
