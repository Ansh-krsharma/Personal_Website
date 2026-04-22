package com.ansh.portfolio.model;

import java.util.List;

public record Project(String title, String description, List<String> techStack) {
}
