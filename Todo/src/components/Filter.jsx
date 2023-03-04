
function Filter (props) {

    function clearCompleted() {
        console.log('cleared')
    }
    
    return (
        <div className="summary-tab">
            <span>{`${props.itemsLeft} ${props.itemsLeft <= 1 ? 'item' : 'items'} left`}</span>
            
            <div className="filter-tab">
                <button className="all filter"
                        active='true' 
                        onClick={props.filter}
                >       All
                </button> 
                <button className="active filter" 
                        onClick={props.filter}
                        active='false' 
                >       Active
                </button> 
                <button className="completed filter" 
                        onClick={props.filter}
                        active='false'
                >       Completed
                </button>
            </div>

            <button className="clear" onClick={clearCompleted}>
                Clear Completed
            </button>
        </div> 
    )
}

export default Filter