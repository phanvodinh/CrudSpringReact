package com.phandinh.CRUDSpringReact.exception;

public class UserNotFoundException extends  RuntimeException {
    public UserNotFoundException(Long id) {
        super("could not find user with ID: "+ id);
    }
}
