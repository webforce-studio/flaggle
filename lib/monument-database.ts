// Complete monument database with 152 monuments
// Last updated: 2025-07-20T15:03:25.595Z

export interface Monument {
  id: number
  name: string
  location: string
  country: string
  continent: string
  type: string
  kebabId?: string
  description: string
  yearBuilt: number | null
  height: number | null
  latitude: number | null
  longitude: number | null
  images: {
    thumbnail: { webp: string; jpg: string }
    medium: { webp: string; jpg: string }
    large: { webp: string; jpg: string }
  }
  attribution: {
    source: string
    photoId: string
    url: string
    photographer: string
    photographerUrl: string
  }
}

export const monuments: Monument[] = [
  {
    "id": 1,
    "name": "Eiffel Tower",
    "location": "Paris",
    "country": "France",
    "continent": "Europe",
    "type": "Tower",
    "kebabId": "eiffel-tower",
    "description": "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. Constructed from 1887 to 1889 as the entrance to the 1889 World's Fair, it was initially criticized by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognizable structures in the world. The Eiffel Tower is the tallest structure in Paris and the second tallest free-standing structure in France after the Millau Viaduct. It was the world's tallest man-made structure from 1889 to 1930, when it was surpassed by the Chrysler Building in New York City.",
    "yearBuilt": 1889,
    "height": 330,
    "latitude": 48.8584,
    "longitude": 2.2945,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1566902145833-0475c9f1a1bf?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1566902145833-0475c9f1a1bf?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1566902145833-0475c9f1a1bf?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1566902145833-0475c9f1a1bf?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1566902145833-0475c9f1a1bf?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1566902145833-0475c9f1a1bf?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "sfV_Tw658Y4",
      "url": "https://unsplash.com/photos/eiffel-tower-paris-sfV_Tw658Y4",
      "photographer": "Julien Doclot",
      "photographerUrl": "https://unsplash.com/@jdoclot"
    }
  },
  {
    "id": 5,
    "name": "Colosseum",
    "location": "Rome",
    "country": "Italy",
    "continent": "Europe",
    "type": "Amphitheater",
    "kebabId": "colosseum",
    "description": "The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest amphitheatre ever built, measuring approximately 189 meters long, 156 meters wide and 50 meters high. Despite its age, it is still the largest standing amphitheatre in the world today. Construction began under the emperor Vespasian in AD 72 and was completed in AD 80 under his successor and heir, Titus. The Colosseum could hold an estimated 50,000 to 80,000 spectators at various points of its history over the centuries, having an average audience of some 65,000. It was used for gladiatorial contests and public spectacles such as mock naval battles, animal hunts, executions, re-enactments of famous battles, and dramas based on Classical mythology.",
    "yearBuilt": 80,
    "height": 48,
    "latitude": 41.8902,
    "longitude": 12.4922,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "VFRTXGw1VjU",
      "url": "https://unsplash.com/photos/colosseum-arena-photography-VFRTXGw1VjU",
      "photographer": "David Köhler",
      "photographerUrl": "https://unsplash.com/@davidkohler"
    }
  },
  {
    "id": 11,
    "name": "Stonehenge",
    "location": "Wiltshire",
    "country": "England",
    "continent": "Europe",
    "type": "Prehistoric Monument",
    "kebabId": "stonehenge",
    "description": "Stonehenge is a prehistoric monument in Wiltshire, England, consisting of a ring of standing stones. Each standing stone is around 13 feet high, seven feet wide, and weighs around 25 tons. The stones are set within earthworks in the middle of the most dense complex of Neolithic and Bronze Age monuments in England, including several hundred tumuli. Archaeologists believe it was constructed from 3100 to 2000 BC. The surrounding circular earth bank and ditch, which constitute the earliest phase of the monument, have been dated to about 3100 BC. Radiocarbon dating suggests that the first bluestones were raised between 2400 and 2200 BC, although they may have been at the site as early as 3000 BC.",
    "yearBuilt": -3100,
    "height": 7,
    "latitude": 51.1789,
    "longitude": -1.8262,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1680475699247-7400e947fabd?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1680475699247-7400e947fabd?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1680475699247-7400e947fabd?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1680475699247-7400e947fabd?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1680475699247-7400e947fabd?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1680475699247-7400e947fabd?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "yP8HHiF2okM",
      "url": "https://unsplash.com/photos/a-large-stone-structure-in-the-middle-of-a-field-yP8HHiF2okM",
      "photographer": "K. Mitch Hodge",
      "photographerUrl": "https://unsplash.com/@kmitchhodge"
    }
  },
  {
    "id": 12,
    "name": "Big Ben",
    "location": "London",
    "country": "England",
    "continent": "Europe",
    "type": "Clock Tower",
    "kebabId": "big-ben",
    "description": "Big Ben is the nickname for the Great Bell of the striking clock at the north end of the Palace of Westminster in London, England, and the name is frequently extended to refer to both the clock and the clock tower. The official name of the tower in which Big Ben is located was originally the Clock Tower, but it was renamed Elizabeth Tower in 2012 to mark the Diamond Jubilee of Elizabeth II. The tower was designed by Augustus Pugin in a neo-Gothic style. When completed in 1859, its clock was the largest and most accurate four-faced striking and chiming clock in the world. The tower stands 316 feet tall, and the climb from ground level to the belfry is 334 steps. Its base is square, measuring 40 feet on each side.",
    "yearBuilt": 1859,
    "height": 96,
    "latitude": 51.5007,
    "longitude": -0.1246,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1681407979872-0a4cbde28391?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1681407979872-0a4cbde28391?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1681407979872-0a4cbde28391?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1681407979872-0a4cbde28391?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1681407979872-0a4cbde28391?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1681407979872-0a4cbde28391?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "d80dS3gesa8",
      "url": "https://unsplash.com/photos/the-big-ben-clock-tower-towering-over-the-city-of-london-d80dS3gesa8",
      "photographer": "Marcin Nowak",
      "photographerUrl": "https://unsplash.com/@marcin_nowak"
    }
  },
  {
    "id": 14,
    "name": "Neuschwanstein Castle",
    "location": "Bavaria",
    "country": "Germany",
    "continent": "Europe",
    "type": "Castle",
    "kebabId": "neuschwanstein-castle",
    "description": "Neuschwanstein Castle is a 19th-century Romanesque Revival palace on a rugged hill above the village of Hohenschwangau near Füssen in southwest Bavaria, Germany. The palace was commissioned by Ludwig II of Bavaria as a retreat and in honor of Richard Wagner. Ludwig paid for the palace out of his personal fortune and by means of extensive borrowing, rather than Bavarian public funds. The castle was intended as a personal refuge for the reclusive king, but it was opened to the paying public immediately after his death in 1886. Since then more than 61 million people have visited Neuschwanstein Castle. More than 1.3 million people visit annually, with as many as 6,000 per day in the summer. The palace has appeared prominently in several movies and was the inspiration for Disneyland's Sleeping Beauty Castle and later, similar structures.",
    "yearBuilt": 1886,
    "height": 65,
    "latitude": 47.5576,
    "longitude": 10.7498,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1609237756221-88c4a93846b2?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1609237756221-88c4a93846b2?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1609237756221-88c4a93846b2?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1609237756221-88c4a93846b2?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1609237756221-88c4a93846b2?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1609237756221-88c4a93846b2?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "hMDRIo93xb0",
      "url": "https://unsplash.com/photos/white-and-gray-castle-on-top-of-hill-hMDRIo93xb0",
      "photographer": "Henrique Ferreira",
      "photographerUrl": "https://unsplash.com/@henriqueferreira"
    }
  },
  {
    "id": 16,
    "name": "Parthenon",
    "location": "Athens",
    "country": "Greece",
    "continent": "Europe",
    "type": "Temple",
    "kebabId": "parthenon",
    "description": "The Parthenon is a former temple on the Athenian Acropolis, Greece, dedicated to the goddess Athena, whom the people of Athens considered their patron. Construction began in 447 BC when the Athenian Empire was at the peak of its power. It was completed in 438 BC, although decoration of the building continued until 432 BC. It is the most important surviving building of Classical Greece, generally considered the zenith of the Doric order. Its decorative sculptures are considered some of the high points of Greek art. The Parthenon is regarded as an enduring symbol of Ancient Greece, democracy and Western civilization, and one of the world's greatest cultural monuments.",
    "yearBuilt": -447,
    "height": 14,
    "latitude": 37.9715,
    "longitude": 23.7267,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "ilQmlVIMN4c",
      "url": "https://unsplash.com/photos/view-of-brown-ruin-during-daytime-ilQmlVIMN4c",
      "photographer": "Spencer Davis",
      "photographerUrl": "https://unsplash.com/@spencerdavis"
    }
  },
  {
    "id": 19,
    "name": "Notre-Dame Cathedral",
    "location": "Paris",
    "country": "France",
    "continent": "Europe",
    "type": "Cathedral",
    "kebabId": "notre-dame-cathedral",
    "description": "Notre-Dame de Paris is a medieval Catholic cathedral on the Île de la Cité in the 4th arrondissement of Paris, France. The cathedral, dedicated to the Virgin Mary, is considered one of the finest examples of French Gothic architecture. Its pioneering use of the rib vault and flying buttress, its enormous and colourful rose windows, and the naturalism and abundance of its sculptural decoration set it apart from the earlier Romanesque style. Major components that make Notre-Dame stand out include one of the world's largest organs and its immense church bells. The cathedral was begun in 1163 under Bishop Maurice de Sully and was largely completed by 1260, though it was modified frequently in the following centuries. In the 1790s, Notre-Dame suffered desecration during the French Revolution; much of its religious imagery was damaged or destroyed.",
    "yearBuilt": 1345,
    "height": 69,
    "latitude": 48.853,
    "longitude": 2.3499,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1738762922831-1407e59cf5a8?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1738762922831-1407e59cf5a8?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1738762922831-1407e59cf5a8?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1738762922831-1407e59cf5a8?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1738762922831-1407e59cf5a8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1738762922831-1407e59cf5a8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "k5P45M2rSV0",
      "url": "https://unsplash.com/photos/a-large-cathedral-with-a-clock-on-the-front-of-it-k5P45M2rSV0",
      "photographer": "Léonard Cotte",
      "photographerUrl": "https://unsplash.com/@ettocl"
    }
  },
  {
    "id": 20,
    "name": "Tower Bridge",
    "location": "London",
    "country": "England",
    "continent": "Europe",
    "type": "Bridge",
    "kebabId": "tower-bridge",
    "description": "Tower Bridge is a combined bascule and suspension bridge in London, built between 1886 and 1894. The bridge crosses the River Thames close to the Tower of London and has become an iconic symbol of London. As a result, it is sometimes confused with London Bridge, situated some 0.5 miles upstream. Tower Bridge is one of five London bridges currently owned and maintained by the Bridge House Estates, a charitable trust overseen by the City of London Corporation. The bridge consists of two bridge towers tied together at the upper level by two horizontal walkways, designed to withstand the horizontal forces exerted by the suspended sections of the bridge on the landward sides of the towers. The vertical components of the forces in the suspended sections and the vertical reactions of the two walkways are carried by the two robust towers.",
    "yearBuilt": 1894,
    "height": 65,
    "latitude": 51.5055,
    "longitude": -0.0754,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "Q6UehpkBSnQ",
      "url": "https://unsplash.com/photos/london-bridge-london-Q6UehpkBSnQ",
      "photographer": "Eva Dang",
      "photographerUrl": "https://unsplash.com/@evantdang"
    }
  },
  {
    "id": 23,
    "name": "Alhambra",
    "location": "Granada",
    "country": "Spain",
    "continent": "Europe",
    "type": "Palace",
    "kebabId": "alhambra",
    "description": "The Alhambra is a palace and fortress complex located in Granada, Andalusia, Spain. It was originally constructed as a fortress in AD 889 on the remains of Roman fortifications, and then largely ignored until its ruins were renovated and rebuilt in the mid-13th century by the Moorish emir Mohammed ben Al-Ahmar of the Emirate of Granada, who built its current palace and walls. It was converted into a royal palace in 1333 by Yusuf I, Sultan of Granada. After the conclusion of the Christian Reconquista in 1492, the site became the Royal Court of Ferdinand and Isabella, and the palaces were partially altered in the Renaissance style. In 1526, Charles I & V commissioned a new Renaissance palace better befitting the Holy Roman Emperor in the revolutionary Mannerist style influenced by Humanist philosophy in direct juxtaposition with the Nasrid Andalusian architecture.",
    "yearBuilt": 1238,
    "height": null,
    "latitude": 37.1773,
    "longitude": -3.5986,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1637288525528-426aae1c081e?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1637288525528-426aae1c081e?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1637288525528-426aae1c081e?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1637288525528-426aae1c081e?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1637288525528-426aae1c081e?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1637288525528-426aae1c081e?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "ududWyEyufk",
      "url": "https://unsplash.com/photos/a-large-building-with-a-clock-tower-on-top-of-it-ududWyEyufk",
      "photographer": "Tomas Malik",
      "photographerUrl": "https://unsplash.com/@maliktomas"
    }
  },
  {
    "id": 24,
    "name": "Acropolis",
    "location": "Athens",
    "country": "Greece",
    "continent": "Europe",
    "type": "Archaeological Site",
    "kebabId": "acropolis",
    "description": "The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city of Athens and contains the remains of several ancient buildings of great architectural and historic significance, the most famous being the Parthenon. The word acropolis is from the Greek words ἄκρον and πόλις. Although the term acropolis is generic and there are many other acropoleis in Greece, the significance of the Acropolis of Athens is such that it is commonly known as 'The Acropolis' without qualification. During ancient times it was known also more properly as Cecropia, after the legendary serpent-man, Cecrops, the supposed first Athenian king. While there is evidence that the hill was inhabited as far back as the fourth millennium BC, it was Pericles in the fifth century BC who coordinated the construction of the site's most important present remains including the Parthenon, the Propylaia, the Erechtheium and the Temple of Athena Nike.",
    "yearBuilt": -447,
    "height": 156,
    "latitude": 37.9715,
    "longitude": 23.7267,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "yqBvJJ8jGBQ",
      "url": "https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-yqBvJJ8jGBQ",
      "photographer": "Arthur Yeti",
      "photographerUrl": "https://unsplash.com/@arthuryeti"
    }
  },
  {
    "id": 25,
    "name": "St. Basil's Cathedral",
    "location": "Moscow",
    "country": "Russia",
    "continent": "Europe",
    "type": "Cathedral",
    "kebabId": "st-basils-cathedral",
    "description": "St. Basil's Cathedral is a Russian Orthodox church erected on the Red Square in Moscow in 1555–1561. Built on the order of Ivan the Terrible to commemorate the capture of Kazan and Astrakhan, it marks the geometric center of Moscow and the hub of the city's growth since the 14th century. It was the city's tallest building until the completion of the Ivan the Great Bell Tower in 1600. The original building, known as Trinity Church and later Trinity Cathedral, contained eight churches arranged around the ninth, central church of Intercession; the tenth church was erected in 1588 over the grave of venerated local saint Vasily (Basil). In the 16th and 17th centuries, the cathedral, perceived (together with the Kremlin) as a symbol of Moscow, was popularly known as Jerusalem.",
    "yearBuilt": 1561,
    "height": 65,
    "latitude": 55.7525,
    "longitude": 37.6231,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/8285167/pexels-photo-8285167.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/8285167/pexels-photo-8285167.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/8285167/pexels-photo-8285167.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/8285167/pexels-photo-8285167.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/8285167/pexels-photo-8285167.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/8285167/pexels-photo-8285167.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Pexels",
      "photoId": "8285167",
      "url": "https://www.pexels.com/photo/the-famous-saint-basil-s-cathedral-in-russia-8285167/",
      "photographer": "Anna Shvets",
      "photographerUrl": "https://www.pexels.com/@shvets-production"
    }
  },
  {
    "id": 26,
    "name": "Louvre Museum",
    "location": "Paris",
    "country": "France",
    "continent": "Europe",
    "type": "Museum",
    "kebabId": "louvre-museum",
    "description": "The Louvre is the world's most-visited museum and a historic landmark in Paris, France. It is the world's largest art museum and a historic monument. A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement. Approximately 38,000 objects from prehistory to the 21st century are exhibited over an area of 72,735 square meters. The Louvre received 8.6 million visitors in 2019. The museum is housed in the Louvre Palace, originally built as the Louvre castle in the late 12th to 13th century under Philip II. Remnants of the fortress are visible in the basement of the museum. Due to urban expansion, the fortress eventually lost its defensive function, and in 1546 Francis I converted it into the primary residence of the French Kings.",
    "yearBuilt": 1793,
    "height": null,
    "latitude": 48.8606,
    "longitude": 2.3376,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1567942585146-33d62b775db0?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1567942585146-33d62b775db0?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1567942585146-33d62b775db0?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1567942585146-33d62b775db0?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1567942585146-33d62b775db0?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1567942585146-33d62b775db0?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "GCfE4fl7tIQ",
      "url": "https://unsplash.com/photos/people-gathering-near-louvre-museum-during-daytime-GCfE4fl7tIQ",
      "photographer": "Anthony Gauthier",
      "photographerUrl": "https://unsplash.com/@anthony_gauthier"
    }
  },
  {
    "id": 28,
    "name": "Buckingham Palace",
    "location": "London",
    "country": "England",
    "continent": "Europe",
    "type": "Palace",
    "kebabId": "buckingham-palace",
    "description": "Buckingham Palace is the London residence and administrative headquarters of the monarch of the United Kingdom. Located in the City of Westminster, the palace is often at the centre of state occasions and royal hospitality. It has been a focal point for the British people at times of national rejoicing and mourning. Originally known as Buckingham House, the building at the core of today's palace was a large townhouse built for the Duke of Buckingham in 1703 on a site that had been in private ownership for at least 150 years. It was acquired by King George III in 1761 as a private residence for Queen Charlotte and became known as The Queen's House. During the 19th century it was enlarged, principally by architects John Nash and Edward Blore, who constructed three wings around a central courtyard. Buckingham Palace became the London residence of the British monarch on the accession of Queen Victoria in 1837. The palace has 775 rooms, including 19 State rooms, 52 Royal and guest bedrooms, 188 staff bedrooms, 92 offices and 78 bathrooms.",
    "yearBuilt": 1703,
    "height": 24,
    "latitude": 51.5014,
    "longitude": -0.1419,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1647876761705-d0961f5aab21?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1647876761705-d0961f5aab21?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1647876761705-d0961f5aab21?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1647876761705-d0961f5aab21?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1647876761705-d0961f5aab21?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1647876761705-d0961f5aab21?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "tPhw7EPFq6I",
      "url": "https://unsplash.com/photos/a-large-building-with-a-statue-in-front-of-it-tPhw7EPFq6I",
      "photographer": "Jamie Davies",
      "photographerUrl": "https://unsplash.com/@jamiedavies"
    }
  },
  {
    "id": 31,
    "name": "Brandenburg Gate",
    "location": "Berlin",
    "country": "Germany",
    "continent": "Europe",
    "type": "Monument",
    "kebabId": "brandenburg-gate",
    "description": "The Brandenburg Gate is an 18th-century neoclassical monument in Berlin, built on the orders of Prussian king Frederick William II. Constructed from 1788 to 1791, it stands as a symbol of German reunification and European unity. The gate is composed of twelve Doric columns, six on each side, forming five passageways. Atop the gate is the Quadriga, a statue of Victoria, the Roman goddess of victory, driving a four-horse chariot. Throughout its history, the Brandenburg Gate has witnessed numerous historical events, including military parades, political rallies, and celebrations. It remains one of Berlin's most iconic landmarks and a popular tourist destination.",
    "yearBuilt": 1791,
    "height": 26,
    "latitude": 52.5163,
    "longitude": 13.3777,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1642764984351-0bc68da72f5a?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1642764984351-0bc68da72f5a?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1642764984351-0bc68da72f5a?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1642764984351-0bc68da72f5a?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1642764984351-0bc68da72f5a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1642764984351-0bc68da72f5a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "vidP-Ufhk2g",
      "url": "https://unsplash.com/photos/a-group-of-people-standing-in-front-of-a-building-vidP-Ufhk2g",
      "photographer": "Johannes Plenio",
      "photographerUrl": "https://unsplash.com/@jplenio"
    }
  },
  {
    "id": 36,
    "name": "Hagia Sophia",
    "location": "Istanbul",
    "country": "Turkey",
    "continent": "Europe",
    "type": "Museum/Mosque",
    "kebabId": "hagia-sophia",
    "description": "Hagia Sophia is a Late Antique place of worship in Istanbul, designed by the Greek geometers Isidore of Miletus and Anthemius of Tralles. Commissioned by the Byzantine emperor Justinian I and completed in 537 AD, it served as a cathedral for nearly a thousand years, renowned for its massive dome and intricate mosaics. In 1453, following the Ottoman conquest of Constantinople, it was converted into a mosque, with minarets added to its exterior and Islamic calligraphy adorning its interior. In 1935, it was secularized and opened as a museum, attracting millions of visitors each year. In 2020, it was re-designated as a mosque, sparking international debate and altering its accessibility to tourists.",
    "yearBuilt": 537,
    "height": 55,
    "latitude": 41.0086,
    "longitude": 28.9802,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1623621534850-d325a1980c7e?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1623621534850-d325a1980c7e?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1623621534850-d325a1980c7e?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1623621534850-d325a1980c7e?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1623621534850-d325a1980c7e?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1623621534850-d325a1980c7e?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "JbWg7W953LY",
      "url": "https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-JbWg7W953LY",
      "photographer": "Ozan Safak",
      "photographerUrl": "https://unsplash.com/@ozansafak"
    }
  },
  {
    "id": 37,
    "name": "Blue Mosque",
    "location": "Istanbul",
    "country": "Turkey",
    "continent": "Europe",
    "type": "Mosque",
    "kebabId": "blue-mosque",
    "description": "The Blue Mosque, officially known as the Sultan Ahmed Mosque, is an Ottoman-era historical imperial mosque located in Istanbul, Turkey. Constructed between 1609 and 1616 during the reign of Ahmed I, it is renowned for its stunning blue Iznik tiles adorning the interior walls, giving the mosque its popular name. The mosque features six minarets, a central dome, and eight smaller domes, showcasing classical Ottoman architecture. It remains an active place of worship and a major tourist attraction, offering visitors a glimpse into Istanbul's rich cultural and religious heritage.",
    "yearBuilt": 1616,
    "height": 43,
    "latitude": 41.0054,
    "longitude": 28.9768,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1691446930608-98466a4bdd0f?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1691446930608-98466a4bdd0f?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1691446930608-98466a4bdd0f?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1691446930608-98466a4bdd0f?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1691446930608-98466a4bdd0f?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1691446930608-98466a4bdd0f?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "cDE_FDdPT6Y",
      "url": "https://unsplash.com/photos/a-picture-of-a-building-that-looks-like-a-mosque-cDE_FDdPT6Y",
      "photographer": "ali çelik",
      "photographerUrl": "https://unsplash.com/@alicelik"
    }
  },
  {
    "id": 38,
    "name": "Palace of Versailles",
    "location": "Versailles",
    "country": "France",
    "continent": "Europe",
    "type": "Palace",
    "kebabId": "palace-of-versailles",
    "description": "The Palace of Versailles is a former royal residence located in Versailles, about 12 miles west of Paris, France. Originally a modest hunting lodge built by Louis XIII in 1623, it was transformed into a lavish palace by his son, Louis XIV, starting in 1661. The palace served as the center of political power in France from 1682 until the French Revolution in 1789. Known for its opulent architecture, extensive gardens, and Hall of Mirrors, the Palace of Versailles is a symbol of French royalty and a UNESCO World Heritage site, attracting millions of visitors annually.",
    "yearBuilt": 1682,
    "height": null,
    "latitude": 48.8049,
    "longitude": 2.1204,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/13692199/pexels-photo-13692199.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/13692199/pexels-photo-13692199.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/13692199/pexels-photo-13692199.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/13692199/pexels-photo-13692199.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/13692199/pexels-photo-13692199.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/13692199/pexels-photo-13692199.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Pexels",
      "photoId": "13692199",
      "url": "https://www.pexels.com/photo/marble-courtyard-palace-of-versailles-versailles-france-13692199/",
      "photographer": "Pixabay",
      "photographerUrl": "https://www.pexels.com/@pixabay"
    }
  },
  {
    "id": 39,
    "name": "Leaning Tower of Pisa",
    "location": "Pisa",
    "country": "Italy",
    "continent": "Europe",
    "type": "Tower",
    "kebabId": "leaning-tower-of-pisa",
    "description": "The Leaning Tower of Pisa is the campanile, or freestanding bell tower, of the cathedral of the Italian city of Pisa. Construction began in 1173 and continued intermittently for about 200 years due to wars and financial difficulties. The tower's tilt is attributed to unstable soil beneath its foundation, which caused it to start leaning shortly after construction began. Despite ongoing efforts to stabilize the tower, it continues to lean at a rate of about one millimeter per year. The Leaning Tower of Pisa is a popular tourist attraction and a symbol of Italy's architectural heritage.",
    "yearBuilt": 1372,
    "height": 56,
    "latitude": 43.723,
    "longitude": 10.3966,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/4819294/pexels-photo-4819294.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/4819294/pexels-photo-4819294.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/4819294/pexels-photo-4819294.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/4819294/pexels-photo-4819294.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/4819294/pexels-photo-4819294.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/4819294/pexels-photo-4819294.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Pexels",
      "photoId": "4819294",
      "url": "https://www.pexels.com/photo/the-famous-pisa-cathedral-and-leaning-tower-of-pisa-in-italy-4819294/",
      "photographer": "David McBee",
      "photographerUrl": "https://www.pexels.com/@david-mcbee"
    }
  },
  {
    "id": 40,
    "name": "Mont Saint-Michel",
    "location": "Normandy",
    "country": "France",
    "continent": "Europe",
    "type": "Island/Abbey",
    "kebabId": "mont-saint-michel",
    "description": "Mont-Saint-Michel is a tidal island and mainland commune in Normandy, France. The island has held strategic fortifications since ancient times, and from the 8th century AD was the seat of the monastery from which it draws its name. The structural composition of the town exemplifies the feudal society that constructed it: on top, God, the abbey; below, the great halls, then the stores and housing, and at the bottom, outside the walls, the fishermen's and farmers' houses. Today, Mont-Saint-Michel is a UNESCO World Heritage site and a popular tourist destination, attracting millions of visitors each year.",
    "yearBuilt": 708,
    "height": 80,
    "latitude": 48.636,
    "longitude": -1.5114,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1596436831831-87dd84a69101?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1596436831831-87dd84a69101?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1596436831831-87dd84a69101?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1596436831831-87dd84a69101?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1596436831831-87dd84a69101?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1596436831831-87dd84a69101?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "EaEEml67Ws8",
      "url": "https://unsplash.com/photos/brown-concrete-building-near-body-of-water-during-daytime-EaEEml67Ws8",
      "photographer": "Loic Mermilliod",
      "photographerUrl": "https://unsplash.com/@loicmermilliod"
    }
  },
  {
    "id": 41,
    "name": "Chichen Itza",
    "location": "Yucatán",
    "country": "Mexico",
    "continent": "North America",
    "type": "Archaeological Site",
    "kebabId": "chichen-itza",
    "description": "Chichen Itza was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archaeological site is located in Tinúm Municipality, Yucatán State, Mexico. Chichen Itza was one of the largest Maya cities and it was likely to have been one of the great powers in the Maya world. Chichen Itza was a major economic power in the northern Maya lowlands from the Late Classic through the Terminal Classic and into the early Postclassic periods. The archaeological site is a popular tourist destination, attracting millions of visitors each year.",
    "yearBuilt": 600,
    "height": 30,
    "latitude": 20.6843,
    "longitude": -88.5678,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/3290068/pexels-photo-3290068.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Pexels",
      "photoId": "3290068",
      "url": "https://www.pexels.com/photo/chichen-itza-pyramid-in-mexico-3290068/",
      "photographer": "Quang Nguyen Vinh",
      "photographerUrl": "https://www.pexels.com/@quang-nguyen-vinh-222549"
    }
  },
  {
    "id": 4,
    "name": "Taj Mahal",
    "location": "Agra",
    "country": "India",
    "continent": "Asia",
    "type": "Mausoleum",
    "kebabId": "taj-mahal",
    "description": "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centerpiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall. Construction of the mausoleum was essentially completed in 1643, but work continued on other phases of the project for another 10 years. The Taj Mahal is regarded by many as the finest example of Mughal architecture, a style that combines elements from Persian, Ottoman Turkish and Indian architectural styles.",
    "yearBuilt": 1653,
    "height": 73,
    "latitude": 27.1751,
    "longitude": 78.0421,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "iWMfiInivp4",
      "url": "https://unsplash.com/photos/taj-mahal-india-iWMfiInivp4",
      "photographer": "Soham Banerjee",
      "photographerUrl": "https://unsplash.com/@soham_banerjee"
    }
  },
  {
    "id": 7,
    "name": "Great Wall of China",
    "location": "Beijing",
    "country": "China",
    "continent": "Asia",
    "type": "Fortification",
    "kebabId": "great-wall-of-china",
    "description": "The Great Wall of China is a series of fortifications and walls built across the historical northern borders of ancient Chinese states. Several walls were being built from as early as the 7th century BC, by ancient Chinese states to protect their territories. The best-known section of the wall was built by the Qin dynasty (221–206 BC). The wall stretches from Dandong in the east to Lop Lake in the west, along an arc that roughly delineates the southern edge of Inner Mongolia. The Great Wall is a UNESCO World Heritage Site and is one of the most popular tourist attractions in the world.",
    "yearBuilt": -220,
    "height": 8,
    "latitude": 40.4319,
    "longitude": 116.5704,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1608037521277-154cd1b89191?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1608037521277-154cd1b89191?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1608037521277-154cd1b89191?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1608037521277-154cd1b89191?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1608037521277-154cd1b89191?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1608037521277-154cd1b89191?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "HwY9R6_YzgM",
      "url": "https://unsplash.com/photos/brown-concrete-building-on-top-of-hill-HwY9R6_YzgM",
      "photographer": "zhang kaiyv",
      "photographerUrl": "https://unsplash.com/@zhang_kaiyv"
    }
  },
  {
    "id": 13,
    "name": "Angkor Wat",
    "location": "Siem Reap",
    "country": "Cambodia",
    "continent": "Asia",
    "type": "Temple Complex",
    "kebabId": "angkor-wat",
    "description": "Angkor Wat is a temple complex in Cambodia and one of the largest religious monuments in the world. It was originally constructed in the first half of the 12th century as a Hindu temple dedicated to the god Vishnu for the Khmer Empire, it was gradually transformed into a Buddhist temple towards the end of the 12th century. It was built by King Suryavarman II. Angkor Wat combines two basic plans of Khmer temple architecture: the temple-mountain and the galleried temple. It is designed to represent Mount Meru, home of the gods in Hindu mythology. Angkor Wat is a UNESCO World Heritage Site and is a major tourist destination.",
    "yearBuilt": 1150,
    "height": 65,
    "latitude": 13.4125,
    "longitude": 103.867,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1599283787923-51b965a58b05?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1599283787923-51b965a58b05?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1599283787923-51b965a58b05?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1599283787923-51b965a58b05?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1599283787923-51b965a58b05?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1599283787923-51b965a58b05?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "gt3gK_Wob2g",
      "url": "https://unsplash.com/photos/people-walking-on-park-near-trees-and-building-during-daytime-gt3gK_Wob2g",
      "photographer": "Arun Kuchibhotla",
      "photographerUrl": "https://unsplash.com/@arunkuchibhotla"
    }
  },
  {
    "id": 22,
    "name": "Forbidden City",
    "location": "Beijing",
    "country": "China",
    "continent": "Asia",
    "type": "Palace",
    "kebabId": "forbidden-city",
    "description": "The Forbidden City is a palace complex in Dongcheng District, Beijing, China, at the center of the Imperial City of Beijing. It is surrounded by numerous opulent imperial gardens and temples. The Forbidden City was constructed from 1406 to 1420, and was the former Chinese imperial palace and winter residence of the Emperor of China from the Ming dynasty to the end of the Qing dynasty, between 1420 and 1924. The Forbidden City was declared a World Heritage Site in 1987, and is listed by UNESCO as the largest collection of preserved ancient wooden structures in the world. Since 1925, the Forbidden City has been under the charge of the Palace Museum, whose extensive collection of artwork and artifacts were built upon the imperial collections of the Ming and Qing dynasties.",
    "yearBuilt": 1420,
    "height": null,
    "latitude": 39.9163,
    "longitude": 116.3972,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1577706881850-bf7c7d8906a5?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1577706881850-bf7c7d8906a5?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1577706881850-bf7c7d8906a5?w=800&h=600&fit=crop&crop=center&auto=format&q=85images.unsplash.com/photo-1577706881850-bf7c7d8906a5?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1577706881850-bf7c7d8906a5?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1577706881850-bf7c7d8906a5?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1577706881850-bf7c7d8906a5?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "wXyf-U8HqiI",
      "url": "https://unsplash.com/photos/empty-brown-and-white-building-during-daytime-wXyf-U8HqiI",
      "photographer": "zhang jiawei",
      "photographerUrl": "https://unsplash.com/@zhang_jiawei"
    }
  },
  {
    "id": 3,
    "name": "Statue of Liberty",
    "location": "New York",
    "country": "USA",
    "continent": "North America",
    "type": "Statue",
    "kebabId": "statue-of-liberty",
    "description": "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor. The statue is a figure of Libertas, a Roman liberty goddess. She holds a torch above her head with her right hand, and in her left hand carries a tabula ansata inscribed JULY IV MDCCLXXVI (July 4, 1776), the date of the U.S. Declaration of Independence. A broken chain and shackle lie at her feet as she walks forward, commemorating the national abolition of slavery. The statue is an icon of freedom and of the United States: a welcoming signal to immigrants arriving from abroad. The statue was dedicated on October 28, 1886.",
    "yearBuilt": 1886,
    "height": 93,
    "latitude": 40.6892,
    "longitude": -74.0445,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1565475783696-96001eff1b45?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1565475783696-96001eff1b45?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1565475783696-96001eff1b45?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1565475783696-96001eff1b45?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1565475783696-96001eff1b45?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1565475783696-96001eff1b45?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "QqUceByQlhM",
      "url": "https://unsplash.com/photos/statue-of-liberty-QqUceByQlhM",
      "photographer": "Yuhan Du",
      "photographerUrl": "https://unsplash.com/@yuhan_du"
    }
  },
  {
    "id": 15,
    "name": "Mount Rushmore",
    "location": "South Dakota",
    "country": "USA",
    "continent": "North America",
    "type": "Monument",
    "kebabId": "mount-rushmore",
    "description": "Mount Rushmore National Memorial is a sculpture carved into the granite face of Mount Rushmore. The memorial features 60-foot (18 m) sculptures of the heads of four United States presidents: George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln. The memorial covers 1,278 acres (2.0 sq mi; 5.2 km2) and is 5,725 feet (1,745 m) above sea level. The project started in 1927 and was completed in 1941. Mount Rushmore attracts around three million people every year.",
    "yearBuilt": 1941,
    "height": 18,
    "latitude": 43.8791,
    "longitude": -103.4591,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1557760401-40a9ec55f25c?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1557760401-40a9ec55f25c?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1557760401-40a9ec55f25c?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1557760401-40a9ec55f25c?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1557760401-40a9ec55f25c?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1557760401-40a9ec55f25c?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "9_onxRgAmRA",
      "url": "https://unsplash.com/photos/mount-ruhsmore-9_onxRgAmRA",
      "photographer": "Lance Asper",
      "photographerUrl": "https://unsplash.com/@lanceasper"
    }
  },
  {
    "id": 18,
    "name": "Golden Gate Bridge",
    "location": "San Francisco",
    "country": "USA",
    "continent": "North America",
    "type": "Bridge",
    "kebabId": "golden-gate-bridge",
    "description": "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean. The bridge is one of the most internationally recognized symbols of San Francisco, California, and the United States. It has been declared one of the Wonders of the Modern World by the American Society of Civil Engineers. The bridge took four years to build and was completed in 1937. The Golden Gate Bridge is a popular tourist destination, attracting millions of visitors each year.",
    "yearBuilt": 1937,
    "height": 227,
    "latitude": 37.8199,
    "longitude": -122.4783,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=300&h=200&fit=crop&crop&center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=300&h=200&fit=crop&crop&center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=600&fit=crop&crop&center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=600&fit=crop&crop&center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=1200&h=900&fit=crop&crop&center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=1200&h=900&fit=crop&crop&center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1kf69eE7VR4",
      "url": "https://unsplash.com/photos/golden-gate-bridge-during-daytime-1kf69eE7VR4",
      "photographer": "Denise Jans",
      "photographerUrl": "https://unsplash.com/@denise_jans"
    }
  },
  {
    "id": 6,
    "name": "Machu Picchu",
    "location": "Cusco",
    "country": "Peru",
    "continent": "South America",
    "type": "Archaeological Site",
    "kebabId": "machu-picchu",
    "description": "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru. It is situated on a 2,430-meter (7,970 ft) mountain ridge. It is located in the Machu Picchu District within Urubamba Province above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cusco. The Urubamba River flows through it, cutting through the Cordillera and creating a canyon with a tropical mountain climate. Most archaeologists believe that Machu Picchu was constructed as an estate for the Inca emperor Pachacuti (1438–1472). Machu Picchu was declared a Peruvian Historical Sanctuary in 1981 and a UNESCO World Heritage Site in 1983.",
    "yearBuilt": 1450,
    "height": 2430,
    "latitude": -13.1631,
    "longitude": -72.545,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=300&h=200&fit=crop&crop&center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=300&h=200&fit=crop&crop&center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&h=600&fit=crop&crop&center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=800&h=600&fit=crop&crop&center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1200&h=900&fit=crop&crop&center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1200&h=900&fit=crop&crop&center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "yam1KMv0SgQ",
      "url": "https://unsplash.com/photos/aerial-view-of-green-mountains-during-daytime-yam1KMv0SgQ",
      "photographer": "Samuel Ferrara",
      "photographerUrl": "https://unsplash.com/@samuelferrara"
    }
  },
  {
    "id": 9,
    "name": "Christ the Redeemer",
    "location": "Rio de Janeiro",
    "country": "Brazil",
    "continent": "South America",
    "type": "Statue",
    "kebabId": "christ-the-redeemer",
    "description": "Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil. The statue is 30 metres (98 ft) tall, not including its 8-metre (26 ft) pedestal, and its arms stretch 28 metres (92 ft) wide. It is made of reinforced concrete and soapstone. The statue is located at the peak of the 700-metre (2,300 ft) Corcovado mountain in the Tijuca Forest National Park overlooking the city. A symbol of Christianity across the world, the statue has also become a cultural icon of both Rio de Janeiro and Brazil, and is listed as one of the New Seven Wonders of the World.",
    "yearBuilt": 1931,
    "height": 38,
    "latitude": -22.9519,
    "longitude": -43.2105,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=300&h=200&fit=crop&crop&center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=300&h=200&fit=crop&crop&center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800&h=600&fit=crop&crop&center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800&h=600&fit=crop&crop&center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1200&h=900&fit=crop&crop&center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=1200&h=900&fit=crop&crop&center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "OkiDIla7K8Q",
      "url": "https://unsplash.com/photos/christ-the-redeemer-brazil-OkiDIla7K8Q",
      "photographer": "Victor Soares",
      "photographerUrl": "https://unsplash.com/@vitorsr"
    }
  },
  {
    "id": 27,
    "name": "Easter Island Moai",
    "location": "Easter Island",
    "country": "Chile",
    "continent": "South America",
    "type": "Statues",
    "kebabId": "easter-island-moai",
    "description": "The moai are monolithic human figures carved by the Rapa Nui people on Easter Island in eastern Polynesia. Nearly half are still at Rano Raraku, the main moai quarry, but hundreds were transported from there and set on stone platforms called ahu around the island's perimeter. Almost all moai have overly large heads, which comprise three-eighths the size of the whole statue. The moai are chiefly the living faces (aringa ora) of deified ancestors (tupuna) or important contemporary figures and were symbols of authority and power, both religious and political. They were neither portraits nor commemorative statues, but rather a way to invoke the spirit of the ancestors.",
    "yearBuilt": 1250,
    "height": 4,
    "latitude": -27.1127,
    "longitude": -109.3497,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1524536120883-854d2c00bf1f?w=300&h=200&fit=crop&crop&center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1524536120883-854d2c00bf1f?w=300&h=200&fit=crop&crop&center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1524536120883-854d2c00bf1f?w=800&h=600&fit=crop&crop&center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1524536120883-854d2c00bf1f?w=800&h=600&fit=crop&crop&center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1524536120883-854d2c00bf1f?w=1200&h=900&fit=crop&crop&center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1524536120883-854d2c00bf1f?w=1200&h=900&fit=crop&crop&center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "2Qjk2PfaH3o",
      "url": "https://unsplash.com/photos/moai-easter-island-2Qjk2PfaH3o",
      "photographer": "Cristian Palmer",
      "photographerUrl": "https://unsplash.com/@cristianpalmer"
    }
  },
  {
    "id": 2,
    "name": "Great Pyramid of Giza",
    "location": "Giza",
    "country": "Egypt",
    "continent": "Africa",
    "type": "Pyramid",
    "kebabId": "great-pyramid-of-giza",
    "description": "The Great Pyramid of Giza is the oldest and largest of the pyramids in the Giza pyramid complex. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact. Egyptologists believe that the pyramid was built as a tomb for the Fourth Dynasty pharaoh Khufu and was constructed over a 20-year period concluding around 2560 BC. Initially standing at 146.6 metres (481 feet) tall, the Great Pyramid was the tallest man-made structure in the world for more than 3,800 years. The Great Pyramid is composed of an estimated 2.3 million blocks of stone, some weighing as much as 80 tons.",
    "yearBuilt": -2580,
    "height": 146,
    "latitude": 29.9792,
    "longitude": 31.1342,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1677695016111-4eb0e07a4271?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1677695016111-4eb0e07a4271?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1677695016111-4eb0e07a4271?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1677695016111-4eb0e07a4271?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1677695016111-4eb0e07a4271?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1677695016111-4eb0e07a4271?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "t3Xgc1q7N9g",
      "url": "https://unsplash.com/photos/two-pyramids-in-the-desert-with-a-blue-sky-in-the-background-t3Xgc1q7N9g",
      "photographer": "Ahmed Abdalla",
      "photographerUrl": "https://unsplash.com/@ahmed_abdalla"
    }
  },
  {
    "id": 10,
    "name": "Sydney Opera House",
    "location": "Sydney",
    "country": "Australia",
    "continent": "Oceania",
    "type": "Performance Venue",
    "kebabId": "sydney-opera-house",
    "description": "The Sydney Opera House is a multi-venue performing arts centre in Sydney, Australia. It is one of the 20th century's most distinctive buildings and one of the most famous performing arts centres in the world. Situated on Bennelong Point in Sydney Harbour, with views of the Sydney Harbour Bridge, it comprises multiple performance venues which together host well over 1,500 performances annually, attended by more than 1.2 million people. It was opened in 1973, after a long and controversial construction period beginning in 1957.",
    "yearBuilt": 1973,
    "height": 65,
    "latitude": -33.8568,
    "longitude": 151.2153,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1538168407380-1d74b45cf8ad?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1538168407380-1d74b45cf8ad?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1538168407380-1d74b45cf8ad?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1538168407380-1d74b45cf8ad?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1538168407380-1d74b45cf8ad?w=1200&h=900&fit=crop&crop&center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1538168407380-1d74b45cf8ad?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "kRGjlSe7Df0",
      "url": "https://unsplash.com/photos/sydney-opera-house-australia-at-daytime-kRGjlSe7Df0",
      "photographer": "Eva Elijas",
      "photographerUrl": "https://unsplash.com/@evaelijas"
    }
  },
  {
    "id": 8,
    "name": "Petra",
    "location": "Ma'an Governorate",
    "country": "Jordan",
    "continent": "Middle East",
    "type": "Archaeological Site",
    "kebabId": "petra",
    "description": "Petra is a famous archaeological site in Jordan's southwestern desert, dating to around 300 B.C. Once the capital of the Nabataean kingdom, it's accessed via a narrow canyon called Al-Siq, which contains tombs and temples carved into pink sandstone cliffs, earning its nickname, the 'Rose City'. Petra was rediscovered to the Western world in 1812 by Swiss explorer Johann Ludwig Burckhardt. Petra is a UNESCO World Heritage Site and one of the New7Wonders of the World.",
    "yearBuilt": -300,
    "height": null,
    "latitude": 30.3285,
    "longitude": 35.4444,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1615811648503-479d06197ff3?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1615811648503-479d06197ff3?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1615811648503-479d06197ff3?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1615811648503-479d06197ff3?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1615811648503-479d06197ff3?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1615811648503-479d06197ff3?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "eoZTnFtusDs",
      "url": "https://unsplash.com/photos/low-angle-photography-of-brown-concrete-building-eoZTnFtusDs",
      "photographer": "shai palmer",
      "photographerUrl": "https://unsplash.com/@shaipalmer"
    }
  },
  {
    "id": 243,
    "name": "Dome of the Rock",
    "location": "Jerusalem",
    "country": "Israel/Palestine",
    "continent": "Middle East",
    "type": "Shrine",
    "kebabId": "dome-of-the-rock",
    "description": "The Dome of the Rock is an Islamic shrine located on the Temple Mount in the Old City of Jerusalem. It was initially completed in 691–92 CE, making it one of the oldest works of Islamic architecture. Its architecture and mosaics were patterned after nearby Byzantine churches and palaces. The Dome of the Rock remains a potent symbol of both Palestinian nationalism and Islamic identity in Jerusalem.",
    "yearBuilt": 691,
    "height": 20,
    "latitude": 31.778,
    "longitude": 35.2354,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/11565073/pexels-photo-11565073.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/11565073/pexels-photo-11565073.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/11565073/pexels-photo-11565073.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/11565073/pexels-photo-11565073.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/11565073/pexels-photo-11565073.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/11565073/pexels-photo-11565073.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Pexels",
      "photoId": "11565073",
      "url": "https://www.pexels.com/photo/dome-of-the-rock-jerusalem-11565073/",
      "photographer": "George Bohunicky",
      "photographerUrl": "https://www.pexels.com/@george-bohunicky"
    }
  },
  {
    "id": 42,
    "name": "Sagrada Familia",
    "location": "Barcelona",
    "country": "Spain",
    "continent": "Europe",
    "type": "Church",
    "kebabId": "sagrada-familia",
    "description": "The Sagrada Familia is a large unfinished Roman Catholic minor basilica in the Eixample district of Barcelona, Catalonia, Spain. Designed by Spanish architect Antoni Gaudí, his work on Sagrada Familia is part of a UNESCO World Heritage Site. On 7 November 2010, Pope Benedict XVI consecrated the church and proclaimed it a minor basilica. Construction commenced in 1882 and Gaudí became involved in 1883, taking over the design and transforming it with his architectural and engineering style, combining Gothic and curvilinear Art Nouveau forms. Gaudí devoted the remainder of his life to the project, and he is buried in the crypt. At the time of his death in 1926, less than a quarter of the project was complete. Construction is expected to be completed in 2026, a century after Gaudí's death.",
    "yearBuilt": 2026,
    "height": 172,
    "latitude": 41.4036,
    "longitude": 2.1744,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/11773991/pexels-photo-11773991.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/11773991/pexels-photo-11773991.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/11773991/pexels-photo-11773991.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/11773991/pexels-photo-11773991.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/11773991/pexels-photo-11773991.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/11773991/pexels-photo-11773991.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Pexels",
      "photoId": "11773991",
      "url": "https://www.pexels.com/photo/brown-concrete-building-under-the-blue-sky-11773991/",
      "photographer": "Ricardo Gomez Angel",
      "photographerUrl": "https://www.pexels.com/@ricardo-gomez-angel-224429"
    }
  },
  {
    "id": 43,
    "name": "Pantheon",
    "location": "Rome",
    "country": "Italy",
    "continent": "Europe",
    "type": "Temple",
    "kebabId": "pantheon",
    "description": "The Pantheon is a former Roman temple and since 609 AD a Catholic church in Rome, Italy. It was commissioned by Marcus Agrippa during the reign of Emperor Augustus (27 BC – 14 AD) and rebuilt by the emperor Hadrian about 126 AD. Its large circular domed cella, with a conventional portico front, was traditionally dedicated to all the gods. The building is circular in plan, with a portico of large granite Corinthian columns (eight in the first rank and two groups of four behind) under a pediment. A rectangular vestibule links the portico to the cella, which is circular with a domed concrete roof. The oculus at the dome's apex is the cella's only source of natural light.",
    "yearBuilt": 126,
    "height": 43,
    "latitude": 41.8986,
    "longitude": 12.4769,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1614354987493-a010f414d0d1?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1614354987493-a010f414d0d1?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1614354987493-a010f414d0d1?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1614354987493-a010f414d0d1?w=800&h=600&fit=crop&crop&center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1614354987493-a010f414d0d1?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1614354987493-a010f414d0d1?w=1200&h=900&fit=crop&crop&center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "TLYzsNu8md0",
      "url": "https://unsplash.com/photos/people-walking-near-brown-concrete-building-during-daytime-TLYzsNu8md0",
      "photographer": "Ricardo Gomez Angel",
      "photographerUrl": "https://unsplash.com/@ricardo-gomez-angel-224429"
    }
  },
  {
    "id": 44,
    "name": "Trevi Fountain",
    "location": "Rome",
    "country": "Italy",
    "continent": "Europe",
    "type": "Fountain",
    "kebabId": "trevi-fountain",
    "description": "The Trevi Fountain is a fountain in the Trevi district in Rome, Italy, designed by Italian architect Nicola Salvi and completed by Giuseppe Pannini and several others. Standing 26.3 metres (86 ft) high and 49.15 metres (161.3 ft) wide, it is the largest Baroque fountain in the city and one of the most famous fountains in the world. The fountain has appeared in several notable films, including Roman Holiday, Three Coins in the Fountain, Federico Fellini's La Dolce Vita, and The Lizzie McGuire Movie. Tradition holds that throwing a coin into the fountain ensures a return to Rome.",
    "yearBuilt": 1762,
    "height": 26,
    "latitude": 41.9009,
    "longitude": 12.4833,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "I1Lv2yX67GI",
      "url": "https://unsplash.com/photos/brown-concrete-house-I1Lv2yX67GI",
      "photographer": "Stijn Dijkstra",
      "photographerUrl": "https://unsplash.com/@stijndijkstra"
    }
  },
  {
    "id": 45,
    "name": "St. Peter's Basilica",
    "location": "Vatican City",
    "country": "Vatican",
    "continent": "Europe",
    "type": "Church",
    "kebabId": "st-peters-basilica",
    "description": "The Papal Basilica of Saint Peter in the Vatican is a church built in the Renaissance style located in Vatican City. It is often referred to as the greatest church in Christendom. It stands on the site where Saint Peter was crucified and buried. Construction of the present basilica began on 18 April 1506 and was completed on 18 November 1626. The dome is a major feature of the basilica, both externally and internally. It was designed by Michelangelo and completed after his death by Giacomo della Porta and Domenico Fontana.",
    "yearBuilt": 1626,
    "height": 136,
    "latitude": 41.9022,
    "longitude": 12.4539,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/1207962/pexels-photo-1207962.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/1207962/pexels-photo-1207962.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/1207962/pexels-photo-1207962.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/1207962/pexels-photo-1207962.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/1207962/pexels-photo-1207962.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/1207962/pexels-photo-1207962.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Pexels",
      "photoId": "1207962",
      "url": "https://www.pexels.com/photo/white-concrete-mosque-1207962/",
      "photographer": "Pixabay",
      "photographerUrl": "https://www.pexels.com/@pixabay"
    }
  },
  {
    "id": 46,
    "name": "Arc de Triomphe",
    "location": "Paris",
    "country": "France",
    "continent": "Europe",
    "type": "Monument",
    "kebabId": "arc-de-triomphe",
    "description": "The Arc de Triomphe de l'Étoile is one of the most famous monuments in Paris, France, standing at the centre of the Place Charles de Gaulle (also known as the Étoile, the 'Star'). It honours those who fought and died for France in the French Revolutionary and Napoleonic Wars, with the names of all French victories and generals inscribed on its inner and outer surfaces. Beneath its vault lies the Tomb of the Unknown Soldier from World War I. The Arc de Triomphe is a key monument in Paris and hosts many national events.",
    "yearBuilt": 1836,
    "height": 50,
    "latitude": 48.8738,
    "longitude": 2.295,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/17064527/pexels-photo-17064527/free-photo-of-arc-de-triomphe-in-paris-on-a-sunny-day.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/17064527/pexels-photo-17064527/free-photo-of-arc-de-triomphe-in-paris-on-a-sunny-day.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/17064527/pexels-photo-17064527/free-photo-of-arc-de-triomphe-in-paris-on-a-sunny-day.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/17064527/pexels-photo-17064527/free-photo-of-arc-de-triomphe-in-paris-on-a-sunny-day.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/17064527/pexels-photo-17064527/free-photo-of-arc-de-triomphe-in-paris-on-a-sunny-day.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/17064527/pexels-photo-17064527/free-photo-of-arc-de-triomphe-in-paris-on-a-sunny-day.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Pexels",
      "photoId": "17064527",
      "url": "https://www.pexels.com/photo/arc-de-triomphe-in-paris-on-a-sunny-day-17064527/",
      "photographer": "Pixabay",
      "photographerUrl": "https://www.pexels.com/@pixabay"
    }
  },
  {
    "id": 47,
    "name": "Pompeii",
    "location": "Naples",
    "country": "Italy",
    "continent": "Europe",
    "type": "Archaeological Site",
    "kebabId": "pompeii",
    "description": "Pompeii was an ancient city located in what is now the comune of Pompei near Naples in the Campania region of Italy. Pompeii, along with Herculaneum and many villas in the surrounding area, was mostly destroyed and buried under 4 to 6 m (13 to 20 ft) of ash and pumice in the eruption of Mount Vesuvius in 79 AD. The city was lost for nearly 1,500 years until its accidental rediscovery in 1748. The excavated site offers a unique snapshot of Roman life, frozen at the moment it was overwhelmed, and is a popular tourist attraction.",
    "yearBuilt": -600,
    "height": null,
    "latitude": 40.7489,
    "longitude": 14.4989,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1686252183235-67dfafa22f60?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1686252183235-67dfafa22f60?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1686252183235-67dfafa22f60?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1686252183235-67dfafa22f60?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1686252183235-67dfafa22f60?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1686252183235-67dfafa22f60?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "6v-S0mlnIJg",
      "url": "https://unsplash.com/photos/the-ruins-of-the-ancient-city-of-pompei-6v-S0mlnIJg",
      "photographer": "Darya Sannikova",
      "photographerUrl": "https://unsplash.com/@daryasannikova"
    }
  },
  {
    "id": 48,
    "name": "Santorini",
    "location": "Cyclades",
    "country": "Greece",
    "continent": "Europe",
    "type": "Island",
    "kebabId": "santorini",
    "description": "Santorini is a Greek island in the southern Aegean Sea, about 200 km southeast from the Greek mainland. It is the largest island of a small, circular archipelago, which bears the same name and is the remnant of a volcanic caldera. It is characterised by its whitewashed, cubiform houses clinging to cliffs above an underwater caldera. The island is a popular tourist destination, known for its stunning sunsets, volcanic beaches, and ancient cities.",
    "yearBuilt": null,
    "height": 566,
    "latitude": 36.3932,
    "longitude": 25.4615,
    "images": {
      "thumbnail": {
        "webp": "https://plus.unsplash.com/premium_photo-1661963145672-a2bd28eba0fb?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://plus.unsplash.com/premium_photo-1661963145672-a2bd28eba0fb?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://plus.unsplash.com/premium_photo-1661963145672-a2bd28eba0fb?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://plus.unsplash.com/premium_photo-1661963145672-a2bd28eba0fb?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://plus.unsplash.com/premium_photo-1661963145672-a2bd28eba0fb?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://plus.unsplash.com/premium_photo-1661963145672-a2bd28eba0fb?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "p2xPbxVfw2U",
      "url": "https://unsplash.com/photos/famous-greek-iconic-selfie-spot-tourist-destination-oia-village-with-traditional-white-houses-and-windmills-in-santorini-island-on-sunset-in-twilight-greece-p2xPbxVfw2U",
      "photographer": "George Tsakalidis",
      "photographerUrl": "https://unsplash.com/@georgetsakalidis"
    }
  },
  {
    "id": 49,
    "name": "Duomo di Milano",
    "location": "Milan",
    "country": "Italy",
    "continent": "Europe",
    "type": "Cathedral",
    "kebabId": "duomo-di-milano",
    "description": "Milan Cathedral is the cathedral church of Milan, Lombardy, Italy. Dedicated to the Nativity of St Mary, it is the seat of the Archbishop of Milan, currently Archbishop Mario Delpini. The Gothic cathedral took nearly six centuries to complete: construction began in 1386, and the final details were completed in 1965. It is the largest church in Italy (St. Peter's Basilica is in the State of Vatican City) and the third largest in the world. The Duomo is renowned for its intricate facade, towering spires, and stunning stained glass windows.",
    "yearBuilt": 1965,
    "height": 108,
    "latitude": 45.464,
    "longitude": 9.1916,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "0xe2FGo7Vc0",
      "url": "https://unsplash.com/photos/people-walking-near-brown-concrete-building-during-daytime-0xe2FGo7Vc0",
      "photographer": "Sergey Katyshkin",
      "photographerUrl": "https://unsplash.com/@katyshkin"
    }
  },
  {
    "id": 50,
    "name": "Prague Castle",
    "location": "Prague",
    "country": "Czech Republic",
    "continent": "Europe",
    "type": "Castle",
    "kebabId": "prague-castle",
    "description": "Prague Castle is a castle complex in Prague, Czech Republic, built in the 9th century. It is one of the largest ancient castles in the world, occupying an area of almost 70,000 square meters. A major landmark of Prague, it is the official residence and office of the President of the Czech Republic. The castle contains a variety of historical buildings, including St. Vitus Cathedral, Old Royal Palace, St. George's Basilica, and Golden Lane.",
    "yearBuilt": 870,
    "height": null,
    "latitude": 50.0909,
    "longitude": 14.4009,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1654084747154-0b21cfd57aa0?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1654084747154-0b21cfd57aa0?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1654084747154-0b21cfd57aa0?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1654084747154-0b21cfd57aa0?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1654084747154-0b21cfd57aa0?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1654084747154-0b21cfd57aa0?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "lD6b_wEEg_Y",
      "url": "https://unsplash.com/photos/a-large-cathedral-with-a-clock-on-its-side-lD6b_wEEg_Y",
      "photographer": "Daniel Viskupič",
      "photographerUrl": "https://unsplash.com/@danielviskupic"
    }
  },
  {
    "id": 51,
    "name": "Charles Bridge",
    "location": "Prague",
    "country": "Czech Republic",
    "continent": "Europe",
    "type": "Bridge",
    "kebabId": "charles-bridge",
    "description": "Charles Bridge is a medieval stone arch bridge that crosses the Vltava river in Prague, Czech Republic. Its construction started in 1357 under King Charles IV and finished in the beginning of the 15th century. As the only means of crossing the Vltava river until 1841, Charles Bridge was the most important connection between Prague Castle and the city's Old Town and adjacent areas. The bridge is decorated by a continuous alley of 30 statues and statuaries, most of them baroque-style, originally erected around 1700.",
    "yearBuilt": 1402,
    "height": null,
    "latitude": 50.0865,
    "longitude": 14.4114,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/19579405/pexels-photo-19579405/free-photo-of-view-of-the-charles-bridge-over-the-vltava-river-in-prague-czech-republic.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/19579405/pexels-photo-19579405/free-photo-of-view-of-the-charles-bridge-over-the-vltava-river-in-prague-czech-republic.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/19579405/pexels-photo-19579405/free-photo-of-view-of-the-charles-bridge-over-the-vltava-river-in-prague-czech-republic.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/19579405/pexels-photo-19579405/free-photo-of-view-of-the-charles-bridge-over-the-vltava-river-in-prague-czech-republic.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/19579405/pexels-photo-19579405/free-photo-of-view-of-the-charles-bridge-over-the-vltava-river-in-prague-czech-republic.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/19579405/pexels-photo-19579405/free-photo-of-view-of-the-charles-bridge-over-the-vltava-river-in-prague-czech-republic.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Pexels",
      "photoId": "19579405",
      "url": "https://www.pexels.com/photo/view-of-the-charles-bridge-over-the-vltava-river-in-prague-czech-republic-19579405/",
      "photographer": "Martin Vorel",
      "photographerUrl": "https://www.pexels.com/@martin-vorel-214741717"
    }
  },
  {
    "id": 52,
    "name": "Bran Castle",
    "location": "Transylvania",
    "country": "Romania",
    "continent": "Europe",
    "type": "Castle",
    "kebabId": "bran-castle",
    "description": "Bran Castle is a castle in Brașov County, Romania, situated near Bran and in the immediate vicinity of Brașov. It is commonly known as 'Dracula's Castle', being marketed as the home of the titular character in Bram Stoker's Dracula. However, there is no evidence that Stoker knew anything about this castle, which has only tangential associations with Vlad the Impaler, voivode of Wallachia, the Romanian ruler who inspired the Dracula character. The castle is now a museum open to tourists, displaying art and furniture collected by Queen Marie of Romania.",
    "yearBuilt": 1388,
    "height": null,
    "latitude": 45.5152,
    "longitude": 25.3676,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1612118231574-3dad97d26ecf?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1612118231574-3dad97d26ecf?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1612118231574-3dad97d26ecf?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1612118231574-3dad97d26ecf?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1612118231574-3dad97d26ecf?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1612118231574-3dad97d26ecf?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "8A496IhZ47A",
      "url": "https://unsplash.com/photos/white-and-brown-concrete-castle-8A496IhZ47A",
      "photographer": "Robert Tudor",
      "photographerUrl": "https://unsplash.com/@roberttudor"
    }
  },
  {
    "id": 53,
    "name": "Edinburgh Castle",
    "location": "Edinburgh",
    "country": "Scotland",
    "continent": "Europe",
    "type": "Castle",
    "kebabId": "edinburgh-castle",
    "description": "Edinburgh Castle is a historic castle in Edinburgh, Scotland. It stands on Castle Rock, which has been occupied by humans since at least the Iron Age. The castle served as a royal residence, military garrison, prison, and armory. Edinburgh Castle is a major tourist attraction, attracting millions of visitors each year. It is also a symbol of Edinburgh and Scotland.",
    "yearBuilt": 1103,
    "height": null,
    "latitude": 55.9486,
    "longitude": -3.1999,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/21235066/pexels-photo-21235066/free-photo-of-edinburgh-castle-in-scotland.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/21235066/pexels-photo-21235066/free-photo-of-edinburgh-castle-in-scotland.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/21235066/pexels-photo-21235066/free-photo-of-edinburgh-castle-in-scotland.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/21235066/pexels-photo-21235066/free-photo-of-edinburgh-castle-in-scotland.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/21235066/pexels-photo-21235066/free-photo-of-edinburgh-castle-in-scotland.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/21235066/pexels-photo-21235066/free-photo-of-edinburgh-castle-in-scotland.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Pexels",
      "photoId": "21235066",
      "url": "https://www.pexels.com/photo/edinburgh-castle-in-scotland-21235066/",
      "photographer": "Pixabay",
      "photographerUrl": "https://www.pexels.com/@pixabay"
    }
  },
  {
    "id": 54,
    "name": "Guggenheim Museum",
    "location": "Bilbao",
    "country": "Spain",
    "continent": "Europe",
    "type": "Museum",
    "kebabId": "guggenheim-museum",
    "description": "The Guggenheim Museum Bilbao is a museum of modern and contemporary art designed by Canadian-American architect Frank Gehry. It is one of several museums belonging to the Solomon R. Guggenheim Foundation. The museum was opened in 1997 and is built alongside the Nervion River, which runs through the city of Bilbao to the Atlantic Coast. The Guggenheim Bilbao is one of the largest museums in Spain. The museum is one of Bilbao's major tourist attractions, helping to revitalize the city.",
    "yearBuilt": 1997,
    "height": 50,
    "latitude": 43.2687,
    "longitude": -2.9343,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1580693793281-87824f53e3fd?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1580693793281-87824f53e3fd?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1580693793281-87824f53e3fd?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1580693793281-87824f53e3fd?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1580693793281-87824f53e3fd?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1580693793281-87824f53e3fd?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "i1i40Cv7jb4",
      "url": "https://unsplash.com/photos/people-walking-near-white-concrete-building-during-daytime-i1i40Cv7jb4",
      "photographer": "Guillaume Marques",
      "photographerUrl": "https://unsplash.com/@guillaume_marques"
    }
  },
  {
    "id": 244,
    "name": "Meteora",
    "location": "Thessaly",
    "country": "Greece",
    "continent": "Europe",
    "type": "Monastery",
    "kebabId": "meteora",
    "description": "Meteora is a striking geological formation located in northwestern Thessaly Greece near the town of Kalabaka and the village of Kastraki. The name Meteora means lofty or suspended in the air which aptly describes this collection of massive sandstone pillars rising up to 400 meters above the plain. Perched atop these natural columns are six active Eastern Orthodox monasteries out of the original twenty-four established in the 14th century under the rule of Simeon Uroš. These monasteries include Great Meteoron Varlaam Saint Nicholas Anapausas Rousanou Holy Trinity and Saint Stephen. Originally these remote sanctuaries were accessible only by retractable rope ladders and nets providing effective defense and isolation for monks and nuns. Meteora's unique combination of spectacular geology spiritual significance and medieval architecture led to its inscription as a UNESCO World Heritage Site in 1988.",
    "yearBuilt": 1350,
    "height": null,
    "latitude": 39.721729,
    "longitude": 21.630466,
    "images": {
      "thumbnail": {
        "webp": "https://plus.unsplash.com/premium_photo-1661927459496-754b4215ff06?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://plus.unsplash.com/premium_photo-1661927459496-754b4215ff06?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://plus.unsplash.com/premium_photo-1661927459496-754b4215ff06?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://plus.unsplash.com/premium_photo-1661927459496-754b4215ff06?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://plus.unsplash.com/premium_photo-1661927459496-754b4215ff06?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://plus.unsplash.com/premium_photo-1661927459496-754b4215ff06?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1661927459496-754b4215ff06",
      "url": "https://plus.unsplash.com/premium_photo-1661927459496-754b4215ff06?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 245,
    "name": "Cologne Cathedral",
    "location": "Cologne",
    "country": "Germany",
    "continent": "Europe",
    "type": "Cathedral",
    "kebabId": "cologne-cathedral",
    "description": "Cologne Cathedral (Kölner Dom) is a renowned Gothic cathedral located in Cologne Germany. Initiated in 1248 to house the purported relics of the Three Wise Men its construction halted during the 16th century and remained unfinished for hundreds of years. Work resumed in the 19th century guided by original medieval plans and the cathedral was finally completed in 1880. Famous for its immense twin spires which rise to 157 meters it remained the world's tallest building until 1884. Cologne Cathedral is celebrated for its masterful Gothic architecture intricate stained-glass windows and its status as a symbol of enduring faith and unity through centuries of war modernization and restoration. In recognition of its significance in both religious and architectural history the cathedral became a UNESCO World Heritage Site in 1996.",
    "yearBuilt": 1248,
    "height": null,
    "latitude": 50.941278,
    "longitude": 6.958281,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1617375402484-8a196422d93d?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1617375402484-8a196422d93d?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1617375402484-8a196422d93d?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1617375402484-8a196422d93d?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1617375402484-8a196422d93d?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1617375402484-8a196422d93d?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 246,
    "name": "Atomium",
    "location": "Brussels",
    "country": "Belgium",
    "continent": "Europe",
    "type": "Monument",
    "kebabId": "atomium",
    "description": "The Atomium is a landmark building in Brussels Belgium originally constructed for the 1958 Brussels World's Fair (Expo 58). Designed by engineer André Waterkeyn and architects André and Jean Polak the structure represents an iron crystal magnified 165 billion times composed of nine interconnected stainless steel spheres. Standing at 102 meters tall the Atomium was envisioned as a symbol of scientific progress and the atomic age. The interconnected spheres house exhibition spaces and public areas and a panoramic viewing platform at the top offers vistas over Brussels. The Atomium is an iconic example of post-war optimism and modernist design and it has become one of Belgium's most recognized symbols as well as a major tourist attraction.",
    "yearBuilt": 1957,
    "height": null,
    "latitude": 50.895167,
    "longitude": 4.341389,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1685379518596-7e2b240ac982?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1685379518596-7e2b240ac982?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1685379518596-7e2b240ac982?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1685379518596-7e2b240ac982?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1685379518596-7e2b240ac982?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1685379518596-7e2b240ac982?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 247,
    "name": "Ponte Vecchio",
    "location": "Florence",
    "country": "Italy",
    "continent": "Europe",
    "type": "Bridge",
    "kebabId": "ponte-vecchio",
    "description": "The Ponte Vecchio or Old Bridge is a medieval stone arch bridge spanning the Arno River in Florence Italy. Renowned as the city's oldest and most famous bridge it has been a vital river crossing since Roman times. The present bridge was constructed in 1345 following disastrous floods that destroyed earlier versions. Notably the Ponte Vecchio has merchant shops built along its span—a tradition dating back to the 13th century—originally butchers and tanners later replaced by jewelers and goldsmiths. Richly associated with Florence's economic and cultural life the bridge survived World War II intact allegedly spared by Hitler's orders. Its charming architecture and the bustling market atmosphere maintain its status as a symbol of Florence and an enduring feat of medieval engineering.",
    "yearBuilt": 1345,
    "height": null,
    "latitude": 43.767917,
    "longitude": 11.253167,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1533071334820-b6b3248c34e9?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1533071334820-b6b3248c34e9?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1533071334820-b6b3248c34e9?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1533071334820-b6b3248c34e9?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1533071334820-b6b3248c34e9?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1533071334820-b6b3248c34e9?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 248,
    "name": "White Tower",
    "location": "Thessaloniki",
    "country": "Greece",
    "continent": "Europe",
    "type": "Tower",
    "kebabId": "white-tower",
    "description": "The White Tower of Thessaloniki is a cylindrical stone tower guarding the waterfront of Thessaloniki Greece. Constructed in the 15th century as part of the city's Ottoman fortifications it succeeded an older Byzantine tower at the same location. The tower served various defensive and administrative functions including use as a garrison and prison infamously known as the Tower of Blood due to its history as a site for executions. In 1912 after Thessaloniki's incorporation into Greece it was whitewashed as a symbol of cleansing and hope granting its current name. Standing 34 meters high and offering sweeping views of the city and Thermaic Gulf the White Tower is one of Thessaloniki's most recognizable monuments and today functions as a museum exploring the city's rich history.",
    "yearBuilt": 1450,
    "height": null,
    "latitude": 40.626667,
    "longitude": 22.948611,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1613538384222-cd71e8488d7a?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1613538384222-cd71e8488d7a?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1613538384222-cd71e8488d7a?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1613538384222-cd71e8488d7a?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1613538384222-cd71e8488d7a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1613538384222-cd71e8488d7a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 249,
    "name": "Windmills",
    "location": "Kinderdijk",
    "country": "Netherlands",
    "continent": "Europe",
    "type": "Historic Site",
    "kebabId": "windmills",
    "description": "The Windmills of Kinderdijk comprise a network of 19 monumental windmills constructed between 1738 and 1740 in the Alblasserwaard polder South Holland. Built to prevent flooding by pumping excess water out of the low-lying polder at the confluence of the Lek and Noord rivers these mills represent the largest concentration of old windmills in the Netherlands. Renowned for their role in Dutch water management they are considered symbols of Dutch ingenuity and resilience against the sea. Kinderdijk has been recognized as a UNESCO World Heritage Site since 1997 celebrated for its preservation and the exceptional technology of water control it demonstrates. The windmills remain a major Dutch tourist attraction and an iconic image of the Netherlands.",
    "yearBuilt": 1738,
    "height": null,
    "latitude": 51.8825,
    "longitude": 4.64944,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1654000120322-a81a1052418d?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1654000120322-a81a1052418d?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1654000120322-a81a1052418d?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1654000120322-a81a1052418d?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1654000120322-a81a1052418d?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1654000120322-a81a1052418d?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 250,
    "name": "Sintra",
    "location": "Lisbon",
    "country": "Portugal",
    "continent": "Europe",
    "type": "Historic Town",
    "kebabId": "sintra",
    "description": "Sintra is a picturesque town nestled in the Sintra Mountains near Lisbon. The historic center is notable for its medieval layout and romantic architectural ensemble attracting visitors with its winding lanes and lush mountain settings. The standout monument is the Palácio Nacional da Pena (Pena Palace) a 19th-century Romanticist castle built atop a former monastery between 1842 and 1854 blending Neo-Gothic Neo-Manueline and Moorish Revival styles with vivid colors. Both the palace and the town are inscribed as UNESCO World Heritage Sites celebrated for their harmonious integration of natural landscapes and revivalist architecture alongside Moorish and medieval remnants. Sintra is famed for its enchanting palaces exotic gardens mystic woods and fairy tale atmosphere.",
    "yearBuilt": 1842,
    "height": null,
    "latitude": 38.7876,
    "longitude": -9.3907,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1628295928942-c23be3c616f8?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1628295928942-c23be3c616f8?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1628295928942-c23be3c616f8?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1628295928942-c23be3c616f8?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1628295928942-c23be3c616f8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1628295928942-c23be3c616f8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 251,
    "name": "Belém Tower",
    "location": "Lisbon",
    "country": "Portugal",
    "continent": "Europe",
    "type": "Tower",
    "kebabId": "bel-m-tower",
    "description": "Belém Tower or Torre de Belém stands on the northern bank of the Tagus River in Lisbon. Built from 1514 to 1519 under the reign of King Manuel I this fortress was designed by Francisco de Arruda in the distinctive Portuguese Manueline style blending ornate Gothic and Moorish elements. Originally a defensive bastion to guard the river entrance and as a ceremonial gateway to Lisbon its richly decorated structure—with sculpted battlements and maritime motifs—symbolizes Portugal's Age of Discovery. Recognized as a UNESCO World Heritage Site the tower is an enduring icon of Lisbon admired for its historical role in maritime exploration and architectural splendor.",
    "yearBuilt": 1514,
    "height": null,
    "latitude": 38.6916,
    "longitude": -9.2165,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1682271630116-2fedc81ad13d?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1682271630116-2fedc81ad13d?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1682271630116-2fedc81ad13d?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1682271630116-2fedc81ad13d?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1682271630116-2fedc81ad13d?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1682271630116-2fedc81ad13d?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 252,
    "name": "Petronas Towers",
    "location": "Kuala Lumpur",
    "country": "Malaysia",
    "continent": "Asia",
    "type": "Skyscrapers",
    "kebabId": "petronas-towers",
    "description": "The Petronas Towers are a pair of 88-story supertall skyscrapers in Kuala Lumpur Malaysia designed by architect César Pelli and completed in 1998. Reaching a height of 451.9 meters they were the tallest buildings in the world from 1998 to 2004 and remain the tallest twin towers globally. Their design incorporates Islamic-inspired motifs reflecting Malaysia's Muslim heritage with floor plans based on a Rub el Hizb geometric pattern. A skybridge at levels 41 and 42 links the two towers offering panoramic views. The Petronas Towers are a symbol of Kuala Lumpur's modern skyline and Malaysia's rapid urban development and economic ambition.",
    "yearBuilt": 1998,
    "height": null,
    "latitude": 3.1579,
    "longitude": 101.7113,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1720515030709-8400a676d205?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1720515030709-8400a676d205?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1720515030709-8400a676d205?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1720515030709-8400a676d205?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1720515030709-8400a676d205?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1720515030709-8400a676d205?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 253,
    "name": "Bagan",
    "location": "Mandalay",
    "country": "Myanmar",
    "continent": "Asia",
    "type": "Archaeological Zone",
    "kebabId": "bagan",
    "description": "The Bagan Archaeological Zone in central Myanmar's Mandalay Region encompasses the remains of over 3500 Buddhist stupas temples monasteries and other structures built from the 9th to 13th centuries during the Pagan Kingdom's reign. Once the heart of a prosperous empire Bagan's rulers commissioned thousands of monuments showcasing the spread of Theravāda Buddhism and sophisticated Burmese architecture. This plain along the Irrawaddy River is renowned for its monumental scale and diversity of temple forms. Inscribed as a UNESCO World Heritage Site in 2019 Bagan is celebrated as one of the world's greatest archaeological sites remarkable for both its historical importance and awe-inspiring landscape dotted with temple spires stretching to the horizon.",
    "yearBuilt": 9,
    "height": null,
    "latitude": 21.1717,
    "longitude": 94.8585,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1702226580087-a416fe3e145a?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1702226580087-a416fe3e145a?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1702226580087-a416fe3e145a?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1702226580087-a416fe3e145a?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1702226580087-a416fe3e145a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1702226580087-a416fe3e145a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 254,
    "name": "Borobudur",
    "location": "Central Java",
    "country": "Indonesia",
    "continent": "Asia",
    "type": "Temple",
    "kebabId": "borobudur",
    "description": "Borobudur is the largest Buddhist temple in the world and a UNESCO World Heritage Site. Constructed in the 8th and 9th centuries this massive structure is built as a series of stacked platforms—six square and three circular—topped by a central dome. Its walls and balustrades are adorned with over 2600 relief panels and 504 Buddha statues. The temple is designed as a mandala representing the Buddhist cosmology and its pilgrim path symbolizes the journey toward enlightenment spiraling upwards from the base through terraces toward the central stupa. The monument overlooks lush rice fields and distant volcanoes in Central Java.",
    "yearBuilt": 778,
    "height": null,
    "latitude": -7.6079,
    "longitude": 110.2038,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1589310287002-b26eddda5e6a?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1589310287002-b26eddda5e6a?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1589310287002-b26eddda5e6a?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1589310287002-b26eddda5e6a?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1589310287002-b26eddda5e6a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1589310287002-b26eddda5e6a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 255,
    "name": "Terracotta Army",
    "location": "Xi'an",
    "country": "China",
    "continent": "Asia",
    "type": "Archaeological Site",
    "kebabId": "terracotta-army",
    "description": "The Terracotta Army is an archaeological site containing thousands of life-size terracotta soldiers horses and chariots buried to accompany Emperor Qin Shi Huang in his afterlife. Discovered in 1974 by local farmers the army represents a sophisticated funerary practice intended to protect the emperor beyond death. The figures are meticulously detailed with individual facial features and uniforms reflecting military rank. The site covers several pits with most of the figures remaining in their original placements near the emperor's mausoleum in Lintong District outside Xi'an. Beyond soldiers later pits revealed acrobats musicians and court officials highlighting the complexity of the emperor's envisioned afterlife.",
    "yearBuilt": 247,
    "height": null,
    "latitude": 34.385,
    "longitude": 109.27306,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1527922891260-918d42a4efc8?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1527922891260-918d42a4efc8?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1527922891260-918d42a4efc8?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1527922891260-918d42a4efc8?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1527922891260-918d42a4efc8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1527922891260-918d42a4efc8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 256,
    "name": "Tokyo Tower",
    "location": "Tokyo",
    "country": "Japan",
    "continent": "Asia",
    "type": "Tower",
    "kebabId": "tokyo-tower",
    "description": "Tokyo Tower is a 333-meter-tall communications and observation tower modeled after the Eiffel Tower in Paris but painted in white and international orange for aviation safety. Upon completion it was the tallest structure in Japan serving as a television broadcasting antenna and a symbol of Japan's post-war rebirth. The tower features two observation decks offering panoramic views of Tokyo and Mount Fuji on clear days and houses museums and entertainment facilities at its base. Its nighttime illumination is a distinctive feature of the city's skyline.",
    "yearBuilt": 1957,
    "height": null,
    "latitude": 35.6586,
    "longitude": 139.7454,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1577537500263-da8814d8e040?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1577537500263-da8814d8e040?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1577537500263-da8814d8e040?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1577537500263-da8814d8e040?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1577537500263-da8814d8e040?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1577537500263-da8814d8e040?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 257,
    "name": "Fushimi Inari Shrine",
    "location": "Kyoto",
    "country": "Japan",
    "continent": "Asia",
    "type": "Shrine",
    "kebabId": "fushimi-inari-shrine",
    "description": "Fushimi Inari Taisha is the head shrine of the kami Inari located at the base of Mount Inari. It is renowned for its seemingly endless rows of bright vermilion torii gates that trail up the wooded mountainside forming pathways through the sacred site. The shrine complex includes several smaller shrines spanning 4 kilometers and takes about two hours to walk. Inari is the Shinto deity of rice agriculture and business and the fox statues (kitsune) frequent throughout the shrine's grounds are considered to be the deity's messengers. The vibrant gates are donated by individuals and companies with their names inscribed upon them.",
    "yearBuilt": 711,
    "height": null,
    "latitude": 34.9671,
    "longitude": 135.7727,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1610375233612-d6a66ac3af99?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1610375233612-d6a66ac3af99?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1610375233612-d6a66ac3af99?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1610375233612-d6a66ac3af99?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1610375233612-d6a66ac3af99?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1610375233612-d6a66ac3af99?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 258,
    "name": "Gardens by the Bay",
    "location": "Singapore",
    "country": "Singapore",
    "continent": "Asia",
    "type": "Garden",
    "kebabId": "gardens-by-the-bay",
    "description": "Gardens by the Bay is a 101-hectare nature park along Singapore's Marina Bay waterfront designed to enhance the greenery and flora of the city. It features the iconic Supertree Grove—vertical gardens between 25 and 50 meters tall that light up at night—and two large climate-controlled conservatories: the Flower Dome and Cloud Forest. The Flower Dome simulates a cool-dry Mediterranean climate while the Cloud Forest features a misty tropical mountain environment complete with an indoor waterfall. The park integrates horticulture sustainability features and outdoor art installations attracting millions of visitors annually.",
    "yearBuilt": 2012,
    "height": null,
    "latitude": 1.2816,
    "longitude": 103.8636,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1560580652-cd41f0dcc565?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1560580652-cd41f0dcc565?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1560580652-cd41f0dcc565?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1560580652-cd41f0dcc565?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1560580652-cd41f0dcc565?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1560580652-cd41f0dcc565?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 259,
    "name": "Marina Bay Sands",
    "location": "Singapore",
    "country": "Singapore",
    "continent": "Asia",
    "type": "Hotel/Resort",
    "kebabId": "marina-bay-sands",
    "description": "Marina Bay Sands is a landmark integrated resort famous for its three interconnected hotel towers topped by the Sands SkyPark a massive cantilevered platform with the world's longest elevated infinity pool. Designed by architect Moshe Safdie the complex includes a luxury hotel casino shopping mall theaters restaurants exhibition and convention center and the ArtScience Museum. The SkyPark offers sweeping views of Singapore and the development has become an architectural icon and major tourist attraction symbolizing the city's rapid modern development and status as a global city.",
    "yearBuilt": 2010,
    "height": null,
    "latitude": 1.2834,
    "longitude": 103.8607,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1621453728762-5a95731038d5?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1621453728762-5a95731038d5?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1621453728762-5a95731038d5?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1621453728762-5a95731038d5?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1621453728762-5a95731038d5?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1621453728762-5a95731038d5?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 260,
    "name": "Himeji Castle",
    "location": "Himeji",
    "country": "Japan",
    "continent": "Asia",
    "type": "Castle",
    "kebabId": "himeji-castle",
    "description": "Himeji Castle is a hilltop Japanese castle complex in Himeji Hyōgo Prefecture and is considered the best surviving example of traditional Japanese castle architecture. Often called the White Heron Castle due to its brilliant white façade and birdlike appearance the complex consists of 83 structures with advanced defensive systems and maze-like paths intended to thwart attackers. Originally built as a fort in 1333 by Akamatsu Norimura expanded in 1581 by Toyotomi Hideyoshi and completed as seen today by Ikeda Terumasa in 1609 it served as a residence government office and military base over the centuries. Himeji Castle is both a UNESCO World Heritage Site since 1993 and a designated Japanese National Treasure.",
    "yearBuilt": 1609,
    "height": null,
    "latitude": 34.83944,
    "longitude": 134.69389,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1593297372293-6aa3e133657b?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1593297372293-6aa3e133657b?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1593297372293-6aa3e133657b?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1593297372293-6aa3e133657b?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1593297372293-6aa3e133657b?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1593297372293-6aa3e133657b?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 261,
    "name": "Potala Palace",
    "location": "Lhasa",
    "country": "Tibet",
    "continent": "Asia",
    "type": "Palace",
    "kebabId": "potala-palace",
    "description": "Potala Palace towering above the city of Lhasa at an altitude of 3700 meters was the chief residence of the Dalai Lama and the seat of the Tibetan government until 1959. The vast fortress-like structure features more than 1000 rooms including ceremonial halls chapels libraries and tombs of past Dalai Lamas. Its striking white and red exterior symbolizes peace and spirituality. Built on Red Mountain the palace exemplifies Tibetan religious architecture with sloping walls gilded roofs and ornate murals. Today Potala Palace is a UNESCO World Heritage Site and a symbol of Tibetan Buddhism and culture.",
    "yearBuilt": 1645,
    "height": null,
    "latitude": 29.6578,
    "longitude": 91.1175,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1626359909709-8067b64e1655?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1626359909709-8067b64e1655?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1626359909709-8067b64e1655?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1626359909709-8067b64e1655?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1626359909709-8067b64e1655?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1626359909709-8067b64e1655?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 262,
    "name": "Banaue Rice Terraces",
    "location": "Ifugao",
    "country": "Philippines",
    "continent": "Asia",
    "type": "Agricultural Terraces",
    "kebabId": "banaue-rice-terraces",
    "description": "The Banaue Rice Terraces are ancient hand-carved terraces stretching across the mountains of Ifugao northern Luzon. Revered as the Eighth Wonder of the World their sophisticated engineering relies on a complex irrigation network sourcing water from upland rainforests. The terraces cover about 20000 hectares rising up to 1500 meters above sea level and continue to support local rice and vegetable farming. Their maintenance and continued existence exemplify the Ifugao people's ingenuity community spirit and deep ecological knowledge. Despite UNESCO World Heritage inscription and worldwide acclaim the terraces now face challenges from changing agricultural practices climate and youth migration causing erosion and a decline in active cultivation.",
    "yearBuilt": 100,
    "height": null,
    "latitude": 16.9,
    "longitude": 121.05,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1633820313053-fa030b13ef94?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1633820313053-fa030b13ef94?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1633820313053-fa030b13ef94?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1633820313053-fa030b13ef94?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1633820313053-fa030b13ef94?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1633820313053-fa030b13ef94?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 263,
    "name": "Jodhpur Blue City",
    "location": "Jodhpur",
    "country": "India",
    "continent": "Asia",
    "type": "City",
    "kebabId": "jodhpur-blue-city",
    "description": "Nicknamed the Blue City Jodhpur's old town is famed for clusters of flat-roofed houses and buildings painted in shades of blue sprawling at the base of the massive Mehrangarh Fort. The tradition of blue paint is believed to have begun with Brahmin households later spreading to the whole city for the practical purposes of deterring insects and combating heat. The labyrinthine alleyways bustling markets and historic architecture create a striking visual landscape that reflects both cultural heritage and practical desert adaptation. Today Jodhpur stands as both a living city and a popular tourist destination celebrated for its photogenic skyline and vibrant atmosphere.",
    "yearBuilt": 1459,
    "height": null,
    "latitude": 26.2916,
    "longitude": 73.0169,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1686825780583-8be7c349a4b4?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1686825780583-8be7c349a4b4?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1686825780583-8be7c349a4b4?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1686825780583-8be7c349a4b4?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1686825780583-8be7c349a4b4?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1686825780583-8be7c349a4b4?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 264,
    "name": "Hawa Mahal",
    "location": "Jaipur",
    "country": "India",
    "continent": "Asia",
    "type": "Palace",
    "kebabId": "hawa-mahal",
    "description": "The Hawa Mahal or Palace of Winds is an iconic five-story pink sandstone palace in Jaipur Rajasthan designed in 1799 by Lal Chand Ustad for Maharaja Sawai Pratap Singh. Its ornate facade features 953 honeycomb-shaped windows (jharokhas) allowing royal women to observe bustling street life unseen while enabling natural cooling via frequent air circulation. A masterpiece of Rajput and Mughal architecture Hawa Mahal's unique blend of marble latticework arches and delicate stonework embodies the elegance of Jaipur's royal legacy. The palace is a symbol of the city and a major tourist attraction for its historical and architectural significance.",
    "yearBuilt": 1799,
    "height": null,
    "latitude": 26.9239,
    "longitude": 75.8267,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 265,
    "name": "Tiger's Nest",
    "location": "Paro Valley",
    "country": "Bhutan",
    "continent": "Asia",
    "type": "Monastery",
    "kebabId": "tiger-s-nest",
    "description": "The Tiger's Nest Monastery or Paro Taktsang dramatically clings to a sheer cliff at 3120 meters above Paro Valley. Built in 1692 around the legendary meditation cave of Guru Padmasambhava who is said to have arrived there on a flying tigress Taktsang has become Bhutan's most famous spiritual landmark. The complex contains numerous sacred shrines and temples accessed by steep footpaths through pine forest. Despite suffering fires and undergoing reconstruction the site remains a serene pilgrimage destination and a remarkable feat of Himalayan architecture offering a blend of religious reverence and natural splendor.",
    "yearBuilt": 1692,
    "height": null,
    "latitude": 27.4912,
    "longitude": 89.3636,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1743402063955-5d7c032dcbc6?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1743402063955-5d7c032dcbc6?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1743402063955-5d7c032dcbc6?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1743402063955-5d7c032dcbc6?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1743402063955-5d7c032dcbc6?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1743402063955-5d7c032dcbc6?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 266,
    "name": "Shwedagon Pagoda",
    "location": "Yangon",
    "country": "Myanmar",
    "continent": "Asia",
    "type": "Pagoda",
    "kebabId": "shwedagon-pagoda",
    "description": "The Shwedagon Pagoda Myanmar's most sacred Buddhist site rises 99 meters atop Singuttara Hill dominating Yangon's skyline with its golden stupa and diamond-studded spire. Legend claims the pagoda enshrines relics of four Buddhas including strands of Gautama Buddha's hair with construction beginning over 2600 years ago; historians however date the core structure to between the 6th and 10th centuries. Lavish donations from successive monarchs have transformed the stupa with gold leaf and jewels making it a pilgrimage hub and a symbol of Burmese identity. Nightly worshippers circle the glowing monument in veneration.",
    "yearBuilt": 950,
    "height": null,
    "latitude": 16.7983,
    "longitude": 96.1497,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1590159006560-9f35d110a1ae?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1590159006560-9f35d110a1ae?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1590159006560-9f35d110a1ae?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1590159006560-9f35d110a1ae?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1590159006560-9f35d110a1ae?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1590159006560-9f35d110a1ae?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 267,
    "name": "Wat Arun",
    "location": "Bangkok",
    "country": "Thailand",
    "continent": "Asia",
    "type": "Temple",
    "kebabId": "wat-arun",
    "description": "Wat Arun called the Temple of Dawn stands majestically on the Thonburi west bank of the Chao Phraya River. Famous for its 70-meter central Khmer-style spire (prang) encrusted with colorful porcelain and seashells the temple shimmers in sunrise light. Originally dating to the Ayutthaya period its prominent present-day features emerged under King Rama II and Rama III. Beyond the central prang the temple complex includes ornate pavilions statues and four smaller satellite prangs all embodying Thai Buddhist architectural artistry. Wat Arun remains a revered religious site and one of Bangkok's most recognizable landmarks.",
    "yearBuilt": 1847,
    "height": null,
    "latitude": 13.7437,
    "longitude": 100.488,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1613672803979-a6edfc5a179b?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1613672803979-a6edfc5a179b?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1613672803979-a6edfc5a179b?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1613672803979-a6edfc5a179b?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1613672803979-a6edfc5a179b?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1613672803979-a6edfc5a179b?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 268,
    "name": "Gyeongbokgung Palace",
    "location": "Seoul",
    "country": "South Korea",
    "continent": "Asia",
    "type": "Palace",
    "kebabId": "gyeongbokgung-palace",
    "description": "Gyeongbokgung meaning palace greatly blessed by Heaven was constructed in 1395 as the main royal palace of the Joseon Dynasty by Yi Seong-gye (King Taejo) founder of the dynasty. Surrounded by Mount Bugaksan and centrally located in Seoul it became the political and cultural heart of Korea. The palace covers a vast area with over 500 buildings spread across 40 hectares at its peak showcasing classical Joseon architecture and gardens. Notable features include the iconic Gwanghwamun Gate Gyeonghoeru Pavilion and Hyangwonjeong Pavilion. Severely damaged during the Imjin War and left in ruins for centuries it was extensively restored in the late 19th century and again in modern times. Today Gyeongbokgung houses the National Palace Museum and National Folk Museum remaining a symbol of Korea's rich heritage.",
    "yearBuilt": 1395,
    "height": null,
    "latitude": 37.576,
    "longitude": 126.977,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1539920225512-31f8905dc582?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1539920225512-31f8905dc582?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1539920225512-31f8905dc582?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1539920225512-31f8905dc582?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1539920225512-31f8905dc582?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1539920225512-31f8905dc582?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 269,
    "name": "Arashiyama Bamboo Grove",
    "location": "Kyoto",
    "country": "Japan",
    "continent": "Asia",
    "type": "Forest",
    "kebabId": "arashiyama-bamboo-grove",
    "description": "The Arashiyama Bamboo Grove also known as the Sagano Bamboo Forest is a 400–500 meter walking path lined with towering green bamboo stalks reaching up to 20 meters high. Located in the northwestern outskirts of Kyoto along the Katsura River near the Togetsukyo Bridge the grove offers a tranquil almost otherworldly experience. Its origins are rooted in the Heian period when Kyoto was Japan's imperial capital and Arashiyama served as a retreat for nobility who cultivated bamboo and gardens for refined enjoyment. The rustling of the bamboo and the play of sunlight through the tall stalks create a serene meditative atmosphere. Today the grove is a celebrated symbol of Kyoto and Japanese aesthetics cherished for both its natural beauty and cultural heritage.",
    "yearBuilt": 794,
    "height": null,
    "latitude": 35.0175,
    "longitude": 135.6776,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1632923754832-60642c12a7ed?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1632923754832-60642c12a7ed?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1632923754832-60642c12a7ed?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1632923754832-60642c12a7ed?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1632923754832-60642c12a7ed?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1632923754832-60642c12a7ed?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 270,
    "name": "Lotus Temple",
    "location": "New Delhi",
    "country": "India",
    "continent": "Asia",
    "type": "Temple",
    "kebabId": "lotus-temple",
    "description": "The Lotus Temple is a Baháʼí House of Worship renowned for its distinctive flowerlike design composed of 27 free-standing marble-clad petal structures arranged in clusters to resemble a lotus blossom. Situated in South Delhi it stands out as a major landmark and architectural marvel. The temple is open to all regardless of religion reflecting the Baháʼí principle of unity. It offers a tranquil environment for meditation and prayer inviting millions of visitors each year with its serene pools and carefully landscaped gardens.",
    "yearBuilt": 1986,
    "height": null,
    "latitude": 28.5535,
    "longitude": 77.2588,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1667197894840-00238887e15b?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1667197894840-00238887e15b?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1667197894840-00238887e15b?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1667197894840-00238887e15b?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1667197894840-00238887e15b?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1667197894840-00238887e15b?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 271,
    "name": "Taipei 101",
    "location": "Taipei",
    "country": "Taiwan",
    "continent": "Asia",
    "type": "Skyscraper",
    "kebabId": "taipei-101",
    "description": "Taipei 101 is a supertall skyscraper located in the Xinyi District of Taipei. Once the tallest building in the world it rises 508 meters with 101 above-ground floors. Its design inspired by a bamboo stalk merges traditional Asian symbolism with cutting-edge technology including an immense tuned mass damper to withstand earthquakes and typhoons. Taipei 101 serves as a symbol of Taiwan's modernity and hosts office spaces a major mall and an observatory with sweeping city views.",
    "yearBuilt": 2004,
    "height": null,
    "latitude": 25.0339,
    "longitude": 121.5645,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1580281250542-2995bf0c15ae?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1580281250542-2995bf0c15ae?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1580281250542-2995bf0c15ae?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1580281250542-2995bf0c15ae?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1580281250542-2995bf0c15ae?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1580281250542-2995bf0c15ae?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 272,
    "name": "Sigiriya",
    "location": "Central Province",
    "country": "Sri Lanka",
    "continent": "Asia",
    "type": "Rock Fortress",
    "kebabId": "sigiriya",
    "description": "Sigiriya also called Lion Rock is an ancient rock fortress rising almost 200 meters above the jungle plains of Sri Lanka's Central Province. Built by King Kashyapa the site consists of a palace perched on top of a dramatic granite column with elaborate water gardens moats and frescoes at its base. The entrance was originally designed to resemble a lion with massive paws still flanking the stairway. Sigiriya is a UNESCO World Heritage Site renowned for its blend of natural grandeur and ancient urban planning.",
    "yearBuilt": 477,
    "height": null,
    "latitude": 7.957,
    "longitude": 80.7603,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1612862862126-865765df2ded?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1612862862126-865765df2ded?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1612862862126-865765df2ded?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1612862862126-865765df2ded?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1612862862126-865765df2ded?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1612862862126-865765df2ded?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 273,
    "name": "Ellora Caves",
    "location": "Maharashtra",
    "country": "India",
    "continent": "Asia",
    "type": "Cave Temples",
    "kebabId": "ellora-caves",
    "description": "The Ellora Caves comprise a monumental complex of 34 rock-cut structures—Buddhist Hindu and Jain temples and monasteries—carved directly into basalt cliffs. Best known is the colossal Kailasa Temple (Cave 16) a standalone structure painstakingly hewn from a single rock. Ellora exemplifies the artistic excellence and religious pluralism of ancient India functioning as a significant pilgrimage site over centuries. The site is a UNESCO World Heritage Site recognized for its architectural innovation and intricate sculptures.",
    "yearBuilt": 600,
    "height": null,
    "latitude": 20.0268,
    "longitude": 75.1794,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1701430662597-ff86c1cba95a?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1701430662597-ff86c1cba95a?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1701430662597-ff86c1cba95a?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1701430662597-ff86c1cba95a?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1701430662597-ff86c1cba95a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1701430662597-ff86c1cba95a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 274,
    "name": "Ajanta Caves",
    "location": "Maharashtra",
    "country": "India",
    "continent": "Asia",
    "type": "Cave Monuments",
    "kebabId": "ajanta-caves",
    "description": "The Ajanta Caves are a set of 30 Buddhist rock-cut monuments arching along a horseshoe-shaped cliff overlooking the Waghora River. Famous for their exquisite murals and frescoes depicting Jataka tales and Buddhist iconography the caves were used as monasteries and prayer halls by Buddhist monks over several centuries. The complex is one of India's earliest world heritage sites admired for its vivid art architectural harmony and historical significance as a cradle of Buddhist culture.",
    "yearBuilt": 150,
    "height": null,
    "latitude": 20.552,
    "longitude": 75.7033,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1620558601903-9f2441730121?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1620558601903-9f2441730121?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1620558601903-9f2441730121?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1620558601903-9f2441730121?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1620558601903-9f2441730121?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1620558601903-9f2441730121?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 275,
    "name": "Mehrangarh Fort",
    "location": "Jodhpur",
    "country": "India",
    "continent": "Asia",
    "type": "Fort",
    "kebabId": "mehrangarh-fort",
    "description": "Mehrangarh Fort is one of India's most imposing and best-preserved hill forts perched 122 meters above the plains of Jodhpur and spanning a massive 1200 acres. The fort's colossal walls soar to a height of 36 meters and are up to 20 meters wide. Built by Rao Jodha to move his capital to a more defensible location Mehrangarh houses intricate palaces expansive courtyards and a well-regarded museum. Its seven gates include Jai Pol and Fattehpol which commemorate major victories. The fort still displays visible battle scars such as cannonball imprints on its gates and today hosts major festivals like the World Sacred Spirit Festival. Notably Rudyard Kipling described it as a palace that might have been built by Titans and colored by the morning sun.",
    "yearBuilt": 1459,
    "height": null,
    "latitude": 26.297339,
    "longitude": 73.019085,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 276,
    "name": "Amber Fort",
    "location": "Jaipur",
    "country": "India",
    "continent": "Asia",
    "type": "Fort",
    "kebabId": "amber-fort",
    "description": "Amber Fort situated 11 km northeast of Jaipur above Maota Lake is famed for its artistic blend of Hindu and Mughal architecture. Built primarily from pale yellow and pink sandstone as well as white marble the fort boasts ornate gates massive ramparts and grand courtyards such as the pillared Diwan-i-Am (Hall of Public Audience) and the dazzling Sheesh Mahal (Mirror Palace). Amber served as the stronghold of the Kachhwaha Rajputs until Jaipur was built. With its scenic surroundings and elaborate interiors Amber is a major UNESCO World Heritage Site as part of the Hill Forts of Rajasthan.",
    "yearBuilt": 1592,
    "height": null,
    "latitude": 26.9855,
    "longitude": 75.8507,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1649922929138-2a9bb1a2ff8d?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1649922929138-2a9bb1a2ff8d?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1649922929138-2a9bb1a2ff8d?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1649922929138-2a9bb1a2ff8d?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1649922929138-2a9bb1a2ff8d?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1649922929138-2a9bb1a2ff8d?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 277,
    "name": "Jaisalmer Fort",
    "location": "Jaisalmer",
    "country": "India",
    "continent": "Asia",
    "type": "Fort",
    "kebabId": "jaisalmer-fort",
    "description": "Dominating the arid Thar Desert landscape Jaisalmer Fort rises dramatically atop Trikuta Hill and is sometimes called the Golden Fort due to its yellow sandstone walls that glow in sunlight. It remains a living fort home to thousands with winding lanes Jain temples majestic havelis (mansions) and bustling markets within its massive ramparts. This UNESCO World Heritage Site showcases remarkable Rajput military architecture and has continuously been inhabited since its founding.",
    "yearBuilt": 1156,
    "height": null,
    "latitude": 26.9124,
    "longitude": 70.9125,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1710347454810-e3d493dcc538?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1710347454810-e3d493dcc538?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1710347454810-e3d493dcc538?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1710347454810-e3d493dcc538?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1710347454810-e3d493dcc538?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1710347454810-e3d493dcc538?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 278,
    "name": "Humayun's Tomb",
    "location": "New Delhi",
    "country": "India",
    "continent": "Asia",
    "type": "Tomb",
    "kebabId": "humayun-s-tomb",
    "description": "As the first garden-tomb on the Indian subcontinent Humayun's Tomb exemplifies Mughal innovations combining Persian double-domed structures intricate tilework and geometric gardens. Its red sandstone and white marble edifice influenced later Mughal monuments including the Taj Mahal. Set within a lush charbagh (four-quadrant garden) the tomb complex houses the graves of Humayun and other Mughal royalty. Recognized as a UNESCO World Heritage Site it stands as an architectural milestone in India's history.",
    "yearBuilt": 1569,
    "height": null,
    "latitude": 28.5933,
    "longitude": 77.2507,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1505465333319-34d8c57b3869?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1505465333319-34d8c57b3869?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1505465333319-34d8c57b3869?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1505465333319-34d8c57b3869?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1505465333319-34d8c57b3869?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1505465333319-34d8c57b3869?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 279,
    "name": "Qutub Minar",
    "location": "New Delhi",
    "country": "India",
    "continent": "Asia",
    "type": "Tower",
    "kebabId": "qutub-minar",
    "description": "Qutub Minar is the world's tallest brick minaret at 73 meters. This UNESCO World Heritage Site was built to celebrate Muslim dominance after the defeat of Delhi's last Hindu kingdom. Made of red sandstone and marble its intricately carved balconies and inscriptions showcase Indo-Islamic architecture. The complex also includes the ancient Quwwat-ul-Islam Mosque and the Iron Pillar of Delhi.",
    "yearBuilt": 1192,
    "height": null,
    "latitude": 28.5244,
    "longitude": 77.1855,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1667849521212-e9843b89f322?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1667849521212-e9843b89f322?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1667849521212-e9843b89f322?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1667849521212-e9843b89f322?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1667849521212-e9843b89f322?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1667849521212-e9843b89f322?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 280,
    "name": "Meenakshi Temple",
    "location": "Madurai",
    "country": "India",
    "continent": "Asia",
    "type": "Temple",
    "kebabId": "meenakshi-temple",
    "description": "The Meenakshi Amman Temple devoted to goddess Meenakshi and Sundareswarar (Shiva) is a sprawling Dravidian temple complex famed for its 14 colorful Gopurams (gateway towers) adorned with thousands of elaborate sculptures. The temple encompasses shrines pillared halls tanks and corridors stretching over 14 acres. It is a major center of pilgrimage and cultural events vital to Tamil identity and religious traditions.",
    "yearBuilt": 550,
    "height": null,
    "latitude": 9.9195,
    "longitude": 78.1192,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1692173248120-59547c3d4653?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1692173248120-59547c3d4653?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1692173248120-59547c3d4653?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1692173248120-59547c3d4653?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1692173248120-59547c3d4653?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1692173248120-59547c3d4653?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 281,
    "name": "Golden Temple",
    "location": "Amritsar",
    "country": "India",
    "continent": "Asia",
    "type": "Temple",
    "kebabId": "golden-temple",
    "description": "The Golden Temple or Harmandir Sahib is the holiest shrine of Sikhism located in the city of Amritsar Punjab. Surrounded by the sacred Amrit Sarovar pool the temple's dazzling gold-covered sanctum and intricate marble work blend Mughal and Hindu architectural elements. Built under Guru Arjan the fifth Sikh Guru and later embellished by Maharaja Ranjit Singh the temple welcomes all visitors irrespective of faith or background. Its four entrances symbolize openness and its central location conveys humility and inclusivity. The complex includes the world's largest free kitchen feeding tens of thousands of people daily.",
    "yearBuilt": 1581,
    "height": null,
    "latitude": 31.62,
    "longitude": 74.8765,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 282,
    "name": "Khajuraho Temples",
    "location": "Madhya Pradesh",
    "country": "India",
    "continent": "Asia",
    "type": "Temples",
    "kebabId": "khajuraho-temples",
    "description": "The Khajuraho Group of Monuments consists of 20 remaining temples renowned worldwide for their detailed nagara-style architecture and remarkable erotic sculptures celebrating a blend of spiritual and sensual expression rare in temple complexes. The site originally housed over 85 temples dedicated to Hinduism and Jainism. Now part of the UNESCO World Heritage list Khajuraho's stone carvings geometric designs and mythological tales testify to the artistic zenith of the Chandela dynasty.",
    "yearBuilt": 950,
    "height": null,
    "latitude": 24.8516,
    "longitude": 79.9366,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1671375159250-8f81a29e54e7?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1671375159250-8f81a29e54e7?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1671375159250-8f81a29e54e7?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1671375159250-8f81a29e54e7?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1671375159250-8f81a29e54e7?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1671375159250-8f81a29e54e7?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 283,
    "name": "Todai-ji",
    "location": "Nara",
    "country": "Japan",
    "continent": "Asia",
    "type": "Temple",
    "kebabId": "todai-ji",
    "description": "Todai-ji is one of Japan's most significant Buddhist temples renowned for housing the world's largest bronze statue of the Vairocana Buddha (Daibutsu) over 15 meters tall. Its Daibutsuden (Great Buddha Hall) was the world's largest wooden structure for centuries. The temple complex includes ancient gates halls and a deer-filled park. Todai-ji is a UNESCO World Heritage site representing the fusion of religious political and artistic developments central to Japanese culture.",
    "yearBuilt": 752,
    "height": null,
    "latitude": 34.6889,
    "longitude": 135.8399,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1684767864680-c57358d70e53?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1684767864680-c57358d70e53?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1684767864680-c57358d70e53?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1684767864680-c57358d70e53?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1684767864680-c57358d70e53?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1684767864680-c57358d70e53?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 284,
    "name": "Kinkaku-ji",
    "location": "Kyoto",
    "country": "Japan",
    "continent": "Asia",
    "type": "Temple",
    "kebabId": "kinkaku-ji",
    "description": "Kinkaku-ji officially known as Rokuon-ji is a Zen Buddhist temple in northern Kyoto renowned for its iconic Golden Pavilion. The structure is a stunning three-story building with the top two floors completely covered in gold leaf set beside a tranquil reflecting pond within beautiful classical gardens. Originally built as a retirement villa for the shogun Ashikaga Yoshimitsu it became a temple upon his death. The current pavilion was rebuilt in 1955 after a fire destroyed the original in 1950. Kinkaku-ji's elegant architecture symbolizes the harmony between heaven and earth and epitomizes Muromachi period garden design.",
    "yearBuilt": 1397,
    "height": null,
    "latitude": 35.0394,
    "longitude": 135.7292,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1705579687385-7c9c2a1961b9?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1705579687385-7c9c2a1961b9?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1705579687385-7c9c2a1961b9?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1705579687385-7c9c2a1961b9?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1705579687385-7c9c2a1961b9?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1705579687385-7c9c2a1961b9?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 285,
    "name": "Sensō-ji",
    "location": "Tokyo",
    "country": "Japan",
    "continent": "Asia",
    "type": "Temple",
    "kebabId": "sens-ji",
    "description": "Sensō-ji is Tokyo's oldest and most revered Buddhist temple located in the Asakusa district. Believed to have been founded in 645 after fishermen discovered a statue of the Bodhisattva Kannon it has remained a center of spiritual and cultural life for centuries. The temple complex features the iconic Kaminarimon (Thunder Gate) a five-story pagoda and a bustling market street (Nakamise-dori) leading to the main hall. Despite being destroyed in World War II the site was rebuilt with community support and now serves as a symbol of resilience and tradition in Tokyo.",
    "yearBuilt": 645,
    "height": null,
    "latitude": 35.7148,
    "longitude": 139.7967,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1580167227251-be70f01b0c51?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1580167227251-be70f01b0c51?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1580167227251-be70f01b0c51?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1580167227251-be70f01b0c51?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1580167227251-be70f01b0c51?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1580167227251-be70f01b0c51?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 286,
    "name": "Kiyomizu-dera",
    "location": "Kyoto",
    "country": "Japan",
    "continent": "Asia",
    "type": "Temple",
    "kebabId": "kiyomizu-dera",
    "description": "Kiyomizu-dera founded in 778 is a celebrated Buddhist temple in eastern Kyoto and part of the Historic Monuments of Ancient Kyoto UNESCO listing. The temple is renowned for its vast wooden stage which juts out from the main hall and offers sweeping city views supported by hundreds of wooden pillars without a single nail. The temple complex rebuilt in 1633 is named after the autobiographical Otowa Waterfall (pure water) flowing beneath believed to bestow blessings. Kiyomizu-dera attracts millions for its architecture and cherry blossom and autumn foliage scenes.",
    "yearBuilt": 778,
    "height": null,
    "latitude": 34.9948,
    "longitude": 135.785,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1669954791579-15a45890449f?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1669954791579-15a45890449f?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1669954791579-15a45890449f?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1669954791579-15a45890449f?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1669954791579-15a45890449f?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1669954791579-15a45890449f?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 287,
    "name": "Temple of Heaven",
    "location": "Beijing",
    "country": "China",
    "continent": "Asia",
    "type": "Temple",
    "kebabId": "temple-of-heaven",
    "description": "The Temple of Heaven is a vast religious complex built in 1420 during the Ming Dynasty by Emperor Yongle as a site for imperial ceremonies to ensure good harvests. Located in southern Beijing it covers 2.73 square kilometers and includes the iconic Hall of Prayer for Good Harvests the Circular Mound Altar and the Imperial Vault of Heaven all linked by ceremonial walkways. The complex reflects cosmic symbolism and intricate Ming architecture recognized for its harmonious design. The Temple is a UNESCO World Heritage site and an enduring symbol of China's spiritual and artistic achievements.",
    "yearBuilt": 1420,
    "height": null,
    "latitude": 39.8822,
    "longitude": 116.4065,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1719997794492-b51b453a162e?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1719997794492-b51b453a162e?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1719997794492-b51b453a162e?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1719997794492-b51b453a162e?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1719997794492-b51b453a162e?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1719997794492-b51b453a162e?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 288,
    "name": "Summer Palace",
    "location": "Beijing",
    "country": "China",
    "continent": "Asia",
    "type": "Palace",
    "kebabId": "summer-palace",
    "description": "The Summer Palace is a vast ensemble of palaces gardens and lakes in northwest Beijing best known as the imperial family's retreat during the Qing Dynasty. Initially built in 1750 for Emperor Qianlong the palace was largely destroyed by Anglo-French forces in 1860 and rebuilt in 1886 by Empress Dowager Cixi. Highlights include the expansive Kunming Lake the Long Corridor (a richly decorated covered walkway) and the striking Marble Boat. The Summer Palace combines traditional Chinese architecture with landscape gardening and is a UNESCO World Heritage site admired for its aesthetic and historical value.",
    "yearBuilt": 1750,
    "height": null,
    "latitude": 39.9997,
    "longitude": 116.2755,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/20694799/pexels-photo-20694799.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/20694799/pexels-photo-20694799.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/20694799/pexels-photo-20694799.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/20694799/pexels-photo-20694799.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/20694799/pexels-photo-20694799.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/20694799/pexels-photo-20694799.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 289,
    "name": "Empire State Building",
    "location": "New York",
    "country": "USA",
    "continent": "North America",
    "type": "Skyscraper",
    "kebabId": "empire-state-building",
    "description": "The Empire State Building is a 102-story Art Deco skyscraper located in Midtown South Manhattan. Designed by Shreve Lamb & Harmon it was completed in a remarkable timeframe—just one year and 45 days during the Great Depression. Upon its opening in 1931 it became the world's tallest building holding this title for over four decades. The building reaches a total height of 1454 feet including its antenna and remains one of New York's most iconic landmarks renowned for its striking design and historic significance in American architecture.",
    "yearBuilt": 1930,
    "height": null,
    "latitude": 40.74833,
    "longitude": -73.98556,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1530959106156-50f49c30932d?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1530959106156-50f49c30932d?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1530959106156-50f49c30932d?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1530959106156-50f49c30932d?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1530959106156-50f49c30932d?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1530959106156-50f49c30932d?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 290,
    "name": "Hollywood Sign",
    "location": "Los Angeles",
    "country": "USA",
    "continent": "North America",
    "type": "Sign",
    "kebabId": "hollywood-sign",
    "description": "The Hollywood Sign perched on Mount Lee in the Santa Monica Mountains is a global symbol of the entertainment industry and American cinema. Originally erected in 1923 as HOLLYWOODLAND to promote a real estate development it consisted of 13 letters each 15 meters high. Over the decades the sign fell into disrepair and was restored in 1978 shortened to simply HOLLYWOOD. The sign is now recognized as an iconic cultural landmark and is protected both for its historical significance and enduring popularity in popular culture.",
    "yearBuilt": 1923,
    "height": null,
    "latitude": 34.1341,
    "longitude": -118.3215,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1534253893894-10d024888e49?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1534253893894-10d024888e49?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1534253893894-10d024888e49?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1534253893894-10d024888e49?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1534253893894-10d024888e49?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1534253893894-10d024888e49?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 291,
    "name": "Space Needle",
    "location": "Seattle",
    "country": "USA",
    "continent": "North America",
    "type": "Tower",
    "kebabId": "space-needle",
    "description": "The Space Needle is an instantly recognizable observation tower in Seattle built for the 1962 World's Fair which had a theme of The Age of Space. Standing 184 meters tall the tower features a futuristic design with a slender splayed tripod base and a flying saucer-shaped halo at the top offering panoramic views of the city Puget Sound and Mount Rainier. An elevator ride to the observation deck which includes the world's first and only rotating glass floor has made the Space Needle a leading Pacific Northwest attraction and symbol of Seattle innovation and optimism.",
    "yearBuilt": 1962,
    "height": null,
    "latitude": 47.6205,
    "longitude": -122.3493,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1622839497468-9e4a20007cf8?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1622839497468-9e4a20007cf8?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1622839497468-9e4a20007cf8?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1622839497468-9e4a20007cf8?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1622839497468-9e4a20007cf8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1622839497468-9e4a20007cf8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 292,
    "name": "Times Square",
    "location": "New York",
    "country": "USA",
    "continent": "North America",
    "type": "Commercial Intersection",
    "kebabId": "times-square",
    "description": "Times Square is a major commercial intersection tourist destination entertainment center and neighborhood in Midtown Manhattan. Shaped more like a bowtie than a square due to the intersection of Broadway and Seventh Avenue it is world-renowned for its electric billboards theaters and as the home of the New Year's Eve Ball Drop. Often called The Crossroads of the World Times Square draws hundreds of thousands of visitors daily to its vibrant lights famous Broadway theaters and bustling pedestrian plazas.",
    "yearBuilt": 1904,
    "height": null,
    "latitude": 40.758896,
    "longitude": -73.98513,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1582760548598-0bccdf815aa2?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1582760548598-0bccdf815aa2?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1582760548598-0bccdf815aa2?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1582760548598-0bccdf815aa2?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1582760548598-0bccdf815aa2?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1582760548598-0bccdf815aa2?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 293,
    "name": "White House",
    "location": "Washington D.C.",
    "country": "USA",
    "continent": "North America",
    "type": "Government Building",
    "kebabId": "white-house",
    "description": "The White House situated at 1600 Pennsylvania Avenue NW Washington D.C. is the official residence and workplace of the President of the United States. Designed by architect James Hoban in the neoclassical style it consists of the Executive Residence West Wing East Wing and surrounding gardens. As both a historic structure and a seat of executive power it is among the most recognized government buildings globally and the frequent site of national ceremonies and state functions.",
    "yearBuilt": 1792,
    "height": null,
    "latitude": 38.897676,
    "longitude": -77.03653,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1613235832689-999d314d023b?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1613235832689-999d314d023b?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1613235832689-999d314d023b?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1613235832689-999d314d023b?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1613235832689-999d314d023b?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1613235832689-999d314d023b?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 294,
    "name": "Lincoln Memorial",
    "location": "Washington D.C.",
    "country": "USA",
    "continent": "North America",
    "type": "Monument",
    "kebabId": "lincoln-memorial",
    "description": "Located at the western end of the National Mall the Lincoln Memorial honors Abraham Lincoln the 16th President of the United States. Architect Henry Bacon designed the monument in the form of a classical Greek temple featuring 36 Doric columns. Inside sits Daniel Chester French's colossal marble statue of Lincoln accompanied by inscriptions of two of his speeches. The memorial is a symbol of unity and civil rights hosting numerous historic gatherings including Dr. Martin Luther King Jr.'s I Have a Dream speech.",
    "yearBuilt": 1914,
    "height": null,
    "latitude": 38.889269,
    "longitude": -77.050176,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1713292399900-9e4e9f213793?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1713292399900-9e4e9f213793?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1713292399900-9e4e9f213793?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1713292399900-9e4e9f213793?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1713292399900-9e4e9f213793?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1713292399900-9e4e9f213793?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 295,
    "name": "Washington Monument",
    "location": "Washington D.C.",
    "country": "USA",
    "continent": "North America",
    "type": "Monument",
    "kebabId": "washington-monument",
    "description": "The Washington Monument is a towering white marble obelisk located at the center of the National Mall commemorating George Washington the first U.S. president. Standing at 555 feet it was the world's tallest structure upon completion. The monument's observation deck provides panoramic views of the city while its simple design reflects the dignity and leadership of Washington himself making it an enduring icon of American history and achievement.",
    "yearBuilt": 1848,
    "height": null,
    "latitude": 38.889484,
    "longitude": -77.035278,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1722311621361-f85e0ebfb108?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1722311621361-f85e0ebfb108?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1722311621361-f85e0ebfb108?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1722311621361-f85e0ebfb108?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1722311621361-f85e0ebfb108?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1722311621361-f85e0ebfb108?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 296,
    "name": "Capitol Building",
    "location": "Washington D.C.",
    "country": "USA",
    "continent": "North America",
    "type": "Government Building",
    "kebabId": "capitol-building",
    "description": "The United States Capitol sits atop Capitol Hill at the eastern end of the National Mall. Designed by Dr. William Thornton the neoclassical structure houses the U.S. Congress. Its central dome and two wings—Senate and House of Representatives—make it one of the most distinctive legislative buildings worldwide. The Capitol is both a functional government center and a symbol of the United States' democratic ideals and legislative process.",
    "yearBuilt": 1793,
    "height": null,
    "latitude": 38.889939,
    "longitude": -77.009051,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1624417963912-8532660d9de8?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1624417963912-8532660d9de8?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1624417963912-8532660d9de8?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1624417963912-8532660d9de8?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1624417963912-8532660d9de8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1624417963912-8532660d9de8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 297,
    "name": "Gateway Arch",
    "location": "St. Louis",
    "country": "USA",
    "continent": "North America",
    "type": "Monument",
    "kebabId": "gateway-arch",
    "description": "The Gateway Arch standing 630 feet tall on the west bank of the Mississippi River is the world's tallest arch and the tallest man-made monument in the Western Hemisphere. Designed by Eero Saarinen its stainless steel structure honors St. Louis's role as the Gateway to the West. Visitors can travel to the top via custom tram for sweeping views of the city and river. The Arch serves as the centerpiece of Gateway Arch National Park and is a landmark of modern engineering.",
    "yearBuilt": 1963,
    "height": null,
    "latitude": 38.624691,
    "longitude": -90.184776,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1595647274814-7cfbf1e344d0?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1595647274814-7cfbf1e344d0?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1595647274814-7cfbf1e344d0?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1595647274814-7cfbf1e344d0?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1595647274814-7cfbf1e344d0?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1595647274814-7cfbf1e344d0?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 298,
    "name": "Hoover Dam",
    "location": "Nevada/Arizona",
    "country": "USA",
    "continent": "North America",
    "type": "Dam",
    "kebabId": "hoover-dam",
    "description": "The Hoover Dam bridging the border between Nevada and Arizona is a massive concrete arch-gravity dam in the Black Canyon of the Colorado River. Built during the Great Depression it tamed the river to provide dependable water and electrical power to the Southwest. The dam stands 726 feet high and forms Lake Mead the largest reservoir in the U.S. by volume. Hoover Dam remains an engineering marvel and a critical resource for agriculture water supply and renewable energy in the region.",
    "yearBuilt": 1931,
    "height": null,
    "latitude": 36.015519,
    "longitude": -114.737686,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1582543529952-4d27d5c81a6d?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1582543529952-4d27d5c81a6d?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1582543529952-4d27d5c81a6d?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1582543529952-4d27d5c81a6d?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1582543529952-4d27d5c81a6d?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1582543529952-4d27d5c81a6d?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 299,
    "name": "Peggy's Cove Lighthouse",
    "location": "Nova Scotia",
    "country": "Canada",
    "continent": "North America",
    "type": "Lighthouse",
    "kebabId": "peggy-s-cove-lighthouse",
    "description": "The Peggy's Cove Lighthouse officially known as Peggys Point Lighthouse stands on the granite rocks at Peggy's Cove in Nova Scotia Canada. Built in 1915 the lighthouse is an octagonal concrete tower painted white with a red lantern on top rising to a height of about 15 meters. It marks the eastern entrance of St. Margarets Bay and is one of the most photographed and recognizable structures in Canada. The lighthouse and its rugged Atlantic coastline setting create a picturesque landscape attracting thousands of visitors annually.",
    "yearBuilt": 1915,
    "height": null,
    "latitude": 44.4917,
    "longitude": -63.9158,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1593664606979-69efba2128d8?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1593664606979-69efba2128d8?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1593664606979-69efba2128d8?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1593664606979-69efba2128d8?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1593664606979-69efba2128d8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1593664606979-69efba2128d8?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 300,
    "name": "Teotihuacan",
    "location": "Mexico City",
    "country": "Mexico",
    "continent": "North America",
    "type": "Archaeological Site",
    "kebabId": "teotihuacan",
    "description": "Teotihuacan is an ancient Mesoamerican city situated about 40 km northeast of Mexico City renowned for its massive pyramids and complex urban layout. Created between the 1st century BCE and the 3rd century CE at its peak it was among the largest cities in the world with a population over 100000. Its major monuments include the Pyramid of the Sun Pyramid of the Moon and the Temple of the Feathered Serpent (Quetzalcoatl). Teotihuacan's grand Avenue of the Dead links these monuments surrounded by residential compounds murals and plazas that offer crucial insight into pre-Aztec urban culture and religion.",
    "yearBuilt": 100,
    "height": null,
    "latitude": 19.6925,
    "longitude": -98.8436,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1694995605150-f8edef4df31a?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1694995605150-f8edef4df31a?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1694995605150-f8edef4df31a?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1694995605150-f8edef4df31a?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1694995605150-f8edef4df31a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1694995605150-f8edef4df31a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 301,
    "name": "Tulum",
    "location": "Quintana Roo",
    "country": "Mexico",
    "continent": "North America",
    "type": "Archaeological Site",
    "kebabId": "tulum",
    "description": "Tulum is a walled Maya city perched on tall cliffs overlooking the Caribbean Sea on Mexico's Yucatán Peninsula. Flourishing primarily from the 13th to 15th centuries CE it was one of the last cities built and inhabited by the Maya. Its most iconic structure El Castillo stands atop the bluff offering commanding views of the turquoise sea below. Tulum served as a major trading port particularly for obsidian. Unlike many inland Maya sites its unique coastal position adds archaeological and scenic allure attracting scholars and tourists alike.",
    "yearBuilt": 1200,
    "height": null,
    "latitude": 20.2117,
    "longitude": -87.4658,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/32274687/pexels-photo-32274687.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/32274687/pexels-photo-32274687.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/32274687/pexels-photo-32274687.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/32274687/pexels-photo-32274687.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/32274687/pexels-photo-32274687.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/32274687/pexels-photo-32274687.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 302,
    "name": "Palenque",
    "location": "Chiapas",
    "country": "Mexico",
    "continent": "North America",
    "type": "Archaeological Site",
    "kebabId": "palenque",
    "description": "Palenque is one of the most significant ancient Maya cities situated in the jungle foothills of Chiapas Mexico. Celebrated for its finely sculptured architecture and bas-reliefs its classic period artifacts (flourishing in the 7th century CE) include the Temple of the Inscriptions which houses the tomb of the great ruler Pakal. Palenque's ruins featuring palaces temples and an iconic aqueduct harmonize with the tropical forest setting providing invaluable insight into Maya cosmology and governance.",
    "yearBuilt": 226,
    "height": null,
    "latitude": 17.4848,
    "longitude": -92.0453,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1581442297526-ba11d408ac91?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1581442297526-ba11d408ac91?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1581442297526-ba11d408ac91?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1581442297526-ba11d408ac91?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1581442297526-ba11d408ac91?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1581442297526-ba11d408ac91?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 303,
    "name": "Monte Albán",
    "location": "Oaxaca",
    "country": "Mexico",
    "continent": "North America",
    "type": "Archaeological Site",
    "kebabId": "monte-alb-n",
    "description": "Monte Albán is a major pre-Columbian archaeological site located atop a ridge in the Valley of Oaxaca southern Mexico. Established around 500 BCE by the Zapotec civilization it served as their capital for over a millennium flourishing as a center for governance culture and religion. The expansive site—rising approximately 400 meters above the surrounding plain—features grand plazas pyramids temples tombs ball courts and hundreds of artificial terraces spread along the ridge. Monte Albán is especially noted for the danzantes: carved stone slabs with human figures and hieroglyphs reflecting the city's artistic and sociopolitical sophistication. The ceremonial core organized along a north-south axis is among Mesoamerica's most impressive symbolizing the region's exceptional urban planning and sacred topography. Although its population declined by the 8th century CE its influence endured among later cultures including the Mixtecs and Aztecs.",
    "yearBuilt": 500,
    "height": null,
    "latitude": 17.04389,
    "longitude": -96.76778,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1530455235907-0a59ea1e04ea?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1530455235907-0a59ea1e04ea?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1530455235907-0a59ea1e04ea?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1530455235907-0a59ea1e04ea?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1530455235907-0a59ea1e04ea?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1530455235907-0a59ea1e04ea?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 304,
    "name": "Havana Old Town",
    "location": "Havana",
    "country": "Cuba",
    "continent": "North America",
    "type": "Historic District",
    "kebabId": "havana-old-town",
    "description": "Habana Vieja or Havana Old Town is the original core of the city of Havana Cuba founded by the Spanish in 1519. This UNESCO World Heritage site showcases an exceptional collection of Spanish colonial architecture cobbled streets and grand plazas such as Plaza de Armas and Plaza Vieja. Landmarks include the Castillo de la Real Fuerza Havana Cathedral and numerous pastel-colored mansions. Despite centuries of history the area remains vibrant filled with music art and everyday life. Old Havana is a living testament to Cuba's colonial history blending Baroque Neoclassical and Art Deco styles with Caribbean flair. Restoration efforts have revitalized much of the area making it a major cultural and tourist hub.",
    "yearBuilt": 1519,
    "height": null,
    "latitude": 23.14,
    "longitude": -82.353,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1528273616809-a032a10474d4?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1528273616809-a032a10474d4?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1528273616809-a032a10474d4?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1528273616809-a032a10474d4?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1528273616809-a032a10474d4?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1528273616809-a032a10474d4?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 305,
    "name": "El Morro",
    "location": "San Juan",
    "country": "Puerto Rico",
    "continent": "North America",
    "type": "Fortress",
    "kebabId": "el-morro",
    "description": "Castillo San Felipe del Morro commonly known as El Morro is a formidable citadel at the entrance of San Juan Bay Puerto Rico. Constructed starting in 1539 by Spanish colonists the fort was expanded for over 250 years to protect against seaborne attacks. With six massive levels rising above the rocky headland El Morro features thick stone walls ramparts turrets and dungeons. The site offers sweeping views of the Atlantic Ocean and old San Juan. A UNESCO World Heritage Site El Morro reflects centuries of military engineering colonial rivalry and Puerto Rico's strategic Caribbean location. Today it is a symbol of Puerto Rican heritage and a popular historic attraction.",
    "yearBuilt": 1539,
    "height": null,
    "latitude": 18.4711,
    "longitude": -66.1248,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/15306393/pexels-photo-15306393.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/15306393/pexels-photo-15306393.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/15306393/pexels-photo-15306393.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/15306393/pexels-photo-15306393.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/15306393/pexels-photo-15306393.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/15306393/pexels-photo-15306393.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 306,
    "name": "Tikal",
    "location": "El Petén",
    "country": "Guatemala",
    "continent": "North America",
    "type": "Archaeological Site",
    "kebabId": "tikal",
    "description": "Tikal is a towering ancient Maya city situated amid the tropical rainforest of northern Guatemala's El Petén region. Settled as early as the 4th century BCE Tikal became one of the largest Maya urban and ceremonial centers during the Classic Period (c. 200–900 CE). The site is dominated by monumental pyramid-temples rising above the jungle canopy extensive plazas ball courts stelae and royal tombs. Tikal's monumental core reflects a highly complex society renowned for its written texts astronomical observations and political prowess. Now a UNESCO World Heritage Site Tikal's ruins offer crucial insights into Maya civilization and are enveloped in a lush wildlife-rich biosphere reserve.",
    "yearBuilt": 400,
    "height": null,
    "latitude": 17.2214,
    "longitude": -89.6237,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1669025467363-ace9bad030dc?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1669025467363-ace9bad030dc?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1669025467363-ace9bad030dc?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1669025467363-ace9bad030dc?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1669025467363-ace9bad030dc?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1669025467363-ace9bad030dc?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 307,
    "name": "Mayan Ruins of Copán",
    "location": "Copán",
    "country": "Honduras",
    "continent": "North America",
    "type": "Archaeological Site",
    "kebabId": "mayan-ruins-of-cop-n",
    "description": "Located in western Honduras near the Guatemalan border the ruins of Copán were once the capital of a major Classic period Maya kingdom. The site is famous for its impressive hieroglyphic stairway intricate stelae altars beautiful plazas ball courts and the iconic Acropolis. The city flourished as a cultural and ceremonial center renowned for its advanced knowledge of astronomy mathematics and monumental sculpture. Copán's meticulously carved monuments and inscriptions have provided profound insights into the history and rulers of the ancient Maya civilization.",
    "yearBuilt": 426,
    "height": null,
    "latitude": 14.8401,
    "longitude": -89.1421,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1671538307956-0afd619ec9c7?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1671538307956-0afd619ec9c7?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1671538307956-0afd619ec9c7?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1671538307956-0afd619ec9c7?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1671538307956-0afd619ec9c7?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1671538307956-0afd619ec9c7?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 308,
    "name": "Chichén Itzá",
    "location": "Yucatán",
    "country": "Mexico",
    "continent": "North America",
    "type": "Archaeological Site",
    "kebabId": "chich-n-itz",
    "description": "Chichén Itzá is a sprawling complex of Maya ruins in Yucatán Mexico acclaimed for its monumental architecture and astronomical alignments. The site's best-known feature is the Temple of Kukulcán (El Castillo) a step pyramid with 91 steps on each side culminating in a final step to the temple totaling 365 steps—the number of days in a solar year. The site also includes the Great Ball Court Temple of the Warriors and the Sacred Cenote reflecting a blend of Maya and Toltec influence. It remains a testament to the advanced engineering and astronomical sophistication of its builders.",
    "yearBuilt": 600,
    "height": null,
    "latitude": 20.6843,
    "longitude": -88.5678,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1561577101-aa749bffbb70?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1561577101-aa749bffbb70?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1561577101-aa749bffbb70?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1561577101-aa749bffbb70?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1561577101-aa749bffbb70?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1561577101-aa749bffbb70?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 309,
    "name": "Buenos Aires Obelisk",
    "location": "Buenos Aires",
    "country": "Argentina",
    "continent": "South America",
    "type": "Monument",
    "kebabId": "buenos-aires-obelisk",
    "description": "The Obelisk of Buenos Aires is a defining Modernist monument rising 67.5 meters at the intersection of Avenida 9 de Julio and Avenida Corrientes marking the city's historic founding and commemorating 400 years since its first foundation. Designed by architect Alberto Prebisch the white stone monument has become a symbol of Buenos Aires serving as the backdrop for political rallies celebrations and public gatherings. Its stark form and prominent location make it instantly recognizable and a central reference point in the Argentine capital's urban landscape.",
    "yearBuilt": 1936,
    "height": null,
    "latitude": -34.6031,
    "longitude": -58.3817,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/13278009/pexels-photo-13278009.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/13278009/pexels-photo-13278009.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/13278009/pexels-photo-13278009.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/13278009/pexels-photo-13278009.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/13278009/pexels-photo-13278009.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/13278009/pexels-photo-13278009.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 310,
    "name": "Chan Chan",
    "location": "Trujillo",
    "country": "Peru",
    "continent": "South America",
    "type": "Archaeological Site",
    "kebabId": "chan-chan",
    "description": "Chan Chan is the largest pre-Columbian city in South America and the capital of the ancient Chimú civilization. Constructed entirely of adobe brick this vast archaeological complex once sprawled over 20 square kilometers just west of present-day Trujillo on the northern Peruvian coast. At its peak the city is believed to have housed as many as 60000 inhabitants. Chan Chan features monumental walls adorned with intricate geometric and animal friezes sprawling ceremonial plazas reservoirs administrative centers and royal compounds. Recognized as a UNESCO World Heritage Site Chan Chan remains a stunning testament to the Chimú's architectural ingenuity and mastery of urban planning in an arid environment.",
    "yearBuilt": 850,
    "height": null,
    "latitude": -8.1047,
    "longitude": -79.065,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/7329931/pexels-photo-7329931.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/7329931/pexels-photo-7329931.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/7329931/pexels-photo-7329931.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/7329931/pexels-photo-7329931.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/7329931/pexels-photo-7329931.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/7329931/pexels-photo-7329931.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 311,
    "name": "Sphinx",
    "location": "Giza",
    "country": "Egypt",
    "continent": "Africa",
    "type": "Monument",
    "kebabId": "sphinx",
    "description": "The Great Sphinx of Giza carved directly from the limestone bedrock is one of the world's largest and oldest monumental statues. Measuring 73 meters long and 20 meters high this enigmatic creature with a lion's body and a human head (believed to represent Pharaoh Khafre) guards the Giza Plateau near Cairo. Revered as a symbol of ancient Egypt's ingenuity and power the Sphinx continues to captivate with its mysterious gaze and enduring legends.",
    "yearBuilt": 2558,
    "height": null,
    "latitude": 29.9753,
    "longitude": 31.1376,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1722595053086-eb36d4c3a6f5?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1722595053086-eb36d4c3a6f5?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1722595053086-eb36d4c3a6f5?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1722595053086-eb36d4c3a6f5?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1722595053086-eb36d4c3a6f5?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1722595053086-eb36d4c3a6f5?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 312,
    "name": "Abu Simbel",
    "location": "Aswan",
    "country": "Egypt",
    "continent": "Africa",
    "type": "Temple",
    "kebabId": "abu-simbel",
    "description": "Abu Simbel is a monumental archaeological site in southern Egypt comprising two massive rock-cut temples originally built by Pharaoh Ramses II in the 13th century BCE. Carved out of sandstone cliffs along the Nile's west bank the Great Temple honors Ramses II himself while the smaller temple is dedicated to Queen Nefertari and the goddess Hathor. The façade of the main temple is dominated by four colossal statues of Ramses II each over 20 meters high. In the 1960s both temples were relocated to higher ground to prevent submersion by Lake Nasser following the construction of the Aswan High Dam. Today Abu Simbel stands as a magnificent testament to ancient Egyptian engineering religious devotion and artistry.",
    "yearBuilt": 1250,
    "height": null,
    "latitude": 22.34,
    "longitude": 31.62,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1633163893862-4cdc62de7d82?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1633163893862-4cdc62de7d82?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1633163893862-4cdc62de7d82?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1633163893862-4cdc62de7d82?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1633163893862-4cdc62de7d82?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1633163893862-4cdc62de7d82?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 313,
    "name": "Karnak Temple",
    "location": "Luxor",
    "country": "Egypt",
    "continent": "Africa",
    "type": "Temple",
    "kebabId": "karnak-temple",
    "description": "Karnak Temple situated near Luxor in southern Egypt is the largest ancient religious complex ever constructed. Developed over nearly two millennia—from the Middle Kingdom around 2000 BCE through the Greco-Roman period—the complex is primarily dedicated to the Theban triad: Amun Mut and Khonsu. Its vast precinct covers over 100 hectares and features towering pylons monumental columns obelisks and intricate reliefs. The hypostyle hall with its 134 massive columns is one of Egypt's most awe-inspiring architectural achievements. Karnak was not just a place of worship but a central stage for political and religious festivals symbolizing the wealth and power of the pharaohs across generations.",
    "yearBuilt": 2000,
    "height": null,
    "latitude": 25.72,
    "longitude": 32.66,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/18934702/pexels-photo-18934702.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/18934702/pexels-photo-18934702.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/18934702/pexels-photo-18934702.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/18934702/pexels-photo-18934702.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/18934702/pexels-photo-18934702.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/18934702/pexels-photo-18934702.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 314,
    "name": "Luxor Temple",
    "location": "Luxor",
    "country": "Egypt",
    "continent": "Africa",
    "type": "Temple",
    "kebabId": "luxor-temple",
    "description": "The Luxor Temple is an ancient Egyptian temple complex located on the east bank of the Nile River in the modern city of Luxor (ancient Thebes). Built around 1400 BCE it was primarily constructed by Pharaoh Amenhotep III and expanded by subsequent rulers including Ramses II. Unlike other temples Luxor was not dedicated to a cult god or deified ruler but was instead the focus of the annual Opet Festival celebrating the rejuvenation of kingship. The structure is renowned for its grand colonnades massive pylons statues and its avenue of sphinxes that once connected it to the Temple of Karnak. The site remains one of Egypt's most iconic relics of ancient architecture and religious life.",
    "yearBuilt": 1400,
    "height": null,
    "latitude": 25.6996,
    "longitude": 32.6396,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1671483330885-62abe0be18a6?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1671483330885-62abe0be18a6?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1671483330885-62abe0be18a6?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1671483330885-62abe0be18a6?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1671483330885-62abe0be18a6?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1671483330885-62abe0be18a6?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 315,
    "name": "Marrakech Medina",
    "location": "Marrakech",
    "country": "Morocco",
    "continent": "Africa",
    "type": "Medina",
    "kebabId": "marrakech-medina",
    "description": "The Marrakech Medina forms the heart of the historic city of Marrakech and is among the best-preserved examples of medieval Islamic urban planning in North Africa. Founded around 1070 by the Almoravid dynasty the medina is a labyrinth of winding alleys bustling souks and vibrant squares centered around landmarks like the Koutoubia Mosque and Jemaa el-Fna. The famed red sandstone city walls completed in the early 12th century have given Marrakech its nickname the Red City. Famed for its unique blend of Berber Arab and Andalusian architectural influences the medina includes palaces gardens madrasas and historic mosques. It was inscribed as a UNESCO World Heritage Site in 1985 for its outstanding testimony to Moroccan culture and its place as a crossroads for trade religion and art across centuries.",
    "yearBuilt": 1070,
    "height": null,
    "latitude": 31.63139,
    "longitude": -7.98667,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/22711558/pexels-photo-22711558.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/22711558/pexels-photo-22711558.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/22711558/pexels-photo-22711558.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/22711558/pexels-photo-22711558.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/22711558/pexels-photo-22711558.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/22711558/pexels-photo-22711558.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 316,
    "name": "Chefchaouen",
    "location": "Chefchaouen",
    "country": "Morocco",
    "continent": "Africa",
    "type": "City",
    "kebabId": "chefchaouen",
    "description": "Chefchaouen is famed for its distinctive blue-washed buildings and tranquil mountainous setting in northern Morocco. The city was founded in 1471 as a small fortress to fend off Portuguese invasions of northern Morocco. Throughout history it has served as a refuge for Jews and Muslims fleeing the Reconquista in Spain reflected in its architecture and culture. Winding blue-hued streets white-washed walls and the backdrop of the Rif Mountains have made Chefchaouen one of the country's most picturesque towns drawing visitors for its unique atmosphere and historic medina.",
    "yearBuilt": 1471,
    "height": null,
    "latitude": 35.1688,
    "longitude": -5.2637,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 317,
    "name": "Djemaa el-Fna",
    "location": "Marrakech",
    "country": "Morocco",
    "continent": "Africa",
    "type": "Square",
    "kebabId": "djemaa-el-fna",
    "description": "Djemaa el-Fna is the iconic public square at the heart of Marrakech's medina continually serving as a vibrant hub for local life since its origins in the 11th century. This open plaza is famous for its daily and nightly performances including storytellers musicians snake charmers and food vendors creating a living cultural showcase. Its unique atmosphere and social significance have contributed to Djemaa el-Fna being recognized not only as an integral part of the Medina UNESCO site but also celebrated by UNESCO as a Masterpiece of the Oral and Intangible Heritage of Humanity.",
    "yearBuilt": 1050,
    "height": null,
    "latitude": 31.62583,
    "longitude": -7.98944,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1665949076366-d741f9dfa1bb?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1665949076366-d741f9dfa1bb?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1665949076366-d741f9dfa1bb?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1665949076366-d741f9dfa1bb?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1665949076366-d741f9dfa1bb?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1665949076366-d741f9dfa1bb?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 318,
    "name": "Lalibela",
    "location": "Amhara Region",
    "country": "Ethiopia",
    "continent": "Africa",
    "type": "Rock-hewn Churches",
    "kebabId": "lalibela",
    "description": "Lalibela is a UNESCO World Heritage site in Ethiopia's Amhara Region renowned for its monolithic rock-hewn churches constructed in the late 12th and early 13th centuries under the reign of King Lalibela. These eleven medieval churches carved entirely out of volcanic rock are masterpieces of engineering and devotion frequently set in deep trenches or connected by underground passages. Lalibela remains a major pilgrimage site for Ethiopian Orthodox Christians representing one of the most significant religious and cultural complexes in Africa admired for both its architectural ingenuity and spiritual heritage.",
    "yearBuilt": 12,
    "height": null,
    "latitude": 12.03,
    "longitude": 39.0472,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/7438884/pexels-photo-7438884.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/7438884/pexels-photo-7438884.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/7438884/pexels-photo-7438884.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/7438884/pexels-photo-7438884.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/7438884/pexels-photo-7438884.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/7438884/pexels-photo-7438884.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 319,
    "name": "Sydney Harbour Bridge",
    "location": "Sydney",
    "country": "Australia",
    "continent": "Oceania",
    "type": "Bridge",
    "kebabId": "sydney-harbour-bridge",
    "description": "The Sydney Harbour Bridge completed in 1932 is a steel through arch bridge known as The Coathanger. Spanning 503 meters it connects the Sydney central business district with the North Shore forming an integral part of the city's skyline alongside the nearby Opera House. The bridge carries vehicles trains and pedestrians and is famous for its scenic BridgeClimb experience offering panoramic views of the harbour. It remains a symbol of Australian engineering and ambition.",
    "yearBuilt": 1932,
    "height": null,
    "latitude": -33.8523,
    "longitude": 151.2108,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1589610833901-8e91851e2291?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1589610833901-8e91851e2291?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1589610833901-8e91851e2291?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1589610833901-8e91851e2291?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1589610833901-8e91851e2291?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1589610833901-8e91851e2291?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 320,
    "name": "Hobbiton",
    "location": "Matamata",
    "country": "New Zealand",
    "continent": "Oceania",
    "type": "Movie Set",
    "kebabId": "hobbiton",
    "description": "Hobbiton is a permanently maintained movie set located on a working farm near Matamata crafted for Peter Jackson's acclaimed film adaptations of J.R.R. Tolkien's works. The site features picturesque rolling hills lush pastures and iconic Hobbit holes notably Bilbo and Frodo Baggins' Bag End. Since opening to the public Hobbiton has become one of New Zealand's top tourism destinations offering guided tours into the heart of Middle-earth's cinematic magic.",
    "yearBuilt": 1999,
    "height": null,
    "latitude": -37.8722,
    "longitude": 175.6823,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/17824132/pexels-photo-17824132.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/17824132/pexels-photo-17824132.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/17824132/pexels-photo-17824132.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/17824132/pexels-photo-17824132.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/17824132/pexels-photo-17824132.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/17824132/pexels-photo-17824132.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 321,
    "name": "Batu Caves",
    "location": "Selangor",
    "country": "Malaysia",
    "continent": "Oceania",
    "type": "Cave Temple",
    "kebabId": "batu-caves",
    "description": "Batu Caves is a striking 325-meter limestone hill complex featuring a network of caves and cave temples in Gombak about 13 km north of Kuala Lumpur. Famed for its vibrant Thaipusam festival the site features Malaysia's most prominent Hindu shrine dedicated to Lord Murugan fronted by a 43-meter-tall golden statue. The caves serve religious natural and cultural roles drawing pilgrims tourists and nature enthusiasts to their awe-inspiring interior and colorful temple steps.",
    "yearBuilt": 1891,
    "height": null,
    "latitude": 3.2375,
    "longitude": 101.6839,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1639676529084-ac1c9399c0bf?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1639676529084-ac1c9399c0bf?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1639676529084-ac1c9399c0bf?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1639676529084-ac1c9399c0bf?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1639676529084-ac1c9399c0bf?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1639676529084-ac1c9399c0bf?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 322,
    "name": "Burj Khalifa",
    "location": "Dubai",
    "country": "UAE",
    "continent": "Middle East",
    "type": "Skyscraper",
    "kebabId": "burj-khalifa",
    "description": "The Burj Khalifa is the tallest building in the world reaching a height of 828 meters including its spire. Located in downtown Dubai it was officially opened in January 2010. The structure was designed by Adrian Smith of Skidmore Owings & Merrill and features a blend of commercial residential and hotel uses. Its design draws inspiration from Islamic architecture and its observation decks offer panoramic views of Dubai and the surrounding desert. The Burj Khalifa represents a feat of modern engineering and urban ambition.",
    "yearBuilt": 2004,
    "height": null,
    "latitude": 25.1972,
    "longitude": 55.2744,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1671818786462-b55a5bb49a23?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1671818786462-b55a5bb49a23?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1671818786462-b55a5bb49a23?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1671818786462-b55a5bb49a23?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1671818786462-b55a5bb49a23?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1671818786462-b55a5bb49a23?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 323,
    "name": "Western Wall",
    "location": "Jerusalem",
    "country": "Israel",
    "continent": "Middle East",
    "type": "Religious Site",
    "kebabId": "western-wall",
    "description": "The Western Wall sometimes called the Wailing Wall is a surviving remnant of the ancient wall that surrounded the Second Jewish Temple's courtyard on the Temple Mount. Constructed by Herod the Great as part of a monumental expansion of the Second Temple beginning around 19 BCE the limestone wall stretches about 488 meters though only about 60 meters are visible today. It stands as a revered site of prayer and pilgrimage for Jews from across the world and has also become an iconic symbol in the wider Abrahamic religious tradition. The plaza before the wall is a focal point of Jewish religious life attracting millions of visitors wishing to recite prayers and insert written notes into the wall's crevices.",
    "yearBuilt": 19,
    "height": null,
    "latitude": 31.7768,
    "longitude": 35.2345,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1560165454-9e1d2ae27390?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1560165454-9e1d2ae27390?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1560165454-9e1d2ae27390?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1560165454-9e1d2ae27390?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1560165454-9e1d2ae27390?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1560165454-9e1d2ae27390?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 324,
    "name": "Church of the Holy Sepulchre",
    "location": "Jerusalem",
    "country": "Israel",
    "continent": "Middle East",
    "type": "Church",
    "kebabId": "church-of-the-holy-sepulchre",
    "description": "The Church of the Holy Sepulchre located in Jerusalem's Christian Quarter is considered by many as the holiest site in Christianity. Built under the orders of Emperor Constantine the Great the complex is believed to contain both the site of the crucifixion (Golgotha) and the tomb where Jesus was buried and resurrected. Its architecture reveals the layered history of the site with Byzantine Crusader and subsequent structures. The church is a focal point for Christian pilgrimage managed by several Christian denominations and plays a central role in global religious and cultural history.",
    "yearBuilt": 326,
    "height": null,
    "latitude": 31.7786,
    "longitude": 35.2297,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1658035238333-703e92ebddaf?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1658035238333-703e92ebddaf?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1658035238333-703e92ebddaf?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1658035238333-703e92ebddaf?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1658035238333-703e92ebddaf?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1658035238333-703e92ebddaf?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 325,
    "name": "Jerash",
    "location": "Jerash",
    "country": "Jordan",
    "continent": "Middle East",
    "type": "Archaeological Site",
    "kebabId": "jerash",
    "description": "Jerash the ancient city known as Gerasa is among the best-preserved Greco-Roman cities in the Middle East. The site is renowned for its colonnaded streets grand temples (notably those dedicated to Zeus and Artemis) Hadrian's Arch agora theaters and expansive hippodrome. Having reached its peak during the Roman period Jerash offers visitors a vivid picture of city life in Roman Decapolis with sprawling ruins that testify to centuries of urban continuity and cultural interchange.",
    "yearBuilt": 1,
    "height": null,
    "latitude": 32.2767,
    "longitude": 35.8917,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1597814419713-99e2923951b6?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1597814419713-99e2923951b6?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1597814419713-99e2923951b6?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1597814419713-99e2923951b6?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1597814419713-99e2923951b6?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1597814419713-99e2923951b6?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 326,
    "name": "Palm Jumeirah",
    "location": "Dubai",
    "country": "UAE",
    "continent": "Middle East",
    "type": "Artificial Island",
    "kebabId": "palm-jumeirah",
    "description": "Palm Jumeirah is an artificial archipelago in the shape of a palm tree constructed on reclaimed land in the Persian Gulf off the coast of Dubai. Developed by Nakheel the Palm quickly became an icon of modern engineering and luxury living. The project features a trunk 16 fronds and a crescent that serves as a breakwater encompassing luxury hotels beachfront villas upscale apartments and entertainment destinations. Its creation is a symbol of Dubai's ambition and rapid transformation into a global tourism and real estate hub.",
    "yearBuilt": 2001,
    "height": null,
    "latitude": 25.1083,
    "longitude": 55.1333,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1682410601904-24ec1d9858e6?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1682410601904-24ec1d9858e6?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1682410601904-24ec1d9858e6?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1682410601904-24ec1d9858e6?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1682410601904-24ec1d9858e6?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1682410601904-24ec1d9858e6?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 327,
    "name": "Sheikh Zayed Grand Mosque",
    "location": "Abu Dhabi",
    "country": "UAE",
    "continent": "Middle East",
    "type": "Mosque",
    "kebabId": "sheikh-zayed-grand-mosque",
    "description": "The Sheikh Zayed Grand Mosque completed in 2007 is the largest mosque in the United Arab Emirates and a masterpiece of contemporary Islamic architecture. Designed to embody Islamic cultural heritage while celebrating innovative engineering the mosque features 82 domes over a thousand columns massive marble courtyards and one of the world's largest hand-knotted carpets. Its snow-white silhouette adorned in semi-precious stones gold and intricate mosaics welcomes worshippers and tourists alike fostering intercultural dialogue and serving as a national emblem of the UAE's vision for openness and cultural tolerance.",
    "yearBuilt": 1996,
    "height": null,
    "latitude": 24.4122,
    "longitude": 54.4747,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1641900039023-589fb5ff48aa?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1641900039023-589fb5ff48aa?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1641900039023-589fb5ff48aa?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1641900039023-589fb5ff48aa?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1641900039023-589fb5ff48aa?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1641900039023-589fb5ff48aa?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 328,
    "name": "Burj Al Arab",
    "location": "Dubai",
    "country": "UAE",
    "continent": "Middle East",
    "type": "Hotel",
    "kebabId": "burj-al-arab",
    "description": "The Burj Al Arab is one of the world's most recognizable hotels built on an artificial island 280 meters off the Dubai coastline. Designed by architect Tom Wright of Atkins the sail-shaped structure rises to 321 meters making it one of the tallest hotels globally. The building's striking form luxurious suites and seven-star reputation have made it a symbol of modern Dubai's ambitions and opulence. Its interiors feature lavish materials such as gold leaf and Carrara marble and the hotel offers some of the most exclusive accommodations and dining experiences in the world.",
    "yearBuilt": 1994,
    "height": null,
    "latitude": 25.1413,
    "longitude": 55.1853,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1569069438599-4b719f7463b4?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1569069438599-4b719f7463b4?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1569069438599-4b719f7463b4?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1569069438599-4b719f7463b4?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1569069438599-4b719f7463b4?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1569069438599-4b719f7463b4?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 329,
    "name": "Persepolis",
    "location": "Fars Province",
    "country": "Iran",
    "continent": "Middle East",
    "type": "Archaeological Site",
    "kebabId": "persepolis",
    "description": "Persepolis once the ceremonial capital of the Achaemenid Empire was founded by Darius I around 518 BCE. Located in present-day Fars Province the ruins include grand staircases imposing columns audience halls (Apadana) intricate reliefs and royal tombs carved into mountainsides. Persepolis was a center for festivals and the official seat for welcoming delegations from across the empire. It was famously sacked by Alexander the Great in 330 BCE. Today Persepolis is a UNESCO World Heritage Site and a timeless testament to the grandeur and artistry of ancient Persia.",
    "yearBuilt": 518,
    "height": null,
    "latitude": 29.9353,
    "longitude": 52.8916,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1562576605-88930bca8574?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1562576605-88930bca8574?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1562576605-88930bca8574?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1562576605-88930bca8574?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1562576605-88930bca8574?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1562576605-88930bca8574?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 330,
    "name": "Naqsh-e Jahan Square",
    "location": "Isfahan",
    "country": "Iran",
    "continent": "Middle East",
    "type": "Square",
    "kebabId": "naqsh-e-jahan-square",
    "description": "Naqsh-e Jahan Square (Imam Square) is a monumental urban space in the heart of Isfahan constructed during the reign of Shah Abbas I of the Safavid dynasty. Measuring 160 by 560 meters the square is surrounded by some of Iran's finest architectural sites: the Shah Mosque Sheikh Lotfollah Mosque Ali Qapu Palace and the historic Qeysarieh Bazaar. Naqsh-e Jahan's harmonious design elaborate geometric layout and decorative tilework exemplify the heights of Persian urban planning and Safavid art. Designated as a UNESCO World Heritage Site it remains a vibrant gathering place symbolizing the cultural and historical legacy of Isfahan.",
    "yearBuilt": 1598,
    "height": null,
    "latitude": 32.6572,
    "longitude": 51.6776,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/30508647/pexels-photo-30508647.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/30508647/pexels-photo-30508647.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/30508647/pexels-photo-30508647.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/30508647/pexels-photo-30508647.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/30508647/pexels-photo-30508647.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/30508647/pexels-photo-30508647.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 331,
    "name": "Baalbek",
    "location": "Baalbek",
    "country": "Lebanon",
    "continent": "Middle East",
    "type": "Archaeological Site",
    "kebabId": "baalbek",
    "description": "Baalbek located in Lebanon's Beqaa Valley is one of the most impressive and well-preserved Roman archaeological sites in the world. Its monumental temples—dedicated to Jupiter Bacchus and Venus—feature towering columns and elaborate carvings exemplifying Imperial Roman architecture. The ruins are remnants of a settlement with even older Phoenician roots serving as both a historic marvel and a symbol of Lebanon's ancient heritage.",
    "yearBuilt": 50,
    "height": null,
    "latitude": 34.0042,
    "longitude": 36.2031,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1608221936411-6598e1185e32?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1608221936411-6598e1185e32?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1608221936411-6598e1185e32?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1608221936411-6598e1185e32?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1608221936411-6598e1185e32?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1608221936411-6598e1185e32?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 332,
    "name": "Cappadocia",
    "location": "Nevşehir Province",
    "country": "Turkey",
    "continent": "Middle East",
    "type": "Historical Region",
    "kebabId": "cappadocia",
    "description": "Cappadocia is a unique historical region in central Turkey renowned for its surreal fairy chimneys extensive cave dwellings and underground cities carved into soft volcanic rock. Over millennia civilizations—from Hittites to early Christians—have left their mark on the landscape making it a UNESCO World Heritage Site. Today it is renowned for its hot air balloon rides above dramatic valleys and ancient troglodyte architecture.",
    "yearBuilt": 750,
    "height": null,
    "latitude": 38.6431,
    "longitude": 34.8318,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/2668314/pexels-photo-2668314.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/2668314/pexels-photo-2668314.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/2668314/pexels-photo-2668314.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/2668314/pexels-photo-2668314.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/2668314/pexels-photo-2668314.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/2668314/pexels-photo-2668314.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 333,
    "name": "Ephesus",
    "location": "İzmir",
    "country": "Turkey",
    "continent": "Middle East",
    "type": "Archaeological Site",
    "kebabId": "ephesus",
    "description": "Ephesus is a legendary ancient city near modern-day Selçuk once a flourishing Greek and Roman metropolis and home to the Temple of Artemis—one of the Seven Wonders of the Ancient World. Its extensive ruins include the grand Library of Celsus Theatre and Temple of Hadrian. As a UNESCO World Heritage Site Ephesus is a testament to the region's historical and cultural significance through millennia.",
    "yearBuilt": 950,
    "height": null,
    "latitude": 37.939,
    "longitude": 27.3414,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1635166045025-b078ac986d77?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1635166045025-b078ac986d77?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1635166045025-b078ac986d77?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1635166045025-b078ac986d77?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1635166045025-b078ac986d77?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1635166045025-b078ac986d77?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 334,
    "name": "Göbekli Tepe",
    "location": "Şanlıurfa",
    "country": "Turkey",
    "continent": "Middle East",
    "type": "Archaeological Site",
    "kebabId": "g-bekli-tepe",
    "description": "Göbekli Tepe whose name means Potbelly Hill in Turkish is regarded as the world's oldest known monumental sanctuary predating Stonehenge by thousands of years. Situated on a rocky hilltop in Southeastern Anatolia this Neolithic site features massive circular structures built with T-shaped limestone pillars many intricately carved with animal reliefs. The site inhabited from about 9500 BCE to 8000 BCE offers unique insights into prehistoric religion before the widespread adoption of agriculture. Investigations here have revolutionized understanding of the transition from hunter-gatherer to sedentary societies as there is little evidence of agriculture or permanent settlement at the time. Its impressive scale and decorated pillars suggest complex social organization among early humans.",
    "yearBuilt": 9500,
    "height": null,
    "latitude": 37.223,
    "longitude": 38.9223,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1654346970959-efc9a1edbdc3?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1654346970959-efc9a1edbdc3?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1654346970959-efc9a1edbdc3?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1654346970959-efc9a1edbdc3?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1654346970959-efc9a1edbdc3?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1654346970959-efc9a1edbdc3?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1555993539-1732b0258235",
      "url": "https://images.unsplash.com/photo-1555993539-1732b0258235",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 335,
    "name": "Obelisk of Theodosius",
    "location": "Istanbul",
    "country": "Turkey",
    "continent": "Middle East",
    "type": "Monument",
    "kebabId": "obelisk-of-theodosius",
    "description": "The Obelisk of Theodosius is an ancient Egyptian obelisk erected in the Hippodrome of Constantinople by Roman Emperor Theodosius I in 390 CE. Originally from the Temple of Karnak in Luxor Egypt it was transported to Constantinople and placed on a marble pedestal. The obelisk features hieroglyphic inscriptions and stands as a testament to the city's rich history spanning Egyptian Roman Byzantine and Ottoman periods.",
    "yearBuilt": 390,
    "height": null,
    "latitude": 41.0054,
    "longitude": 28.9768,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1566930066270-a45117abf293?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1566930066270-a45117abf293?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1566930066270-a45117abf293?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1566930066270-a45117abf293?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1566930066270-a45117abf293?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1566930066270-a45117abf293?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1524231757912-21f4fe3a7200",
      "url": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 336,
    "name": "Basilica Cistern",
    "location": "Istanbul",
    "country": "Turkey",
    "continent": "Middle East",
    "type": "Historical Site",
    "kebabId": "basilica-cistern",
    "description": "The Basilica Cistern is the largest of several hundred ancient cisterns that lie beneath the city of Istanbul. Built in the 6th century during the reign of Byzantine Emperor Justinian I it was constructed using 336 columns many of which were salvaged from ruined temples. The cistern features two Medusa head columns at its northwest corner and was used to store water for the Great Palace and surrounding buildings. Today it is a popular tourist attraction known for its atmospheric lighting and mysterious ambiance.",
    "yearBuilt": 532,
    "height": null,
    "latitude": 41.0086,
    "longitude": 28.9778,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1728361329003-cb7915ce1a9b?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1728361329003-cb7915ce1a9b?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1728361329003-cb7915ce1a9b?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1728361329003-cb7915ce1a9b?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1728361329003-cb7915ce1a9b?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1728361329003-cb7915ce1a9b?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1524231757912-21f4fe3a7200",
      "url": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 337,
    "name": "Topkapi Palace",
    "location": "Istanbul",
    "country": "Turkey",
    "continent": "Middle East",
    "type": "Palace",
    "kebabId": "topkapi-palace",
    "description": "Topkapi Palace is a large museum in Istanbul that was the main residence and administrative headquarters of the Ottoman sultans for approximately 400 years. Built in the 15th century by Mehmed the Conqueror the palace complex includes four main courtyards and many smaller buildings. It houses important relics including the Prophet Muhammad's cloak and sword as well as extensive collections of Ottoman artifacts jewelry and manuscripts. The palace offers stunning views of the Golden Horn and Bosphorus.",
    "yearBuilt": 1459,
    "height": null,
    "latitude": 41.0115,
    "longitude": 28.9834,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1663213774378-b83b5f0bceb7?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1663213774378-b83b5f0bceb7?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1663213774378-b83b5f0bceb7?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1663213774378-b83b5f0bceb7?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1663213774378-b83b5f0bceb7?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1663213774378-b83b5f0bceb7?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1524231757912-21f4fe3a7200",
      "url": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 338,
    "name": "Galata Tower",
    "location": "Istanbul",
    "country": "Turkey",
    "continent": "Middle East",
    "type": "Tower",
    "kebabId": "galata-tower",
    "description": "The Galata Tower is a medieval stone tower in the Galata quarter of Istanbul. Built in 1348 by the Genoese as part of the defense wall surrounding their colony at Constantinople it stands 67 meters tall and offers panoramic views of the city. The tower has served various purposes throughout history including as a fire lookout and today houses a restaurant and observation deck. It is one of the most recognizable landmarks of Istanbul.",
    "yearBuilt": 1348,
    "height": null,
    "latitude": 41.0256,
    "longitude": 28.9744,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1524231757912-21f4fe3a7200",
      "url": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 339,
    "name": "Casa Batlló",
    "location": "Barcelona",
    "country": "Spain",
    "continent": "Europe",
    "type": "Building",
    "kebabId": "casa-batll",
    "description": "Casa Batlló is a building in the center of Barcelona designed by Antoni Gaudí. Built between 1904 and 1906 it is considered one of his masterpieces. The building features an undulating stone facade with balconies that look like masks and a roof that resembles a dragon's back. The interior is equally imaginative with curved walls and ceilings organic shapes and extensive use of mosaic tiles. It is a UNESCO World Heritage Site and one of the most visited attractions in Barcelona.",
    "yearBuilt": 1906,
    "height": null,
    "latitude": 41.3917,
    "longitude": 2.165,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1587043211963-0352f1528f6a?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1587043211963-0352f1528f6a?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1587043211963-0352f1528f6a?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1587043211963-0352f1528f6a?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1587043211963-0352f1528f6a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1587043211963-0352f1528f6a?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1524231757912-21f4fe3a7200",
      "url": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 340,
    "name": "Arc de Triomf Barcelona",
    "location": "Barcelona",
    "country": "Spain",
    "continent": "Europe",
    "type": "Monument",
    "kebabId": "arc-de-triomf-barcelona",
    "description": "The Arc de Triomf is a triumphal arch in Barcelona built as the main entrance to the 1888 Barcelona World Fair. Designed by architect Josep Vilaseca i Casanovas it features a red brickwork facade with stone sculptures and reliefs. Unlike the Parisian Arc de Triomphe this arch was built as a temporary structure but was preserved due to its popularity. It stands at the intersection of Passeig de Lluís Companys and Passeig de Sant Joan.",
    "yearBuilt": 1888,
    "height": null,
    "latitude": 41.3911,
    "longitude": 2.1808,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1656062597132-1c28430c3b84?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1656062597132-1c28430c3b84?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1656062597132-1c28430c3b84?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1656062597132-1c28430c3b84?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1656062597132-1c28430c3b84?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1656062597132-1c28430c3b84?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1524231757912-21f4fe3a7200",
      "url": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 341,
    "name": "Ronda",
    "location": "Málaga",
    "country": "Spain",
    "continent": "Europe",
    "type": "Historical Site",
    "kebabId": "ronda",
    "description": "Ronda is a mountaintop city in Málaga province known for its dramatic location on a deep gorge. The city is divided by the El Tajo gorge with the Puente Nuevo bridge spanning the 120-meter-deep chasm. Ronda is one of Spain's oldest cities with origins dating back to the 6th century BCE. It features well-preserved Moorish architecture including the Arab Baths and the Mondragón Palace. The city's dramatic setting and rich history make it a popular tourist destination.",
    "yearBuilt": 600,
    "height": null,
    "latitude": 36.742,
    "longitude": -5.1661,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1728813359280-e80d5aca5f40?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1728813359280-e80d5aca5f40?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1728813359280-e80d5aca5f40?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1728813359280-e80d5aca5f40?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1728813359280-e80d5aca5f40?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1728813359280-e80d5aca5f40?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1524231757912-21f4fe3a7200",
      "url": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 342,
    "name": "Plaza de España Sevilla",
    "location": "Sevilla",
    "country": "Spain",
    "continent": "Europe",
    "type": "Square",
    "kebabId": "plaza-de-espa-a-sevilla",
    "description": "Plaza de España is a plaza in the Parque de María Luisa in Seville built in 1928 for the Ibero-American Exposition of 1929. It is a landmark example of the Regionalism Architecture mixing elements of the Renaissance Revival and Moorish Revival styles. The plaza is a huge half-circle with buildings continually running around the edge accessible over the moat by numerous bridges representing the four ancient kingdoms of Spain.",
    "yearBuilt": 1928,
    "height": null,
    "latitude": 37.3772,
    "longitude": -5.9869,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1636060805221-6859749cdcfb?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1636060805221-6859749cdcfb?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1636060805221-6859749cdcfb?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1636060805221-6859749cdcfb?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1636060805221-6859749cdcfb?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1636060805221-6859749cdcfb?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1524231757912-21f4fe3a7200",
      "url": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 343,
    "name": "Jardin Majorelle",
    "location": "Marrakech",
    "country": "Morocco",
    "continent": "Africa",
    "type": "Garden",
    "kebabId": "jardin-majorelle",
    "description": "Jardin Majorelle is a two-and-a-half-acre botanical garden and artist's landscape garden in Marrakech Morocco. It was designed by the expatriate French artist Jacques Majorelle in the 1920s and 1930s. The garden has been open to the public since 1947. Since 1980 the garden has been owned by Yves Saint-Laurent and Pierre Bergé. The garden is a popular tourist attraction and is known for its distinctive blue color.",
    "yearBuilt": 1920,
    "height": null,
    "latitude": 31.6415,
    "longitude": -7.9891,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1729456229097-e60798212180?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1729456229097-e60798212180?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1729456229097-e60798212180?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1729456229097-e60798212180?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1729456229097-e60798212180?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1729456229097-e60798212180?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1524231757912-21f4fe3a7200",
      "url": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 344,
    "name": "Bahia Palace",
    "location": "Marrakech",
    "country": "Morocco",
    "continent": "Africa",
    "type": "Palace",
    "kebabId": "bahia-palace",
    "description": "The Bahia Palace is a palace and a set of gardens located in Marrakech Morocco. It was built in the late 19th century by Si Moussa grand vizier of the sultan for his personal use. The palace is set in extensive gardens and contains a riad garden with rooms opening onto courtyards. The palace is a popular tourist attraction and is known for its beautiful architecture and gardens.",
    "yearBuilt": 1894,
    "height": null,
    "latitude": 31.6295,
    "longitude": -7.9811,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1663297824621-27c5ff4cc826?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1663297824621-27c5ff4cc826?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1663297824621-27c5ff4cc826?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1663297824621-27c5ff4cc826?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1663297824621-27c5ff4cc826?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1663297824621-27c5ff4cc826?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1524231757912-21f4fe3a7200",
      "url": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 345,
    "name": "Medersa Ben Youssef",
    "location": "Marrakech",
    "country": "Morocco",
    "continent": "Africa",
    "type": "Madrasa",
    "kebabId": "medersa-ben-youssef",
    "description": "The Medersa Ben Youssef is a madrasa in the medina quarter of Marrakech Morocco. It was the largest madrasa in Morocco and is considered one of the finest examples of Moroccan architecture. The madrasa was built by the Saadian sultan Abdallah al-Ghalib in 1564-1565. The building is known for its beautiful courtyard with a large pool and its intricate stucco and tile work.",
    "yearBuilt": 1565,
    "height": null,
    "latitude": 31.6339,
    "longitude": -7.9861,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1719084198651-5ac167cb3e6e?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1719084198651-5ac167cb3e6e?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1719084198651-5ac167cb3e6e?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1719084198651-5ac167cb3e6e?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1719084198651-5ac167cb3e6e?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1719084198651-5ac167cb3e6e?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1524231757912-21f4fe3a7200",
      "url": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 346,
    "name": "Koutoubia Mosque",
    "location": "Marrakech",
    "country": "Morocco",
    "continent": "Africa",
    "type": "Mosque",
    "kebabId": "koutoubia-mosque",
    "description": "The Koutoubia Mosque is the largest mosque in Marrakech Morocco. The mosque was completed under the reign of the Almohad Caliph Yaqub al-Mansur and was used as a model for the Giralda in Seville and for the Hassan Tower in Rabat. The mosque is known for its distinctive minaret which is 77 meters tall and is decorated with geometric patterns and calligraphy.",
    "yearBuilt": 1158,
    "height": null,
    "latitude": 31.6245,
    "longitude": -7.9896,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1716146743408-474521ee8039?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1716146743408-474521ee8039?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1716146743408-474521ee8039?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1716146743408-474521ee8039?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1716146743408-474521ee8039?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1716146743408-474521ee8039?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1524231757912-21f4fe3a7200",
      "url": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 347,
    "name": "Jardin Secret",
    "location": "Marrakech",
    "country": "Morocco",
    "continent": "Africa",
    "type": "Garden",
    "kebabId": "jardin-secret",
    "description": "Jardin Secret is a garden in the medina of Marrakech Morocco. The garden was created in the 16th century and was restored in the 21st century. The garden is divided into two parts: an Islamic garden and an exotic garden. The Islamic garden features geometric patterns and fountains while the exotic garden contains plants from around the world. The garden is a peaceful oasis in the bustling medina.",
    "yearBuilt": 1500,
    "height": null,
    "latitude": 31.6339,
    "longitude": -7.9861,
    "images": {
      "thumbnail": {
        "webp": "https://images.unsplash.com/photo-1692089265753-de18d2e6c559?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.unsplash.com/photo-1692089265753-de18d2e6c559?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.unsplash.com/photo-1692089265753-de18d2e6c559?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.unsplash.com/photo-1692089265753-de18d2e6c559?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.unsplash.com/photo-1692089265753-de18d2e6c559?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.unsplash.com/photo-1692089265753-de18d2e6c559?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1524231757912-21f4fe3a7200",
      "url": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
      "photographer": "",
      "photographerUrl": ""
    }
  },
  {
    "id": 348,
    "name": "El Badi Palace",
    "location": "Marrakech",
    "country": "Morocco",
    "continent": "Africa",
    "type": "Palace",
    "kebabId": "el-badi-palace",
    "description": "El Badi Palace is a ruined palace in Marrakech Morocco. The palace was built by the Saadian sultan Ahmad al-Mansur in the late 16th century. The palace was known for its beautiful architecture and was considered one of the most magnificent palaces in the world. The palace was destroyed in the 17th century and today only ruins remain. The ruins are still impressive and give visitors a sense of the palace's former grandeur.",
    "yearBuilt": 1578,
    "height": null,
    "latitude": 31.6295,
    "longitude": -7.9811,
    "images": {
      "thumbnail": {
        "webp": "https://images.pexels.com/photos/15260622/pexels-photo-15260622.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        "jpg": "https://images.pexels.com/photos/15260622/pexels-photo-15260622.jpeg?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
      },
      "medium": {
        "webp": "https://images.pexels.com/photos/15260622/pexels-photo-15260622.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        "jpg": "https://images.pexels.com/photos/15260622/pexels-photo-15260622.jpeg?w=800&h=600&fit=crop&crop=center&auto=format&q=85"
      },
      "large": {
        "webp": "https://images.pexels.com/photos/15260622/pexels-photo-15260622.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        "jpg": "https://images.pexels.com/photos/15260622/pexels-photo-15260622.jpeg?w=1200&h=900&fit=crop&crop=center&auto=format&q=90"
      }
    },
    "attribution": {
      "source": "Unsplash",
      "photoId": "1524231757912-21f4fe3a7200",
      "url": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
      "photographer": "",
      "photographerUrl": ""
    }
  }
]

// Export additional utilities
export const MONUMENTS_DATABASE = monuments
export default monuments

// Helper function to get monument by ID
export function getMonumentById(id: number): Monument | undefined {
  return monuments.find(monument => monument.id === id)
}
