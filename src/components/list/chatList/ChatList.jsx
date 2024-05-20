import { useState } from "react"
import "./chatList.css"
import AddUser from "./addUser/addUser";

export const ChatList = () => {
  const [addMode,setAddMode] = useState(false)

  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src='./search.png' alt=''/>
          <input type='text' placeholder='Search'/>
        </div>
        <img src={addMode ? "./minus.png" : './plus.png'} alt='' className="add" onClick={()=> setAddMode((prev) => !prev)}/>
      </div>
      <div className="item">
        <img src="./avatar.png" alt=""/>
        <div className="texts">
          <span>Eren </span>
          <p>En son naptık</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt=""/>
        <div className="texts">
          <span>Zeynep</span>
          <p>Hellloooüüü</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt=""/>
        <div className="texts">
          <span>Didem</span>
          <p>Saat kaç diyoruz?</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt=""/>
        <div className="texts">
          <span>Handan</span>
          <p>Neredesin?</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt=""/>
        <div className="texts">
          <span>Özge</span>
          <p>Geldim ben</p>
        </div>
      </div>
       {addMode && <AddUser/>}
    </div>
  );
};

export default ChatList