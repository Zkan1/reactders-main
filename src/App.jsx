import "./App.css";
import React from 'react'
function Arama({aramaMetni,onSearch}){
 
  function handleChange(event){
   // setAramaMetni(event.target.value);
    onSearch(event);
  }
  return(
    <div>
      <label htmlFor="arama">Ara: </label>
      <input id="arama" type="text" onChange={handleChange} 
       value={aramaMetni} /> 
     
    </div>
   
  )
}
function Yazi({id,url,baslik,yazar,yorum_sayisi,puan}){
  return(
    <li key={id}>
              <span>
                <a href={url}>{baslik}</a>, 
              </span>
              <span><b>Yazar:</b> {yazar}, </span>
              <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
              <span><b>Puan:</b> {puan}</span>
            </li>
  )
}
function Liste(props){
  return(
    <ul>
        {props.yazilar.map(function (yazi) {
          return (
            <Yazi key={yazi.id} {...yazi}/>
          );
        })}{" "}
      </ul>
  )
}
function App() {
  const [aramaMetni,setAramaMetni]=React.useState(localStorage.getItem("aranan") || ("React"));
  //"" bu ifade arama yerinin başta boş oldğunu gösteriyor


  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
    {
      baslik: "JAVA",
      url: "www.google.com.tr",
      yazar: "Engin Demiroğ",
      yorum_sayisi: 424,
      puan: 5,
      id: 2,
    },
    {
      baslik: "Bilgisayar Kavramlari",
      url: "https://www.youtube.com/@Sadievrenseker_BK",
      yazar: "Şadi Evren Şeker",
      yorum_sayisi: 50,
      puan: 5,
      id: 3
    }

  ];



  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni);
  }, [aramaMetni]); 

const arananYazilar=yaziListesi.filter(
  (item) =>
      item.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      item.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
  
);
 

  //ilk aşama | callback handler metodu oluşturma
  function handleSearch(event){
    console.log(event.target.value);
    setAramaMetni(event.target.value);
  }
  return (
    <>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch}/>
      <hr />
      <p>
        <strong>{aramaMetni} aranıyor...</strong>
      </p>
      <Liste yazilar={arananYazilar}/>
      
    </>
  );
}
export default App;