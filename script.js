// JavaScript - Interatividade do site

const details = {
    maria: {
        title: "Maria — Neuropsicologia",
        text: "O projeto de vida da Maria está centrado em entender a relação entre o sistema nervoso e a cognição humana. Ela planeja atuar em diagnósticos precoces, reabilitação cognitiva de pacientes e em pesquisas voltadas ao bem-estar neurológico e saúde mental comunitária."
    },
    tomazia: {
        title: "Tomazia — Educação Física",
        text: "O projeto de vida de Tomazia busca transformar a saúde da comunidade por meio da atividade física e do esporte inclusivo. Ela pretende desenvolver projetos sociais, treinar atletas e incentivar hábitos de vida ativos para prevenir doenças crônicas e melhorar a qualidade de vida."
    },
    natasha: {
        title: "Natasha — Direito",
        text: "O projeto de vida da Natasha foca na defesa da justiça social e na garantia dos direitos fundamentais. Seu objetivo é atuar em causas humanitárias, mediação de conflitos e prestação de consultoria jurídica com empatia e integridade profissional."
    }
};

function showDetails(person) {
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");
    const body = document.getElementById("modal-body");

    if (details[person]) {
        title.innerText = details[person].title;
        body.innerText = details[person].text;
        modal.style.display = "flex";
    }
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Fechar o modal ao clicar fora da caixa
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
