import React from 'react';


class LeftButtons extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {hover: false, hoverd: false};
        this.hadleClickDos = this.hadleClickDos.bind(this);
        this.hadleClick = this.hadleClick.bind(this);
    }
    hadleClick(){
        this.setState(prevState => ({
            hover : !prevState.hover
        }));
    }
    hadleClickDos(){
        this.setState(prevState => ({
            hoverd : !prevState.hoverd
        }));
    }
    render(){
        const styleLeftButtons={
            left_buttons :{
                width: '17vw',
                height: '100%',
                display: 'flex',
                flexDirection:'row',
                justifyContent:'flex-end',
                alignItems:'flex-end',
                backgroundColor:'white',
            },
            boton_inicio: {
                width:"6vw",
                height:"7vh",
                border:0,
                borderRadius:"25px",
                fontFamily:"sans-serif",
                fontWeight: "bolder",
                fontSize:"17px",
                backgroundColor:'white',
            },
            boton_hoy: {
                width:"6vw",
                height:"7vh",
                border:0,
                borderRadius:"25px",
                fontFamily:"sans-serif",
                fontWeight: "bolder",
                fontSize:"16px",
                backgroundColor:'white',
            },
        };
        if(this.state.hover){
            styleLeftButtons.boton_inicio = {
                ...styleLeftButtons.boton_inicio,
                backgroundColor:'black',
                color:'white',
                cursor : 'pointer',
                margin :'0px',
            }
        }
        else{
            styleLeftButtons.boton_inicio.backgroundColor = 'white'
        }
        if(this.state.hoverd){
            styleLeftButtons.boton_hoy = {
                ...styleLeftButtons.boton_hoy,
                backgroundColor:'black',
                color:'white',
                cursor : 'pointer',
                margin :'0px',
            }
        }
        else{
            styleLeftButtons.boton_hoy.backgroundColor = 'white'
        }
        
        return(
            <div style={styleLeftButtons.left_buttons}>
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="pinterest" class="svg-inline--fa fa-pinterest fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="400 400 60 300" ><path fill="red" d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path></svg>
            <button id="inicio" style={styleLeftButtons.boton_inicio} onMouseLeave = {this.hadleClick}  onMouseEnter = {this.hadleClick}>
                Inicio</button>
            <button style={styleLeftButtons.boton_hoy} onMouseLeave = {this.hadleClickDos}  onMouseEnter = {this.hadleClickDos}>Hoy</button>
        </div>
        );
    }
}

export default LeftButtons;

