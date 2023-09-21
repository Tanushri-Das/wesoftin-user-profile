// import React from "react";

// import { useUserContext } from "../../Context/UserContext";
// import "./UserDetail.css";
// import Spinner from "../../Components/Spinner/Spinner";

// const UserDetail = () => {
//   const { selectedUser } = useUserContext(); // Use the context

//   // Check if selectedUser is null (not found) or undefined (loading)
//   if (selectedUser === null) {
//     return <div>User not found</div>;
//   } else if (!selectedUser) {
//     // Render the Spinner component while loading
//     return <Spinner />;
//   }

//   return (
//     <div className="my-12">
//       <h1 className="text-center mt-16 mb-12 text-2xl font-semibold">
//         View User details
//       </h1>
//       <div className="bg-white rounded-lg shadow-lg mx-3 sm:hidden">
//         <div className="py-5">
//           <img
//             src={selectedUser.profilePicture}
//             alt={selectedUser.name}
//             className="mx-auto w-40 h-40 rounded-full"
//           />
//           <div className="text-center my-4">
//             <p className="text-lg font-semibold mb-1">
//               Name : {selectedUser.name}
//             </p>
//             <p className="font-semibold text-lg mb-1">
//               Email : {selectedUser.email}
//             </p>
//             <p className="font-semibold text-lg mb-1">
//               Address : {selectedUser.address}
//             </p>
//             <p className="font-semibold text-lg mb-1">
//               Phone : {selectedUser.phone}
//             </p>
//             <p className="font-semibold text-lg mb-1">
//               Profession : {selectedUser.profession}
//             </p>
//             <p className="font-semibold text-lg mb-1">
//               Nationality : {selectedUser.Nationality}
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="sm:w-3/4 md:w-1/2 mx-auto user-detail-card lg:hidden">
//         <div className="bg-white rounded-lg shadow-lg mx-3">
//           <div className="py-5">
//             <img
//               src={selectedUser.profilePicture}
//               alt={selectedUser.name}
//               className="mx-auto w-40 h-40 rounded-full"
//             />
//             <div className="text-center my-4">
//               <p className="text-lg font-semibold mb-1">
//                 Name : {selectedUser.name}
//               </p>
//               <p className="font-semibold text-lg mb-1">
//                 Email : {selectedUser.email}
//               </p>
//               <p className="font-semibold text-lg mb-1">
//                 Address : {selectedUser.address}
//               </p>
//               <p className="font-semibold text-lg mb-1">
//                 Phone : {selectedUser.phone}
//               </p>
//               <p className="font-semibold text-lg mb-1">
//                 Profession : {selectedUser.profession}
//               </p>
//               <p className="font-semibold text-lg mb-1">
//                 Nationality : {selectedUser.Nationality}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="hidden lg:flex">
//         <table className="w-full bg-white mt-4">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b text-lg">UserImage</th>
//               <th className="py-2 px-4 border-b text-lg">Name</th>
//               <th className="py-2 px-4 border-b text-lg">Email</th>
//               <th className="py-2 px-4 border-b text-lg">Address</th>
//               <th className="py-2 px-4 border-b text-lg">Phone</th>
//               <th className="py-2 px-4 border-b text-lg">Profession</th>
//               <th className="py-2 px-4 border-b text-lg">Nationality</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="py-2 px-4 border-b text-center">
//                 {" "}
//                 <img
//                   src={selectedUser.profilePicture}
//                   alt={selectedUser.name}
//                   className="mt-4 mx-auto w-24 h-24 rounded-full"
//                 />
//               </td>
//               <td className="py-2 px-4 border-b text-center">
//                 {selectedUser.name}
//               </td>
//               <td className="py-2 px-4 border-b text-center">
//                 {selectedUser.email}
//               </td>
//               <td className="py-2 px-4 border-b text-center">
//                 {selectedUser.address}
//               </td>
//               <td className="py-2 px-4 border-b text-center">
//                 {selectedUser.phone}
//               </td>
//               <td className="py-2 px-4 border-b text-center">
//                 {selectedUser.profession}
//               </td>
//               <td className="py-2 px-4 border-b text-center">
//                 {selectedUser.Nationality}
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserDetail;

