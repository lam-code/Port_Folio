import "./Admin.css"

const Admin = () => {
  return (
    <div className="connexion">
      <form className="formlogin">
        <label>Email</label>
        <input type="text" placeholder="Entrez votre email... "/>
        <label>Mot de passe </label>
        <input type="password" placeholder="Entrez votre mdp..." />
        <button className="loginButton">Connexion</button>
      </form>
      
       

    </div>
  )
}

export default Admin