import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  
    const updateNews=async()=>{
      props.setProgress(10)
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bcad797b121e4e6e881b517818b4f11c&page=${page}&pageSize=${props.pagesize}`
      setLoading(true)
      let data = await fetch(url)
      props.setProgress(40)
      let parsedData= await data.json()
      props.setProgress(60)
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false)
      props.setProgress(100)
        
      }
      

      const constcapitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }


      useEffect(() => {
        document.title=` ${constcapitalizeFirstLetter(props.category)} | News-World`
        updateNews();
        // eslint-disable-next-line
      },[])
      

      const fetchMoreData=async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=bcad797b121e4e6e881b517818b4f11c&page=${page+1}&pageSize=${props.pagesize}`
        setPage(page+1)
        let data = await fetch(url)
        let parsedData= await data.json()
        setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setLoading(false)
    }

    return (
      <>
      
          <h1 className="text-center" style={{marginTop:'80px'}}>News World - Top {constcapitalizeFirstLetter(props.category)} Headlines</h1>
          {loading&&<Spinner/>}
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >

          <div className="container">
          <div className="row">
            {articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
            <NewsItems title={element.title?element.title:''} description={element.description?element.description:'...'} newurl={element.url} imageurl={element.urlToImage} time={element.publishedAt} source={element.source.name} author={element.author}/>
            </div>
            })}
          </div >
            </div>

            </InfiniteScroll>
      </>
    );
  // }
}

News.defaultProps={
  country:"in",
  pagesize:6,
  catogery:"general"
}
News.propTypes={
  country   :  PropTypes.string,
  pagesize  :  PropTypes.number,
  category  :  PropTypes.string
}

export default News;
