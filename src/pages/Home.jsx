import { useState } from "react";
import { Outlet } from "react-router-dom"
import Header from './../components/Header';
import ExploreMenu from './../components/ExploreMenu';
import FoodDisplay from "../components/FoodDisplay";


function Home() {
    const [category, setCategory] = useState('All')
    return (
        <div>
            <Outlet />
            <Header  />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
        </div>
    )
}

export default Home