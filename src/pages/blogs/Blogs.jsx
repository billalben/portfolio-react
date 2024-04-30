import { useState } from "react";
import BlogPost from "./BlogPost";
import { blogs } from "../../constants/index";
import "./blogs.css";

const Blogs = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const postsPerPage = 4;

  const indexOfLastPost = pageNumber * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setPageNumber(pageNumber);

  const pageCount = Math.ceil(blogs.length / postsPerPage);
  const paginationButtons = [];

  for (let i = 1; i <= pageCount; i++) {
    paginationButtons.push(
      <li key={i} className={`page-item ${pageNumber === i ? "active" : ""}`}>
        <button onClick={() => paginate(i)} className="page-link">
          {i}
        </button>
      </li>
    );
  }

  const renderPagination = () => {
    return (
      <nav>
        <ul className="pagination">
          <li className={`page-item ${pageNumber === 1 ? "disabled" : ""}`}>
            <button
              onClick={() => paginate(pageNumber - 1)}
              className="page-link"
              disabled={pageNumber === 1}
            >
              Previous
            </button>
          </li>

          {paginationButtons}

          <li
            className={`page-item ${
              pageNumber === pageCount ? "disabled" : ""
            }`}
          >
            <button
              onClick={() => paginate(pageNumber + 1)}
              className="page-link"
              disabled={pageNumber === pageCount}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <section className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <div className="blog-posts">
        <ul className="blog-posts-list">
          {currentPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </ul>
      </div>

      {renderPagination()}
    </section>
  );
};

export default Blogs;
