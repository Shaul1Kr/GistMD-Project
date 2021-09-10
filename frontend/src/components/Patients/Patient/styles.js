import { makeStyles } from "@material-ui/core/styles";

// export default makeStyles({
//   media: {
//     height: 0,
//     paddingTop: '56.25%',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     backgroundBlendMode: 'darken',
//   },
//   border: {
//     border: 'solid',
//   },
//   fullHeightCard: {
//     height: '100%',
//   },
//   card: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     borderRadius: '15px',
//     height: '100%',
//     position: 'relative',
//   },
//   overlay: {
//     position: 'absolute',
//     top: '20px',
//     left: '20px',
//     color: 'white',
//   },
//   overlay2: {
//     position: 'absolute',
//     top: '20px',
//     right: '20px',
//     color: 'white',
//   },
//   grid: {
//     display: 'flex',
//   },
//   details: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     margin: '20px',
//   },
//   title: {
//     padding: '0 16px',
//   },
//   cardActions: {
//     padding: '0 16px 8px 16px',
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
// });

export default makeStyles((theme) => ({
  text: {
    margin: theme.spacing(0, 0, 0.5),
    //color: theme.palette.secondary.contrastText,
  },
  avatar: {
    verticalAlign: "middle",
    marginRight: theme.spacing(0.5),
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: theme.spacing(2, 2, 0),
  },
  card: {
    borderRadius: 15,
    maxWidth: "300px",
    minWidth: "270px",
    height: "auto",
    backgroundColor: theme.palette.background.card,
  },
  cardContent: {
    padding: theme.spacing(2, 0, 0, 0),
  },
  cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      },
}));