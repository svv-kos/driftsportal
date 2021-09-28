# Driftsportal

[ADR oversikt](docs/adr/index.md)

## For å kjøre lokalt

- [prereq] installer [Node.js](https://nodejs.org/en/)
- `npm i` for å hente ned avhengigheter
- `npm run dev` for å kjøre prosjektet

## ADR

Vi bruker ARD for å holde orden på design og arkitekuravgjørelser vi gjør. Formatet vi bruker er basert på GitHubs [MADR](https://adr.github.io/madr/).

For å legge til en ny ADR:

- Kopier `template.md` i `docs/adr` til `NNNN-tittel-sepparert-med-dashes.md`, hvor `NNNN` er neste nummer i sekvensen.
- Editer `NNNN-tittel-sepparert-med-dashes.md`
- Oppdater `index.md` ved å kjøre `npm run oppdater-adr`