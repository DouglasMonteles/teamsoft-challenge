import './styles.css';

import LessIcon from '../../../assets/less.png';
import PlusIcon from '../../../assets/plus.png';

function OrderForm() {

  return (
    <div className="order__form">
      <div className="order__form__warning">
        <h3 className="order--form--margin-0 order__form__warning__title">Adicionar Ingredientes</h3>
        <span className="order__form__warning__quatity order--form--margin-0">Até 8 ingredientes.</span>
      </div>

      <div className="order__form__input">
        <label className="order--form--text--bold--500">Queijo Cheddar</label>
        <div className="order__form__button">
          <button className="order__form__button__icon">
            <img src={LessIcon} alt="less"/>
          </button>
          <span className="order--form--mh-9">2</span>
          <button className="order__form__button__icon">
            <img src={PlusIcon} alt="plus"/>
          </button>
        </div>
        <input disabled className="order__form__field__input" type="text" name="price" value="+ R$4,99" />
      </div>

      <div className="order__form__input">
        <label className="order--form--text--bold--500">Cebola Crysp</label>
        <div className="order__form__button order--form--border-none">
          <button className="order__form__button__icon">
            <img src={PlusIcon} alt="plus"/>
          </button>
        </div>
        <input disabled className="order__form__field__input" type="text" name="price" value="+ R$4,99" />
      </div>

      <div className="order__form__input">
        <label className="order--form--text--bold--500">Molho Cheddar</label>
        <div className="order__form__button order--form--border-none">
          <button className="order__form__button__icon">
            <img src={PlusIcon} alt="plus"/>
          </button>
        </div>
        <input disabled className="order__form__field__input" type="text" name="price" value="+ R$4,99" />
      </div>

      <div className="order__form__input">
        <label className="order--form--text--bold--500">Molho de Picanha</label>
        <div className="order__form__button">
          <button className="order__form__button__icon">
            <img src={LessIcon} alt="less"/>
          </button>
          <span className="order--form--mh-9">2</span>
          <button className="order__form__button__icon">
            <img src={PlusIcon} alt="plus"/>
          </button>
        </div>
        <input disabled className="order__form__field__input" type="text" name="price" value="+ R$4,99" />
      </div>

      <div className="order__form__warning">
        <h3 className="order--form--margin-0 order__form__warning__title">Precisa de Talher?</h3>
      </div>

      <div className="order__form__add">
        <div className="order__form__button order__form__button__cutlery">
          <button className="order__form__button__icon">
            <img src={LessIcon} alt="less"/>
          </button>
          <span className="order--form--mh-9">2</span>
          <button className="order__form__button__icon">
            <img src={PlusIcon} alt="plus"/>
          </button>
        </div>

        <button className="order__form__button__add">Adicionar</button>
      </div>
    </div>
  );
}

export default OrderForm;