const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Bailey"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h2", {}, "Golden Retriever"),
    ])
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet),
        React.createElement(Pet),
        React.createElement(Pet),
      ]);
};


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));