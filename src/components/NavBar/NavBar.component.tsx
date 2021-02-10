import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const Nav = styled.nav`
  height: 150px;
  padding: 4em;
  background: #4cb0a8;
`;

const Section = styled.section`
  padding: 2em;
  background: #4cb0a8;
`;

export function NavBar() {
  return (
    <Nav>
      <Section>
        <Title>Reducer Slice Testing</Title>
        <div className="navContent">
          <div className="navLinks"></div>
        </div>
      </Section>
    </Nav>
  );
}
