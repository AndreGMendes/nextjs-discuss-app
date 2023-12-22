/** 
 * EXAMPLE: Importing Utility Functions to be used inside React Components
 * */ 
import { sum, multiply } from "@/playground/functions";

 function SumComponent() {
  return (
    <div>
      <h1>{sum(2, 3)}</h1>
      <h1>{sum(2, 3, 5)}</h1>
    </div>
  );
}

 function MultiplyComponent() {
  return (
    <div>
      <h1>{multiply(2, 3)}</h1>
      <h1>{multiply(2, 3, 5)}</h1>
    </div>
  );
}


export {SumComponent, MultiplyComponent}