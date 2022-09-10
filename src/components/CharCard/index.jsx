import { Card } from "./style";


export const CharCard = ({ char }) => {
  return (
    <>
      <Card status={char.status}>
        <h3>{char.name}</h3>
        <img src={char.image} alt={`Foto do personagem ${char.name}`}></img>
        <span>{char.species}</span>
      </Card>
    </>
  );
};