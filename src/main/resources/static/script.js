// Seleção dos elementos
const form = document.getElementById("formAluno");
const listaAlunos = document.getElementById("listaAlunos");

// Função para cadastrar aluno
if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const idade = parseInt(document.getElementById("idade").value);
        const turma = document.getElementById("turma").value;
        const disciplina = document.getElementById("disciplina").value;
        const professor = document.getElementById("professor").value;
        const notas = document.getElementById("notas").value
            .split(",")
            .map(n => parseFloat(n.trim()))
            .filter(n => !isNaN(n)); // garante que só números válidos sejam cadastrados

        const aluno = { nome, idade, turma, disciplina, professor, notas };

        try {
            const res = await fetch("/alunos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(aluno)
            });

            if (!res.ok) throw new Error("Erro ao cadastrar aluno");

            form.reset();
            alert("Aluno cadastrado com sucesso!");
        } catch (error) {
            console.error(error);
            alert("Não foi possível cadastrar o aluno. Tente novamente.");
        }
    });
}

// Função para listar alunos (rodar apenas na página de lista)
async function listarAlunos() {
    if (!listaAlunos) return; // só roda na página de lista

    try {
        const res = await fetch("/alunos");
        if (!res.ok) throw new Error("Erro ao buscar alunos");
        const alunos = await res.json();

        listaAlunos.innerHTML = "";

        alunos.forEach(aluno => {
            let media = 0;
            if (aluno.notas && aluno.notas.length > 0) {
                media = aluno.notas.reduce((a,b) => a+b, 0) / aluno.notas.length;
            }

            const li = document.createElement("li");
            li.textContent = `${aluno.nome} - ${aluno.idade} anos - ${aluno.turma} - ${aluno.disciplina} - Prof: ${aluno.professor} - Média: ${media.toFixed(2)} - ${media >= 6 ? "Aprovado" : "Reprovado"}`;
            listaAlunos.appendChild(li);
        });

    } catch (error) {
        console.error(error);
        listaAlunos.innerHTML = "<li>Não foi possível carregar a lista de alunos.</li>";
    }
}

// Chama listarAlunos automaticamente
listarAlunos();
