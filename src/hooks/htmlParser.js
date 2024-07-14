"use client";
import "../app/globals.css";

export const useParser = (html_description) => {
  let content = document.createElement("div");
  content.innerHTML = html_description;

  const contentArray = Array.from(content.children);
  // console.log(contentArray);
  let pg = [];
  contentArray.forEach((node) => {
    if (node.nodeName === "P") {
      pg.push(node);
    }

    if (node.nodeName === "P") {
      node.classList.add("pg");
      // console.log[node[0]];
    } else if (node.nodeName === "UL") {
      const listItems = node.querySelectorAll("li");
      listItems.forEach((item, index) => {
        item.classList.add("list");
        // console.log(item);
      });
    }
  });
  // console.log(pg);

  if (pg[0] === contentArray[0]) {
    pg[0].classList.add("first-pg");
    // console.log(pg[0]);
  }

  const updatedContent = content.innerHTML;
  // console.log(updatedContent);

  return { updatedContent };
};
