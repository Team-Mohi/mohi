import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function MyProfile() {
  const history = useHistory();

  function nav1() {
    history.push("/nav1")
  }

  return (
    <>
      <Button onClick={nav1} >Test</Button>
      <Button onClick={nav1} >Test</Button>
      <Button onClick={nav1} >Test</Button>
      <Button onClick={nav1} >Test</Button>
      <Button onClick={nav1} >Test</Button>
      <Button onClick={nav1} >Test</Button>
    </>
  )
}

export default MyProfile;
