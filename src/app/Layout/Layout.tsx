import {Outlet} from "react-router";
import Aside from "../../widgets/Aside";
import ss from './Layout.module.scss'

export const Layout = () => {
  return (
    <div className={ss.layout}>
      <Aside/>
      <Outlet/>
    </div>
  )
}