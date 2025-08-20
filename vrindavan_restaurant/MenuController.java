package com.example.vrindavan_restaurant;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "http://localhost:4200") // Allow Angular frontend
public class MenuController {

    private final MenuService menuService;

    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @GetMapping
    public List<MenuItem> getMenu() {
        return menuService.getAllMenuItems();
    }

    @PostMapping
    public MenuItem addMenu(@RequestBody MenuItem item) {
        return menuService.addMenuItem(item);
    }
}
