import React from "react";
import axios from "axios";
import "./main.css";

export default function main() {
  const [question, setQuestion] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  async function generateanswer() {
    setAnswer("loading...");
    const responce = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBWRkjc_Imt2H68LhczerJYm4YpECTves0",
      method: "post",
      data: { contents: [{ parts: [{ text: question }] }] },
    });
    setAnswer(responce["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  }
  return (
    <div className="app">
      <h1 class="text-4xl font-serif font-bold">Chat AI *</h1>
      <textarea
        className="border-2 border-black, w-1/2 h-20 p-2"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter your question"
      ></textarea>
      <button className="button" onClick={generateanswer}>
        Generate Answer
      </button>
      <pre className="box">{answer}</pre>
    </div>
  );
}
//this is my new add profile page 