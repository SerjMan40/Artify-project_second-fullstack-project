import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../../../redux/store'
import {logToggleForm, toggleAuthLog} from '../../../../../redux/slices/userSlices'

const User = () => {
  const isLog = useSelector((state: RootState) => state.user.isLogin)

  const dispatch = useDispatch()

  return (
    <div className='navbar__User'>
      <div className='navbar__icon-user'></div>
      <div>User</div>

      {isLog ? (
        <div className='navbar__User-container-menu'>
          <button>Profile</button>
          <button>Card</button>
          <button>ToDo</button>
          <button>Comment</button>
          <button onClick={() => dispatch(toggleAuthLog())}>Logout</button>
        </div>
      ) : (
        <div className='navbar__User-container-menu'>
          {!isLog && <button onClick={() => dispatch(logToggleForm(true))}>Login</button>}
        </div>
      )}
    </div>
  )
}

export default User
