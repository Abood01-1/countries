import React from "react"
import "./Details.css"


export default function Details(props){

    let borderCountriesElement

    if(props.getDetails.borders){
        borderCountriesElement = props.getDetails.borders.map(ele => <span id={props.theme} className="borders">{ele}</span>)
    }else{
        borderCountriesElement = <span>none</span>
    }
    let continents = props.getDetails.continents.map(ele => <span>{ele}</span>)
    return(
        <main className="details-main-content" id={props.theme}>
            <button onClick={props.back} id={props.theme}>back</button>
            <div className="flex-countrie">
                <img src={props.getDetails.flags.png} alt="icon" />
                <div className="flex-header-main">
                    <div className="head-countrie"><h1>{props.getDetails.name.common}</h1></div>
                    <div className="main-details">
                        <div className="details1">
                            <p>
                                continents: {continents}
                            </p>
                            <p>
                                Population: <span>{props.getDetails.population}</span>
                            </p>
                            <p>
                                Region: <span>{props.getDetails.region}</span>
                            </p>
                            <p>
                                SubRegion: <span>{props.getDetails.subregion}</span>
                            </p>
                            <p>
                                SubRegion: <span>{props.getDetails.capital}</span>
                            </p>
                        </div>
                        <div className="details2">
                            <p>
                                Top Level Domain: <span>{props.getDetails.tld[0]}</span>
                            </p>
                            <p>
                                Google Map: <a href={props.getDetails.maps.googleMaps} id={props.theme} target="_blank">Visit Here</a>
                            </p>
                            <p>
                                Time Zone: <span>{props.getDetails.timezones[0]}</span>
                            </p>
                        </div>
                    </div>
                    <div className="border-countreis">
                        Borders : {borderCountriesElement}
                    </div>
                </div>
            </div>
        </main>
    )
}