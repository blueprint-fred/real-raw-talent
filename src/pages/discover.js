import { MDBAnimation, MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React, { useState, useRef } from 'react'
import { Input } from "baseui/input";
import { Button, SIZE, SHAPE } from "baseui/button";
import ArrowRight from 'baseui/icon/arrow-right';
import useLocalStorage from 'react-use-localstorage';
import {Toast, KIND} from 'baseui/toast';
import TermsAndConditions from '../components/TermsAndConditions';
import {
    Checkbox,
    LABEL_PLACEMENT
  } from "baseui/checkbox";
import {FileUploader} from 'baseui/file-uploader';
import { RadioGroup, Radio, ALIGN } from "baseui/radio";
import ProgressiveImage from 'react-progressive-image'
import placeholderImage from '../images/real-raw-talent-preview.jpeg';

const DiscoverPage = () => {

    const [valid, setValid] = useState(null);
    const [item, setItem] = useLocalStorage('email', '');
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(1);
    const [checked, setChecked] = useState(false);
    const [consent, setConsent] = useLocalStorage('terms-consent', false)
    const [value, setValue] = useState("3");
    const [isUploading, setIsUploading] = useState(false);
    const [upload, setUpload] = useState(false);
    const timeoutId = useRef(null);
    const [errorMessage, setErrorMessage] = useState('')

    const reset = () => {
        setIsUploading(false);
        clearTimeout(timeoutId.current);
      }

    const startProgress = () => {
        setIsUploading(true);
        timeoutId.current = setTimeout(reset, 4000);
    }

    const onSubmit = e => {
        e.preventDefault();
        setLoading(true);
        if(item.length !== 0){
            if(item.includes("@")){
                var myHeaders = new Headers();
                myHeaders.append("X-Tadabase-App-id", "5nQxPZRQxY");
                myHeaders.append("X-Tadabase-App-Key", "C0V5T2wTsmS5");
                myHeaders.append("X-Tadabase-App-Secret", "ZLvRPoG8l3C8ZvPeHSXmYrd4HpVnSagE	");
                myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

                var formdata = new FormData();
                formdata.append("field_2362", item);

                var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: `field_2362=${item}`,
                redirect: 'follow'
                };

                fetch("https://api.tadabase.io/api/v1/data-tables/o6WQbbdQnB/records", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if(result.type === 'error'){
                        console.log("error"+result.type)
                        setValid(false);
                        setLoading(false);
                        setItem('');
                        setErrorMessage("Your email needs to be a valid email address: already taken")
                    }
                    else{
                        console.log("result"+result)
                        setLoading(false);
                        setValid(true);
                        setTimeout(() =>{
                            setStep(2);
                        },1000)
                    }
                })
                .catch(error => {
                    console.log("error"+error)
                    setValid(false);
                    setLoading(false);
                    setItem('');
                    setErrorMessage("Your email needs to be a valid email address: already taken")
                });
            }
            else{
                setTimeout(() =>{
                    setValid(false);
                    setLoading(false);
                    setItem('');
                },1500)
            }
        }
        else{
            setTimeout(() =>{
                setValid(false);
                setLoading(false);
                setItem('');
            },1500)
        }
    }

    const consentApproval = e => {
        e.preventDefault();
        setConsent(checked);
        setStep(3)
    }

    const loadingProps = {
        disabled: loading ? true  : false,
        isLoading: loading ? true : false
    }

    const loadingPropsCheckbox = {
        disabled: checked ? false: true
    }

    return (
        <MDBContainer style={{ height: step === 1 ? `442px` : `100%` }} className="py-5 my-5">
            <div className="py-4">
                <h3 className="h3-responsive cursive font-weight-bold text-center">{step === 1 ? `We need your Email` : step ===2 ? `We need you to read our Terms & Conditions` : step === 3 ? `We need to upload your content` : step === 4 ? `We need to customize your content` : `Published Content`}</h3>
                <p className="grey-text text-center small">{step === 5 ? `Browse and listen through your uploaded content.` : `Before continuing to use Real Raw Talent first we need something from you.`}</p>
            </div>
            {step === 1 && <form onSubmit={e=>onSubmit(e)}>
                <MDBRow center>
                    <MDBCol md="6" lg="6">
                        {valid !== null && !valid && <MDBAnimation type="slideInDown">
                            <div className="text-center validation mx-auto py-2">
                                <Toast      
                                    overrides={{
                                        Body: {
                                            style: ({ $theme }) => ({ width: `100%` })
                                        }
                                    }} 
                                className="w-100" kind={KIND.negative}>{errorMessage !== ''? errorMessage : `Your email needs to be a valid email address`}</Toast>
                            </div>
                        </MDBAnimation>}
                        {valid !== null && valid && <MDBAnimation type="slideInDown">
                            <div className="text-center validation mx-auto py-2">
                                <Toast      
                                    overrides={{
                                        Body: {
                                            style: ({ $theme }) => ({ width: `100%` })
                                        }
                                    }} 
                                className="w-100" kind={KIND.positive}>Thank you for entering a valid email address</Toast>
                            </div>
                        </MDBAnimation>}
                        <Input
                            name="email"
                            value={item}
                            onChange={e => setItem(e.target.value)}
                            placeholder="Your Email"
                            clearOnEscape
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow center className="text-center py-4">
                    <MDBCol md="3" lg="3">
                        <Button
                            endEnhancer={() => <ArrowRight size={24} />}
                            className="w-100"
                            size={SIZE.large}
                            shape={SHAPE.pill}
                            type="submit"
                            {...loadingProps}
                        >
                            Proceed
                        </Button>
                    </MDBCol>
                </MDBRow>
            </form>}
            {step === 2 && <form onSubmit={e=>consentApproval(e)}>
                <MDBRow center>
                    <MDBCol md="8" lg="8">
                        <TermsAndConditions/>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="py-3" center>
                    <MDBCol md="8" lg="8">
                        <Checkbox
                            checked={checked}
                            onChange={e => setChecked(e.target.checked)}
                            labelPlacement={LABEL_PLACEMENT.right}
                        >
                            I agree to these terms and conditions {<div hidden>{consent}</div>}
                        </Checkbox>
                    </MDBCol>
                </MDBRow>
                <MDBRow center className="text-center py-4">
                    <MDBCol md="3" lg="3">
                        <Button
                            endEnhancer={() => <ArrowRight size={24} />}
                            className="w-100"
                            size={SIZE.large}
                            type="submit"
                            shape={SHAPE.pill}
                            {...loadingPropsCheckbox}
                            
                        >
                            Proceed
                        </Button>
                    </MDBCol>
                </MDBRow>
            </form>}
            {step === 3 && <div>
                <MDBRow center>
                    <MDBCol md="8" lg="8">
                    <FileUploader
                        onCancel={reset}
                        onDrop={(acceptedFiles, rejectedFiles) => {
                            // handle file upload...
                            setTimeout(() => {
                                setUpload(true);
                            }, 4000)
                            startProgress();
                        }}
                        progressMessage={
                            isUploading ? `Uploading... hang tight.` : ''
                        }
                    />
                    </MDBCol>
                </MDBRow>
                <MDBRow center className="text-center py-4">
                    <MDBCol md="3" lg="3">
                        <Button
                            endEnhancer={() => <ArrowRight size={24} />}
                            className="w-100"
                            size={SIZE.large}
                            type="buton"
                            shape={SHAPE.pill}
                            {...{
                                disabled: upload ? false: true
                            }}
                            onClick={()=>setStep(4)}
                        >
                            Proceed
                        </Button>
                    </MDBCol>
                </MDBRow>
            </div>}
            {step === 4 && <div>
                <MDBRow className="text-center" center>
                    <MDBCol md="6" lg="6">
                        <RadioGroup
                            overrides={{
                                RadioGroupRoot: {
                                    style: ({ $theme }) => ({
                                        alignContent: `center`
                                    })
                                }
                            }}
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            name="number"
                            align={ALIGN.vertical}
                        >
                            <Radio 
                                value="1"
                                description="This is a radio description"
                            >
                                EDM Chill
                            </Radio>
                            <Radio
                                value="2"
                                description="This is a radio description"
                            >
                                Post Malone Vibes
                            </Radio>
                            <Radio 
                                value="3"
                            >
                                Slow R&B
                            </Radio>
                        </RadioGroup>
                    </MDBCol>
                </MDBRow>
                <MDBRow center className="text-center py-4">
                    <MDBCol md="3" lg="3">
                        <Button
                            endEnhancer={() => <ArrowRight size={24} />}
                            className="w-100"
                            size={SIZE.large}
                            type="buton"
                            shape={SHAPE.pill}
                            {...loadingProps}
                            onClick={()=>setStep(5)}
                        >
                            Proceed
                        </Button>
                    </MDBCol>
                </MDBRow>
            </div>}
            {step === 5 && <div>
                <MDBRow className="text-center" center>
                    <MDBCol md="8" lg="8">
                        <MDBRow center>
                            <MDBCol className="py-3 py-lg-0 py-md-0" md="4" lg="4">
                                <ProgressiveImage src={"https://images.pexels.com/photos/352505/pexels-photo-352505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} placeholder={placeholderImage}>
                                    {(src, loading) => <img className="img-fluid" style={{ filter: loading && "blur(10px)" }} src={src} alt=""/>}
                                </ProgressiveImage>
                            </MDBCol>    
                            <MDBCol className="py-3 py-lg-0 py-md-0" md="4" lg="4">
                                <ProgressiveImage src={"https://images.pexels.com/photos/352505/pexels-photo-352505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} placeholder={placeholderImage}>
                                    {(src, loading) => <img className="img-fluid" style={{ filter: loading && "blur(10px)" }} src={src} alt=""/>}
                                </ProgressiveImage>
                            </MDBCol>   
                            <MDBCol className="py-3 py-lg-0 py-md-0" md="4" lg="4">
                                <ProgressiveImage src={"https://images.pexels.com/photos/352505/pexels-photo-352505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} placeholder={placeholderImage}>
                                    {(src, loading) => <img className="img-fluid" style={{ filter: loading && "blur(10px)" }} src={src} alt=""/>}
                                </ProgressiveImage>
                            </MDBCol>   
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <MDBRow center className="text-center py-4">
                    <MDBCol md="3" lg="3">
                        <Button
                            endEnhancer={() => <ArrowRight size={24} />}
                            className="w-100"
                            size={SIZE.large}
                            type="buton"
                            shape={SHAPE.pill}
                            {...loadingProps}
                            onClick={()=>setStep(3)}
                        >
                            Upload more Content
                        </Button>
                    </MDBCol>
                </MDBRow>
            </div>}
        </MDBContainer>
    )
}

export default DiscoverPage
