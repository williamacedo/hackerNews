import React from "react";
import axios from "axios";

export default axios.create({
  baseURL: "https://hacker-news.firebaseio.com",
  headers: {
    "Content-Type": "application/json"
  }
});
