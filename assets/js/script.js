let tempoCenas = 10000; // 10 segundos

/* ============================= */
/* TROCA DE CENA */
/* ============================= */
function trocarCena(id) {
    document.querySelectorAll('.scene').forEach(scene => {
        scene.classList.remove('active');
    });

    const novaCena = document.getElementById('scene' + id);
    if (novaCena) {
        novaCena.classList.add('active');
    }
}

/* ============================= */
/* INICIAR CONVITE */
/* ============================= */
function iniciarConvite() {

    console.log("Clique detectado - iniciando convite");

    const musica = document.getElementById("musica");
    const video = document.getElementById("video");

    /* ===== ÁUDIO ===== */
    if (musica) {
        musica.currentTime = 0;
        musica.muted = false;

        musica.play()
            .then(() => {
                console.log("Música tocando");
            })
            .catch((erro) => {
                console.log("Erro ao tocar música:", erro);
            });
    }

    /* ===== TROCA PARA CENA 2 ===== */
    trocarCena(2);

    /* ===== VÍDEO ===== */
    if (video) {
        video.muted = true; // 🔥 necessário para autoplay funcionar
        video.playsInline = true;

        video.play()
            .then(() => {
                console.log("Vídeo rodando");
            })
            .catch((erro) => {
                console.log("Erro ao tocar vídeo:", erro);
            });
    }

    /* ===== FLUXO DE CENAS ===== */
    setTimeout(() => trocarCena(3), tempoCenas);
    setTimeout(() => trocarCena(4), tempoCenas * 2);
}

/* ============================= */
/* CONFIRMAÇÃO */
/* ============================= */
function confirmarPresenca() {

    trocarCena(5);

    const telefone = "5531998488478";
    const mensagem = encodeURIComponent(
        "Olá! 💛 Aceito com alegria o convite para ser Padrinho/ Madrinha desta União! 🥂✨"
    );

    setTimeout(() => {
        window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
    }, 4000);
}

/* ============================= */
/* BOTÃO NÃO (FUGINDO) */
/* ============================= */

const btnNo = document.querySelector(".btn-no");

/* função de fuga */
function fugirBotao() {
    if (!btnNo) return;

    const moveX = (Math.random() - 0.5) * 300;
    const moveY = (Math.random() - 0.5) * 200;

    btnNo.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

/* adiciona eventos só se existir */
if (btnNo) {

    /* DESKTOP */
    btnNo.addEventListener("mouseover", function (e) {
        e.preventDefault();
        fugirBotao();
    });

    /* MOBILE */
    btnNo.addEventListener("touchstart", function (e) {
        e.preventDefault();
        fugirBotao();
    }, { passive: false });

    /* segurança extra */
    btnNo.addEventListener("click", function (e) {
        e.preventDefault();
        fugirBotao();
    });
}

/* ============================= */
/* FALLBACK MOBILE (FORÇA ÁUDIO) */
/* ============================= */

document.body.addEventListener("click", () => {
    const musica = document.getElementById("musica");

    if (musica && musica.paused) {
        musica.play().catch(() => {});
    }
}, { once: true });
