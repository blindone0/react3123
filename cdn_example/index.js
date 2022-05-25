//ReactDOM.render(hello, document.getElementById('root'));

const element = 

        <ul>
            <li>
            <h1>I'm learning ReactDOM</h1>
            </li>
            <li>
            <h2>ReactDOM.render elments, postiion</h2>
            </li>
        </ul>
;

console.log(element)

ReactDOM.render(
    
    element
    ,
    document.querySelector('#root')
);

/*
const h1 = document.createElement("h1")
h1.textConeent = "I'm learning ReactDOM"
h1.className = "header"
document.getElementById("root").appendChild(h1)
*/