import { useState } from "react";
import items from "../data"
function Poruci(){
    function prikazi(){
    document.getElementById("prikaz").innerHTML=`
        <h4>Ime: ${ime}</h4>
        <h4>Prezime: ${prezime}</h4>
        <h4>E-mail: ${mail}</h4>
        <h4>Telefon: ${telefon}</h4>
        <h4>Izabrani sat: ${sat}</h4>
        `;   
    
    }
    const [ime,setIme]=useState("");
    const[prezime,setPrezime]=useState("");
    const[mail,setMail]=useState("");
    const[telefon,setTelefon]=useState("");
    const[sat,setSat]=useState("");
    return(
        <div className="center">
            <h3>Naručite online</h3>
            <div id='poruci'>
                <form >
                    <input type="text" placeholder='Ime' className='polje' onInput={(e) => { setIme(e.target.value);}} />
                    <input type="text" placeholder='Prezime' className='polje' onInput={(e) => { setPrezime(e.target.value);}} />
                    <input type="email" placeholder='Mail' className='polje' onInput={(e) => { setMail(e.target.value); }} />
                    <input type="text" placeholder='Broj telefona' className='polje' onInput={(e) => { setTelefon(e.target.value);}} />
                    <select name="sat" className='polje' onChange={(e) => { setSat(e.target.value) }} >
                        {items.map((item) => (
                            <option key={item.id} >{item.title}</option>
                        ))}

                    </select>
                    <button onClick={(e) => { e.preventDefault(); prikazi() }} className='dugme'>Poruči</button>
                </form>
            </div>
            <h6>Podaci o naručenom:</h6>
            <div id="prikaz">
            </div>
        </div>
        
       
    );
}
export default Poruci;