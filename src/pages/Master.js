import React, { Component } from "react";
import Header from "../components/Header";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";

export default class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: auth().currentUser,
      logs: [],
      content: '',
      readError: null,
      writeError: null,
      loadingLogs: false
    };
    this.handleChange = this.handleChange.bind(this);
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
    } catch (error) {
      this.setState({ readError: error.message, loadingLogs: false });
    }
  }

  async handleChange(event) {
    this.setState({
      content: event.target.value
    });
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
        <h1>Master Log</h1>
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
            return  <p key={log.timestamp} className={(this.state.user.uid === log.uid ? "text-info" : "")}> 
              {this.formatTime(log.timestamp)} | {log.uemail} | {log.content}
              <br />
              <a href={log.fileDownloadLink} target="_blank" rel="noopener noreferrer">Download Attachment</a>
              </p>             
          })}
          </output></pre>
        </div>
      </div>
    );
  }
}