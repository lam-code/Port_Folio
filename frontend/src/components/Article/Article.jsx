import React from 'react'
import "./Article.css"
import image from "../../images/article.jpeg"

const Article = () => {
  return (
    <div className='article'>
      <div className='articleList'>
       <img src={image} alt="img article" className='imagearticle'/> 
       <h3 className='articleTitre'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
         <div className='articleEdit'>
         <i className="articleIcones fa-solid fa-pen-to-square"></i>
         <i className="articleIcones fa-solid fa-trash-can"></i>
         </div>
       </h3>
       <div className='articleInfo'>
         <span className='articleAuteur'>Auteur: Lamia</span>
         <span className='articleDate'>date et heure</span>
         <p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, facere dolores! Ullam velit neque, nostrum doloremque labore fugit repellendus? Assumenda, earum dolores esse deleniti beatae expedita quam. Nulla, vero eveniet.
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, facere dolores! Ullam velit neque, nostrum doloremque labore fugit repellendus? Assumenda, earum dolores esse deleniti beatae expedita quam. Nulla, vero eveniet.
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, facere dolores! Ullam velit neque, nostrum doloremque labore fugit repellendus? Assumenda, earum dolores esse deleniti beatae expedita quam. Nulla, vero eveniet.
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, facere dolores! Ullam velit neque, nostrum doloremque labore fugit repellendus? Assumenda, earum dolores esse deleniti beatae expedita quam. Nulla, vero eveniet.
         </p>
       </div>
       </div>

       <div className='rajouterArticle'>
         <form className='Form'>
           <div className='FormGroupe'>
             <label htmlFor="fichierInput"> 
             <i className='icon fa-solid fa-plus'></i>
              </label>
             <input type="file" id="fichierInput" style={{display:"none"}} />           
             <input type="text" placeholder='Titre' classeName="inputEcrire" autoFocus={true}/>
           </div>
           <div className='formGroup'>
             <textarea placeholder="Entrez votre message" type="text" className='inputEcrireText'></textarea>
           </div>
           <button classeName="btnform">Publier</button>
         </form>
       </div>
    </div>

   
  )
}

export default Article