import React, { useState } from "react";

const Accordion = () => {
  const [BoxcollapsedOne, setBoxcollpasedOne] = useState(true);
  const [BoxcollapsedTwo, setBoxcollpasedTwo] = useState(true);
  const [BoxcollapsedThree, setBoxcollpasedThree] = useState(true);

  const handleAccordionOne = () => {
    setBoxcollpasedOne(!BoxcollapsedOne);
  };

  const handleAccordionTwo = () => {
    setBoxcollpasedTwo(!BoxcollapsedTwo);
  };
  const handleAccordionThree = () => {
    setBoxcollpasedThree(!BoxcollapsedThree);
  };
  return (
    <div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              onClick={handleAccordionOne}
            >
              Accordion Item #1
            </button>
          </h2>
          <div>
            {BoxcollapsedOne ? null : (
              <div>
                {
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                }
              </div>
            )}
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              onClick={handleAccordionTwo}
            >
              Accordion Item #2
            </button>
          </h2>
          <div>
            {BoxcollapsedTwo ? null : (
              <div>
                {
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                }
              </div>
            )}
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              onClick={handleAccordionThree}
            >
              Accordion Item #3
            </button>
          </h2>
          <div>
            {BoxcollapsedThree ? null : (
              <div>
                {
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
