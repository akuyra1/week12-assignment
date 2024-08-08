import Landing from "./components/Landing";
import LandingGames from "./components/LandingGames";
import SearchBar from "./components/SearchBar";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleSearch = (query) => {
    router.push(`/search-result?query=${query}`);
  };

  return (
    <main>
      <SearchBar onSearch={handleSearch} />
      <Landing />
      <LandingGames />
    </main>
  );
}
