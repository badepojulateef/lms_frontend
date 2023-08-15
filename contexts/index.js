"use client";
import { createContext, useContext, useReducer, useMemo } from "react";

import PropTypes from "prop-types";

// Material Dashboard 2 React main context
const MaterialUI = createContext();

MaterialUI.displayName = "MaterialUIContext";

function reducer(state, action) {
	switch (action.type) {
		case "LEFT_NAV": {
			return { ...state, leftNav: action.value };
		}

		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}

function MaterialUIControllerProvider({ children }) {
	const initState = {
		leftNav: false,
	};

	const [controller, dispatch] = useReducer(reducer, initState);

	const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

	return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>;
}

function useMaterialUIController() {
	const context = useContext(MaterialUI);

	if (!context) {
		throw new Error(
			"useMaterialUIController should be used inside the MaterialUIControllerProvider."
		);
	}

	return context;
}

MaterialUIControllerProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

const setLeftNav = (dispatch, value) => dispatch({ type: "LEFT_NAV", value });

export { MaterialUIControllerProvider, useMaterialUIController, setLeftNav };
