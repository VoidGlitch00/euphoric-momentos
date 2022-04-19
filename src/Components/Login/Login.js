import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

    }

    const navigateRegister = event => {
        navigate("/register")
    }

    const provider = new GoogleAuthProvider();

    const handleSignInGoogle = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                console.log(res.user);
            })
            .catch(err => {

            })
    }

    return (
        <div style={{
            minHeight: "100vh",
        }}>
            <Container className="mt-5 mb-5 w-50">
                <h2 style={{ color: '#383CC1' }}>Please Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className="mx-3" style={{ backgroundColor: "#207398" }} type="submit">
                        Submit
                    </Button>
                    <Button style={{ backgroundColor: "#207398" }} type="submit" onClick={handleSignInGoogle}>
                        Google Sign In
                    </Button>
                </Form>
                <p>New to Euphoric Momentos? <span className="text-danger" onClick={navigateRegister} style={{ cursor: "pointer" }}>Please Register!</span></p>
            </Container>
        </div>
    );
};

export default Login;