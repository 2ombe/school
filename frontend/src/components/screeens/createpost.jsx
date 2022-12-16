import React from "react";
import { useState } from "react";
import M from "materialize-css";
import { useNavigate } from "react-router-dom";

export default function Post() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  const postData = () => {
    const data = new FormData();
    data.append("file", photo);
    fetch("/post/create", {
      method: "post",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer" + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        photo,
        title,
        body,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#b71c1c red darken-4" });
        } else {
          M.toast({ html: "post created", classes: "#1b5e20 green darken-4" });
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="card input-field"
      style={{
        margin: "40px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <div className="file-field input-field">
        <div className="btn darken-1 #2979ff blue">
          <span>Choose Image</span>
          <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button
        onClick={() => postData()}
        className="btn waves-effect waves-light darken-1 #2979ff blue"
      >
        submit
      </button>
    </div>
  );
}
