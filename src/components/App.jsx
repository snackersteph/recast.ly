class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
    console.log(exampleVideoData.length);

    // this.onVideoClick = this.onVideoClick.bind(this);
  }

  componentDidMount() {
    this.getYouTubeVideos('cute kittens');
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videoList: videos,
      });
    });
  }

  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });

    console.log(this.state.current);

  }
  
  render() {
    return (
      <div>
        <nav className="navbar" >
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer vid={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <div>
              <VideoList videos={this.state.videos} onVideoClick={this.onVideoClick.bind(this)} state={this.state}/>
            </div>
          </div>
        </div>
      </div>
    );
  }



}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
