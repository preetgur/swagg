import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

function App() {
  const url = "http://localhost:3000/swagger-docs";
  const live = "https://53nsznx3bl.execute-api.us-east-1.amazonaws.com/swagger-docs";
  return <SwaggerUI url={live} />
}

export default App;
