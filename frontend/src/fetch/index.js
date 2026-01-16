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
// getBorrewed books info http://localhost:8000/api/v1/library/borrowedbooks method GET
// get history http://localhost:8000/api/v1/library/history method GET

// check hai tyo student books borrowed huda time backend mai xha update bhaxhina xhina natra hardcoded ki in frontend make it

export const deleteBook = async (bookId) => {
    try{
        const response = await fetch(`${API_BASE_URL}/deletebook/${bookId}`, {
            method: "DELETE",
            credentials: 'include'
        });
        if (!response.ok) throw new Error ("Failed to Delete Book");
        return await response.json();
    }
    catch(error)
    {
        console.error('Error deleting book:',error);
        throw error;
    }
};

export const addBook = async (bookData) => {
    try{
        const response = await fetch(`${API_BASE_URL}/addbook`, {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookData)
        });
        if (!response.ok) throw new Error ("Failed to Add Book");
        return await response.json();
    }
    catch(error)
    {
        console.error('Error adding book:',error);
        throw error;
    }
};

export const editBook = async (bookId, bookData) => {
    try{
        const response = await fetch(`${API_BASE_URL}/editbook/${bookId}`, { 
            method: "PUT",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookData)
        });
        if (!response.ok) throw new Error ("Failed to Add Book");
        return await response.json();
    }
    catch(error)
    {
        console.error('Error adding book:',error);
        throw error;
    }
};

export const updateProfile = async (profileData) => {
    try{
        const response = await fetch(`${API_BASE_URL}/updateprofile`, { 
            method: "PUT",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profileData)
        });
        if (!response.ok) throw new Error ("Failed to Update Profile");
        return await response.json();
    }
    catch(error)
    {
        console.error('Error updating profile:',error);
        throw error;
    }
};

export const getProfile = async () => {
    try{
        const response = await fetch(`${API_BASE_URL}/profile`, {
            method: "GET",
            credentials: 'include'
        });
        if (!response.ok) throw new Error ("Failed to Fetch Profile");
        return await response.json();
    }
    catch(error)
    {
        console.error('Error fetching profile:',error);
        throw error;
    }
};

export const changePassword = async (passwordData) => {
    try{
        const response = await fetch(`${API_BASE_URL}/changepassword`, {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(passwordData)
        });
        if (!response.ok) throw new Error ("Failed to Change Password");
        return await response.json();
    }
    catch(error)
    {
        console.error('Error changing password:',error);
        throw error;
    }
};

export const getHistory = async () => {
    try{
        const response = await fetch(`${API_BASE_URL}/history`, { 
            method: "GET",
            credentials: 'include'
        });
        if (!response.ok) throw new Error ("Failed to Fetch History");
        return await response.json();
    }
    catch(error)
    {
        console.error('Error fetching history:',error);
        throw error;
    }
}

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
    const response = await fetch(`${API_BASE_URL}/borrowbook/${bookId}`, {
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
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

export const returnBookApi = async (borrowId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/returnbook`, {
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ borrowId })
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
