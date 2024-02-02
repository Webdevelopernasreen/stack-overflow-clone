import React from 'react'

const ProfileBio = ({currentProfile}) => {
  return (
    <div>
      <div>
      {
        currentProfile?.tags.length !== 0 ? (
            <>


            <h1>Tags watched</h1>


            {
                currentProfile?.tags.map((tag)=>(
                      <p key={tag}>{tag}</p>
                ))
            }
            </>
        ):(
            <p>0 tags watched</p>
        )
      }
      <div>
        {
            currentProfile?.about ? (
                <>

                <h1>About</h1>
                <p>{currentProfile.about}</p>
                </>
            ):(
                <p>No bio found</p>
            )
            
        }
      </div>
      </div>
    </div>
  )
}

export default ProfileBio
