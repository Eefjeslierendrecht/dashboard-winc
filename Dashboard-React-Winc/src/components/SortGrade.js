import React from 'react';

function SortGrade(props){
    return (
        <form onChange={props.handleFilter} className="filter">
            <h3>Filter per soort score</h3>
            <div id="input-container">
                <label>Beide scores: 
                    <input type="radio" name="gradeFilter" id="both-grade" value="both" defaultChecked/>
                </label>
                <label>Moeilijkheidsgraad score: 
                    <input type="radio" name="gradeFilter" id="difficulty-grade" value="difficulty"/>
                </label>
                <label>Review score: 
                    <input type="radio" name="gradeFilter" id="review-grade" value="review"/>
                </label>
            </div>
        </form>
    )
}

export default SortGrade;