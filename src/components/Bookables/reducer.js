const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_GROUP':
			return {
				...state,
				group: action.payload,
				bookableIndex: 0,
			};
		case 'SET_BOOKABLE':
			return {
				...state,
				bookableIndex: action.payload,
			};

		case 'TOGGLE_HAS_DETAILS':
			return {
				...state,
				hasDetails: !state.hasDetails,
			};

		case 'NEXT_BOOKABLE':
			//count bookables in current group
			const count = state.bookables.filter(
				(b) => b.group === state.group
			).length;
			return {
				...state,
				bookableIndex: (state.bookableIndex + 1) % count,
			};

		case 'FETCH_BOOKABLES_REQUEST':
			return {
				...state,
				isLoading: true,
				error: false, // clear any error messages
				bookables: [], //clear bookables when requesting new data
			};

		case 'FETCH_BOOKABLES_SUCCESS':
			return {
				...state,
				isLoading: false,
				bookables: action.payload, //pass the loaded bookables to the reducer via payload
			};

		case 'FETCH_BOOKABLES_ERROR':
			return {
				...state,
				isLoading: false,
				error: action.payload, //pass the error to the reducer via payload
			};

		default:
			return state;
	}
};

export default reducer;
