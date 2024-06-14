package com.gusal.hello_ai.controller;

import com.gusal.hello_ai.entity.Word;
import com.gusal.hello_ai.repository.UserRepository;
import com.gusal.hello_ai.repository.WordRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/words")
public class WordController {
    private final WordRepository wordRepository;
    private final UserRepository userRepository;

    public WordController(WordRepository wordRepository, UserRepository userRepository) {
        this.wordRepository = wordRepository;
        this.userRepository = userRepository;
    }

    @PostMapping("/save")
    public void saveWord(@RequestBody Word word, ) {
        Word saveWord = wordRepository.save(w)
    }

}
