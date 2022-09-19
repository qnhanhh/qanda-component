import { grades, subjects, teachers } from '../data/search'
import { Footer } from '../Footer'
import * as css from './TeacherSearchCSS'

export const TeacherSearch = () => {
    return (
        <>
            <css.Title>Môn học bạn đang tìm kiếm?</css.Title>
            <css.Grades>
                {grades.map((item, index) => {
                    return <h2 key={index}>{item}</h2>
                })}
            </css.Grades>
            <css.Subjects>
                <ul>
                    {subjects.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </css.Subjects>
            <css.Title>Giáo viên</css.Title>
            <css.Result>
                {teachers.map((item, index) => {
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