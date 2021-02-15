[![GitHub issues](https://img.shields.io/github/issues/Ffyud/stadjers-quiz)](https://github.com/Ffyud/stadjers-quiz/issues)
# Stadjers Quiz

Een quiz over Groningen Stad. Test je kennis van Stad op basis van locaties, architectuur en beelden. De hoeveelheid vragen zal nog uitbreiden!

### Vragen

- De quizvragen bestaan uit een vraag, 4 antwoordkeuzes, een niveau en een afbeelding. 
- In _QuizData.js_ staat een JSON-object waarin de vragen met relevante informatie gezet kunnen worden. 
- De quizvragen worden in willekeurige volgorde aangeboden.

### Foto's

- In /fotos staan de afbeeldingen die bij de vraag horen. 
- De bestandsnamen moeten overeen komen met het vraag id. 
- Foto's hebben een vast formaat van 1000px bij 750px om het wat consistent te houden op meerdere schermformaten.
- Foto's moeten voor gebruik ook toegevoegd worden aan het _QuizFotos.js_ object. Da's iets wat nog slimmer gemaakt moet worden.

### Resultaten

- Als alle vragen beantwoord zijn worden de resultaten getoond.
- De eindscore is het percentage goede antwoorden.
- Er wordt een canvas element getekent die gedeeld kan worden als afbeelding.