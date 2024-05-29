import { useReducer } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";

const initialState = {
  search: "",
  todo: [],
};

const reducerFun = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todo: state.todo.filter((item, index) => index !== action.payload),
      };

    case "SEARCH_TODO": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFun, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
