'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Pagination,
  Stack,
  Typography,
  Button,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const LIMIT = 10;

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const router = useRouter();

  const fetchUsers = async () => {
    const skip = (page - 1) * LIMIT;

    const url = search
      ? `https://dummyjson.com/users/search?q=${search}`
      : `https://dummyjson.com/users?limit=${LIMIT}&skip=${skip}`;

    const res = await fetch(url);
    const data = await res.json();

    setUsers(data.users);
    setTotal(data.total);
  };

  useEffect(() => {
    fetchUsers();
  }, [page, search]);

  return (
     <Stack spacing={4}>
    {/* Header */}
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="space-between"
      alignItems={{ xs: 'flex-start', sm: 'center' }}
      spacing={2}
    >
      <Typography variant="h4" fontWeight={600}>
        Users
      </Typography>

      <TextField
        size="small"
        label="Search users"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        sx={{ width: { xs: '100%', sm: 300 } }}
      />
    </Stack>

    {/* Table */}
    <Paper elevation={2}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Email</b></TableCell>
              <TableCell><b>Gender</b></TableCell>
              <TableCell><b>Phone</b></TableCell>
              <TableCell><b>Company</b></TableCell>
              <TableCell align="right"><b>Action</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No users found
                </TableCell>
              </TableRow>
            ) : (
              users.map((user) => (
                <TableRow key={user.id} hover>
                  <TableCell>
                    {user.firstName} {user.lastName}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell sx={{ textTransform: 'capitalize' }}>
                    {user.gender}
                  </TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.company?.name}</TableCell>
                  <TableCell align="right">
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() =>
                        router.push(`/admin/users/${user.id}`)
                      }
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>

    {/* Pagination */}
    {!search && total > LIMIT && (
      <Stack alignItems="center">
        <Pagination
          count={Math.ceil(total / LIMIT)}
          page={page}
          onChange={(_, value) => setPage(value)}
          color="primary"
            sx={{
    '& .MuiPagination-ul': {
      justifyContent: 'center',
      flexDirection: 'row', 
    },
  }}
        />
      </Stack>
    )}
  </Stack>
  )
}
