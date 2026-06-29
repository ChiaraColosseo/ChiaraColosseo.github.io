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
    'davinci':      { nome: 'DaVinci Resolve',    icona: null,                                                                                        testo: 'DR' },
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
   3. FUNZIONI CARD

   buildCard(id) → costruisce l'HTML di una card leggendo i dati
                   da progetti.js. Usala nelle pagine categoria.

   renderCards(ids, contenitoreId) → chiama buildCard per ogni id
                   e inserisce le card in un contenitore HTML.

   ── COME USARLE NELLE PAGINE CATEGORIA ──────────────────────

   Nell'HTML metti un contenitore vuoto con data-progetti:
       <div class="proj-grid" data-progetti="iremember, fragile, lagrande"></div>

   I progetti appaiono nell'ordine in cui li scrivi.
   ───────────────────────────────────────────────────────────── */

// Converte il colore categoria nel nome della classe placeholder e data-category
function categoriaToSlug(colore) {
    var mappa = {
        '#e85d4a': 'cinema',
        '#7b68ee': '3d',
        '#4ab8c1': 'ux',
        '#56c97a': 'vr',
        '#e8a23a': 'social',
        '#c9a96e': 'vr'
    };
    return mappa[colore] || 'cinema';
}

// Costruisce l'HTML completo di una card a partire dall'id del progetto
function buildCard(id) {
    var p = progetti[id];
    if (!p) {
        console.warn('buildCard: progetto "' + id + '" non trovato in progetti.js');
        return '';
    }

    // Immagine di copertina
    var coverHTML = '';
    var hasFoto = p.copertina || (p.galleria && p.galleria.length > 0);
    if (p.copertina) {
        coverHTML = '<img src="' + p.copertina + '" alt="' + p.titolo + '">';
    } else if (p.galleria && p.galleria.length > 0) {
        coverHTML = '<img src="' + p.galleria[0] + '" alt="' + p.titolo + '">';
    } else {
        coverHTML = '<span class="placeholder-text">' + p.titolo + '</span>';
    }

    // Tag colorati — divide la categoria per " · " e crea un tag per ognuno
    var tags = p.categoria.split(' · ');
    var tagsHTML = '';
    tags.forEach(function(tag) {
        var classe = 'tag-cinema';
        var t = tag.toLowerCase();
        if (t.indexOf('3d') !== -1 || t.indexOf('animaz') !== -1)               classe = 'tag-3d';
        if (t.indexOf('vr') !== -1 || t.indexOf('interatt') !== -1)             classe = 'tag-vr';
        if (t.indexOf('ux') !== -1 || t.indexOf('ui') !== -1)                   classe = 'tag-ux';
        if (t.indexOf('social') !== -1 || t.indexOf('marketing') !== -1)        classe = 'tag-social';
        if (t.indexOf('tesi') !== -1 || t.indexOf('ai') !== -1)                 classe = 'tag-vr';
        tagsHTML += '<span class="tag ' + classe + '">' + tag + '</span>';
    });

    // Anno + formato
    var meta = p.anno;
    if (p.formato) meta += ' &nbsp;·&nbsp; ' + p.formato;

    var slug = categoriaToSlug(p.categoriaColore);
    var coverClass = 'proj-cover' + (hasFoto ? '' : ' placeholder-img placeholder-' + slug);

    var html = '';
    html += '<div class="proj-card" data-category="' + slug + '" onclick="openProject(\'' + id + '\')">';
    html += '  <div class="' + coverClass + '">' + coverHTML + '</div>';
    html += '  <div class="proj-body">';
    html += '    <div class="card-tags">' + tagsHTML + '</div>';
    html += '    <h3 class="proj-title">' + p.titolo + '</h3>';
    html += '    <p class="proj-meta">' + meta + '</p>';
    html += '    <p class="proj-desc">' + p.descrizioneBreve + '</p>';
    html += '    <button class="proj-btn" onclick="event.stopPropagation(); openProject(\'' + id + '\')">Scopri di più ↗</button>';
    html += '  </div>';
    html += '</div>';
    return html;
}

// Popola automaticamente tutti i contenitori con data-progetti="id1, id2, ..."
// Gira al caricamento della pagina — non devi chiamarla tu
document.addEventListener('DOMContentLoaded', function() {
    var contenitori = document.querySelectorAll('[data-progetti]');
    contenitori.forEach(function(el) {
        var ids = el.getAttribute('data-progetti').split(',').map(function(s) { return s.trim(); });
        var html = '';
        ids.forEach(function(id) { html += buildCard(id); });
        el.innerHTML = html;
    });
});


/* ─────────────────────────────────────────────────────────────
   4. FUNZIONI MODAL
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
