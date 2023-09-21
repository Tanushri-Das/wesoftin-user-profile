// src/UserContext.js
// import { createContext, useContext, useState } from 'react';

// const UserContext = createContext();

// export const useUserContext = () => useContext(UserContext);

// export const UserProvider = ({ children }) => {
//   const [selectedUser, setSelectedUser] = useState(null);

//   return (
//     <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };


import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(null); // Initial state is null
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Simulate data fetching (you can replace this with your actual data fetching logic)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
  
        // Fetch data from the Users.json file
        const response = await fetch('/Users.json'); // Update the path
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
  
        // Parse the JSON data
        const userData = await response.json();
  
        setSelectedUser(userData.users[0]); // Set an example user
        setIsLoading(false); // Set isLoading to false when data is loaded
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <UserContext.Provider value={{ selectedUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
