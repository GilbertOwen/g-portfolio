import { Fragment } from "react";
import Studied from "./_components/Studied";
import { FaCss3Alt, FaHtml5, FaLaravel } from "react-icons/fa6";
import Anything from "./_components/Anything";
import { SiNextdotjs } from "react-icons/si";

export default async function MorePage() {
  const lessons = [
    {
      name: "HTML",
      icon: (
        <FaHtml5
          className="w-[50px] h-[auto] md:w-[100px] md:h-[100px]"
          size={50}
          color="#F7DCB9"
        />
      ),
      description:
        "HTML serves as the backbone of the digital realm, providing the structure that underpins every web page. Through a series of tags and elements, HTML enables developers and designers to craft intuitive, interactive, and visually engaging experiences for users worldwide.",
    },
    {
      name: "CSS",
      icon: (
        <FaCss3Alt
          className="w-[50px] h-[auto] md:w-[100px] md:h-[100px]"
          size={50}
          color="#F7DCB9"
        />
      ),
      description:
        "CSS, short for Cascading Style Sheets, is a fundamental technology used in web development to control the visual presentation of HTML documents. It serves as a styling language that defines how HTML elements should be displayed on a web page, including aspects such as layout, colors, fonts, spacing, and responsiveness.",
    },
    {
      "name": "Next.js",
      "icon": <SiNextdotjs className="w-[50px] h-[auto] md:w-[100px] md:h-[100px]\" size={50} color="#F7DCB9" />,
      "description": "Next.js is a powerful React framework that simplifies the process of building server-side rendered (SSR) and statically generated (SSG) web applications. It provides a robust development environment with features like automatic code splitting, server-side rendering, and hot module replacement, making it ideal for creating fast, scalable, and SEO-friendly web experiences."
    },
    {
      "name": "Laravel",
      "icon": <FaLaravel className="w-[50px] h-[auto] md:w-[100px] md:h-[100px]\" size={50} color="#F7DCB9" />,
      "description": "Laravel is a popular PHP framework known for its elegant syntax, developer-friendly features, and comprehensive ecosystem. It simplifies web development tasks such as routing, authentication, database management, and caching, allowing developers to focus on building robust and scalable web applications. With features like Blade templating, Eloquent ORM, and artisan command-line tools, Laravel empowers developers to create modern and maintainable codebases."
    }
  ];
  return (
    <Fragment>
        <Studied lessons={lessons}></Studied>
        <Anything></Anything>
    </Fragment>
  );
}
