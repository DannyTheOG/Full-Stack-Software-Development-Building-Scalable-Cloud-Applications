function NewUser() {
    return(
        <p>Please Sign In.</p>
    )
}

function ExistingUser() {
    return(
        <p>Welcome Back!</p>
    )
}

function TernaryExample( props ) {
    return props.isLoggedIn ? <ExistingUser /> : <NewUser />
}


export default TernaryExample;