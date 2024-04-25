import { Fragment } from "react";
import CarouselProject from "./_components/CarouselProject";
import ProjectList from "./_components/ProjectList";
import image1 from "@/public/assets/laptop-analyze.jpg";
import image2 from "@/public/assets/laptop-program.jpg";

export default async function ProjectPage() {
  const projects = [
    {
      name: "To-do List Project",
      date: '26-03-2000',
      description: 'This project is me itself. From this website, you will know about my personality, hobby, and etc. The project is this website itself though',
      image: image1.src,
    },
    {
      name: "Community Project",
      date: '26-03-2024',
      description: 'This project is me itself. From this website, you will know about my personality, hobby, and etc. The project is this website itself though',
      image: image2.src,
    },
  ];
  return (
    <Fragment>
        <CarouselProject></CarouselProject>
      <ProjectList projects={projects}></ProjectList>
    </Fragment>
  );
}
