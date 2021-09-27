import { db } from "../services/firebase";

export function readLogs() {
  let abc = [];
  db.ref("logs").on("value", snapshot => {
    snapshot.forEach(snap => {
      abc.push(snap.val())
    });
    return abc;
  });
}

export function writeLogs(message) {
  return db.ref("logs").push({
    content: message.content,
    timestamp: message.timestamp,
    uid: message.uid,
    uemail: message.uemail,
    fileDownloadLink: message.fileDownloadLink
  });
}
