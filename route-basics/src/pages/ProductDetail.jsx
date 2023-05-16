import { Link, useParams } from 'react-router-dom';
function ProductDetailPage() {
	const params = useParams();
	params.productId;
	return (
		<>
			<h1>ProductDetailPage</h1>
			{params.productId}
         <p><Link to='..' relative='path'>Back</Link></p>
		</>
	);
}

export default ProductDetailPage;
