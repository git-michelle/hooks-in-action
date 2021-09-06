import React, { useState } from "react";
import { bookables } from "../../static.json";
import { FaArrowRight } from "react-icons/fa";

const BookablesList = () => {
  const group = "Rooms";
  const bookablesInGroup = bookables.filter((b) => b.group === group);

  const [bookableIndex, setBookableIndex] = useState(0);

  const nextBookable = () => {
    setBookableIndex((index) => (index + 1) % bookablesInGroup.length);
  };

  return (
    <div>
      <ul className="bookables items-list-nav">
        {bookablesInGroup.map((bookable, index) => (
          <li key={bookable.id}>
            <button
              className={index === bookableIndex ? "btn selected" : "btn"}
              onClick={() => setBookableIndex(index)}
            >
              {bookable.title}
            </button>
          </li>
        ))}
      </ul>
      <p>
        <button className="btn" onClick={nextBookable} autoFocus>
          <FaArrowRight /> <span>Next</span>
        </button>
      </p>
    </div>
  );
};

export default BookablesList;
