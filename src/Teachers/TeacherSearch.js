import { grades, subjects, teachers } from '../data/search'
import './Teachers.css'

export const TeacherSearch = () => {
    return (
        <>
            <h2 className='title'>Môn học bạn đang tìm kiếm?</h2>
            <div className='grades'>
                {grades.map((item, index) => {
                    return <h2 key={index}>{item}</h2>
                })}
            </div>
            <div className='subjects'>
                <ul>
                    {subjects.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
            <h2 className='title'>Giáo viên</h2>
            <div className='result'>
                {teachers.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item.url} alt=''></img>
                        </div>
                    )
                })}
            </div>
        </>
    )
}