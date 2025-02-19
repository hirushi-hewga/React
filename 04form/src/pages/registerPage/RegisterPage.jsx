import { Box, Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import './RegisterPage.css'
import * as Yup from 'yup'

const RegisterPage = () => {
    const formHandler = (values) => {
        console.log(values)
    }

    const initValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const yupValidationScheme = Yup.object({
        firstName: Yup.string().max(50, "Максимум 50 символів"),
        lastName: Yup.string().max(50, "Максимум 50 символів"),
        email: Yup.string().required("Пошта обов'язкова").email("Невірний формат пошти"),
        password: Yup.string().required("Пароль обов'язковий").min(8, "Пароль повинен містити не менше 8 символів"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Паролі не збігаються")
    })

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: formHandler,
        validationSchema: yupValidationScheme
    })

    return (
        <Box component="form" onSubmit={formHandler}>
            <Box>
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First name"
                  variant="filled"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                />
            </Box>
            <Box>
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  variant="filled"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                />
            </Box>
            <Box>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  variant="filled"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                />
            </Box>
            <Box>
                <TextField
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
                  variant="filled"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                />
            </Box>
            <Box>
                <TextField
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm password"
                  variant="filled"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                />
            </Box>
            <Box>
                <Button type='submit' variant='contained' fullWidth>Register</Button>
            </Box>
        </Box>
    )
}

export default RegisterPage