import React from "react";
import "./last.css";
import { db } from "../../firebase";

function Last() {
  const [feedback, setFeedback] = React.useState("");
  const [formClass, setformClass] = React.useState("");
  const [showForm, setshowForm] = React.useState(false);
  const form = React.useRef(null);

  const openfeedback = () => {
    setshowForm(true)
    setformClass("active");
  };

  const submitFeedback = () => {
    db.collection("feedbackform")
      .add({ feedback: feedback, date: new Date() })
      .then(() => {
        setformClass("");
    setshowForm(false)

      });
  };
  return (
    <React.Fragment>
      <div className="formbody">
        <h1 className="h1">
          Your Feedback is as important as you are to me :P{" "}
        </h1>
        <h1 className="h1">So Please Click below </h1>
       <div class={`form ${formClass}`} ref={form} onClick={openfeedback}>
          {/* <div class="mail"></div> */}
          <h1 className="h1">Feedback form</h1>
          {showForm && <form action="">
            <textarea
              name=""
              id=""
              value={feedback}
              cols="30"
              rows="10"
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Message"
            ></textarea>

            {feedback && (
              <div class="submit" onClick={submitFeedback}>
                Send
              </div>
            )}
          </form>}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Last;
