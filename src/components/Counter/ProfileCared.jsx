import React, { useState } from 'react'
import pics from '../../assets/pics.jpeg'
import { IoIosArrowDropdown } from "react-icons/io";


const ProfileCared = () => {
    const [text, setText] = useState(false)
    const showTextHandler = () =>{
        setText((prevText) => !prevText);
    }
    return (
        <div style={{ border: "1px solid white", width: "250px", height: "auto", padding: "20px", position: 'relative' }}>
            <div className="profile-image" >
                <img src={pics} alt="profile image" style={{ borderRadius: "50%", height: "100px", width: "100px", objectFit: "cover" }} />
            </div>
            <h3 style={{ marginTop: '10px', marginBottom: "0" }}>Dennis Akagha</h3>
            <p style={{ margin: '0px', fontSize: '12px' }}>Software Engineer</p>
            <IoIosArrowDropdown onClick={showTextHandler} style={{ fontSize: '20px', position: 'absolute', top: '10px', right: '20px' }} />
            <div className="content" style={{ margin: '0px', fontSize: '10px' }} >
                {text && (
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem praesentium blanditiis quae ipsa molestiae at ipsum nisi mollitia excepturi.
                    </p>
                )}
            </div>
        </div>
    )
}

export default ProfileCared