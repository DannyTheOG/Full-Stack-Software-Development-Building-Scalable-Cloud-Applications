function IfExample( props ) {
    if( props.isLoggedIn ) 
       return( <p>Welcome Back!</p> );
    else 
      return( <p>Please Sign In.</p> );
}


export default IfExample;