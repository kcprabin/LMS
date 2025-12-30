const API_BASE_URL = 'http://localhost:8000/api/v1/library';


// yo api to write probel form banuna parxha 
//http://localhost:8000/api/v1/library/writeproblem

// yo api to get problem display 
//http://localhost:8000/api/v1/library/problem


// yo api to borrow book
//http://localhost:8000/api/v1/library/borrowbook


// yo api to get booktaken by user
//http://localhost:8000/api/v1/library/seebook


// aru ta sab mailai sakisake user this api to fetch result and also put data in database


export const getMembers = async() => {

    try{
        const response = await fetch(`${API_BASE_URL}/members`, {
            method: "GET",
            credentials: 'include'
        });
        if (!reponse.ok) throw new Error ("Failed to Fetch members");
        return await response.json;
    }
    catch(error)
    {
        console.error('Error fetching members:',error);
        throw error;
    }
}

export const getBooks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/getbooks`, {
      method: "GET",
      credentials: 'include'
    });
    if (!response.ok) throw new Error('Failed to fetch get books');
    return await response.json();
  } catch (error) {
    console.error('Error fetching get books:', error);
    throw error;
  }
};
export const getIssuedBooks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/seebook`, {
      method: "GET",
      credentials: 'include'
    });
    if (!response.ok) throw new Error('Failed to fetch issued books');
    return await response.json();
  } catch (error) {
    console.error('Error fetching issued books:', error);
    throw error;
  }
};




export const getUser = async () => {
    const response = await fetch('API_BASE_URL}/User',{
    method: "GET",});
return await response.json();
}
{/*write a function to fetch any thing in the frontend here and then call the function in the respective file */}