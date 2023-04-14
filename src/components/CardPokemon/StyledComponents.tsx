import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled(Link)`
  position: relative;
  width: 48%;
  height: 150px;
  border-radius: 10px;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;
  color: white;
  text-decoration: none;
`;
const Heading = styled.h3`
  margin: 0px 0px 10px 0px;
  font-size: 20px;
  font-weight: bold;
`;

const TypeChip = styled.div`
  border-radius: 50px;
  background: #ffffff3d;
  width: fit-content;
  padding: 3px 9px 4px 9px;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 13px;
`;

const Image = styled.img`
  width: 100px;
  height: auto;
  position: absolute;
  bottom: 2px;
  right: 5px;
`;

export { Card, Heading, TypeChip, Image };
