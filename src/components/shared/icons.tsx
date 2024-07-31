import Svg, { Circle, Path, Rect } from "react-native-svg";
import React = require("react");
type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const Add = ({ color = "black", height, width }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 19 18" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.25 12.75V18H12.75V12.75H18V11.25H12.75V6H11.25V11.25H6V12.75H11.25Z"
      fill={color}
    />
  </Svg>
);

const UncheckedBox = ({ color = "black", height, width }: IconProps) => (
  <Svg viewBox="0 0 24 24" width={width} height={height} fill="#000000">
    <Rect
      fill="#f9fbff"
      stroke-width="1"
      stroke={color}
      x="0.5"
      y="0.5"
      width="23"
      height="23"
      rx="5.5"
    />
  </Svg>
);

const Edit = ({ color = "black", height, width }: IconProps) => (
  <Svg viewBox="0 0 24 24" width={width} height={height} fill="none">
    <Path
      d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
      stroke="#000000"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
      stroke="#000000"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const Delete = ({ color = "black", height, width }: IconProps) => (
  <Svg viewBox="0 0 24 24" fill="none" width={width} height={height}>
    <Path
      d="M10 11V17"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M14 11V17"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M4 7H20"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const Home = ({ color = "black", height = 20, width = 20 }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 19 20" fill="none">
    <Path
      d="M8.92527 1.40363L0.925273 7.02207C0.658682 7.20929 0.5 7.51464 0.5 7.84041V18C0.5 18.5523 0.947715 19 1.5 19H9.5H17.5C18.0523 19 18.5 18.5523 18.5 18V7.84041C18.5 7.51464 18.3413 7.20929 18.0747 7.02207L10.0747 1.40363C9.72985 1.16143 9.27015 1.16143 8.92527 1.40363Z"
      stroke={color}
    />
  </Svg>
);
const Completed = ({ color = "black", height = 20, width = 20 }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 19 18" fill="none">
    <Circle cx={9.5} cy={9} r={8.5} stroke={color} />
    <Path
      d="M4 8.5C4 10 4.36418 11.1735 5 12C6.28097 13.6652 8.06982 13.9999 9.5 14C11.0334 14.0001 12.2064 13.5523 13.5 12C14.138 11.1018 14.5 9.5 14.5 8.5"
      stroke={color}
      strokeLinecap="round"
    />
  </Svg>
);

const CheckedBox = ({ color = "black", height, width }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 19 18" fill="none">
    <Path
      d="M7.48334 5.25942C6.33891 5.38732 5.42286 6.29057 5.29045 7.42268C4.93476 10.4638 4.93476 13.5361 5.29045 16.5772C5.42286 17.7093 6.33891 18.6126 7.48334 18.7405C10.4602 19.0732 13.5398 19.0732 16.5166 18.7405C17.6611 18.6126 18.5771 17.7093 18.7095 16.5772C18.9651 14.3921 19.037 12.1909 18.9253 9.99668C18.9224 9.94002 18.9436 9.88475 18.9837 9.84463L20.0225 8.80585C20.1427 8.68562 20.3482 8.7608 20.3609 8.93036C20.557 11.5353 20.5031 14.1543 20.1994 16.7515C19.9845 18.5884 18.5096 20.0271 16.6832 20.2312C13.5957 20.5763 10.4043 20.5763 7.31673 20.2312C5.49035 20.0271 4.01545 18.5884 3.8006 16.7515C3.43137 13.5945 3.43137 10.4053 3.8006 7.24843C4.01545 5.41146 5.49035 3.97282 7.31673 3.7687C10.4043 3.42362 13.5957 3.42362 16.6832 3.7687C17.3265 3.84059 17.9261 4.06562 18.4425 4.40725C18.5441 4.47448 18.5542 4.61732 18.468 4.70346L17.6652 5.50635C17.5995 5.57202 17.4976 5.58307 17.4158 5.5392C17.1423 5.39271 16.8385 5.29539 16.5166 5.25942C13.5398 4.92671 10.4602 4.92671 7.48334 5.25942Z"
      fill="#000000"
    />
    <Path
      d="M21.0303 6.03028C21.3232 5.73738 21.3232 5.26251 21.0303 4.96962C20.7374 4.67672 20.2625 4.67672 19.9696 4.96962L11.5 13.4393L9.0303 10.9696C8.73741 10.6767 8.26253 10.6767 7.96964 10.9696C7.67675 11.2625 7.67675 11.7374 7.96964 12.0303L10.9696 15.0303C11.2625 15.3232 11.7374 15.3232 12.0303 15.0303L21.0303 6.03028Z"
      fill="#000000"
    />
  </Svg>
);

export type IconName =
  | "add"
  | "uncheckedBox"
  | "edit"
  | "delete"
  | "home"
  | "completed"
  | "checkedBox";

const Icons = ({
  name,
  color,
  height,
  width,
}: IconProps & { name: IconName }) => {
  switch (name) {
    case "add":
      return <Add color={color} height={height} width={width} />;
    case "uncheckedBox":
      return <UncheckedBox color={color} height={height} width={width} />;

    case "checkedBox":
      return <CheckedBox color={color} height={height} width={width} />;
    case "edit":
      return <Edit color={color} height={height} width={width} />;
    case "delete":
      return <Delete color={color} height={height} width={width} />;

    case "home":
      return <Home color={color} height={height} width={width} />;
    case "completed":
      return <Completed color={color} height={height} width={width} />;
  }
};

export default Icons;
