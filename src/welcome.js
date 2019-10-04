

import myPic from './micah.jpg'

class welcome extends Component{
  render() {
    <div className = "Welcome">
      <div className="Welcome-header">
        <h2>Micah Elinor Feras</h2>
        <img src = {myPic} className="Main-pic" alt="selfpic" width="193.7" height="265.6" align="right"/>
      </div>
    <p className = "Welcome-intro" align="left">
      Nice to meet you!<br></br>
      I am junior Electrical Engineering and Computer Science student at Berkeley.<br></br>
      I am passionate about renewable technology, power systems, and software development.
    </p>
    </div>
  }
}

export default welcome;

