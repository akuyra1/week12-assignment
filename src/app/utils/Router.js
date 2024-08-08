"use client";
import { useRouter } from "next/navigation";

export function Router() {
  const router = useRouter();

  const handleSearch = (query) => {
    router.push(`/search-result?query=${query}`);
  };
}
