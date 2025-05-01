/*Cards=components=create for reuseable code=Cards.js=functional components(we use this)[This component derived from the javascript function]
                                          =classbased component(not use)*/
//Cards is a functional component
function Cards({name,imgPath}){
   //name,imgPath are called props
   return(
    //JSX(javascript xamel) Snnipat
        <div className="cards-layout">
           <p>{name}</p>
           <img src={imgPath} alt="Profile"/>
        </div>
   )
}                                         
export default Cards;
