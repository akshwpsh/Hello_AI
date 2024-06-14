package com.gusal.hello_ai.repository;

import com.gusal.hello_ai.entity.Word;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WordRepository extends JpaRepository<Word, Long> {
}
