/* ═══════════════════════════════════════════════════════════════
   script.js — Chiara Colosseo Portfolio

   INDICE:
   1. Navbar (si scurisce scrollando)
   2. Dati dei progetti
   3. Funzioni modal (apri, chiudi)
   4. Galleria (carosello dentro il modal)

   ── COME AGGIUNGERE UN PROGETTO ──────────────────────────────
   Copia uno dei blocchi dentro "var progetti = { ... }" e
   compilalo con i tuoi dati. I campi opzionali (corso, festival,
   galleria, youtube) se li lasci vuoti o li ometti non appaiono.
   ═══════════════════════════════════════════════════════════════ */


/* ─────────────────────────────────────────────────────────────
   1. NAVBAR
   ───────────────────────────────────────────────────────────── */
var navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


/* ─────────────────────────────────────────────────────────────
   2. DATI DEI PROGETTI
   I dati sono in js/progetti.js (caricato prima di questo file).
   script.js usa la variabile "progetti" definita lì.
   ───────────────────────────────────────────────────────────── */


/* ─────────────────────────────────────────────────────────────
   MAPPA ICONE SOFTWARE
   Associa ogni id software alla sua icona e nome completo.
   ───────────────────────────────────────────────────────────── */
var softwareInfo = {
    'blender':      { nome: 'Blender',            icona: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg',          testo: null },
    'maya':         { nome: 'Maya',               icona: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maya/maya-original.svg',                testo: null },
    'premiere':     { nome: 'Adobe Premiere Pro', icona: null,                                                                                        testo: 'Pr' },
    'davinci':      { nome: 'DaVinci Resolve',    icona: 'https://cdn.simpleicons.org/davinciresolve/E6A817',                                                                                        testo: null },
    'aftereffects': { nome: 'After Effects',      icona: null,                                                                                        testo: 'Ae' },
    'nuke':         { nome: 'Nuke',               icona: null,                                                                                        testo: 'Nu' },
    'houdini':      { nome: 'Houdini',            icona: null,                                                                                        testo: 'Hou' },
    'photoshop':    { nome: 'Adobe Photoshop',    icona: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',           testo: null },
    'gimp':         { nome: 'GIMP',               icona: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg',                 testo: null },
    'canva':        { nome: 'Canva',              icona: null,                                                                                        testo: 'Cv' },
    'figma':        { nome: 'Figma',              icona: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',               testo: null },
    'isadora':      { nome: 'Isadora',            icona: null,                                                                                        testo: 'Isa' },
    'klynt':        { nome: 'Klynt',              icona: null,                                                                                        testo: 'Kl' },
    'unity':        { nome: 'Unity',              icona: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',               testo: null },
    'unreal':       { nome: 'Unreal Engine',      icona: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg', testo: null },
    'python':       { nome: 'Python',             icona: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',             testo: null },
    'html':         { nome: 'HTML5',              icona: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',               testo: null },
    'css':          { nome: 'CSS3',               icona: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',                 testo: null },
    'typescript':   { nome: 'TypeScript',         icona: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',     testo: null },
    'react':        { nome: 'React',              icona: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',               testo: null },
    'csharp':       { nome: 'C#',                 icona: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',             testo: null },
    'bootstrap':    { nome: 'Bootstrap',          icona: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',       testo: null },
    'sql':          { nome: 'SQL',                icona: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',               testo: null }
};


/* ─────────────────────────────────────────────────────────────
   3. FUNZIONI MODAL
   ───────────────────────────────────────────────────────────── */

// Variabile globale per tenere traccia dell'immagine attiva nella galleria
var galleriaAttiva = 0;
var galleriaCorrente = [];

// Costruisce l'HTML delle icone software
function buildSoftwareIcons(softwareArray) {
    if (!softwareArray || softwareArray.length === 0) return '';

    var html = '<div class="modal-software-row">';
    softwareArray.forEach(function(id) {
        var sw = softwareInfo[id];
        if (!sw) return;
        html += '<div class="tool-icon-wrap">';
        if (sw.icona) {
            html += '<img src="' + sw.icona + '" alt="' + sw.nome + '" class="tool-icon-img">';
        } else {
            html += '<div class="tool-icon-text">' + sw.testo + '</div>';
        }
        html += '<span class="tool-tooltip">' + sw.nome + '</span>';
        html += '</div>';
    });
    html += '</div>';
    return html;
}

// Costruisce l'HTML della galleria
function buildGalleria(immagini) {
    if (!immagini || immagini.length === 0) return '';

    galleriaCorrente = immagini;
    galleriaAttiva = 0;

    // Immagine grande principale
    var html = '<div class="modal-section-divider"></div>';
    html += '<div class="modal-section-title">Galleria</div>';
    html += '<div class="modal-gallery">';

    // Immagine grande con frecce
    html += '<div class="gallery-main">';
    html += '  <button class="gallery-arrow gallery-prev" onclick="galleriaVai(-1)">&#8249;</button>';
    html += '  <img id="gallery-main-img" src="' + immagini[0] + '" alt="Immagine progetto">';
    html += '  <button class="gallery-arrow gallery-next" onclick="galleriaVai(1)">&#8250;</button>';
    html += '</div>';

    // Miniature (solo se più di 1 immagine, nascoste su mobile via CSS)
    if (immagini.length > 1) {
        html += '<div class="gallery-thumbs">';
        immagini.forEach(function(src, i) {
            html += '<img src="' + src + '" alt="Miniatura ' + (i+1) + '" '
                  + 'class="gallery-thumb' + (i === 0 ? ' active' : '') + '" '
                  + 'onclick="galleriaVaiA(' + i + ')">';
        });
        html += '</div>';
    }

    html += '</div>'; // fine .modal-gallery
    return html;
}

// Avanza o torna indietro nella galleria (+1 o -1)
function galleriaVai(direzione) {
    galleriaVaiA(galleriaAttiva + direzione);
}

// Va direttamente a un'immagine specifica per indice
function galleriaVaiA(indice) {
    var n = galleriaCorrente.length;
    // Cicla in modo circolare (dopo l'ultima torna alla prima)
    galleriaAttiva = (indice + n) % n;

    // Aggiorna immagine grande
    document.getElementById('gallery-main-img').src = galleriaCorrente[galleriaAttiva];

    // Aggiorna la miniatura attiva
    var thumbs = document.querySelectorAll('.gallery-thumb');
    thumbs.forEach(function(t, i) {
        t.classList.toggle('active', i === galleriaAttiva);
    });
}

// Apre il modal costruendo dinamicamente tutto l'HTML
function openProject(id) {
    var p = progetti[id];
    if (!p) return;

    var html = '';

    /* ── FOTO DI COPERTINA in cima al modal ── */
    /* Usa la stessa immagine della card piccola (primo elemento di galleria,
       o il placeholder colorato se non ci sono ancora immagini) */
    if (p.copertina) {
        html += '<div class="modal-cover"><img src="' + p.copertina + '" alt="' + p.titolo + '"></div>';
    } else if (p.galleria && p.galleria.length > 0) {
        html += '<div class="modal-cover"><img src="' + p.galleria[0] + '" alt="' + p.titolo + '"></div>';
    }

    /* ── HEADER: tag categoria + titolo + anno/formato ── */
    html += '<div class="modal-header">';
    html += '  <span class="modal-category" style="color:' + p.categoriaColore + '; border-color:' + p.categoriaColore + '">' + p.categoria + '</span>';
    html += '  <h2 class="modal-title">' + p.titolo + '</h2>';
    html += '  <span class="modal-year">' + p.anno;
    if (p.formato) html += ' &nbsp;·&nbsp; ' + p.formato;
    html += '</span>';
    html += '</div>';

    /* ── DESCRIZIONE LUNGA (nel modal usa descrizioneLunga se c'è, altrimenti descrizioneBreve) ── */
    var desc = p.descrizioneLunga || p.descrizioneBreve || '';
    html += '<p class="modal-desc">' + desc + '</p>';

    /* ── BOTTONE YOUTUBE (solo se presente) ── */
    if (p.youtube) {
        html += '<a href="' + p.youtube + '" target="_blank" class="btn btn-outline modal-yt-btn">▶ Guarda su YouTube</a>';
    }

    /* ── SEZIONE DETTAGLI (ruolo, tipo, software) ── */
    var haDettagli = p.ruolo || p.tipo || (p.software && p.software.length > 0);
    if (haDettagli) {
        html += '<div class="modal-section-divider"></div>';

        if (p.ruolo) {
            html += '<div class="modal-row"><span class="modal-row-label">Ruolo</span><span class="modal-row-value">' + p.ruolo + '</span></div>';
        }
        if (p.tipo) {
            html += '<div class="modal-row"><span class="modal-row-label">Tipo</span><span class="modal-row-value">' + p.tipo + '</span></div>';
        }
        if (p.software && p.software.length > 0) {
            html += '<div class="modal-row"><span class="modal-row-label">Software</span>' + buildSoftwareIcons(p.software) + '</div>';
        }
    }

    /* ── SEZIONE CORSO (solo se universitario) ── */
    if (p.corso) {
        html += '<div class="modal-section-divider"></div>';
        html += '<div class="modal-section-title">Corso Universitario</div>';
        html += '<p class="modal-corso">Ingegneria del Cinema e dei Mezzi di Comunicazione<br><span>' + p.corso + '</span></p>';
    }

    /* ── GALLERIA (solo se ci sono immagini) ── */
    if (p.galleria && p.galleria.length > 0) {
        html += buildGalleria(p.galleria);
    }

    /* ── FESTIVAL (solo se presenti) ── */
    if (p.festival && p.festival.length > 0) {
        html += '<div class="modal-section-divider"></div>';
        html += '<div class="modal-section-title">Festival e Riconoscimenti</div>';
        html += '<div class="modal-festival-list">';
        p.festival.forEach(function(f) {
            html += '<div class="modal-festival-item">' + f + '</div>';
        });
        html += '</div>';
    }

    // Inserisce tutto nel modal e lo apre
    document.getElementById('modalBody').innerHTML = html;
    document.getElementById('projectModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

// Chiude il modal
function closeModal() {
    document.getElementById('projectModal').classList.remove('open');
    document.body.style.overflow = '';
    galleriaCorrente = [];
    galleriaAttiva = 0;
}

// Chiude cliccando fuori dal pannello
function closeModalOutside(event) {
    if (event.target === document.getElementById('projectModal')) {
        closeModal();
    }
}

// Chiude con tasto Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') closeModal();
});