import React from "react";
import styled from "styled-components";
import { AddPostForm } from "./AddPostForm.component";
import { PostsList } from "./PostsList.component";

const Section = styled.section`
  max-width: 1000px;
`;

const Aside = styled.aside`
  float: left;
  height: 75vh;
  width: 500px;
  padding-top: 50px;
  padding-left: 50px;
`;

export function Posts() {
  return (
    <Section>
      <Aside>
        <AddPostForm />
      </Aside>
      <PostsList />
    </Section>
  );
}
