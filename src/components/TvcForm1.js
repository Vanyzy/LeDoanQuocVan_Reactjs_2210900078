import React, { Component } from 'react';

class LDQVForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName:"Lê Đpàn Quốc Văn"
        }
    }

    //Hàm xử lý sự kiện khi thay đổi dữ liệu trên text
    handleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            studentName:event.target.value,
        })
    }
    // Sự kiện submit form
    handleSubmit = (ev)=>{
        console.log(ev);
        ev.preventDefault();
        alert(this.state.studentName)
    }
    render() {
        return (
            <div>
                <h2>Demo ReactJs Form - Text</h2>
                <form>
                    <label>Student Name:</label>
                    <input  value={this.state.studentName} 
                            onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default TvcForm1;
