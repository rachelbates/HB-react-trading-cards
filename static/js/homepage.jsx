"use strict";

function Homepage() {
  return (
    <React.Fragment>
      <p>Welcome to our site!</p>
      <a href="/cards">Navigate to Cards page</a>
      <img src="/static/img/balloonicorn.jpg"></img>
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
 