import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React, { useState } from 'react'
import { Input } from "baseui/input";
import { Textarea } from "baseui/textarea";
import { Select } from "baseui/select";
import { Button, SIZE, SHAPE } from "baseui/button";
import {toaster, ToasterContainer} from 'baseui/toast';

const ContactPage = () => {
    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [value, setValue] = useState([]);
    // const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [toastKey, setToastKey] = useState(null);

    const { name, email, message } = formData;

    const onChange = e => setFormData({ [e.target.name]: e.target.value })

    const showToast = () =>
    setToastKey(toaster.positive('Message Successfully Sent!'));

    const loadingProps = {
        isLoading: loading ? true : false,
        disabled: loading ? true : false
    }

    const onSubmit = e =>{
        e.preventDefault();
        setLoading(true);
        setTimeout(() =>{
            setLoading(false);
        },1500)
        setTimeout(() => {
            showToast();
        },2000)
    }

    return (
        <MDBContainer className="py-5 my-5">
            <ToasterContainer autoHideDuration={1500}/>
            <h1 className="cursive display-4 text-center">Drop Us a Line</h1>
            <form onSubmit={e=>onSubmit(e)}>
            <MDBRow center>
                <MDBCol md="6" lg="6">
                    <MDBRow className="py-2">
                        <MDBCol>
                            <Input
                                name="name"
                                type="text"
                                value={name}
                                onChange={e => onChange(e)}
                                placeholder="Your Name"
                                clearOnEscape
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="py-2">
                        <MDBCol>
                            <Input
                                value={email}
                                type="email"
                                name="email"
                                onChange={e => onChange(e)}
                                placeholder="Your Email"
                                clearOnEscape
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="py-2">
                        <MDBCol>
                            <Select
                                options={[
                                    { label: "Report a bug", id: "report_a_bug" },
                                    { label: "General Feedback", id: "general_feedback" },
                                    { label: "Inquiry", id: "inquiry" },
                                    { label: "Others", id: "others" },
                                ]}
                                value={value}
                                placeholder="Select Subject"
                                onChange={params => setValue(params.value)}
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="py-2">
                        <MDBCol>
                            <Textarea
                                name="message"
                                value={message}
                                onChange={e => onChange(e)}
                                placeholder="Your Message"
                                clearOnEscape
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow center className="py-4 text-center">
                        <MDBCol>
                            <Button
                                size={SIZE.large}
                                shape={SHAPE.pill}
                                type="submit"
                                {...loadingProps}
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
        </MDBContainer>
    )
}

export default ContactPage
