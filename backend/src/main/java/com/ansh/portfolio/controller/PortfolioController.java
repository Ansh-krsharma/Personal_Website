package com.ansh.portfolio.controller;

import com.ansh.portfolio.model.ContactRequest;
import com.ansh.portfolio.model.PortfolioResponse;
import com.ansh.portfolio.service.PortfolioService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class PortfolioController {

    private final PortfolioService portfolioService;

    public PortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    @GetMapping("/portfolio")
    public PortfolioResponse getPortfolio() {
        return portfolioService.getPortfolio();
    }

    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> receiveMessage(@Valid @RequestBody ContactRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(
                Map.of(
                        "status", "success",
                        "message", "Thanks " + request.name() + ", your message has been received."
                )
        );
    }
}
