import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
   const navigate = useNavigate()

   function navigateHandler() {
      navigate('/products')
   }
 
	return (
		<div>
			<h1>HomePage</h1>
			<Link to='/products'>Go to products</Link>
         <button onClick={navigateHandler}>Navigate</button>
		</div>
	);
}

export default HomePage;
