import { useEffect } from "react";
import Prism from "prismjs";
import "prism-themes/themes/prism-one-light.css";
import "prismjs/components/prism-jsx.js";

export default function Page(props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <div className="flex justify-center px-4">
        <main className="max-w-2xl lg:w-[900px] sm:w-[700px] w-96">
          <pre className="shadow-lg rounded-lg">
            <code className="language-jsx">{props.code}</code>
          </pre>
        </main>
      </div>
    </>
  );
}
