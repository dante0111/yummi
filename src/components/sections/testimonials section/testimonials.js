import React, { useState, useEffect } from "react";
import axios from "../../../api/axios";
import Card from "./cards/card";

const Testimonials = () => {
  const [comments, setComments] = useState([]);
  const [cardsCount, setCardsCount] = useState(2);
  const [columns, setColumns] = useState(2);
  const [commentsArray, setCommentsArray] = useState([]);

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
    axios.get("/customer_says").then((response) => {
      setComments(response.data.data);
    });

    function handleResize() {
      if (window.innerWidth >= 1024) {
        setColumns(3);
      } else if (window.innerWidth < 1024 && window.innerWidth > 768) {
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
        {commentsArray.map((column, index) => {
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
        })}
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
