import styles from './UploadVideo.module.scss';
import {Checkbox, FormControl, FormControlLabel, MenuItem, Select, Switch} from "@mui/material";
import Footer from "../Footer/Footer";
import uploadLogo from "../../../images/cloud-icon1.ecf0bf2.svg";


export default function UploadVideoComponent() {
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
                            <img src={uploadLogo} alt={'upload'} style={{marginBottom: 18}}/>
                            <div>Select video to upload</div>
                            <div className={styles.uploadDragText} style={{marginBottom: 14}}>Or drag and drop a file
                            </div>
                            <div className={styles.uploadSmallText}>
                                <div style={{marginBottom: 8}}>MP4 or WebM</div>
                                <div style={{marginBottom: 8}}>720x1280 resolution or higher</div>
                                <div style={{marginBottom: 8}}>Up to 180 seconds</div>
                                <div style={{marginBottom: 8}}>Less than 1 GB</div>
                            </div>
                            <button className={styles.uploadSelectBtn}>Select file</button>
                        </div>
                        <div className={styles.uploadMainContainer}>
                            <div className={styles.uploadCaption}>
                                <div>Caption</div>
                                <div style={{fontSize: 13}}>0/150</div>
                            </div>
                            <input className={styles.uploadInputCaption}/>
                            <div className={styles.uploadCaption}>Cover</div>
                            <div className={styles.uploadCoverBox}/>
                            <FormControl sx={{minWidth: 120}}>
                                <Select labelId="demo-simple-select-label" id="visibility-select">
                                    <MenuItem value={'Public'} defaultChecked={'checked'}>Public</MenuItem>
                                    <MenuItem value={'Friends'}>Friends</MenuItem>
                                    <MenuItem value={'Private'}>Private</MenuItem>
                                </Select>
                            </FormControl>
                            <div className={styles.uploadCheckBoxWrapper}>
                                <FormControlLabel control={<Checkbox defaultChecked style={{color: "#ff2c55"}}/>}
                                                  label="Comment"/>
                                <FormControlLabel control={<Checkbox defaultChecked style={{color: "#ff2c55"}}/>}
                                                  label="Duet"/>
                                <FormControlLabel control={<Checkbox defaultChecked style={{color: "#ff2c55"}}/>}
                                                  label="Stitch"/>
                            </div>
                            <div className={styles.uploadRunCheck}>
                                Run a copyright check
                                <Switch color="default"/>
                            </div>
                            <div className={styles.uploadCheckerInfo}>We'll check your video for potential copyright
                                infringements on used sounds. If infringements are found, you can edit the video before
                                posting. Learn more
                            </div>
                            <div className={styles.uploadButtons}>
                                <button className={styles.uploadDiscardBtn}>Discard</button>
                                <button className={styles.uploadPostBtn} disabled={'disabled'}>Post</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            {/*<SignUp/>*/}
            {/*<Register/>*/}
            {/*<Login/>*/}
            {/*<LoginWithEmail/>*/}
        </>
    )
}

