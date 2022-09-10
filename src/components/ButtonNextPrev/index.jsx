import { ButtonNext, ButtonPrev, ContainerButtons } from "./style";

export const ButtonNextPrev = ({ nextPage, prevPage, setCurrentPage }) => {
    return (
      <ContainerButtons>
        {prevPage.includes("page")? 
          <ButtonPrev onClick={() => setCurrentPage(prevPage)}>Prev</ButtonPrev>
          :
          <ButtonPrev disabled>Prev</ButtonPrev>  
        }
        {nextPage.includes("page")? 
          <ButtonNext onClick={() => setCurrentPage(nextPage)}>Next</ButtonNext>
          :
          <ButtonNext disabled>Next</ButtonNext>  
        }
      </ContainerButtons>
    );
  };