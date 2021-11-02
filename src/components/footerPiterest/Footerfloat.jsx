import React from 'react';


class Footerfloat extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {hover_home: false};
        this.state = {hover_msn: false};
        this.state = {hover_user: false};
        this.hadleClick = this.hadleClick.bind(this);
        this.hadleClickMessage = this.hadleClickMessage.bind(this);
        this.hadleClickUser = this.hadleClickUser.bind(this);
    }
    hadleClick(){
        this.setState(prevState => ({
            hover_home : !prevState.hover_home
        }));
    }
    hadleClickMessage(){
        this.setState(prevState => ({
            hover_msn : !prevState.hover_msn
        }));
    }
    hadleClickUser(){
        this.setState(prevState => ({
            hover_arrow : !prevState.hover_arrow
        }));
    }
    render(){
        const styleFooter = {
            footer_float:{
                position:"fixed",
                display:"flex",
                justifyContent:"center",
                bottom:0,
                left:0,
                rigth:0,
                width:"100%",
                height: '10vh',
                backgroundColor:"trasparent",
            },
            menu:{
                display:'flex',
                flexFlow:'row nowrap',
                justifyContent:'space-around',
                alignItems:'center',
                width:'70%',
                height:'60px',
                borderRadius:'50px',
                backgroundColor:'white',
            },
            botones:{
                width:"12vw",
                height:"6vh",
                display:"flex",
                alignItems:'center',
                borderRadius:'50%',
                border:"none",
                backgroundColor:'white',
            },
            espacio_notificacion:{
                display: 'flex',
                justifyContent:'center',
                alignItems:'center',
            },
            numero_notificacion:{
                position: 'absolute',
                marginLeft:"20px",
                marginBottom:"25px",
                padding: '1px 6px',
                borderRadius: '50%',
                background: 'red',
                color: 'white',
                fontSize:'12px',
            },
        }
        
        return (
            <div style={styleFooter.footer_float}>
                <div style={styleFooter.menu}>
                    <button style={styleFooter.botones} >
                        <svg aria-hidden="true" width="30" height="30" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="20 180 250 150"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>                    
                    </button>
                    <button style={styleFooter.botones}>
                        <svg aria-hidden="true" width="30" height="30" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="-50 150 250 150"><path  fill="grey" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                    </button>
                    <button style={styleFooter.botones} >
                        <div style={styleFooter.espacio_notificacion}>
                            <svg aria-hidden="true" focusable="false"  width="30" height="30" data-prefix="fas" data-icon="comment-dots" class="svg-inline--fa fa-comment-dots fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="-20 150 250 150"><path  fill="grey" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>                        
                            <span style={styleFooter.numero_notificacion}>65</span>
                        </div>
                    </button>
                    <button style={styleFooter.botones}>
                        <svg aria-hidden="true" width="30" height="30" focusable="false" data-prefix="fas" data-icon="user" class="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="-100 150 250 150"><path fill="grey" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>                
                    </button>
    
                </div>
            </div>
        );
    }
}

export default Footerfloat;
