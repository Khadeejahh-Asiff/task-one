import React, { useState } from "react";

const ArraySearch = () => {
  const allFruits = [
    //array
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Watermelon",
    "Mango",
  ];
  const [searchedTerm, setSearchedTerm] = useState(""); //to check the searchedterm in order to display the results
  const [searchedResults, setSearchedResults] = useState([]); //to display if the term was found or not
  const [Submitted, setSubmitted] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchedTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    //when submit button is pressed
    event.preventDefault();

    const filteredResults = allFruits.filter(
      (fruit) => fruit.toLowerCase().includes(searchedTerm.toLowerCase()) //convert both filtered array contents and searched items content to lower case in order to compare
    );

    setSearchedResults(filteredResults); //pass the results to the searched results
    setSubmitted(true); // set submitted as true to make sure that the function below iterates
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="d-flex" style={{ marginLeft: "18rem" }}>
          <div>
            <label>Search for a fruit:</label>
          </div>
          <div style={{ marginLeft: "1rem" }}>
            <input type="text" value={searchedTerm} onChange={handleSearch} />
          </div>
          <div style={{ marginLeft: "1rem" }}>
            <button className="btn btn-outline-success" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>

      {Submitted && (
        <div>
          <p>You searched for: {searchedTerm}</p>
          <p>Results:</p>
          <ul>
            {searchedResults.length > 0 ? ( //using ternary operator to
              searchedResults.map(
                (
                  result,
                  index //map the result
                ) => <li key={index}>{result}</li>
              )
            ) : (
              <>No results found</> //to display error message
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ArraySearch;
