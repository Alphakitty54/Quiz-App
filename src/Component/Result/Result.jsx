import "./Result.scss";
import { useState, useEffect } from "react";

const Result = ({ totalquestion, result, onTryAgain}) => {

    const [name,setname]= useState("");
    const [highscores,sethighscores] =useState([]);
    const [showscores,setshowscores] = useState(false);

    useEffect(() => {
    sethighscores(JSON.parse(localStorage.getItem('highscores')) || []);
    }, []);

  
    const handleSave = () => {

      const score = {
        name,
        score: result.score
      };

      const newhighscores = [...highscores, score].sort((a,b)=> b.score - a.score);

      sethighscores(newhighscores);
      setshowscores(true);
      localStorage.setItem("highscores", JSON.stringify(newhighscores));
      
    };
    const handleTryAgain = () => {
     setshowscores(false);
      sethighscores([]);
      onTryAgain();
    }
  return( 
         <div className="result">
          <h3>Result</h3>
          <p>
            Total Question: <span>{totalquestion}</span>
          </p>
          <p>
            Total Score: <span>{result.score}</span>
          </p>
          <p>
            Correct Answer: <span>{result.correctanswer}</span>
          </p>
          <p>
            Wrong Answer: <span>{result.wronganswer}</span>
          </p>
          <button onClick={handleTryAgain}>Try Again</button>
           {!showscores ?(
           <>
           <h3>
           Enter your name below <br/> to save your score! 
           </h3>
           <input
             placeholder="Your Name" 
             value= {name} 
             onChange={(evt) =>setname(evt.target.value)}
             />
            <div className="save-button-container">
             <button onClick={handleSave}>Save</button>
            </div>
           </>
         )  : (
           <>
             <table>
             <thead>
               <tr>
               <th>Ranking :</th>
               <th>Name :</th>
               <th>Score :</th>
               </tr>
               </thead>
               <tbody>
                 {highscores.map((highscores,i) => {
                  return (
                  <tr key= { '${highscores.scores}${highscores.name}${i}'}>
                 <td>{i+1}</td>
                 <td>{highscores.name}</td>
                <td> {highscores.score}</td>
                </tr>
                  );
                 })}
                
               </tbody>
             </table>
           </>
          )}
           
        </div>
  );
};
export default Result;
  