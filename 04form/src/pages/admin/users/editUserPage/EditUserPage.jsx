import { Box, Button, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import { FormError } from '../../../../components/errors/Errors'
import { useNavigate, useParams } from "react-router-dom"
import { useFormik } from 'formik'
import { useEffect } from 'react'
import "./EditUserPage.css"
import * as Yup from 'yup'

const EditUserPage = ({ isEdit = false }) => {
    const navigate = useNavigate()
    const params = useParams()

    const getRoles = () => {
        const localData = localStorage.getItem("roles")
        if (!localData) {
            navigate("/roles")
        } else {
            return JSON.parse(localData)
        }
    }

    useEffect(() => {
        if (isEdit) {
            const localData = localStorage.getItem("users")
            if (!localData) {
                navigate("/admin/users")
            }
            
            const { id } = params
            const users = JSON.parse(localData)
            const user = users.find(u => u.id == id)
            if (!user) {
                navigate("/admin/users")
            }

            formik.setValues(user)
        }
    }, [])

    const formCreateHandler = (values) => {
        const localData = localStorage.getItem("users")
        if (!localData) {
            localStorage.setItem("users", JSON.stringify([{...values, id: 1}]))
        } else {
            const users = JSON.parse(localData)
            values.id = users[users.length - 1].id + 1
            users.push(values)
            localStorage.setItem("users", JSON.stringify(users))
        }
        navigate("/admin/users")
    }

    const formEditHandler = (values) => {
        const localData = localStorage.getItem("users")
        if(!localData) {
            navigate("/admin/users")
        }

        const users = JSON.parse(localData)
        const userIndex = users.findIndex(u => u.id = values.id)
        users[userIndex] = {...values}
        localStorage.setItem("users", JSON.stringify(users))

        navigate("/admin/users")
    }

    const initValues = {
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "",
        image: ""
    }

    const yupValidationScheme = Yup.object({
        firstName: Yup.string().required("обов'язково").max(50, "Максимум 50 символів"),
        lastName: Yup.string().required("обов'язково").max(50, "Максимум 50 символів"),
        email: Yup.string().required("Пошта обов'язкова").email("Невірний формат пошти"),
        password: Yup.string().required("Пароль обов'язковий").min(8, "Пароль повинен містити не менше 8 символів"),
        role: Yup.string().required("Роль обов'язкова")
    })

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: isEdit ? formEditHandler : formCreateHandler,
        validationSchema: yupValidationScheme
    })

    return (
        <>
            <Box component="form" onSubmit={formik.handleSubmit} className='form-container'>
            <Box sx={{textAlign: "center"}}>
                <h1>{ isEdit ? "Edit user" : "Create user" }</h1>
            </Box>
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
                <FormLabel id="demo-row-radio-buttons-group-label">Role</FormLabel>
                <RadioGroup
                  row aria-labelledby="demo-row-radio-buttons-group-label"
                  name="role"
                  onChange={formik.handleChange}
                  value={formik.values.role}
                  onBlur={formik.handleBlur}>
                    {getRoles()?.map(({name}) => (
                        <FormControlLabel value={`${name}`} control={<Radio />} label={`${name}`} />
                    ))}
                </RadioGroup>
            </Box>
            {formik.touched.role && formik.errors.role ? (
                <FormError text={formik.errors.role} />
            ) : null}
            
            
            <Box className="form-control">
                <Button type='submit' variant='contained' fullWidth>{ isEdit ? "Save" : "Create" }</Button>
            </Box>
        </Box>
        </>
    )
}

export default EditUserPage