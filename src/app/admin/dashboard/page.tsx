'use client';

import { Typography, Button } from '@mui/material';
import { signOut } from 'next-auth/react';
import { useAuthStore } from '@/store/authStore';


export default function DashboardPage() {
  const token = useAuthStore((s) => s.token);

  return (
    <>
      <Typography variant="h4">Admin Dashboard</Typography>
      <Typography sx={{ mt: 2 }}>
        Token stored in Zustand: {token?.slice(0, 20)}...
      </Typography>

      <Button
        sx={{ mt: 4 }}
        variant="outlined"
        onClick={() => signOut()}
      >
        Logout
      </Button>
    </>
  );
}
