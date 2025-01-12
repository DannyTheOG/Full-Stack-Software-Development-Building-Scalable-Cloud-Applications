function SwitchExample( props ) {
    function renderStatus( status ) {
        switch ( status ) {
            case "loading":
                return <p>loading data....</p>
            case "error":
                return <p>data fetch failed....</p>
            case "success":
                return <p>data fetch successful....</p>
            default:
                return <p>unknown status..</p>
        }
    }

    return(
        renderStatus( props.status )
    )
}


export default SwitchExample;