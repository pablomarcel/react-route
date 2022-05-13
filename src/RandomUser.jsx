import React, {useEffect, useState} from 'react'
// import PropTypes from 'prop-types'

export default function RandomUser(){
    const [user, setUser]= useState(undefined)
    const [isLoading, setIsLoading] = useState(true)
    const [haserror, setHasError] = useState(false)


    useEffect(()=>{
        // fetch(`https://api.github.com/users/${username}`)
        fetch(`https://randomuser.me/api/?results=1`)
            //when returns successfully
            .then(response => response.json())
            // .then(data=>console.log(data))
            .then(data=>{
                setUser(data.results[0]);
                setIsLoading(false);

            })
            //api returns error
            .catch(()=> {

                    setHasError(true);
                    setIsLoading(false);
                }

                // console.log(error)
                // setHasError(true)}

            )
//dependency list, empty array
    }, [])


    if (isLoading){
        return <p>Loading...</p>
    }


    if(haserror){
        return <p>an error occurred try again later</p>
    }


    return (

        <div>
            <h1>{user.name.first} {user.name.last}</h1>
            <img
                src={user.picture.thumbnail}
                alt={`${user.name.first} portrait`}/>


        </div>

    )
    //
    // <h1>GithubProfile for {username}</h1>

}

// RandomUser.propTypes = {
//     username: PropTypes.string.isRequired
// }

// GithubProfile.PropTypes = {
//     username: PropTypes.string.isRequired
// };

