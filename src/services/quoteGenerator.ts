import { Quote } from '../types';

// Famous Danish quotes
const famousQuotes = [
  {
    text: "At rejse er at leve",
    author: "H.C. Andersen"
  },
  {
    text: "Livet forstås baglæns, men må leves forlæns",
    author: "Søren Kierkegaard"
  },
  {
    text: "Det er ganske vist!",
    author: "H.C. Andersen"
  },
  {
    text: "Angsten er frihedens svimmelhed",
    author: "Søren Kierkegaard"
  },
  {
    text: "Man må tage det sure med det søde",
    author: "Piet Hein"
  },
  {
    text: "Den der kommer først til mølle, får først malet",
    author: "Dansk ordsprog"
  },
  {
    text: "Hvor der er hjerterum, er der husrum",
    author: "Dansk ordsprog"
  },
  {
    text: "Det vigtigste er ikke at se nyt, men at se det velkendte med nye øjne",
    author: "Piet Hein"
  },
  {
    text: "Kunsten er ikke at læse, men at leve det læste",
    author: "Søren Kierkegaard"
  },
  {
    text: "Den, som intet vover, intet vinder",
    author: "Dansk ordsprog"
  },
  {
    text: "Lykken er ikke noget man finder, det er noget man skaber",
    author: "Karen Blixen"
  },
  {
    text: "Jeg drømmer om alt det jeg kunne være",
    author: "Tove Ditlevsen"
  }
];

// Modern Danish personalities
const danishAuthors = [
  "Søren Kierkegaard",
  "H.C. Andersen",
  "Karen Blixen",
  "Piet Hein",
  "Tove Ditlevsen",
  "Dan Turèll",
  "Peter Høeg",
  "Suzanne Brøgger",
  "Klaus Rifbjerg",
  "Benny Andersen"
];

// Template components for generated quotes
const templates = [
  "{{start}} {{midt}} {{slut}}",
  "{{start}} og {{midt}}",
  "{{midt}}, for {{slut}}",
  "{{start}}, men {{slut}}",
];

const start = [
  "Livet er som en bog",
  "I stilheden findes sandheden",
  "Hver morgen er en ny begyndelse",
  "Gennem modgang kommer styrke",
  "I hjertet af vintermørket",
  "Under den danske himmel",
  "Med tiden lærer vi",
  "I naturens visdom",
];

const midt = [
  "finder vi vores vej",
  "vokser vores drømme",
  "blomstrer håbet",
  "møder vi os selv",
  "opdager vi sandheden",
  "ser vi klarest",
  "forstår vi mere",
];

const slut = [
  "i livets dans",
  "under stjernerne",
  "i morgendagens lys",
  "gennem alle årstider",
  "i hjertets sprog",
  "når tiden er moden",
  "i naturens gang",
];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function generateNewQuote(): Quote {
  const template = getRandomElement(templates);
  const text = template
    .replace('{{start}}', getRandomElement(start))
    .replace('{{midt}}', getRandomElement(midt))
    .replace('{{slut}}', getRandomElement(slut));

  return {
    id: Date.now().toString(),
    text,
    author: getRandomElement(danishAuthors)
  };
}

export function generateQuote(): Quote {
  // 40% chance to get a famous quote, 60% chance to get a generated one
  const useFamousQuote = Math.random() < 0.4;
  
  if (useFamousQuote) {
    const famousQuote = getRandomElement(famousQuotes);
    return {
      id: Date.now().toString(),
      ...famousQuote
    };
  }
  
  return generateNewQuote();
}