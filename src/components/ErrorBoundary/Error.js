import React from "react";
import "../ErrorBoundary/Error.css"

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      this.setState({
        hasError : true,
        error : error,
        errorInfo : errorInfo
      })
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (<>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR2eyeY3ijsyDrYUgAOuBAu3dZyZWTw4ml7w&usqp=CAU" alt="Something Went Wrong"/>
               </>) ;

      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;