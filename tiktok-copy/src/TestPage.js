import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Login from "./components/LoginRegister/Login";

export default function TestPage() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className='bunsNoLog'>
                <div className='uploadBtn' onClick={handleClickOpen}>Upload</div>
                <button className='logInBtn' onClick={handleClickOpen}>Log in</button>
                <i className='dotsNav'>...</i>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {/*<DialogTitle id="alert-dialog-title">*/}
                {/*    {"Use Google's location service?"}*/}
                {/*</DialogTitle>*/}
                <DialogContent>
                    <Login/>
                    {/*<DialogContentText id="alert-dialog-description">*/}
                    {/*    Let Google help apps determine location. This means sending anonymous*/}
                    {/*    location data to Google, even when no apps are running.*/}
                    {/*</DialogContentText>*/}
                </DialogContent>
                <DialogActions>
                    {/*<Button onClick={handleClose}>Disagree</Button>*/}
                    {/*<Button onClick={handleClose} autoFocus>*/}
                    {/*    Agree*/}
                    {/*</Button>*/}
                </DialogActions>
            </Dialog>
        </div>
    );
}




// export default function TestPage(){
//
//     const displayLogin = () =>{
//         console.log('display')
//
//     }
//
//     return(
//         <>
//             <div id={'blackout'} style={{visibility:'none'}}>
//             </div>
//             <div><h1>testing div here</h1>
//                 <button onClick={displayLogin}>Click me</button>
//                 <div id={'placeholderId'}></div>
//             </div>
//         </>
//     )
// }