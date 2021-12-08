import * as Yup from 'yup';

const required = 'Field is required'

const SUPPORTED_FORMATS = [
    'image/jpg',
    'image/jpeg',
    'image/gif',
    'image/png'
]

export const newPlaceSchema = Yup.object().shape({
    name: Yup
        .string()
        .required(required)
        .min(3, 'The place name must have a minimum of 3 letters')
        .max(40, 'The place name must have a maximum of 40 letters'),
    location: Yup
        .string()
        .required(required),
    images: Yup
        .mixed()
        .required('Picture of a place is required')
        .test(
            'fileFormat',
            'File must be of format jpg, jpeg, gif, png',
            value => value && SUPPORTED_FORMATS.includes(value.type)
        ),
    entry: Yup
        .number()
        .typeError('Entry must be a number')
        .positive('Entry must be a positive number')
        .lessThan(9999, 'The entry price is too high')
        .required(required)
    ,
    description: Yup
        .string()
        .min(20, 'Place description must have a minimum of 20 letters')
        .max(445, 'Place description must have a maximum of 455 letters')
        .required(required)
})

export const editPlaceSchema = Yup.object().shape({
    name: Yup
        .string()
        .required(required)
        .min(3, 'The place name must have a minimum of 3 letters')
        .max(40, 'The place name must have a maximum of 40 letters'),
    location: Yup
        .string()
        .required(required),
    entry: Yup
        .number()
        .typeError('Entry must be a number')
        .positive('Entry must be a positive number')
        .lessThan(9999, 'The entry price is too high')
        .required(required)
    ,
    description: Yup
        .string()
        .min(20, 'Place description must have a minimum of 20 letters')
        .max(455, 'Place description must have a maximum of 455 letters')
        .required(required)
})

export const reviewSchema = Yup.object().shape({
    description: Yup
        .string()
        .min(15, 'Place description must have a minimum of 15 letters')
        .max(255, 'Place description must have a maximum of 255 letters')
        .required(required)
})