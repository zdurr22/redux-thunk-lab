// write your CatList component here
import React from "react";

class CatList extends React.Component {
    showCats = () => {
        return this.props.catPics.map( cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
    }


    render() {
        return(
            <div>
                {this.showCats()}
            </div>
        )
    }
}

export default CatList