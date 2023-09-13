package com.phandinh.CRUDSpringReact.repository;

import com.phandinh.CRUDSpringReact.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

