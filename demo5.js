class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    alert(`Selected file - ${this.fileInput.current.files[0].name}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br />
        <label>
          Upload File:
          <input type="file" ref={this.fileInput} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(<FileInput />, document.getElementById("root"));
