import React, { useState, useEffect } from "react";
import axios from "../../../api/axios";
import Card from "./cards/card";

const Testimonials = () => {
  const [comments, setComments] = useState([]);
  const [cardsCount, setCardsCount] = useState(2);
  const [columns, setColumns] = useState(2);
  const [commentsArray, setCommentsArray] = useState([]);
  const [tablet, setTablet] = useState(true);

  useEffect(() => {
    function chunkify(a, n, balanced) {
      if (n < 2) return [a];

      var len = a.length,
        out = [],
        i = 0,
        size;

      if (len % n === 0) {
        size = Math.floor(len / n);
        while (i < len) {
          out.push(a.slice(i, (i += size)));
        }
      } else if (balanced) {
        while (i < len) {
          size = Math.ceil((len - i) / n--);
          out.push(a.slice(i, (i += size)));
        }
      } else {
        n--;
        size = Math.floor(len / n);
        if (len % size === 0) size--;
        while (i < size * n) {
          out.push(a.slice(i, (i += size)));
        }
        out.push(a.slice(size * n));
      }

      return out;
    }
    setCommentsArray(chunkify(comments, columns, true));
  }, [comments, columns]);

  useEffect(() => {
    // axios.get("/customer_says").then((response) => {
    //   setComments(response.data.data);
    // });

    function handleResize() {
      if (window.innerWidth >= 1024) {
        setColumns(3);
        setTablet(true);
      } else if (window.innerWidth < 1024 && window.innerWidth > 768) {
        setTablet(false);
        setColumns(2);
      } else {
        setColumns(1);
      }
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
  }, []);

  return (
    <div className="testimonial-section">
      <p className="title">Что говорят о нас?</p>
      <div className="testimonial-container">
        {/* {commentsArray.map((column, index) => {
          return (
            <div className="testimonial-cards" key={index}>
              {column
                .slice(0, cardsCount)
                .map(({ name, job, comment }, index) => {
                  return (
                    <Card name={name} job={job} comment={comment} key={index} />
                  );
                })}
            </div>
          );
        })} */}
        <div className="testimonial-cards">
          <Card
            name="Мирза Бедил"
            job="Продавец"
            comment="Цоммодо тхеопхрастус еи нам, облияуе виртуте деленит вел еа."
          />
          <Card
            name="Ешонов Баходир"
            job="Покупатель"
            comment="Солеат легендос витуперата сеа еу, еам доминг перицула салутанди еа, ест цасе аугуе яуидам ут."
          />
          <Card
            name="Лилия Кукушкина"
            job="Продавец"
            comment="Солеат легендос витуперата сеа еу, еам доминг перицула салутанди еа, ест цасе аугуе яуидам ут."
          />
        </div>
        <div className="testimonial-cards">
          <Card
            name="Мукаддас Aслонова"
            job="Покупатель"
            comment="Яуандо хабемус дефиниебас вих ад. Тамяуам адмодум ан ест, ех при популо нолуиссе."
          />
          <Card
            name="Джалал Бобо"
            job="Продавец"
            comment="Реяуе перпетуа ет дуо, вис семпер малуиссет цу. Саепе инсоленс не ест, ехпетендис инцидеринт те вим. Сумо постеа нострум не нам, еррем цотидиеяуе ест не. Инани аперири персецути ад пер."
          />
          <Card
            name="Мирза Бедил"
            job="Продавец"
            comment="Цоммодо тхеопхрастус еи нам, облияуе виртуте деленит вел еа."
          />
        </div>
        {tablet && (
          <div className="testimonial-cards">
            <Card
              name="Aся Максуд"
              job="Продавец"
              comment="Цум лаборе урбанитас те. Меа идяуе цоммодо хабемус но, меи ид еверти яуаеяуе еуисмод, ех иус лаборес проприае."
            />
            <Card
              name="Евгений Мишкин"
              job="Покупатель"
              comment="Ат лорем оффендит пхилосопхиа иус, пер но фиерент фастидии тхеопхрастус. Стет цасе велит яуо еу, цонгуе реферрентур при еи. Еу миним пауло сит, про не дуис фабулас вивендо."
            />
            <Card
              name="Ешонов Баходир"
              job="Продавец"
              comment="Цоммодо тхеопхрастус еи нам, облияуе виртуте деленит вел еа."
            />
          </div>
        )}
      </div>
      <div className="overlay">
        <div></div>
      </div>
      <div className="more-btn">
        <button
          className="btn-primary"
          onClick={() => setCardsCount((current) => current + 1)}
        >
          Показать больше
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
