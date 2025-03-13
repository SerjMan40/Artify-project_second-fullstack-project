import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {RootState} from '../../redux/store'
import { ProtectedRouteProps } from '../../types/interfaces'
// import checkSession from '../../redux/thunks/checkSession'

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, redirectPath = '/' }) => {
  const dispatch = useDispatch()
  const isLogin = useSelector((state: RootState) => state.user.isLogin)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const checkUserSession = async () => {
      // await dispatch(checkSession())
      setLoading(false)
    }
    checkUserSession()
  }, [dispatch])

  useEffect(() => {
    if (!loading && !isLogin) {
      navigate(redirectPath)
    }
  }, [loading, isLogin, navigate, redirectPath])

  if (loading) {
    return (
      <div className="img-background">
        <div className="class-container">
          <div className="loading-overlay">
           
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

export default ProtectedRoute
