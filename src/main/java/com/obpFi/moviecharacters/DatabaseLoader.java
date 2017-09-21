//package com.obpFi.moviecharacters;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//@Component
//public class DatabaseLoader implements CommandLineRunner {
//
//    private final MovieCharacterRepository repository;
//
//    @Autowired
//    public DatabaseLoader(MovieCharacterRepository repository) {
//        this.repository = repository;
//    }
//
//    @Override
//    public void run(String... strings) throws Exception {
//        this.repository.save(new MovieCharacter("Luke","SkyWalker","Jedi","placeholder"));
//    }
//
//}
