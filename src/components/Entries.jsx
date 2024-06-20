import React, { useEffect, useState } from 'react'

const Entries = () => {
  const [entries, setEntries] = useState();

  const fetchEntries = async () => {
    const url = 'https://admin.codewithharsh.ca/api/entries';
    const response = await fetch(url);
    const data = await response.json();

    setEntries(data);
    console.log('fetchEntries ', data);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <section id='entries' class='entries container'>
      <h2 class="text-center">Blog</h2>
      <div class="row justify-content-center">
        <div class="accordion faq-accordian" id="faqAccordion">
          {entries && entries.map((item, index) => {
            return (
              <div key={index} class="card border-0 my-3">
                <div class="card-header bg-dark text-light" id="headingOne">
                  <h6 class="mb-0">{item?.title}</h6>
                </div>
                <div class="card-body border border-dark">
                  <p>{item?.content}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Entries