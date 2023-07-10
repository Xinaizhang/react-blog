import {
  Link,
} from "react-router-dom";
import React from 'react';
import { 
  EditTwoTone,
  DeleteTwoTone } from '@ant-design/icons';
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" alt="" />
        <div className="user">
          <img src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" alt="" />
          <div className="info">
            <span>Xinai</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`write?edit=2`}>
              <EditTwoTone twoToneColor="teal" className='icon'/>
            </Link>
            <DeleteTwoTone twoToneColor="red"  className='icon'/>
          </div>
        </div>

        <h1>Title</h1>
        <p>content content content content content content content content 
        content content content content content content content content content content 
        content content content content content content content content content content content content 
        content content content content content content content content content content 
        content content content content content content content content content content 
        content content content content content content content content content content 
        content content content content 
        </p>

      </div>
      <Menu />
    </div>
  )
}

export default Single