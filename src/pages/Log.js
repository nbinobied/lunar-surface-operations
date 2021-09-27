import React, { Component } from "react";
import Header from "../components/Header";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import { uploadFile } from "../helpers/storage";
import $ from 'jquery'

export default class Log extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: auth().currentUser,
      logs: [],
      content: '',
      readError: null,
      writeError: null,
      loadingLogs: false,
      file: "",
      fileDownloadLink: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.myRef = React.createRef();
  }

  async componentDidMount() {
    this.setState({ readError: null, loadingLogs: true });
    const logArea = this.myRef.current;
    try {
      db.ref("logs").on("value", snapshot => {
        let logs = [];
        snapshot.forEach((snap) => {
          logs.push(snap.val());
        });
        logs.sort(function (a, b) { return a.timestamp - b.timestamp })
        this.setState({ logs });
        logArea.scrollBy(0, logArea.scrollHeight);
        this.setState({ loadingLogs: false });
      });
      if (this.state.user !== null) {
        this.state.user.providerData.forEach((profile) => {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          console.log("  Name: " + profile.displayName);
          console.log("  Email: " + profile.email);
          console.log("  Photo URL: " + profile.photoURL);
        });
      }
    } catch (error) {
      this.setState({ readError: error.message, loadingLogs: false });
    }
  }

  async handleChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ writeError: null });
    const logArea = this.myRef.current;
    try {
      this.state.fileDownloadLink  = await uploadFile(this.state.file);
      await db.ref("logs").push({
        content: this.state.content,
        timestamp: Date.now(),
        uid: this.state.user.uid,
        uemail: this.state.user.email,
        fileDownloadLink: this.state.fileDownloadLink
      });
      this.setState({ content: '' });
      logArea.scrollBy(0, logArea.scrollHeight);
    } catch (error) {
      console.log(error)
      this.setState({ writeError: error.message });
    }
  }

  async handleUpload(event) {
    $(".custom-file-label").addClass("selected").html(event.target.files[0].name);
    this.state.file = event.target.files[0]
  }

  formatTime(timestamp) {
    const d = new Date(timestamp);
    const time = `${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    return time;
  }

  render() {
    return (
    <div className="console">
      <Header />
      <div className="container-fluid log-area" ref={this.myRef}>
        <h1>Personal Log</h1>
        {this.state.loadingLogs ?
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
        : ""}
        <pre><output>
          Timestamp       | User                | Log
          {this.state.logs.map(log => {
            if (this.state.user.uid !== log.uid){return null}
            else {
              return <p key={log.timestamp} className={(this.state.user.uid === log.uid ? "text-info" : "")}>
                  {this.formatTime(log.timestamp)} | {log.uemail} | {log.content}
                  <br />
                  <a href={log.fileDownloadLink} target="_blank" rel="noopener noreferrer">Download Attachment</a>
                </p>
            }
          })}
        </output></pre>
      </div>
      <div className="container-fluid">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="form-group col-8">
              <textarea className="form-control" name="content" onChange={this.handleChange} value={this.state.content}></textarea>
            </div>
            <div className="form-group col-4">
              <div className="custom-file">
                <input type="file" className="custom-file-input" id="customFile" onChange={(e)=>{this.handleUpload(e)}} />
                <label className="custom-file-label" htmlFor="customFile">Choose file</label>
              </div>
            </div>
          </div>
          {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
          <button type="submit" className="btn btn-primary px-5 mt-4">Log</button>
        </form>
      </div>
    </div>
    );
  }
}