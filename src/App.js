import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

function App() {
  const local = "http://localhost:8000/swagger-docs";
  return <SwaggerUI url={local} />
}

export default App;
