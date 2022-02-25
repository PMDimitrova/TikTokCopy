import styles from './UploadVideo.module.scss';
import {Alert, Checkbox, FormControl, FormControlLabel, MenuItem, Select, Switch} from "@mui/material";
import Footer from "../Footer/Footer";
import uploadLogo from "../../../images/cloud-icon1.ecf0bf2.svg";
import {useState} from "react";
import {initializeApp} from "firebase/app";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";


export default function UploadVideoComponent() {
    const [videoCaption, setVideoCaption] = useState('');
    const loggedUserData = useSelector(state => state.userData);
    const [urlOfNewUpload, setUrlOfNewUpload] = useState('');
    const [videoRef, setVideoRef] = useState('');
    const [showSuccessAlert, setShowAlert] = useState(false);
    const [redirectToHome, setRedirect] = useState(false);

        //Catching the user's input for the caption of the video; NOT mandatory for upload
    const changeVideoCaption = (ev) => {
        setVideoCaption(ev.target.value);
    }
        //Configuration of Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyBH6ffbjtiyt2Gzlin65-uLTmEmPoWA7-Y",
        authDomain: "tiktok-635d3.firebaseapp.com",
        databaseURL: "https://tiktok-635d3-default-rtdb.firebaseio.com",
        projectId: "tiktok-635d3",
        storageBucket: "tiktok-635d3.appspot.com",
        messagingSenderId: "152042874053",
        appId: "1:152042874053:web:435f2f6867ef6ee4e1bcac"
    };
        //Initializing local FB and storage
    const firebaseApp = initializeApp(firebaseConfig);
    const storage = getStorage(firebaseApp);

        //Creating new object for the video, uploading it in DB videos branch & in the owner's myVideos directory
    const updateUsersAndVideosDB = () => {
        let newVidObj = {
            comments: [{
                comment: 'testingComment',
                profilePicture: 'https://firebasestorage.googleapis.com/v0/b/tiktok-635d3.appspot.com/o/empty_profile_picture.jpeg?alt=media&token=0240b2a9-4dad-44a0-bbda-f5aa14892a0d',
                username: '-MwYW5QhTzoZePKj0FpS'
            }],
            commentsCounter: 0,
            description: videoCaption,
            likedBy: ['-MwYW5QhTzoZePKj0FpS'],
            likesCounter: 0,
            nickname: loggedUserData.nickname,
            owner: loggedUserData.username,
            profilePicture: loggedUserData.profilePicture,
            sharesCounter: 0,
            song: 'original sound',
            video: urlOfNewUpload
        }

        fetch('https://tiktok-635d3-default-rtdb.firebaseio.com/videos.json', {
            method: 'POST',
            body: JSON.stringify(newVidObj)
        })
            .then(res => res.json())
            .then(data => {
                let uploadedVideoId = data.name;
                let currentVideos = loggedUserData.myVideos;
                currentVideos.push(uploadedVideoId);


                fetch(`https://tiktok-635d3-default-rtdb.firebaseio.com/users/${loggedUserData.username}/myVideos/.json`, {
                    method: 'PUT',
                    body: JSON.stringify(currentVideos)
                })
                    .then(res => res.json())
                    .then(data => {
                        goToHomePage();
                    });
            })
    }

        //Setting timeout for the redirect to Newsfeed page
    const goToHomePage = () => {
        setShowAlert(true);
        setTimeout(() => {
            setRedirect(true);
        }, 2500);
    }

        //Handle the actual upload from the user and storing it in Firebase/Storage section
    const handleFileInput = (ev) => {
        const fileId = Math.floor(Math.random() * 100);
        const videoRef = ref(storage, `test-video-${fileId}.mp4`);
        const file = ev.target.files[0];

        uploadBytes(videoRef, file)
            .then(res => {
                getDownloadURL(videoRef)
                    .then((url) => {
                        setUrlOfNewUpload(url);
                        document.getElementById('uploadPostBtn').disabled = false;
                        setVideoRef(file.name);
                    })
            })
    }

        //Just a middle layer handler for the invoking of the actual upload to the DB
    const postVideo = () => {
        //todo -> uncomment here ->
        // updateUsersAndVideosDB();
    }

        //If no video is uploaded it's rendering the main view ot the upload;
            //if video is uploaded it's rendering the <Navigate> and redirecting the user to Newsfeed page
    if (!redirectToHome) {
        return (
            <>
                <div className={styles.uploadVideoWrapper}>
                    <div className={styles.uploadVideoComponentContainer}>
                        <div className={styles.uploadHeading}>
                            <div style={{fontWeight: 600}}>Upload video</div>
                            <div className={styles.uploadPostHeading}>Post a video to your account</div>
                        </div>
                        <div className={styles.uploadBody}>
                            <div className={styles.uploadSideContainer}>
                                {urlOfNewUpload === '' ? (
                                    <div className={styles.uploadSideTopics}>
                                        <img src={uploadLogo} alt={'upload'} style={{marginBottom: 18}}/>
                                        <div>Select video to upload</div>
                                        <div className={styles.uploadDragText} style={{marginBottom: 14}}>Or drag and
                                            drop a file
                                        </div>
                                        <div className={styles.uploadSmallText}>
                                            <div style={{marginBottom: 8}}>MP4 or WebM</div>
                                            <div style={{marginBottom: 8}}>720x1280 resolution or higher</div>
                                            <div style={{marginBottom: 8}}>Up to 180 seconds</div>
                                            <div style={{marginBottom: 8}}>Less than 1 GB</div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.uploadSideTopics}>
                                        <img src={uploadLogo} alt={'upload'} style={{marginBottom: 18}}/>
                                        <div className={styles.uploadSelectedVidText} style={{fontWeight: 600}}>Selected
                                            video:
                                        </div>
                                        <div className={styles.uploadSelectedVidText}>{videoRef}</div>
                                    </div>
                                )}
                                <label className={styles.uploadSelectBtn}>
                                    <input type={'file'} className={styles.uploadHiddenInput}
                                           accept="video/mp4" onChange={ev => handleFileInput(ev)}/>
                                    Select file </label>
                            </div>
                            <div className={styles.uploadMainContainer}>
                                <div className={styles.uploadCaption}>
                                    <div>Caption</div>
                                    <div style={{fontSize: 13, color: '#5c5d66'}}>{videoCaption.length}/150</div>
                                </div>
                                <input className={styles.uploadInputCaption} onChange={ev => changeVideoCaption(ev)}/>
                                <div className={styles.uploadOptionsWrapper}>
                                    <FormControl sx={{minWidth: 120}}>
                                        <Select labelId="demo-simple-select-label" id="visibility-select"
                                                defaultValue={'Public'}>
                                            <MenuItem value={'Public'}>Public</MenuItem>
                                            <MenuItem value={'Friends'}>Friends</MenuItem>
                                            <MenuItem value={'Private'}>Private</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <div className={styles.uploadCheckBoxWrapper}>
                                        <FormControlLabel
                                            control={<Checkbox defaultChecked style={{color: "#ff2c55"}}/>}
                                            label="Comment"/>
                                        <FormControlLabel
                                            control={<Checkbox defaultChecked style={{color: "#ff2c55"}}/>}
                                            label="Duet"/>
                                        <FormControlLabel
                                            control={<Checkbox defaultChecked style={{color: "#ff2c55"}}/>}
                                            label="Stitch"/>
                                    </div>
                                </div>

                                <div className={styles.uploadRunCheck}>
                                    Run a copyright check
                                    <Switch color="default"/>
                                </div>
                                <div className={styles.uploadCheckerInfo}>We'll check your video for potential copyright
                                    infringements on used sounds. If infringements are found, you can edit the video
                                    before
                                    posting.
                                </div>
                                <div className={styles.uploadButtons}>
                                    <button className={styles.uploadDiscardBtn}>Discard</button>
                                    {urlOfNewUpload === '' ?
                                        (<button id={'uploadPostBtn'} className={styles.uploadPostBtnDisabled}
                                                 disabled={'disabled'}>Post</button>)
                                        : (<button id={'uploadPostBtn'} className={styles.uploadPostBtnEnabled}
                                                   onClick={postVideo}>Post</button>)
                                    }

                                </div>
                                {showSuccessAlert ?
                                    (<Alert className={styles.uploadSuccessAlert} variant="outlined">Video uploaded
                                        successfully!</Alert>)
                                    : (<></>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    } else {
        return <Navigate replace to="/"/>;
    }
}

