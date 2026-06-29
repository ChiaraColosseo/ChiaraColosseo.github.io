## Come aggiungere un nuovo progetto
1. Apri js/progetti.js
2. Copia il template in fondo al file
3. Dagli un id unico
4. Compila i campi
5. Apri il file html della categoria giusta (es. cinema.html)
6. Copia una card esistente
7. Cambia l'id in openProject('id'), titolo, meta, descrizione e immagine
8. Commit!

IMPORTANTE: Le card in ogni pagina categoria vanno in ordine cronologico decrescente: il più recente va scritto in cima nel HTML corrispondente.

scritto diversamente:
1. Aggiungi i dati in progetti.js — copi il template e compili i campi. Questo fa sì che il modal funzioni.
2. Aggiungi la card in cinema.html — copi una card esistente e cambi openProject('id') con il nuovo id, più titolo, meta, descrizione breve e immagine copertina.
Il motivo è che progetti.js contiene solo i dati (quello che appare nel modal quando apri un progetto), ma non decide quali card mostrare nella pagina. Quella decisione sta nell'HTML di cinema.html.
Quindi ogni volta che aggiungi un progetto fai sempre queste due modifiche — niente di più. È comunque molto più semplice di prima, perché tutte le informazioni dettagliate (ruolo, software, galleria, festival ecc.) le scrivi una volta sola in progetti.js e funzionano ovunque.

## Spostare un progetto
Es. togli la card da cinema.html e la incolli in grafica.html. Solo HTML, nient'altro.

## File principali
- index.html → homepage
- cinema.html → pagina cinema (e così via per le altre categorie)
- js/progetti.js → dati di tutti i progetti
- js/script.js → logica navbar e modal
- css/style.css → tutti gli stili

  
