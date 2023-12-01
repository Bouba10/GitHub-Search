import { createContext, useState } from "react";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [lodaing, setLoading] = useState(true);


  const fetchUsers = async () => {
    const resp = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await resp.json();
    setUsers(data);
    setLoading(false);
  };


  return <GithubContext.Provider value={{
    users ,
    lodaing,
    fetchUsers
  }}>
    {children}
  </GithubContext.Provider>
};

export default GithubContext