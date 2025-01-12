import styles from './css-modules-styling.module.css';

function CssModulesStyling() {
    return(
        <>
            {/* in this styling, we do need to name the CSS file with '.module.css'  */}
            <h3 className = {styles["my-component"]}>CSS Modules Styling</h3>
            <h3 className = {styles.title}>CSS Modules Styling</h3>
        </>
    );
}


export default CssModulesStyling;