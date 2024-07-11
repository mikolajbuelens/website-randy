import data from "../data/newsData.json";
import Article from "../components/Article";

export default function News() {
  console.log(data);
  return (
    <>
      <div className="flexCenter">
        <h2 className="introTitle">Nieuws</h2>
      </div>
      <div className="news-container">
        {data.map((article) => (
          <Article
            key={article.id}
            title={article.title}
            content={article.content}
            img={article.img}
            link={article.link}
            date={article.date}
            source={article.source}
            author={article.author}
          />
        ))}
      </div>
    </>
  );
}
