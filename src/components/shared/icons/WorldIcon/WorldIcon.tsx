import React from "react";
import { IconProps } from "../Icons";

export default function WorldIcon({
  width,
  height,
  fill,
}: IconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={fill}
    >
      <path d="m24 12c0-.002 0-.004 0-.006 0-3.551-1.546-6.74-4.001-8.933l-.012-.01c-.031-.033-.064-.062-.101-.087l-.002-.001c-2.095-1.84-4.859-2.962-7.886-2.962-3.032 0-5.8 1.126-7.91 2.984l.013-.011c-.026.02-.049.041-.07.065v.001c-2.478 2.205-4.031 5.403-4.031 8.963 0 3.55 1.544 6.739 3.997 8.933l.012.01c0 .003.002.005.005.005.031.035.065.065.101.092l.002.001c2.094 1.837 4.857 2.958 7.881 2.958 3.032 0 5.801-1.126 7.911-2.984l-.013.011c.03-.022.056-.045.08-.07 2.475-2.202 4.026-5.395 4.026-8.951 0-.002 0-.005 0-.007zm-4.462 7.805c-.576-.468-1.223-.897-1.909-1.262l-.065-.032c.613-1.767.982-3.804 1.017-5.923v-.016h4.261c-.156 2.852-1.391 5.388-3.301 7.23zm-6.966-1.505c1.283.069 2.482.351 3.588.81l-.072-.026c-.886 2.02-2.133 3.408-3.516 3.713zm0-1.144v-4.584h4.868c-.043 1.961-.383 3.828-.976 5.578l.039-.131c-1.157-.484-2.498-.795-3.903-.862l-.027-.001zm0-5.728v-4.584c1.431-.069 2.772-.379 4.007-.891l-.079.029c.555 1.619.896 3.485.94 5.425v.021zm0-5.728v-4.495c1.383.305 2.63 1.687 3.516 3.713-1.034.43-2.233.711-3.487.781zm2.854-4c1.238.419 2.312 1.009 3.258 1.752l-.023-.018c-.443.348-.94.676-1.464.961l-.056.028c-.449-1.047-1.025-1.947-1.724-2.737l.009.011zm-4-.492v4.492c-1.283-.069-2.482-.35-3.588-.81l.072.026c.89-2.02 2.135-3.407 3.518-3.712zm-4.568 3.212c-.58-.315-1.077-.642-1.544-1.007l.024.018c.923-.726 1.996-1.315 3.158-1.712l.076-.023c-.689.778-1.265 1.678-1.689 2.658l-.025.065zm4.57 2.423v4.584h-4.868c.044-1.961.385-3.827.979-5.577l-.039.131c1.156.483 2.497.794 3.901.861zm0 5.728v4.584c-1.431.069-2.772.379-4.007.891l.079-.029c-.555-1.618-.896-3.485-.94-5.425v-.021zm0 5.728v4.495c-1.383-.305-2.63-1.687-3.516-3.713 1.034-.43 2.233-.71 3.487-.78l.029-.001zm-2.85 4c-1.238-.418-2.311-1.006-3.258-1.748l.024.018c.443-.348.94-.676 1.464-.961l.056-.028c.445 1.047 1.022 1.947 1.723 2.733l-.009-.01zm8.564-2.72c.58.315 1.077.642 1.544 1.007l-.024-.018c-.923.726-1.996 1.315-3.158 1.712l-.076.023c.689-.778 1.265-1.677 1.689-2.657l.025-.065zm5.7-8.151h-4.261c-.035-2.135-.404-4.172-1.058-6.078l.041.138c.751-.399 1.397-.828 1.997-1.312l-.024.018c1.913 1.845 3.148 4.381 3.303 7.205l.001.028zm-18.38-7.233c.576.468 1.223.897 1.909 1.262l.065.032c-.613 1.767-.982 3.804-1.017 5.923v.016h-4.262c.156-2.852 1.391-5.388 3.301-7.23l.003-.003zm-3.304 8.377h4.261c.035 2.135.404 4.172 1.058 6.078l-.041-.138c-.751.399-1.397.828-1.997 1.312l.024-.018c-1.913-1.845-3.148-4.381-3.303-7.205l-.001-.028z" />
    </svg>
  );
}
