import React, { Component } from 'react';

class TvcForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:"Lê Đoàn Quốc Văn",
            age:"20",
            course:"Tvc-HTML5",
            gender:true
        }
    }

    tvcHandleChange = (event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({
            [name]:value
        })
        console.log(name, value);
    }

    tvcHandleSubmit = (event)=>{
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
                                onChange={this.tvcHandleChange}/>
                    </div>
                    <div>
                        <label>Age:</label>
                        <input  name='age' 
                                value={this.state.age} 
                                onChange={this.tvcHandleChange}/>
                    </div>
                    <div onChange={this.tvcHandleChange }>
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
                                onChange={this.tvcHandleChange}>
                            <option value={"Tvc-HTML5"}>Tvc-HTML5</option>
                            <option value={"Tvc-CSS3"}>Tvc-CSS3</option>
                            <option value={"Tvc-JS"}>Tvc-JS</option>
                            <option value={"Tvc-RJ"}>Tvc-ReactJs</option>
                        </select>
                    </div>

                    <button onClick={this.tvcHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default TvcForm3;