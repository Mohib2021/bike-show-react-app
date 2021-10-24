import React from "react";
import { Col } from "react-bootstrap";
import { useHistory } from "react-router";

function ShowProduct({ product, setProducts, products }) {
	const { name, price, description } = product;
	const history = useHistory();
	const handleUpdateData = () => {
		history.push(`/updateProduct/${product._id}`);
	};
	const handleDeleteData = () => {
		const url = `http://localhost:5000/products/${product._id}`;
		fetch(url, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					alert("Product Deleted Successfully");
					const updatedProducts = products.filter(
						(singleProduct) => singleProduct._id !== product._id
					);
					setProducts(updatedProducts);
				} else {
					alert("Deleted Failed");
				}
			});
	};
	return (
		<Col md={4} sm={6}>
			<div className="bg-dark text-white rounded p-3">
				<h4>Name : {name}</h4>
				<h5>Price : ${price}</h5>
				<p>
					<strong>Description : </strong> {description}
				</p>
				<button onClick={handleUpdateData} className="btn btn-light me-3">
					Update
				</button>
				<button onClick={handleDeleteData} className="btn btn-danger">
					Delete
				</button>
			</div>
		</Col>
	);
}

export default ShowProduct;
