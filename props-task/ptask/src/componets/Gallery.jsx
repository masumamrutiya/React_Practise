import Profile from './Profile';


function Gallery() {
  return (
<>
    
<h1 className='bg-dark text-white text-center'>Notable Scientists</h1>
<div className="row w-100 my-5 py-5">

  <div className="col-6">
    <Profile name="Maria Skłodowska-Curie" 
             image={'szV5sdG'}
             profession="   physicist and chemist" 
             Award=" 4   (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
             Discoverd="polonium (chemical element)" />
    
    </div>


  <div className="col-6"> 
    <Profile name="Katsuko Saruhashi" 
             image={'YfeOqp2'}
             profession="   geochemist" 
             Award=" 2   (Miyake Prize for geochemistry, Tanaka Prize)"
             Discoverd="a method for measuring carbon dioxide in seawater"/>
    </div>
     
  


  </div>
  
  

</>
  );
}


export default Gallery;