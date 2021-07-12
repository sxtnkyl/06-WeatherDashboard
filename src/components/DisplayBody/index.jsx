import SingleDay from "./singleDay/index";
import Forecast from "./forecast/index";
import * as S from "../..//styles/styles";

const DisplayBody = () => {
  return (
    <>
      <S.SectionContainer className="display-body-container">
        <SingleDay />
      </S.SectionContainer>
      <S.SectionContainer>
        <Forecast />
      </S.SectionContainer>
    </>
  );
};

export default DisplayBody;
