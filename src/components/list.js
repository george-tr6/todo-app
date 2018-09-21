import React from 'react';
import Item from './item';



const List = (props)=>{
        const listElements = props.data.map((item, index) => {
            return <Item key={item._id} item={item} index={index} delete={()=> props.delete(item._id)}/>
        });

        return(
                <ul className="collection">
                <div className="col s8">
                {listElements}
                </div>

                </ul>
        );
    }

export default List;