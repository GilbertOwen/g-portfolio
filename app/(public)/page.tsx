import Image from "next/image";
import { Fragment } from "react";
import Hero from "./_components/Hero";
import Personality from "./_components/Personality";

export default function Home() {
  const hobby = [
    {
      name: "Hiking",
      content:
        "Adventurous: Hiking is a thrilling adventure that brings me closer to nature. Exploring new trails, conquering challenging terrains, and immersing myself in breathtaking landscapes fuel my sense of adventure and love for the outdoors.",
    },
    {
      name: "Gaming",
      content:
        "Immersive: Gaming is a captivating experience that transports me to different worlds. Whether I'm unraveling epic stories, strategizing in competitive battles, or connecting with friends in virtual realms, gaming immerses me in a world of excitement and endless possibilities.",
    },
    {
      name: "Coding",
      content:
        "Innovative: Coding is a journey of innovation and problem-solving. Through coding, I create solutions, build software, and contribute to technological advancements. It's a space where creativity meets logic, allowing me to turn ideas into functional realities.",
    },
    {
      name: "Cooking",
      content:
        "Creative: Cooking is my creative outlet where I blend flavors, experiment with recipes, and create delicious meals. From comforting classics to innovative dishes, cooking allows me to express myself artistically while sharing joy and nourishment with others.",
    },
    {
      name: "Watching",
      content:
        "Engaging: Watching is a captivating experience that opens doors to diverse stories and perspectives. Whether I'm watching films, documentaries, or series, each viewing is an engaging journey that sparks curiosity, emotions, and new insights.",
    },
  ];
  const personality = [
    {
      name: "Responsible",
      content:
        "Responsibility is a cornerstone of my daily life, guiding my actions and decisions in both personal and professional realms. I believe in owning up to my commitments, acknowledging the impact of my choices, and striving for integrity in everything I do. This means managing my time effectively, meeting deadlines, and taking accountability for any mistakes I make. In my interactions with others, I prioritize open communication, collaboration, and ethical behavior. Additionally, I recognize the importance of contributing positively to my community and environment, whether through volunteering efforts or sustainable practices. Overall, responsibility to me is a mindset that shapes how I navigate challenges, uphold values, and strive for continuous growth.",
    },
    {
      name: "Credible",
      content:
        "Credibility is key in gaining trust and reliability in all areas of life. It's about being truthful, clear, and consistent in both words and deeds. Professionally, credibility is shown through expertise, experience, and a proven history of success. This means offering accurate information, meeting commitments, and following ethical guidelines. Credible individuals also welcome feedback and admit their limitations, showing humility and a commitment to continuous improvement. In personal relationships, credibility is established through honesty, dependability, and keeping promises. It's a quality that develops over time but is vital for building strong connections and lasting trust with others.",
    },
    {
      name: "Adaptive",
      content:
        "The hallmark of my personality is adaptability. I possess a keen ability to navigate through various situations with flexibility, resilience, and a positive outlook. This trait is reflected in my personal and professional endeavors, where I thrive in dynamic environments and excel in the face of challenges. Adaptability is at the core of my approach to life. I embrace change as an opportunity for growth and innovation, always seeking new experiences and learning from diverse perspectives. This curiosity and openness allow me to stay agile and continuously evolve. One of my strengths is maintaining composure under pressure. I approach unexpected situations with calmness, using them as catalysts for creative problem-solving. This mindset not only helps me overcome obstacles but also inspires those around me to adopt a solution-oriented approach.",
    },
    {
      name: "Respective",
      content:
        "Respectfulness is a fundamental aspect of my personality that guides my interactions and approach to life. I believe in treating others with dignity, empathy, and consideration, regardless of differences or circumstances. This trait is evident in my personal and professional relationships, where I prioritize mutual understanding and cooperation. Respect is the cornerstone of effective communication. I actively listen to others, value their perspectives, and express my thoughts and opinions with tact and diplomacy. This approach fosters trust and creates a positive environment where ideas can be freely exchanged and collaboration can flourish. In my professional endeavors, I demonstrate respect by acknowledging the expertise and contributions of colleagues and collaborators. I believe in the power of teamwork and recognize that each person brings unique strengths to the table. By honoring and leveraging these strengths, we can achieve greater success together.",
    },
    {
      name: "Enthusiast",
      content:
        "Enthusiasm is a defining trait that fuels my approach to life and drives my passion for various endeavors. I possess a natural curiosity and a zest for exploration, always eager to dive into new experiences and opportunities. This enthusiasm not only energizes me but also inspires those around me. One of my strengths is my ability to maintain a positive and optimistic outlook, even in challenging situations. I believe that enthusiasm is contagious and can uplift and motivate others. This positivity creates a supportive and dynamic environment where creativity thrives, and goals are pursued with vigor. In my professional pursuits, enthusiasm fuels my commitment to excellence. I approach tasks and projects with a sense of excitement and dedication, constantly seeking ways to innovate and exceed expectations. This enthusiasm for continuous improvement drives me to learn new skills, stay updated with industry trends, and embrace challenges as opportunities for growth.",
    },
  ];
  return (
    <Fragment>
      <Hero></Hero>
      <Personality personality={personality} hobby={hobby}></Personality>
    </Fragment>
  );
}
