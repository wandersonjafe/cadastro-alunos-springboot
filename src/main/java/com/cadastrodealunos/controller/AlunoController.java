package com.cadastrodealunos.controller;

import com.cadastrodealunos.model.Aluno;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping ("/alunos")
public class AlunoController {

    private List<Aluno> listaAlunos = new ArrayList<>();

    @GetMapping
    public List<Aluno> listarAluno() {
        return listaAlunos;
    }

    @PostMapping
    public String cadastrarAluno(@RequestBody Aluno aluno) {
        listaAlunos.add(aluno);
        return "Aluno cadastrado com sucesso!";
    }
}
