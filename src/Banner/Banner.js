import { Button } from '../Button/Button'
import {Navigation} from '../Navigation/Navigation'
import * as css from './BannerCSS'

export const Banner = () => {
    return (
        <>
        <Navigation/>
        <css.Wrapper>
            <css.Video autoPlay muted loop>
                <source src="https://qandastudy.vn/kh/uploads/files/Hero%20Banner.mp4" type="video/mp4" />
            </css.Video>
            <css.Caption>
                <css.Container>
                    <h2>Học theo cách của bạn với</h2>
                    <h2 className='title'>QANDA Study</h2>
                    <p>Nền tảng học trực tuyến cùng đội ngũ giáo viên ngôi sao - đem đến cơ hội thi cử công bằng cho mọi học sinh từ lớp 1 đến lớp 12.</p>
                    <Button />
                </css.Container>
            </css.Caption>
        </css.Wrapper>
        </>
    )
}