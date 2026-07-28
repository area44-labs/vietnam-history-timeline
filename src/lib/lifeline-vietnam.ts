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
          photo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Ho_Chi_Minh_1946.jpg",
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
            src: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Ho_Chi_Minh_1946.jpg",
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
            src: "https://upload.wikimedia.org/wikipedia/commons/0/00/Khu_trung_t%C3%A2m_th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh%2C_nh%C3%ACn_t%E1%BB%AB_ph%C3%ADa_qu%E1%BA%ADn_2.JPG",
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
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Infobox_ASEAN_flag.svg/320px-Infobox_ASEAN_flag.svg.png",
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
