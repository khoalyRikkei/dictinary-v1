import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import classNames from "classnames/bind";
import styles from "./SearchElement.module.scss";

let cx = classNames.bind(styles);

function SearchElement({ valueFilter, getValueSearch }) {
  const [valueSearch, setValueSearch] = useState();
  const [resultFilter, setResultFilter] = useState([]);
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const handleOnChange = (value) => {
    setFocused(true);
    setValueSearch(value);
    const result = valueFilter.filter((word) => word.includes(value));
    if (value) {
      result.sort((pre, next) => pre.length - next.length);
    }
    setResultFilter(result.slice(0, 10));
  };
  const handleClickElementFilter = (value) => {
    setFocused(false);
    setValueSearch(value);
  };

  useEffect(() => {
    const handleClickFilter = (element) => {
      if (element.target.className !== "li-content") {
        setFocused(false);
      }
    };
    window.addEventListener("click", (element) => {
      handleClickFilter(element);
    });
    return () => {
      window.removeEventListener("click", (element) => {
        handleClickFilter(element);
      });
    };
  }, [focused]);

  // handle search

  return (
    <div className={cx("search-container")}>
      <input
        type="text"
        value={valueSearch}
        onChange={(e) => handleOnChange(e.target.value)}
        onFocus={onFocus}
      />
      <div>
        <GoSearch
          onClick={() => getValueSearch(valueSearch)}
          style={{ cursor: "pointer" }}
        />
      </div>

      <ul className={cx("search-filter")}>
        {resultFilter &&
          focused &&
          resultFilter.map((content, index) => (
            <li
              key={index}
              onClick={() => handleClickElementFilter(content)}
              className="li-content"
            >
              {content}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SearchElement;
