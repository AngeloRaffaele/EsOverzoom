# Javascript async advanced

Hai a disposizione una funzione chiamata `getPastEvent`, che restituisce una _Promise_ con un evento storico casuale sotto forma di oggetto:
```
function getPastEvent() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const events = [
        { year: 1990, name: "World Wide Web Invented" },
        { year: 2001, name: "Wikipedia Launched" },
        { year: 1969, name: "Moon Landing" },
        { year: 2020, name: "Global Pandemic" },
        { year: 1989, name: "Fall of Berlin Wall" }
      ];
      const randomIndex = Math.floor(Math.random() * events.length);
      resolve(events[randomIndex]);
    }, Math.random() * 1000);
  });
}

```

### Obiettivi:
Scrivi una funzione asincrona `travelThroughHistory`, che:

-   Chiama **N volte** `getPastEvent()` in parallelo. ( N puo essere 5,10, 100, 1000 )
    
-   Raccoglie tutti i risultati.
    
-   Ordina gli eventi **cronologicamente (dal più vecchio al più recente)**.
    
-   Rimuove i **duplicati** (stesso anno + stesso nome).
    
-   Restituisce **solo** gli eventi avvenuti **prima del 2000**.


