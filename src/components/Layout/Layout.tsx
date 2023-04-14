import styled from "styled-components";

const Main = styled.section`
  max-width: 450px;
  min-height: 100vh;
  margin: 0px auto;
  padding: 20px;
  box-sizing: border-box;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  position: relative;
`;

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return <Main>{children}</Main>;
};

export default Layout;
