import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

export default function FullPageVideo(props) {
  const { onClose, selectedVideo, open } = props;
  console.log(selectedVideo);

  const handleClose = (event, reason) => {
    if (reason && reason !== "backdropClick") {
      onClose(selectedVideo);
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Show fullpage video</DialogTitle>
      <button onClick={onClose}>Close</button>
    </Dialog>
  );
}
