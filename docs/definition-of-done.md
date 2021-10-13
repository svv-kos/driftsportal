# 💎 Definition of Done (DoD)

Vi jobber trunk-based og pusher kode direkte til main (trunk). Når endringer pushes til main har vi noen kriterier for at det skal være ansett som ferdig.

## 🚦 Kriterier til endringer

### ✨ Skal alltid

- Ha kjørt `test-build` lokalt (`npm run validate-ts && npm run test && npm run build`)
- Være deployet og kjøre i produksjon (evt. togglet)

### ✨ Hvis aktuelt

- Testdekning på endringer
- Bugfix pushet

## 🧰 Hva trenger vi for å jobbe slik?

- Små endringer ofte
- Automatisert testing
- Raskt bygg
- Enkel deploy
