import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("post/all", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.posts);
      });
  }, []);
  return (
    <div className="home">
      {data.map((item) => {
        return (
          <div className="card home-card" key={item._id}>
            <h5>{item.postedBy}</h5>
            <div className="card-image">
              <img src={item.photo} alt="profileImg" />
            </div>
            <div className="card-content">
              <i className="material-icons" style={{ color: "tomato" }}>
                favorite
              </i>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
              <input type="text" placeholder="add comment" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
