import styles from "../styles/placeCenter.module.css";
import { useState, useRef, useEffect } from "react";

export default function SingleUploadedFile() {
  const [file, setFile] = useState(null);
  const [elementSrc, setElementSrc] = useState("");
  const videoRef = useRef(null);
  const imageRef = useRef(null);
  const pdfRef = useRef(null);

  useEffect(() => {
    if (file) {
      const src = URL.createObjectURL(new Blob([file], { type: file.type }));
      setElementSrc(src);
    }
  }, [file]);

  const defaultStyle = { width: "200px", height: "200px", marginTop: "30px" };

  return (
    <div className={styles.placeCenter}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      {
        //previews the image
        file && file.type.match("image") && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imageRef}
            src={elementSrc}
            alt=""
            style={{ ...defaultStyle, objectFit: "cover" }}
          />
        )
      }
      {
        // previews the video
        file && file.type.match("video") && (
          <video
            id="video-summary"
            autoPlay
            ref={videoRef}
            controls
            src={elementSrc}
            style={defaultStyle}
          />
        )
      }
      {
        // previews the pdf
        file && file.type.match("application") && (
          <embed ref={pdfRef} src={elementSrc} style={defaultStyle} />
        )
      }
    </div>
  );
}
