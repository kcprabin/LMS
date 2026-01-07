const API_BASE_URL = 'http://localhost:8000/api/v1/library';
// prabinnn apiiiii for admin parts 
// edit books http://localhost:8000/api/v1/library/editbook/:bookId method PUT
// delete books http://localhost:8000/api/v1/library/deletebook/:bookId  method DELETE
// add books http://localhost:8000/api/v1/library/addbook  method POST
// delete members http://localhost:8000/api/v1/library/deleteuser/:email already impleted 
// add members http://localhost:8000/api/v1/library/addmember  already impleted


// for user 
// get profile http://localhost:8000/api/v1/library/profile method GET
// update profile http://localhost:8000/api/v1/library/updateprofile   method PUT

// for student
// borrow book http://localhost:8000/api/v1/library/borrowbook method POST
// getBorrewed books info http://localhost:8000/api/v1/library/seebook method GET
// get history http://localhost:8000/api/v1/library/history method GET

// cheeck hai tyo student books borrowed huda time backend mai xha update bhaxhina xhina natra hardcoded ki in frotnend make it





export const getMembers = async() => {

    try{
        const response = await fetch(`${API_BASE_URL}/members`, {
            method: "GET",
            credentials: 'include'
        });
        if (!response.ok) throw new Error ("Failed to Fetch members");
        return await response.json();
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
  try {
    
    const response = await fetch(`${API_BASE_URL}/rememberme`, {
      method: "GET",
      credentials: 'include'
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to fetch user");
    }

    return await response.json();
  } catch (error) {
    console.error('Error in getUser:', error);
    throw error;
  }
};

export const borrowBook = async (bookId) => {
  try {
    const response = await fetch('http://localhost:8000/api/v1/library/borrowbook', {
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ bookid: bookId })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to borrow book');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error borrowing book:', error);
    throw error;
  }
};

export const returnBookApi = async (issueId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/returnbook`, {
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ issueId })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to return book');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error returning book:', error);
    throw error;
  }
};
{/*write a function to fetch any thing in the frontend here and then call the function in the respective file */}