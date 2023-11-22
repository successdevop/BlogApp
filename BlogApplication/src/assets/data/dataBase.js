import { nanoid } from "nanoid";
import {
  authorA,
  authorB,
  authorC,
  authorD,
  authorE,
  authorF,
  authorG,
  authorH,
  bizA,
  bizB,
  bizC,
  bizD,
  bizE,
  bizF,
  bizG,
  bizH,
  econsA,
  econsB,
  econsC,
  econsD,
  econsE,
  econsF,
  econsG,
  econsH,
  startupA,
  startupB,
  startupC,
  startupD,
  startupE,
  startupF,
  startupG,
  startupH,
  techA,
  techB,
  techC,
  techD,
  techE,
  techF,
  techG,
  techH,
} from "../../utility/images";

export const dataBase = [
  {
    id: nanoid(),
    authorName: "Floyd Miles",
    authorImage: authorA,
    authorJob: "Content writer",
    posts: [
      {
        postCategory: "Startup",
        postTitle: "Design tips for designers that cover everything you need",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "May 23, 2023",
        postImage: startupA,
      },
      {
        feature: "feature",
        postCategory: "Business",
        postTitle: "How to build rapport with your web design clients",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "June 15, 2023",
        postImage: bizA,
      },
      {
        postCategory: "Technology",
        postTitle: "8 Figma design systems you can download for free today",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "August 25, 2023",
        postImage: techA,
      },
      {
        postCategory: "Economy",
        postTitle: "Font sizes in UI design: The complete guide to follow",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "July 25, 2023",
        postImage: econsA,
      },
    ],
  },

  {
    id: nanoid(),
    authorName: "Dianne Russell",
    authorImage: authorB,
    authorJob: "Sales Analyst",
    posts: [
      {
        feature: "feature",
        postCategory: "Startup",
        postTitle: "Logo design trends to avoid in 2022",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "January 23, 2023",
        postImage: startupB,
      },
      {
        postCategory: "Business",
        postTitle: "Our Biggest Failure – And How We’ve Overcome It",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "February 15, 2023",
        postImage: bizB,
      },
      {
        postCategory: "Technology",
        postTitle:
          "How does cryptocurrency impact financial security and financial health?",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "March 04, 2023",
        postImage: techB,
      },
      {
        postCategory: "Economy",
        postTitle: " evolution of small businesses in the digital era",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "July 25, 2023",
        postImage: econsB,
      },
    ],
  },

  {
    id: nanoid(),
    authorName: "Jenny Wilson",
    authorImage: authorC,
    authorJob: "Digital Marketer",
    posts: [
      {
        postCategory: "Startup",
        postTitle: "Applying Machine Learning for Real Product Benefit",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "September 23, 2021",
        postImage: startupC,
      },
      {
        postCategory: "Business",
        postTitle:
          "The role of financial managers in maintaining records of business expenses",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "November 15, 2022",
        postImage: bizC,
      },
      {
        feature: "feature",
        postCategory: "Technology",
        postTitle:
          "What benefits can solar geoengineering provide? Can they outweigh the severe risks?",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "December 17, 2023",
        postImage: techC,
      },
      {
        postCategory: "Economy",
        postTitle:
          "Understanding the process of taxation and its relation to the profit of the business",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "March 25, 2023",
        postImage: econsC,
      },
    ],
  },

  {
    id: nanoid(),
    authorName: "Leslie Alexander",
    authorImage: authorD,
    authorJob: "Business Analyst",
    posts: [
      {
        postCategory: "Startup",
        postTitle: "Funding For Metaverse Startups Drops: what's next?",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "April 23, 2023",
        postImage: startupD,
      },
      {
        postCategory: "Business",
        postTitle:
          "The rise of the foreign exchange market in the era of globalization",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "May 15, 2022",
        postImage: bizD,
      },
      {
        postCategory: "Technology",
        postTitle:
          "How has the relationship between art and technology evolved over time?",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "June 17, 2022",
        postImage: techD,
      },
      {
        postCategory: "Economy",
        postTitle:
          "A comparative analysis of business laws in the Western and Eastern World",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "July 25, 2021",
        postImage: econsD,
      },
    ],
  },

  {
    id: nanoid(),
    authorName: "Guy Hawkins",
    authorImage: authorE,
    authorJob: "UI/UX Designer",
    posts: [
      {
        postCategory: "Startup",
        postTitle: "Design tips for designers that cover everything you need",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "May 23, 2023",
        postImage: startupE,
      },
      {
        postCategory: "Business",
        postTitle: "How to build rapport with your web design clients",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "June 15, 2023",
        postImage: bizE,
      },
      {
        postCategory: "Technology",
        postTitle: "8 Figma design systems you can download for free today",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "August 25, 2023",
        postImage: techE,
      },
      {
        postCategory: "Economy",
        postTitle: "Font sizes in UI design: The complete guide to follow",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "July 25, 2023",
        postImage: econsE,
      },
    ],
  },

  {
    id: nanoid(),
    authorName: "Eleanor Pena",
    authorImage: authorF,
    authorJob: "Developer",
    posts: [
      {
        postCategory: "Startup",
        postTitle: "Logo design trends to avoid in 2022",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "January 23, 2023",
        postImage: startupF,
      },
      {
        postCategory: "Business",
        postTitle: "Our Biggest Failure – And How We’ve Overcome It",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "February 15, 2023",
        postImage: bizF,
      },
      {
        postCategory: "Technology",
        postTitle:
          "How does cryptocurrency impact financial security and financial health?",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "March 04, 2023",
        postImage: techF,
      },
      {
        postCategory: "Economy",
        postTitle: " evolution of small businesses in the digital era",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "July 25, 2023",
        postImage: econsF,
      },
    ],
  },

  {
    id: nanoid(),
    authorName: "Robert Fox",
    authorImage: authorG,
    authorJob: "Product Manager",
    posts: [
      {
        postCategory: "Startup",
        postTitle: "Applying Machine Learning for Real Product Benefit",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "September 23, 2021",
        postImage: startupG,
      },
      {
        postCategory: "Business",
        postTitle:
          "The role of financial managers in maintaining records of business expenses",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "November 15, 2022",
        postImage: bizG,
      },
      {
        postCategory: "Technology",
        postTitle:
          "What benefits can solar geoengineering provide? Can they outweigh the severe risks?",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "December 17, 2023",
        postImage: techG,
      },
      {
        postCategory: "Economy",
        postTitle:
          "Understanding the process of taxation and its relation to the profit of the business",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "March 25, 2023",
        postImage: econsG,
      },
    ],
  },

  {
    id: nanoid(),
    authorName: "Jacob Jones",
    authorImage: authorH,
    authorJob: "HR Manager",
    posts: [
      {
        postCategory: "Startup",
        postTitle: "Funding For Metaverse Startups Drops: what's next?",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "April 23, 2023",
        postImage: startupH,
      },
      {
        postCategory: "Business",
        postTitle:
          "The rise of the foreign exchange market in the era of globalization",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "May 15, 2022",
        postImage: bizH,
      },
      {
        postCategory: "Technology",
        postTitle:
          "How has the relationship between art and technology evolved over time?",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "June 17, 2022",
        postImage: techH,
      },
      {
        postCategory: "Economy",
        postTitle:
          "A comparative analysis of business laws in the Western and Eastern World",
        postContent:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        postDate: "July 25, 2021",
        postImage: econsH,
      },
    ],
  },
];
