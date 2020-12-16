package com.react.restcontroller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MainRestController {
    @RequestMapping("/dashboard")
    public String firstPage() {
        return "Success for first page";
    }
}
