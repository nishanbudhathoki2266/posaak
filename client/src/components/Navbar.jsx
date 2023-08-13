import { styled } from "styled-components";

const Container = styled.div`
  height: 3.9rem;
  background-color: #f8fafc;
  border-bottom: 0.1rem solid #000;
`;

const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div``;
const Center = styled.div``;
const Right = styled.div``;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>Left</Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
