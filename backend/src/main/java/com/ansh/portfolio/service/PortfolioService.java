package com.ansh.portfolio.service;

import com.ansh.portfolio.model.Education;
import com.ansh.portfolio.model.PortfolioResponse;
import com.ansh.portfolio.model.Project;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PortfolioService {

    public PortfolioResponse getPortfolio() {
        return new PortfolioResponse(
                "Ansh Kumar Sharma",
                "Software Development Internship Aspirant",
                "I build full stack web apps and explore AI/ML projects with a strong Java foundation.",
                "Computer Science Engineering student from KIIT with interests in Java development, React, Spring Boot, DSA, AI/ML, NLP, and practical project building.",
                "2305114@kiit.ac.in",
                "9431296703",
                "Bhubaneswar, Odisha, India",
                "https://www.linkedin.com/in/anshkumarsharma-letsconnectasap",
                "https://github.com/Ansh-krsharma",
                List.of("Java", "Python", "C", "React", "Spring Boot", "MySQL", "DSA", "OOP", "AI/ML", "NLP", "Linux"),
                List.of(
                        new Project(
                                "FitMart",
                                "A fitness-focused e-commerce web application with product browsing, cart features, and backend integration.",
                                List.of("React", "Spring Boot", "MySQL")
                        ),
                        new Project(
                                "Moon Phase Calendar",
                                "A date-based moon visualization project that shows changing moon phases with interactive behavior.",
                                List.of("JavaScript", "Frontend Development")
                        ),
                        new Project(
                                "Hyperbolic Category Discovery",
                                "A machine learning project focused on category discovery, embeddings, and representation learning.",
                                List.of("Python", "Machine Learning")
                        ),
                        new Project(
                                "EV Review ABSA",
                                "An NLP project that performs aspect-based sentiment analysis on electric vehicle reviews.",
                                List.of("Python", "NLP", "Sentiment Analysis")
                        )
                ),
                new Education(
                        "B.Tech in Computer Science Engineering",
                        "Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar",
                        "2027",
                        "7.34"
                ),
                "Seeking a software development internship to apply full stack, Java, and AI/ML skills in real-world applications while growing as a product-focused developer."
        );
    }
}
