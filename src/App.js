import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import BlogPosts from "./BlogPosts";
import Header from "./Header";
import Footer from "./Footer";
import Authors from "./Authors";
import axios from "axios";
import NewBlogPostForm from "./NewBlogPostForm";

function App() {
  const [blogPosts, setBlogPosts] = useState();

  useEffect(() => {
    // async function getEntriesAsync() {
    //   const response = await client.getEntries();
    //   setBlogPosts(response.items);
    // }

    // getEntriesAsync();
    axios
      .get("https://expressful-blog-backend.herokuapp.com/blogposts")
      .then((res) => {
        console.log({ frontendreslog: res.data });
        setBlogPosts(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  if (blogPosts) {
    return (
      <>
        <div className="App">
          <Header blogPosts={blogPosts} />

          <div className="blogposts-container">
            <>
              <Route exact path="/">
                {<Redirect to="/home" />}
              </Route>
              <Switch>
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
              <Route path="/home">
                <BlogPosts blogPosts={blogPosts} />
              </Route>
              <Route path="/blogPosts/create">
                <NewBlogPostForm />
              </Route>
            </>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="App">
        <Header />

        <div className="blogposts-container">
          <p>Oops! Couldn't receive blogpost data.</p>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
