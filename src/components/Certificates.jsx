import React, { useEffect, useState } from 'react'

const Certificates = () => {
  const [certificates, setCertificates] = useState();

  const fetchCertificates = async () => {
    const url = 'https://admin.codewithharsh.ca/api/certificates';
    const response = await fetch(url);
    const data = await response.json();

    setCertificates(data);
    console.log('fetchCertificates ', data);
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  return (
    <section id='certificates' class='certificates container'>
      <h2 class="text-center">Certificates</h2>
      <div class='row'>
        {certificates && certificates.map((item, index) => {
          return (
            <div key={index} class='col-lg-4 col-md-6'>
              <div class='card text-center border border-dark'>
                <img src={item?.image} alt="" class='certificate-img' />
                <a class="certificate-link" onClick={() => window.open(item?.url, "_blank")}>{item?.title}</a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Certificates