// <div className="p-4">
//   <h1 className="text-2xl font-semibold">{selectedUser.name}</h1>
//   <p className="text-lg">{selectedUser.email}</p>
//   <img
//     src={selectedUser.profilePicture}
//     alt={selectedUser.name}
//     className="mt-4 mx-auto w-64 h-64 rounded-full"
//   />
//   <p className="mt-4">{selectedUser.additionalInfo}</p>
// </div>

import React from "react";
import "./UserDetail.css";
import { useUserContext } from "../../Context/UserContext";
import Spinner from "../../Components/Spinner/Spinner";

const UserDetail = () => {
  const { selectedUser ,isLoading} = useUserContext(); // Use the context

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="my-12">
      <h1 className="text-center mt-16 mb-12 text-2xl font-semibold">
        View User Details
      </h1>
      <div className="bg-white rounded-lg shadow-lg mx-3 sm:hidden">
        <div className="py-5">
          <img
            src={selectedUser.profilePicture}
            alt={selectedUser.name}
            className="mx-auto w-40 h-40 rounded-full"
          />
          <div className="text-center my-4">
            <p className="text-lg font-semibold mb-1">
              Name : {selectedUser.name}
            </p>
            <p className="font-semibold text-lg mb-1">
              Email : {selectedUser.email}
            </p>
            <p className="font-semibold text-lg mb-1">
              Address : {selectedUser.address}
            </p>
            <p className="font-semibold text-lg mb-1">
              Phone : {selectedUser.phone}
            </p>
            <p className="font-semibold text-lg mb-1">
              Profession : {selectedUser.profession}
            </p>
            <p className="font-semibold text-lg mb-1">
              Nationality : {selectedUser.Nationality}
            </p>
          </div>
        </div>
      </div>
      <div className="sm:w-3/4 md:w-1/2 mx-auto user-detail-card lg:hidden">
        <div className="bg-white rounded-lg shadow-lg mx-3">
          <div className="py-5">
            <img
              src={selectedUser.profilePicture}
              alt={selectedUser.name}
              className="mx-auto w-40 h-40 rounded-full"
            />
            <div className="text-center my-4">
              <p className="text-lg font-semibold mb-1">
                Name : {selectedUser.name}
              </p>
              <p className="font-semibold text-lg mb-1">
                Email : {selectedUser.email}
              </p>
              <p className="font-semibold text-lg mb-1">
                Address : {selectedUser.address}
              </p>
              <p className="font-semibold text-lg mb-1">
                Phone : {selectedUser.phone}
              </p>
              <p className="font-semibold text-lg mb-1">
                Profession : {selectedUser.profession}
              </p>
              <p className="font-semibold text-lg mb-1">
                Nationality : {selectedUser.Nationality}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex">
        <table className="w-full bg-white mt-4">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-lg">UserImage</th>
              <th className="py-2 px-4 border-b text-lg">Name</th>
              <th className="py-2 px-4 border-b text-lg">Email</th>
              <th className="py-2 px-4 border-b text-lg">Address</th>
              <th className="py-2 px-4 border-b text-lg">Phone</th>
              <th className="py-2 px-4 border-b text-lg">Profession</th>
              <th className="py-2 px-4 border-b text-lg">Nationality</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b text-center">
                {" "}
                <img
                  src={selectedUser.profilePicture}
                  alt={selectedUser.name}
                  className="mt-4 mx-auto w-20 h-20 rounded-full"
                />
              </td>
              <td className="py-2 px-4 border-b text-center">
                {selectedUser.name}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {selectedUser.email}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {selectedUser.address}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {selectedUser.phone}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {selectedUser.profession}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {selectedUser.Nationality}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetail;
