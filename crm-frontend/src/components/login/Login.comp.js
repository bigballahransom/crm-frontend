import React from 'react'
import PropTypes from 'prop-types';
import {Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = ({handleOnChange, handleOnSubmit, email, pass, formSwitcher}) => {
  return (
    <Container>
        <Row>
            <Col className='mt-3'>
            <h1 className='text-center'>Client Login</h1>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group className='mt-3'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleOnChange}
                    placeholder='Enter Email'
                    required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type='password'
                    name='password'
                    value={pass}
                    onChange={handleOnChange}
                    placeholder='password'
                    required
                    />
                </Form.Group>
                <br/>
                <Button type='submet'>Login</Button>
            </Form>
            </Col>
        </Row>
        <Row>
            <Col className='mt-3'>
                <a href='#' onClick={() => formSwitcher('rest')}>Forgot Password?</a>
            </Col>
        </Row>
    </Container>
  )
}
Login.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired
};
export default Login