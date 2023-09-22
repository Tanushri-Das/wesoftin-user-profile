import React, { createContext, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Access the user ID from the URL parameters
  const { id } = useParams(); // Use useParams to get the ID

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Fetch data from the Users.json file
        const response = await fetch('/Users.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
  }, [id]);

  // Provide both selectedUser and setSelectedUser in the context value
  const contextValue = { selectedUser, setSelectedUser, isLoading };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

