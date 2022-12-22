import React from 'react'
import {FaDev} from "react-icons/fa"
import {BiMessageRoundedCheck} from "react-icons/bi"
import {RiNotificationLine} from "react-icons/ri"

const Navigation = () => {
  return (
    <header className = "header">
        <div className="headerContainer">
            <a href="https://dev.to" className= "headerContainer__logo">
                <FaDev size= "3.125rem"/>
            </a>
            <div className='headerContainer__searchBox'>
                <form>
                    <input type="text" placeholder='Search...' aria-label="search"/>
                </form>
            </div>

            <div className='headerContainer__right'>
                <button>Write a post</button>
                <i>
                    <BiMessageRoundedCheck/>
                </i>
                <i>
                    <RiNotificationLine/>
                </i>
            <span>
                <img src="https://picsum.photos/200" alt = "Profile Pictures"/>
            </span>
            </div>

        </div>
    </header>
  )
}

export default Navigation