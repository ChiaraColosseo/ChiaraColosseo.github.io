/* ═══════════════════════════════════════════════════════════════
   progetti.js — Chiara Colosseo Portfolio

   Contiene i dati di tutti i progetti.
   script.js legge da qui per costruire le card e i modal.

   ── COME AGGIUNGERE UN PROGETTO ──────────────────────────────
   1. Copia il template in fondo al file
   2. Dagli un id unico (es. 'fragile')
   3. Compila i campi — quelli opzionali se li ometti non appaiono
   4. Aggiungilo alla card in index.html se vuoi che sia "in evidenza"

   ── CAMPI DISPONIBILI ────────────────────────────────────────
   OBBLIGATORI:
     id            → stringa unica, usata in openProject('id')
     categoria     → testo del tag colorato
     categoriaColore → colore esadecimale del tag
     titolo        → titolo del progetto
     anno          → es. '2025' o '2025–2026'
     descrizioneBreve → max 3-4 righe, appare nella card piccola
     descrizioneLunga → testo completo, appare nel modal

   OPZIONALI:
     formato       → es. 'Cortometraggio VR 360°'
     ruolo         → il tuo ruolo nel progetto
     tipo          → 'Progetto singolo' o 'Progetto di gruppo'
     software      → array di id (vedi softwareInfo in script.js)
     corso         → nome del corso universitario (se presente)
     youtube       → URL completo del video
     copertina     → percorso immagine copertina (es. 'images/cover.jpg')
     galleria      → array di percorsi immagine
     festival      → array di stringhe con nomi festival/mostre

   ── COLORI CATEGORIA ────────────────────────────────────────
     Cinema/Video:  '#e85d4a'
     Grafica 3D:    '#7b68ee'
     UX/UI:         '#4ab8c1'
     VR/Interattivi:'#56c97a'
     Social Media:  '#e8a23a'
     Tesi/Ricerca:  '#c9a96e'  (oro)
   ═══════════════════════════════════════════════════════════════ */

