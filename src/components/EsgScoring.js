import { React, useEffect, useState } from "react";
import CategoryComponent from "./CategoryComponent";

const EsgScoring = () => {
  const [arrItems, setArrItems] = useState(null);
  const [categories, setCategories] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://api.acty.se", { method: "GET" });
      let data = await response.json();
      data.forEach((element) => {
        let cat = element.categories || element.category;
        categories.push(cat);
      });

      setUniqueCategories([...new Set(categories)]);

      setArrItems(data);
    };

    fetchData();
  });

  return (
    <div>
      <h3>ESG Scoring</h3>
      <p>This is a list of top 5 companies in each ESG category</p>'
      {arrItems && (
        <CategoryComponent
          uniqueCategories={uniqueCategories}
          arrItems={arrItems}
        />
      )}
    </div>
  );
};

export default EsgScoring;
