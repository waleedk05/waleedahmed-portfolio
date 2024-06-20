import React, { useEffect, useState } from 'react'

const Experiences = () => {
    const [experiences, setExperiences] = useState();

    const fetchExperiences = async () => {
        const url = 'https://admin.codewithharsh.ca/api/experiences';
        const response = await fetch(url);
        const data = await response.json();

        setExperiences(data);
        console.log('fetchExperiences ', data);
    };

    useEffect(() => {
        fetchExperiences();
    }, []);

    return (
        <section id='experiences' class='className="section gray-bg" id="resume"'>
            <div class="container">
                <div class="section-title">
                    <h2 class="text-center">Experience</h2>
                </div>
                <div class="row">
                    <div class="col-12 m-15px-tb">
                        <div class="resume-box border border-dark">
                            <ul>
                                {experiences && experiences.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <div class="icon border border-dark">
                                                <i class="fas fa-briefcase "></i>
                                            </div>
                                            <span class="time">{new Date(item?.start_date).getFullYear()} - {new Date(item?.end_date).getFullYear()}</span>
                                            <h5>{item?.job_title} - {item?.company_name}</h5>
                                            <p>{item?.description}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiences