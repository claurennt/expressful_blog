import React from "react";
import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";
import moment from "moment";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function IndividualPost({ post, detailed }) {
  console.log(post);
  const trimmedBlogPostBody = post.body.slice(0, 300) + `...`;

  return (
    <div className="blogpost-wrapper" key={post.content_id}>
      <Card bg="bg" border="info">
        <Card.Header>
          <h4 className="blogpost-title">{post.title}</h4>
        </Card.Header>
        <Card.Body>
          {detailed && (
            <img
              src={post.media_url}
              alt="Article cover "
              className="w-75 mx-auto d-block"
            />
          )}
          <Markdown className="blogpost-body">
            {detailed ? post.body : trimmedBlogPostBody}
          </Markdown>
          {!detailed && (
            <>
              <Button variant="link" href={`/article/${post.content_id}`}>
                Read More
              </Button>
            </>
          )}
          <footer className="blockquote-footer">
            <p className="blogpost-info small">
              <a className="source-link" href={post.source_url}>
                News Source
              </a>
              {"­ | ­"}
              {"published on "}
              <span>{moment(post.post_date).format("MMM Do YYYY")}</span>
              {" by "}
              <Link to={`/author/${post.author}`}>{post.author}</Link> {" in "}{" "}
              <span className="blogpost-location">{"Neverland"}</span>
            </p>{" "}
          </footer>
        </Card.Body>
      </Card>
    </div>
  );
}
