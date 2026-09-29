import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/*Dein Code unter dieser Zeile  */}
      <div className="titel">
        <h1>Fachhochschule Nordwestschweiz</h1>
      </div>
      <div className = "container">
      
        <div className= "text">Die <strong>Fachhochschule Nordwestschweiz</strong> (FHNW) 
          ist eine <a href= "https://de.wikipedia.org/wiki/Fachhochschule" target="_blank" >Fachhochschule</a> 
          &nbsp;in der <strong>Schweiz</strong> und ist in der Lehre, Forschung, Weiterbildung
          und Dienstleistung tätig. Sie ist eine interkantonale
          öffentlich-rechtliche Anstalt mit eigener 
          Rechtspersönlichkeit.[4] Träger sind die Kantone Aargau, 
          Basel-Landschaft, Basel-Stadt und Solothurn. Die FHNW 
          umfasst folgende <strong>zehn</strong> Hochschulen, die auf die Standorte 
          Basel, Brugg-Windisch, Muttenz und Olten konzentriert sind:
           Angewandte Psychologie, Architektur, Bau und Geomatik, 
           Gestaltung und Kunst, Informatik, Life Sciences, Musik, 
           Lehrerinnen- und Lehrerbildung, Soziale Arbeit, Technik 
           und Umwelt sowie Wirtschaft. Der Hauptsitz ist in
            Windisch.</div>
        <div className = "fakten"> 
          <div className = "titelBox"> 
            <h2>Fachhochschule Nordwestschweiz</h2>
            </div>
          <div className ="bild">
            <img 
            width="200"
            src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/FHNW_Logo.svg/3840px-FHNW_Logo.svg.png?utm_source=de.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"/>
          </div>
          <div>
            <table>
              <tbody>
                <tr>
                  <td><strong>Gründung</strong></td>
                  <td>1. Januar 2006</td>
                </tr>
                <tr>
                  <td><strong>Trägerschaft</strong></td>
                  <td>Kantone Aargau, Basel-Landschaft, Basel-Stadt, Solothurn</td>
                </tr>
                <tr>
                  <td><strong>Ort</strong></td>
                  <td>Windisch AG, Muttenz, Olten, Basel</td>
                </tr>
              </tbody>
            </table>
          </div>  

        </div>
      </div>













        {/*Dein Code über dieser Zeile  */}
    </div>
  );
}
