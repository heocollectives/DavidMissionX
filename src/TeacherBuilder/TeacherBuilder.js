import React, { useState, useEffect } from "react";
import './teacherbuilder.css';

const parse = require("html-react-parser");

const TeacherBuilder = () => {
  const [html, setHtml] = useState("");
  const renderHtml = async () => {
    const url = "http://localhost:3001/teacherBuilder";

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setHtml(parse(result["content"]));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    renderHtml();
  }, []);

  console.log(html);

  return <><div><div className="background">{html}</div></div></>;
};

export default TeacherBuilder;
