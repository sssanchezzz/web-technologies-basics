import React from 'react';

const Header = () => {
    return (
        <div>
            <div>
                <h2>Боринець Олександра Ігорівна</h2>
            </div>
            <p>Дата і місце народження: 30.04.2002, м. Київ</p>
            <div className='education'>
                <h4>Освіта:</h4>
                <dl>
                    <dd>Школа №53 м. Києва.</dd>
                    <dd>НТУУ КПІ ФІОТ.</dd>
                </dl>
            </div>
        </div>
    );
};
export default Header;
