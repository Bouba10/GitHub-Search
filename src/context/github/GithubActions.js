

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;


//search users
export const searchUsers = async (text) => {

   

    const params = new URLSearchParams({
        q: text,
    })


    const resp = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const {items} = await resp.json();
 
   return items
  };


    //Get a single User
  export  const getUser = async (login) => {

        
        const resp = await fetch(`${GITHUB_URL}/users/${login}`, {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        });
       
     
    if (resp.status === 404){
      window.location ='/notfound'
    }else {
      const data = await resp.json()
      
     return data
    }
    
    };
    
     //Get UserRepos
   export  const getUserRepos = async (login) => {
    
      const resp = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });
      const data = await resp.json();
    
    return data
    };