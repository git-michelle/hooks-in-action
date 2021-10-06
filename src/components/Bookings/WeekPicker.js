import { useReducer, useRef, useState } from 'react';
import reducer from './weekReducer';
import { getWeek } from '../../utils/date-wrangler';
import {
	FaChevronLeft,
	FaChevronRight,
	FaCalendarDay,
	FaCalendarCheck,
} from 'react-icons/fa';

const WeekPicker = ({ date }) => {
	const [week, dispatch] = useReducer(reducer, date, getWeek);

	const textboxRef = useRef();
	const [dateText, setDateText] = useState('2021-01-01');

	const goToDate = () => {
		dispatch({
			type: 'SET_DATE',
			payload: dateText,
		});
	};

	return (
		<div>
			<p className="date-picker">
				<button className="btn" onClick={() => dispatch({ type: 'PREV_WEEK' })}>
					<FaChevronLeft /> <span>Prev</span>
				</button>

				<button className="btn" onClick={() => dispatch({ type: 'TODAY' })}>
					<FaCalendarDay /> <span>Today</span>
				</button>

				{/* Textbox  */}
				<span>
					<input
						type="text"
						ref={textboxRef}
						placeholder="e.g. 2021-10-05"
						value={dateText}
						onChange={(e) => setDateText(e.target.value)}
					/>
					<button className="go btn" onClick={goToDate}>
						<FaCalendarCheck />
						<span>Go</span>
					</button>
				</span>

				<button className="btn" onClick={() => dispatch({ type: 'NEXT_WEEK' })}>
					<FaChevronRight /> <span>Next</span>
				</button>
			</p>

			<p>
				{week.start.toDateString()} - {week.end.toDateString()}
			</p>
		</div>
	);
};

export default WeekPicker;
