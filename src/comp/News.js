import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  static defaultProps = {
    country: "in",
    newsSize: 8,
    category: "general",
    
  };
  static propTypes = {
    country: PropTypes.string,
    newsSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalArticles: 0,
    };
    document.title = `Newspace - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }

  async updateNews() {
    this.props.setProgress(0)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${'07800f6487ce4656a4ec58cc3a5e7bf9'}&page=${this.state.page}&pageSize=${this.props.newsSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      totalArticles: parseddata.totalResults,
      loading: false,
    });
    this.props.setProgress(100)


  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${'07800f6487ce4656a4ec58cc3a5e7bf9'}&page=1&pageSize=${this.props.newsSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      totalArticles: parseddata.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalArticles / this.props.newsSize)
      )
    ) {
      this.setState({ page: this.state.page + 1 });
      this.updateNews();
    }
  };

  fetchMoreData = async() => {
    this.setState({page:this.state.page+1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${'07800f6487ce4656a4ec58cc3a5e7bf9'}&page=${this.state.page}&pageSize=${this.props.newsSize}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
      totalArticles: parseddata.totalResults
    });
  };

  render() {
    return (
      <div className=''>
        

        <section className="max-w-7xl mx-auto py-12">
        <h1 className="text-3xl font-semibold text-center border-b-2  py-4 bold">
          {this.capitalizeFirstLetter(this.props.category)} top headlines
        </h1>
        {this.state.loading && <Loading />}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalArticles}
            loader={<Loading  />}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-gray-500">
              {this.state.articles.map((elem) => {
                return (
                  <NewsItem
                    key={elem.url}
                    title={elem.title ? elem.title.slice(0, 50) : ""}
                    description={
                      elem.description ? elem.description.slice(0, 88) : ""
                    }
                    imageUrl={elem.urlToImage}
                    newsUrl={elem.url}
                    source={elem.source.name}
                  />
                );
              })}
            </div>
          </InfiniteScroll>
        </section>
      </div>
    );
  }
}

export default News;
