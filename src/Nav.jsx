import './Nav.css'
import { useState, useEffect } from 'react'
const Nav = () => {

    const [isNavBlack , setNavBlack] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll" , ()=>{
            if(window.scrollY>100){
                setNavBlack(true)
            }else setNavBlack(false)
        })
        return ()=>{window.removeEventListener("scroll" ,()=>{})}
    },[])

  return (
    <div className={`nav ${isNavBlack && "nav_black"}`}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png" alt="" className="netflix_logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" className="avatar" />
    </div>
  )
}
export default Nav