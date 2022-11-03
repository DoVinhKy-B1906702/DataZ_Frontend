import {makeStyles} from '@mui/styles'


export default makeStyles({
    formControl:{
        display:'flex',
        flexDirection:'column',
        maxWidth: '85vh',
        marginTop:'50px',
        padding: '20px 20px 80px 20px',
        position:'relative',
        background:'#fff',
        overFlowY: 'auto !important',
        maxHeight: '80%'
    },
    colorBg: {
        background:'white'
    },
    buttonAdd : {
        width: '60px',
        height: '60px',
        position: 'absolute !important',
        right:'0px',
        bottom:'0px',
        borderRadius: '0px !important',
        background: '#f368e0 !important'
    },
    marginBot: {
        paddingBottom:'10px !important'
    },
    inputFormData: {
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '2px solid #f368e0',
        marginTop: '12px'
    }
  });