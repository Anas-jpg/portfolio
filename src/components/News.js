import SectionTitle from "./SectionTitle"
import NewsData from "../data/NewsData"

const News = () => {
  return (
    <section className="latest_news_section" id="blog">
      <div className="container">
        <h2 className="section-title">Latest Blogs</h2>
        <p className="section-desc">Here are my blogs that I have written to share my journey.</p>

        <div className="latest_news_content_wrapper">
          {NewsData.map((news, index) => {
            return (
              <div className="single_news" key={index}>
                <div className="news-content" 
                  style={{ 
                    backgroundImage: `url(${news.img})`,
                  }}>
                  <div className="news_desc">
                    <span className="news-category">{news.title}</span>
                    <h3>{news.desc}</h3>
                    <div className="news_button">
                      <a href={news.link} target="_blank" rel="noopener noreferrer">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default News
