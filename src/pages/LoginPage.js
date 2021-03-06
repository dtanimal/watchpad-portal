import React, { useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import Loading from '../components/Loading'
import LoginForm from '../components/LoginForm'
import logo from '../static/watchpad_logo.png'

function LoginPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    return (
        <>
            <style>
                {`
                    body {
                        height: calc(100vh - 58px) !important;
                        background: rgb(8, 45, 68) !important;
                        background: linear-gradient(
                            90deg,
                            rgba(8, 45, 68, 1) 0%,
                            rgba(1, 24, 38, 1) 50%,
                            rgba(2, 24, 38, 1) 100%
                        ) !important;
                        color: $color_cream;
                    }
                    `}
            </style>
            <Row className="initial-page-height justify-content-center align-items-center">
                <Col lg={6}>
                    <Row className="shadow p-5 rounded justify-content-center align-items-center bg-light bg-gradient">
                        <Col lg={6}>
                            <Image src={logo} height={300} rounded fluid />
                        </Col>
                        <Col
                            lg={6}
                            className="justify-content-center align-items-center text-center"
                            data-testid="login-form-container"
                        >
                            {!isLoading ? (
                                <LoginForm
                                    setIsLoading={setIsLoading}
                                    setError={setError}
                                    error={error}
                                />
                            ) : (
                                <Loading message="Trying to log you in... hang tight!" />
                            )}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default LoginPage
