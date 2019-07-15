package com.javaworks.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.javaworks.entity.Users;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<Users, Long> {

	Users findByUsername(String username);

}
