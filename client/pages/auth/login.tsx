import React  from "react";
import { TextField } from "formik-material-ui";
import {Box, Button, Card, CardContent, CardMedia} from "@mui/material"
import { Formik, Form, Field, FormikProps } from "formik";

function Login() {
  const showForm = ({
    dirty,
    values,
    isValid,
    handleSubmit,
    setFieldValue,
  }: FormikProps<any>) => {
    return (
      <Form onSubmit={handleSubmit}>
        <Field
          component={TextField}
          id="username"
          name="username"
          margin="normal"
          required
          fullWidth
          label="ชื่อผู้ใช้งาน"
          autoComplete="email"
          autoFocus
        />
        <Field
          component={TextField}
          name="password"
          margin="normal"
          required
          fullWidth
          label="รหัสผ่าน"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Login
        </Button>
        <Button
          fullWidth
          size="small"
          color="primary"
        >
          Register
        </Button>
      </Form>
    );
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="/static/image/next_login.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Formik
              initialValues={{ username: "", password: "" }}
              onSubmit={async (values) => {
                console.log(values);
              }}
            >
              {(props) => showForm(props)}
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </React.Fragment>
  );
}

export default Login;
