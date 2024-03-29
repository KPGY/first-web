import "./Header.css"
import SearchIcon from '@mui/icons-material/Search'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img className='header_logo' src="img/logo.png"/>
            </Link>

            <div className='header_search'>
                <input className='header_searchInput' type="text">
                </input>

                <SearchIcon variant="contained" className='header_searchIcon'></SearchIcon>
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className="header_optionone">환영합니다!</span>
                    <span className="header_optiontwo">로그인하기</span>
                </div>

                <div className='header_option'>
                    <span className="header_optionone">이번주</span>
                    <span className="header_optiontwo">나만의 상점</span>
                </div>

                <div className='header_option'>
                    <span className="header_optionone">확인하기</span>
                    <span className="header_optiontwo">구매내역</span>
                </div>
            </div>
        </div>
    )
}
export default Header;