import {useEffect} from "react";
import useAction from "../../hooks/useAction";
import * as Yup from "yup";
import {useFormik} from "formik";
import {Box, Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Modal, TextField} from "@mui/material";
import {FormError} from "../errors/Errors";
import {useSelector} from "react-redux";
import Typography from "@mui/material/Typography";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

const UserCreateModal = ({action, open, handleClose, title, isEdit=false, user}) => {
    const {roles, isLoaded} = useSelector(state => state.role)
    const {loadRoles} = useAction()

    useEffect(() => {
        if (!isLoaded) {
            loadRoles()
        }
        if (isEdit) {
            formik.setValues(user)
            formik.setFieldValue("roles", user.roles.map((role) => role.name))
        }
    }, [])

    const formHandler = (values) => {
        if (!isEdit) {
            delete values.id
        } else {
            delete values.password
        }
        action(values)
        handleClose()
    }

    const initValues = {
        id: "",
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        roles: [],
        image: null
    }

    const yupValidationScheme = Yup.object({
        userName: Yup.string().required("обов'язково").max(20, "Максимум 20 символів"),
        firstName: Yup.string().required("обов'язково").max(20, "Максимум 20 символів"),
        lastName: Yup.string().required("обов'язково").max(20, "Максимум 20 символів"),
        email: Yup.string().required("Пошта обов'язкова").email("Невірний формат пошти"),
        password: Yup.string().when(`${isEdit}`, {
            is: false,
            then: (schema) => schema.required('Пароль обов’язковий').min(8, 'Пароль повинен містити не менше 8 символів'),
            otherwise: (schema) => schema.notRequired(),
        }),
        roles: Yup.array().min(1, 'Виберіть хоча б одну роль').required('Ролі обов’язкові'),
        image: Yup.mixed().notRequired().test('fileType', 'Тільки зображення дозволені', (value) => !value || value.type?.startsWith('image/'))
    })

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: formHandler,
        validationSchema: yupValidationScheme
    })

    const handleRoleChange = (event) => {
        const name = event.target.name
        const updatedRoles = formik.values.roles.includes(name)
            ? formik.values.roles.filter(r => r !== name)
            : [...formik.values.roles, name];
        formik.setFieldValue("roles", updatedRoles)
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} component="form" onSubmit={formik.handleSubmit} className='form-container'>
                    <Typography textAlign="center" id="modal-modal-title" variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Box className="form-control">
                        <TextField
                            id="userName"
                            name="userName"
                            label="User name"
                            variant="filled"
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.userName}
                            onBlur={formik.handleBlur}
                        />
                    </Box>
                    {formik.touched.userName && formik.errors.userName ? (
                        <FormError text={formik.errors.userName} />
                    ) : null}
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
                    {!isEdit && <Box className="form-control">
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
                    </Box>}
                    {!isEdit && formik.touched.password && formik.errors.password ? (
                        <FormError text={formik.errors.password} />
                    ) : null}
                    <Box className="form-control">
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.image}
                            onBlur={formik.handleBlur}
                        />
                    </Box>
                    {!isEdit && formik.touched.image && formik.errors.image ? (
                        <FormError text={formik.errors.image} />
                    ) : null}


                    <Box className="form-control">
                        <FormLabel>Role</FormLabel>
                        <FormGroup>
                            {roles.map((role) => (
                                <FormControlLabel
                                    key={role.id}
                                    control={<Checkbox
                                        checked={formik.values.roles.includes(role.name)}
                                        onChange={handleRoleChange}
                                        name={role.name}
                                    />}
                                    label={role.name}
                                />
                            ))}
                        </FormGroup>
                    </Box>
                    {!isEdit && formik.touched.roles && formik.errors.roles ? (
                        <FormError text={formik.errors.roles} />
                    ) : null}


                    <Box className="form-control">
                        <Button type='submit' variant='contained' fullWidth>{ isEdit ? "Save" : "Create" }</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default UserCreateModal