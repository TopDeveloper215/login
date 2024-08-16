import React, { useState } from "react";
import "../assets/button.css"
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
const Register = () =>{
	const [info, setInfo] = useState({
    email: "",
    password: "",
		firstname: "",
		lastname: "",
  });
  const [icon, setIcon] = useState(false);
  const handleChange = e => {

    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value
    });
	
  }
	console.log(info);
    return(
			<Container style={{ padding: "10%" }} >
						<Row className="d-flex justify-content-center align-items-center">
							<Col md={8} lg={6} xs={12}>
								<Card className="shadow" style={{ borderRadius: "15px", backgroundColor: "blue" }}>
									<Card.Body className="p-5 ">
										<div className="mb-3" >
											<Form>
												<div className="text-center">
													<Form.Label className="signin m-5">Sign Up</Form.Label>
												</div>
												<Form.Group className="d-flex" style={{gap:"20px"}}>
													<Form.Control name="firstname" type="text" className="mt-3 lh-lg"
														value={info.firstname} onChange={handleChange} placeholder="First name" required />
													<Form.Control name="lastname" type="text" className="mt-3 lh-lg"
													value={info.lastname} onChange={handleChange} placeholder="Last name" required />
												</Form.Group>
												<Form.Group>
													<Form.Control name="email" type="email" className="my-3 lh-lg"
														value={info.email} onChange={handleChange} placeholder="Enter your email" required />
												</Form.Group>
												<Form.Group className="position-relative">
													<Form.Control name="password" type={icon ? "text" : "password"} className="my-3 lh-lg"
														value={info.password} onChange={handleChange} placeholder="Enter your password" required />
												</Form.Group>
												<div className="d-grid" >
													<Button variant="success" type="submit" className="my-3" >
														Sign Up
													</Button>
												</div>
												<div className="mt-3" >
													<p className="mb-0 textcolor text-center">
														Already have account?
														<a href="/login" className=" textcolor text-decoration-none text-primary fw-bold">
															Sign In
														</a>
													</p>
												</div>

											</Form>
										</div>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
    )
}
export default Register;