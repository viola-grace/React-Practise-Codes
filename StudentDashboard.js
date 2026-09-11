import React, { useEffect, useState } from 'react';

const StudentDashboard = ({attendance}) =>{
    const [absentees, setAbsentees] = useState(false);
    const [present, setPresent] = useState(false);

    const visibleAbsentees = absentees ?
            attendance.filter(student=>student.present===false):
            [];

     const visiblePresent = present ?
            attendance.filter(student=>student.present===true):
            [];

    const strength = attendance.reduce((count, student)=>count+1,0);
    const presentStrength = visiblePresent.reduce((count, student)=>count+1,0);
    const absentStrength = visibleAbsentees.reduce((count, student)=>count+1,0);

    useEffect(()=>{
       document.title= "Present Strength "+ presentStrength;
    },[presentStrength])

    return(
        <div> 
            <title>Student Dashboard : {} students</title>
            <h1>Student Dashboard Strength: {strength}</h1>
            <h2>Present Strength: {presentStrength}</h2>
            <h2>Absent Strength: {absentStrength}</h2>
            {
            attendance.map((student)=>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Present?</th>
                        </tr>
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.present? "Present": "Absent"}</td>
                        </tr>
                    </table>
            )
            }
            <table>
            <tr>
            <td><button onClick={()=>(setAbsentees(true))}>Show Absentees Only</button></td>
            <td><button onClick={()=>(setPresent(true))}>Show Present Only</button></td>
            <td> <button onClick={()=>{
                setAbsentees(false)
                setPresent(false)}
            }>Clear All</button></td>
            </tr>
            <tr>
            <td> {
            visibleAbsentees.map((student)=>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Present?</th>
                        </tr>
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.present? "Present": "Absent"}</td>
                        </tr>
                    </table>
            )
            }</td>
            <td>{
            visiblePresent.map((student)=>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Present?</th>
                        </tr>
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.present? "Present": "Absent"}</td>
                        </tr>
                    </table>
            )
            }</td></tr>
            </table>
        </div>
       
    );
}
export default StudentDashboard;