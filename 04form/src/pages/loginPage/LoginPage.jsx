import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google'
import {FormError} from '../../components/errors/Errors'
import {Box, Button, TextField} from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'
import useAction from '../../hooks/useAction'
import {useFormik} from 'formik'
import {useState} from 'react'
import * as Yup from 'yup'
import './LoginPage.css'

const LoginPage = () => {
    const clientId = "863726561080-av2c4tuo1ano7k97m4pvhd5vsg9kfljo.apps.googleusercontent.com"

    const [loginError, setLoginError] = useState(null)
    const navigate = useNavigate()
    const {login, googleLogin} = useAction()

    const formHandler = (values) => {
        setLoginError(null)
        const res = login(values)
        if (res.type === "ERROR") {
            setLoginError(res.payload)
        } else {
            navigate("/")
        }
    }
    
    //google login
    const googleLoginHandler = (responce) => {
        setLoginError(null)
        const res = googleLogin(responce.credential)
        if (res.type === "ERROR") {
            setLoginError(res.payload)
        } else {
            navigate("/")
        }
    }

    const googleErrorHandler = () => {

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
        <GoogleOAuthProvider clientId={clientId}>
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
                <Box style={{margin: "auto"}}>
                    <FormError text={loginError} />
                </Box>
                <Box style={{margin: "auto"}}>
                    <GoogleLogin
                      onSuccess={googleLoginHandler}
                      onError={googleErrorHandler}
                      type="standard"
                      theme="outline"
                      size="large"
                      text="signin"
                      shape="circle"
                      logo_alignment="left"
                      useOneTap={true}
                      width="100%"
                    />
                </Box>
            </Box>
        </GoogleOAuthProvider>
    )
}

export default LoginPage