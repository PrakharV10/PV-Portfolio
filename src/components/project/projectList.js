import covid from '../images/projects/covid.png';
import quiz1 from '../images/projects/quiz1.png';
import quiz2 from '../images/projects/quiz2.jpg';
import minion from '../images/projects/Minions.jpg';
import shakespeare from '../images/projects/Shakespeare.jpg';
import movie from '../images/projects/Movie.jpg';
import smiley from '../images/projects/smiley.png';

export const projectList = {
    "Using Python" : [
        {
            imago : covid,
            Name: "Covid Assessment System",
            Date: "September,2020",
            Description: "A System to analyze the regularly updated data of Covid-19 using Python. With the help of APIs, and libraries such as PANDAS and MatplotLib, plot the Graph for various countries.",
            Link1: "https://colab.research.google.com/drive/1E4ljy8h7JBWH87qQO5YV4CQY_KIzMil9",
            link2: "https://github.com/PrakharV10/Covid-Assessment-System."
        }
    ],
    
    "CLI App" :[
        {
            imago : quiz1,
            Name: "Do you know me?",
            Date: "November,2020",
            Description: "A Command-Line-Application built with NodeJS. Start with the basics of JavaScript. Follow along to perform exercises, and Build a Quiz as the end result!",
            Link1: "https://repl.it/@Prakhar10V/Project-01-p1?embed=1&output=1#index.js",
            link2: "https://github.com/PrakharV10/Project-01---p1"
        },
        {
            imago : quiz2,
            Name: "Dare to call yourself a F.R.I.E.N.D.S Fan?",
            Date: "November,2020",
            Description: "Another CLI Quiz built with NodeJS. Used the CHALK library to beautify the project. Play the Quiz, and share your Scores!",
            Link1: "https://repl.it/@Prakhar10V/Project-01-p2?embed=1&output=1#index.js",
            link2: "https://github.com/PrakharV10/Project-01---p2"
        }
    ], 

    "Using API" :[
        {
            imago : minion,
            Name: "Translate your sentences to Minion-Dialect!",
            Date: "November,2020",
            Description: "A browser Application made by integrating JavaScript with HTML & CSS. Used Translation API for sentence translation.",
            Link1: "https://minionpv.netlify.app/",
            link2: "https://github.com/PrakharV10/Project-06---Banana-Talk"
        },

        {
            imago : shakespeare,
            Name: "'Speak n Translate' & Hear what Shakespeare used to say!",
            Date: "December,2020",
            Description: "Another browser Application made by integrating JavaScript with HTML & CSS. Used Translation API for sentence translation. Used Speech Recognition Web API for Text-Input and Voice-output.",
            Link1: "https://voice-pv-translate.netlify.app/",
            link2: "https://github.com/PrakharV10/Voice-Translation-Yoda-App"
        }
    ],
        
    "Using React" :[
        {
            imago : smiley,
            Name: "A guide to my feelings! Try out my Amazing Personalized Emoji Translator!",
            Date: "December,2020",
            Description: "First Web Application made by using ReactJS with HTML & CSS. Created own Dataset for the transalations.",
            Link1: "https://pv-emoji.netlify.app/",
            link2: "https://github.com/PrakharV10/React-Emoji-PV"
        },
        {
            imago : movie,
            Name: "Want to watch a Movie? Take My Recommendation!",
            Date: "December,2020",
            Description: "A Movie Recommendation Application made by using ReactJS with HTML & CSS. Created own Dataset for the Movie Recommendations.",
            Link1: "https://pv-recommendation.netlify.app/",
            link2: "https://github.com/PrakharV10/react-recommendation-app"
        }
    ]
}