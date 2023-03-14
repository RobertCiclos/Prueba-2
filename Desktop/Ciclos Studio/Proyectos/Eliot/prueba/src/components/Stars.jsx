import React, { useState } from 'react'
import '../App.css';


const Stars = (props) => {

    const handleChangeEnter = (letter) => {
        props.handleChange("stars")
    }

    return (
        <svg
            width="1334"
            height="1264"
            viewBox="0 0 1334 1264"
            fill="none"
            style={{
                opacity: !props.hover.stars ? 1 : 0.05,
                transition: "opacity 0.5s ease-out",
                cursor: props.hover.stars ? "pointer" : "",
            }}
            xmlns="http://www.w3.org/2000/svg">
            <g
                clip-path="url(#clip0_689_1650)"
                onMouseEnter={handleChangeEnter}
            >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1253.26 576.43C1258.46 629.83 1268.06 663.73 1307.86 670.93H1253.26V576.43Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1253.26 576.43C1252.36 624.23 1238.66 669.23 1198.76 670.93H1253.26V576.43Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1253.26 765.53C1251.66 709.93 1240.36 679.03 1198.76 671.03H1253.26V765.53Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1253.26 765.53C1255.16 716.53 1271.06 672.43 1307.86 671.03H1253.26V765.53Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M71.0601 147.43C74.9601 187.13 82.0601 212.33 111.56 217.73H71.0601V147.43Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M71.0601 147.43C70.3601 183.03 60.1601 216.43 30.5601 217.73H71.0601V147.43Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M71.0601 288.03C69.9601 246.73 61.4601 223.73 30.5601 217.73H71.0601V288.03Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M71.0601 288.03C72.4601 251.63 84.2601 218.83 111.56 217.73H71.0601V288.03Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M163.36 34.03C169.06 91.73 179.36 128.23 222.26 136.13H163.36V34.03Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M163.36 34.03C162.36 85.63 147.56 134.23 104.46 136.13H163.36V34.03Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M163.36 238.23C161.66 178.23 149.36 144.83 104.46 136.13H163.36V238.23Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M163.36 238.23C165.46 185.33 182.56 137.73 222.26 136.13H163.36V238.23Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1295.76 700.23C1299.36 736.93 1305.96 760.13 1333.26 765.23H1295.76V700.23Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1295.76 700.23C1295.16 733.13 1285.66 764.03 1258.26 765.23H1295.76V700.23Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1295.76 830.23C1294.66 792.03 1286.86 770.83 1258.26 765.23H1295.76V830.23Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1295.76 830.23C1297.06 796.53 1307.96 766.33 1333.26 765.23H1295.76V830.23Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M62.6599 967.93C66.7599 1009.83 74.2599 1036.43 105.46 1042.13H62.6599V967.93Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M62.6599 967.93C61.9599 1005.43 51.1599 1040.73 19.8599 1042.13H62.6599V967.93Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M62.6599 1116.33C61.3599 1072.73 52.4599 1048.43 19.8599 1042.13H62.6599V1116.33Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M62.6599 1116.33C64.1599 1077.93 76.6599 1043.33 105.46 1042.13H62.6599V1116.33Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M168.56 1049.53C174.46 1110.03 185.36 1148.33 230.36 1156.63H168.56V1049.53Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M168.56 1049.53C167.56 1103.73 151.96 1154.63 106.76 1156.63H168.56V1049.53Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M168.56 1263.73C166.76 1200.83 153.96 1165.83 106.76 1156.63H168.56V1263.73Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M168.56 1263.73C170.76 1208.33 188.76 1158.33 230.36 1156.63H168.56V1263.73Z" fill="black" />
            </g>
            <defs>
                <clipPath id="clip0_689_1650">
                    <rect width="1333.26" height="1263.73" fill="white" />
                </clipPath>
                <filter id="shadow">
                    <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#FFCC00" floodOpacity="0.25" />
                    <feDropShadow dx="-3" dy="-3" stdDeviation="5" floodColor="#FFCC00" floodOpacity="0.25" />
                </filter>
            </defs>
        </svg>
    )
}

export default Stars