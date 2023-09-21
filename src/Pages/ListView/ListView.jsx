import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { useUserContext } from '../../Context/UserContext';
import { fetchUsers } from '../../redux/actions/userActions';
import Spinner from '../../Components/Spinner/Spinner';

const UserProfileList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const { setSelectedUser,isLoading } = useUserContext(); // Use the context

  useEffect(() => {
    axios.get('Users.json').
    then((response) => {
      dispatch(fetchUsers(response.data.users));
    });
  }, [dispatch]);

  const handleUserClick = (user) => {
    setSelectedUser(user); // Set the selected user in the context
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10">
      {users.map((user) => (
        <Link
        to={`/detail-view/${user.id}`}
          key={user.id}
          onClick={() => handleUserClick(user)}
        >
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-3">
              <img
                src={user.picture}
                alt={user.name}
                className="mx-auto w-full h-64 mb-6 rounded"
              />
              <div className="text-center mb-4">
                <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
                <p className="text-gray-600 text-lg">{user.email}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UserProfileList;
