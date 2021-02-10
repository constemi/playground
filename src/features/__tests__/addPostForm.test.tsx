import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { Posts } from "../../features/posts/Posts.container";
import store from "../../store";
import theme from "../../theme";

function TestPosts() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Posts />
      </ThemeProvider>
    </Provider>
  );
}

afterEach(cleanup);

it("submiting the posts form works correctly", () => {
  const { getByTestId, getByText } = render(<TestPosts />);

  fireEvent.change(getByTestId("postTitle"), { target: { value: "newTitle" } });
  fireEvent.change(getByTestId("postContent"), {
    target: { value: "newPostContent" },
  });
  fireEvent.submit(getByTestId("addPostForm"));

  expect(getByTestId("postsList").textContent).toMatch(/newTitle/i);
  expect(getByTestId("postsList").textContent).toMatch(/newPostContent/i);
});
