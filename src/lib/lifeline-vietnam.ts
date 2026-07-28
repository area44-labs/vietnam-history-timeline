import { defineLifeline } from "./lifeline-data";

/**
 * Timeline data for the History of Vietnam (1945 - 2026).
 * "Age" row is redefined to represent Years of Statehood / Modern Independence.
 */
export const vietnamLifeline = defineLifeline({
  slug: "vietnam",
  name: "Vietnam History Timeline",
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
            src: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Ba_Dinh_Square_September_2nd,_1945.jpg",
            alt: "Ho Chi Minh reading the Declaration of Independence",
          },
        },
      ],
      mentors: [
        {
          name: "Ho Chi Minh",
          role: "President",
          color: "#DA251D",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Nguyen_A%C3%AFn_Nu%C3%A4%27C_%28Ho-Chi-Minh%29%2C_d%C3%A9l%C3%A9gu%C3%A9_indochinois%2C_Congr%C3%A8s_communiste_de_Marseille%2C_1921%2C_Meurisse%2C_BNF_Gallica.jpg/500px-Nguyen_A%C3%AFn_Nu%C3%A4%27C_%28Ho-Chi-Minh%29%2C_d%C3%A9l%C3%A9gu%C3%A9_indochinois%2C_Congr%C3%A8s_communiste_de_Marseille%2C_1921%2C_Meurisse%2C_BNF_Gallica.jpg",
        },
      ],
    },
    1954: {
      id: "dienbienphu",
      events: [
        {
          text: "The Battle of Dien Bien Phu ended with a decisive Vietnamese victory, concluding the First Indochina War and leading to the Geneva Accords.",
          image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Victory_in_Battle_of_Dien_Bien_Phu.jpg",
            alt: "Victory flag raised at Dien Bien Phu",
          },
        },
      ],
      mentors: [
        {
          name: "Vo Nguyen Giap",
          role: "General",
          color: "#DA251D",
          photo: "https://upload.wikimedia.org/wikipedia/commons/0/07/Vo_Nguyen_Giap2.jpg",
        },
      ],
    },
    1975: {
      id: "reunification",
      events: [
        {
          text: "The Great Spring Victory of April 30 marked the end of the Vietnam War and initiated the historic reunification of North and South Vietnam.",
          image: {
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Nguyen_A%C3%AFn_Nu%C3%A4%27C_%28Ho-Chi-Minh%29%2C_d%C3%A9l%C3%A9gu%C3%A9_indochinois%2C_Congr%C3%A8s_communiste_de_Marseille%2C_1921%2C_Meurisse%2C_BNF_Gallica.jpg/500px-Nguyen_A%C3%AFn_Nu%C3%A4%27C_%28Ho-Chi-Minh%29%2C_d%C3%A9l%C3%A9gu%C3%A9_indochinois%2C_Congr%C3%A8s_communiste_de_Marseille%2C_1921%2C_Meurisse%2C_BNF_Gallica.jpg",
            alt: "President Ho Chi Minh who led the independence movement",
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
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ho_Chi_Minh_City_Skyline_%28night%29.jpg/500px-Ho_Chi_Minh_City_Skyline_%28night%29.jpg",
            alt: "Rapid modernization of Ho Chi Minh City following Doi Moi reforms",
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
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Infobox_ASEAN_flag.svg/330px-Infobox_ASEAN_flag.svg.png",
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
          text: "Today, Vietnam is one of Asia's fastest-growing economies, looking confidently towards a resilient and innovative future.",
        },
      ],
    },
  },
});
