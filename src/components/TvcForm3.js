import React, { Component } from 'react';

class LDQVForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:"Lê Đoàn Quốc Văn",
            age:"20",
            course:"LDQV-HTML5",
            gender:true
        }
    }

    LDQVHandleChange = (event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({
            [name]:value
        })
        console.log(name, value);
    }

    LDQVHandleSubmit = (event)=>{
        event.preventDefault();
        console.log(this.state);
        // Chuyển dữ liệu lên App
        this.props.onSubmit(this.state)
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Student Name:</label>
                        <input  name='studentName'
                                value={this.state.studentName} 
                                onChange={this.LDQVHandleChange}/>
                    </div>
                    <div>
                        <label>Age:</label>
                        <input  name='age' 
                                value={this.state.age} 
                                onChange={this.LDQVHandleChange}/>
                    </div>
                    <div onChange={this.LDQVHandleChange }>
                        <label>Gender:</label>
                        <input type='radio' id='rdNam' name='gender' value={true} 
                            defaultChecked={this.state.gender===true} /> 
                            <label htmlFor='rdNam'>Nam</label>
                        <input type='radio' id='rdNu'  name='gender' value={false} 
                            defaultChecked={this.state.gender===false} /> 
                            <label htmlFor='rdNu'>Nữ</label>
                    </div>
                    <div>
                        <label>Course:</label>
                        <select name='course'
                                value={this.state.course} 
                                onChange={this.LDQVHandleChange}>
                            <option value={"LDQV-HTML5"}>LDQV-HTML5</option>
                            <option value={"LDQV-CSS3"}>LDQV-CSS3</option>
                            <option value={"LDQV-JS"}>LDQV-JS</option>
                            <option value={"LDQV-RJ"}>LDQV-ReactJs</option>
                        </select>
                    </div>

                    <button onClick={this.tvcHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default LDQVForm3;
