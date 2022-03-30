import firebase from "firebase";
import  {Button} from "react-bootstrap";
import React from "react";

export const VideoInput = ({ video,  }) => {
  const [link, setLink] = React.useState(video.link);

  const onUpdate = () => {
   
    const db = firebase.firestore();
    db.collection("videos")
      .doc(video.id)
      .set({ ...video, link });
  };
  const onDelete = () => {
  
    const db = firebase.firestore();
    db.collection("videos").doc(video.id).delete();
  };

  return (
    <div className="videoEdit">
      <input
        className="inputVideo"
        value={link}
        onChange={(e) => {
          setLink(e.target.value);
        }}
      />
      <div className="buttonsVidos">
        <Button
          className="videoBtn"
          variant="warning"
          size="sm"
          onClick={onUpdate}
        >
          Atualizar
        </Button>
        <Button
          className="videoBtn"
          variant="danger"
          size="sm"
          onClick={onDelete}
        >
          Deletar
        </Button>
      </div>
    </div>
  );
};
