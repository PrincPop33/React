function Satovi({items}){
  
  return <div className='section-center'>
    {items.map((item)=>{
      return <div key={item.id} className="product-item">
        <div className="photo-center">
          <img src={item.img} alt={item.title} className="photo"/>
        </div>
        <div className='item-info'>
          <header>
            <h4>{item.title}</h4>
          </header>
          <p className='item-text'>{item.desc}</p>
          <br></br>
          <div className="bottom">
             <h4 className='price'>{item.price} RSD</h4>
          </div>
         
        </div>  
        
      </div> 
    
    })}
    
  </div>
};

export default Satovi;
