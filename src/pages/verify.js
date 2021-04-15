import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import React, { useState } from 'react'
import { PinCode } from "baseui/pin-code";
import { Button, SIZE, SHAPE } from "baseui/button";
import ArrowRight from 'baseui/icon/arrow-right';

const VerfiyEmailPage = () => {
    const [values, setValues] = useState([
        "",
        "",
        "",
        ""
    ]);
    const [loading, setLoading] = useState(false);

    const loadingProps = {
        disabled: loading ? true  : false,
        isLoading: loading ? true : false
    }

    const onSubmit = e =>{
        e.preventDefault();
        setLoading(true);
    }


    return (
        <MDBContainer style={{ height: `442px` }} className="py-5 my-5">
            <div className="py-4">
                <h3 className="h3-responsive cursive font-weight-bold text-center">We need to verify who you are</h3>
                <p className="grey-text text-center small">Before continuing to use Real Raw Talent first we need something from you</p>
            </div>
            <form onSubmit={e=>onSubmit(e)}>
                <MDBRow center>
                    <MDBCol md="6" lg="6">
                        <PinCode
                            overrides={{
                                Root: {
                                style: ({ $theme }) => ({
                                    justifyContent: `center`
                                })
                                }
                            }}
                            values={values}
                            onChange={({ values }) => setValues(values)}
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
            </form>
        </MDBContainer>
    )
}

export default VerfiyEmailPage
