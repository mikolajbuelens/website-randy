import PropTypes from "prop-types";
import "../styles/news.css";

export default function Article({
  title,
  content,
  img,
  link,
  date,
  source,
  author,
}) {
  // proptypes
  Article.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    img: PropTypes.string,
    link: PropTypes.string,
    date: PropTypes.string,
    source: PropTypes.string,
    author: PropTypes.string,
  };

  return (
    <div className="article-container">
      <div className="article-image">
        <img src={img} alt="" />
        {/* {img ? <img src={img} alt="" /> : ""} */}

        {source ? <p className="source">{source}</p> : ""}
      </div>
      <div className="article-content">
        <h2>{title}</h2>
        {author ? <p className="author"> {author}</p> : ""}

        <p className="date">{date}</p>
        <div className="flexColumn">
          <p>
            {content}
            &nbsp;
          </p>
          {link ? (
            <a className="learn-more buyBook" href={link} target="_blank">
              Lees meer
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
