import './styles.css';

import LessIcon from '../../../assets/less.png';
import PlusIcon from '../../../assets/plus.png';

function OrderForm() {

  const add = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    alert('adicionado!');
  }

  return (
    <form className="order__form">
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

      <div className="order__form__radio">
        <div className="order--form--space-between">
          <label htmlFor="cutlery-yes">Sim</label>
          <input type="radio" name="cutlery" id="cutlery-yes" value="0" />
        </div>

        <div className="order--form--space-between">
          <label htmlFor="cutlery-no">Não</label>
          <input type="radio" name="cutlery" id="cutlery-no" value="1" />
        </div>
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

        <button onClick={add} type="submit" className="order__form__button__add">Adicionar</button>
      </div>
    </form>
  );
}

export default OrderForm;