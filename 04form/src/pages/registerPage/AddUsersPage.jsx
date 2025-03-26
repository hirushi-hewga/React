import { Box, Button, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import { FormError } from '../../components/errors/Errors'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import './AddUsersPage.css'
import * as Yup from 'yup'
import useAction from '../../hooks/useAction'

const RegisterPage = () => {
    const navigate = useNavigate()
    const {register} = useAction()

    const formHandler = (values) => {
        register(values)
        navigate("/")
    }

    const initValues = {
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        image: ""
    }

    const yupValidationScheme = Yup.object({
        firstName: Yup.string().required("обов'язково").max(50, "Максимум 50 символів"),
        lastName: Yup.string().required("обов'язково").max(50, "Максимум 50 символів"),
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
                <TextField
                  id="image"
                  name="image"
                  label="Image"
                  variant="filled"
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.image}
                  onBlur={formik.handleBlur}
                />
            </Box>
            
            <Box className="form-control">
                <Button type='submit' variant='contained' fullWidth>Add user</Button>
            </Box>

            <Link style={{"margin": "10px", "textAlign": "center", "color": "gray"}} to="/login">Login</Link>
        </Box>
    )
}

export default RegisterPage