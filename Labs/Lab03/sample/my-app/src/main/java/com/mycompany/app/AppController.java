package com.mycompany.app;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class AppController {

    private static final String template = "Hello, %s!";

    @GetMapping("/say")
    @ResponseBody
    public String sayHello(@RequestParam(name="name", required=false, defaultValue="Stranger") String name) {
        return String.format(template, name);
    }

    @GetMapping("/get")
    @ResponseBody
    public String getHello() {
        return "Hello World!";
    }

}