import { useState } from 'react';

import AccordionItem from './AccordionItem';
import faqData from '../faqData';

function Accordion() {
  const [data, setData] = useState(faqData);
  function openAnswer(id) {
    const newData = data.map((item) =>
      item.id === id ? { ...item, show: !item.show } : { ...item, show: false }
    );
    setData(newData);
  }

  return (
    <>
      {data.map((item) => (
        <AccordionItem key={item.id} item={item} openAnswer={openAnswer} />
      ))}
    </>
  );
}

export default Accordion;
