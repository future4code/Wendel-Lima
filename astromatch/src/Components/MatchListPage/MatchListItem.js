import React from 'react'
import styled from 'styled-components'

const ListItemContainer = styled.div`
    display:flex;
    align-items:center;
    border-bottom: 1px solid #a1887f;

    :hover {
        background-color:#bdbdbd;
    }
`
const Avatar = styled.img`
    border-radius: 50%;
    margin-right: 10px;
    width: 30px;
    height: 30px;
`

function MatchListItem(props) {
    const profile = props.profile
    return (
        <ListItemContainer>
            <Avatar src={profile.photo} />
            <p>{profile.name} </p>
        </ListItemContainer>
    )

}

export default MatchListItem