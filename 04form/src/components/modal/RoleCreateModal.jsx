import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import {TextField} from "@mui/material";
import {FormError} from "../errors/Errors";
import useAction from "../../hooks/useAction";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import * as Yup from "yup";
import {useFormik} from "formik";

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

const RoleCreateModal = ({action, open, handleClose, title, isEdit=false, role}) => {

    useEffect(() => {
        if (isEdit) {
            formik.setValues(role)
        }
    }, [])

    const formHandler = (values) => {
        if (!isEdit) {
            delete values.id
        }
        action(values)
        handleClose()
    }

    const initValues = {
        id: "",
        name: ""
    }

    const yupValidationScheme = Yup.object({
        name: Yup.string().required("обов'язково").max(20, "Максимум 20 символів")
    })

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: formHandler,
        validationSchema: yupValidationScheme
    })

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
                            type="text"
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
            </Modal>
        </div>
    );
}

export default RoleCreateModal