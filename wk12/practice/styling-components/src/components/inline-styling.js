function InlineStyling() {
    const inlineStyles = {
        backgroundColor: "olive", 
        color: "white",
        padding: "5px",
        margin: "5px",
        borderRadius: "5px"
    }


    return(
        <>
            <div 
                style = {
                    {
                        backgroundColor: "blue", 
                        color: "white",
                        padding: "5px",
                        margin: "5px",
                        borderRadius: "5px"
                    }
                }
            >
                Inline styling
            </div>

            <h3 style = {inlineStyles}>Inline styling</h3>
        </>
    );
}


export default InlineStyling;