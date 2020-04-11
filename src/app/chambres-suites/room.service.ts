import { of } from 'rxjs';
import { ROOMS } from './rooms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient) {}

  getAvailableRooms(arrival: Date) {
    return of(ROOMS);
    // return this.http
    // .post("http://localhost:57553/api/rooms", arrival)
    // .pipe(map((availableRooms: Room[]) => availableRooms));
  }
}

export interface Room {
  id: number;
  type: string;
  price: number;
  capacity: number;
  breakFast: boolean;
  dinner: boolean;
  transportCard: boolean;
}
