import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      padding: '4px 24px',
      margin: '10px',
    width:'275px'
      
    },
    avatar: {
      display: 'flex',
      alignItems: 'center',
      justifycontent: 'center'
    }
  }));

const ProviderItem =(props)=>{
    const classes = useStyles();
    console.log("props",props)
    return (
        <>
         <Card className={classes.root}>
           <div className={classes.avatar}>
             <Avatar alt={props.title} src={props.src} />
           </div>
           <div>
             <CardContent className={classes.content}>
               <Typography component="h5" variant="h5">
                 {props.title}
               </Typography>
               <Typography variant="subtitle1" color="textSecondary">
                 {props.subSpecialties.length > 0 ? props.subSpecialties : ' – '}
               </Typography>
             </CardContent>
           </div>
         </Card>
        </>

    )
}
export default ProviderItem;