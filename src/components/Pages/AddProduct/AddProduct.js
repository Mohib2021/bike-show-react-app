import React from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

function AddProduct() {
	const history = useHistory();
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		const url = "http://localhost:5000/products";
		axios.post(url, data).then((res) => {
			if (res.status === 200) {
				alert("Product is added successfully");
				reset();
				history.push("/home");
			}
		});
	};
	return (
		<div className="mt-5">
			<Container>
				<Row className="justify-content-center">
					<Col md={5}>
						<h3 className="text-center">Add a Product</h3>
						<form
							className="bg-dark p-3 rounded text-white"
							onSubmit={handleSubmit(onSubmit)}
						>
							<div className="mb-3">
								<strong>
									<label>Product Name</label>
								</strong>
								<input
									placeholder="Enter Name"
									className="form-control"
									{...register("name", { required: true, maxLength: 20 })}
								/>
							</div>
							<div className="mb-3">
								<strong>
									<label>Product Price</label>
								</strong>
								<input
									placeholder="Enter Price"
									className="form-control"
									type="number"
									{...register("price")}
								/>
							</div>
							<div className="mb-3">
								<strong>
									<label>Product Description</label>
								</strong>
								<textarea
									rows="5"
									placeholder="Enter Description"
									className="form-control"
									type="number"
									{...register("description")}
								></textarea>
							</div>
							<input className="btn btn-light" type="submit" />
						</form>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default AddProduct;
