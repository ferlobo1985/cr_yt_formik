import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const myCustomComponent = ({
    field, // { name, value, onChange, onBlur}
    form: { touched, errors },
    ...props
}) => (
    <>  
        <label htmlFor={field.name}>{props.lebelName}</label>
        <input
            type="text"
            className="form-control"
            placeholder={props.placeholder}
            {...field}
        />
        { errors[field.name] && touched[field.name] ?
            <span>{errors[field.name]}</span>
        : null}

    </>
)

const FormThree = () => {

    const formikProps = {
        initialValues:{ firstname:'', color:'', lastname:'', age:'' },
        validationSchema:Yup.object({
            firstname: Yup.string().required('Sorry, this is required'),
            lastname: Yup.string().required('Sorry, this is required 2'),
            age: Yup.number().required('Sorry, you need an age')
        }),
        onSubmit: values => {
            console.log(values)
        }
    }

    return(
        <div className="container">
            <div className="col-md-12 mt-5">

            <Formik {...formikProps}>
                { formik => (
                    <Form>
                        <label htmlFor="firstname">First name</label>
                        {/* <input 
                            className="form-control" 
                            type="text" 
                            name="firstname"
                        /> */}
                        <Field name="firstname" type="text" className="form-control" />
                        <ErrorMessage name="firstname"/>
                        {/* { formik.errors.firstname && formik.touched.firstname ?
                        <span>{formik.errors.firstname}</span>
                        : null} */}

                        <hr className="mb-4" />

                        <Field
                            as="select"
                            name="color"
                            className="custom-select"
                        >
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                        </Field>

                        <hr className="mb-4" />

                        <Field
                            name="lastname"
                            placeholder="Add a Lastname"
                            component={myCustomComponent}
                            lebelName="Enter you lastname"
                        />

                        <hr className="mb-4" />

                        <Field
                            name="age"
                            placeholder="Add an age"
                            component={myCustomComponent}
                            lebelName="Enter you age"
                        />

                       

                        <button className="btn btn-primary btn-lg btn-block" type="submit">
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
            </div>
        </div>
        
    )
}

export default FormThree;