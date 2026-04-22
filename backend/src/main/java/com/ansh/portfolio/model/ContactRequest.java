package com.ansh.portfolio.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record ContactRequest(
        @NotBlank String name,
        @Email @NotBlank String email,
        @NotBlank String message
) {
}
