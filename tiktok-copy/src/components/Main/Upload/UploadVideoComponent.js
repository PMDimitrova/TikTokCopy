import styles from './UploadVideo.module.scss';
import Login from "../../LoginRegister/Login";
import LoginWithEmail from "../../LoginRegister/LoginWithEmail";
import Register from "../../LoginRegister/Register";
import SignUp from "../../LoginRegister/SignUp";


export default function UploadVideoComponent(){
    return(
        <>
            <div className={styles.uploadVideoWrapper}>
                <div className={styles.uploadVideoComponentContainer}>
                    <div className={styles.uploadHeading}>
                        <div style={{fontWeight: 600}}>Upload video</div>
                        <div className={styles.uploadPostHeading}>Post a video to your account</div>
                    </div>
                    <div className={styles.uploadBody}>
                        <div className={styles.uploadSideContainer}>
                            <div style={{marginBottom: 18}}><img src={"../../../images/cloud-icon1.ecf0bf2.svg"} alt={'upload'}/></div>
                            <div >Select video to upload</div>
                            <div className={styles.uploadDragText} style={{marginBottom: 14}}>Or drag and drop a file</div>
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
                                <div style={{fontSize:13}}>0/150</div>
                            </div>
                            <div className={styles.uploadInputCaption}>
                            </div>
                            <div className={styles.uploadCaption}>Cover</div>
                            <div className={styles.uploadCoverBox}></div>
                            <select>
                                {/*todo change it*/}
                                <option>Public</option>
                                <option>Friends</option>
                                <option>Private</option>s
                            </select>
                            <div className={styles.uploadCheckBoxWrapper}>
                                <label className={styles.uploadCheckboxContainer}>
                                    <span className="checkmark"/>
                                    <input type="checkbox"></input>
                                    Comment
                                </label>
                                <label className={styles.uploadCheckboxContainer}>
                                    <span className="checkmark" />
                                    <input type="checkbox"/>Duet
                                </label>
                                <label className={styles.uploadCheckboxContainer}>
                                    <span className="checkmark"/>
                                    <input type="checkbox" />Stitch
                                </label>
                            </div>
                            <div className={styles.uploadRunCheck}>Run a copyright check
                                <label className="switch">
                                    <input type="checkbox"/>
                                </label>
                            </div>
                            <div className={styles.uploadCheckerInfo}>We'll check your video for potential copyright infringements on used sounds. If infringements are found, you can edit the video before posting. Learn more</div>
                            <div className={styles.uploadButtons}>
                                <button className={styles.uploadDiscardBtn}>Discard</button>
                                <button className={styles.uploadPostBtn} disabled={'disabled'}>Post</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <SignUp />
            <Register/>
            <Login />
            <LoginWithEmail />
        </>
    )
}

