
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../header/style.css';


function Fetch() {
  
    const [DataInfo , setData]=useState([])
    const [serch , setSetch]= useState('');
    const[limit ,setLimit]=useState(8);
    const[loiding, setLoiding]=useState(null);

    const ShowMoreItems=()=>{
        setLimit(preValue=>preValue+8)
    }

    const getProductData=async()=>{
        setLoiding(true)
        try{
            const data=await axios.get("https://restcountries.com/v3.1/all")
            console.log(data.data);
            setLoiding(false)
            setData(data.data)
            

        }catch(e){
            setLoiding(false)
            console.log(e)
        }
    }

    useEffect(()=>{
        setLoiding(true)
        getProductData()
    },[])

    const handel=(e)=>{
        setSetch(e.target.value)
    }


    // const DTB=DataInfo.map((k)=>k.continents)
    
   
   


    // const unii = DataInfo.filter(function(elem, pos) {
    //         return DataInfo.indexOf(elem) === pos;
    //         })

            // const uniq=(a)=>{
            //     return a.sort().filter(function(item, pos, ary) {
            //         return !pos || item !== ary[pos-1];
            //     });
            // }
            // const unio=uniq(DTB)

            // const uni = unio.filter((val, id) => {
            //         return unio.indexOf(val) === id;
            //      })

            
    
  return (
    
    <div className='container'>
       

         <div className='text-center'>
        {loiding && <div className="spinner-border text-primary" role="status">
        <span className="sr-only"> Loading...</span>
        </div>}
       
    </div>

        <section className="d-flex justify-content-center" style={{marginTop:'50px'}}>
              
        <h1 id='parag'>Find a country-<span>ابحث عن دولة </span></h1>
       
        </section>
        
       <div className="inpu mt-2">
        <input type="text" placeholder='search'  onChange={handel}/>
        </div>

        <div className="row">

        <select className="form-select mb-5" style={{fontSize:'20px',fontWeight:'bolder', color:'#ff8000'}} aria-label="Default select example" onChange={handel}>
        <option defaultValue value=''>Choose a continent</option>
        {/* {
                uni.map((c ,i)=>
                    <option key={i} value={c}>{c}</option>
            )
            
            } */}
            <option value="Africa">Africa</option>
            <option value="Antarctica">Antarctica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="EuropeAsia">EuropeAsia</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
            <option value="South America">South America</option>

      
        </select>

        

        </div>
        <div className='row'>

        { 
        
            DataInfo.filter((e)=>{
            
                
                if(serch ===""){
                        return e;
                    }
                else if(e.name.common.toLowerCase().includes(serch.toLowerCase())){
                    return e;
                    }
                else if(e.continents.includes(serch)){
                    return e;
                }
               
                return false;
            }
            
                
            )
            .slice(0, limit).map((e,i)=>{
                return(
                   
                    <div key={i} className="col-md-3 mt-4">
                    <div className="card" style={{height:'32rem',background:'#ffff'}} >
                            <img src={e.flags.png} alt="" className="card-img-top" style={{height:'160px' ,borderBottom:'2px solid black'}} />
                            <div className="card-body">
                            <h6 className="card-text" style={{textAlign:'center', color:'#9900ff',fontSize: "25px", fontWeight: "900",height:'4rem' ,borderBottom:'2px solid black'}}>{e.name.common}</h6>
                            <div className="row" style={{height:'15rem'}}>
                            <div className="col-6 mb-5">  
                            <label>capital:</label>
                            </div>
                            
                            <div className="col-6 mb-5"><p className="card-text">{e.capital}</p>
                            </div>
                            
                            <div className="col-6 mb-5">
                            <label>continent: </label>
                            </div>
                            <div className="col-6 ">
                            <p className="card-text">{e.continents}</p>
                            </div>
                            
                            <a href={e.maps.googleMaps} target='blanc'><button type="button" className="btn btn-primary">open on google maps <i className="fa-regular fa-map"></i></button></a>
                            
                            </div>
                            </div>
                    </div>
                    </div>
                    
                

                );
            })
        }
        
        <div className="showMore">
        <button id='ShowMore' onClick={ShowMoreItems}>Show More-المزيد</button>
        </div>

        </div>

        
    </div>
  )
}


export default Fetch