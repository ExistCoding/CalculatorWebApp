function Button () {
    return (<button>I am Button</button>);
}

const rootNode = document.getElementById('hook-root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(Button()));