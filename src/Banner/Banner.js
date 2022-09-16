import { Button } from '../Button/Button'
import * as css from './BannerCSS'

export const Banner = () => {
    return (
        <>
        <css.Wrapper>
            <css.Video autoPlay muted loop>
                <source src="https://qandastudy.vn/kh/uploads/files/Hero%20Banner.mp4" type="video/mp4" />
            </css.Video>
            <css.Caption>
                <css.Container>
                    <h2>Hoc theo cach cua ban voi<br /><span>QANDA Study</span></h2>
                    <p>Nen tang hoc truc tuyen cung doi ngu giao vien ngoi sao - dem den co hoi thi cu cong bang cho moi hoc sinh tu lop 1 den lop 12.</p>
                    <Button />
                </css.Container>
            </css.Caption>
        </css.Wrapper>
        </>
    )
}