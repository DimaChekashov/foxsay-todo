package com.example.todo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Todo {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    private String title;
    private boolean isReady;
    
    public Todo() {}
    
    public Todo(String title, boolean isReady) {
        this.title = title;
        this.isReady = isReady;
    }
    
    public Integer getId() {
        return id;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }
    
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public boolean getIsReady() {
        return isReady;
    }
    
    public void setIsReady(boolean isReady) {
        this.isReady = isReady;
    }
}
