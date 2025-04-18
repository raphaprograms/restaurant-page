import "./styles.css";

export const greeting = "Hello, Odinite!";

export {displayHome};

function displayHome() {

    const container = document.querySelector('#content');
    container.textContent = ' ';

    const home = document.createElement('div');
        home.classList.add('main-div');

        const titleSect = document.createElement('div');
            titleSect.classList.add('title');

            const restName = document.createElement('h2');
                restName.classList.add('rest-name');
                restName.textContent = 'Girl & Goat "Clone"';
            titleSect.appendChild(restName);

            const restDescription = document.createElement('p');
                restDescription.classList.add('rest-desc');
                restDescription.textContent = 'This is the best fake restaurant in town based off a favorite place of mine called the "Girl & the Goat"';
            titleSect.appendChild(restDescription);

        home.appendChild(titleSect);

        const addressSect = document.createElement('div');
            addressSect.classList.add('info-sect');

            const addressHeader = document.createElement('h1');
                addressHeader.textContent = 'address';
                addressHeader.classList.add('header');
            addressSect.appendChild(addressHeader);

            const addressLine1 = document.createElement('p');
                addressLine1.textContent = `123 Main Street`;
                addressLine1.classList.add('info-text');
            addressSect.appendChild(addressLine1);

            const addressLine2 = document.createElement('p');
                addressLine2.textContent = `Los Angeles, CA`;
                addressLine2.classList.add('info-text');
            addressSect.appendChild(addressLine2);
            

        home.appendChild(addressSect);

        const hoursSect = document.createElement('div');
            hoursSect.classList.add('info-sect');

            const hoursHeader = document.createElement('h1');
                hoursHeader.textContent = 'hours';
                hoursHeader.classList.add('header');
            hoursSect.appendChild(hoursHeader);

            const monTues = document.createElement('p');
                monTues.textContent = `Monday & Tuesday`;
                monTues.classList.add('info-text', 'day');
            hoursSect.appendChild(monTues);

            const monTuesHours = document.createElement('p');
                monTuesHours.textContent = `5pm - 9:30pm`;
                monTuesHours.classList.add('info-text','time');
            hoursSect.appendChild(monTuesHours);

            const wedSat = document.createElement('p');
                wedSat.textContent = 'Wednesday - Saturday';
                wedSat.classList.add('info-text', 'day');
            hoursSect.appendChild(wedSat);

            const wedSatHours = document.createElement('p');
                wedSatHours.textContent = '5pm - 10pm';
                wedSatHours.classList.add('info-text', 'time');
            hoursSect.appendChild(wedSatHours);

            const sun = document.createElement('p');
                sun.textContent = 'Sunday';
                sun.classList.add('info-text', 'day');
            hoursSect.appendChild(sun);

            const sunHours1 = document.createElement('p');
                sunHours1.textContent = '10am - 2pm';
                sunHours1.classList.add('info-text', 'time');
            hoursSect.appendChild(sunHours1);

            const sunHours2 = document.createElement('p');
                sunHours2.textContent = '5pm - 9:30pm';
                sunHours2.classList.add('info-text', 'time');
            hoursSect.appendChild(sunHours2);

        home.appendChild(hoursSect)

        const contactSect = document.createElement('div');
            contactSect.classList.add('info-sect');

            const contactHeader = document.createElement('h1');
                contactHeader.textContent = 'contact';
                contactHeader.classList.add('header');
            contactSect.appendChild(contactHeader);

            const phoneNumber = document.createElement('p');
                phoneNumber.textContent = '310-555-5555';
                phoneNumber.classList.add('info-text');
            contactSect.appendChild(phoneNumber);

            const email = document.createElement('p');
                email.textContent = 'info.tasty@greatrestuarant.com';
                email.classList.add('info-text', 'time');
            contactSect.appendChild(email);

        home.appendChild(contactSect);



    container.appendChild(home);
}
