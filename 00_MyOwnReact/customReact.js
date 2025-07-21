function customRender(element, container){
    const elem = document.createElement(element.type)
    elem.innerHTML = element.children;
    for (const prop in element.props) {
        if(prop === 'children') continue;
        elem.setAttribute(prop, element.props[prop])
    }
    container.appendChild(elem);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click here to visit on Google.com'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);