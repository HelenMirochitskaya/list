import { Component } from "react";
export class WorkList extends Component {
    state = {
        userInput:'',
        list:[],
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            alert ('Пожалуйста, введите значение')
        }
        else {
            let listArray = this.state.list;
            listArray.push(input);
            this.setState({list: listArray, userInput: ''})
        }
    }

    deleteItem() {
        let listArray = this.state.list;
        listArray = [];
        this.setState({list: listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }


    render() {
        return(
            <div>

                <form onSubmit={this.onFormSubmit}>

                    <div>
                        <input type='text' placeholder='...' onChange={(e) => {this.onChangeEvent(e.target.value)}} value = {this.state.userInput} />
                    </div>

                    <div>
                        <button className="add" onClick = {() => this.addItem(this.state.userInput)}> Добавить</button>
                    </div>

                    <ul> 
                        {this.state.list.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}> {item} </li>))}

                    </ul>

                    <div>
                        <button className="delete" onClick = {() => this.deleteItem()}> Удалить</button>
                    </div>







                </form>



            </div>
        )
    }


}



export default WorkList;