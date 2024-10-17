import React, { useState } from 'react';
import './FaqAccordion.css'; // The CSS for the accordion

const FaqAccordion = () => {
  // Define the FAQ data
  const faqData = [
    {
      question: 'Do I need programming experience to join?',
      answer: 'No, you do not need programming experience to join! We welcome students of all skill levels, from beginners to advanced coders.',
    },
    {
      question: 'How often does the club meet?',
      answer: 'We meet weekly on Thursdays at 4 PM, but we also have events and workshops throughout the month.',
    },
    {
      question: 'What are the benefits of becoming a member?',
      answer: 'By joining the club, you’ll have access to events, workshops, tutoring, networking opportunities, and the chance to collaborate on exciting projects.',
    },
    {
      question: 'Is the club open to all majors?',
      answer: 'Yes! We are open to all majors, not just computer science students. Anyone interested in technology is welcome.',
    },
    {
      question: 'What is the time commitment?',
      answer: 'There is no mandatory time commitment. You can participate as much or as little as your schedule allows, though active involvement is encouraged.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); 
    } else {
      setOpenIndex(index); 
    }
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="accordion">
        {faqData.map((faq, index) => (
          <div key={index} className="accordion-item">
            <button
              className={`accordion-button ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
            </button>
            <div
              className={`accordion-content ${openIndex === index ? 'active' : ''}`}
              style={{ maxHeight: openIndex === index ? '150px' : '0px' }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
