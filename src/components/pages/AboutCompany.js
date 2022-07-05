import React from 'react';

const AboutCompany = () => {
    return (
        <div style={{
            color: "white"
        }} className="container">
            <h2 style={{
                margin: "20px 0"
            }}>О компании</h2>
            <p className="text-about-company">
                ООО "Afisha KG" это небольшая группа людей, создавшая возможность приобретения электронных билетов
                на культурно-развлекательные мероприятия страны посредством сети интернет через сайт www.afisha.kg.
            </p>
            <p className="text-about-company">
                Одной из главных целей нашей организации является возрождение интереса к посещению культурно-развлекательных
                мероприятий страны, воспитание, образование, развитие, взаимное почитание и уважение друг другу.
            </p>
        </div>
    );
};

export default AboutCompany;