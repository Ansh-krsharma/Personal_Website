package com.ansh.portfolio.model;

import java.util.List;

public record PortfolioResponse(
        String name,
        String title,
        String tagline,
        String about,
        String email,
        String phone,
        String location,
        String linkedin,
        String github,
        List<String> skills,
        List<Project> projects,
        Education education,
        String careerObjective
) {
}
