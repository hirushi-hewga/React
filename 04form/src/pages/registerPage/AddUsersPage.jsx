import { Box, Button, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import { FormError } from '../../components/errors/Errors'
import { useFormik } from 'formik'
import './AddUsersPage.css'
import * as Yup from 'yup'

const RegisterPage = () => {
    const formHandler = (values) => {
        console.log(values)
        const users = localStorage.getItem("users")
        if (!users) {
            localStorage.setItem("users", JSON.stringify([values]))
        } else {
            const array = JSON.parse(users)
            array.push(values)
            localStorage.setItem("users", JSON.stringify(array))
        }
    }

    const initValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: ""
    }

    const yupValidationScheme = Yup.object({
        firstName: Yup.string().required("обов'язково").max(50, "Максимум 50 символів"),
        lastName: Yup.string().required("обов'язково").max(50, "Максимум 50 символів"),
        email: Yup.string().required("Пошта обов'язкова").email("Невірний формат пошти"),
        password: Yup.string().required("Пароль обов'язковий").min(8, "Пароль повинен містити не менше 8 символів"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Паролі не збігаються"),
        role: Yup.string().oneOf(["user", "admin"]).required("Роль обов'язкова")
    })

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: formHandler,
        validationSchema: yupValidationScheme
    })

    return (
        <Box component="form" onSubmit={formik.handleSubmit} className='form-container'>
            <Box className="form-control">
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First name"
                  variant="filled"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                />
            </Box>
            {formik.touched.firstName && formik.errors.firstName ? (
                <FormError text={formik.errors.firstName} />
            ) : null}
            <Box className="form-control">
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
            {formik.touched.lastName && formik.errors.lastName ? (
                <FormError text={formik.errors.lastName} />
            ) : null}
            <Box className="form-control">
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  variant="filled"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
            </Box>
            {formik.touched.email && formik.errors.email ? (
                <FormError text={formik.errors.email} />
            ) : null}
            <Box className="form-control">
                <TextField
                  type="password"
                  id="password"
                  name="password"
                  label="Password"
                  variant="filled"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
            </Box>
            {formik.touched.password && formik.errors.password ? (
                <FormError text={formik.errors.password} />
            ) : null}
            <Box className="form-control">
                <TextField
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm password"
                  variant="filled"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  onBlur={formik.handleBlur}
                />
            </Box>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <FormError text={formik.errors.confirmPassword} />
            ) : null}

            
            <Box className="form-control">
                <FormLabel id="demo-row-radio-buttons-group-label">Role</FormLabel>
                <RadioGroup
                  row aria-labelledby="demo-row-radio-buttons-group-label"
                  name="role"
                  onChange={formik.handleChange}
                  value={formik.values.role}
                  onBlur={formik.handleBlur}>
                    <FormControlLabel value="user" control={<Radio />} label="user" />
                    <FormControlLabel value="admin" control={<Radio />} label="admin" />
                </RadioGroup>
            </Box>
            {formik.touched.role && formik.errors.role ? (
                <FormError text={formik.errors.role} />
            ) : null}
            
            
            <Box className="form-control">
                <Button type='submit' variant='contained' fullWidth>Add user</Button>
            </Box>
        </Box>
    )
}

export default RegisterPage