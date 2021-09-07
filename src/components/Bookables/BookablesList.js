import React, { useState, Fragment } from "react";
import { bookables } from "../../static.json";
import { FaArrowRight } from "react-icons/fa";

const BookablesList = () => {
  const [group, setGroup] = useState("Kit");
  const bookablesInGroup = bookables.filter((b) => b.group === group);

  const [bookableIndex, setBookableIndex] = useState(0);
  const groups = [...new Set(bookables.map((b) => b.group))];

  //assign currently selected bookable to its own var
  const bookable = bookablesInGroup[bookableIndex];
  const [hasDetails, setHasDetails] = useState(false);

  const nextBookable = () => {
    setBookableIndex((index) => (index + 1) % bookablesInGroup.length);
  };

  const changeGroup = (e) => {
    setGroup(e.target.value);
    setBookableIndex(0);
  };

  return (
    <Fragment>
      <div>
        <select name="" id="" value={group} onChange={changeGroup}>
          {groups.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>

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

      {/* Show details if bookable has them  */}
      {bookable && (
        <div className="bookable-details">
          <div className="item">
            <div className="item-header">
              <h2>{bookable.title}</h2>
              <span className="controls">
                <label htmlFor="">
                  <input
                    type="checkbox"
                    checked={hasDetails}
                    onChange={() => setHasDetails(!hasDetails)}
                  />
                  Show Details
                </label>
              </span>
            </div>

            <p>{bookable.notes}</p>

            {/* Show details if user checks the box  */}
            {hasDetails && (
              <div className="item-details">
                <h3>Availability</h3>
                <div className="bookable-availability">
                  <ul>
                    {bookable.days.sort().map((d) => (
                      <li key={d}>{bookable.days[d]}</li>
                    ))}
                  </ul>
                  <ul>
                    {bookable.sessions.map((s) => (
                      <li key={s}>{bookable.sessions[s]}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default BookablesList;
