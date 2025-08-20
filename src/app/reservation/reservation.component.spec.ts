import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservation = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log("Reservation Details:", this.reservation);
  }
}
