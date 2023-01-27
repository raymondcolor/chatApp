import React, {useState, createContext} from 'react';

export const VisibilityContext = createContext(null);

const VisibilityContextProvider = ({children}) => {
  const [type, setType] = useState('password');
  const [show, setShow] = useState(false);

  const changeInput = () => {
    setType((curr) => (curr === 'password' ? 'text' : 'password'));
    setShow(!show);
  };

  return (
    <VisibilityContext.Provider value={{type, show, changeInput}}>
      {children}
    </VisibilityContext.Provider>
  );
};

export default VisibilityContextProvider;
