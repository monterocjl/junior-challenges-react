import styled from "styled-components";

const Container = styled.div`
  margin: 0px 0px 20px 0px;
  font-weight: bold;
`;

const Heading = styled.h3`
  font-size: 20px;
  margin: 0px 0px 10px 0px;
`;

const MovesContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  gap: 9px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const MoveChip = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50px;
  background: #b4b4b4;
  padding: 2px 9px 4px 9px;
  color: white;
  font-size: 15px;
`;

export { Container, Heading, MovesContainer, MoveChip };
