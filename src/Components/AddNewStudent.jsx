import React from 'react'
import {Link} from "react-router-dom"
import "./AddNewStudent.css"

const AddNewStudent = () => {
  return (
    <div className='addnewstudentform'>
        <form>
            <h2>Add New Student</h2>
            <div className="input-container ic1">
                <input name="name" type="text" className="input" placeholder=" " />
                <div className="cut"></div>
                <label htmlFor='name'className="placeholder">Name</label>
            </div>
            <div className="input-container ic2">
                <input name='age'className="input" type="number" placeholder=" "/>
                <div className="cut"></div>
                <label htmlFor="lastname" className="placeholder">Age</label>
            </div>
            <div className="input-container ic3">
                <input name="course"  className="input" type="text" placeholder=" "/>
                <div className="cut"></div>
                <label htmlFor="course" className="placeholder">Course</label>
            </div>
            <div className="input-container ic4">
                <input name="batch" className="input" type="text" placeholder=" "/>
                <div className="cut"></div>
                <label htmlFor="batch" className="placeholder">Batch</label>
            </div>
            <Link to="/student"><button className="submit-btn" type='submit'>submit</button></Link>
            <Link to="/student"><button  className="cancel-btn" type='cancel'>Cancel</button></Link>
        </form>
    </div>
  )
}

export default AddNewStudent