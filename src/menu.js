export {displayMenu}

function displayMenu() {
    const menuButton = document.querySelector('.menu-btn');
    menuButton.classList.add('active-page')
    const container = document.querySelector('#content');
    container.textContent = ' ';

    const menu = document.createElement('div');
        menu.classList.add('main-div');

        const breadSnacks = document.createElement('div');
            breadSnacks.classList.add('menu-sect')
            breadSnacks.textContent = 'BREAD & SNACKS'
            
            const snack1 = document.createElement('div');
                snack1.classList.add('menu-item')

                const namePrice1 = document.createElement('div');
                    namePrice1.classList.add('food-header');

                    const naan = document.createElement('h5');
                        naan.classList.add('food-name');
                        naan.textContent = 'naan & dip';
                    namePrice1.appendChild(naan);

                    const naanPrice = document.createElement('h5');
                        naanPrice.classList.add('food-price');
                        naanPrice.textContent = '19';
                    namePrice1.appendChild(naanPrice);


                snack1.appendChild(namePrice1)


                const naanDetails = document.createElement('p');
                    naanDetails.classList.add('food-details');
                    naanDetails.textContent = "tzatziki . carrot 'hummus'";
                snack1.appendChild(naanDetails);

            breadSnacks.appendChild(snack1);

            const snack2 = document.createElement('div');
                snack2.classList.add('menu-item')

                const namePrice2 = document.createElement('div');
                    namePrice2.classList.add('food-header');

                    const focaccia = document.createElement('h5');
                        focaccia.classList.add('food-name');
                        focaccia.textContent = 'focaccia';
                    namePrice2.appendChild(focaccia);

                    const focacciaPrice = document.createElement('h5');
                        focacciaPrice.classList.add('food-price');
                        focacciaPrice.textContent = '14';
                    namePrice2.appendChild(focacciaPrice);


                snack2.appendChild(namePrice2)


                const focacciaDetails = document.createElement('p');
                    focacciaDetails.classList.add('food-details');
                    focacciaDetails.textContent = "blue labneh . grape-tomato-pepper relish";
                snack2.appendChild(focacciaDetails);

            breadSnacks.appendChild(snack2);

            const snack3 = document.createElement('div');
                snack3.classList.add('menu-item');

                const namePrice3 = document.createElement('div');
                    namePrice3.classList.add('food-header');

                    const goatLiver = document.createElement('h5');
                        goatLiver.classList.add('food-name');
                        goatLiver.textContent = 'goat liver mousse';
                    namePrice3.appendChild(goatLiver);

                    const goatLiverPrice = document.createElement('h5');
                        goatLiverPrice.classList.add('food-price');
                        goatLiverPrice.textContent = '23';
                    namePrice3.appendChild(goatLiverPrice);


                snack3.appendChild(namePrice3);


                const goatLiverDetails = document.createElement('p');
                    goatLiverDetails.classList.add('food-details');
                    goatLiverDetails.textContent = "crumpets . biscuit crackers . craisin relish . seasonal jam";
                snack3.appendChild(goatLiverDetails);
            
            breadSnacks.appendChild(snack3);

        menu.appendChild(breadSnacks);


        const veggies = document.createElement('div');
            veggies.classList.add('menu-sect');
            veggies.textContent = 'VEGGIES';
            
            const veggie1 = document.createElement('div');
                veggie1.classList.add('menu-item')

                const namePrice4 = document.createElement('div');
                    namePrice4.classList.add('food-header');

                    const crispBrus = document.createElement('h5');
                        crispBrus.classList.add('food-name');
                        crispBrus.textContent = 'crispy brussels sprouts';
                    namePrice4.appendChild(crispBrus);

                    const crispBrusPrice = document.createElement('h5');
                        crispBrusPrice.classList.add('food-price');
                        crispBrusPrice.textContent = '19';
                    namePrice4.appendChild(crispBrusPrice);


                veggie1.appendChild(namePrice4)


                const crispBrusDetails = document.createElement('p');
                    crispBrusDetails.classList.add('food-details');    
                    crispBrusDetails.textContent = "sichuan peanut dressing . pickled peppers";
                veggie1.appendChild(crispBrusDetails);

            veggies.appendChild(veggie1);

        menu.appendChild(veggies);


    container.appendChild(menu);

}