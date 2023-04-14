import styled from "styled-components";

const Container = styled.div`
  margin: 0px 0px 20px 0px;
  font-weight: bold;
`;

const Heading = styled.h3`
  font-size: 20px;
  margin: 0px 0px 10px 0px;
`;

const StatContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const StatName = styled.div`
  color: #ababab;
  font-size: 16px;
  width: 100px;
`;

const StatValue = styled.div`
  font-size: 16px;
  width: 45px;
`;

const BarStat = styled.div`
  flex: 1;
  height: 7px;
  border-radius: 20px;
  background: #dbdbdb;
  position: relative;
`;

export { Container, Heading, StatContainer, StatName, StatValue, BarStat };
