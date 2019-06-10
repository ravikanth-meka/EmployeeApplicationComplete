package com.javaworks;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class MyAppEurekaServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyAppEurekaServerApplication.class, args);
	}

}
