const submitButton = document.getElementById('btn-submit');
const infoSection = document.getElementById('info-section');

const tableContainer = document.getElementById('table-container');

const regexps = {
    name: /^[A-ZА-ЯҐЄІЇ][a-zа-яґєії]*\s[A-ZА-ЯҐЄІЇ]\.[A-ZА-ЯҐЄІЇ]\.$/,
    variant: /^\d{1,2}$/,
    group: /^[A-ZА-ЯҐЄІЇ]{2}-\d{2}$/,
    faculty: /^[A-ZА-ЯҐЄІЇ]{4}$/,
    dateOfBirth: /^([0-2][0-9]|3[0-1])\.((0[0-9])|(1[0-2]))\.\d{4}$/,
};

const validations = Object.assign({}, regexps);

Object.keys(validations).forEach((key) => {
    validations[key] = { isValid: null, name: null, value: null };
});

const btn = document.getElementById('btn-submit');

const setEventHandlers = () => {
    for (const key in regexps) {
        const element = document.getElementById(key);
        element &&
            element.addEventListener('blur', () => validateInput(key, element));
    }
};

const validateInput = (key, element) => {
    const regexp = regexps[key];
    const isValid = regexp.test(element.value);
    validations[key].value = element.value;
    validations[key].isValid = isValid;
    validations[key].name = element.placeholder;

    element.style.border = isValid ? '1px solid #eee' : '2px solid red';
};

submitButton.addEventListener('click', () => {
    const hasInvalidFields = Object.values(validations).some(
        (value) => value.isValid === null || value.isValid === false
    );
    console.log(hasInvalidFields);
    hasInvalidFields ? hide() : display();
});
const hide = () => {
    infoSection.replaceChildren();
    infoSection.style.display = 'none';
};

const display = () => {
    const list = document.createElement('ul');
    Object.values(validations).forEach((validation) => {
        const elem = document.createElement('li');
        elem.textContent = `${validation.name}: ${validation.value}`;
        list.appendChild(elem);
    });
    // const res = Array.from(validations).forEach((validation) => {
    // const elem = document.createElement('li');
    //     console.log(validation);
    // elem.textContent = value.value;
    // list.appendChild(elem);
    // });
    infoSection.style.display = 'block';

    infoSection.replaceChildren(list);
};

const generateTable = () => {
    const table = document.createElement('table');
    table.setAttribute('id', 'table');
    table.className = 'table';

    const colorPicker = document.createElement('input');
    colorPicker.setAttribute('type', 'color');
    colorPicker.setAttribute('id', 'color-picker');
    tableContainer.appendChild(colorPicker);

    const variant = 9;

    let cellNumber = 1;

    const columnCells = [];

    for (let i = 1; i <= 6; i++) {
        const tr = document.createElement('tr');
        for (let j = 1; j <= 6; j++) {
            const td = document.createElement('td');

            td.innerText = cellNumber;

            if (cellNumber % 6 === 3 && cellNumber > 9) {
                columnCells.push(td);
            }

            if (cellNumber === variant) {
                td.addEventListener('mouseover', () => {
                    td.style.backgroundColor = generateRandomColor();
                });

                td.addEventListener('click', () => {
                    td.style.backgroundColor = colorPicker.value;
                });
                td.addEventListener('dblclick', (e) => {
                    columnCells
                        .filter((c, index) => index % 2 !== 0)
                        .forEach(
                            (c) =>
                                (c.style.backgroundColor =
                                    td.style.backgroundColor)
                        );
                });
            }

            tr.appendChild(td);
            cellNumber++;
        }
        table.appendChild(tr);
    }
    tableContainer.appendChild(table);
};

const generateRandomColor = () =>
    '#' + Math.floor(Math.random() * 16777215).toString(16);

setEventHandlers();
generateTable();
