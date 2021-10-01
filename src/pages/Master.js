import React, { Component } from "react";
import Header from "../components/Header";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import { uploadFile } from "../helpers/storage";
import { MentionsInput, Mention } from 'react-mentions';

export default class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: auth().currentUser,
      logs: [],
      content: '',
      readError: null,
      writeError: null,
      loadingLogs: false,
      users: [],
      keys: [],
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
        let users = [];
        let keys = [];

        let index = 0;
        snapshot.forEach((snap) => {
          
          logs.push(snap.val());
          logs[index] = {...logs[index], key: snap.key};
          
          var found = users.findIndex(x => x.id === logs[index].uemail);

          if(found === -1){
            users[index] = {...users[index], id: logs[index].uemail, display: logs[index].username }
          }

          keys[index] = {...keys[index], id: snap.key, display: snap.key};

          index++;
        });
        logs.sort(function (a, b) { return a.timestamp - b.timestamp })
        this.setState({ logs });
        this.setState({ users });
        this.setState({ keys });
        logArea.scrollBy(0, logArea.scrollHeight);
        this.setState({ loadingLogs: false });
      });
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
      if(this.state.file == ''){
        this.state.fileDownloadLink == '';
      }
      else{
        this.state.fileDownloadLink  = await uploadFile(this.state.file);
      }
      await db.ref("logs").push({
        content: this.state.content,
        timestamp: Date.now(),
        uid: this.state.user.uid,
        uemail: this.state.user.email,
        username: this.state.user.email.split("@")[0],
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
    this.state.file = event.target.files[0]
  }

  formatTime(timestamp) {
    const d = new Date(timestamp);
    const time = `${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    return time;
  }

  render() {
    return (
      <div id="page-top">
        <Header></Header>
        <div className="console">
          <div className="container header">
            <div className="header-output">
              <pre><output>
                <h1>Master Log</h1>
                #Log                    | Timestamp        | @User                | Log
                <hr />
              </output></pre>
            </div>
            <div className="header-no-output">
              <h1>Master Log</h1>
              #Log                    | Timestamp        | @User                | Log
              <hr />
            </div>
          </div>
          <div className="container log-area" ref={this.myRef}>
            {this.state.loadingLogs ? 
                <div className="d-flex justify-content-center">
                  <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div> 
            : ""}
            {this.state.logs.map(log => {
              if (log.fileDownloadLink === '') {
                return <div key={log.timestamp}>
                          <p className={(this.state.user.uid === log.uid ? "text-info" : "")}>
                            {log.key} | {this.formatTime(log.timestamp)} | {log.username} | {log.content}
                          </p>
                          <hr />
                        </div>
              } else {
                return <div key={log.timestamp}>
                          <p className={(this.state.user.uid === log.uid ? "text-info" : "")}>
                            {log.key} | {this.formatTime(log.timestamp)} | {log.username} | {log.content}
                            <br />
                            <a href={log.fileDownloadLink} target="_blank" rel="noopener noreferrer">Download Attachment</a>
                          </p>
                          <hr/>
                        </div>
              }            
            })}
          </div>
          <div className="container">
            <form onSubmit={this.handleSubmit}>
            <div className="row py-4">
              <div className="form-group col-md-8">
                <MentionsInput value={this.state.content} onChange={this.handleChange} className="form-control" name="content"
                                placeholder={"Enter Log..."}>
                  <Mention trigger="@" data={this.state.users} markup="@__display__" />
                  <Mention trigger="#" data={this.state.keys} markup="#__display__" />
                </MentionsInput>
              </div>
              <div className="form-group col-md-4">
                <div className="input-group">
                  <input type="file" className="form-control" id="attachment" onChange={(e)=>{this.handleUpload(e)}} />
                </div>
              </div>
            </div>
            {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
            <button type="submit" className="btn btn-primary px-5 mb-4">Log</button>
          </form>
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">This is the master log containing all users logs</li>
              <li className="list-group-item"><span className="text-info">Log</span>: Identity for each log</li>
              <li className="list-group-item"><span className="text-info">Timestamp</span>: Time of the log</li>
              <li className="list-group-item"><span className="text-info">User</span>: Email of user</li>
              <li className="list-group-item"><span className="text-info">Log</span>: The log details</li>
              <li className="list-group-item">Mention people using <span className="text-info">@User</span></li>
              <li className="list-group-item">Tag a log using <span className="text-info">#Log</span></li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    );
  }
}