var progetti = {

    /* ════════════════════════════════════════════════
       VR / GRAFICA 3D
    ════════════════════════════════════════════════ */

    'iremember': {
        categoria: 'VR 360° · Grafica 3D',
        categoriaColore: '#56c97a',
        titolo: '"I remember — Digitali Immortali"',
        anno: '2025',
        formato: 'Cortometraggio VR 360°',
        descrizioneBreve: 'Open documentary in realtà virtuale che alterna scene immersive realizzate in 3D con Blender a riprese in 360°. Realizzato con Officine Fotografiche.',
        descrizioneLunga: 'Cortometraggio in realtà virtuale che tratta del post-mortem digitale, alternando scene immersive realizzate in grafica 3D con Blender a riprese in 360°. Esperienza realizzata con Officine Fotografiche e presentata alla mostra Recontemporary di Torino, al Museo del Cinema in occasione del Torino Film Industry e al festival ARWE (TO).',
        ruolo: 'Grafica 3D, animazione 360° immersiva',
        tipo: 'Progetto di gruppo',
        software: ['blender'],
        copertina: 'images/IRemember_copertina.png',
        galleria: [
            'images/IRemember_copertina.png',
            // 'images/iremember-2.jpg',  // ← aggiungi altre foto
        ],
        festival: [
            'Recontemporary, Torino',
            'Torino Film Industry — Museo del Cinema',
            'ARWE Festival, Torino'
        ]
    },

    'saveearthy': {
        categoria: 'VR · Grafica 3D',
        categoriaColore: '#56c97a',
        titolo: '"Save Earthy"',
        anno: '2023',
        formato: 'Esperienza VR',
        descrizioneBreve: 'Esperienza in realtà virtuale fruibile tramite visore VR. Ruolo di 3D Artist, Animator e sound designer.',
        descrizioneLunga: 'Realizzazione di un\'esperienza in realtà virtuale fruibile tramite visore VR per il corso di Realtà Virtuale. Ruolo: 3D Artist and Animator, sound designer.',
        ruolo: '3D Artist, Animator, Sound Designer',
        tipo: 'Progetto di gruppo',
        software: ['blender', 'unity'],
        corso: 'Realtà Virtuale — Ingegneria del Cinema',
        galleria: []
    },

    'lifeoftheparty': {
        categoria: 'Cinema · VR 360°',
        categoriaColore: '#e85d4a',
        titolo: '"Life of the Party"',
        anno: '2023',
        formato: 'Cortometraggio immersivo 360°',
        descrizioneBreve: 'Cortometraggio immersivo realizzato con tecniche di ripresa 360°. Ruoli: sceneggiatrice, fonico in presa diretta, montaggio audio ed effetti visivi.',
        descrizioneLunga: 'Realizzazione di un cortometraggio utilizzando le tecniche di ripresa 360° per il corso di Cinema Immersivo. Ruolo: sceneggiatrice, fonico in presa diretta, montaggio audio, effetti visivi.',
        ruolo: 'Sceneggiatrice, fonico, montaggio audio, VFX',
        tipo: 'Progetto di gruppo',
        software: ['premiere', 'aftereffects'],
        corso: 'Cinema Immersivo — Ingegneria del Cinema',
        galleria: []
    },

    /* ════════════════════════════════════════════════
       CINEMA E FOTOGRAFIA
    ════════════════════════════════════════════════ */

    'tesi': {
        categoria: 'Tesi Magistrale · AI Generativa',
        categoriaColore: '#c9a96e',
        titolo: 'IA e Arte: l\'impatto emotivo della musica',
        anno: '2025–2026',
        formato: 'Video generativi con AI',
        descrizioneBreve: 'Tesi magistrale che esplora come l\'intelligenza artificiale generativa possa narrare l\'impatto emotivo delle performance musicali attraverso video generati.',
        descrizioneLunga: 'Progetto di tesi magistrale che esplora come strumenti di intelligenza artificiale generativa possano narrare al pubblico l\'impatto emotivo delle performance musicali mediante video generati con strumenti di AI. Il progetto indaga il confine tra narrazione emotiva, tecnologia e arte visiva.',
        ruolo: 'Ricercatrice, regia, produzione',
        tipo: 'Progetto singolo',
        software: ['premiere', 'aftereffects'],
        corso: 'Tesi Magistrale — Ingegneria del Cinema e dei Mezzi di Comunicazione',
        galleria: []
    },

    'fragile': {
        categoria: 'Cinema',
        categoriaColore: '#e85d4a',
        titolo: '"Fragile"',
        anno: '2025',
        formato: 'Cortometraggio',
        descrizioneBreve: 'Cortometraggio attualmente in fase di post-produzione. Iscritto al concorso Vicinissima Festival 2026.',
        descrizioneLunga: 'Cortometraggio in fase di post-produzione. Ruolo: fonico in presa diretta, microfonista e segretaria di edizione. Iscritto al concorso Vicinissima Festival 2026.',
        ruolo: 'Fonico, microfonista, segretaria di edizione',
        tipo: 'Progetto di gruppo',
        software: ['premiere', 'davinci'],
        festival: [
            'Vicinissima Festival 2026 — In concorso'
        ],
        galleria: []
    },

    'lagrande': {
        categoria: 'Cinema',
        categoriaColore: '#e85d4a',
        titolo: '"La Grande Narrazione"',
        anno: '2025',
        formato: 'Cortometraggio · 100 ore',
        descrizioneBreve: 'Cortometraggio realizzato in 100 ore per l\'omonimo concorso. Secondo classificato al concorso 100 ore Torino 2025.',
        descrizioneLunga: 'Cortometraggio realizzato in 100 ore per il concorso "100 ore Torino 2025". Ruolo: fonico in presa diretta, microfonista, segretaria di edizione, editing audio e video, riprese. Secondo classificato al concorso.',
        ruolo: 'Fonico, segretaria di edizione, editing audio/video, riprese',
        tipo: 'Progetto di gruppo',
        software: ['premiere', 'davinci'],
        festival: [
            '100 ore Torino 2025 — 2° classificato'
        ],
        galleria: []
    },

    'goodslift': {
        categoria: 'Cinema',
        categoriaColore: '#e85d4a',
        titolo: '"The Goodslift"',
        anno: '2021–2022',
        formato: 'Cortometraggio',
        descrizioneBreve: 'Cortometraggio realizzato per il corso di Produzione Cinematografica. Ruoli: segretaria di edizione e assistente al montaggio video/audio.',
        descrizioneLunga: 'Cortometraggio realizzato per il corso di Produzione Cinematografica. Ruolo: segretaria di edizione e assistente al montaggio video/audio.',
        ruolo: 'Segretaria di edizione, assistente al montaggio',
        tipo: 'Progetto di gruppo',
        software: ['premiere'],
        corso: 'Produzione Cinematografica — Ingegneria del Cinema',
        galleria: []
    },

    'nodolagola': {
        categoria: 'Cinema',
        categoriaColore: '#e85d4a',
        titolo: 'Remake di "Nodo alla Gola"',
        anno: '2023',
        formato: 'Cortometraggio',
        descrizioneBreve: 'Remake di una scena di "Nodo alla Gola" di Hitchcock, variando montaggio e fotografia per il corso di Fotografia e Cinema Digitale.',
        descrizioneLunga: 'Remake di una scena di "Nodo alla Gola" variando montaggio e fotografia, per il corso di Fotografia e Cinema Digitale. Ruolo: gaffer, fonico in presa diretta, montaggio audio.',
        ruolo: 'Gaffer, fonico, montaggio audio',
        tipo: 'Progetto di gruppo',
        software: ['premiere', 'davinci'],
        corso: 'Fotografia e Cinema Digitale — Ingegneria del Cinema',
        galleria: []
    },

    /* ════════════════════════════════════════════════
       GRAFICA 3D
    ════════════════════════════════════════════════ */

    'grafica3d': {
        categoria: 'Grafica 3D',
        categoriaColore: '#7b68ee',
        titolo: 'Progetto Grafica 3D — Ambiente fotorealistico',
        anno: '2023',
        formato: 'Rendering 3D',
        descrizioneBreve: 'Riproduzione fotorealistica di un ambiente realizzata per il corso di Computer Grafica.',
        descrizioneLunga: 'Riproduzione fotorealistica di un ambiente per il corso di Computer Grafica. Il progetto esplora tecniche di modellazione, texturing e illuminazione per ottenere un risultato il più possibile realistico.',
        ruolo: 'Modellazione, texturing, rendering',
        tipo: 'Progetto singolo',
        software: ['blender'],
        corso: 'Computer Grafica — Ingegneria del Cinema',
        galleria: []
    },

    'animazione3d': {
        categoria: 'Grafica 3D · Animazione',
        categoriaColore: '#7b68ee',
        titolo: 'Animazione 3D — "Cadbury Dairy Milk Aliens"',
        anno: '2024',
        formato: 'Animazione 3D',
        descrizioneBreve: 'Riproduzione in 3D della celebre pubblicità "Cadbury Dairy Milk – Aliens" per il corso di Computer Animation.',
        descrizioneLunga: 'Riproduzione in 3D della pubblicità "Cadbury Dairy Milk – Aliens" per il corso di Computer Animation. Il progetto ha richiesto modellazione dei personaggi, rigging, animazione e rendering.',
        ruolo: 'Modellazione, rigging, animazione, rendering',
        tipo: 'Progetto singolo',
        software: ['maya'],
        corso: 'Computer Animation — Ingegneria del Cinema',
        galleria: []
    },

    'benzaiten': {
        categoria: 'Grafica 3D · Game Design',
        categoriaColore: '#7b68ee',
        titolo: '"Benzaiten\'s Solo"',
        anno: '2024',
        formato: 'Videogioco',
        descrizioneBreve: 'Videogioco realizzato per il corso di Game Design. Ruoli: 3D artist, animator, creazione della città, coordinatore del team.',
        descrizioneLunga: 'Realizzazione di un videogioco per il corso di Game Design and Gamification. Ruolo: 3D artist and animator, creazione città, coordinatore team e ricerca reference.',
        ruolo: '3D Artist, Animator, Coordinatore team',
        tipo: 'Progetto di gruppo',
        software: ['blender', 'unity'],
        corso: 'Game Design and Gamification — Ingegneria del Cinema',
        galleria: []
    },

    /* ════════════════════════════════════════════════
       GRAFICA UX/UI
    ════════════════════════════════════════════════ */

    'homeow': {
        categoria: 'UX/UI · App Design',
        categoriaColore: '#4ab8c1',
        titolo: '"Homeow" — App per gatti',
        anno: '2024',
        formato: 'Applicazione Android',
        descrizioneBreve: 'App Android per controllare un dispenser di cibo per gatti. Ruoli: 3D artist, designer, prototipazione su Figma.',
        descrizioneLunga: 'Realizzazione di un\'applicazione Android che controllasse un dispenser di cibo per gatti e creazione dello stesso dispenser. Ruolo: 3D artist, designer, prototipazione su Figma, attenzione alla user experience. Per il corso di Digital Interaction Design.',
        ruolo: '3D Artist, Designer, UX/UI, Prototipazione',
        tipo: 'Progetto di gruppo',
        software: ['figma', 'blender'],
        corso: 'Digital Interaction Design — Ingegneria del Cinema',
        galleria: []
    },

    'lastbite': {
        categoria: 'UX/UI · App Design',
        categoriaColore: '#4ab8c1',
        titolo: '"LastBite" — App anti-spreco',
        anno: '2024',
        formato: 'Applicazione Android',
        descrizioneBreve: 'App Android per ridurre lo spreco alimentare monitorando le scadenze e suggerendo ricette svuota-frigo.',
        descrizioneLunga: 'Realizzazione di un\'applicazione Android per salvaguardare lo spreco alimentare monitorando le date di scadenza degli alimenti in dispensa e suggerendo ricette svuota-frigo. Ruolo: designer, prototipazione su Figma, attenzione alla user experience. Per il corso di User Experience Design.',
        ruolo: 'Designer, UX/UI, Prototipazione',
        tipo: 'Progetto di gruppo',
        software: ['figma'],
        corso: 'User Experience Design — Ingegneria del Cinema',
        galleria: []
    },

    'instagramwellbeing': {
        categoria: 'UX/UI · Prototipazione',
        categoriaColore: '#4ab8c1',
        titolo: 'Prototipo Instagram per il benessere digitale',
        anno: '2022',
        formato: 'Prototipo UI',
        descrizioneBreve: 'Riprogettazione di Instagram su Figma orientata al rispetto del benessere digitale degli utenti.',
        descrizioneLunga: 'Creazione su Figma di un prototipo di Instagram volto al rispetto del benessere digitale degli utenti. Il progetto esplora pattern di design alternativi che riducono i meccanismi di dipendenza tipici dei social media. Per il corso di Benessere Digitale.',
        ruolo: 'UX Designer, Prototipazione',
        tipo: 'Progetto singolo',
        software: ['figma'],
        corso: 'Benessere Digitale — Ingegneria del Cinema',
        galleria: []
    },

    /* ════════════════════════════════════════════════
       PERCORSI INTERATTIVI
    ════════════════════════════════════════════════ */

    'auroraix': {
        categoria: 'Interattivo · Audio',
        categoriaColore: '#56c97a',
        titolo: '"AuroraIX" — Progetto interattivo',
        anno: '2022',
        formato: 'Installazione interattiva + trailer',
        descrizioneBreve: 'Progetto interattivo e trailer per il corso di Interactive Media. Ruoli: fonico in presa diretta, montaggio audio, effetti sonori.',
        descrizioneLunga: 'Progetto interattivo "AuroraIX" e trailer dello stesso per il corso di Interactive Media. Ruolo: fonico in presa diretta, montaggio audio, effetti sonori.',
        ruolo: 'Fonico, montaggio audio, effetti sonori',
        tipo: 'Progetto di gruppo',
        software: ['isadora'],
        corso: 'Interactive Media — Ingegneria del Cinema',
        galleria: []
    },

    'carbonchaos': {
        categoria: 'Interattivo · Transmedia',
        categoriaColore: '#56c97a',
        titolo: '"Carbon Chaos" — ARG Transmediale',
        anno: '2023',
        formato: 'Alternate Reality Game',
        descrizioneBreve: 'Alternate Reality Game transmediale. Ruoli: coordinamento team, progettazione del percorso utente, sceneggiatura.',
        descrizioneLunga: 'Creazione di un Alternate Reality Game transmediale per il corso di Transmedia. Ruolo: coordinamento team, progettazione del percorso utente, sceneggiatura.',
        ruolo: 'Coordinamento team, UX, Sceneggiatura',
        tipo: 'Progetto di gruppo',
        software: ['klynt'],
        corso: 'Transmedia — Ingegneria del Cinema',
        galleria: []
    },

    /* ════════════════════════════════════════════════
       SOCIAL MEDIA
    ════════════════════════════════════════════════ */

    'makemake': {
        categoria: 'Social Media · Marketing',
        categoriaColore: '#e8a23a',
        titolo: 'Campagna digitale — MakeMake',
        anno: '2024',
        formato: 'Strategia di marketing digitale',
        descrizioneBreve: 'Strategia digitale e campagna marketing per l\'azienda MakeMake di Avigliana, per il corso di Digital Strategy.',
        descrizioneLunga: 'Realizzazione di una strategia digitale e campagna marketing digitale e social per l\'azienda MakeMake di Avigliana. Comprende analisi del target, piano editoriale, contenuti per i canali social e metriche di valutazione. Per il corso di Digital Strategy.',
        ruolo: 'Strategia digitale, content creation',
        tipo: 'Progetto di gruppo',
        software: ['canva'],
        corso: 'Digital Strategy — Ingegneria del Cinema',
        galleria: []
    },

    'milego': {
        categoria: 'Social Media',
        categoriaColore: '#e8a23a',
        titolo: 'Pagina Instagram — MiLegoAlTerritorio',
        anno: '2020–2023',
        formato: 'Gestione social',
        descrizioneBreve: 'Creazione e gestione di post e storie della pagina Instagram del team studentesco MiLegoAlTerritorio del Politecnico di Torino.',
        descrizioneLunga: 'Creazione e gestione di alcuni post e storie della pagina Instagram del team studentesco MiLegoAlTerritorio del Politecnico di Torino. Il team si occupa di sensibilizzazione sul rischio sismico nelle scuole.',
        ruolo: 'Social media manager, content creator',
        tipo: 'Progetto di gruppo',
        software: ['canva'],
        galleria: []
    },

    'hideouttipo': {
        categoria: 'Social Media · Video',
        categoriaColore: '#e8a23a',
        titolo: 'Video editing — HideOut PoliTo',
        anno: '2025–2026',
        formato: 'Reel Instagram',
        descrizioneBreve: 'Editing dei reel Instagram per il team studentesco HideOut PoliTo.',
        descrizioneLunga: 'Editing dei reel Instagram per il team studentesco HideOut PoliTo del Politecnico di Torino. Cura del montaggio, ritmo e stile visivo dei contenuti social.',
        ruolo: 'Video editor',
        tipo: 'Progetto di gruppo',
        software: ['premiere'],
        galleria: []
    }

    /* ════════════════════════════════════════════════
       TEMPLATE — copia e compila per nuovi progetti
    ════════════════════════════════════════════════

    'id-progetto': {
        categoria: '',
        categoriaColore: '#e85d4a',
        titolo: '',
        anno: '',
        formato: '',
        descrizioneBreve: '',
        descrizioneLunga: '',
        ruolo: '',
        tipo: 'Progetto singolo',
        software: [],
        corso: '',
        youtube: '',
        copertina: 'images/nome-file.jpg',
        galleria: [],
        festival: []
    },

    ════════════════════════════════════════════════ */

};