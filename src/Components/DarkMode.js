import React, {useState} from "react";

export default function DarkMode() {

    const [Darkmodestyle , setDarkmodestyle] = useState({
        color: "black",
        backgroundColor: "white"
    })


    const [Darkmodetext, setDarkmodetext] = useState("Enable Dark Mode");


    let toggledarkmode = () =>{
        if(Darkmodestyle.color==="black"){
            setDarkmodestyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white"
            })
            setDarkmodetext("Enable Light Mode");
        }

        else{
            setDarkmodestyle({
                color: "black",
                backgroundColor: "white"
            })
            setDarkmodetext("Enable Dark Mode");
        }
    }


  return (
    <div className="container" style={Darkmodestyle}>
        <h2> About Us </h2> 
        <button type="button" onClick={toggledarkmode} className="btn btn-primary"> {Darkmodetext} </button>
      <div className="accordion" id="accordionExample" style={Darkmodestyle}>
        <div className="accordion-item" style={Darkmodestyle}>
          <h2 className="accordion-header" id="headingOne" style={Darkmodestyle}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={Darkmodestyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={Darkmodestyle}
          >
            <div className="accordion-body" style={Darkmodestyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={Darkmodestyle}>
          <h2 className="accordion-header" id="headingTwo" style={Darkmodestyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={Darkmodestyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={Darkmodestyle}
          >
            <div className="accordion-body" style={Darkmodestyle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={Darkmodestyle}>
          <h2 className="accordion-header" id="headingThree" style={Darkmodestyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={Darkmodestyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={Darkmodestyle}
          >
            <div className="accordion-body" style={Darkmodestyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
