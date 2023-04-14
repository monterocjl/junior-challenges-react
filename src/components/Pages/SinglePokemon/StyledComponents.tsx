import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 205px;
  position: relative;
  margin: -20px -20px 40px -20px;
  padding: 20px;
  border-radius: 0px 0px 30px 30px;
`;

const Heading = styled.h1`
  margin: 0px 0px 13px 0px;
  color: white;
  font-size: 27px;
`;

const TypesContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  gap: 7px;
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
  width: 215px;
  height: auto;
  position: absolute;
  bottom: -55px;
  right: 0px;
  left: 0px;
  margin-left: auto;
  margin-right: auto;
`;

const ArrowBack = styled(Link)`
  position: absolute;
  top: 194px;
  text-decoration: none;
  color: white;
  background: #ffffff3d;
  width: 36px;
  height: 36px;
  border-radius: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 4px;
  box-sizing: border-box;
  font-size: 22px;
  border: 1px solid #ffffff40;
`;

export { Container, Heading, TypesContainer, TypeChip, Image, ArrowBack };
