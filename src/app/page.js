"use client";
import Landing from "./components/Landing";
import LandingGames from "./components/LandingGames";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main>
      <SearchBar />
      <Landing />
      <LandingGames />
    </main>
  );
}
