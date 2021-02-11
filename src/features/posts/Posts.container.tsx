import React from "react";
import styled from "styled-components";
import { AddPostForm } from "./AddPostForm.component";
import { PostsList } from "./PostsList.component";

const Section = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const Aside = styled.aside`
  flex: 2;
  padding-top: 25px;
  max-width: 33%;
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
