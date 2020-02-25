class ContactsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "",
            text: ""
        }

        // this. changeEmail = this.changeEmail.bind(this)
        // this. changeName = this.changeName.bind(this)
        // this. changeText = this.changeText.bind(this)
    }

    changeEmail(event) {
        this.setState({ email: event.target.value })
    }
    changeName(event) {
        this.setState({ name: event.target.value })
    }
    changeText(event) {
        this.setState({ text: event.target.value })
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <form className="contactsForm" onSubmit={this.handleSubmit.bind(this)}>
                <div className="input name">
                    <input type="text" id="name" value={this.state.name} onChange={this.changeName.bind(this)} />
                    <label for="name">Nome</label>
                </div>
                <div className="input email">
                    <input type="email" id="email" value={this.state.email} onChange={this.changeEmail.bind(this)} />
                    <label for="email">Email</label>
                </div>
                <div className="input text">
                    <textarea type="text" id="text" value={this.state.text} onChange={this.changeText.bind(this)} />
                    <label for="text">Testo</label>
                </div>
                <input type="submit" value="Invia" />
            </form>
        )
    }
}

export default ContactsForm