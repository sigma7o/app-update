const quizData = [
  {
    topicId: "pol-topic-1",
    topicTitle: "Indian Political System",
    topicImageUrl: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg",
    description: "An overview of India's parliamentary, federal, and multi-party system.",
    source: "Photo by Sudipta Mondal from Pexels: https://www.pexels.com/photo/taj-mahal-and-the-four-minarets-1603650/"
  },
  {
    topicId: "pol-topic-2",
    topicTitle: "U.S. Government & Politics",
    topicImageUrl: "https://images.pexels.com/photos/129112/pexels-photo-129112.jpeg",
    description: "A look into the American presidential system, Congress, and Supreme Court.",
    source: "Photo by Aaron Kittredge from Pexels: https://www.pexels.com/photo/white-house-129112/"
  },
  {
    topicId: "pol-topic-3",
    topicTitle: "Chinese Political System",
    topicImageUrl: "https://images.pexels.com/photos/11731726/pexels-photo-11731726.jpeg",
    description: "An exploration of China's single-party system led by the Communist Party.",
    source: "Photo by 征宇 郑 from Pexels: https://www.pexels.com/photo/statue-of-mao-before-state-building-in-chinese-city-11731726/"
  },
  {
    topicId: "pol-topic-4",
    topicTitle: "French Republic's Government",
    topicImageUrl: "https://images.pexels.com/photos/5781917/pexels-photo-5781917.jpeg",
    description: "Examining France's semi-presidential system and its unique political institutions.",
    source: "Photo by Atypeek Dgn from Pexels: https://www.pexels.com/photo/french-flag-against-blue-sky-5781917/"
  },
  {
    topicId: "pol-topic-5",
    topicTitle: "Spanish Parliamentary Monarchy",
    topicImageUrl: "https://images.pexels.com/photos/32979843/pexels-photo-32979843.jpeg",
    description: "Exploring Spain's constitutional monarchy, the role of the King, and its government.",
    source: "Photo by Regan Dsouza from Pexels: https://www.pexels.com/photo/historic-building-with-tower-in-avila-spain-32979843/"
  },
  {
    topicId: "pol-topic-6",
    topicTitle: "German Federal Republic",
    topicImageUrl: "https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg",
    description: "Understanding Germany's federal parliamentary republic and coalition politics.",
    source: "Photo by Ingo Joseph from Pexels: https://www.pexels.com/photo/germany-flag-in-front-of-building-109629/"
  },
  {
    topicId: "pol-topic-7",
    topicTitle: "General Traffic in China",
    topicImageUrl: "https://images.pexels.com/photos/8065259/pexels-photo-8065259.jpeg",
    description: "Photo capturing daily city traffic, representing governance infrastructure.",
    source: "Photo by Yelena from Pexels: https://www.pexels.com/photo/photo-of-vehicles-on-asphalt-road-during-daytime-8065259/"
  },
  {
    topicId: "pol-topic-8",
    topicTitle: "Indian Democracy Overview",
    topicImageUrl: "https://images.pexels.com/photos/32979843/pexels-photo-32979843.jpeg",
    description: "Understanding the democratic foundations of India and its Constitution.",
    source: "Photo by Regan Dsouza from Pexels: https://www.pexels.com/photo/historic-building-with-tower-in-avila-spain-32979843/"
  },
  {
    topicId: "pol-topic-9",
    topicTitle: "The White House",
    topicImageUrl: "https://images.pexels.com/photos/129112/pexels-photo-129112.jpeg",
    description: "Seat of the U.S. President and a key symbol of executive power.",
    source: "Photo by Aaron Kittredge from Pexels: https://www.pexels.com/photo/white-house-129112/"
  },
  {
    topicId: "pol-topic-10",
    topicTitle: "Chinese Leadership Icon",
    topicImageUrl: "https://images.pexels.com/photos/11731726/pexels-photo-11731726.jpeg",
    description: "Statue representing authority in modern Chinese history.",
    source: "Photo by 征宇 郑 from Pexels: https://www.pexels.com/photo/statue-of-mao-before-state-building-in-chinese-city-11731726/"
  },
  {
    topicId: "pol-topic-11",
    topicTitle: "French Symbolism",
    topicImageUrl: "https://images.pexels.com/photos/5781917/pexels-photo-5781917.jpeg",
    description: "The tricolour flag as a lasting symbol of French governance.",
    source: "Photo by Atypeek Dgn from Pexels: https://www.pexels.com/photo/french-flag-against-blue-sky-5781917/"
  },
  {
    topicId: "pol-topic-12",
    topicTitle: "Germany and the EU",
    topicImageUrl: "https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg",
    description: "Germany’s influence within the European Union and its policies.",
    source: "Photo by Ingo Joseph from Pexels: https://www.pexels.com/photo/germany-flag-in-front-of-building-109629/"
  },
  {
    topicId: "pol-topic-13",
    topicTitle: "Urban Governance in Asia",
    topicImageUrl: "https://images.pexels.com/photos/8065259/pexels-photo-8065259.jpeg",
    description: "Daily life and government infrastructure as seen through traffic systems.",
    source: "Photo by Yelena from Pexels: https://www.pexels.com/photo/photo-of-vehicles-on-asphalt-road-during-daytime-8065259/"
  },
  {
    topicId: "pol-topic-14",
    topicTitle: "Taj Mahal and Politics",
    topicImageUrl: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg",
    description: "Cultural identity and its impact on political symbolism in India.",
    source: "Photo by Sudipta Mondal from Pexels: https://www.pexels.com/photo/taj-mahal-and-the-four-minarets-1603650/"
  },
  {
    topicId: "pol-topic-15",
    topicTitle: "Spanish Political Structures",
    topicImageUrl: "https://images.pexels.com/photos/32979843/pexels-photo-32979843.jpeg",
    description: "Architecture reflecting political history in Spain.",
    source: "Photo by Regan Dsouza from Pexels: https://www.pexels.com/photo/historic-building-with-tower-in-avila-spain-32979843/"
  },
  {
    topicId: "pol-topic-16",
    topicTitle: "U.S. Executive Branch",
    topicImageUrl: "https://images.pexels.com/photos/129112/pexels-photo-129112.jpeg",
    description: "The White House and its role in American leadership.",
    source: "Photo by Aaron Kittredge from Pexels: https://www.pexels.com/photo/white-house-129112/"
  },
  {
    topicId: "pol-topic-17",
    topicTitle: "European Flags & Identity",
    topicImageUrl: "https://images.pexels.com/photos/5781917/pexels-photo-5781917.jpeg",
    description: "The role of flags in nation-building and governance.",
    source: "Photo by Atypeek Dgn from Pexels: https://www.pexels.com/photo/french-flag-against-blue-sky-5781917/"
  },
  {
    topicId: "pol-topic-18",
    topicTitle: "Mao and Modern China",
    topicImageUrl: "https://images.pexels.com/photos/11731726/pexels-photo-11731726.jpeg",
    description: "Political legacy and iconography in the People’s Republic of China.",
    source: "Photo by 征宇 郑 from Pexels: https://www.pexels.com/photo/statue-of-mao-before-state-building-in-chinese-city-11731726/"
  },
  {
    topicId: "pol-topic-19",
    topicTitle: "Germany’s Flag in Politics",
    topicImageUrl: "https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg",
    description: "Symbolism and national pride in Germany’s governance.",
    source: "Photo by Ingo Joseph from Pexels: https://www.pexels.com/photo/germany-flag-in-front-of-building-109629/"
  },
  {
    topicId: "pol-topic-20",
    topicTitle: "Indian Government and Heritage",
    topicImageUrl: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg",
    description: "The cultural and political significance of historic Indian monuments.",
    source: "Photo by Sudipta Mondal from Pexels: https://www.pexels.com/photo/taj-mahal-and-the-four-minarets-1603650/"
  }
];

export default quizData;
