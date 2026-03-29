# Joardex

---

## 🇸🇪 Svenska

En Pokemon-encyklopedi som visar Drake- och Elektro-Pokemon med bilder, stats och ljud!

Byggd med HTML, CSS och JavaScript. Ingen framework behövs.

### Funktioner

- 20 Pokemon uppdelade i Draktyper och Elektrotyper
- Klicka på ett kort for att se detaljerad info med stats
- Spela varje Pokemons ljud med en knapp i detaljvyn
- Mork tema med snygga animationer
- Funkar pa mobil och dator

### Mina instruktioner

#### Hela appen

Forst sa jag till Claude:

> Jag vill gora en Pokedex som heter Joardex som delar upp draktyper och elektrotyper pa tva rader. Man ska kunna kolla pa dem och det ska vara roda prickar mellan varje Pokemon.

#### Ljud-knappen

Sen sa jag:

> Jag vill att man ska kunna höra varje Pokemons ljud.
> Det ska vara en knapp att trycka på.
> Knappen ska vara pa detaljvyn for varje Pokemon.

Claude fragade fragor, och jag svarade:

- **Var ska ljudet komma ifran?** - Fran PokeAPI (en gratis Pokemon-databas pa internet)
- **Hur ska knappen se ut?** - Bade en ikon och text
- **Var ska knappen vara?** - Under bilden i detaljvyn, lite pa sidan
- **Vilket sprak?** - Svenska

### Hur instruktionerna blev till kod

Har ar vad Claude gjorde for att mina instruktioner skulle bli verklighet:

#### 1. Hitta Pokemon-ljuden

Pokemon-ljud (som kallas "cries") finns gratis pa internet i ett projekt som heter PokeAPI. Varje Pokemon har en ljudfil. Claude la till en funktion som vet var ljudfilerna finns:

```
https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/{pokemon-id}.ogg
```

Till exempel har Pikachu id 25, sa Pikachus ljud finns pa `.../25.ogg`.

#### 2. Spela upp ljudet

Claude skrev en funktion som heter `playCry` som:
- Stoppar ljudet om ett annat Pokemon-ljud redan spelas
- Hamtar ratt ljudfil for den Pokemon man klickade pa
- Spelar upp ljudet i webblasaren

#### 3. Lagga till knappen

I detaljvyn (rutan som poppar upp nar man klickar pa en Pokemon) la Claude till en knapp med:
- En liten hogtalare-ikon (en SVG-bild)
- Texten "Spela ljud"
- Knappen placerades under Pokemon-bilden, precis som jag ville

#### 4. Gora knappen snygg

Knappen fick:
- Samma farg som Pokemon-typen (lila for Drake, gul for Elektro)
- Den blir lite storre nar man hover med musen over den
- Den krymper lite nar man trycker pa den, sa det kanns som en riktig knapp
- Rundade horn sa den ser ut som en piller-form

---

## 🇬🇧 English

A Pokemon encyclopedia that shows Dragon and Electric type Pokemon with images, stats and sound!

Built with HTML, CSS and JavaScript. No framework needed.

### Features

- 20 Pokemon split into Dragon types and Electric types
- Click a card to see detailed info with stats
- Play each Pokemon's cry with a button in the detail view
- Dark theme with smooth animations
- Works on mobile and desktop

### My instructions

#### The whole app

First I told Claude:

> I want to make a Pokedex called Joardex that splits dragon types and electric types into two rows. You should be able to look at them and there should be red dots between each Pokemon.

#### The sound button

Then I said:

> I want to be able to hear each Pokemon's sound.
> There should be a button to press.
> The button should be in the detail view for each Pokemon.

Claude asked questions, and I answered:

- **Where should the sound come from?** - From PokeAPI (a free Pokemon database on the internet)
- **How should the button look?** - Both an icon and text
- **Where should the button be?** - Under the image in the detail view, slightly to the side
- **What language?** - Swedish

### How the instructions became code

Here is what Claude did to make my instructions become reality:

#### 1. Find the Pokemon sounds

Pokemon sounds (called "cries") are available for free on the internet in a project called PokeAPI. Each Pokemon has a sound file. Claude added a function that knows where the sound files are:

```
https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/{pokemon-id}.ogg
```

For example, Pikachu has id 25, so Pikachu's sound is at `.../25.ogg`.

#### 2. Play the sound

Claude wrote a function called `playCry` that:
- Stops the sound if another Pokemon cry is already playing
- Fetches the right sound file for the Pokemon you clicked on
- Plays the sound in the browser

#### 3. Add the button

In the detail view (the box that pops up when you click a Pokemon) Claude added a button with:
- A small speaker icon (an SVG image)
- The text "Spela ljud" (Play sound)
- The button was placed under the Pokemon image, just like I wanted

#### 4. Make the button look nice

The button got:
- The same color as the Pokemon type (purple for Dragon, yellow for Electric)
- It gets a little bigger when you hover over it with the mouse
- It shrinks a little when you press it, so it feels like a real button
- Rounded corners so it looks like a pill shape
