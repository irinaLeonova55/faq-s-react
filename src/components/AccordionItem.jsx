import iconPlus from '../assets/images/icon-plus.svg';
import iconMinus from '../assets/images/icon-minus.svg';

function AccordionItem({ item, openAnswer }) {
  return (
    <section className="accordion__item">
      <button className="accordion__title" onClick={() => openAnswer(item.id)}>
        {item.question}
        <img
          className="button__img"
          src={!item.show ? iconPlus : iconMinus}
          alt="Open answer"
        />
      </button>

      <div className={`accordion__desc ${item.show ? 'activ' : ''}`}>
        {item.answer}
      </div>
    </section>
  );
}

export default AccordionItem;
