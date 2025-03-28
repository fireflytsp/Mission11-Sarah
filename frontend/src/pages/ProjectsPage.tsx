// import { useState } from "react";
// import WelcomeBand from "../components/WelcomeBand";
// import CategoryFilter from "../components/CategoryFilter";
// import BookList from "../components/BookList";
// import CartSummary from "../components/CartSummary";

// function ProjectsPage() {
//     const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

//     return (
//         <div className='container mt-4'>
//             <CartSummary />
//                 <WelcomeBand />
//             <div className="row">
//                 <div className="col-md-3">
//                 <CategoryFilter 
//                 selectedCategories = {selectedCategories} 
//                 setSelectedCategories={setSelectedCategories}/>
//             </div>
//             <div className='col-md-9'>
//                     <BookList selectedCategories={selectedCategories}/>
//             </div>
//             </div>
//             </div>
//     );
// }

// export default ProjectsPage;


import { useState } from "react";
import WelcomeBand from "../components/WelcomeBand";
import CategoryFilter from "../components/CategoryFilter";
import BookList from "../components/BookList";
import CartSummary from "../components/CartSummary";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import  "../components/CategoryFilter.css";

function ProjectsPage() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    return (
        <div className="container mt-4">
            <CartSummary />
            <WelcomeBand />
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://blogs.baylor.edu/gwc/files/2020/02/deep-work-image-1.jpg" className="d-block my-carousel-img" alt="Book 1" />
        
                    </div>
                    <div className="carousel-item">
                        <img src="https://covers.shakespeareandcompany.com/97816268/9781626864641.jpg" className="d-block my-carousel-img" alt="Book 2" />
                
                    </div>
                    <div className="carousel-item">
                        <img src="https://upload.wikimedia.org/wikipedia/en/4/4c/Big-greattrainrobbery.jpg" className="d-block my-carousel-img" alt="Book 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <CategoryFilter 
                        selectedCategories={selectedCategories} 
                        setSelectedCategories={setSelectedCategories} 
                    />
                </div>
                <div className="col-md-9">
                    <BookList selectedCategories={selectedCategories} />
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;
