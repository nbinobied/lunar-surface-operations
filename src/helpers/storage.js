import { storage } from "../services/firebase";
import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';



export async function uploadFile(file) {
    const fileRef = ref(storage, "files/" + uuidv4()  + "-" +  file.name);
    await uploadBytes(fileRef, file);

    return await getDownloadURL(fileRef).then((url) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
      return blob;
    };
    xhr.open('GET', url);
    xhr.send();
    return url;
  });
}

