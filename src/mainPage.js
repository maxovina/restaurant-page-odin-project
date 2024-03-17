import cook from './img/cook.jpg';

export default function mainPage(){
    const content = document.querySelector('.content');
    const main = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = 'Rated Number One 2 Years in Row';
    main.appendChild(h1)

    const p = document.createElement('p');
    p.textContent = 'We offer the best Quesadilla in the area!';
    main.appendChild(p)

    main.classList.add('main');

    content.appendChild(main);

    const about = document.createElement('div');
    about.classList.add('about');

    const img = document.createElement('img');
    img.src = cook;
    about.appendChild(img);

    const aboutText = document.createElement('div');
    aboutText.classList.add('about-text');
    const aboutH1 = document.createElement('h1');
    aboutH1.textContent = 'About us';
    aboutText.appendChild(aboutH1);
    const aboutP = document.createElement('p');
    aboutP.textContent = 'Founded in 2011, Casa del Quesadilla is a family-owned restaurant dedicated to crafting the finest quesadillas in town. Located in Pyongyang, we pride ourselves on sourcing our ingredients directly from local farmers, ensuring freshness and supporting our community.'
    aboutText.appendChild(aboutP);
    const aboutP2 = document.createElement('p');
    aboutP2.textContent = 'At Casa del Quesadilla, we offer a warm and inviting atmosphere where every visit feels like coming home. Our menu features a variety of quesadilla options, from classic to creative, catering to all tastes and dietary preferences.'
    aboutText.appendChild(aboutP2);
    const aboutP3 = document.createElement('p');
    aboutP3.textContent = 'Join us and experience the difference that fresh, locally-sourced ingredients make in every bite. Taste the tradition, quality, and flavor that have made Casa del Quesadilla a beloved part of the community for over a decade.'
    aboutText.appendChild(aboutP3);
    
    
    about.appendChild(aboutText);
    
    content.appendChild(about);
}