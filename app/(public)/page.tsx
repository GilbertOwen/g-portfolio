import Image from "next/image";
import { Fragment } from "react";
import Hero from "./_components/Hero";
import Personality from "./_components/Personality";

export default function Home() {
  return (
    <Fragment>
      <Hero></Hero>
      <Personality></Personality>
    </Fragment>
  );
}
