import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  messages = [
    'mail message 1',
    'mail message 2',
    'mail message 3'
  ];

  message = "testing.";

  constructor() { }
}
