
function Filter (props) {

    function clearCompleted() {
        console.log('cleared')
    }
    
    return (
        <div className="summary-tab">
            <span>{} items left</span>
            
            <div className="filter-tab">
                <button className="all filter"
                        active='true' 
                        onClick={props.filter}>All
                </button> 
                <button className="active filter" 
                        onClick={props.filter}>Active
                </button> 
                <button className="completed filter" 
                        onClick={props.filter}>Completed
                </button>
            </div>

            <button 
                className="clear"
                onClick={clearCompleted}>Clear Completed
            </button>
        </div> 
    )
}

export default Filter