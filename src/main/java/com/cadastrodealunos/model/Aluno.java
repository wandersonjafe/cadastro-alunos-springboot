package com.cadastrodealunos.model;


import java.util.ArrayList;
import java.util.List;

public class Aluno {

        private String nome;
        private int idade;
        private String turma;
        private String disciplina;
        private String professor;
        private List<Double> notas = new ArrayList<>();


        public Aluno() {} // importante para o Spring Boot

        public Aluno(String nome, int idade, String turma, String disciplina, String professor) {
            this.nome = nome;
            this.idade = idade;
            this.turma = turma;
            this.disciplina = disciplina;
            this.professor = professor;

        }

    // Getters e Setters

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public String getTurma() {
        return turma;
    }

    public void setTurma(String turma) {
        this.turma = turma;
    }

    public String getDisciplina() {
        return disciplina;
    }

    public void setDisciplina(String disciplina) {
        this.disciplina = disciplina;
    }

    public String getProfessor() {
        return professor;
    }

    public void setProfessor(String professor) {
        this.professor = professor;
    }

    public List<Double> getNotas() {
        return notas;
    }

    public void setNotas(List<Double> notas) {
        this.notas  = notas;
    }
    public void adicionarNota(double nota) {
            notas.add (nota);
        }

        public double calcularMedia() {
            if(notas.isEmpty()) return 0;
            double soma = 0;
            for (double nota : notas) soma += nota;
            return soma / notas.size();
        }

        public String getSituacao() {
            return calcularMedia() >= 6.0 ? "Aprovado" : "Reprovado";
        }
}
