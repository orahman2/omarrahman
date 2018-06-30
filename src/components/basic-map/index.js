
import React, { Component } from "react"
import geoJson from "../../assets/mapdata.json"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const myCountries = ["United Arab Emirates", "India", "United Kingdom"];

class BasicMap extends Component {
  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-11,0,0],
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[0,20]} disablePanning>
            <Geographies geography={geoJson}>
              {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                <Geography
                  key={i}
                  geography={geography}
                  projection={projection}
                  onClick={this.handleClick}
                  style={{
                    default: {
                      fill: "#ECEFF1",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    hover: {
                      fill: "#607D8B",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#607D8B",
                      stroke: "#607D8B",
                      strokeWidth: 0.75,
                      outline: "none",
                    },
                  }}
                />
              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }

  handleClick(geography) {
    const countryName = geography.properties.NAME;
    if (BasicMap.isMyCountry(countryName)){
      alert("This country is significant to me!");
      //some logic to launch new window
    }
  }

  handleMouseEnter(){
    
  }

  handleMouseLeave(){
    
  }

  handleFocus(){}

  static isMyCountry(str){
    let found = false;
    for(let i = 0; i < myCountries.length; i++) {
      if (myCountries[i] === str) {
          found = true;
          break;
      }
    }
    return found;
  }
}

export default BasicMap
