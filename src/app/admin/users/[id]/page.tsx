
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Avatar,
  Button,
  Divider,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getUser(id: string) {
  const res = await fetch(`https://dummyjson.com/users/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) notFound();
  return res.json();
}

export default async function UserDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;     
  const user = await getUser(id);

  return (
    <Stack spacing={3}>
     <Link href="/admin/users" style={{ textDecoration: 'none' }}>
  <Button variant="outlined">
    ← Back to Users
  </Button>
</Link>


      <Card>
        <CardContent>
          <Grid container spacing={3}>
            
              <Stack alignItems="center" spacing={2}>
                <Avatar src={user.image} sx={{ width: 120, height: 120 }} />
                <Typography variant="h6">
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography color="text.secondary">
                  @{user.username}
                </Typography>
              </Stack>
            

            
              <Stack spacing={2}>
                <Typography variant="h6">Personal Info</Typography>
                <Divider />
                <Typography>Email: {user.email}</Typography>
                <Typography>Phone: {user.phone}</Typography>
                <Typography>Gender: {user.gender}</Typography>
                <Typography>Age: {user.age}</Typography>
              </Stack>
            
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  );
}
