import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';

//get unique values
const getUnique = (items,value) => {
    return [...new Set(items.map(item =>item[value]))]
}

export default function RoomsFilter({rooms}) {
    const context= useContext(RoomContext);
    //console.log(context);

    const { handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets}=context;
        //get unique typed
        let types = getUnique(rooms,'type');
  
        types = ['all',...types];
        //map to jsx
        types=types.map((item,index)=> {
        return <option value={item} key={index}>{item}</option>
        })

        let people = getUnique(rooms,'capacity');
        people = people.map((item,index)=> {
        return <option key={index} value={item}>{item}</option>
        })
       
        return <section className="filter-container">
            <Title title="SEARCH ROOMS"/>
            <form className="filter-form">
                {/*select type*/}
                <div className="form-group">
                    <label htmlFor="type">ROOM TYPE</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>

                </div>

                {/*end select type*/}


                 {/*select guest type*/}
                 <div className="form-group">
                    <label htmlFor="capacity">GUEST</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {people}
                    </select>

                </div>

                {/*end select guest type*/}

                {/* room price*/}
                <div className="form-group">
                    <label htmlFor="price">
                        ROOM PRICE ${price}
                    </label>
                    <input type="range" name="price" min={minPrice}
                    max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
                </div>

               {/* end of room price*/}


               {/* size*/}
               <div className="form-group">
                   <label htmlFor="size">ROOM SIZE</label>
                   <div className="size-inputs">
                       <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"/>
                       <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"/>
                   </div>
               </div>


               {/* end of size*/}

               {/* extras*/}
               <div className="form-group">
                   <div className="single-extra">
                       <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                       <label htmlFor="breakfast">FREE BREAKFAST</label>
                   </div>
                   <div className="single-extra">
                       <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                       <label htmlFor="pets">PETS ALLOWED</label>
                   </div>
               </div>


               {/*  end of extras*/}
            </form>

        </section>
}
