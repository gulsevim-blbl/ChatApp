import  Chat  from "./components/chat/Chat"
import  Detail  from "./components/detail/Detail"
import List  from "./components/list/List"
import LoginPage from "./components/login/LoginPage";
import Notification from "./components/notification/Notification";


 const App = () => {
  const user = false;

  return (
    <div className='container'>
          {
            user ? (
              <>
               <List/>
               <Chat/>
               <Detail/>
              </>
             
            ) :
             (<LoginPage/>)

          }
          <Notification/>
    </div>
  )
}

export default App