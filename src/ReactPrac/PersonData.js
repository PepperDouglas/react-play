/* eslint-disable no-unused-expressions */
class PersonData {
    constructor(name, email){
        this.Name = name,
        this.Email = email
    }
    concat() {
        return(<p>Name: {this.Name}, Email: {this.Email}</p>);
    }
}

export default PersonData;