import "../../src/App.css";
import { React, useState, useEffect } from "react";

const CategoryComponent = ({ arrItems, uniqueCategories }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);
    const filteredData = () => {
      let result;
      uniqueCategories.forEach((element) => {
        result = arrItems.filter(
          (item) => (item.categories || item.category) === element
        );

        let newArr = [];
        result.forEach((element) => {
          newArr.push({ ...element, score: element.score });
        });

        let sort = newArr.sort((a, b) => b.score - a.score);

        let data = { title: element, values: sort };

        setData((prev) => [...prev, data]);
      });
    };
    filteredData();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div
          className={`item-container ${item.title.toLowerCase()}`}
          key={index}
        >
          <div className="title-container">
            <div
              className={`circle ${item.title.toLowerCase()}` + "-circle"}
            ></div>
            <h3>{item.title}</h3>
          </div>
          <div>
            {item.values.map((value, i) => (
              <ul key={i}>
                <li className="list-item">
                  <p>{value.score}</p>
                  <p>{value.name}</p>
                </li>
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryComponent;
