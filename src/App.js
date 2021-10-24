import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Shared/Header";
import Home from "./components/Pages/Home/Home";
import AddProduct from "./components/Pages/AddProduct/AddProduct";
import UpdateProduct from "./components/Pages/updateProduct/UpdateProduct";
import NotFound from "./components/Pages/NotFound/NotFound";
function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/home">
					<Home />
				</Route>

				<Route path="/addProduct">
					<AddProduct />
				</Route>
				<Route path="/updateProduct/:id">
					<UpdateProduct />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
