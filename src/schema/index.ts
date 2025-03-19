import * as yup from 'yup';

export const productSchema = yup.object({
    code: yup.string().required('El código es obligatorio'),
    name: yup.string().required('El nombre es obligatorio').min(3, 'El nombre debe tener al menos 3 caracteres'),
    description: yup.string().required('La descripción es obligatoria').min(10, 'La descripción debe tener al menos 10 caracteres'),
    quantity: yup.number().required('La cantidad es obligatoria').min(0, 'La cantidad no puede ser negativa'),
    creationDate: yup.date().required('La fecha de creación es obligatoria')
});