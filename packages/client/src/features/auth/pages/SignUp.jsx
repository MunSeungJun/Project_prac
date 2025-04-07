import { useState } from 'react';
import { Container, Button, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../authApi';
import '../../../styles/signup.css';

function SingUp() {
  const navigate = useNavigate()
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    passwd: '',
    phone: '',
  });
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async(event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    setUser(formData)
    setFormData({
      username: '',
      email: '',
      passwd: '',
      phone: '',
    });
    navigate('/signin')
  };

  return (
    <main>
      <Container className="my-5 py-5">
        <Row>
          <div className="col-8">
            <img src="http://localhost:5173/signup_img.png" alt="" />
          </div>
          <div className="signup_box col-4 d-flex flex-column justify-content-center gap-5">
            <div className="signup_box_text">
              <h2>Create an account</h2>
              <p>Enter your details</p>
            </div>
            <div className="signup_box_content">
              <Form
                className="signup_box_content_form"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <Form.Group className="mb-4" controlId="validationCustomUsername">
                  <Form.Control
                    className="signup_box_content_form_input"
                    required
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                  <Form.Control.Feedback type="invalid">Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4" controlId="validationCustomEmail">
                  <Form.Control
                    className="signup_box_content_form_input"
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
                    className="signup_box_content_form_input"
                    required
                    type="password"
                    name="passwd"
                    value={formData.passwd}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                  <Form.Control.Feedback type="invalid">Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4" controlId="validationCustomPhone">
                  <Form.Control
                    className="signup_box_content_form_input"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    maxLength="11"
                  />
                  <Form.Control.Feedback>Please provide a phone number.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
                <div className="signup_box_content_form_button_wrap">
                  <Row className="justify-content-center gap-3">
                    <Button className="signup_box_content_form_button" type="submit">
                      Create Account
                    </Button>
                    <Link className="signup_box_content_form_button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-google me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                      </svg>
                      Sign up with Google
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

export default SingUp;
