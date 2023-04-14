import styled from "styled-components";

const Container = styled.div`
  margin: 0px 0px 20px 0px;
  font-weight: bold;
`;

const Heading = styled.h3`
  font-size: 20px;
  margin: 0px 0px 10px 0px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const MeasureContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const StatName = styled.div`
  color: #ababab;
  font-size: 16px;
  width: 80px;
`;

const StatValue = styled.div`
  font-size: 16px;
`;

export {
  Container,
  Heading,
  FlexContainer,
  MeasureContainer,
  StatName,
  StatValue,
};
