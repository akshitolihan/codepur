import { useEffect } from "react";
import Prism from "prismjs";
import "prism-themes/themes/prism-material-light.css";
import "prismjs/components/prism-jsx.js";
import ClipboardCopy from "./Copy";

export default function Page(props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <div className="flex justify-center px-4">
        <div className="flex justify-center">
          <div className="max-w-2xl lg:w-[800px] sm:w-[700px] w-96">
            <pre className="flex justify-between shadow-lg rounded-lg">
              <code className="language-jsx">{props.code}</code>
              <div className="bg-[#FF9671] h-8 text-white rounded-full text-base font-semibold px-2 py-1">
                <ClipboardCopy copyText={props.text} />
              </div>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}
