import React, { useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

const Image = () => {
    const IMG_SRC =
        'https://www.wien.info/resource/image/290578/3x2/1663/1122/a91e087927a65f46f9f779797068f401/6E892396EBCED61F02AE5F4DA19A81EF/40367-graben-einkaufen-shopping-altstadt-einkaufsstrassen.jpg';

    const [deleted, setDeleted] = useState(true);
    const ref = useRef(null);
    const [scale, setScale] = useState(1.0);

    const handleAddClick = () => {
        setDeleted(false);
    };

    const handleZoomInClick = (e) => {
        setScale((scale) => scale + 0.1);

        if (ref.current) {
            ref.current.style.transform = `scale(${scale})`;
        }
    };
    const handleZoomOutClick = (e) => {
        setScale((scale) => scale - 0.1);
        if (ref.current) {
            ref.current.style.transform = `scale(${scale})`;
        }
    };
    const handleDeleteClick = () => {
        setDeleted(true);
    };

    return (
        <div>
            {!deleted && (
                <PictureWrapper>
                    <Picture
                        style={{ transform: `scale(${scale})` }}
                        ref={ref}
                        src={IMG_SRC}
                        alt='vienna'
                    />
                </PictureWrapper>
            )}
            <div className='buttons'>
                <button id='add' onClick={handleAddClick}>
                    Додати
                </button>
                <button id='zoom-in' onClick={handleZoomInClick}>
                    Збільшити
                </button>
                <button id='zoom-out' onClick={handleZoomOutClick}>
                    Зменшити
                </button>
                <button id='delete' onClick={handleDeleteClick}>
                    Видалити
                </button>
            </div>
        </div>
    );
};

const PictureWrapper = styled.div`
    width: 700px;
    height: 500px;
    overflow: hidden;
    margin-top: 25px;
    margin-bottom: 15px;
`;

const Picture = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export default Image;
