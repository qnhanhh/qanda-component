import { useState } from 'react'
import { grades, subjects, teachers } from '../data/search'
import { Footer } from '../Footer'
import * as css from './TeacherSearchCSS'

export const TeacherSearch = () => {
    const [grade, setGrade]=useState(0)
    const [subject,setSubject]=useState(['Toán'])

    const initTeacher=teachers.filter(item=>{
        return item.grade.includes(grades[grade].name)
    })
    const [teacher,setTeacher]=useState(initTeacher)

    const handleClick=(id)=>{
        setGrade(id)
        setSubject(grades[id].availableSubjects)
        const newTeacher=teachers.filter(item=>{
            return item.grade.includes(grades[id].name)
        })
        setTeacher(newTeacher)
    }
    
    return (
        <>
            <css.Title>Môn học bạn đang tìm kiếm?</css.Title>
            <css.Grades>
                {grades.map((item) => {
                    return <h2 
                    style={grade===item.id?{color:'red'}:{color:'black'}}
                    onClick={(id)=>handleClick(item.id)} key={item.id}>{item.name}</h2>
                })}
            </css.Grades>
            <css.Subjects>
                <ul>
                    {subjects.map((item, index) => {
                        return <li 
                        style={subject.includes(item)?{color:'red'}:{color:''}}
                        key={index}>{item}</li>
                    })}
                </ul>
            </css.Subjects>
            <css.Title>Giáo viên</css.Title>
            <css.Result>
                {teacher.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item.url} alt=''></img>
                        </div>
                    )
                })}
            </css.Result>
            <Footer/>
        </>
    )
}