const chars = 'ABCDEFGIJK0123456789';

const btn = document.querySelector('button');
const section = document.querySelector('section');

const codesNumber = 100;
const charsNumber = 10;

const codesGenerator = () => {
    for(let i = 0; i<codesNumber; i++){
        let code = "";
        for(let z = 0; z <charsNumber; z++){
            const index = Math.floor(Math.random() * chars.length)
            code += chars[index];
        }
        
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }
}

btn.addEventListener('click', codesGenerator);