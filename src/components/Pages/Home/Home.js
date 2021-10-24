import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ShowProduct from "./ShowProduct";

function Home() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/products")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	return (
		<Container>
			<div className="mt-3">
				<div className="bg-dark p-2 rounded mb-3">
					<h2 className="text-center text-white p-2">All Services</h2>
				</div>
				<Row className="g-4">
					{products.map((product) => (
						<ShowProduct
							key={product._id}
							product={product}
							setProducts={setProducts}
							products={products}
						/>
					))}
				</Row>
			</div>
		</Container>
	);
}

export default Home;
