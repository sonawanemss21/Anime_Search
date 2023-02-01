import React, { useState } from "react";

export const searchContext = React.createContext({
  resultCount: 0,
  setResultCount: () => {},
});

const SearchContextProvider = (props) => {
  const [resultCount, setResultCount] = useState(0);

  return (
    <searchContext.Provider
      value={{ resultCount: resultCount, setResultCount: setResultCount }}
    >
      {props.children}
    </searchContext.Provider>
  );
};

export default SearchContextProvider;
