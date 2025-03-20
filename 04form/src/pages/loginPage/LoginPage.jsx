import { AuthContext } from '../../components/providers/AuthProvider'
import { FormError } from '../../components/errors/Errors'
import { Box, Button, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './LoginPage.css'
import { useDispatch } from 'react-redux'

const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { login } = useContext(AuthContext)

    const formHandler = (values) => {
        const users = localStorage.getItem("users")
        const array = JSON.parse(users)
        const isValid = false
        if (array) {
            array.forEach(item => {
                if (item.email === values.email && item.password === values.password) {
                    localStorage.setItem("auth", JSON.stringify(item))
                    
                    dispatch({
                        type: "USER_LOGIN",
                        payload: item
                    })
                    
                    navigate('/', {state: {user: values}})
                    isValid = true
                }
            });
            if (!isValid)
                alert('Невірний пароль або пошта')
        }
    }


    const initValues = {
        email: "",
        password: ""
    }


    const yupValidationScheme = Yup.object({
        email: Yup.string().required("Пошта обов'язкова").email("Невірний формат пошти"),
        password: Yup.string().required("Пароль обов'язковий").min(8, "Пароль повинен містити не менше 8 символів")
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
                    <Button type='submit' variant='contained' fullWidth>Login</Button>
                </Box>
                <Link style={{"margin": "10px", "textAlign": "center", "color": "gray"}} to="/register">Register</Link>
            </Box>
    )
}

export default LoginPage