import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15%',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& .MuiPaper-root': {
      backgroundColor: 'rgb(240 43 78);',
    },
  },
  grid: {
    '& .MuiGrid-container': {
      position: 'absolute',
      top: '30%',
      left: '25%',
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10% 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  addPatient: {
    margin: 'auto',
    marginTop: '5%',
    width: '20%',
    display: 'block'
  },
  link: {
    textDecoration: 'auto',
    display: 'contents',
  }
}));
