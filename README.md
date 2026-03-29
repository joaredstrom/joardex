# Joardex

En Pokemon-encyklopedi som visar Drake- och Elektro-Pokemon med bilder, stats och ljud!

Byggd med HTML, CSS och JavaScript. Ingen framework behövs.

## Funktioner

- 20 Pokemon uppdelade i Draktyper och Elektrotyper
- Klicka på ett kort for att se detaljerad info med stats
- Spela varje Pokemons ljud med en knapp i detaljvyn
- Mork tema med snygga animationer
- Funkar pa mobil och dator

## Mina instruktioner

Det har ar vad jag sa till Claude att jag ville ha:

> Jag vill att man ska kunna höra varje Pokemons ljud.
> Det ska vara en knapp att trycka på.
> Knappen ska vara pa detaljvyn for varje Pokemon.

Sen fick Claude fraga fragor, och jag svarade:

- **Var ska ljudet komma ifran?** - Fran PokeAPI (en gratis Pokemon-databas pa internet)
- **Hur ska knappen se ut?** - Bade en ikon och text
- **Var ska knappen vara?** - Under bilden i detaljvyn, lite pa sidan
- **Vilket sprak?** - Svenska

## Hur instruktionerna blev till kod

Har ar vad Claude gjorde for att mina instruktioner skulle bli verklighet:

### 1. Hitta Pokemon-ljuden

Pokemon-ljud (som kallas "cries") finns gratis pa internet i ett projekt som heter PokeAPI. Varje Pokemon har en ljudfil. Claude la till en funktion som vet var ljudfilerna finns:

```
https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/{pokemon-id}.ogg
```

Till exempel har Pikachu id 25, sa Pikachus ljud finns pa `.../25.ogg`.

### 2. Spela upp ljudet

Claude skrev en funktion som heter `playCry` som:
- Stoppar ljudet om ett annat Pokemon-ljud redan spelas
- Hamtar ratt ljudfil for den Pokemon man klickade pa
- Spelar upp ljudet i webblasaren

### 3. Lagga till knappen

I detaljvyn (rutan som poppar upp nar man klickar pa en Pokemon) la Claude till en knapp med:
- En liten hogtalare-ikon (en SVG-bild)
- Texten "Spela ljud"
- Knappen placerades under Pokemon-bilden, precis som jag ville

### 4. Gora knappen snygg

Knappen fick:
- Samma farg som Pokemon-typen (lila for Drake, gul for Elektro)
- Den blir lite storre nar man hover med musen over den
- Den krymper lite nar man trycker pa den, sa det kanns som en riktig knapp
- Rundade horn sa den ser ut som en piller-form
