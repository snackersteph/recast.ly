class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  dataCollect() {
    var vidIndex = this.props.index;
    this.props.onVideoClick(vidIndex);
  }

  render() {
    return (
      <div className="video-list-entry media">
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.vid.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title" onClick={this.dataCollect.bind(this)}>{this.props.vid.snippet.title}</div>
          <div className="test">{this.props.index}</div>
          <div className="video-list-entry-detail">{this.props.vid.snippet.description}</div>
        </div>
      </div>
    );
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;


//write a click handler here that will grab the data and pass it to App's onVideoClick function
