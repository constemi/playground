// @ts-nocheck
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Close } from "grommet-icons";
import { Card, Button } from "../../components";
import { postIdRemoved } from "./postsSlice";

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const removePostIdClicked = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const {
      target: { id },
    } = event;
    dispatch(
      postIdRemoved({
        id,
      })
    );
  };

  const renderedPosts = posts.map((post) => (
    <Card className="post-excerpt" key={post.id}>
      <Button
        id={post.id}
        style={{ alignSelf: "end", height: "50px", width: "50px" }}
        icon={<Close color="brand" />}
        type="button"
        onClick={removePostIdClicked}
      />
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </Card>
  ));

  return (
    <div data-testid="postsList" className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </div>
  );
};
