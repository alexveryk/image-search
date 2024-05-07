import { ColorRing } from "react-loader-spinner";
import "./loader.css";

export function Loader() {
  return (
    <div className="loader">
      <ColorRing
        className=""
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#3f51b5", "#f47e60", "#3f51b5", "#abbd81", "#3f51b5"]}
      />
    </div>
  );
}
