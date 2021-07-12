import styled from "styled-components";

//General Components
const BaseButton = styled.button`
  background: ${(props) => props.theme.bg};
  margin: 0px 10px;
  cursor: pointer;
  &:hover {
    background: #ffd580;
  }
`;

const BaseHeader = styled.h2`
  padding: 0px 10px;
`;

const BaseInput = styled.input`
  margin-right: 10px;
  background: ${(props) => props.theme.bg};
  &:focus {
    outline: none;
    border-color: #ffd580;
  }
`;

const BaseCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  background: ${(props) => props.theme.bg};
  border: 2px solid lightgray;
  border-radius: 5px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const Icon = styled.img`
  height: inherit;
  width: auto;
  padding: 10px;
`;

//Section containers
const NavContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  height: fit-content;
  padding: 20px 0px;
`;

const SectionContainer = styled.section`
  margin: 10px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex: 0 0 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

//extended components

const SingleDayContainer = styled.div`
  height: 40vh;
`;

const SingleDayCard = styled(BaseCard)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`;

const ForecastContainer = styled(FlexContainer)`
  min-height: 30vh;
  padding: 10px;
  justify-content: space-evenly;
`;

const DayCard = styled(BaseCard)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`;

const IconContainer = styled(BaseCard)`
  display: flex;
  align-items: center;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: lightgray;
`;

//default theming example
// BaseCard.defaultProps = {
//   theme: {
//     main: "green",
//   },
// };

const theme = {
  light: { bg: "none" },
  dark: { bg: "#c7ffddff" },
};

export {
  BaseButton,
  BaseHeader,
  BaseInput,
  BaseCard,
  IconContainer,
  Icon,
  NavContainer,
  SectionContainer,
  SingleDayContainer,
  ForecastContainer,
  FlexContainer,
  SingleDayCard,
  DayCard,
  theme,
};
