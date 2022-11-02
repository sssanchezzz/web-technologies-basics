import React from 'react';
import styled from 'styled-components';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.colors = ['#9f7df6', '#61b7f4', '#fff048', 'transparent'];
        this.i = 1;
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = (e) => {
        e.target.style.backgroundColor =
            this.colors[this.i % this.colors.length];
        e.target.style.color = this.i % 2 ? 'black' : 'white';
        this.i++;
    };

    render() {
        return (
            <div>
                <div className='hobby'>
                    <h4>Хобі:</h4>
                    <ul>
                        <li>Малювання</li>
                        <li>Спорт</li>
                        <li id='ninth'>Рукоділля</li>
                    </ul>
                </div>

                <div>
                    <h4 className='next-to-ninth' onClick={this.clickHandler}>
                        Фільми
                    </h4>
                    <ol>
                        <li onClick={this.clickHandler}>Інтерстеллар</li>
                        <li>1+1</li>
                        <li>Карти, гроші, два стволи</li>
                    </ol>
                </div>
                <div className='city-info'>
                    <h4>Відень</h4>
                    <p>
                        Відень - федеральна столиця Австрії. Є одночасно однією
                        з 9 земель Австрії, з усіх боків оточеною територією
                        іншої землі — Нижньої Австрії. На 2020 рік населення
                        становить 1 911 191 мешканця; разом із передмістями —
                        близько 2,6 млн (більше 25 % відсотків жителів Австрії);
                        таким чином, Відень є найнаселенішим містом в Австрії,
                        посідає одинадцяте місце серед найбільших міст
                        Європейського Союзу за чисельністю населення і друге
                        місце серед німецькомовних міст за тим же показником,
                        поступаючись Берліну. Культурний, економічний і
                        політичний центр Австрії.
                    </p>
                    <div>
                        <a href='https://www.wien.info/de' target='_blank'>
                            <Picture
                                src='https://www.wien.info/resource/image/290578/3x2/1663/1122/a91e087927a65f46f9f779797068f401/6E892396EBCED61F02AE5F4DA19A81EF/40367-graben-einkaufen-shopping-altstadt-einkaufsstrassen.jpg'
                                alt=''
                            />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

const Picture = styled.img`
    width: 700px;
`;

export default Content;
