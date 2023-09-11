// import {
//   Streamlit,
//   StreamlitComponentBase,
//   withStreamlitConnection,
// } from "streamlit-component-lib"
// import React, { useEffect, ReactNode } from "react";
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { useEffect } from "react"
// import Box from '@material-ui/core/Box'
// import { createTheme } from '@material-ui/core/styles';
// import { Slider, Grid } from "@material-ui/core";
// import { ThemeProvider } from '@material-ui/styles';


/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */
const ClickableCard = (props: ComponentProps) => {
    // Arguments that are passed to the plugin in Python are accessible
    // via `this.props.args`. Here, we access the "name" arg.
    useEffect(() => Streamlit.setFrameHeight(315));
    // const name = props.args["name"]
    const image_path = props.args["path"]
    // var clicked = false
    const [name, setName] = React.useState(
      props.args["name"]
    )
    // Streamlit sends us a theme object via props that we can use to ensure
    // that our component has visuals that match the active theme in a
    // streamlit app.
    const { theme } = props
    const click_style: React.CSSProperties = {
      display: "grid",
      width: "250px",
      height: "250px",
      borderRadius: "15px",
      color: "black",
      cursor: "pointer",
      gridTemplateRows:"160px 50px",
      // lineHeight: "10px",
      // float: "left",
      boxShadow: "0 3px 3px 3px black",
      overflow:"hidden",
      marginLeft: "20px",
      opacity: "0.5"
    }

    const hover_style: React.CSSProperties = {
      display: "grid",
      width: "250px",
      height: "250px",
      borderRadius: "15px",
      color: "black",
      cursor: "pointer",
      gridTemplateRows:"160px 50px",
      // lineHeight: "10px",
      // float: "left",
      boxShadow: "0 3px 10px 2px #444",
      overflow:"hidden",
      marginLeft: "20px"
    }

    const card_style: React.CSSProperties = {
      display: "grid",
      width: "250px",
      height: "250px",
      borderRadius: "15px",
      color: "black",
      cursor: "pointer",
      gridTemplateRows:"160px 50px",
      // lineHeight: "10px",
      // float: "left",
      boxShadow: "5px 5px 10px #aaa",
      overflow:"hidden",
      marginLeft: "20px"
    }

    var [clicked, setState] = React.useState(
      card_style
    )

    const img_style: React.CSSProperties = {
      objectFit: "cover",
      width: "100%",
      height:"100%"
    }

    const title_style: React.CSSProperties = {
      alignItems: "right",
      objectFit: "cover",
      padding:"10px",
      fontSize:"25px"
    }

    // Maintain compatibility with older versions of Streamlit that don't send
    // a theme object.
    // if (theme) {
    //   // Use the theme object to style our button border. Alternatively, the
    //   // theme style is defined in CSS vars.
    //   // const borderStyling = `1px solid ${
    //   //   this.state.isFocused ? theme.primaryColor : "gray"
    //   // }`
    //   style.border = borderStyling
    //   style.outline = borderStyling
    // }

    onmouseover = (e): void => {
    // Increment state.numClicks, and pass the new value back to
    // Streamlit via `Streamlit.setComponentValue`.
    setState(hover_style)
    // setValue(name)

    }

    onmousedown = (): void => {
    // Increment state.numClicks, and pass the new value back to
    // Streamlit via `Streamlit.setComponentValue`.
    setState(click_style)
    Streamlit.setComponentValue(name)
    // setValue(name)

    }

    onmouseout = (): void => {
    // Increment state.numClicks, and pass the new value back to
    // Streamlit via `Streamlit.setComponentValue`.
    setState(card_style)

    // setValue(name)

    }

    onmouseup = (): void => {
    // Increment state.numClicks, and pass the new value back to
    // Streamlit via `Streamlit.setComponentValue`.
    setState(card_style)

    // setValue(name)

    }

    // Show a button and some text.
    // When the button is clicked, we'll increment our "numClicks" state
    // variable, and send its new value back to Streamlit, where it'll
    // be available to the Python program.
    return (
      <div onMouseDown={() => onmousedown} 
          style={clicked} 
          onMouseOut={() => onmouseout} 
          onMouseOver={() => onmouseover}
          onMouseUp={() => onmouseup}>
        <img style={img_style} src={image_path} alt="App_Image"/>
        <h1 style={title_style}>{name}</h1>
      </div>
    )

  /** Click handler for our "Click Me!" button. */


  /** Focus handler for our "Click Me!" button. */
  // private _onFocus = (): void => {
  //   this.setState({ isFocused: true })
  // }

  // /** Blur handler for our "Click Me!" button. */
  // private _onBlur = (): void => {
  //   this.setState({ isFocused: false })
  // }
}

// "withStreamlitConnection" is a wrapper function. It bootstraps the
// connection between your component and the Streamlit app, and handles
// passing arguments from Python -> Component.
//
// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(ClickableCard)
