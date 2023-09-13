import React, { useState, FormEvent } from 'react';
import {
  Box,
  Button,
  Container,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import AuthService from "../../services/auth";

const ForgetPassword: React.FC = () => {

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");


    const handle = () => {
        //put 
    }

    return (<Container maxWidth="xs">
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8, }} >
      <Typography component="h1" variant="h5">
        Forget Password
      </Typography>
      <Box component="form" onSubmit={handle} mt={3}>
        <TextField label="username" margin="normal" required fullWidth autoComplete="name" onChange={(e) => setUsername(e.target.value)} value={username} autoFocus />
        <TextField label="Email Address" margin="normal" required fullWidth autoComplete="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
        <LoadingButton type="submit" variant="contained" loading={loading} sx={{ mt: 4, mb: 3 }}>Reset Passord</LoadingButton>
        <Button component={RouterLink} variant="text" to='/login' sx={{ mt: 4, mb: 3 }} >Cancel</Button>
        <FormHelperText>{message}</FormHelperText>
      </Box>
    </Box>
  </Container>);
}


export default ForgetPassword;