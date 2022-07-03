import {
  Card,
  CardMedia,
  CardContent,
  TextField,
  Button,
  Box,
  Grid,
  Link,
} from "@mui/material";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import logo from "../assets/images/logo-login.png";

function login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://147.50.231.136/api/auth/login", { data })
      .then((res) => {
        toast.success('เข้าสู่ระบบเรียบร้อย');
        console.log(res.data)
      });
  };

  return (
    <Box
      m={15}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia height="180" component="img" alt="logo-login" image={logo} />
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              autoFocus
              required
              fullWidth
              type="text"
              id="username"
              label="ชื่อผู้ใช้งาน"
              margin="normal"
              autoComplete="username"
              {...register("loginname", { required: true })}
            />
            <TextField
              autoFocus
              required
              fullWidth
              id="password"
              label="รหัสผ่าน"
              type="password"
              margin="normal"
              autoComplete="current-password"
              {...register("password", { required: true })}
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              เข้าสู่ระบบ
            </Button>
            <Grid container>
              <Grid item xs m={1}>
                <Link href="#" variant="body2">
                  สมัครสมาชิก
                </Link>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default login;
