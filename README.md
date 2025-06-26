# 🖼️ Cosa devi realizzare

Una SPA che simula l’esperienza di un utente non autenticato, che può:

- ✅ Sfogliare, cercare e filtrare record  
- ✅ Confrontare più elementi tra loro  
- ✅ Salvare i preferiti  
- ❌ Non può creare, modificare o cancellare record  

---

## 🔍 Tecnologie da utilizzare

Il progetto deve essere sviluppato esclusivamente con **React** in **JavaScript**, utilizzando solo le tecnologie viste durante il corso.

È consentito però l’uso di librerie esterne per la gestione dello **styling**, come ad esempio:

- Tailwind CSS  
- Bootstrap  
- styled-components  

👉 Il backend è già pronto: il tuo compito è sviluppare tutta la parte **frontend**.

---

## 🎨 Tematica a scelta

Scegli liberamente l’argomento del tuo comparatore.

✅ Qualsiasi entità con proprietà confrontabili è valida!

Esempi di ispirazione:

- 📱 Dispositivi (smartphone, tablet, smartwatch…)  
- 🎧 Multimedia (televisori, cuffie, fotocamere…)  
- 💻 Informatica (laptop, GPU, monitor…)  
- 🎮 Software (videogiochi, OS, streaming…)  
- ✈️ Viaggi (città, destinazioni…)  
- 🚲 Trasporti (auto, bici, monopattini…)  
- 🧠 Educazione (università, corsi…)  
- 🍎 Alimenti (tipi di frutta, vini, caffè…)  
- 🏠 Casa (elettrodomestici, giochi da tavolo, mobili…)  

---

## 🛠️ Backend pronto all’uso

Clona questo repo:

🔗 https://github.com/boolean-it/progetto-finale-spec-frontend-back

All’interno troverai un file chiamato `types.ts`.

---

## 🔧 Definisci le tue risorse

Nel file `types.ts`, definisci una o più risorse, ad esempio:

```ts
export type Product = {
  title: string;
  category: string;
};
````

✅ Devono essere esportate
✅ Devono contenere almeno `title` e `category`

💡 Puoi aggiungere tutte le proprietà che vuoi (es. `price`, `brand`, `releaseYear`...), ad eccezione di `id`, `createdAt` e `updatedAt` che vengono gestite automaticamente dal server.

Il backend genererà automaticamente:

* Un file `.json` in `/database`
* Endpoint RESTful:
  `/products`, `/products/:id`, ecc.

---

## 📡 API disponibili

* `GET /{tipo}s` → Lista dei record (supporta `?search=` e `?category=`)
* `GET /{tipo}s/:id` → Dettaglio record
* `POST /{tipo}s` → Crea un record
* `PUT /{tipo}s/:id` → Modifica un record
* `DELETE /{tipo}s/:id` → Cancella un record

---

## 💾 Dove vengono salvati i dati?

Ogni risorsa ha un file dedicato in `/database`, es: `product.json`.

Puoi popolare i dati:

* Manualmente nel `.json`
* Tramite API (`fetch`, Postman...)

📌 Devono esserci **almeno 10 record validi** per ogni risorsa.

---

## ⚠️ Attenzione!

### ❌ NON puoi modificare:

* La logica del server (`.ts`, `.js`)
* Le rotte API
* Il comportamento degli endpoint

### ✅ PUOI modificare solo:

* Il file `types.ts` per definire la risorsa
* I file `.json` nella cartella `/database`

---

## 🥉 Requisiti minimi

* ✅ Gestione di una risorsa
* ✅ Lista con:

  * Ricerca `title`
  * Filtro per `category`
  * Ordinamento A-Z e Z-A
* ✅ Pagina di dettaglio del record
* ✅ Comparatore di **2 record** affiancati
* ✅ Sistema di preferiti:

  * Aggiunta/rimozione in ogni sezione
  * Sempre accessibili (es. sidebar o icona fissa)

---

## 🥈 Requisiti consigliati (facoltativi)

* 🔄 Comparatore per **2+ record**
* 🔍 Debounce sulla ricerca
* 💾 Persistenza preferiti (localStorage)
* 😕 Gestione stati vuoti:

  * Nessun risultato trovato
  * Lista preferiti vuota
  * Nessun record selezionato per il confronto

---

## 🥇 Requisiti aggiuntivi (facoltativi)

* 🔀 Gestione di **più risorse** nella stessa SPA
* ✏️ CRUD completo dal frontend:

  * Creazione
  * Modifica
  * Eliminazione
  * Validazione input

---

## 🎯 BONUS (facoltativo)

* 💻 Seconda versione del progetto in **TypeScript**

  > ⚠️ La versione principale deve comunque rimanere in JavaScript.

---

## ⏱️ Come affrontare il progetto

Il progetto è pensato per essere svolto in **7 giorni**.

📌 Obiettivo principale: **completare tutti i Requisiti Minimi**

❌ Anche uno solo mancante comporta penalizzazione all’esame.

⛔ Non è necessario lavorare 10-15 giorni per i requisiti avanzati.
✅ È importante invece avere un progetto **stabile, completo e solido**.

---

## 📦 Consegna del progetto

Assicurati di includere nel push:

* 📁 Cartella `/database` con i file `.json` dei dati
* 📝 File `types.ts` con la tua risorsa

📌 Devono esserci almeno 10 record coerenti per ciascuna risorsa.

❗ Progetti **senza** questi file potrebbero essere **incompleti o non valutabili**.

---

## 💪 Buon lavoro!



Fammi sapere se vuoi una versione localizzata per il tuo specifico progetto (ad esempio se scegli “Smartphone” o “Videogiochi” come entità)!

