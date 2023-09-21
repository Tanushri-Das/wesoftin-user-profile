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

// import React, { createContext, useContext, useState, useEffect } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [selectedUser, setSelectedUser] = useState(null); // Initial state is null
//   const [isLoading, setIsLoading] = useState(true); // Loading state

//   // Simulate data fetching (you can replace this with your actual data fetching logic)
//   useEffect(() => {
//     const fetchData = async () => {
//       // Simulate a delay
//       await new Promise((resolve) => setTimeout(resolve, 2000));

//       // Replace this with your actual data loading logic
//       // For now, set an example user data
//       const userData = {
//         "users": [
//             {
//                 "id": 1,
//                 "name": "John Doe",
//                 "email": "john@example.com",
//                 "profilePicture": "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg",
//                 "address": "Dhaka,Bangladesh",
//                 "phone":"+8801583614277",
//                 "profession":"Software Enginner",
//                 "Nationality":"Bangladeshi"
//               },
//               {
//                 "id": 2,
//                 "name": "Alice Johnson",
//                 "email": "alice@example.com",
//                 "profilePicture": "https://media.istockphoto.com/id/1369508766/photo/beautiful-successful-latin-woman-smiling.jpg?s=612x612&w=0&k=20&c=LoznG6eGT42_rs9G1dOLumOTlAveLpuOi_U755l_fqI=",
//                 "address": "Sylhet,Bangladesh",
//                 "phone":"+8801693614233",
//                 "profession":"Cloud Enginner",
//                 "Nationality":"Bangladeshi"
//               },
//               {
//                 "id": 3,
//                 "name": "Anisul Islam",
//                 "email": "anis@example.com",
//                 "profilePicture": "https://media.istockphoto.com/id/1319763895/photo/smiling-mixed-race-mature-man-on-grey-background.jpg?s=612x612&w=0&k=20&c=ZiuzNX9LhTMMcRFrYNfq_zFR7O_aH-q7x1L5elko5uU=",
//                 "address": "Chittagonj,Bangladesh",
//                 "phone":"+8801393975223",
//                 "profession":"Content Writer",
//                 "Nationality":"Bangladeshi"
//               },
//               {
//                 "id": 4,
//                 "name": "Bob Brown",
//                 "email": "bob@example.com",
//                 "profilePicture": "https://img.freepik.com/premium-photo/portrait-smiling-young-man-dressed-shirt_171337-30374.jpg?w=2000",
//                 "address": "Dhaka,Bangladesh",
//                 "phone":"+8801693854228",
//                 "profession":"Professor",
//                 "Nationality":"Bangladeshi"
//               },
//               {
//                 "id": 5,
//                 "name": "Emily Davis",
//                 "email": "emily@example.com",
//                 "profilePicture": "https://media.istockphoto.com/id/682897825/photo/confident-businesswoman-over-gray-background.jpg?s=612x612&w=0&k=20&c=6uF-aYj0erHJsIw4P54HsNh6S3TZiFH2T3mwwWHtbvk=",
//                 "address": "Sunamgonj,Bangladesh",
//                 "phone":"+8801593654298",
//                 "profession":"Digital Marketer",
//                 "Nationality":"Bangladeshi"
//               },
//               {
//                 "id": 6,
//                 "name": "Michael Wilson",
//                 "email": "michael@example.com",
//                 "profilePicture": "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=ZAXJYLesh6gSd9huAgpy6rjpR4z-IFVH9MpxrKIXCrs=",
//                 "address": "Dhaka,Bangladesh",
//                 "phone":"+8801693854228",
//                 "profession":"Flim Writer",
//                 "Nationality":"Bangladeshi"
//               },
//               {
//                 "id": 7,
//                 "name": "Olivia Martinez",
//                 "email": "olivia@example.com",
//                 "profilePicture": "https://images.unsplash.com/photo-1645378999488-63138abdecd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyJTIwZmVtYWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
//                 "address": "Barishal,Bangladesh",
//                 "phone":"+8801927-784174",
//                 "profession":"BusinessMan",
//                 "Nationality":"Bangladeshi"
//               },
//               {
//                 "id": 8,
//                 "name": "David Lee",
//                 "email": "david@example.com",
//                 "profilePicture": "https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.webp?b=1&s=170667a&w=0&k=20&c=c2rsC66nJQAjkN6vCkhyB0vLHUiZhJSACMCBVF9HJJs=",
//                 "address": "Moulovhibajar,Bangladesh",
//                 "phone":"+8801583614277",
//                 "profession":"Flim Editor",
//                 "Nationality":"Bangladeshi"
//               },
//               {
//                 "id": 9,
//                 "name": "Sophia Wilson",
//                 "email": "sophia@example.com",
//                 "profilePicture": "https://media.istockphoto.com/id/1386217759/photo/portrait-of-a-confident-young-businesswoman-standing-against-an-urban-background.webp?b=1&s=170667a&w=0&k=20&c=oikPwsT7yx_9XIsNQYte82Fiqg7rBE1tHrlBXWye5jc=",
//                 "address": "Dhaka,Bangladesh",
//                 "phone":"+8801583634256",
//                 "profession":"Singer",
//                 "Nationality":"Bangladeshi"
//               },
//               {
//                 "id": 10,
//                 "name": "Ethan Johnson",
//                 "email": "ethan@example.com",
//                 "profilePicture": "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.webp?b=1&s=170667a&w=0&k=20&c=Dl9uxPY_Xn159JiazEj0bknMkLxFdY7f4tK1GtOGmis=",
//                 "address": "Rajshahi,Bangladesh",
//                 "phone":"+8801927784174",
//                 "profession":"Banker",
//                 "Nationality":"Bangladeshi"
//               },
//               {
//                 "id": 11,
//                 "name": "Ava Anderson",
//                 "email": "ava@example.com",
//                 "profilePicture": "https://media.istockphoto.com/id/1185028107/photo/young-laughing-woman-standing-with-hands-in-pockets-wearing-blank-white-t-shirt-with-copy.jpg?s=612x612&w=0&k=20&c=u32Y6c-VfpL5HOdoRs2WLwp9zFDbGRo4inuRRdnnHKU=",
//                 "address": "Khulna,Bangladesh",
//                 "phone":"+8801623388174",
//                 "profession":"DevOps Enginner",
//                 "Nationality":"Bangladeshi"
//               },
//               {
//                 "id": 12,
//                 "name": "James Thomas",
//                 "email": "james@example.com",
//                 "profilePicture": "https://media.istockphoto.com/id/1392990621/photo/smart-handsome-positive-indian-or-arabian-guy-with-glasses-in-casual-wear-student-or.jpg?s=612x612&w=0&k=20&c=qyj5Dh8_uN5Xue9aICOI0z_OYyzNh_f1pFeAhRA4FQA=" ,
//                 "address": "Bogura,Bangladesh",
//                 "phone":"+8801623388174",
//                 "profession":"DevOps Enginner",
//                 "Nationality":"Bangladeshi"
//               }
//         ]
//       };

//       setSelectedUser(userData.users[0]); // Set an example user
//       setIsLoading(false); // Set isLoading to false when data is loaded
//     };

//     fetchData();
//   }, []);

//   return (
//     <UserContext.Provider value={{ selectedUser, isLoading }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUserContext = () => useContext(UserContext);

// import React, { createContext, useContext, useState, useEffect } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [selectedUser, setSelectedUser] = useState(null); // Initial state is null
//   const [isLoading, setIsLoading] = useState(true); // Loading state

//   // Simulate data fetching (you can replace this with your actual data fetching logic)
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Simulate a delay
//         await new Promise((resolve) => setTimeout(resolve, 2000));

//         // Fetch data from the Users.json file
//         const response = await fetch('/Users.json'); // Update the path
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }

//         // Parse the JSON data
//         const userData = await response.json();
//         console.log(userData.users)

//         setSelectedUser(userData.users.id); // Set an example user
//         setIsLoading(false); // Set isLoading to false when data is loaded
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <UserContext.Provider value={{ selectedUser, isLoading }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUserContext = () => useContext(UserContext);

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
        const response = await fetch('/Users.json'); // Update the path
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

