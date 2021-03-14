[![GitHub issues](https://img.shields.io/github/issues/Ffyud/stadjers-quiz)](https://github.com/Ffyud/stadjers-quiz/issues)
# Stadjers Quiz

Een quiz over Groningen Stad. Test je kennis van Stad op basis van locaties, architectuur, beelden en geschiedenis. De hoeveelheid vragen probeer ik zo nu en dan uit te breiden.

- Bevindingen kunnen als issue toegevoegd worden op Github.
- Eigen bijdrages zijn welkom, maar doe dat via een pull request.

### Vragen

- De quizvragen bestaan uit een vraag, 4 antwoordkeuzes, een niveau en een afbeelding. 
- Het niveau is subjectief en wordt gewoon ter info toegevoegd.
- In _quiz.json_ staan alle vragen.
- Er worden willekeurig 25 vragen gekozen uit het totale aanbod.
- De vragen worden in willekeurige volgorde aangeboden.

### Foto's

- In /fotos staan de afbeeldingen die bij de vraag horen. 
- De bestandsnamen moeten overeen komen met het vraag id. 
- Foto's hebben een vast formaat van 1000px bij 750px om het wat consistent te houden.
- Foto's moeten voor gebruik ook toegevoegd worden aan het _QuizFotos.js_ object. Omdat het een statische webpagina is kan dat niet echt slimmer.

### Resultaten

- Als alle vragen beantwoord zijn worden de resultaten getoond.
- De eindscore is het percentage goede antwoorden.
- Er wordt een canvas element getekend die gedeeld kan worden als afbeelding.