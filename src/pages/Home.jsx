import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import CardContacts from "../components/CardContacts.jsx";


export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>Contacts</h1>
			<CardContacts/>
			<p>
				<img src={rigoImageUrl} />
			</p>

			<a href="/contact" className="btn btn-primary"></a>
			<a href="/editcontat" className="btn btn-danger"></a>
		</div>
	);
}; 