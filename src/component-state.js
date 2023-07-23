var root = ReactDOM.createRoot(document.getElementById("root"));

class User extends React.Component {
    constructor(props) {
        super(props);
        this.changeEmail = this.changeEmail.bind(this);

        this.state = {
            name: "Abdullah Akpur",
            email: "akpurrabdullah@gmail.com"
        }
    }

    changeEmail() {
        this.setState ({
            name : "Damian Hoeger",
            email: "Damian.Hoeger38@gmail.com"
        })
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <p>{this.state.email}</p>
                <button onClick={this.changeEmail}>Change Email</button>
            </div>
        )
    }
}

root.render(<User />);