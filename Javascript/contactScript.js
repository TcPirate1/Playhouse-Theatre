'use strict';

class Paragraph extends React.Component {
    render() {
        let pStyle = {
            backgroundColor: "black",
            color:"white",
            padding:"5vh",
            fontSize:"1.4rem",
        };
        return (
            <p style={pStyle}>Please Contact our friendly staff on <a href="#">0800 658 795</a> if there are any problems!</p>
        );
    }
}

class Square extends React.Component {
    render() {
        let squareStyle = {
            width:"100%",
            margin:"auto",
            textAlign:"center",
        };
        return (
            <div style={squareStyle}>
            <Paragraph/>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Square/>
    </div>, document.querySelector(".contact")
);