let tempoCenas = 10000; // 10 segundos

function trocarCena(id){
    document.querySelectorAll('.scene').forEach(scene=>{
        scene.classList.remove('active');
    });

    const novaCena = document.getElementById('scene' + id);
    if(novaCena){
        novaCena.classList.add('active');
    }
}

/* ===== INICIO PELO PLAY ===== */
function iniciarConvite(){

    const musica = document.getElementById("musica");
    if(musica){
        musica.play().catch(()=>{});
    }

    trocarCena(2);

    const video = document.getElementById("video");
    if(video){
        video.play().catch(()=>{});
    }

    setTimeout(()=>trocarCena(3), tempoCenas);
    setTimeout(()=>trocarCena(4), tempoCenas * 2);
}

/* ===== CONFIRMAÇÃO ===== */
function confirmarPresenca(){

    trocarCena(5);

    const telefone = "5531998488478";
    const mensagem = encodeURIComponent(
        "Olá! 💛 Aceitamos com alegria o convite para sermos padrinhos! 🥂✨"
    );

    setTimeout(() => {
        window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
    }, 12000);
}

/* ===== BOTÃO NÃO (FUGINDO SEM QUEBRAR LAYOUT) ===== */

const btnNo = document.querySelector(".btn-no");

/* função de fuga */
function fugirBotao() {
    const moveX = (Math.random() - 0.5) * 300;
    const moveY = (Math.random() - 0.5) * 200;

    btnNo.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

/* DESKTOP (mouse) */
btnNo.addEventListener("mouseover", function (e) {
    e.preventDefault();
    fugirBotao();
});

/* MOBILE (toque) */
btnNo.addEventListener("touchstart", function (e) {
    e.preventDefault(); // 🔥 impede o clique
    fugirBotao();
}, { passive: false });

/* segurança extra: bloqueia qualquer clique */
btnNo.addEventListener("click", function(e){
    e.preventDefault();
    fugirBotao();
});
