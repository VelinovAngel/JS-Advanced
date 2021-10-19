function solve() {
    const fields = document.querySelectorAll('#container input');
    const btn = document.querySelector('#container button');
    const adoptionList = document.querySelector('#adoption ul');
    const adoptedList = document.querySelector('#adopted ul');


    const input = {
        name: fields[0],
        age: fields[1],
        kind: fields[2],
        currentOwner: fields[3]
    };

    btn.addEventListener('click', adoption);

    function adoption(ev) {
        ev.preventDefault();

        const name = input.name.value;
        const age = Number(input.age.value);
        const kind = input.kind.value;
        const owner = input.currentOwner.value;

        if (name == '' || Number.isNaN(age) || age == '' || kind == '' || owner == '') {
            return;
        }

        const newBtn = e('button', {}, 'Contact with owner');
        const pet = e('li', {},
            e('p', {},
                e('strong', {}, name),
                ' is a ',
                e('strong', {}, age),
                ' year old ',
                e('strong', {}, kind)
            ),
            e('span', {}, `Owner: ${owner}`),
            newBtn,
        )

        // input.name.value = '';
        // input.age.value = '';
        // input.kind.value = '';
        // input.currentOwner.value = '';

        Array.from(fields).forEach(x => x.value = '');

        adoptionList.appendChild(pet);
        newBtn.addEventListener('click', contactOwner);

        function contactOwner(ev) {
            const confirmInput = e('input', { placeholder: 'Enter your names' });
            const confirmBtn = e('button', {}, 'Yes! I take it!');
            const confirmDiv = e('div', {}, confirmInput, confirmBtn);

            newBtn.remove();

            pet.appendChild(confirmDiv);

            confirmBtn.addEventListener('click', adopt.bind(null, confirmInput, pet));
        }

    }
    function adopt(input, pet) {
        const newOwner = input.value.trim();
        if (newOwner == '') {
            return;
        }
        const checkedBtn = e('button', {}, 'Checked');
        pet.querySelector('div').remove();
        pet.appendChild(checkedBtn);
        pet.querySelector('span').textContent = `New Owner: ${newOwner}`;
        adoptedList.appendChild(pet);

        checkedBtn.addEventListener('click' , removePet.bind(null, pet))
    }

    function removePet(pet){
        pet.remove();
    }

    function e(type, att, ...content) {
        const element = document.createElement(type);

        for (let prop in att) {
            element[prop] = att[prop];
        }

        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }
        return element;
    }
}

