package com.javaworks.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class ResponseStatusException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;
	
	public ResponseStatusException() {
        super();
    }
    public ResponseStatusException(String message, Throwable cause) {
        super(message, cause);
    }
    public ResponseStatusException(String message) {
        super(message);
    }
    public ResponseStatusException(Throwable cause) {
        super(cause);
    }
	
}
