import './styles.css';

function ProductCard() {

  return (
    <div className="product__card">
      <img src="http://teamsoft.com.br/test-frontend/picanha_cheddar_bacon.png" alt="product"/>
    
      <h1 className="product__card__title">Oferta Picanha Cheddar Bacon</h1>

      <p className="product__card__description">
        Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, 
        molho cheddar e pão mix de gergelim
      </p>

      <p className="product__card__price">
        <span className="product__card__price__actual">R$31,99</span>
        <span className="product__card__price__older">R$34,95</span>
      </p>
    </div>
  );
}

export default ProductCard;