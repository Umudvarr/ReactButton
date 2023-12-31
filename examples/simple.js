require("react-github-button/assets/style.less");

const React = require("react");
const ReactDOM = require("react-dom");
const GitHubButton = require("react-github-button");

ReactDOM.render(
  <div style={{ marginLeft: 10 }}>
    <GitHubButton
      type="stargazers"
      size="large"
      namespace="btnn"
      repo="react-github-button"
    />
    <br />
    <br />
    <GitHubButton
      type="watchers"
      style={{ color: "red" }}
      namespace="btnn"
      repo="react-github-button"
    />
    <br />
    <br />
    <GitHubButton
      className="hello"
      type="forks"
      namespace="btnn"
      repo="react-github-button"
    />
    <br />
    <br />
  </div>,
  document.getElementById("__react-content")
);
