import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import todoRouter from "./todoRouter";

const Loading = <div>로딩중.......</div>


const Main = lazy(  () => import("../pages/MainPage")  )
const About = lazy(   () => import("../pages/AboutPage"))
const TodoIndex = lazy(  () => import("../pages/todo/IndexPage"))
const TotoList = lazy(  () => import("../pages/todo/ListPage"))


const root = createBrowserRouter(  [
{
  path:"",
  element:<Suspense fallback={Loading}><Main></Main></Suspense>
},
{
  path:"about",
  element:<Suspense fallback={Loading}><About></About></Suspense>
},
{
  path:"todo",
  element:<Suspense fallback={Loading}><TodoIndex></TodoIndex></Suspense> ,
  children: todoRouter()
}
])

export default root;