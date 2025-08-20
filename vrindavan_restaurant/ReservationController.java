package com.example.vrindavan_restaurant;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/reservation")
@CrossOrigin(origins = "http://localhost:9090")
public class ReservationController {

    @PostMapping
    public String makeReservation(@RequestBody Map<String, String> reservation) {
        return "Reservation confirmed for " + reservation.get("name");
    }
}
