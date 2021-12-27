// File to keeps track of the authentication state of the current user on the website
import { createContext, useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

// How to create a context in React
const AuthContext = createContext({
  user: null, // Default value
  login: () => {},
  logout: () => {},
  authReady: false, // Keep track of when we've established a connection to netlify identity
});

// When creating context we also need a provider

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
      console.log("login event");
    });
    // Init netlify identity connection
    netlifyIdentity.init();
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };

  const context = {
    user: user,
    login: login,
  };

  // Children represents whatever this components wraps over
  return (
    // Passing a user inside this props
    <AuthContext.Provider value={context}>
      {/* Output of the children are here */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;