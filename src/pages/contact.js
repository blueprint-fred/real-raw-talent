import { MDBAnimation, MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React, { useState } from 'react'
import { Input } from "baseui/input";
import { Textarea } from "baseui/textarea";
import { Button, SIZE, SHAPE } from "baseui/button";
import {toaster, ToasterContainer} from 'baseui/toast';
import emailjs from 'emailjs-com';
import {Toast, KIND} from 'baseui/toast';
import { Formik } from "formik";
import * as Yup from "yup";

emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);

const ContactPage = () => {
    const [toastKey, setToastKey] = useState(null);

    const showToast = () =>
    setToastKey(toaster.positive('Message Successfully Sent!'));

    const showErrorToast = (error) =>{
        setToastKey(toaster.negative(`Failed to Send Message! ${error}`))
    }

    const closeToast = () => {
        toaster.clear(toastKey);
        setToastKey(null);
    };

    const contactSchema = Yup.object().shape({
        name: Yup.string()
        .required('name'),
        email: Yup.string()
        .email('email')
        .required('email'),
        subject: Yup.string()
        .required('subject'),
        message: Yup.string()
        .required('message')
    })

    const onSubmit = async values =>{
        await new Promise(resolve => setTimeout(resolve, 2000));
        emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, values)
        .then(function(response) {
            showToast();
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            showErrorToast();
            console.log('FAILED...', error);
        });
        console.log(values);
    }

    return (
        <MDBContainer className="py-5 my-5">
            <ToasterContainer onClick={closeToast} autoHideDuration={1500}/>
            <h1 className="cursive display-4 text-center">Drop Us a Line</h1>
            <Formik
                initialValues={{ name: "", email: "", subject: "", message: "" }}
                onSubmit={onSubmit}
                validationSchema={contactSchema}
                >
                {props => {
                    const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleSubmit,
                    } = props;
                return(
                    <form onSubmit={handleSubmit}>
                        <MDBRow center>
                            <MDBCol md="6" lg="6">
                                <MDBRow className="py-2">
                                    <MDBCol>
                                        <Input
                                            {...{ error: errors.name && touched.name ? true : false }}
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={values.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            clearOnEscape
                                        />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className="py-2">
                                    <MDBCol>
                                        <Input
                                            id="email"
                                            {...{ error: errors.email && touched.email ? true : false }}
                                            value={values.email}
                                            type="text"
                                            name="email"
                                            onChange={handleChange}
                                            placeholder="Your Email"
                                            clearOnEscape
                                        />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className="py-2">
                                    <MDBCol>
                                        <Input
                                            id="subject"
                                            {...{ error: errors.subject && touched.subject ? true : false }}
                                            value={values.subject}
                                            type="text"
                                            name="subject"
                                            onChange={handleChange}
                                            placeholder="Your Subject"
                                            clearOnEscape
                                        />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className="py-2">
                                    <MDBCol>
                                        <Textarea
                                            name="message"
                                            {...{ error: errors.message && touched.message ? true : false }}
                                            id="message"
                                            value={values.message}
                                            onChange={handleChange}
                                            placeholder="Your Message"
                                            clearOnEscape
                                        />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className="py-2">
                                    <MDBCol>
                                        {errors.name && touched.name && <MDBAnimation type="slideInDown">
                                            <div className="text-center validation mx-auto">
                                                <Toast      
                                                    overrides={{
                                                        Body: {
                                                            style: ({ $theme }) => ({ width: `100%` })
                                                        }
                                                    }} 
                                                className="w-100" kind={KIND.negative}>{`Your ${errors.name} needs to be a valid`}</Toast>
                                            </div>
                                        </MDBAnimation>}
                                        {errors.email && touched.email && <MDBAnimation type="slideInDown">
                                            <div className="text-center validation mx-auto">
                                                <Toast      
                                                    overrides={{
                                                        Body: {
                                                            style: ({ $theme }) => ({ width: `100%` })
                                                        }
                                                    }} 
                                                className="w-100" kind={KIND.negative}>{`Your ${errors.email} needs to be a valid`}</Toast>
                                            </div>
                                        </MDBAnimation>}
                                        {errors.subject && touched.subject && <MDBAnimation type="slideInDown">
                                            <div className="text-center validation mx-auto">
                                                <Toast      
                                                    overrides={{
                                                        Body: {
                                                            style: ({ $theme }) => ({ width: `100%` })
                                                        }
                                                    }} 
                                                className="w-100" kind={KIND.negative}>{`Your ${errors.subject} needs to be a valid`}</Toast>
                                            </div>
                                        </MDBAnimation>}
                                        {errors.message && touched.message && <MDBAnimation type="slideInDown">
                                            <div className="text-center validation mx-auto">
                                                <Toast      
                                                    overrides={{
                                                        Body: {
                                                            style: ({ $theme }) => ({ width: `100%` })
                                                        }
                                                    }} 
                                                className="w-100" kind={KIND.negative}>{`Your ${errors.message} needs to be a valid`}</Toast>
                                            </div>
                                        </MDBAnimation>}
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow center className="py-4 text-center">
                                    <MDBCol>
                                        <Button
                                            size={SIZE.large}
                                            shape={SHAPE.pill}
                                            type="submit"
                                            {...{ isLoading: isSubmitting, disabled: isSubmitting }}
                                        >
                                            Send Message
                                        </Button>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className="py-4 text-center">
                                    <MDBCol>
                                        <hr/>
                                        <p className="m-0">
                                            Real Raw Talent by Lucas Allen
                                        </p>
                                        <p className="m-0">
                                            50 Cherrywood Rise
                                        </p>
                                        <p className="m-0">
                                            Ashford, Kent
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                        </form>
                )}}
            </Formik>
        </MDBContainer>
    )
}

export default ContactPage
