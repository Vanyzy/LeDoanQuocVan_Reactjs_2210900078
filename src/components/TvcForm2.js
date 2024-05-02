import React, { Component } from 'react';

class TvcForm2 extends Component {
    // 1. 
    constructor(props){
        super(props);
        this.state = {
            course:"Tvc-HTML5"
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
                        <option value={"Tvc-HTML5"}>Tvc-HTML5</option>
                        <option value={"Tvc-CSS3"}>Tvc-CSS3</option>
                        <option value={"Tvc-JS"}>Tvc-JS</option>
                        <option value={"Tvc-RJ"}>Tvc-ReactJs</option>
                    </select>
                    <input type='submit' value={"Submit"} />
                </form>
            </div>
        );
    }
}

export default TvcForm2;