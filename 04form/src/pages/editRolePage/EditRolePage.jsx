import { Box, Button, TextField } from '@mui/material'
import { FormError } from '../../components/errors/Errors'
import { useNavigate, useParams } from "react-router-dom"
import { useFormik } from 'formik'
import { useEffect } from 'react'
import "./EditRolePage.css"
import * as Yup from 'yup'

const EditRolePage = ({ isEdit = false }) => {
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if (isEdit) {
            const localData = localStorage.getItem("roles")
            if (!localData) {
                navigate("/roles")
            }
            
            const { id } = params
            const roles = JSON.parse(localData)
            const role = roles.find(r => r.id == id)
            if (!role) {
                navigate("/roles")
            }

            formik.setValues(role)
        }
    }, [])

    const formCreateHandler = (values) => {
        const localData = localStorage.getItem("roles")
        if (!localData) {
            localStorage.setItem("roles", JSON.stringify([{...values, id: 1}]))
        } else {
            const roles = JSON.parse(localData)
            values.id = roles[roles.length - 1].id + 1
            roles.push(values)
            localStorage.setItem("roles", JSON.stringify(roles))
        }
        navigate("/roles")
    }

    const formEditHandler = (values) => {
        const localData = localStorage.getItem("roles")
        if(!localData) {
            navigate("/roles")
        }

        const roles = JSON.parse(localData)
        const roleIndex = roles.findIndex(r => r.id == values.id)
        roles[roleIndex] = {...values}
        localStorage.setItem("roles", JSON.stringify(roles))

        navigate("/roles")
    }

    const initValues = {
        id: 0,
        name: ""
    }

    const yupValidationScheme = Yup.object({
        name: Yup.string().required("обов'язково").max(20, "Максимум 20 символів")
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
                    <h1>{ isEdit ? "Edit role" : "Create role" }</h1>
                </Box>
                <Box className="form-control">
                    <TextField
                      id="name"
                      name="name"
                      label="Name"
                      variant="filled"
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      onBlur={formik.handleBlur}
                    />
                </Box>
                {formik.touched.name && formik.errors.name ? (
                    <FormError text={formik.errors.name} />
                ) : null}


                <Box className="form-control">
                    <Button type='submit' variant='contained' fullWidth>{ isEdit ? "Save" : "Create" }</Button>
                </Box>
            </Box>
        </>
    )
}

export default EditRolePage