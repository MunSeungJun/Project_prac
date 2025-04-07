import { useState } from 'react';
import { Container, Button, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from '../authApi'; 
import '../../../styles/signin.css';

function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    passwd: '',
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    event.stopPropagation();
    setLogin(formData, dispatch)
    setFormData({
      email: '',
      passwd: '',
    });
    navigate('/');
  };

  return (
    <main>
      <Container className="my-5 py-5">
        <Row>
          <div className="col-8">
            <img src="http://localhost:5173/signup_img.png" alt="" />
          </div>
          <div className="signin_box col-4 d-flex flex-column justify-content-center gap-5">
            <div className="signin_box_text">
              <h2>Log in to Exclusive</h2>
              <p>Enter your details</p>
            </div>
            <div className="signin_box_content">
              <Form
                className="signin_box_content_form"
                noValidate
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <Form.Group className="mb-4" controlId="validationCustomEmail">
                  <Form.Control
                    className="signin_box_content_form_input"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a email.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4" controlId="validationCustomPasswd">
                  <Form.Control
                    className="signin_box_content_form_input"
                    required
                    type="password"
                    name="passwd"
                    value={formData.passwd}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  <Form.Control.Feedback type="invalid">Looks good!</Form.Control.Feedback>
                </Form.Group>
                <div className="signin_box_content_form_button_wrap">
                  <Row className="justify-content-center gap-3">
                    <Button className="signin_box_content_form_button col-5" type="submit">
                      Log in
                    </Button>
                    <Link className="signin_box_content_form_button col-5 text-center">
                      Forget Password?
                    </Link>
                  </Row>
                </div>
              </Form>
            </div>
          </div>
        </Row>
      </Container>
    </main>
  );
}

export default SignIn;
