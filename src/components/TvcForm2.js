import React, { Component } from 'react';

class LDQVForm2 extends Component {
    // 1. 
    constructor(props){
        super(props);
        this.state = {
            course:"LDQV-HTML5"
        }
    }
    //3. hàm xủ lý sự kiện
    tvcHandleChange = (event)=>{
        // cập nhật state
        this.setState({
            course:event.target.value
        })
    }
    //4. 
    tvcHandleSubmit = (event)=>{
        event.preventDefault();
        alert(this.state.course)
    }
    render() {
        // 2.
        return (
            <div>
                <form onSubmit={this.tvcHandleSubmit}>
                    <label>Course</label>
                    <select value={this.state.course} 
                            onChange={this.tvcHandleChange}>
                        <option value={"LDQV-HTML5"}>Tvc-HTML5</option>
                        <option value={"LDQV-CSS3"}>Tvc-CSS3</option>
                        <option value={"LDQV-JS"}>Tvc-JS</option>
                        <option value={"LDQV-RJ"}>Tvc-ReactJs</option>
                    </select>
                    <input type='submit' value={"Submit"} />
                </form>
            </div>
        );
    }
}

export default LDQVForm2;
