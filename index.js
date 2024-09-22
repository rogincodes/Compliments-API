import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET all compliments
app.get("/", (req, res) => {
  res.json(compliments);
});

// GET a random compliment
app.get("/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * compliments.length);
  res.json(compliments[randomNumber]);
});

// GET a specific compliment by id
app.get("/compliments/:id", (req, res) => {
  const foundCompliment = compliments.find((compliment) => compliment.id === parseInt(req.params.id));
  res.json(foundCompliment);
});

// GET compliments by filtering its type
app.get("/filter", (req, res) => {
  const filteredCompliments = compliments.filter((compliment) => compliment.type === req.query.type);
  res.json(filteredCompliments);
});


// In-memory data store
let compliments = [
  {
    id: 1,
    compliment: "The way you care about others is a reflection of the beautiful soul you have.",
    type: "Sincere",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 2,
    compliment: "You always seem to know how to lift people up when they need it the most.",
    type: "Sincere",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 3,
    compliment: "Your loyalty to those you care about is something truly special.",
    type: "Sincere",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 4,
    compliment: "Your mind is like a puzzle, constantly revealing new and fascinating pieces.",
    type: "Creative",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 5,
    compliment: "You don’t just follow the path; you create your own and make it look effortless.",
    type: "Empowering",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 6,
    compliment: "You have the kind of strength that turns obstacles into stepping stones.",
    type: "Empowering",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 7,
    compliment: "You have a way of turning even the simplest moment into something memorable and magical.",
    type: "Creative",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 8,
    compliment: "The way your mind works is like a kaleidoscope, creating something new and colorful with every turn.",
    type: "Creative",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 9,
    compliment: "Your honesty is one of the things that makes you such a trustworthy person.",
    type: "Sincere",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 10,
    compliment: "Your confidence makes others believe they can achieve anything they set their minds to.",
    type: "Empowering",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 11,
    compliment: "Your imagination is a playground, and every idea you share is more brilliant than the last.",
    type: "Creative",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 12,
    compliment: "You have a gift for making others feel safe and valued.",
    type: "Sincere",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 13,
    compliment: "Every time you share a thought, it’s like a spark that ignites new possibilities.",
    type: "Creative",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 14,
    compliment: "Your ideas have a way of making the ordinary seem extraordinary.",
    type: "Creative",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 15,
    compliment: "You have a way of motivating people that’s more powerful than words.",
    type: "Empowering",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 16,
    compliment: "You always seem to know the right thing to say to make people feel better.",
    type: "Sincere",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 17,
    compliment: "The way you tackle challenges head-on shows just how unstoppable you are.",
    type: "Empowering",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 18,
    compliment: "You see the world like an artist, noticing beauty where others might not.",
    type: "Creative",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 19,
    compliment: "You make everyone around you feel like they truly matter.",
    type: "Sincere",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 20,
    compliment: "You don’t just overcome obstacles, you crush them and move on to bigger things.",
    type: "Empowering",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 21,
    compliment: "Your compassion for others shines through in everything you do.",
    type: "Sincere",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 22,
    compliment: "You face challenges with such grace, and it’s incredibly inspiring.",
    type: "Empowering",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 23,
    compliment: "You show others what’s possible when you believe in yourself.",
    type: "Empowering",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 24,
    compliment: "Your courage to stand up for what’s right is a rare and admirable trait.",
    type: "Empowering",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 25,
    compliment: "Your ability to stay true to yourself is something I deeply admire.",
    type: "Sincere",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 26,
    compliment: "If ideas were currency, you'd be wealthier than anyone else I know.",
    type: "Creative",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 27,
    compliment: "You bring out the best in everyone around you, simply by being yourself.",
    type: "Sincere",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 28,
    compliment: "Your mind is like a treasure chest—there’s always something valuable and unexpected inside.",
    type: "Creative",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 29,
    compliment: "Your kindness is something the world could use more of.",
    type: "Sincere",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  },
  {
    id: 30,
    compliment: "You could turn even the most ordinary day into something extraordinary with your creativity.",
    type: "Creative",
    author: "ChatGPT",
    created: "2024-09-20T09:07:00.699Z"
  }
];

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});