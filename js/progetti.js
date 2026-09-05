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
    'the-goodslift': {
        categoria: 'Cinema/Video',
        categoriaColore: '#e85d4a',
        titolo: 'The Goodslift',
        anno: '2020',
        formato: 'Cortometraggio',
        descrizioneBreve: "La routine di un uomo viene spezzata da un incredibile viaggio nel passato.",
        descrizioneLunga: "Cortometraggio realizzato da un gruppo di giovani studenti cineasti. Un uomo entra in un ascensore e compirà un viaggio attraverso momenti salienti della sua vita, mentre una figura misteriosa lo attende. (Durata: 5')",
        ruolo: 'Segretaria di edizione, assistente al montaggio video-audio',
        tipo: 'Progetto di gruppo',
        software: ['premiere'],
        corso: 'Produzione Cinematografica',
        youtube: 'https://youtu.be/4p80b_Hx9KE?feature=shared',
        copertina: 'images/goodslift.jpg'
    },
    'aurora-ix': {
        categoria: 'VR/Interattivi',
        categoriaColore: '#56c97a',
        titolo: 'AuroraIX',
        anno: '2022',
        formato: 'Installazione interattiva',
        descrizioneBreve: "Installazione artistica interattiva ispirata dal quartiere Aurora a Torino.",
        descrizioneLunga: "Obiettivo del corso era realizzare un'installazione artistica interattiva per rappresentare la riqualificazione del quartiere. Si partecipa a coppie: colpendo 3 chiodi in successione cromatica/sonora, lo schermo \"deoscura\" progressivamente un video del quartiere. Se non si collabora in tempo, il video torna oscurato. (Durata: 10')",
        ruolo: 'Idea, supervisione stampanti 3D e giocatori',
        tipo: 'Progetto di gruppo',
        software: ['isadora'],
        corso: 'Interactive Media',
        copertina: 'images/auroraix.jpg'
    },
    'carbon-chaos': {
        categoria: 'VR/Interattivi',
        categoriaColore: '#56c97a',
        titolo: 'Carbon Chaos',
        anno: '2023',
        formato: 'ARG (Alternate Reality Game)',
        descrizioneBreve: "Progetto transmediale in cui l'utente aiuta una scienziata del Politecnico tramite bot Telegram.",
        descrizioneLunga: "Progetto transmediale Carbon Chaos, un ARG (alternate reality game) in cui l'utente aiuta una scienziata e ricercatrice del Politecnico tramite bot su Telegram ed indizi reali.",
        ruolo: 'Sceneggiatrice, video editor',
        tipo: 'Progetto di gruppo',
        software: ['klynt', 'davinci'],
        corso: 'Transmedia',
        youtube: 'https://youtu.be/dyVO3kZ77ng?si=y7ypxP3o_Jr5mllM',
        copertina: 'images/carbon-chaos.jpg'
    },
    'fragile': {
        categoria: 'Cinema/Video',
        categoriaColore: '#e85d4a',
        titolo: 'Fragile',
        anno: '2023', 
        formato: 'Cortometraggio',
        descrizioneBreve: "Un vecchino segregato in casa riceve un pacco inaspettato con un visore VR.",
        descrizioneLunga: "Cortometraggio indipendente tra ex studenti universitari. Un vecchino, con una routine abitudinaria e segregato in casa, riceve un pacco inaspettato con un visore VR e rivive una vita felice. (Durata: 5'55\")",
        ruolo: 'Gaffer, fonico presa diretta e microfonista, montaggio audio',
        tipo: 'Progetto di gruppo',
        software: ['davinci'],
        corso: 'Produzione Indipendente',
        copertina: 'images/fragile.jpg',
        festival: []
    },
    'music-video': {
        categoria: 'Cinema/Video',
        categoriaColore: '#e85d4a',
        titolo: 'Music',
        anno: '2020',
        formato: 'Video editing',
        descrizioneBreve: "Montaggio e video editing su un video musicale.",
        descrizioneLunga: "Video editing dinamico di un video musicale utilizzando contenuti e musica stock. (Durata: 38\")",
        tipo: 'Progetto singolo',
        copertina: 'images/music.jpg'
    },
    'animals-video': {
        categoria: 'Cinema/Video',
        categoriaColore: '#e85d4a',
        titolo: 'Animals',
        anno: '2020',
        formato: 'Video editing',
        descrizioneBreve: "Montaggio e video editing focalizzato sugli animali.",
        descrizioneLunga: "Video editing di un video a tema animali utilizzando contenuti e musica stock. (Durata: 54\")",
        tipo: 'Progetto singolo',
        copertina: 'images/animals.jpg'
    },
    'food-video': {
        categoria: 'Cinema/Video',
        categoriaColore: '#e85d4a',
        titolo: 'Food',
        anno: '2020',
        formato: 'Video editing',
        descrizioneBreve: "Montaggio e video editing dedicato al mondo del cibo.",
        descrizioneLunga: "Video editing di un video culinario utilizzando contenuti e musica stock. (Durata: 1'16\")",
        tipo: 'Progetto singolo',
        copertina: 'images/food.jpg'
    },
    'job-film-days': {
        categoria: 'Cinema/Video',
        categoriaColore: '#e85d4a',
        titolo: 'Job Film Days',
        anno: '2023',
        formato: 'Giuria / Volontariato',
        descrizioneBreve: "Giuria studentesca internazionale per il Job Film Days.",
        descrizioneLunga: "Ho preso parte nella giuria studentesca del festival Job Film Days a Torino. Dopo aver visionato i progetti internazionali presentati abbiamo dovuto eleggere il migliore in base alle tematiche proposte.",
        copertina: 'images/jobfilmdays.jpg'
    },
    'torino-film-industry': {
        categoria: 'VR/Interattivi',
        categoriaColore: '#56c97a',
        titolo: 'Torino Film Industry',
        anno: '2024',
        formato: 'Giuria / Volontariato',
        descrizioneBreve: "Presidio e gestione di postazioni VR al Torino Film Industry.",
        descrizioneLunga: "Nell'ambito del Torino Film Industry ho avuto il piacere di presiedere una delle postazioni VR presenti per aiutare gli interessati ad usufruire delle opere immersive proposte.",
        copertina: 'images/tfi.jpg'
    },
    'microcinema': {
        categoria: 'Cinema/Video',
        categoriaColore: '#e85d4a',
        titolo: 'Microcinema - Workshop',
        anno: '2024',
        formato: 'Video editing / Workshop',
        descrizioneBreve: "Realizzazione di una breve opera e del suo trailer per il Festival Incanti.",
        descrizioneLunga: "Partecipazione al workshop di Microcinema dalla compagnia Frau Trapp in occasione del Festival Incanti. Abbiamo costruito e realizzato un breve opera della quale ho fatto un veloce trailer personale per il portfolio.",
        copertina: 'images/microcinema.jpg'
    },
    'set-sentinel': {
        categoria: 'Cinema/Video',
        categoriaColore: '#e85d4a',
        titolo: 'Sentinel',
        anno: '2022',
        formato: 'Esperienza sul set',
        descrizioneBreve: "Esperienza sul set cinematografico in veste di Gaffer.",
        descrizioneLunga: "Esperienza formativa e lavorativa sul set nel ruolo di Gaffer per la produzione del progetto Sentinel.",
        ruolo: 'Gaffer',
        copertina: 'images/sentinel.jpg'
    },
    'set-h010n': {
        categoria: 'Cinema/Video',
        categoriaColore: '#e85d4a',
        titolo: 'H010N',
        anno: '2023',
        formato: 'Esperienza sul set',
        descrizioneBreve: "Esperienza sul set cinematografico in veste di Runner.",
        descrizioneLunga: "Esperienza formativa e lavorativa sul set nel ruolo di Runner per la produzione del progetto H010N.",
        ruolo: 'Runner',
        copertina: 'images/h010n.jpg'
    },
    'onde-quadre': {
        categoria: 'Cinema/Video',
        categoriaColore: '#e85d4a',
        titolo: 'Radio OndeQuadre',
        anno: '2024–2025',
        formato: 'Esperienza radiofonica',
        descrizioneBreve: "Attività come speaker per la web radio del Politecnico.",
        descrizioneLunga: "Attività continuativa nel ruolo di speaker e gestione del broadcast per l'emittente radiofonica universitaria Radio OndeQuadre.",
        ruolo: 'Speaker',
        copertina: 'images/ondequadre.jpg'
    },
    'stanza-dahu': {
        categoria: 'Grafica 3D',
        categoriaColore: '#7b68ee',
        titolo: 'Stanza del Dahu',
        anno: '2024',
        formato: 'Ambiente VR 3D',
        descrizioneBreve: "Creazione di un ambiente VR basato sulle leggende del Dahu della Valle d'Aosta.",
        descrizioneLunga: "Realizzazione della landing page e dell'ambiente per un'applicazione VR destinata a ricercatori del Politecnico. Il progetto è basato sul tema della Val d'Aosta, caratterizzato da un cottage di montagna e dalla presenza del leggendario Dahu. Sviluppato tramite modellazione su Blender e impostazione dell'ambiente su Unity.",
        software: ['blender', 'unity'],
        tipo: 'Progetto singolo',
        copertina: 'images/dahu.jpg'
    },
    'rocking-horse': {
        categoria: 'Grafica 3D',
        categoriaColore: '#7b68ee',
        titolo: 'Rocking Horse',
        anno: '2023',
        formato: 'Animazione 3D',
        descrizioneBreve: "Modellazione e animazione 3D di un classico cavallino a dondolo.",
        descrizioneLunga: "Progetto di computer grafica comprendente la modellazione, i materiali e una breve animazione 3D di un cavallino di legno a dondolo.",
        software: ['blender'],
        tipo: 'Progetto singolo',
        copertina: 'images/rockinghorse.jpg'
    },
    'lava-lamp': {
        categoria: 'Grafica 3D',
        categoriaColore: '#7b68ee',
        titolo: 'LavaLamp',
        anno: '2023',
        formato: 'Animazione 3D',
        descrizioneBreve: "Modellazione e simulazione 3D di una lampada di lava.",
        descrizioneLunga: "Progetto di computer grafica comprendente la modellazione, la gestione fluidi/materiali e una breve animazione 3D di una classica lampada di lava.",
        software: ['blender'],
        tipo: 'Progetto singolo',
        copertina: 'images/lavalamp.jpg'
    },
    'quiet-island': {
        categoria: 'Grafica 3D',
        categoriaColore: '#7b68ee',
        titolo: 'Quiet Island',
        anno: '2020',
        formato: 'Animazione 3D',
        descrizioneBreve: "Animazione di un'isoletta low-poly accompagnata da effetti sonori (Foley).",
        descrizioneLunga: "Modellazione e breve animazione 3D di un'isoletta dallo stile low-poly. Il progetto include un lavoro di sound design con l'aggiunta e sincronizzazione di effetti sonori.",
        software: ['blender', 'davinci'],
        tipo: 'Progetto singolo',
        copertina: 'images/quietisland.jpg'
    },
    'post-giulia': {
        categoria: 'Social Media',
        categoriaColore: '#e8a23a',
        titolo: 'Post Giulia (Book Review)',
        anno: '2024 (In corso)',
        formato: 'Social Media Management',
        descrizioneBreve: "Creazione copertine 3D e gestione pagina Instagram di recensioni libri.",
        descrizioneLunga: "Attività di social media management per la pagina instagram \"Giulia book review\". Mi occupo della creazione su Blender delle copertine 3D per il profilo, supportando il flusso creativo occasionalmente anche con l'intelligenza artificiale generativa.",
        software: ['blender'],
        ruolo: '3D Artist / Social Media Manager',
        copertina: 'images/postgiulia.jpg'
    },
    'collegio-icm': {
        categoria: 'Social Media',
        categoriaColore: '#e8a23a',
        titolo: 'Collegio ICM',
        anno: '2025–2026',
        formato: 'Social Media Management',
        descrizioneBreve: "Gestione e creazione post per la pagina Instagram del Collegio ICM.",
        descrizioneLunga: "Attività di social media management per la pagina ufficiale Instagram del Collegio ICM (Politecnico di Torino), compresa l'ideazione e creazione grafica dei post.",
        software: ['canva'],
        ruolo: 'Social Media Manager',
        copertina: 'images/collegioicm.jpg'
    },
    'team-milego': {
        categoria: 'Social Media',
        categoriaColore: '#e8a23a',
        titolo: 'Team MiLego',
        anno: '2020–2022',
        formato: 'Social Media Management',
        descrizioneBreve: "Creazione contenuti e gestione social per il team Mi Lego al Territorio.",
        descrizioneLunga: "Creazione di post, contenuti grafici e video per l'account Instagram del team studentesco \"Mi lego al territorio\", accompagnata dall'intera attività di social media management della pagina.",
        software: ['davinci', 'gimp'],
        ruolo: 'Social Media Manager & Video Editor',
        copertina: 'images/milego.jpg'
    },
    'i-remember': {
        categoria: 'VR/Interattivi',
        categoriaColore: '#56c97a',
        titolo: 'I remember',
        anno: '2025',
        formato: 'Cortometraggio VR 360°',
        descrizioneBreve: "Open documentary immersivo sulla post mortem digitale e manipolazione IA.",
        descrizioneLunga: "Open documentary immersivo riguardante il delicato tema della post mortem digitale: un'indagine su che fine fanno i nostri dati dopo la nostra morte e su come possano venire manipolati dall'intelligenza artificiale. Mi sono occupata della creazione, modellazione e animazione 3D degli ambienti immersivi (VR) del cortometraggio.",
        software: ['blender'],
        ruolo: '3D Environment Artist',
        copertina: 'images/iremember.jpg',
        festival: []
    },
    '100-ore': {
        categoria: 'Cinema/Video',
        categoriaColore: '#e85d4a',
        titolo: '100ore?',
        anno: '2025',
        formato: 'Cortometraggio',
        descrizioneBreve: "Progetto in fase di sviluppo/realizzazione.",
        descrizioneLunga: "Progetto di cortometraggio (attualmente in lavorazione o pre-produzione).",
        copertina: 'images/100ore.jpg'
    },
    'tff-2025': {
        categoria: 'Cinema/Video',
        categoriaColore: '#e85d4a',
        titolo: 'Torino Film Festival',
        anno: '2025',
        formato: 'Giuria / Volontariato',
        descrizioneBreve: "Partecipazione e supporto alle attività del Torino Film Festival.",
        descrizioneLunga: "Esperienza nell'ambito della giuria/volontariato durante l'edizione 2025 del Torino Film Festival.",
        copertina: 'images/tff.jpg'
    }
};

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
