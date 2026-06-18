/* ═══════════════════════════════════════════════════════════════
   script.js — Chiara Colosseo Portfolio
   
   Cosa fa questo file:
   1. Scurisce la navbar quando l'utente scrolla
   2. Gestisce l'apertura e la chiusura del modal dei progetti
   3. Contiene i dati dei progetti in evidenza
   ═══════════════════════════════════════════════════════════════ */


/* ─────────────────────────────────────────────────────────────
   1. NAVBAR — diventa scura quando scorri
   ───────────────────────────────────────────────────────────── */

// Prende l'elemento navbar
var navbar = document.getElementById('navbar');

// Ogni volta che l'utente scrolla, controlla se è oltre i 60px dall'inizio
window.addEventListener('scroll', function() {
    if (window.scrollY > 60) {
        // Aggiunge la classe "scrolled" → il CSS lo scurisce
        navbar.classList.add('scrolled');
    } else {
        // Se è tornato in cima, toglie la classe
        navbar.classList.remove('scrolled');
    }
});


/* ─────────────────────────────────────────────────────────────
   2. DATI DEI PROGETTI IN EVIDENZA
   
   Modifica questi oggetti per cambiare il contenuto dei modal.
   Ogni progetto ha un "id" che corrisponde all'onclick="openProject('id')"
   nell'HTML.
   ───────────────────────────────────────────────────────────── */

var progetti = {

    // ── Tesi magistrale ──────────────────────────────────────
    'tesi': {
        categoria: 'Tesi Magistrale · AI Generativa',        // appare sopra il titolo
        categoriaColore: '#56c97a',                          // colore dell'etichetta
        titolo: 'IA e Arte: l\'impatto emotivo della musica', // titolo grande
        anno: '2025 – 2026',
        descrizione: 'Progetto di tesi magistrale che esplora come strumenti di intelligenza artificiale generativa possano narrare al pubblico l\'impatto emotivo delle performance musicali attraverso video generati in autonomia.',
        // Dettagli nella tabella in basso al modal
        dettagli: [
            { etichetta: 'Ruolo',    valore: 'Ricercatrice, regia, produzione' },
            { etichetta: 'Anno',     valore: '2025 – 2026' },
            { etichetta: 'Corso',    valore: 'Tesi Magistrale — Ingegneria del Cinema' },
            { etichetta: 'Software', valore: 'AI generativa, strumenti video' },
            { etichetta: 'Stato',    valore: 'In corso' }
        ],
        // MODIFICA: metti qui il link al documento della tesi o a un video
        link: '#',
        linkTesto: 'Leggi la tesi'
    },

    // ── Cortometraggio VR "I remember" ───────────────────────
    'iremember': {
        categoria: 'VR 360° · Grafica 3D',
        categoriaColore: '#56c97a',
        titolo: '"I remember"',
        anno: '2025',
        descrizione: 'Cortometraggio in realtà virtuale realizzato interamente in grafica 3D su Blender. Esperienza immersiva a 360°, presentata alla mostra Recontemporary di Torino, al Museo del Cinema in occasione del Torino Film Industry e al festival ARWE (TO).',
        dettagli: [
            { etichetta: 'Ruolo',     valore: 'Grafica 3D, animazione 360° immersiva' },
            { etichetta: 'Anno',      valore: '2025' },
            { etichetta: 'Formato',   valore: 'VR 360° — Cortometraggio' },
            { etichetta: 'Software',  valore: 'Blender' },
            { etichetta: 'Festival',  valore: 'Recontemporary (TO) · Museo del Cinema · ARWE (TO)' }
        ],
        link: '#',
        linkTesto: 'Guarda il trailer'
    },

    // ── Terzo progetto (placeholder) ─────────────────────────
    // Quando scegli il progetto, sostituisci tutto qui sotto
    'placeholder': {
        categoria: 'In arrivo',
        categoriaColore: '#c9a96e',
        titolo: 'Progetto da definire',
        anno: '· · ·',
        descrizione: 'Questo slot è riservato al tuo terzo progetto in evidenza. Modifica i dati in script.js quando sei pronta.',
        dettagli: [],
        link: '#',
        linkTesto: ''
    }

};


/* ─────────────────────────────────────────────────────────────
   3. FUNZIONI PER IL MODAL
   ───────────────────────────────────────────────────────────── */

// Apre il modal con i dati del progetto indicato
function openProject(id) {
    // Cerca il progetto nell'oggetto "progetti" sopra
    var p = progetti[id];
    if (!p) return;   // se l'id non esiste, non fa nulla

    // Costruisce l'HTML interno del modal
    // (i dettagli vengono aggiunti solo se ci sono)
    var dettagliHTML = '';
    if (p.dettagli && p.dettagli.length > 0) {
        dettagliHTML = '<div class="modal-details">';
        p.dettagli.forEach(function(d) {
            dettagliHTML +=
                '<div class="modal-row">' +
                    '<span class="modal-row-label">' + d.etichetta + '</span>' +
                    '<span class="modal-row-value">' + d.valore + '</span>' +
                '</div>';
        });
        dettagliHTML += '</div>';
    }

    // Bottone link (solo se c'è un link e un testo)
    var linkHTML = '';
    if (p.link && p.link !== '#' && p.linkTesto) {
        linkHTML = '<a href="' + p.link + '" target="_blank" class="btn btn-outline" style="margin-top:1.5rem; display:inline-flex;">' + p.linkTesto + ' ↗</a>';
    }

    // Inserisce tutto nell'elemento #modalBody
    document.getElementById('modalBody').innerHTML =
        '<div class="modal-header">' +
            '<span class="modal-category" style="color:' + p.categoriaColore + '">' + p.categoria + '</span>' +
            '<h2 class="modal-title">' + p.titolo + '</h2>' +
            '<span class="modal-year">' + p.anno + '</span>' +
        '</div>' +
        '<p class="modal-desc">' + p.descrizione + '</p>' +
        dettagliHTML +
        linkHTML;

    // Mostra il modal aggiungendo la classe .open
    document.getElementById('projectModal').classList.add('open');

    // Blocca lo scroll della pagina dietro il modal
    document.body.style.overflow = 'hidden';
}

// Chiude il modal
function closeModal() {
    document.getElementById('projectModal').classList.remove('open');
    // Riattiva lo scroll della pagina
    document.body.style.overflow = '';
}

// Chiude il modal se l'utente clicca fuori dal pannello (sull'overlay scuro)
function closeModalOutside(event) {
    // event.target è l'elemento cliccato
    // Se è proprio l'overlay (non il pannello interno), chiude
    if (event.target === document.getElementById('projectModal')) {
        closeModal();
    }
}

// Chiude il modal anche premendo il tasto Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
