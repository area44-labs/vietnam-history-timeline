import { defineLifeline } from "./lifeline-data";

/**
 * Timeline data for the History of Vietnam (1945 - 2026).
 * "Age" row is redefined to represent Years of Statehood / Modern Independence.
 */
export const vietnamLifeline = defineLifeline({
  slug: "vietnam",
  name: "History of Vietnam",
  birthYear: 1945,
  endYear: 2026,
  description:
    "A chronological journey through modern Vietnam - from independence declaration to a dynamic thriving nation.",
  legend: [
    { type: "mentor", label: "Historical Leaders & Figures" },
    { type: "met", label: "Allies & Normalizations" },
  ],
  milestones: {
    1945: {
      id: "independence",
      events: [
        {
          text: "President Ho Chi Minh declared Vietnam's Independence in Ba Dinh Square, Hanoi, establishing the Democratic Republic of Vietnam.",
          image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Declaration_of_independence_of_Vietnam_in_Ba_Dinh_Square.png",
            alt: "Ho Chi Minh reading the Declaration of Independence",
          },
        },
      ],
      mentors: [
        {
          name: "Ho Chi Minh",
          role: "President",
          color: "#DA251D",
        },
      ],
    },
    1954: {
      id: "dienbienphu",
      events: [
        {
          text: "The Battle of Dien Bien Phu ended with a decisive Vietnamese victory, concluding the First Indochina War and leading to the Geneva Accords.",
          image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/5/52/Victory_at_Dien_Bien_Phu_1954.png",
            alt: "Victory flag raised at Dien Bien Phu",
          },
        },
      ],
      mentors: [
        {
          name: "Vo Nguyen Giap",
          role: "General",
          color: "#DA251D",
        },
      ],
    },
    1975: {
      id: "reunification",
      events: [
        {
          text: "The Great Spring Victory of April 30 marked the end of the Vietnam War and initiated the historic reunification of North and South Vietnam.",
          image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Reunification_Express_train.jpg",
            alt: "Reunification of Vietnam",
          },
        },
      ],
    },
    1986: {
      id: "doimoi",
      events: [
        {
          text: "The 6th National Congress of the CPV officially launched the Doi Moi reforms, paving the way for economic liberalization and global integration.",
          image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Doi_Moi_period_exhibit_at_Vietnam_Museum_of_Ethnology.jpg",
            alt: "Doi Moi reform period exhibit",
          },
        },
      ],
    },
    1995: {
      id: "normalization",
      events: [
        "Vietnam normalized diplomatic relations with the United States and officially joined the Association of Southeast Asian Nations (ASEAN).",
      ],
      met: [
        {
          name: "ASEAN",
        },
      ],
    },
    2007: {
      id: "wto",
      events: [
        "Vietnam officially became the 150th member of the World Trade Organization (WTO), marking a massive milestone in global economic integration.",
      ],
    },
    2020: {
      id: "asean-chair",
      events: [
        "Vietnam successfully served as the ASEAN Chair and a non-permanent member of the United Nations Security Council.",
      ],
    },
    2026: {
      id: "modern-vietnam",
      events: [
        {
          text: "Today, Vietnam is one of Asia's fastest-growing economies, looking confidently towards a resilient and innovative future. 🇻🇳🎆",
          effect: "fireworks",
        },
      ],
    },
  },
});
