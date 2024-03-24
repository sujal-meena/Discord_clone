//File name has to be Layout

// Define a functional component named AuthLayout, which takes an object as a parameter with a property named children.

/*
({ children }): This part is using object destructuring syntax in the function parameter. It means the function expects an object as an argument, and it directly extracts the children property from that object.

: { children: React.ReactNode }: This part is providing TypeScript type annotation. It specifies that the children property should be of type React.ReactNode. React.ReactNode is a TypeScript type that represents any node that could be rendered in React, such as JSX elements, strings, numbers, etc

*/


const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  
    // Return JSX code for the component.
    return (
        // Create a <div> element with a class name "bg-red-500" for styling purposes and a height of 100%.
        <div className="h-full flex items-center justify-center">
            {/* Render the children components or content inside the <div> element. */}
            {children}
        </div>
    );
}

// Export the AuthLayout component as the default export for this module.
export default AuthLayout;
