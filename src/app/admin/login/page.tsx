'use client';

import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const res = await signIn('credentials', {
      redirect: false,
      username: form.get('username'),
      password: form.get('password'),
    });

    if (res?.ok) {
      router.push('/admin/dashboard');
    } else {
      alert('Invalid credentials');
    }
  }

  return (
    <Container maxWidth="sm">
      <Paper sx={{ mt: 10, p: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Admin Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            name="username"
            label="Username"
            fullWidth
            margin="normal"
            required
          />

          <TextField
            name="password"
            type="password"
            label="Password"
            fullWidth
            margin="normal"
            required
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
