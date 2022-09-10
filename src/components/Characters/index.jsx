import { ButtonNextPrev } from "../ButtonNextPrev";
import { CharCard } from "../CharCard";
import { CardList, Title } from "./style";

export const Characters = ({ characterList, nextPage, prevPage, setCurrentPage }) => {
  return (
    <>
      <Title>Meus Personagens</Title>
      <ButtonNextPrev 
        nextPage={nextPage} 
        prevPage={prevPage} 
        setCurrentPage={setCurrentPage}
        >
      </ButtonNextPrev>
      <CardList>
        {characterList?.map((char) => {
          return <CharCard key={char.id} char={char}></CharCard>;
        })}
      </CardList>
    </>
  );
};