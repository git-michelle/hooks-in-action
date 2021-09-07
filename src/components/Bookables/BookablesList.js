import React, { Fragment, useReducer } from "react";
import { bookables } from "../../static.json";
import { FaArrowRight } from "react-icons/fa";
import reducer from "./reducer";

const initialState = {
  group: "Rooms",
  bookableIndex: 0,
  hasDetails: true,
  bookables,
};

const BookablesList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // assign state values to local vars
  const { group, bookableIndex, bookables, hasDetails } = state;

  const bookablesInGroup = bookables.filter((b) => b.group === group);
  const groups = [...new Set(bookables.map((b) => b.group))];

  //assign currently selected bookable to its own var
  const bookable = bookablesInGroup[bookableIndex];

  const changeGroup = (e) => {
    dispatch({
      type: "SET_GROUP",
      payload: e.target.value,
    });
  };

  const changeBookable = (selectedIndex) => {
    dispatch({
      type: "SET_BOOKABLE",
      payload: selectedIndex,
    });
  };

  const nextBookable = () => {
    dispatch({ type: "NEXT_BOOKABLE" });
  };

  const toggleDetails = () => {
    dispatch({ type: "TOGGLE_HAS_DETAILS" });
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
                onClick={() => changeBookable(index)}
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
                    onChange={toggleDetails}
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
