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
     id              → stringa unica, usata in openProject('id')
     categoria       → testo del tag colorato
     categoriaColore → colore esadecimale del tag
     titolo          → titolo del progetto
     anno            → es. '2025' o '2025–2026'
     descrizioneBreve → max 3-4 righe, appare nella card piccola
     descrizioneLunga → testo completo, appare nel modal

   OPZIONALI:
     formato         → es. 'Cortometraggio VR 360°'
     ruolo           → il tuo ruolo nel progetto
     tipo            → 'Progetto singolo' o 'Progetto di gruppo'
     software        → array di id (vedi softwareInfo in script.js)
     corso           → nome del corso universitario (se presente)
     youtube         → URL completo del video
     copertina       → percorso immagine copertina
     galleria        → array di percorsi immagine
     festival        → array di stringhe con nomi festival/mostre

   ── COLORI CATEGORIA ────────────────────────────────────────
    '#e85d4a': 'cinema',
        '#7b68ee': '3d',
        '#4ab8c1': 'ux',
        '#56c97a': 'vr',
        '#ee67d3': 'social',
       '#df8134': 'artificiale'
       '#2d13f4': 'sound'
   ═══════════════════════════════════════════════════════════════ */


var progetti = {

    // ==========================================
    // PROGETTI POLI
    // ==========================================

    'the-goodslift': {
        categoria: 'Cinema',
        categoriaColore: '#e85d4a',
        titolo: 'The Goodslift',
        anno: '2021-2022',
        formato: 'Cortometraggio',
        durata: '5:28 minuti',
        descrizioneBreve: "Cortometraggio universitario in cui, attraverso un mistico viaggio in ascensore, un uomo rive alcuni momenti salienti della sua vita.",
        descrizioneLunga: "<i>The Goodslift</i> è un cortometraggio realizzato nell'ambito del corso di Produzione Cinematografica.<br><br>La storia segue un uomo mentre entra apparentemente in un normale ascensore diretto al lavoro, per poi attraversare tre momenti salienti della propria vita: l'infanzia, l'età adulta e la perdita della madre. Il viaggio culmina nell'incontro con la morte stessa.<br><br>Questo è stato il nostro primo cortometraggio e ho ricoperto i ruoli di segretaria di edizione e assistente al montaggio video e audio.",
        ruolo: 'Segretaria di edizione, assistente al montaggio video e audio',
        tipo: 'Progetto di gruppo',
        software: ['premiere'],
        corso: 'Produzione Cinematografica',
        link: 'https://youtu.be/4p80b_Hx9KE?feature=shared',
        linkTesto: 'Guarda su YouTube',
        copertina: 'images/TheGoodsliftTitolo.png',
        galleria: ['images/TheGoodsliftAttore.png', 'images/TheGoodsliftTitolo.png'],
        festival: ['La Notte dei Corti (2022)']
    },

    'aurora-ix': {
        categoria: ['Installazione interattiva', 'Sound'],
        categoriaColore: '#56c97a',
        titolo: 'AuroraIX',
        anno: '2022',
        formato: 'Installazione interattiva',
        durata: '',
        descrizioneBreve: "Installazione artistica interattiva ispirata al quartiere Aurora di Torino, in cui il pubblico contribuisce alla riqualificazione simbolica del quartiere attraverso suono e interazione.",
        descrizioneLunga: "<i>Aurora IX</i> è un'installazione artistica interattiva ispirata al quartiere Aurora di Torino e sviluppata nell'ambito di un progetto di riqualificazione.<br><br>Un video inizialmente oscurato mostra il quartiere attraverso i suoi suoni: voci, automobili e rumori della vita quotidiana. Il pubblico può interagire con l'installazione attraverso alcune postazioni composte da tre chiodi colorati stampati in 3D e un piccolo martello. Colpendo i chiodi nella corretta sequenza cromatica e musicale, vengono progressivamente rivelate porzioni del video. L'interazione può essere ripetuta liberamente e, quando tutte le sequenze vengono completate, il video diventa completamente visibile. Se l'installazione rimane inattiva per un periodo prolungato, il video torna invece a oscurarsi.<br><br>Il progetto traduce così il concetto di riqualificazione collettiva in un'interazione concreta: il risultato finale dipende dal contributo di tutte le persone che partecipano.",
        ruolo: 'Sound Design, coordinamento attività',
        tipo: 'Progetto di gruppo',
        software: ['isadora'],
        corso: 'Interactive Media',
        link: '',
        linkTesto: '',
        copertina: 'images/AuroraIX-copertina.jpg'
    },

    'carbon-chaos': {
        categoria: 'ARG Interattivo',
        categoriaColore: '#56c97a',
        titolo: 'Carbon Chaos',
        anno: '2023',
        durata: '',
        formato: 'ARG (Alternate Reality Game)',
        descrizioneBreve: "ARG transmediale che combina social network, chat, indizi interattivi e attività su campo per ricostruire e svelare un mistero - tra realtà e finzione.",
        descrizioneLunga: "<i>Carbon Chaos</i> è un Alternate Reality Game (ARG) ispirato a un romanzo di fantascienza e sviluppato come esperienza narrativa transmediale.<br><br>Il progetto costruisce una storia che si sviluppa tra realtà e finzione, utilizzando diversi canali e strumenti per coinvolgere progressivamente il pubblico.<br><br>L'esperienza inizia attraverso Instagram, dove l'utente entra in contatto con EcoVita, un gruppo apparentemente impegnato nella salvaguardia dell'ambiente. Il profilo social del gruppo deve sembrare il più realistico possibile, per far sì che il progetto transmediale si sviluppi come parte integrante della realtà (ovviamente, prima o poi, l'utente si accorgerà di star giocando... ma l'ARG deve avere queste caratteristiche di pseudo-realtà). Alcuni contenuti del profilo conducono quindi ad un rabbit hole che porta l'utente ad entrare nel gruppo Telegram di EcoVita, attraverso il quale vengono organizzati incontri e condivise nuove informazioni.<br>Un bot mascherato da affiliato di EcoVita scriverà all'utente, chiedendogli di aiutare il gruppo con un'indagine segreta per monitorare e bloccare il lavoro pericoloso di una ricercatrice del Politecnico di Torino. Il proseguio della storia prevede che l'utente interagisca tramite chat con la ricercatrice (anch'essa un bot Telegram) per aiutarla nella ricerca, ma nel mentre invii le informazioni al gruppo EcoVita.<br>Con una serie di indizi, enigmi e attività interattive, sia online sia su campo, l'utente prosegue nella missione ed inizia a scoprire delle verità segrete. Infine, l'utente deve decidere da quale parte schierarsi, sbloccando due possibili finali alternativi (uno dei quali darà le basi per far nascere la storia descritta nel libro di partenza).<br><br>Il progetto esplora quindi la costruzione di una narrazione distribuita su più media, in cui il pubblico non si limita ad assistere alla storia, ma deve contribuire attivamente alla sua scoperta. L'obiettivo del progetto risiedeva nel creare una narrazione coerente e che rendesse fluido e naturale il passaggio fra i media (realtà compresa).<br><br>Il progetto è accompagnato da un trailer di presentazione.",
        ruolo: 'Sceneggiatrice, video editor',
        tipo: 'Progetto di gruppo',
        software: ['klynt', 'davinci'],
        corso: 'Transmedia',
        link: '',
        linkTesto: '',
        copertina: 'images/CarbonChaos-copertina.jpg',
        galleria: [],
        festival: [],
        correlati: [
        { id: 'carbon-chaos-trailer', etichetta: 'Trailer — Carbon Chaos' }
    ]
    },

    'carbon-chaos-trailer': {
        categoria: 'Video',
        categoriaColore: '#e85d4a',
        titolo: 'Carbon Chaos - Trailer',
        anno: '2023',
        durata: '3:30 minuti',
        formato: 'Video editing',
        descrizioneBreve: "Trailer di presentazione per <i>Carbon Chaos</i>, ARG transmediale che sviluppa una narrazione tra social network, realtà e finzione.",
        descrizioneLunga: "Trailer realizzato per presentare <i>Carbon Chaos</i>, l'Alternate Reality Game sviluppato come progetto transmediale. Il video introduce l'atmosfera e le tematiche dell'esperienza, anticipando il mistero alla base della narrazione e il coinvolgimento del pubblico nella sua scoperta.<br><br>Il trailer è stato realizzato come contenuto di presentazione dell'ARG, con l'obiettivo di comunicare in modo sintetico il concept e suscitare curiosità verso l'esperienza completa.",
        ruolo: 'Video editor',
        software: ['davinci'],
        corso: 'Transmedia',
        link: 'https://youtu.be/dyVO3kZ77ng?si=y7ypxP3o_Jr5mllM',
        linkTesto: 'Guarda su YouTube',
        copertina: 'images/CarbonChaos-copertina.jpg',
        galleria: [],
        festival: [],
        correlati: [
        { id: 'carbon-chaos', etichetta: 'Carbon Chaos — esperienza interattiva (ARG)' }
    ]
    },

    'big-bang-theory-living-room': {
        categoria: 'Grafica 3D',
        categoriaColore: '#7b68ee',
        titolo: "The Big Bang Theory's living room",
        anno: '2023',
        formato: 'Modellazione 3D',
        tipo: 'Progetto di gruppo',
        descrizioneBreve: "Modellazione 3D del salotto della sitcom <i>The Big Bang Theory</i> in chiave realistica, dalla modellazione degli elementi alla definizione di materiali e illuminazione.",
        descrizioneLunga: "<i>The Big Bang Theory's Living Room</i> è un progetto di ricostruzione 3D realizzato a partire da immagini di riferimento del celebre salotto della serie televisiva. L'obiettivo era riprodurre l'ambiente in modo realistico, studiandone la composizione, gli oggetti, i materiali e l'illuminazione.<br><br>Il lavoro ha coinvolto la modellazione degli elementi della scena, la creazione e applicazione delle texture, lo studio dei materiali e la configurazione delle luci, con particolare attenzione alla corrispondenza con l'ambiente originale.",
        software: ['blender'],
        corso: 'Computer Grafica',
        copertina: 'images/bbt-copertina.jpg',
        galleria: ['images/bbt-notte.jpg', 'images/bbt-libreria.jpg', 'images/bbt-laterale.jpg', 'images/bbt-lateralenotte.jpg', 'images/bbt-dettagli.jpg', 'images/bbt-dettaglio.jpg']
    },

    'save-earthy': {
        categoria: 'Interattivo VR',
        categoriaColore: '#56c97a',
        titolo: 'Save Earthy',
        anno: '2023-2024',
        formato: 'Esperienza VR',
        descrizioneBreve: "Esperienza VR educativa per studenti delle scuole medie che insegna, attraverso l'interazione con la mascotte Earthy, come ridurre gli sprechi nelle azioni quotidiane.",
        descrizioneLunga: "<i>Save Earthy</i> è un'esperienza in realtà virtuale pensata per studenti delle scuole medie e dedicata al tema degli sprechi domestici e della sostenibilità ambientale.<br>L'utilizzo della realtà virtuale permette di trasformare semplici comportamenti quotidiani in attività da sperimentare direttamente all'interno dell'ambiente immersivo.<br><br>Guidato dalla mascotte Earthy, l'utente affronta diverse attività legate a semplici azioni quotidiane, come ridurre lo spreco di acqua ed energia. Il comportamento del giocatore influenza direttamente lo stato di Earthy, che può passare da una condizione iniziale di malessere a uno stato di benessere attraverso le azioni corrette.<br><br>Per il progetto ho lavorato alla modellazione della mascotte e degli ambienti 3D, successivamente inseriti in Unity, oltre alla ricerca e selezione degli elementi di sound design. Ho inoltre sviluppato le curiosità informative associate alle diverse attività (come i dati relativi allo spreco d'acqua) e lavorato al video editing della cutscene iniziale, realizzata con materiale stock e pensata per un'esperienza a 360°.",
        ruolo: 'Modellatrice e animatrice 3D',
        software: ['blender', 'unity'],
        corso: 'Realtà Virtuale',
        link: 'https://peppecar.itch.io/save-earthy',
        linkTesto: 'Provalo su Itch.io',
        copertina: 'images/save-earthy.jpg',
        galleria: [],
        correlati: [
        { id: 'save-earthy-trailer', etichetta: 'Trailer — Save Earthy' },
        { id: 'save-earthy-mascotte', etichetta: 'Mascotte — Save Earthy' }
    ]
    },

    'save-earthy-mascotte': {
        categoria: 'Grafica 3D',
        categoriaColore: '#7b68ee',
        titolo: 'Mascotte Earthy',
        anno: '2023-2024',
        formato: 'Animazione 3D',
        tipo: 'Progetto di gruppo',
        descrizioneBreve: "Ideazione, modellazione e animazione 3D della mascotte Earthy, progettata per reagire alle azioni dell'utente durante l'esperienza VR <i>Save Earthy</i>.",
        descrizioneLunga: "La mascotte Earthy per l'esperienza VR <i>Save Earthy</i> è stata progettata per rappresentare visivamente lo stato dell'ambiente durante l'esperienza: in base alle azioni dell'utente, Earthy attraversa cinque diversi stati, caratterizzati da variazioni nell'espressione, negli elementi presenti sul globo e nelle condizioni generali del personaggio. Si passa, ad esempio, da uno stato iniziale caratterizzato da fumo inquinante, edifici e un'espressione sofferente a uno stato finale positivo, con vegetazione e un'espressione felice.<br>La mascotte è stata realizzata in stile low poly, in linea con il design dell'applicazione. Ho inoltre curato il sound design, creando e selezionando i suoni associati alle interazioni con il personaggio.",
        software: ['blender'],
        corso: 'Realtà Virtuale',
        copertina: 'images/mascotte-earthy.jpg',
        galleria: ['images/Earthy-blender.jpg', 'images/Earthy-stati.jpg'],
        correlati: [
        { id: 'save-earthy', etichetta: 'Save Earthy - esperienza VR' },
        { id: 'save-earthy-trailer', etichetta: 'Trailer — Save Earthy' }
    ]
    },

    'save-earthy-trailer': {
        categoria: 'Video',
        categoriaColore: '#e85d4a',
        titolo: 'Save Earthy - Trailer',
        anno: '2023-2024',
        durata: '0:46 minuti',
        formato: 'Video editing',
        descrizioneBreve: "Trailer video per l'esperienza VR <i>Save Earthy</i>.",
        descrizioneLunga: "Trailer realizzato per presentare l'esperienza VR Save Earthy. Il video introduce il tema dell'emergenza ambientale e mostra come semplici azioni quotidiane possano contribuire a ridurre gli sprechi.<br><br>Il montaggio presenta il concept dell'esperienza e il ruolo di Earthy, mostrando come l'utente possa imparare comportamenti più sostenibili attraverso l'interazione all'interno dell'ambiente virtuale.",
        ruolo: 'Video editor',
        software: ['davinci'],
        corso: 'Realtà Virtuale',
        link: 'https://www.youtube.com/watch?v=0QskvqJ41pA',
        linkTesto: 'Guarda su YouTube',
        copertina: 'images/save-earthy-trailer.jpg',
        correlati: [
        { id: 'save-earthy-mascotte', etichetta: 'Mascotte - Save Earthy' },
        { id: 'save-earthy-trailer', etichetta: 'Trailer — Save Earthy' }
    ]
    },

    'la-vie-en-rose': {
        categoria: ['VR', 'Cinema'],
        categoriaColore: '#56c97a',
        titolo: 'La Vie En Rose',
        anno: '2023-2024',
        durata: '5 minuti', /* controllare che sia giusta */
        formato: 'Cortometraggio VR',
        descrizioneBreve: "Cortometraggio VR a 360° raccontato dal punto di vista di un cavallo, che accompagna lo spettatore alla scoperta del mondo dell'equitazione.",
        descrizioneLunga: "<i>La Vie En Rose</i> è un cortometraggio VR a 360° raccontato dal punto di vista di un cavallo. L'esperienza utilizza il formato immersivo per avvicinare lo spettatore al mondo dell'equitazione attraverso una prospettiva insolita: il centro del campo, lo spazio normalmente dedicato agli istruttori. La camera 360° è stata posizionata al centro del campo e il cavallo guidato attorno ad essa, come durante una normale lezione di salto ad ostacoli.<br><br>La narrazione accompagna il pubblico alla scoperta di alcune curiosità legate ai cavalli e alla pratica equestre, sfruttando la possibilità di esplorare liberamente l'ambiente circostante offerta dal formato a 360°.<br><br>Questo progetto unisce la mia passione per l'equitazione a quella per il cinema e le nuove tecnologie.",
        ruolo: 'Produzione completa (pre-produzione, produzione e post-produzione)',
        tipo: 'Progetto singolo',
        software: ['davinci'],
        corso: 'Cinema Immersivo',
        link: '',
        linkTesto: '',
        copertina: 'images/VieEnRose-copertina.jpg'
    },

    'life-of-the-party': {
        categoria: ['VR', 'Cinema'],
        categoriaColore: '#56c97a',
        titolo: 'Life Of The Party',
        anno: '2023-2024',
        durata: '7:33 minuti',
        formato: 'Cortometraggio VR 360°',
        tipo: 'Progetto di gruppo',
        descrizioneBreve: "cortometraggio VR a 360° costruito attorno all'idea di rendere lo spettatore un fantasma, una presenza invisibile e impotente che osserva la disgregazione del proprio gruppo di amici senza poter intervenire.",
        descrizioneLunga: "<i>Life of the Party</i> è un cortometraggio VR a 360° costruito attorno all'idea di rendere lo spettatore un fantasma, una presenza invisibile e impotente che osserva ciò che accade senza poter intervenire.<br><br>La storia segue un gruppo di amici inizialmente molto affiatato, ma caratterizzato da personalità e dinamiche particolari. Nel corso dell'esperienza, il gruppo inizia progressivamente a disgregarsi e lo spettatore assiste agli eventi senza poterli modificare. Gradualmente, l'utente si rende conto di essere stato parte del gruppo, prima che un incidente stradale lo portasse via.<br><br>Il formato VR viene utilizzato per rafforzare la sensazione di presenza all'interno della scena, mettendo lo spettatore nella posizione di osservatore diretto ma impotente degli eventi. Inoltre, nella scena dell'incidente stradale, si è sperimentato con effetti e movimenti di camera un modo per dare l'impressione all'utente di essere realmente investito da un'automobile.",
        ruolo: 'Regista e sceneggiatrice, gaffer, fonico presa diretta e sound design, VFX ("utente investito")',
        software: ['davinci'],
        corso: 'Cinema Immersivo',
        /*link: 'https://www.youtube.com/watch?v=OpGFxJj2LYg',
        linkTesto: 'Guarda su Youtube',*/
        copertina: 'images/LifeParty-copertina.jpg'
    },

    'nodo-alla-gola': {
        categoria: ['Cinema', 'Sound'],
        categoriaColore: '#e85d4a',
        titolo: 'Nodo alla Gola - remake',
        anno: '2023',
        durata: '5:54 minuti',
        formato: 'Cortometraggio',
        tipo: 'Progetto di gruppo',
        descrizioneBreve: "Remake di una scena di Nodo alla Gola di Hitchcock, ripensandole con un montaggio serrato e una fotografia dominata da un'angosciante luce rossa.",
        descrizioneLunga: "Il progetto nasce con l'obiettivo di reinterpretare la famosa scena in piano sequenza cambiandone la fotografia e lo stile. Abbiamo optato per un montaggio più rapido, con diversi stacchi e primi piani, e per una fotografia dominata da un'intensa luce rossa. L'idea era di trasmettere il senso di pericolo, angoscia ed oppressione provato dai personaggi di fronte all'ira di Rupert.<br>Si è scelto di non inserire musica per dare più risalto alla tensione dei silenzi.",
        ruolo: 'Gaffer, fonico presa diretta, montaggio audio',
        software: ['davinci'],
        corso: 'Fotografia e Cinema Digitale',
        youtube: 'https://www.youtube.com/watch?v=MNow1euhCi8',
        copertina: 'images/nodo-alla-gola.jpg'
    },

    /*'audiolibro-ead': {
        categoria: 'Sound',
        categoriaColore: '#2d13f4',
        titolo: 'Audiolibro',
        anno: '2024',
        descrizioneBreve: "Progetto in fase di sviluppo.",
        descrizioneLunga: "Progetto in fase di sviluppo/definizione.",
        copertina: 'images/audiolibro.jpg'
    },*/

    'strategia-digitale-makemake': {
        categoria: 'Social Media',
        categoriaColore: '#ee67d3',
        titolo: 'Strategia digitale - MakeMake',
        anno: '2024',
        formato: 'Social',
        tipo: 'Progetto di gruppo',
        descrizioneBreve: "Progetto di strategia digitale sviluppato per MakeMake, con l'obiettivo di costruire una presenza sui social coerente con l'identità dell'azienda e con i diversi pubblici a cui si rivolge.",
        descrizioneLunga: "Il progetto consisteva nella creazione di una strategia digitale per MakeMake, azienda di scenografia, partendo dalle esigenze espresse dal cliente.<br>Abbiamo analizzato i competitor e studiato il target per individuare i canali più adatti e i contenuti da proporre su ciascuna piattaforma: LinkedIn e Facebook per la comunicazione più professionale e Instagram per raggiungere un pubblico più giovane. Abbiamo inoltre sviluppato possibili format per i social e valutato la realizzazione di un sito web con una sezione shop.<br>La strategia è stata redatta in un fascicolo accompagnato da descrizioni dei format, suggerimenti, critiche costruttive e mockup per post, video e storie.",
        copertina: 'images/makemake-copertina.jpg',
        galleria: ['images/makemake-storia.png', 'images/makemake-storia1.jpg']
    },

    'lastbite': {
        categoria: 'UX/UI',
        categoriaColore: '#4ab8c1',
        titolo: 'LastBite',
        anno: '2024',
        formato: 'Applicazione',
        tipo: 'Progetto di gruppo',
        descrizioneBreve: "Design dell'esperienza utente per l'applicazione <i>LastBite</i>, pensata per ridurre gli sprechi alimentari.",
        descrizioneLunga: "<i>LastBite</i> è un'applicazione Android nata con l'obiettivo di aiutare le persone a ridurre gli sprechi alimentari nella vita quotidiana.<br>L'utente può inserire la propria spesa e ricevere promemoria sui prodotti in scadenza, oltre a trovare ricette svuota-frigo basate sugli ingredienti disponibili e avere la possibilità di donare il cibo in eccesso alle associazioni.<br><br>Si è partiti dalle esigenze degli utenti, tramite ricerche mirate e questionari. In seguito, si è passati alla realizzazione del prototipo di carta e a media fedeltà su Figma (con i rispettivi user-testing), per poi arrivare all'applicazione completa e funzionante.<br><br>Personalmente, mi sono occupata della progettazione visiva delle interfacce, mettendo al centro user experience (ad esempio, ho fatto molta attenzione ad inserire schermate di avviso in caso di azioni 'definitive', come l'eliminazione dell'account).",
        software: ['figma'],
        corso: 'User experience design',
        link: 'https://www.figma.com/design/zhuPRKbxzNyCeCj081pkfL/Progetto-UXD---LastBite?m=auto&t=tKNY1wrtzFNplfqZ-1',
        linkTesto: 'Prototipo su Figma',
        copertina: 'images/lastbite.jpg',
        galleria: []
    },

    'homeow': {
        categoria: 'UX/UI',
        categoriaColore: '#4ab8c1',
        titolo: 'Homeow',
        anno: '2025',
        formato: 'Applicazione',
        tipo: 'Progetto di gruppo',
        descrizioneBreve: "Design dell'esperienza utente per l'applicazione <i>Homeow</i>, pensata per gestire un dispenser di cibo per gatti e controllare così i pasti dell'animale e adattarli alle sue esigenze anche da remoto.",
        descrizioneLunga: "<i>Homeow</i> è un'applicazione Android sviluppata insieme a un dispenser automatico di cibo per gatti, realizzato nell'ambito del progetto e funzionante.<br>Attraverso l'app è possibile creare il profilo del proprio gatto, impostare gli orari e le quantità dei pasti e, tramite la scansione del QR code, ricevere indicazioni relative al prodotto e al fabbisogno calorico dell'animale.<br><br>Si è partiti dalle esigenze degli utenti, tramite ricerche mirate e questionari. In seguito, si è passati alla realizzazione del prototipo di carta e a media fedeltà su Figma (con i rispettivi user-testing), per poi arrivare all'applicazione completa e funzionante. Questa è collegata al dispenser di cibo, realizzato manualmente e gestito tramite i microcontrollori Arduino.<br> Personalmente, mi sono occupata della progettazione delle interfacce, lavorando sul design visivo e sulla user experience, con particolare attenzione alla chiarezza delle azioni e alla distinzione di quelle 'definitive' (come l'eliminazione dell'account). Inoltre, è stato fondamentale pensare e realizzare un design coerente tra l'applicazione, il dispenser ed il 'tema gatto'.<br>Particolare attenzione è stata data alla realizzazione delle icone, tematizzate a forma di zampine e con richiami ai gatti, e alla scelta del colore rosa. Quest'ultimo è il Rosa Baker-Miller, che, stando alle ricerche, è stato testato negli anni '70 nelle celle delle carceri per calmare i detenuti aggressivi; noi abbiamo scelto di utilizzarlo per il suo effetto calmante, poiché l'applicazione deve dare un senso di sicurezza e tranquillità, gestendo il dispenser da remoto o con orari programmati. L'utente deve essere certo che il suo gatto mangerà, anche quando sarà lontano da casa.",
        software: ['figma'],
        corso: 'Digital Interaction Design',
        link: 'https://www.figma.com/design/KHuyTAjUButhmtYWbMPolO/HOMEHOW?m=auto&t=tKNY1wrtzFNplfqZ-1',
        linkTesto: 'Prototipo su Figma',
        copertina: 'images/Homeow-logo.png',
        galleria: ['images/Homeow-copertina.jpg', 'images/Homeow-logo.png']
    },

    'benzaiten-solo': {
        categoria: ['Videogioco', 'Grafica 3D'],
        categoriaColore: '#56c97a',
        titolo: 'Benzaiten Solo',
        anno: '2024-2025',
        formato: 'Videogioco',
        tipo: 'Progetto di gruppo',
        descrizioneBreve: "Demo di un videogioco JRPG open world che unisce esplorazione, combattimenti a ritmo musicale e un mondo da salvare.",
        descrizioneLunga: "<i>Benzaiten Solo</i> è la demo di un videogioco JRPG open world che unisce elementi di Guitar Hero, Xenoblade e Final Fantasy.<br>Il giocatore segue Lyra, un giovane che ha perso il padre, il quale era uno dei leader della rivolta contro il Noise (un dittatore che ha conquistato Harmonia e bandito la musica dal Regno).<br>Harmonia è divisa in sette quartieri, ciascuno associato a una nota musicale e caratterizzato da uno stile diverso, dove il giocatore affronta missioni e combattimenti insieme agli alleati incontrati durante il viaggio. Il sistema di combattimento riprende la logica di Guitar Hero, richiedendo di seguire le note e premere i tasti a tempo, con attacchi differenti in base allo strumento utilizzato.<br><br>Personalmente, mi sono occupata della storia e del design dei personaggi, della realizzazione del pitch del videogioco, dell'animazione 3D della cutscene iniziale, della costruzione della città del Do in Unity (l'unica disponibile nella demo) e dell'animazione e modellazione 3D del trailer.",
        ruolo: 'Animazione 3D, world building, video editor',
        software: ['unity', 'blender', 'davinci'],
        corso: 'Game Design',
        link: 'https://yaro-fb.itch.io/benzaiten-solo',
        linkTesto: 'Provalo su Itch.io',
        copertina: 'images/benzaiten.jpg',
        galleria: []
    },

    'aliens-cadbury': {
        categoria: 'Grafica 3D',
        categoriaColore: '#7b68ee',
        titolo: "Cadbury's Aliens - remake",
        anno: '2024',
        durata: '0:37',
        formato: 'Animazione 3D',
        tipo: 'Progetto di gruppo',
        descrizioneBreve: "Remake in 3D della celebre pubblicità <i>Aliens</i> di Cadbury, ricostruita attraverso la modellazione e l'animazione dell'ambiente e dei protagonisti nel modo più fedele possibile.",
        descrizioneLunga: "Il progetto consiste nella realizzazione di un remake in 3D della celebre pubblicità <i>Aliens</i> di Cadbury.<br><br>Personalmente, ho ricreato la base spaziale, occupandomi della modellazione e delle relative animazioni, e ho realizzato gli effetti particellari, tra cui il fumo. Mi sono inoltre occupata dell'animazione degli alieni ballerini, compreso il protagonista della pubblicità (amorevolemnte soprannominato 'Bob').",
        ruolo: 'Modellatrice e animatrice 3D',
        software: ['blender'],
        corso: 'Computer animation',
        youtube: 'https://youtu.be/4hksJeN7V5I?si=Npr81VPreuAyojLM',
        copertina: 'images/aliens.jpg',
        galleria: []
    },

    'vie-castello-VFX': {
        categoria: ['Video', 'Sound'],
        categoriaColore: '#e85d4a',
        titolo: 'The unicorn',
        anno: '2025',
        durata: '0:18 minuti',
        formato: 'Compositing VFX',
        tipo: 'Progetto di gruppo',
        descrizioneBreve: "Scena in cui vengono combinati un cavallo e un'attrice ripresi su green screen, un castello in presa diretta ed element realizzati in Blender come esercizio di compositing",
        descrizioneLunga: "<i>The unicorn</i> è un esercizio di compositing che unisce riprese reali e grafica 3D.<br>La scena combina un cavallo ripreso su green screen (ed io nel ruolo di dama), un castello girato in presa diretta a Macello (TO) ed elementi CGI realizzati in Blender. Inoltre, alla testiera del cavallo è stato attaccato un corno stampato in 3D, maschereando l'aggancio con il ciuffo del cavallo stesso.<br><br>Oltre alla realizzazione della scena, mi sono occupata del sound design e dell'intera fase di produzione, dalla gestione del progetto alla definizione del budget.",
        ruolo: 'Coordinamento reparti, sound design',
        software: ['nuke', 'blender'],
        corso: 'Visual effects',
        copertina: 'images/vfx.jpg',
        galleria: []
    },

    'sonorizzazione-topi': {
        categoria: 'Sound',
        categoriaColore: '#2d13f4',
        titolo: 'Sonorizzazione de "I Topi"',
        anno: '2025',
        formato: 'Audio e sonorizzazione',
        descrizioneBreve: "Esercitazione di sonorizzazione di alcune scene della serie TV <i>I Topi</i>, attraverso la pulizia e il montaggio dei dialoghi, l'aggiunta dei rumori e la realizzazione del sound design.",
        descrizioneLunga: "Il progetto consisteva nella sonorizzazione, a scopo didattico, di alcune scene della serie TV <i>I Topi</i>.<br>Ho lavorato sulle registrazioni disponibili, scegliendo i take migliori e curandone la pulizia e l'equalizzazione, per poi aggiungere eventuali effetti (ad esempio il riverbero). Ho inserito anche i rumori necessari alla scena, sia utilizzando quelli in presa diretta sia sfruttando le librerie online.<br><br><i>Le scene utilizzate appartengono alla serie originale: il lavoro realizzato riguarda esclusivamente questa esercitazione e non la sonorizzazione ufficiale della serie.</i>",
        corso: 'Sound Production',
        copertina: 'images/sound-production.jpg'
    },

    'tesi': {
        categoria: ['Video', 'Intelligenza Artificiale'],
        categoriaColore: '#f7f17a',
        titolo: 'Tesi Magistrale - IA e Arte: Narrare al pubblico l’impatto emotivo delle performance musicali mediante video generati con strumenti di intelligenza artificiale generativa.',
        anno: '2025-2026',
        durata: '', /* inserire */
        formato: 'Cortometraggio',
        tipo: 'Progetto di tesi e ricerca',
        descrizioneBreve: "Progetto di tesi magistrale. Cortometraggio realizzato con strumenti di intelligenza artificiale generativa per esplorare il rapporto di co-creazione tra artista e IA nella produzione audiovisiva.",
        descrizioneLunga: "La mia tesi magistrale, dal titolo <i>IA e Arte: Narrare al pubblico l’impatto emotivo delle performance musicali mediante video generati con strumenti di intelligenza artificiale generativa</i>, nasce dall'idea di sperimentare le potenzialità ed i limiti dell'intelligenza artificiale generativa nel campo cinematografico, approfondendo anche il concetto di co-creazione tra umano e macchina.<br><br> Il progetto parte dai concerti interattivi di Narrazioni Parallele, durante i quali venivano raccolte emozioni, ricordi e altre informazioni dal pubblico attraverso dei sondaggi. A partire da questi elementi ho sviluppato il soggetto e la sceneggiatura con il supporto di ChatGPT, Gemini e Claude, per poi costruire la shotlist con NanoBananaPro e generare i video attraverso Veo3 e Pika Art.<br>Anche il suono e la voce narrante sono stati realizzati attraverso strumenti di IA, rispettivamente Suno ed ElevenLabs.<br>Il risultato è un cortometraggio in tecnica mista, che combina animazione 2D, 3D e riprese realistiche, in cui un lupo colorato, diverso e stonato, viene escluso dal proprio branco e intraprende un viaggio, accompagnato da un gatto mentore, che lo porta a trovare la propria voce e un luogo in cui essere accolto.<br><br>Attraverso la realizzazione del cortometraggio ho esplorato il rapporto di co-creazione tra artista e intelligenza artificiale, sperimentando il suo utilizzo nelle diverse fasi della produzione audiovisiva, dalla pre-produzione alla post-produzione, indagandone le potenzialità ed i limiti.",
        software: ['davinci'],
        link: '',
        linkTesto: 'Guarda su YouTube',
        link2: 'https://webthesis.biblio.polito.it/39657/1/tesi.pdf',
        linkTesto2: 'Tesi pubblicata',
        copertina: 'images/goodslift.jpg',
        galleria: []
    },


    // ==========================================
    // ALTRI PROGETTI
    // ==========================================

    'fragile': {
        categoria: ['Cinema', 'Sound'],
        categoriaColore: '#e85d4a',
        titolo: 'Fragile',
        anno: '2025',
        durata: '7:29 minuti',
        formato: 'Cortometraggio',
        tipo: 'Progetto indipendente',
        descrizioneBreve: "Cortometraggio indipendente che racconta la solitudine di un anziano attraverso l'incontro inaspettato con la realtà virtuale e con alcuni dei suoi ricordi più felici.",
        descrizioneLunga: "<i>Fragile</i> è un cortometraggio indipendente realizzato con altri ex studenti di Ingegneria del Cinema.<br>La storia segue un anziano che, ormai isolato in casa e immerso in una routine sempre uguale, riceve inaspettatamente un pacco contenente un visore VR. Indossandolo, si ritrova a rivivere alcuni dei ricordi più felici della sua vita, creando un contrasto tra la solitudine del presente e la ricchezza del suo passato.<br><br>Il progetto intende affrontare il tema della solitudine degli anziani e del possibile rapporto (e aiuto) che possono avere con le nuove tecnologie.",
        ruolo: 'Gaffer, fonico presa diretta e microfonista, montaggio audio',
        software: ['davinci'],
        link: 'https://youtu.be/keKlXJ5aZrU?is=OyugT8XXQUcG6QF_',
        linkTesto: 'Guarda su YouTube',
        copertina: 'images/fragile.jpg',
        festival: ["<i>in selezione per il GLocal Film Festival 2026</i>", "Too Short To Wait (Torino - 2026)", "We Make Future Film Festival (Bologna - 2026)", "<i>Finalista Innovation Film Fest WMF2026</i>", "Vicinissima Film Festival (Torino - 2026)", "First-Time Filmmaker Sessions Volume 8-6-5 (international - 2025)", "Z- Pitch Contest (international - 2025)", "<i>selezionato al Lift-Off Global Network 2026</i>"]
    },

    'music-video': {
        categoria: 'Video',
        categoriaColore: '#e85d4a',
        titolo: 'Music stock',
        anno: '2021',
        durata: '0:38 minuti',
        formato: 'Video editing',
        descrizioneBreve: "Esercitazione di video editing costruita attraverso l'utilizzo di video e musiche stock, con l'idea di realizzare un ipotetico video musicale.",
        descrizioneLunga: "Esercitazione di video editing realizzata a partire da video e musiche stock, selezionati e montati per costruire un breve contenuto dedicato al mondo della musica (e un ipotetico video musicale). Il progetto mi ha permesso di lavorare sulla scelta delle immagini, sul ritmo del montaggio e sulla relazione tra musica e contenuto visivo.",
        copertina: 'images/music.jpg',
        link: 'https://www.youtube.com/watch?v=FS-OVdnDBRM',
        linkTesto: 'Guarda su Youtube'
    },

    'animals-video': {
        categoria: 'Video',
        categoriaColore: '#e85d4a',
        titolo: 'Animals stock - Relaxing',
        anno: '2021',
        durata: '0:54 minuti',
        formato: 'Video editing',
        descrizioneBreve: "Esercitazione di video editing dedicata al mondo degli animali, realizzata attraverso l'utilizzo e il montaggio di video e musiche stock.",
        descrizioneLunga: "Esercitazione di video editing realizzata utilizzando video e musiche stock dedicati alla natura e agli animali. Il lavoro si concentra sulla selezione delle clip e sulla loro organizzazione attraverso il montaggio, costruendo un breve contenuto audiovisivo coerente per ritmo e atmosfera.",
        copertina: 'images/animals.jpg',
        link: 'https://www.youtube.com/watch?v=VkxM7LsZlbE',
        linkTesto: 'Guarda su Youtube'
    },

    'food-video': {
        categoria: 'Video',
        categoriaColore: '#e85d4a',
        titolo: 'Food',
        anno: '2021',
        durata: '1:15 minuti',
        formato: 'Video editing',
        descrizioneBreve: "Esercitazione di video editing dedicata al mondo della cucina, realizzata attraverso l'utilizzo di video e musiche stock.",
        descrizioneLunga: "Esercitazione di video editing costruita attraverso la selezione e il montaggio di video e musiche stock legati al tema della cucina. Il progetto è stato un'occasione per sperimentare il ritmo del montaggio e la costruzione di un contenuto audiovisivo a partire da materiale preesistente.",
        copertina: 'images/food.jpg',
        link: 'https://www.youtube.com/watch?v=MErYr1K0eTM',
        linkTesto: 'Guarda su Youtube'
    },

    /*'job-film-days': {
        categoria: 'Cinema/Video',
        categoriaColore: '#e85d4a',
        titolo: 'Job Film Days',
        anno: '2023',
        formato: 'Giuria / Volontariato',
        descrizioneBreve: "Giuria studentesca internazionale per il Job Film Days.",
        descrizioneLunga: "Ho preso parte nella giuria studentesca del festival Job Film Days a Torino. Dopo aver visionato i progetti internazionali presentati abbiamo dovuto eleggere il migliore in base alle tematiche proposte.",
        copertina: 'images/jobfilmdays.jpg'
    },*/

    /*'torino-film-industry': {
        categoria: 'VR/Interattivi',
        categoriaColore: '#56c97a',
        titolo: 'Torino Film Industry',
        anno: '2024',
        formato: 'Giuria / Volontariato',
        descrizioneBreve: "Presidio e gestione di postazioni VR al Torino Film Industry.",
        descrizioneLunga: "Nell'ambito del Torino Film Industry ho avuto il piacere di presiedere una delle postazioni VR presenti per aiutare gli interessati ad usufruire delle opere immersive proposte.",
        copertina: 'images/tfi.jpg'
    },*/

    /*'microcinema': {
        categoria: 'Video',
        categoriaColore: '#e85d4a',
        titolo: 'Microcinema - Workshop',
        anno: '2024',
        formato: 'Video editing / Workshop',
        descrizioneBreve: "Realizzazione di una breve opera e del suo trailer per il Festival Incanti.",
        descrizioneLunga: "Partecipazione al workshop di Microcinema della compagnia Frau Trapp in occasione del Festival Incanti. Abbiamo costruito e realizzato una breve opera della quale ho fatto un veloce trailer personale per il portfolio.",
        copertina: 'images/microcinema.jpg'
    },*/

    /*'set-sentinel': {
        categoria: 'Cinema/Video',
        categoriaColore: '#e85d4a',
        titolo: 'Sentinel',
        anno: '2022',
        formato: 'Esperienza sul set',
        descrizioneBreve: "Esperienza sul set cinematografico in veste di Gaffer.",
        descrizioneLunga: "Esperienza formativa e lavorativa sul set nel ruolo di Gaffer per la produzione del progetto Sentinel.",
        ruolo: 'Gaffer',
        copertina: 'images/sentinel.jpg'
    },*/

    /*'set-h010n': {
        categoria: 'Cinema/Video',
        categoriaColore: '#e85d4a',
        titolo: 'H010N',
        anno: '2023',
        formato: 'Esperienza sul set',
        descrizioneBreve: "Esperienza sul set cinematografico in veste di Runner.",
        descrizioneLunga: "Esperienza formativa e lavorativa sul set nel ruolo di Runner per la produzione del progetto H010N.",
        ruolo: 'Runner',
        copertina: 'images/h010n.jpg'
    },*/

    'onde-quadre': {
        categoria: 'Sound',
        categoriaColore: '#2d13f4',
        titolo: 'Radio OndeQuadre',
        anno: '2024',
        formato: 'Esperienza radiofonica',
        descrizioneBreve: "Esperienza come speaker radiofonica per Onde Quadre, la radio universitaria del Politecnico di Torino, all'interno del reparto musicale Track01.",
        descrizioneLunga: "Ho collaborato con Onde Quadre, la radio universitaria del Politecnico di Torino, come speaker all'interno di Track01, il reparto dedicato alla musica. Durante questa esperienza ho partecipato alla realizzazione delle puntate e alle interviste con artisti emergenti della scena musicale torinese, tra cui Khamilla e D!PS, seguendone il percorso prima della loro successiva crescita nel panorama musicale nazionale.<br><br>Inoltre, ci è stato insegnato come utilizzare Ableton per la registrazione della puntata e il successivo montaggio e messa in onda.",
        ruolo: 'Speaker',
        copertina: 'images/ondequadre.jpg',
    },

    'stanza-dahu': {
        categoria: ['Grafica 3D', 'VR'],
        categoriaColore: '#7b68ee',
        titolo: 'La stanza del Dahu',
        anno: '2024',
        formato: 'Ambiente VR 3D',
        descrizioneBreve: "Ambiente 3D realizzato per un'esperienza VR dedicata alla Val d'Aosta, ambientato all'interno di un cottage di montagna legato alla leggenda del Dahu.",
        descrizioneLunga: "<i>La stanza del Dahu</i> è la 'landing page'/ambiente immersivo in cui si ritrovano gli utenti prima di iniziare la loro esperienza con l'applicazione curata dai ricercatori e dottorandi del Politecnico. Io mi sono occupata di strutturare l'ambiente come un accogliente cottage di montagna, che potesse richiamare il territorio della Val d'Aosta, inserendo appositamente dei richiami alla figura mitologica del Dahu. Gli oggetti sono stati modellati su Blender e, in seguito, inseriti all'interno di Unity.<br>Inoltre, è presente un libro -visibile di fronte all'utente- del quale ho curato l'animazione. Il libro, infatti, viene comandato dallo script dei ricercatori del Politecnico e si apre su due pagine distinte in base all'esperienza che si starà per iniziare. Le pagine rappresentano due scene tratte dall'esperienza e legate alla Val d'Aosta e ai suoi miti.",
        software: ['blender', 'unity'],
        copertina: 'images/dahu.jpg',
        galleria: ['images/StanzaDahu-blender.jpg', 'images/StanzaDahu-unity.jpg']
    },

    'rocking-horse': {
        categoria: 'Grafica 3D',
        categoriaColore: '#7b68ee',
        titolo: 'Rocking Horse',
        anno: '2023',
        durata: '0:17 minuti',
        formato: 'Animazione 3D',
        descrizioneBreve: "Modellazione e animazione 3D di un cavallino a dondolo in stile realistico.",
        descrizioneLunga: "<i>Rocking Horse</i> è un esercizio di modellazione e animazione 3D realizzato interamente da zero in Blender.<br>Ho modellato un cavallino a dondolo di legno e costruito una semplice ambientazione composta da una stanza spoglia.<br>Il focus del progetto era sulla cura della modellazione, dell'animazione e del realismo di luci e materiali.",
        software: ['blender'],
        copertina: 'images/rockinghorse.jpg',
        link: 'https://www.youtube.com/watch?v=6NeJleOXNp0',
        linkTesto: 'Guarda su Youtube'
    },

    'lava-lamp': {
        categoria: 'Grafica 3D',
        categoriaColore: '#7b68ee',
        titolo: '3D Relaxing LavaLamp',
        anno: '2023',
        durata: '0:41 minuti',
        formato: 'Animazione 3D',
        descrizioneBreve: "Modellazione e animazione 3D di una lampada di lava (lava lamp).",
        descrizioneLunga: "<i>LavaLamp</i> è un esercizio di modellazione e animazione 3D realizzato interamente da zero in Blender. Ho modellato la lampada e lavorato sulla sua animazione, concentrandomi sulla resa dell'oggetto e dei suoi elementi in movimento.",
        software: ['blender'],
        copertina: 'images/lavalamp.jpg',
        link: 'https://www.youtube.com/shorts/wL3GSFDuNws',
        linkTesto: 'Guarda su Youtube'
    },

    'quiet-island': {
        categoria: 'Grafica 3D',
        categoriaColore: '#7b68ee',
        titolo: '3D Quiet Island',
        anno: '2022',
        durata: '0:15 minuti',
        formato: 'Animazione 3D',
        descrizioneBreve: "Modellazione e animazione 3D di una piccola isola in stile low poly, realizzata in Blender e accompagnata da sound design.",
        descrizioneLunga: "<i>Quiet Island</i> è un progetto di modellazione e animazione 3D realizzato interamente su Blender.<br>Ho costruito una piccola isola in stile low poly, curandone la modellazione e l'animazione per creare una breve scena dall'atmosfera tranquilla.<br>Ho inoltre realizzato il sound design, lavorando sulla componente sonora per accompagnare e completare l'ambientazione.",
        software: ['blender', 'davinci'],
        tipo: 'Progetto singolo',
        copertina: 'images/quietisland.jpg',
        link: 'https://www.youtube.com/shorts/JKt7evSHVks',
        linkTesto: 'Guarda su Youtube'
    },

    'post-giulia': {
        categoria: ['Grafica 3D', 'Social Media', 'Visual Design'],
        categoriaColore: '#ee67d3',
        titolo: 'Grafiche 3D per giulia_book_review',
        anno: '2024-In corso',
        formato: 'Social',
        descrizioneBreve: "Attività di social media management per la pagina Instagram giulia_book_review, con la creazione di copertine 3D in Blender e la definizione di contenuti e rubriche.",
        descrizioneLunga: "Collaborazione con la pagina Instagram Giulia Book Review, per la quale mi occupo della gestione dei contenuti. Realizzo principalmente le copertine 3D dei post utilizzando Blender, sperimentando occasionalmente anche strumenti di intelligenza artificiale generativa per supportare il processo creativo. Mi occupo inoltre di video editing e della strategia digitale della pagina, contribuendo alla definizione delle rubriche, dei contenuti e delle modalità e tempistiche di pubblicazione.",
        software: ['blender', 'canva', 'davinci'],
        ruolo: '3D Artist / Social Media Manager',
        copertina: 'images/postgiulia.jpg',
        link: 'https://www.instagram.com/giulia_book_review/',
        linkTesto: 'Profilo Instagram',
        galleria: []
    },

    'collegio-icm': {
        categoria: ['Social Media', 'Visual Design'],
        categoriaColore: '#ee67d3',
        titolo: 'Grafiche per Collegio ICM',
        anno: '2024–2026',
        formato: 'Social',
        descrizioneBreve: "Gestione del profilo Instagram del Collegio ICM del Politecnico di Torino e realizzazione di contenuti grafici per post e locandine.",
        descrizioneLunga: "Ho curato la gestione del profilo Instagram del Collegio ICM del Politecnico di Torino, occupandomi della pubblicazione dei contenuti e della comunicazione delle attività del collegio.<br>Ho inoltre realizzato le grafiche per i post e le locandine, adattando i contenuti alle esigenze della comunicazione sui social.",
        software: ['canva'],
        ruolo: 'Social Media Manager',
        copertina: 'images/collegioicm.jpg',
        link: 'https://www.instagram.com/collegioicm/',
        linkTesto: 'Profilo Instagram',
        galleria: []
    },

    'team-milego': {
        categoria: ['Social Media', 'Visual Design'],
        categoriaColore: '#ee67d3',
        titolo: 'Grafiche per MiLegoAlTerritorio',
        anno: '2020–2023',
        formato: 'Social',
        descrizioneBreve: "Gestione del profilo Instagram del team studentesco MiLegoAlTerritorio, con realizzazione di contenuti grafici per i social e progettazione di un libretto dedicato alle scuole elementari.",
        descrizioneLunga: "Ho curato la gestione del profilo Instagram del team studentesco MiLegoAlTerritorio, occupandomi della pubblicazione dei contenuti e della realizzazione delle grafiche per post e locandine.<br><br>Oltre alla comunicazione sui social, ho progettato un libretto dedicato alle scuole elementari, sviluppato per presentare il progetto attraverso un formato più adatto a un pubblico giovane.",
        software: ['gimp'],
        ruolo: 'Social Media Manager & Video Editor',
        copertina: 'images/milego.jpg',
        link: 'https://www.instagram.com/milego_al_territorio/',
        linkTesto: 'Profilo Instagram'
    },

    'team-hideout': {
        categoria: ['Social Media', 'Video Editing'],
        categoriaColore: '#ee67d3',
        titolo: 'Montaggio video per Team Hideout PoliTo',
        anno: '2025–2026',
        formato: 'Social',
        descrizioneBreve: "Video editing di contenuti per i Reel Instagram del team studentesco Hideout PoliTo del Politecnico di Torino.",
        descrizioneLunga: "Ho collaborato con il team studentesco Hideout del Politecnico di Torino occupandomi del video editing dei contenuti destinati ai Reel Instagram. Il lavoro comprendeva la selezione e il montaggio del materiale video per adattarlo al formato e al ritmo dei contenuti social.",
        software: ['davinci'],
        ruolo: 'Social Media Manager & Video Editor',
        copertina: 'images/milego.jpg',
        link: 'https://www.instagram.com/hideoutpolito/',
        linkTesto: 'Profilo Instagram'
    },

    'i-remember': {
        categoria: ['VR', 'Cinema', 'Grafica 3D'],
        categoriaColore: '#56c97a',
        titolo: 'I remember - Digitali Immortali',
        anno: '2025',
        durata: '',
        formato: 'Cortometraggio VR 360°',
        tipo: 'Progetto di gruppo',
        descrizioneBreve: "Open documentary immersivo in VR 360° che esplora il tema del post-mortem digitale e il destino della nostra identità e dei nostri dati dopo la morte.",
        descrizioneLunga: "<i>I Remember - Digitali Immortali</i> è un open documentary immersivo in VR 360° che esplora il tema della post-mortem digitale, interrogandosi su cosa accade alla nostra identità e ai nostri dati dopo la morte e su come possano essere manipolati e rigenerati dall'intelligenza artificiale.<br>Il progetto combina riprese reali a 360°, ambienti e animazioni 3D realistici e audio spazializzato per costruire un'esperienza immersiva sospesa tra realtà e mondo virtuale.<br><br>Il progetto è nato da un laboratorio produttivo che ha coinvolto 18 studenti provenienti da diverse istituzioni torinesi, tra cui il Politecnico di Torino. Mi ha permesso di sperimentare con Blender nella realizzazione di spazi immersivi e ambienti 3D complessi, lavorando sulla costruzione di un possibile 'aldilà algoritmico' in cui memorie e identità vengono continuamente ricombinate dall'intelligenza artificiale.<br><br>L'opera è stata presentata in diversi festival e a riscosso parecchio successo tra gli esperti del settore.",
        software: ['blender'],
        ruolo: 'Modellazione ambienti 3D e animazioni/simulazioni',
        copertina: 'images/iremember.jpg',
        link: 'https://www.youtube.com/watch?v=6NeJleOXNp0',
        linkTesto: 'Guarda su Youtube',
        galleria: [],
        festival: ["Accademia Albertina di Belle Arti di Torino & Athens Fine Art School Hydra Annex (2026)", "ARWE Art Research World Expo Torino (2026)", "Who Are We Speaking To? Festival (2026)", "Torino Film Industry (2025)", "<i>Esposzione al Museo Nazionale del Cinema di Torino (2026)</i>", "Sottodiciotto Film Festival (2025)", "<i>Esposizione a Recontemporary Foundation(2025)</i>"]
    },

    'grande-narrazione-100ore': {
        categoria: 'Cinema',
        categoriaColore: '#e85d4a',
        titolo: 'La Grande Narrazione - Festival 100ore Torino',
        anno: '2025',
        durata: '5 minuti',
        formato: 'Cortometraggio',
        tipo: 'Progetto indipendente',
        software: ['davinci'],
        ruolo: 'Segretaria di edizione, Fonico presa diretta, Montatrice audio/video',
        descrizioneBreve: "Cortometraggio realizzato in sole 100 ore per il festival 100ore Torino (2025). Una commedia costruita tra viaggio dell'eroe, favola e metacinema.",
        descrizioneLunga: "<i>La Grande Narrazione</i> è un cortometraggio realizzato per il festival 100ore Torino (2025), durante il quale il film è stato sviluppato interamente nell'arco di 100 ore, dall'idea fino al montaggio finale, rispettando anche alcuni vincoli imposti dal festival (come l'aggiunta di battute e oggetti specifici).<br><br>La storia segue un 'vagamondo' che vive in una sorta di città simbolica composta da stanze, ma che non possiede una stanza propria. Quando riceve per caso una chiave come elemosina, inizia a cercare il luogo a cui appartiene, accompagnato da un aiutante tanto disponibile quanto maldestro. Il viaggio, costruito secondo gli elementi della favola e del viaggio dell'eroe, lo porta a incontrare personaggi sempre più strani fino a un finale metacinematografico, in cui il protagonista finisce per entrare nella stanza degli stessi sceneggiatori che stanno discutendo dei suoi fallimenti e dell'incapacità del suo aiutante di aiutarlo come dovrebbe.<br><br>Personalmente, sono stata segretaria di edizione e fonica in presa diretta, oltre a realizzare il montaggio video e audio durante le ultime ore disponibili.",
        copertina: 'images/100ore.jpg'
    },

    /*'tff-2025': {
        categoria: 'Cinema/Video',
        categoriaColore: '#e85d4a',
        titolo: 'Torino Film Festival',
        anno: '2025',
        formato: 'Giuria / Volontariato',
        descrizioneBreve: "Partecipazione e supporto alle attività del Torino Film Festival.",
        descrizioneLunga: "Esperienza nell'ambito della giuria/volontariato durante l'edizione 2025 del Torino Film Festival.",
        copertina: 'images/tff.jpg'
    },*/

    'libro-mamma': {
        categoria: 'Visual Design',
        categoriaColore: '#4ab8c1',
        titolo: 'Il Nostro Giardino Mellifero - Scuola Secondaria di Primo Grado Frossasco',
        anno: '2026',
        formato: 'Grafica editoriale',
        descrizioneBreve: "Progettazione grafica e impaginazione di un libro realizzato dalla scuola secondaria di primo grado di Frossasco (TO) a partire da un'attività didattica svolta con Zoom Torino.",
        descrizioneLunga: "<i>Il Nostro Giardino Mellifero</i> è un libro realizzato in collaborazione con la Scuola Secondaria di Primo Grado di Frossasco a seguito di un'attività didattica svolta con Zoom Torino. Mi sono occupata di raccogliere e organizzare i materiali prodotti dagli studenti, tra cui fotografie e testi, trasformandoli in una pubblicazione coerente e adatta al pubblico della scuola secondaria.<br><br>Ho curato l'impaginazione e la progettazione grafica del libro, lavorando sulla disposizione dei contenuti e sulla loro organizzazione visiva con l'obiettivo di rendere il materiale facilmente fruibile e potenzialmente utilizzabile anche da altre scuole.",
        software: ['canva'],
        ruolo: 'Social Media Manager & Video Editor',
        copertina: 'images/milego.jpg',
        galleria: []
    },

    'cadere-di-paura': {
        categoria: ['Cinema', 'Sound', 'Grafica 3D'],
        categoriaColore: '#e85d4a',
        titolo: 'Cadere di Paura',
        anno: '2026',
        durata: '',
        formato: 'Cortometraggio',
        tipo: 'Progetto indipendente',
        descrizioneBreve: "COMING SOON | Cortometraggio in tecnica mista che combina riprese reali e animazione 3D per raccontare la paura del fallimento e il coraggio di affrontarla. Ispirato al fumetto <i>Paura di Cadere</i> di <i>Sandman</i>.",
        descrizioneLunga: "COMING SOON | <i>Cadere di Paura</i> è un cortometraggio in tecnica mista, realizzato combinando riprese dal vivo e animazione 3D, liberamente ispirato al fumetto <i>Sandman – Paura di cadere</i>.<br>La storia segue un giovane regista teatrale paralizzato dall'ansia, dal timore del fallimento e dalla paura di non essere all'altezza del successo che sta per raggiungere. Durante un sogno, il Re dei Sogni, Morfeo, lo incontra sulla cima di una montagna e gli racconta una storia, aiutandolo a comprendere che la paura di cadere non deve impedirgli di avere il coraggio di tentare e di rischiare.<br><br>Il progetto combina una parte realizzata con riprese reali e una parte interamente in 3D (utilizzata in particolare per la scena del sogno).<br><br>Personalmente, sono stata microfonista e mi occuperò del montaggio audio e sound design, oltre alla modellazione e animazione 3D di alcuni elementi.",
        ruolo: 'Gaffer, fonico presa diretta e microfonista, montaggio audio',
        tipo: 'Progetto di gruppo',
        software: ['davinci', 'blender'],
        corso: 'Produzione Indipendente',
        copertina: 'images/fragile.jpg',
        link: '',
        linkTesto: '',
        festival: []
    },

    'liberante': {
        categoria: ['Cinema', 'Sound'],
        categoriaColore: '#e85d4a',
        titolo: 'Liberante',
        anno: '2026',
        durata: '',
        formato: 'Cortometraggio',
        tipo: 'Progetto di gruppo',
        descrizioneBreve: "COMING SOON | Cortometraggio realizzato con la residenza artistica Enigma 2 di Torino che racconta gli ultimi giorni di prigionia di un detenuto, nel 1986, e il difficile rapporto tra libertà, memoria e vita dopo il carcere.",
        descrizioneLunga: "COMING SOON | <i>Liberante</i> è un cortometraggio realizzato nell'ambito della residenza artistica Enigma 2 dell'Associazione Museo Nazionale del Cinema.<br>La storia è ambientata nel 1986, all'interno del carcere Le Nuove di Torino, e segue Roberto 'Roby' Olivero durante gli ultimi giorni della sua detenzione.<br>Il rapporto con Cesare, un altro detenuto con cui condivide la quotidianità del carcere, diventa il centro della storia. Quando Roby scopre di essere stato dichiarato 'liberante' e di poter finalmente uscire, la libertà tanto attesa si confronta con i legami costruiti durante gli anni di prigionia e con il peso dei ricordi che continuano a seguirlo anche fuori dalle mura del carcere.<br>La storia si sviluppa tra il presente e i ricordi di Roby, tornando più volte sul rapporto con Cesare e sul significato della libertà dopo tanti anni trascorsi in prigione. Nel finale, il protagonista lascia il carcere e si avvia verso una nuova vita, portando con sé il ricordo di ciò che ha lasciato dentro.<br><br>Nel progetto lavoro come microfonista e aiuto nel montaggio audio.",
        ruolo: 'microfonista, assistente al montaggio audio',
        tipo: 'Progetto di gruppo',
        software: ['davinci'],
        copertina: 'images/fragile.jpg',
        link: '',
        linkTesto: '',
        festival: []
    },



    

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
        durata: '',
        descrizioneBreve: '',
        descrizioneLunga: '',
        ruolo: '',
        tipo: 'Progetto singolo',
        software: [],
        corso: '',
        link: '', => tipo instagram, youtube, figma...
        linkTesto: '', => guarda su youtube, profilo instagram, prorotitpo figma...
        copertina: 'images/nome-file.jpg',
        galleria: [],
        festival: []
    },

    ════════════════════════════════════════════════ */
