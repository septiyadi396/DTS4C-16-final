import React from "react";
import logo from "./../assets/logo.png"
import P1 from './../assets/user_profile/ProfilePicture1.png'
import P2 from './../assets/user_profile/ProfilePicture2.png'
import P3 from './../assets/user_profile/ProfilePicture3.png'
import P4 from './../assets/user_profile/ProfilePicture4.png'
import Navbar from "./../components/Navbar"
// import Button from '@mui/material/Button';

const users = [
    {
        id: 1,
        photo: P1,
        name: "Murat"
    },
    {
        id: 2,
        photo: P2,
        name: "Umut"
    },
    {
        id: 3,
        photo: P3,
        name: "Kemal"
    },
    {
        id: 4,
        photo: P4,
        name: "Çocuk"
    },
];

const Profile = () => {
    return (
        <div className="profileSelector">
            <Navbar/>
            <div className="profileSelection" style={{ textAlign: 'center', position:'relative', flexWrap:'wrap'}}>
                <h1 style={{color: 'white'}}>Who's watching?</h1>
                <div className="profileList" style={{display: 'flex', justifyContent:'center'}}>
                    {users.map((user, index) => (
                        <div className="user" key={index} style={{padding: '1em'}}>
                            <a href="/">
                            <img src={user.photo} alt={user.name} style={{width:'7em', height:'auto'}} />
                            <p style={{color:'#d7d7db', margin:'10px'}}>{user.name}</p>
                            </a>
                        </div>
                        ))}
                </div>
                <button variant="outlined" className="btn">Manage Profiles</button>
            </div>
        </div>
    )
}

export default Profile