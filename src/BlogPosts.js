import React from "react";

import { useParams, useLocation } from "react-router-dom";
import IndividualPost from "./IndividualPost";
import qs from "querystringify";
import Card from "react-bootstrap/Card";
import { Row, Container, Col } from "react-bootstrap";

export default function BlogPosts({ blogPosts }) {
  const { entry_id } = useParams();
  const { tag } = useParams();
  const { author } = useParams();
  let location = useLocation();
  let search = location.search;
  let query = qs.parse(search).searchField;

  function dateCompare(a, b) {
    return a.post_date < b.post_date ? 1 : b.post_date < a.post_date ? -1 : 0;
  }

  const filteredBlogPosts = blogPosts
    .filter((post) => {
      if (query) {
        return (
          post.body.toLowerCase().includes(query.toLowerCase()) ||
          post.title.toLowerCase().includes(query.toLowerCase())
        );
      } else if (entry_id) {
        return entry_id === post.content_id;
      } else if (tag) {
        if (post.tags && post.tags.includes(",")) {
          //tags contains comma => multiple tags => make an array out of them
          const tagsArray = post.tags.split(",");
          if (tagsArray.includes(tag)) {
            console.log(`Found the tag: ${tag} in list of tags: ${tagsArray}`);
            return true;
          } else {
            return false;
          }
        } else {
          try {
            return tag === post.tags;
          } catch (ex) {
            return false;
          }
        }
      } else if (author) {
        return author === post.author;
      } else {
        return post;
      }
    })
    .sort(dateCompare)
    .map((post) => {
      return (
        <IndividualPost
          key={post.content_id}
          post={post}
          detailed={entry_id ? true : false}
        />
      );
    });
  //.sort((a,b) => (a.fields.publishingDate > b.fields.publishingDate) ? 1 : ((b.fields.publishingDate > a.fields.publishingDate) ? -1 : 0));

  //.sort((a,b) => (a.fields.publishingDate > b.fields.publishingDate) ? 1 : ((b.fields.publishingDate > a.fields.publishingDate) ? -1 : 0))

  if (filteredBlogPosts) {
  }
  if (filteredBlogPosts.length >= 1) {
    return filteredBlogPosts;
  } else {
    //no results found, give feedback
    if (query) {
      //query search wanted but no results found
      return (
        <>
          <Container justify="center">
            <Row className="justify-content-md-center row">
              <Col className="col" screen_size={6}>
                <div className="query-noresults-feedback h-100">
                  <Card bg="warning">
                    <Card.Body>
                      Oops! Couldn't find any blog articles for your search
                      query. No matches for <strong>{query}</strong>.
                    </Card.Body>
                    <img
                      alt="matches"
                      className="mx-auto p-5"
                      style={{ width: "30%" }}
                      src="https://media3.giphy.com/media/R56rTrN5wjyNi/giphy.gif?cid=790b7611baeb9d3059c0e246ed668878fd80b824f329a6ab&rid=giphy.gif&ct=g"
                    />
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      );
    } else {
      return (
        <div className="generic-noresults-feedback h-100">
          <Card bg="danger">
            <Card.Header>
              Oops! Couldn't find any blog articles. Our codemonkeys are hard at
              work fixing this issue!
            </Card.Header>
          </Card>
        </div>
      );
    }
  }
}
