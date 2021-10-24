import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
function UpdateProduct() {
	const history = useHistory();
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const { name, price, description } = product;
	useEffect(() => {
		const url = `http://localhost:5000/products/${id}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, []);
	const handleUpdateName = (e) => {
		const newName = e.target.value;
		const modifyData = { ...product };
		modifyData.name = newName;
		setProduct(modifyData);
	};
	const handleUpdatePrice = (e) => {
		const newPrice = e.target.value;
		const modifyData = { ...product };
		modifyData.price = newPrice;
		setProduct(modifyData);
	};
	const handleUpdateDesc = (e) => {
		const newDesc = e.target.value;
		const modifyData = { ...product };
		modifyData.description = newDesc;
		setProduct(modifyData);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const url = `http://localhost:5000/products/${id}`;
		fetch(url, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(product),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount > 0) {
					alert("Updated Successfully");
					setProduct({});
					history.push("/home");
				} else {
					alert("Data isn't updated");
					setProduct({});
					history.push("/home");
				}
			});
	};
	return (
		<div className="mt-5">
			<Container>
				<Row className="justify-content-center">
					<Col md={5}>
						<h3 className="text-center">Update The Product</h3>
						<form
							className="bg-dark p-3 rounded text-white"
							onSubmit={handleSubmit}
						>
							<div className="mb-3">
								<strong>
									<label>Product Name</label>
								</strong>
								<input
									value={name || ""}
									className="form-control"
									onChange={handleUpdateName}
								/>
							</div>
							<div className="mb-3">
								<strong>
									<label>Product Price</label>
								</strong>
								<input
									value={price || ""}
									className="form-control"
									onChange={handleUpdatePrice}
								/>
							</div>
							<div className="mb-3">
								<strong>
									<label>Product Description</label>
								</strong>
								<textarea
									rows="5"
									value={description || ""}
									className="form-control"
									onChange={handleUpdateDesc}
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

export default UpdateProduct;
