import React from "react";

const NewsItems=(props)=>{

    let { title, description, imageurl, newurl, author, time, source } = props;
    return (
      <>
        <div className="my-3 mx-3">
          <div className="card" style={{ height: "460px", width: "auto", padding: "0 0 0 0" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0",
              }}
            >
              <span className="badge rounded-pill bg-success"> {source}</span>
            </div>

            <img
              src={
                imageurl == null
                  ? "https://i-invdn-com.investing.com/news/OPEC_800x533_L_1629366836.jpg"
                  : imageurl
              }
              style={{ height: "200px" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{title.slice(0, 60)}...</h5>
              <p className="card-text">{description.slice(0, 80)}...</p>
              <p className="card-text">
                <small>
                  By {!author ? "unknown" : author} on{" "}
                  {new Date(time).toGMTString()}
                </small>
              </p>
              <a
                href={newurl}
                rel="noreferrer"
                target="_blank"
                className="btn btn-dark"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </>
    );
}

export default NewsItems;
