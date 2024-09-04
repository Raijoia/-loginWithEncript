import { useContext } from "react";
import UserContext from "../../context/UserContext";

function Profile() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useContext must be used within a UserProvider');
  }

  const { user } = context;

  console.log(user);

  return (
    <>
      <div>
        <h1>User Profile</h1>
        {user ? (
          <>
            <p>ID: {user.id}</p>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
            <p>Status: {user.ativo ? 'Active' : 'Inactive'}</p>
            <p>created at: {user.createdAt}</p>
            <p>updated at: {user.updatedAt}</p>
            <p>deleted at: {user.deletedAt}</p>
          </>
        ) : (
          <p>No user logged in</p>
        )}
      </div>
    </>
  );
}

export default Profile;
