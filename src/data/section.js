import wrestleImage from './../assets/images/Arcade wrestle-p-1080.webp';
import playImage from './../assets/images/herokind-adventure-lores-p-800.png';
import ideasImage from './../assets/images/028-band-playing-p-800.webp';
import lunchboxImage from './../assets/images/Lunchboxes.gif';

const section = {
  wrestle: {
    image: wrestleImage,
    text: {
      title: 'Wrestle. Wrestle. Wrestle!',
      paragraph: [
        'Step into the arena with Wrestle, the latest game feature in Herokind. Pit your Humankind characters against a diverse array of monsters, from the ferocious Alligatornado to the cunning Nerdy Dragon. Strategize your moves and watch your characters grow in this turn-based adventure.',
      ],
    },
    button: [
      {
        text: '🤓 Learn More',
        class: 'bg-black text-white border-black hover:bg-red-500',
      },
      {
        text: '🤼 Wrestle Now!',
        class:
          'bg-yellow-300 text-black border-yellow-500 hover:bg-lime-200 ml-2',
      },
    ],
  },
  play: {
    image: playImage,
    text: {
      title: 'Play Herokind!',
      paragraph: [
        'Herokind is a unique game made just for Humankind NFT collectors. It combines the fun of collectibles with the anticipation of daily adventure events.',
        'Send your Humankind collectibles to places like Tenotch Forest, Skull Volcano, and Cloud Island, where the environment and events are unpredictable and can change at any time.',
      ],
    },
    button: [
      {
        text: '⚔️ Play Now!',
        class: 'bg-yellow-300 text-black border-yellow-500 hover:bg-lime-200',
      },
    ],
  },
  ideas: {
    image: ideasImage,
    text: {
      title: 'Bring your ideas to life with the Humankind Fund',
      paragraph: [
        'The Humankind Fund is a community-driven initiative that supports and empowers projects that share the values and mission of the Humankind brand. Join us in bringing creative ideas to life and making a positive impact on the world.',
      ],
    },
    button: [
      {
        text: '❤️ Learn More',
        class: 'bg-yellow-300 text-black border-yellow-500 hover:bg-lime-200',
      },
    ],
  },
  lunchbox: {
    image: lunchboxImage,
    text: {
      title: 'Bring your ideas to life with the Humankind Fund',
      paragraph: [
        'We are delighted you’re finally joining our adventure alongside Maya and Dallas. It all starts with a simple and nostalgic object: a lunchbox. A lunchbox? What for? Well, it’s gonna be a long journey! ',
        'Every lunchbox will unlock a Humankind on a brave quest. You’ll be able to claim your Kind with them. We’ve made our generative lunchboxes with art we’ve been creating for the last year. ',
      ],
    },
    button: [
      {
        text: '🌊 Get one from Opensea',
        class: 'bg-black text-white border-black hover:bg-red-500',
      },
      {
        text: '🌮 Learn more',
        class: 'text-black border-black ml-2',
      },
    ],
  },
};

export default section;
