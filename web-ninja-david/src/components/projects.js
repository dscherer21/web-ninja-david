const projects = [
    {
        _id: 1,
        title:"Websmith David",
        link: "https://websmith-david.herokuapp.com/",
        imageLink: "./../media/websmithdavidscreenshot.png",
        projectDescription: "David's Main Portfolio page.",
        technologiesUsed: "HTML5, CSS3, ES6, Bootstrap3, JSX, ReactJS, ExpressJS, NodeJS, Body-Parser, NodeMailer, DOTENV, Concurrently, Nodemon, Axios, React-dom, react-player, react-captcha, self-made API, react-router-dom, react-scripts, Heroku, Git and Github, VSCode and Atom, and Google Fonts."
    },

    {
        _id: 2,
        title:"Dragon Ball Quiz",
        link: "https://dragon-ball-quiz.herokuapp.com/",
        imageLink: "./../media/dragonballquiz.png",
        projectDescription: "A Quiz Application that tests the user's knowledge of the Dragon Ball franchise, and compares their results to a character from the show.",
        technologiesUsed: "HTML5, CSS3, JavaScript (ES6), JSX, NodeJS, ExpressJS, Body-Parser, ReactJS, React Hooks, Sass, Jest, Enzyme, Google Fonts, VSCode, and Heroku."
    },

    {
        _id: 3,
        title:"David's Pokédex",
        link: "https://davids-pokedex.herokuapp.com/",
        imageLink: "./../media/davidspokedex.png",
        projectDescription: "A Pokedex application where you can search for Pokemon using different parameters. David's first app that utilizes Jest and Unit Testing.",
        technologiesUsed: "HTML5, CSS3, ES6, NodeJs, ExpressJS, ReactJS, React Hooks, JSX, DOTENV, Body-Parser, Bootstrap 4, Axios, Jest, Enzyme, Unit Testing, VSCode, Git and Github, and Heroku."
    },

    {
        _id: 4,
        title:"Fullmetal Alchemist Stopwatch",
        link: "https://fma-stopwatch.herokuapp.com/",
        imageLink: "./../media/fmastopwatchscreenshot.png",
        projectDescription: "A stopwatch application with a Fullmetal Alchemist theme that utilizes React Hooks.",
        technologiesUsed: "ReactJS, NodeJS, ExpressJS, React Hooks, JSX, ES6, CSS3, HTML5, DOTENV, Bootstrap, Google Fonts, Git and Github, VSCode, and Heroku."
    },

    {
        _id: 5,
        title:"City Seedlings Preschool",
        link: "https://www.cityseedlingspreschool.com/",
        imageLink: "./../media/cityseedlingspreschool.png",
        projectDescription: "David helped a client to build their website for their business using Squarespace. David also consulted with the client and gave ideas on how to expand upon their site.",
        technologiesUsed: "SquareSpace"
    },

    {
        _id: 6,
        title:"ReactJS NYT Search",
        link: "https://nyt-mern-stack.herokuapp.com/",
        imageLink: "./../media/nytscreenshot.png",
        projectDescription: "A Full MERN Stack Application that searches for articles from The New York Times Website, allows you to store them in a database, and make comments on them.",
        technologiesUsed: "HTML5, CSS3, ES6, NodeJs, Yarn, Bootstrap 3, JQuery, ExpressJS, MongoDB, ReactJS, Axios, Body-Parser, Dotenv, Morgan, Mongoose, Mongojs, React-Dom, React-Router-Dom, React-Scripts, Git and Github, and VSCode."
    },

    {
        _id: 7,
        title:"Holy Covenant UMC",
        link: "https://www.holycovenantumc.org/",
        imageLink: "./../media/hcumcscreenshot.png",
        projectDescription: "David consults with church elders once a month about changes to the site, and helps to implement them.",
        technologiesUsed: "The site used WordPress in the past, but has since upgraded to Squarespace."
    },

    {
        _id: 8,
        title:"Bootstrap Portfolio",
        link: "https://dscherer21.github.io/bootstrap-portfolio",
        imageLink: "./../media/bootstrapportfolioscreenshot.png",
        projectDescription: "This app is my first original portfolio page. It Has a short description about myself and my projects.",
        technologiesUsed: "HTML5, CSS3, Bootstrap 3, ES5, Git and Github, and VSCode."
    },

    {
        _id: 9,
        title:"DevTech Scraper",
        link: "https://devtechscraper.herokuapp.com/",
        imageLink: "./../media/devtechscreenshot.png",
        projectDescription: "An app that scrapes the www.developer-tech.com website for articles, stores them in a MongoDB database, and displays them on a webpage.",
        technologiesUsed: "HTML5, CSS3, ES5, jQuery, Bootstrap 3, Axios, Body-Parser, Cheerio, Dotenv, ExpressJS, Express-Handlebars, Mongojs, Mongoose, Morgan, Nodemon, Request, NodeJS, NPM, MongoDB, Git and Github, and VSCode"
    },

    {
        _id: 10,
        title:"The Matrix Hangman",
        link: "https://dscherer21.github.io/Hangman-Game/",
        imageLink: "./../media/matrixwallpaper.jpg",
        projectDescription: "An app that lets you play a Matrix themed game of 'Hangman'.",
        technologiesUsed: "HTML5, CSS3, Bootstrap 3, ES5, GoogleFonts, Git and Github, and VSCode"
    },

    {
        _id: 11,
        title:"Futurama RPG",
        link: "https://dscherer21.github.io/futurama-rpg-game/",
        imageLink: "./../media/futuramabackground.jpg",
        projectDescription: "A mini RPG(Roleplaying Game) based around the cartoon show 'Futurama'.",
        technologiesUsed: "HTML5, CSS3, Bootstrap 3, ES5, jQuery, GoogleFonts, Git and Github, and VSCode"
    },

    {
        _id: 12,
        title:"Dexter Trivia",
        link: "https://dscherer21.github.io/dexter-trivia-game/",
        imageLink: "./../media/dexterbackground.jpg",
        projectDescription: "A timed trivia game based around the HBO TV show 'Dexter'.",
        technologiesUsed: "HTML5, CSS3, Bootstrap 3, ES5, jQuery, GoogleFonts, Git and Github, and VSCode"
    },

    {
        _id: 13,
        title:"Super Hero GIF Widget",
        link: "https://dscherer21.github.io/super-hero-gif-search-widget/",
        imageLink: "./../media/comicbookwallpaper.jpg",
        projectDescription: "An app that has some Hero Buttons that, when clicked on, generate GIFs related to that Hero. You can also create your own Hero Button with the 'Create Hero Button' button.",
        technologiesUsed: "HTML5, CSS3, Bootstrap 3, ES5, jQuery, GoogleFonts, Git and Github, and VSCode"
    },

    {
        _id: 14,
        title:"BamazonJS",
        link: "https://github.com/dscherer21/bamazon",
        imageLink: "./../media/customerdemo1.png",
        projectDescription: "An Amazon Mock up run from the Command Line. Three apps running together: A Customer Side app, A manager app, and an Executive app. This is not a deployed application, however, you can view a YouTube video of me demoing it on Github.",
        technologiesUsed: "ES5, MySQL, NodeJS, NPM, Cli-table, Colors, Dotenv, Inquirer, Prompt, Git and Github, and VSCode"
    },

    {
        _id: 15,
        title:"Heroes Friend Finder",
        link: "https://heroesfriendfinder.herokuapp.com/",
        imageLink: "./../media/friendfinderscreenshot.png",
        projectDescription: "In this app, you will be asked a series of questions. Depending on your answers, you will be paired with another person. Your name and answers will be stored in the database, and anyone that answers similarly will be paired with you. There is already 8 people, characters from the hit TV series 'Heroes', stored in the database.",
        technologiesUsed: "HTML5, CSS3, ES5, Bootstrap 3, ExpressJS, Body-Parser, Self-made API, JSON, NodeJS, NPM, Path, Git and Github, and VSCode"
    }

];

module.exports = projects;