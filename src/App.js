import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import BlogPosts from "./BlogPosts";
import Header from "./Header";
import Footer from "./Footer";
import Authors from "./Authors";
import axios from "axios";
import NewBlogPostForm from "./NewBlogPostForm";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #6b76ff;
`;

function App() {
  const [blogPosts, setBlogPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get("https://expressful-blog-backend.herokuapp.com/blogposts")
      .then((res) => {
        console.log({ frontendreslog: res.data });
        setBlogPosts(res.data);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setIsError(true);
        console.log(e.message);
      });
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        {isLoading && (
          <ClipLoader loading={isLoading} css={override} size={150} />
        )}
        {isError && (
          <>
            <div className="blogposts-container">
              <p>Oops! Couldn't receive blogpost data.</p>
            </div>
          </>
        )}
        {!isLoading && blogPosts && (
          <>
            <div className="blogposts-container">
              {/* <BlogPosts /> */}
              <Route exact path="/">
                {<Redirect to="/home" />}
              </Route>
              <Switch>
                <Route path="/home">
                  <BlogPosts blogPosts={blogPosts} />
                </Route>
                <Route path="/article/:entry_id">
                  <BlogPosts blogPosts={blogPosts} />
                </Route>
                <Route path="/category/:tag">
                  <BlogPosts blogPosts={blogPosts} />
                </Route>
                <Route path="/author/:author">
                  <BlogPosts blogPosts={blogPosts} />
                </Route>
                <Route path="/Authors">
                  <Authors />
                </Route>
              </Switch>

              <Route path="/blogPosts/create">
                <NewBlogPostForm />
              </Route>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
export default App;
