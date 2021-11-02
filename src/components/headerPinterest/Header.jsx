import React from 'react';
import LeftButtons from '../headerPinterest/HeaderComponents/LeftButtons';
import RigthButtons from '../headerPinterest/HeaderComponents/RigthButtons';
import SearchBar from '../headerPinterest/HeaderComponents/SearchBar';
import Media from 'react-media';

const Header = () => {
    return (
        <div>
           <Media query="(max-width: 375px)">
            {(matches)=>{
                return matches ? HeaderMobile() : HeaderDesktop();
            }}
        </Media>
        </div>
    );
};

const HeaderDesktop = () => {
    return (
        <div style={styleHeader.header_desktop}>
            <LeftButtons/>
            <SearchBar/>
            <RigthButtons/>
        </div>
    );
};

const HeaderMobile = () =>{
    return (
        <div style={styleHeader.header_mobile}>
            <button style={styleHeader.botones_header_mobile}>Para ti</button>
            <button style={styleHeader.botones_header_mobile}>Hoy</button>
            <button style={styleHeader.botones_header_mobile}>Illustration...</button>
            <button style={styleHeader.botones_header_mobile}>Recestas de cocina</button>
            <button style={styleHeader.botones_header_mobile}>Diseños</button>
            <button style={styleHeader.botones_header_mobile}>Moda</button>
            
        </div>
    );
}

const styleHeader = {
    header_desktop:{
        width: '98vw',
        height: '9vh',
        margin: 0,
        padding:0,
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor:'white',
    },
    header_mobile: {
        width: '100vw',
        height: '8vh',
        display:'flex',
        flexFlow:'row ',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'white',
        overflow:"scroll",
    },
    botones_header_mobile:{
        width:"auto",
        height:"40px",
        margin:"0 10px 0 10px",
        whiteSpace : "nowrap",
        fontFamily:"sans-serif",
        fontWeight: "bolder",
        border:0,
        fontSize:"14px",
        display:'flex',
        alignItems:'center',
        backgroundColor:"white"
    },
};

export default Header;