import React from "react";
import styled from "styled-components";

export const Avatar = () =>
  <AvatarImg
    src="https://nypost.com/wp-content/uploads/sites/2/2018/07/tesla-debt_1.jpg?quality=90&strip=all&w=618&h=410&crop=1"
  />


const AvatarImg = styled.img`
  height: 46px;
  width: 46px;
  border-radius: 50%;
  border: 3px solid white;
  object-fit:cover;
`
