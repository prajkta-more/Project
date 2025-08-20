package com.example.vrindavan_restaurant;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MenuService {

    private final MenuRepository menuRepository;

    public MenuService(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    public List<MenuItem> getAllMenuItems() {
        return menuRepository.findAll();
    }

    public MenuItem addMenuItem(MenuItem item) {
        return menuRepository.save(item);
    }
}
