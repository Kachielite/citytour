import React, {useState, useEffect} from 'react';
import './Control.css';
import DetailButton from '../Detail-Component/DetailButton'


const Control = props =>{

    const [showNext, setShowNext] = useState("visible")
    const [showPrevious, setShowPrevious] = useState("visible")
    const [showDetails, setShowDetails] = useState(false)

    const next = () =>{
        
        const nextData = props.index + 1;
        const newCityData = props.data[nextData]
        props.setCityData([...props.cityData,newCityData])
        props.setIndex(nextData)
        setShowDetails(false)
        // if (props.index === 4){ setShowNext("hidden")}
    }

    const previous = () =>{
        const previousData = props.index - 1;
        const newCityData = [props.data[previousData]]
        props.setCityData([...props.cityData,newCityData])
        props.setIndex(previousData)
        setShowDetails(false)
        // if (props.index === 1){ setShowPrevious("hidden")}
    }
    
    const displayDetails= () => {
        if(showDetails === false){ 
            setShowDetails(true)
        } else if (showDetails === true){
            setShowDetails(false)
        }
        }
    

    useEffect(()=>{
        if (props.index === 5){ 
            setShowNext("hidden")
        }else {setShowNext("visible")}

        if (props.index === 0){ 
            setShowPrevious("hidden")
        }else{setShowPrevious("visible")}
    }, [props.index, showNext, showPrevious])
    
    return(
        <div style={{margin: "0 20px"}}>
            <div key={props.index} className="control">
                <i onClick={previous} style={{visibility:`${showPrevious}`}}  class="fas fa-chevron-circle-left fa-3x"/>
                { showDetails && <div className="info">
                <p>{props.cityData[props.index].info}</p>
                </div>}
                <i onClick={next} style={{visibility:`${showNext}`}}  class="fas fa-chevron-circle-right fa-3x"/>
            </div>
            <div className="detail-button-section">
                <DetailButton displayDetails={displayDetails}/>
            </div>
        </div>
    )
}

export default Control;