import './styles.css'

import ProductCard from '../components/product-card';
import OrderForm from '../components/order-form';

function Home() {

  return (
    <div className="home__container">
      <ProductCard />
      <OrderForm />
    </div>
  );
}

export default Home;