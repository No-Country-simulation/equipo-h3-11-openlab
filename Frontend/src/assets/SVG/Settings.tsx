const Settings = (props:any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
      >
        <mask
          id="a"
          width={24}
          height={24}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <path
            fill="#fff"
            stroke="#fff"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.142 20.585a10.001 10.001 0 0 1-4.348-2.652 3 3 0 0 0-2.591-4.918A10.002 10.002 0 0 1 1 11c0-1.045.16-2.053.458-3H1.5a3 3 0 0 0 2.692-4.325A10 10 0 0 1 8.326 1.36a3 3 0 0 0 5.348 0 10 10 0 0 1 4.134 2.314A3.001 3.001 0 0 0 20.541 8a10.06 10.06 0 0 1 .255 5.015 3 3 0 0 0-2.591 4.919 10 10 0 0 1-4.348 2.651 3 3 0 0 0-5.716 0Z"
          />
          <path
            fill="#000"
            stroke="#000"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 14.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
          />
        </mask>
        <g mask="url(#a)">
          <path fill="#1A1A1A" d="M-1-1h24v24H-1V-1Z" />
        </g>
      </svg>
    )
    
export default Settings
