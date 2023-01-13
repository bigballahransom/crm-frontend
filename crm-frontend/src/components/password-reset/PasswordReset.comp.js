import React from 'react'
import PropTypes from 'prop-types';
import {Container, Row, Col, Form, Button } from 'react-bootstrap';

const ResetPassword = ({handleOnChange, handleOnResetSubmit, email, formSwitcher}) => {
  return (
    <Container>
        <Row>
            <Col className='mt-3'>
            <h1 className='text-center'>Reset Password</h1>
            <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
            
                <br/>
                <Button type='submit'>Reset Password</Button>
            </Form>
            </Col>
        </Row>
        <Row>
            <Col className='mt-3'>
                <a href='#' onClick={() => formSwitcher('login')}>Login Now</a>
            </Col>
        </Row>
    </Container>
  )
}
ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
};
export default ResetPassword