import {Navigation} from '../Navigation/Navigation'
import { TeacherBanner } from './TeacherBanner'
import { TeacherCarousel } from './TeacherCarousel'
import { TeacherSearch } from './TeacherSearch'

export const Teachers=()=>{
    return(
        <>
        <Navigation/>
        <TeacherBanner/>
        <TeacherCarousel/>
        <TeacherSearch/>
        </>
    )
}