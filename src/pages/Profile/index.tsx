import { useContext } from "react";
import UserContext from "../../context/UserContext";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Profile() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useContext must be used within a UserProvider');
  }

  const { user } = context;

  return (
    <Card variant="outlined" sx={{ bgcolor: '#2A2A2A' }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ color: '#E0E0E0' }}>
          User Profile
        </Typography>
        {user ? (
          <>
            <Typography sx={{ color: '#E0E0E0' }} variant="body2">
              ID: {user.id}
            </Typography>
            <Typography sx={{ color: '#E0E0E0' }} variant="body2">
              Email: {user.email}
            </Typography>
            <Typography sx={{ color: '#E0E0E0' }} variant="body2">
              Username: {user.username}
            </Typography>
            <Typography sx={{ color: '#E0E0E0' }} variant="body2">
              Password: {user.password}
            </Typography>
            <Typography sx={{ color: '#E0E0E0' }} variant="body2">
              Status: {user.ativo ? 'Active' : 'Inactive'}
            </Typography>
            <Typography sx={{ color: '#E0E0E0' }} variant="body2">
              created at: {user.createdAt}
            </Typography>
            <Typography sx={{ color: '#E0E0E0' }} variant="body2">
              updated at: {user.updatedAt == null ? 'Not updated' : user.updatedAt}
            </Typography>
            <Typography sx={{ color: '#E0E0E0' }} variant="body2">
              deleted at: {user.deletedAt == null ? 'Not deleted' : user.deletedAt}
            </Typography>
          </>
        ) : (
          <Typography sx={{ color: '#E0E0E0' }} variant="body2">
            No user logged in
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default Profile;
