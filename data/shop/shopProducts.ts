import {
  IShop,
  IShopProductWithAuthor,
  License,
  ProductTypeEnum,
} from "./types/IShopProduct";

export const shop: IShop = {
  authors: [
    {
      name: "Fari RPGs",
      slug: "fari-rpgs",
      links: {
        twitter: "https://farirpgs.com/twitter",
        website: "https://farirpgs.com",
      },
      products: [
        {
          name: "Charge RPG",
          slug: "charge-rpg",
          type: ProductTypeEnum.Game,
          description:
            "A generic and fiction first RPG system to power your action packed adventures.",
          license: License.CC_BY_4,
          footer:
            "Text by Fari RPGs under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
          tags: ["charge-rpg", "game"],
          image: "https://gyazo.com/db461bac8eda79fa13f2b81dc03272e3.png",
          links: {
            itchIo: "https://fari-rpgs.itch.io/charge-rpg",
          },
        },
        {
          name: "Charge SRD",
          slug: "charge-srd",
          type: ProductTypeEnum.SRD,
          description:
            "An SRD to make action packed RPGs with forward momentum.",
          license: License.CC_BY_4,
          footer:
            "Text by Fari RPGs under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
          tags: ["charge-rpg", "srd", "new"],
          image: "https://gyazo.com/a6eabc2383f01fa9e30be8c1d64596f2.png",
          links: {
            itchIo: "https://fari-rpgs.itch.io/charge-srd",
          },
        },
        {
          name: "Dash",
          slug: "dash",
          type: ProductTypeEnum.SRD,
          description:
            "A print friendly & condensed version of the Charge RPG system.",
          license: License.CC_BY_4,
          footer:
            "Text by Fari RPGs under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
          tags: ["charge-rpg", "srd", "new"],
          image: "https://gyazo.com/c94071f2daeaaaa1ccbdd99a3a8074cf.png",
          links: {
            itchIo: "https://fari-rpgs.itch.io/dash",
          },
        },
        {
          name: "HOPES & DREAMS SRD",
          slug: "hopes-and-dreams-srd",
          description: "Make your own game ignited by HOPES & DREAMS.",
          type: ProductTypeEnum.SRD,
          license: License.CC_BY_4,
          footer:
            "Text by Fari RPGs under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
          tags: ["hopes-and-dreams", "srd", "new"],
          image: "https://gyazo.com/c143929685716b1ca0ea1edbaefeb0f9.png",
          links: {
            itchIo: "https://fari-rpgs.itch.io/hopes-and-dreams-srd",
          },
        },

        {
          name: "Breathless SRD",
          slug: "breathless-srd",
          description: "An SRD for creating Breathless games.",
          type: ProductTypeEnum.SRD,
          license: License.CC_BY_4,
          footer:
            "Text by Fari RPGs under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
          tags: ["srd", "new"],
          image: "https://gyazo.com/a2ed8a91a6c310fefb69289c7e4df310.png",
          links: {
            itchIo: "https://fari-rpgs.itch.io/breathless-srd",
          },
        },
        {
          name: "Success with Style",
          slug: "success-with-style",
          type: ProductTypeEnum.Blog,
          description:
            "A searchable supply of ideas; these Fate pointers help you succeed with style!",
          license: License.CC_BY_4,
          footer:
            "Text by Fari RPGs under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
          tags: [],
          image: "https://gyazo.com/f7d964a063040abe84ddc9d975378c78.jpeg",
          links: {
            itchIo: "https://fari-rpgs.itch.io/",
          },
        },
        {
          name: "Fate Stunts",
          slug: "fate-stunts",
          type: ProductTypeEnum.Resource,
          description:
            "A very detailed list of stunts to help you get started with Fate character creation quickly.",
          tags: [],
          image: "https://gyazo.com/4868cbe229118ce8a4b7b2e44908d703.jpeg",
          links: {
            itchIo: "https://fari-rpgs.itch.io/",
          },
        },
        {
          name: "Fari App Wiki",
          slug: "fari-app-wiki",
          type: ProductTypeEnum.Resource,
          description:
            "A very detailed list of stunts to help you get started with Fate character creation quickly.",
          tags: [],
          image: "https://gyazo.com/eecddd3af144225b52ac05f77938a442.png",
          links: {},
        },
      ],
    },
    {
      name: "Gila RPGs",
      slug: "gilarpgs",
      links: {
        twitter: "https://twitter.com/gilarpgs",
      },
      products: [
        {
          name: "Lumen",
          slug: "lumen",
          type: ProductTypeEnum.SRD,
          description: "RPG system for action packed, power fantasy games.",
          tags: ["lumen", "srd"],
          image: "https://gyazo.com/047b237d11168d35c52912e0f64ae096.png",
          links: {
            itchIo: "https://gilarpgs.itch.io/lumen",
          },
        },
      ],
    },
    {
      name: "Evil Hat Productions",
      slug: "evilhat",
      links: {
        twitter: "https://twitter.com/EvilHatOfficial",
      },
      products: [
        {
          name: "Fate Condensed",
          slug: "fate-condensed",
          type: ProductTypeEnum.SRD,
          description:
            "The latest version of the Fate System. Compact, stand-alone and streamlined for clarity and ease of reference.",
          license: License.CC_BY_3,
          footer:
            "Text by Evil Hat Productions under a Creative Commons Attribution 3.0 license (CC BY 3.0).\n Product images are copyrighted and used here with the express permission of Evil Hat Productions, LLC.\n The Fate Core font is © Evil Hat Productions, LLC and is used with permission. The Four Actions icons were designed by Jeremy Keller.",
          tags: ["fate", "srd"],
          image: "https://gyazo.com/4ea53966f3171861e0773fe111a7a3e7.png",
          links: {
            itchIo: "https://evilhat.itch.io/fate-condensed",
            driveThru:
              "https://www.drivethrurpg.com/product/302571/Fate-Condensed",
          },
        },
        {
          name: "Fate Accelerated",
          slug: "fate-accelerated",
          type: ProductTypeEnum.SRD,
          description:
            "If you want to get started quickly, this dialed-down version of Fate Core will get you going in no time.",
          footer:
            "Product images are copyrighted and used here with the express permission of Evil Hat Productions, LLC. \n The Fate Core font is © Evil Hat Productions, LLC and is used with permission. The Four Actions icons were designed by Jeremy Keller.",
          tags: ["fate", "ttrpg"],
          image: "https://gyazo.com/09fb7c1d535adf4332c311cca88f68ca.png",
          links: {
            itchIo: "https://evilhat.itch.io/fate-accelerated",
            driveThru:
              "https://www.drivethrurpg.com/product/114902/Fate-Accelerated-Edition-o-A-Fate-Core-Build",
          },
        },
        {
          name: "Fate Core",
          slug: "fate-core",
          type: ProductTypeEnum.SRD,
          description:
            "A Complete guide to Fate with rules, examples and tips. A most if your thirst for knowledge was not satisfied with Fate Condensed.",
          footer:
            "Product images are copyrighted and used here with the express permission of Evil Hat Productions, LLC. \n The Fate Core font is © Evil Hat Productions, LLC and is used with permission. The Four Actions icons were designed by Jeremy Keller.",
          tags: ["fate", "ttrpg"],
          image: "https://gyazo.com/1f05a1e981dcec344f124f8e39b4f972.png",
          links: {
            itchIo: "https://evilhat.itch.io/fate-core",
            driveThru:
              "https://www.drivethrurpg.com/product/114903/Fate-Core-System",
          },
        },
        {
          name: "Fate System Toolkit",
          slug: "fate-system-toolkit",
          type: ProductTypeEnum.SRD,
          description:
            "This expansion for the Fate Core System contains tons of flexible, hackable and adaptable rules that fits any world you are trying to play in.",
          footer:
            "Product images are copyrighted and used here with the express permission of Evil Hat Productions, LLC. \n The Fate Core font is © Evil Hat Productions, LLC and is used with permission. The Four Actions icons were designed by Jeremy Keller.",
          tags: ["fate", "ttrpg"],
          image: "https://gyazo.com/856d366d726b4c5edc8d8fd505a7af9a.png",
          links: {
            itchIo: "https://evilhat.itch.io/fate-system-toolkit",
            driveThru:
              "https://www.drivethrurpg.com/product/119385/Fate-System-Toolkit",
          },
        },
        {
          name: "Fate Adversary Toolkit",
          slug: "fate-adversary-toolkit",
          type: ProductTypeEnum.SRD,
          description:
            "What ever the genre, this book gives you the tools you need to create great obstacles for you stories.",
          footer:
            "Product images are copyrighted and used here with the express permission of Evil Hat Productions, LLC. \n The Fate Core font is © Evil Hat Productions, LLC and is used with permission. The Four Actions icons were designed by Jeremy Keller.",
          tags: ["fate", "ttrpg"],
          image: "https://gyazo.com/02c73c31e5bd4c874c31ee476198cec1.png",
          links: {
            itchIo: "https://evilhat.itch.io/fate-adversary-toolkit",
            driveThru:
              "https://www.drivethrurpg.com/product/219203/Fate-Adversary-Toolkit",
          },
        },
      ],
    },
    {
      name: "Jason Tocci",
      slug: "jasontocci",
      links: {
        twitter: "https://twitter.com/pretendogames",
      },
      products: [
        {
          name: "24XX",
          slug: "24xx",
          type: ProductTypeEnum.SRD,
          description: "A lo-fi sci-fi RPG SRD.",
          tags: ["24xx", "srd"],
          license: License.CC_BY_4,
          footer:
            "Text by Jason Tocci under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
          image: "https://gyazo.com/0c6a155c170ada7f5fe316908b663967.png",
          links: {
            itchIo: "https://jasontocci.itch.io/24xx",
            driveThru:
              "https://www.drivethrurpg.com/product/335307/24XX-SRD?manufacturers_id=17901",
          },
        },
      ],
    },
    {
      name: "Aryl Ether",
      slug: "aryl-ether",
      links: {
        twitter: "https://twitter.com/Aryl_Ether",
      },
      products: [
        {
          name: "Guided by the Sun",
          slug: "guided-by-the-sun",
          type: ProductTypeEnum.SRD,
          description:
            "A GM-less, card-based system, where players tell the story of a protagonist undertaking a journey and making friends along the way.",
          tags: ["srd"],
          image: "https://gyazo.com/122ae6210bcd519928bc297267593423.png",
          links: {
            itchIo: "https://aryl-ether.itch.io/guided-by-the-sun",
          },
        },
      ],
    },
    {
      name: "Rowan, Rook and Decard",
      slug: "rowan-rook-and-decard",
      links: {
        twitter: "https://twitter.com/gshowitt",
        website: "rrdgames.com",
      },
      products: [
        {
          name: "Resistance Toolbox",
          slug: "resistance-toolbox",
          type: ProductTypeEnum.SRD,
          description:
            "Make your own games of desperate struggle using the Resistance System, the core rules that power the Spire RPG.",
          tags: ["resistance", "srd"],
          image: "https://gyazo.com/a8c7868751ecb508bfefe3f6e010b2a9.jpg",
          links: {},
        },
      ],
    },
    {
      name: "Peach Garden Games",
      slug: "peachgardengames",
      links: {
        website: "http://www.peachgardengames.com",
        twitter: "https://twitter.com/peachgardenrpgs",
      },
      products: [
        {
          name: "Harmony Drive",
          slug: "harmony-drive",
          type: ProductTypeEnum.SRD,
          description:
            "Build a campaign-style adventure TTRPG, one that lets players express themselves, work together, and make difficult choices, this is the system for you!",
          license: License.CC_BY_3,
          footer:
            "Text by Peach Garden Games under a Creative Commons Attribution 3.0 license (CC BY 3.0)",
          tags: ["srd"],
          image: "https://gyazo.com/d162a60038bed03bcb97ea19ba931a98.png",
          links: {
            itchIo: "https://peachgardengames.itch.io/harmony-drive",
          },
        },
        {
          name: "Carta",
          slug: "carta",
          type: ProductTypeEnum.SRD,
          description: "A Toolkit For Making Exploration Games.",
          license: License.CC_BY_3,
          footer:
            "Text by Peach Garden Games under a Creative Commons Attribution 3.0 license (CC BY 3.0)",
          tags: ["srd"],
          image: "https://gyazo.com/106826ea4cbde0930e918551a63d7b4d.png",
          links: {
            itchIo: "https://peachgardengames.itch.io/carta-srd",
          },
        },
      ],
    },
    {
      name: "Gamenomicon",
      slug: "gamenomicon",
      links: {
        website: "https://www.gamenomicon.com/",
        twitter: "https://twitter.com/the_gamenomicon",
      },
      products: [
        {
          name: "Second Guess System",
          slug: "second-guess-system",
          type: ProductTypeEnum.SRD,
          description: "Power your solo role-playing games.",
          tags: ["srd"],
          image: "https://gyazo.com/6586967082cf5b9c58d9023e57efc5d3.jpg",
          links: {
            itchIo: "https://gamenomicon.itch.io/second-guess-system-srd",
          },
        },
      ],
    },
    {
      name: "Zadmar Games",
      slug: "zadmargames",
      links: {
        twitter: "https://twitter.com/ZadmarGames",
      },
      products: [
        {
          name: "Tricube Tales",
          slug: "tricube-tales",
          type: ProductTypeEnum.SRD,
          description:
            "A rules-light roleplaying system capable of handling a wide variety of genres and settings.",
          tags: ["srd"],
          license: License.CC_BY_3,
          footer:
            "Text by Zadmar Games under a Creative Commons Attribution 3.0 license (CC BY 3.0)",
          image: "https://gyazo.com/9a154286dae1b48acb1f2bd5d764c9ca.png",
          links: {
            itchIo:
              "https://itch.io/c/1589928/tricube-tales-one-page-rpgs-micro-settings",
            driveThru:
              "https://www.drivethrurpg.com/product/294202/Tricube-Tales",
          },
        },
      ],
    },
    {
      name: "Jesse Ross",
      slug: "jesse-ross",
      links: {
        twitter: "https://twitter.com/jesseross",
        website: "https://jesseross.com/",
      },
      products: [
        {
          name: "Trophy SRD",
          slug: "trophy-srd",
          type: ProductTypeEnum.SRD,
          description:
            "Build your own rules-light, risk-heavy games rooted in the Trophy SRD.",
          tags: ["srd"],
          license: License.CC_BY_4,
          links: {},
          image: "https://gyazo.com/30ebb7b8d6fbd922b36a904c95c89ed3.png",
          footer:
            "Text by Jesse Ross under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
        },
      ],
    },
    {
      name: "Thought Police",
      slug: "thought-police",
      links: {
        twitter: "https://twitter.com/__ThoughtPolice",
      },
      products: [
        {
          name: "Motif Toolkit SRD",
          slug: "motif-toolkit-srd",
          type: ProductTypeEnum.SRD,
          description: "A solo play oracle, an add-on solo RPG system",
          tags: ["srd"],
          license: License.CC_BY_3,
          links: {},
          image: "https://gyazo.com/8488aba599f1a0fafef849748f5137f1.png",
          footer:
            "Text by Jim Liao and Rev. Casey under a Creative Commons Attribution 3.0 license (CC BY 3.0)",
        },
      ],
    },

    {
      name: "Live Real Productions",
      slug: "live-real-productions",
      links: {
        twitter: "https://twitter.com/jwalberg4",
        website: "https://liverealproductions.com/",
      },
      products: [
        {
          name: "VEN6 Storytelling System SRD",
          slug: "ven6-storytelling-system-srd",
          type: ProductTypeEnum.SRD,
          description:
            "Create narrative storytelling roleplaying games with conflict mechanics and a GM option.",
          tags: ["srd"],
          license: License.CC_BY_3,
          links: {
            itchIo: "https://jwalberg.itch.io/ven6-srd",
          },
          image: "https://gyazo.com/0e6746fee7e45d4da29c9cf4683770e9.jpg",
          footer:
            "Text by Live Real Productions under a Creative Commons Attribution 3.0 license (CC BY 3.0)",
        },
      ],
    },
    {
      name: "Pandion Games",
      slug: "pandion-games",
      links: {
        twitter: "https://twitter.com/PandionGames",
        website: "https://www.pandiongames.com/",
      },
      products: [
        {
          name: "Threads of Lachesis",
          slug: "threads-of-lachesis",
          type: ProductTypeEnum.SRD,
          description:
            "A guide to create solo games or generators with branched random prompts that the player organizes into a cohesive sequence via a single roll.",
          tags: ["srd", "new"],
          license: License.CC_BY_4,
          links: {
            itchIo: "https://pandiongames.itch.io/threadsoflachesis",
          },
          image: "https://gyazo.com/f0297d02ee6a46009767e524b12855dc.png",
          footer:
            "Text by Pandion Games under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
        },
      ],
    },
    {
      name: "Uhrwerk Verlag",
      slug: "uhrwerk-verlag",
      links: {
        website: "https://www.uhrwerk-verlag.de",
        twitter: "https://twitter.com/SilentPat",
      },
      products: [
        {
          name: "Turbo-Fate",
          slug: "turbo-fate",
          type: ProductTypeEnum.SRD,
          description:
            "Turbo-Fate ist die deutsche Übersetzung von Fate Accelerated und eine gekürzte Form des beliebten Fate-Core-Rollenspiels.",
          tags: ["srd", "fate"],
          image: "https://gyazo.com/8a15fdf2f519522f5c7d97c6a6310d47.png",
          links: {},
          footer:
            "© Uhrwerk Verlag 2015 Authorized translation of the english edition © 2015 Evil Hat. This translation is published and sold by permission of Evil Hat, the owner of all rights to publish and sell the game. Alle Rechte vorbehalten.",
        },
      ],
    },
    {
      name: "Don Bisdorf",
      slug: "donbisdorf",
      links: {
        twitter: "https://twitter.com/dbisdorf",
        website: "https://www.donbisdorf.com/",
      },
      products: [
        {
          name: "SAVE System",
          slug: "save-the-srd",
          type: ProductTypeEnum.SRD,
          description:
            "The SAVE System is a framework for building quick-playing, low-prep, story-focused RPGs.",
          tags: ["srd"],
          license: License.CC_BY_4,
          image: "https://gyazo.com/f885d1354a3a2950f1ba11ec28ef56a3.png",
          links: {
            itchIo: "https://dbisdorf.itch.io/the-save-system",
          },
          footer:
            "Text by Don Bisdorf under a Creative Commons Attribution 4.0 license (CC BY 4.0)",
        },
      ],
    },
    {
      name: "Kyle Tam",
      slug: "kyle-tam",
      links: {
        twitter: "https://twitter.com/PercyPropa?s=20",
        website: "https://urania-games.itch.io/",
      },
      products: [
        {
          name: "Bad Time SRD",
          slug: "bad-time-srd",
          type: ProductTypeEnum.SRD,
          description:
            "Give characters a laughably bad time with the Bad Time Game SRD!",
          tags: ["srd", "new"],
          license: License.CC_BY_4,
          links: {
            itchIo: "https://urania-games.itch.io/bad-time-game-srd",
          },
          image: "https://gyazo.com/35cece593383cab956d19e42b7e9a925.png",
        },
      ],
    },
    {
      name: "WuDeRPG",
      slug: "wuderpg",
      links: {
        twitter: "https://twitter.com/WuDeRPG",
        website: "https://wuderpg.wordpress.com/",
      },
      products: [
        {
          name: "Five Powers SRD",
          slug: "five-powers-srd",
          type: ProductTypeEnum.SRD,
          description:
            "The Five Powers SRD harnesses the full potential of the 5 Elements of East-Asian Philosophy so you can create evocative games!",
          image: "https://gyazo.com/0784a27c26e7811eb327e64cf8718028.jpg",
          links: {
            itchIo: "https://wuderpg.itch.io/wude-the-five-powers",
          },
          tags: ["srd"],
          // license:License.CC_BY_4,
        },
        {
          name: "Quixotic SRD",
          slug: "quixotic-srd",
          type: ProductTypeEnum.SRD,
          description: "Extravagantly chivalrous",
          image: "https://gyazo.com/656b801dec8a60dae053d107031de588.png",
          links: {
            itchIo: "https://wuderpg.itch.io/quixotic",
          },
          tags: ["srd"],
        },
      ],
    },
    {
      name: "Lynxen RPGs",
      slug: "lynxen-rpgs",
      links: {
        twitter: "https://twitter.com/CrackersCheese2",
        website: "https://lynxen-rpgs.itch.io",
      },
      products: [
        {
          name: "Shillings SRD",
          slug: "shillings-srd",
          type: ProductTypeEnum.SRD,
          description:
            "Shillings SRD is an SRD where you pay to make other pay",
          image: "https://gyazo.com/66265315e6946f9e596f03370701d25b.png",
          links: {
            itchIo: "https://lynxen-rpgs.itch.io/shillings-srd",
          },
          tags: ["srd"],
          license: License.CC_BY_4,
        },
      ],
    },
    {
      name: "Cezar Capacle",
      slug: "cezar-capacle",
      links: {
        twitter: "https://twitter.com/capacle",
        website: "https://capacle.bio.link/",
      },
      products: [
        {
          name: "Push",
          slug: "push",
          type: ProductTypeEnum.SRD,
          description: "A story-first, push-your-luck system for your games",
          image: "https://gyazo.com/a0b7d5f7d8349a73f0de331f85a78d25.png",
          links: {},
          tags: ["srd", "new"],
          // license:License.CC_BY_4,
        },
      ],
    },
    {
      name: "Seelie Squire",
      slug: "seelie-squire",
      links: {},
      products: [
        {
          name: "Seelie Squire's Book of Monsters",
          slug: "book-of-monsters",
          type: ProductTypeEnum.Resource,
          description:
            "Brought to you by Seelie Squire, this is ultimate resource if you are looking for the closest thing to a Fate Compendium.",
          image: "https://gyazo.com/c5fc22597907d925b3fd66243c4b8965.png",
          links: {},
          tags: [],
          // license:License.CC_BY_4,
        },
      ],
    },
    {
      name: "Jordan R Trocchiano",
      slug: "zonefighterj",
      links: {},
      products: [
        {
          name: "3-D",
          slug: "3d",
          type: ProductTypeEnum.SRD,
          description:
            "A game system designed for situations and stories with mounting pressure and immediate consequences of failure or coming up short",
          image: "https://gyazo.com/9532afacaaaf409536e0d3be1520f59f.png",
          links: {},
          tags: ["srd"],
        },
      ],
    },
    {
      name: "Penflower Ink",
      slug: "penflower-ink",
      links: {
        website: "https://www.penflower-ink.com/",
        twitter: "https://twitter.com/tomfummo",
      },
      products: [
        {
          name: "Four Points SRD",
          slug: "four-points-srd",
          type: ProductTypeEnum.SRD,
          description:
            "Build an RPG focused on player agency, characters, narrative and customisation, where you decide when to succeed and when to test your luck.",
          image: "https://gyazo.com/346c57939218fbbfdd6d2ce04ce2cc5c.jpg",
          links: {
            itchIo: "https://penflower-ink.itch.io/four-points-rpg-system-srd",
          },
          tags: ["srd", "new"],
        },
      ],
    },
    {
      name: "Rat Wave Game House",
      slug: "rat-wave-game-house",
      links: {},
      products: [
        {
          name: "Fight Card System",
          slug: "fight-card-system",
          type: ProductTypeEnum.SRD,
          description:
            "A system/design guide for resolving fights via a two player trick taking game.",
          image: "https://gyazo.com/a31577b08f1ca18420dc99af5bd01866.jpeg",
          links: {
            itchIo: "https://ratwavegamehouse.itch.io/the-fight-card-system",
          },
          tags: ["srd", "new"],
        },
      ],
    },
    {
      name: "Craig Hatler",
      slug: "craig-hatler",
      links: {
        twitter: "https://twitter.com/tezrak",
      },
      products: [
        {
          name: "Personae SRD",
          slug: "personae-srd",
          description:
            "Build any kind of characters you can imagine, and allow for meaningful choices to impact the unfolding of thrilling adventures.",
          image: "https://gyazo.com/fa1ea25d2e44a6911ccfe849be8a2a51.png",
          links: {
            itchIo: "https://craighatler.itch.io/personae-rpg",
          },
          tags: ["srd"],
          type: ProductTypeEnum.SRD,
        },
      ],
    },
  ],
};

export const shopProducts: Array<IShopProductWithAuthor> = shop.authors.flatMap(
  (a) => {
    return a.products.map((p): IShopProductWithAuthor => {
      return {
        ...p,
        author: a,
      };
    });
  }
);
