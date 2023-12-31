import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext";
import Spinner from "../../Components/Spinner/Spinner";
import "./UserDetail.css";

const UserDetail = () => {
  // Access the user ID from the URL parameters
  const { id } = useParams();
  const { selectedUser, isLoading, setSelectedUser } = useUserContext();

  useEffect(() => {

    const fetchUserData = async () => {
      try {
        // Simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Fetch user data from the JSON file
        const response = await fetch("/Users.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        // Parse the JSON data
        const userData = await response.json();

        // Find the user with the matching ID
        const user = userData.users.find((user) => user.id === parseInt(id));

        // Update the selected user in the context
        setSelectedUser(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [id, setSelectedUser]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="my-20">
      <h1 className="text-center mt-16 mb-12 text-2xl font-semibold">
        View User Details
      </h1>

      <div>
        {/* User details card for smaller screens */}
        {selectedUser && (
          <div className="bg-white rounded-lg shadow-lg mx-3 sm:hidden">
            <div className="pt-3 pb-5">
              <img
                src={selectedUser.picture}
                alt={selectedUser.name}
                className="px-3"
              />
              <div className="text-center my-5">
                <p className="text-lg font-semibold mb-1">
                  Name: {selectedUser.name}
                </p>
                <p className="font-semibold text-lg mb-1">
                  Email: {selectedUser.email}
                </p>
                <p className="font-semibold text-lg mb-1">
                  Address: {selectedUser.address}
                </p>
                <p className="font-semibold text-lg mb-1">
                  Phone: {selectedUser.phone}
                </p>
                <p className="font-semibold text-lg mb-1">
                  Profession: {selectedUser.profession}
                </p>
                <p className="font-semibold text-lg mb-1">
                  Nationality: {selectedUser.Nationality}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* User details card for larger screens */}
        {selectedUser && (
          <div className="sm:w-3/4 md:w-1/2 mx-auto user-detail-card lg:hidden">
            <div className="bg-white rounded-lg shadow-lg mx-3">
              <div className="pt-3 pb-5">
                <img
                  src={selectedUser.picture}
                  alt={selectedUser.name}
                  className="px-3"
                />
                <div className="text-center my-5">
                  <p className="text-lg font-semibold mb-1">
                    Name: {selectedUser.name}
                  </p>
                  <p className="font-semibold text-lg mb-1">
                    Email: {selectedUser.email}
                  </p>
                  <p className="font-semibold text-lg mb-1">
                    Address: {selectedUser.address}
                  </p>
                  <p className="font-semibold text-lg mb-1">
                    Phone: {selectedUser.phone}
                  </p>
                  <p className="font-semibold text-lg mb-1">
                    Profession: {selectedUser.profession}
                  </p>
                  <p className="font-semibold text-lg mb-1">
                    Nationality: {selectedUser.Nationality}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* User details table for larger screens */}
        {selectedUser && (
          <div className="table-large">
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
                      src={selectedUser.picture}
                      alt={selectedUser.name}
                      className="mx-auto w-24 h-24 rounded-full"
                    />
                  </td>
                  <td className="py-2 px-4 border-b text-center text-lg">
                    {selectedUser.name}
                  </td>
                  <td className="py-2 px-4 border-b text-center text-lg">
                    {selectedUser.email}
                  </td>
                  <td className="py-2 px-4 border-b text-center text-lg">
                    {selectedUser.address}
                  </td>
                  <td className="py-2 px-4 border-b text-center text-lg">
                    {selectedUser.phone}
                  </td>
                  <td className="py-2 px-4 border-b text-center text-lg">
                    {selectedUser.profession}
                  </td>
                  <td className="py-2 px-4 border-b text-center text-lg">
                    {selectedUser.Nationality}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/list-view">
          <button className="bg-cyan-400 py-5 px-10 rounded-full text-xl text-white font-semibold">
            Back to Userprofile List page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserDetail;
