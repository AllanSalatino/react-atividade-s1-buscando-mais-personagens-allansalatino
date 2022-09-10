import { useEffect, useState } from "react";
import { Characters } from "./components/Characters";
import { api } from "./data/api";
import { Body } from "./styleApp";

function App() {
  const [currentPage, setCurrentPage] = useState("?page=1/");

  const [nextPage, setNextPage] = useState("");

  const [prevPage, setPrevPage] = useState("");

  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    api.get(currentPage).then((res) => {
      setCharacterList(res.data.results);
      const nextUrl = res.data.info.next;
      const prevUrl = res.data.info.prev;
      sliceUrl(nextUrl, prevUrl);
    });
  }, [currentPage]);

  const sliceUrl = (nextUrl, prevUrl) => {
    nextUrl = `${nextUrl}`.split("/");
    prevUrl = `${prevUrl}`.split("/");

    nextUrl = nextUrl[nextUrl.length - 1];
    prevUrl = prevUrl[prevUrl.length - 1];

    setNextPage(nextUrl);
    setPrevPage(prevUrl);
  };

  return (
    <Body>
      <Characters 
        characterList={characterList} 
        nextPage={nextPage} 
        prevPage={prevPage} 
        setCurrentPage={setCurrentPage}
        >
      </Characters>
    </Body>
  );
}

export default App;
