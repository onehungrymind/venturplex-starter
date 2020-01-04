import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private snackbar: MatSnackBar) {}

  emit(message: string, action = 'Ok') {
    this.snackbar.open(message, action, {
      duration: 2000
    });
  }

  error(message: string, action = 'Error') {
    this.snackbar.open(message, action, {
      duration: 0,
      politeness: 'assertive'
    });
  }
}
