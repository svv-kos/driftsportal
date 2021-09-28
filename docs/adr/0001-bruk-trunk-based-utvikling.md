# Bruk trunk based utvikling

* Status: accepted
* Deciders: Martin Remøy Solheim, Runar Ovesen Hjerpbakk
* Date: 2021-09-28

## Kontekst og problembeskrivelse

Vi må bestemme oss for hvilken git strategi vi vil bruke. Hvordan skal kode sjekkes in.

## Alternativer

* Trunk based - Alle commits går hovedsaklig til main.
* PR basert - Alle commits går i en branch som merges til main via PR. 


## Besluttning

Valgt alternativ: "Trunk based".

Når alle commits går rett til main vil alle til en hver tid jobbe med den nyeste versjonen av koden. Man slipper å ha langtlevende branches som må rabases og store merge konflikter. Når vi ikke bruker PR så slipper andre utviklere som ikke har vært involvert i kodingen å forholde seg til et pull request view. Code review gjøres heller i par slik at begge utviklerne kan ha samme kontekst. Dette gir også at den som gjør review får bedre forståelse for den delen av koden.

Selv om vi har hovedvekt på trunk based utvikling, betyr ikke det at man aldri skal bruke branches eller PR. Men man bør bare bruke disse hvis det er strengt nødvendig. 
