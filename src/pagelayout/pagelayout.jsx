import React from "react";
import Footer from "../components/Footer";
import JumpToTopButton from '../components/top.jsx'
const PageLayout = ({children}) =>{

    return(
        <div>
    
            {children}
            <JumpToTopButton />
            
                        <Footer />
        </div>
    )
}

export default PageLayout;