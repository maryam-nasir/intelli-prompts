"use client";

import { useEffect, useState } from "react";
import PromptCardList from "./PromptCardList";

const Feed = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch("/api/prompt");
      const resData = await response.json();
      setPrompts(resData);
    };
    fetchPrompts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    event.tatr;
  };

  const handleTagClick = () => {};

  return (
    <section className="feed">
      <form className="w-full relative flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchTerm}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={prompts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
