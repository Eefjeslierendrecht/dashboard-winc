import React from 'react'
import WincLogo from '../logoWinc.PNG'
import { Link, withRouter } from 'react-router-dom';


function Header(props) {


    const options = props.students.map(student => {
        return <option key={student.id} value={student.id}>{student.firstName}</option>
    });

    const studentSelectHandleChange = (event) => {
        props.history.push(`${event.target.value}`);
    }


    return (
        <header>
            <Link to="/"><img src={WincLogo} alt="Winc Academy Logo" id="logo" /></Link>
            <div className="opties">
            <label><h3>Filter per student</h3>
                <select name="select-student" id="select-student" onChange={studentSelectHandleChange}>
                    <option value="/">Kies student</option>
                    {options}
                </select>
            </label>
            </div>
        </header>
    )
}

export default withRouter(Header);