import React, { useState, useEffect } from "react";
const parse = require("html-react-parser");

const TeacherBuilder = () => {
  const [html, setHtml] = useState("");
  const renderLink = async () => {
    const url = "http://localhost:3001/databasevideo";

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
    renderLink();
  }, []);

  console.log(html);

  return <>{html}</>;
};

export default TeacherBuilder;
