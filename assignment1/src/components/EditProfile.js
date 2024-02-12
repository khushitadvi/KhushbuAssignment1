import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";

const EditProfile = () => {
  const getuser = localStorage.getItem("user_login");
  const [user, setUser] = useState(JSON.parse(getuser));

  const editProfile = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    localStorage.setItem("user_login", JSON.stringify(user));
    toast.success("Profile updated successfully");
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                name="name"
                placeholder="Enter name"
                value={user.name}
                onChange={editProfile}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={user.email}
                name="email"
                onChange={editProfile}
              />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber" className="mt-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                value={user.phonenumber}
                placeholder="Enter phone number"
                name="phonenumber"
                onChange={editProfile}
              />
            </Form.Group>

            <Form.Group controlId="formAddress" className="mt-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={user.address}
                placeholder="Enter address"
                name="address"
                onChange={editProfile}
              />
            </Form.Group>

            <Button
              className="mt-3 button_div d-flex justify-content-center"
              variant="primary"
              type="submit"
            >
              Save
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProfile;
