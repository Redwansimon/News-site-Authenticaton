import { Link, useLoaderData } from "react-router-dom"
import Header from "../components/Header"
import RightNav from "../components/layout-component/RightNav"
import Navbar from "../components/Navbar"


const NewsDetauils = () => {
    const data = useLoaderData();
    const news = data?.data?.[0];
 
  return (
    <div>
        <header>
            <Header></Header>
        </header>
        <nav className="w-11/12 mx-auto pt-6">
            <Navbar></Navbar>
        </nav>
        <main className="w-11/12 mx-auto pt-6 grid grid-cols-12 gap-4">
            <section className="col-span-9 space-y-5">
                <h2 className="font-semibold">Dragon News</h2>
                <img src={news.image_url} alt="" />
                <h2 className="text-2xl font-bold">title : {news.title}</h2>
                <p>{news.details}</p>
            </section>
            <aside className="col-span-3">
                <RightNav></RightNav>
            </aside>
            
        </main>
        <p className="btn ml-11 pt-5 bg-red-400"><Link to={`/category/${news?.category_id}`} >All news in this Category</Link></p>
       
    </div>
  )
}

export default NewsDetauils
