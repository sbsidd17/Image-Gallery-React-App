import React from 'react'

function Footer({offset,setOffset}) {
  return (
    <footer>
        {(offset<=0)?<div></div> : <button onClick={()=>{setOffset((pre)=>{return(pre -= 20)})}}>Previous Page</button>}
        <button onClick={()=>{setOffset((pre)=>{return(pre += 20)})}}>Next Page</button>
    </footer>
  )
}

export default Footer