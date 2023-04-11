(function() { const icons = {
	"material/device/access-alarm": "M44 11.44l-9.19-7.71-2.57 3.06 9.19 7.71L44 11.44zM15.76 6.78l-2.57-3.06L4 11.43l2.57 3.06 9.19-7.71zM25 16h-3v12l9.49 5.71L33 31.24l-8-4.74V16zm-1.01-8C14.04 8 6 16.06 6 26s8.04 18 17.99 18S42 35.94 42 26 33.94 8 23.99 8zM24 40c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.26 14-14 14z",
	"material/device/access-alarms": "M44 11.5l-9.2-7.7-2.6 3.1 9.2 7.7 2.6-3.1zM15.7 6.8l-2.6-3.1L4 11.5l2.6 3.1 9.1-7.8zM25 16h-3v12l9.5 5.7 1.5-2.5-8-4.7V16zm-1-8C14 8 6 16.1 6 26s8 18 18 18c9.9 0 18-8.1 18-18S33.9 8 24 8zm0 32c-7.7 0-14-6.3-14-14s6.3-14 14-14 14 6.3 14 14c0 7.8-6.3 14-14 14z",
	"material/device/access-time": "M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20C35.04 44 44 35.05 44 24S35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm1-26h-3v12l10.49 6.3L34 29.84l-9-5.34z",
	"material/device/add-alarm": "M15.76 6.78l-2.57-3.06L4 11.43l2.57 3.06 9.19-7.71zM44 11.44l-9.19-7.71-2.57 3.06 9.19 7.71L44 11.44zM23.99 8C14.04 8 6 16.06 6 26s8.04 18 17.99 18S42 35.94 42 26 33.94 8 23.99 8zM24 40c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.26 14-14 14zm2-22h-4v6h-6v4h6v6h4v-6h6v-4h-6v-6z",
	"material/device/airplanemode-active": "M42 32v-4L26 18V7c0-1.66-1.34-3-3-3s-3 1.34-3 3v11L4 28v4l16-5v11l-4 3v3l7-2 7 2v-3l-4-3V27l16 5z",
	"material/device/airplanemode-inactive": "M26 18V7c0-1.66-1.34-3-3-3s-3 1.34-3 3v7.36l15.65 15.65L42 32v-4L26 18zM6 10.55l9.97 9.97L4 28v4l16-5v11l-4 3v3l7-2 7 2v-3l-4-3v-7.45L37.45 42 40 39.45 8.55 8 6 10.55z",
	"material/device/battery-20": "M14 34v7.33A2.67 2.67 0 0 0 16.67 44h14.67a2.67 2.67 0 0 0 2.67-2.67V34H14z",
	"material/device/battery-30": "M34 10.67C34 9.19 32.81 8 31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V30h20V10.67z",
	"material/device/battery-50": "M34 10.67C34 9.19 32.81 8 31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V26h20V10.67z",
	"material/device/battery-60": "M34 10.67C34 9.19 32.81 8 31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V22h20V10.67z",
	"material/device/battery-80": "M34 10.67C34 9.19 32.81 8 31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V18h20v-7.33z",
	"material/device/battery-90": "M34 10.67C34 9.19 32.81 8 31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V16h20v-5.33z",
	"material/device/battery-alert": "M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67v30.67a2.67 2.67 0 0 0 2.67 2.67h14.67a2.67 2.67 0 0 0 2.67-2.67V10.67A2.678 2.678 0 0 0 31.33 8zM26 36h-4v-4h4v4zm0-8h-4V18h4v10z",
	"material/device/battery-charging-20": "M22 40v-6h-8v7.33A2.67 2.67 0 0 0 16.67 44h14.67a2.67 2.67 0 0 0 2.67-2.67V34h-8.8L22 40z",
	"material/device/battery-charging-30": "M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V29h4l8-15v11h4l-2.13 4H34V10.67C34 9.19 32.81 8 31.33 8z",
	"material/device/battery-charging-50": "M28.93 27L22 40V29h-4l1.07-2H14v14.33A2.67 2.67 0 0 0 16.67 44h14.67a2.67 2.67 0 0 0 2.67-2.67V27h-5.08z",
	"material/device/battery-charging-60": "M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V22h7.73L26 14v8h8V10.67C34 9.19 32.81 8 31.33 8z",
	"material/device/battery-charging-80": "M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V18h9.87L26 14v4h8v-7.33C34 9.19 32.81 8 31.33 8z",
	"material/device/battery-charging-90": "M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67V16h10.93L26 14v2h8v-5.33C34 9.19 32.81 8 31.33 8z",
	"material/device/battery-charging-full": "M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67v30.67a2.67 2.67 0 0 0 2.67 2.67h14.67a2.67 2.67 0 0 0 2.67-2.67V10.67A2.678 2.678 0 0 0 31.33 8zM22 40V29h-4l8-15v11h4l-8 15z",
	"material/device/battery-full": "M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67v30.67a2.67 2.67 0 0 0 2.67 2.67h14.67a2.67 2.67 0 0 0 2.67-2.67V10.67A2.678 2.678 0 0 0 31.33 8z",
	"material/device/battery-std": "M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67v30.67a2.67 2.67 0 0 0 2.67 2.67h14.67a2.67 2.67 0 0 0 2.67-2.67V10.67A2.678 2.678 0 0 0 31.33 8z",
	"material/device/battery-unknown": "M31.33 8H28V4h-8v4h-3.33C15.19 8 14 9.19 14 10.67v30.67a2.67 2.67 0 0 0 2.67 2.67h14.67a2.67 2.67 0 0 0 2.67-2.67V10.67A2.678 2.678 0 0 0 31.33 8zM25.9 35.9h-3.8v-3.8h3.8v3.8zm2.7-10.52s-.76.84-1.34 1.42c-.97.97-1.66 2.29-1.66 3.2h-3.2c0-1.66.92-3.05 1.86-3.99l1.86-1.89A2.996 2.996 0 0 0 24 19c-1.66 0-3 1.34-3 3h-3c0-3.31 2.69-6 6-6s6 2.69 6 6c0 1.32-.53 2.52-1.4 3.38z",
	"material/device/bluetooth-connected": "M14 24l-4-4-4 4 4 4 4-4zm21.41-8.59L24 4h-2v15.17L12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 22 28.83V44h2l11.41-11.41L26.83 24l8.58-8.59zM26 11.66l3.76 3.76L26 19.17v-7.51zm3.76 20.93L26 36.34v-7.52l3.76 3.77zM38 20l-4 4 4 4 4-4-4-4z",
	"material/device/bluetooth-disabled": "M26 11.83l3.76 3.76-3.2 3.2 2.83 2.83 6.03-6.03L24 4.17h-2v10.06l4 4v-6.4zM10.83 8.17L8 11l13.17 13.17L10 35.34l2.83 2.83L22 29v15.17h2l8.59-8.59 4.59 4.59L40 37.34 10.83 8.17zM26 36.51V29l3.76 3.76L26 36.51z",
	"material/device/bluetooth-searching": "M28.48 24.02l4.64 4.64c.56-1.45.88-3.02.88-4.66 0-1.63-.31-3.19-.86-4.63l-4.66 4.65zm10.58-10.59l-2.53 2.53c1.25 2.41 1.97 5.14 1.97 8.05s-.72 5.63-1.97 8.05l2.4 2.4c1.93-3.1 3.07-6.73 3.07-10.63 0-3.82-1.09-7.37-2.94-10.4zm-7.65 1.98L20 4h-2v15.17L8.83 10 6 12.83 17.17 24 6 35.17 8.83 38 18 28.83V44h2l11.41-11.41L22.83 24l8.58-8.59zM22 11.66l3.76 3.76L22 19.17v-7.51zm3.76 20.93L22 36.34v-7.52l3.76 3.77z",
	"material/device/bluetooth": "M35.41 15.41L24 4h-2v15.17L12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 22 28.83V44h2l11.41-11.41L26.83 24l8.58-8.59zM26 11.66l3.76 3.76L26 19.17v-7.51zm3.76 20.93L26 36.34v-7.52l3.76 3.77z",
	"material/device/brightness-auto": "M21.7 25.3h4.6L24 18l-2.3 7.3zM40 17.37V8h-9.37L24 1.37 17.37 8H8v9.37L1.37 24 8 30.63V40h9.37L24 46.63 30.63 40H40v-9.37L46.63 24 40 17.37zM28.6 32l-1.4-4h-6.4l-1.4 4h-3.8L22 14h4l6.4 18h-3.8z",
	"material/device/brightness-high": "M40 17.37V8h-9.37L24 1.37 17.37 8H8v9.37L1.37 24 8 30.63V40h9.37L24 46.63 30.63 40H40v-9.37L46.63 24 40 17.37zM24 36c-6.63 0-12-5.37-12-12s5.37-12 12-12 12 5.37 12 12-5.37 12-12 12zm0-20c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z",
	"material/device/brightness-low": "M40 30.63L46.63 24 40 17.37V8h-9.37L24 1.37 17.37 8H8v9.37L1.37 24 8 30.63V40h9.37L24 46.63 30.63 40H40v-9.37zM24 36c-6.63 0-12-5.37-12-12s5.37-12 12-12 12 5.37 12 12-5.37 12-12 12z",
	"material/device/brightness-medium": "M40 30.63L46.63 24 40 17.37V8h-9.37L24 1.37 17.37 8H8v9.37L1.37 24 8 30.63V40h9.37L24 46.63 30.63 40H40v-9.37zM24 36V12c6.63 0 12 5.37 12 12s-5.37 12-12 12z",
	"material/device/data-usage": "M26 4.1v6.06c6.78.97 12 6.79 12 13.84 0 1.79-.35 3.5-.96 5.07l5.2 3.07C43.35 29.65 44 26.91 44 24c0-10.37-7.89-18.89-18-19.9zM24 38c-7.73 0-14-6.27-14-14 0-7.05 5.22-12.87 12-13.84V4.1C11.88 5.1 4 13.63 4 24c0 11.05 8.94 20 19.99 20 6.62 0 12.47-3.23 16.11-8.18l-5.19-3.06A13.952 13.952 0 0 1 24 38z",
	"material/device/developer-mode": "M14 10.17h20v4h4v-8c0-2.21-1.79-3.98-4-3.98l-20-.02c-2.21 0-4 1.79-4 4v8h4v-4zm16.83 23.17L40 24.17 30.83 15 28 17.83l6.34 6.34L28 30.52l2.83 2.82zM20 30.52l-6.34-6.34L20 17.83 17.17 15 8 24.17l9.17 9.17L20 30.52zm14 7.65H14v-4h-4v8c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4v-8h-4v4z",
	"material/device/devices": "M8 12h36V8H8c-2.21 0-4 1.79-4 4v22H0v6h28v-6H8V12zm38 4H34c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V18c0-1.1-.9-2-2-2zm-2 18h-8V20h8v14z",
	"material/device/dvr": "M42 6H6c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h10v4h16v-4h10c2.21 0 3.98-1.79 3.98-4L46 10c0-2.21-1.79-4-4-4zm0 28H6V10h36v24zm-4-18H16v4h22v-4zm0 8H16v4h22v-4zm-24-8h-4v4h4v-4zm0 8h-4v4h4v-4z",
	"material/device/gps-fixed": "M24 16c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm17.88 6C40.96 13.66 34.34 7.04 26 6.12V2h-4v4.12C13.66 7.04 7.04 13.66 6.12 22H2v4h4.12c.92 8.34 7.54 14.96 15.88 15.88V46h4v-4.12c8.34-.92 14.96-7.54 15.88-15.88H46v-4h-4.12zM24 38c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.27 14-14 14z",
	"material/device/gps-not-fixed": "M41.88 22C40.96 13.66 34.34 7.04 26 6.12V2h-4v4.12C13.66 7.04 7.04 13.66 6.12 22H2v4h4.12c.92 8.34 7.54 14.96 15.88 15.88V46h4v-4.12c8.34-.92 14.96-7.54 15.88-15.88H46v-4h-4.12zM24 38c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.27 14-14 14z",
	"material/device/gps-off": "M41.88 22C40.96 13.66 34.34 7.04 26 6.12V2h-4v4.12c-2.26.25-4.38.93-6.31 1.94l3 3C20.33 10.38 22.12 10 24 10c7.73 0 14 6.27 14 14 0 1.88-.38 3.67-1.05 5.31l3 3c1.01-1.93 1.68-4.05 1.93-6.31H46v-4h-4.12zM6 8.55l4.07 4.07A17.895 17.895 0 0 0 6.12 22H2v4h4.12c.92 8.34 7.54 14.96 15.88 15.88V46h4v-4.12c3.54-.39 6.76-1.82 9.38-3.96L39.45 42 42 39.46 8.55 6 6 8.55zm26.53 26.53A13.916 13.916 0 0 1 24 38c-7.73 0-14-6.27-14-14 0-3.22 1.1-6.17 2.92-8.53l19.61 19.61z",
	"material/device/graphic-eq": "M14 36h4V12h-4v24zm8 8h4V4h-4v40zM6 28h4v-8H6v8zm24 8h4V12h-4v24zm8-16v8h4v-8h-4z",
	"material/device/location-disabled": "M41.88 22.17C40.96 13.83 34.34 7.21 26 6.29V2.17h-4v4.12c-2.26.25-4.38.93-6.31 1.94l3 3c1.64-.67 3.43-1.05 5.31-1.05 7.73 0 14 6.27 14 14 0 1.88-.38 3.67-1.05 5.31l3 3c1.01-1.93 1.68-4.05 1.93-6.31H46v-4h-4.12zM6 8.72l4.07 4.07c-2.14 2.62-3.57 5.84-3.96 9.38H2v4h4.12c.92 8.34 7.54 14.96 15.88 15.88v4.12h4v-4.12c3.54-.39 6.76-1.82 9.38-3.96l4.08 4.08L42 39.63 8.55 6.17 6 8.72zm26.53 26.53A13.937 13.937 0 0 1 24 38.17c-7.73 0-14-6.27-14-14 0-3.22 1.1-6.17 2.92-8.53l19.61 19.61z",
	"material/device/location-searching": "M41.88 22.17C40.96 13.83 34.34 7.21 26 6.29V2.17h-4v4.12c-8.34.92-14.96 7.54-15.88 15.88H2v4h4.12c.92 8.34 7.54 14.96 15.88 15.88v4.12h4v-4.12c8.34-.92 14.96-7.54 15.88-15.88H46v-4h-4.12zM24 38.17c-7.73 0-14-6.27-14-14s6.27-14 14-14 14 6.27 14 14-6.27 14-14 14z",
	"material/device/network-cell": "M4 44h40V4z",
	"material/device/network-wifi": "M24.02 42.98L47.28 14c-.9-.68-9.85-8-23.28-8S1.62 13.32.72 14l23.26 28.98.02.02.02-.02z",
	"material/device/nfc": "M40 4.17H8c-2.21 0-4 1.79-4 4v32c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4v-32c0-2.21-1.79-4-4-4zm0 36H8v-32h32v32zm-4-28H26c-2.21 0-4 1.79-4 4v4.55c-1.19.69-2 1.97-2 3.45 0 2.21 1.79 4 4 4s4-1.79 4-4c0-1.48-.81-2.75-2-3.45v-4.55h6v16H16v-16h4v-4h-8v24h24v-24z",
	"material/device/screen-lock-landscape": "M42 10H6c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4zm-4 24H10V14h28v20zm-18-2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2v-2c0-2.21-1.79-4-4-4s-4 1.79-4 4v2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm1.6-12a2.4 2.4 0 0 1 4.8 0v2h-4.8v-2z",
	"material/device/screen-lock-portrait": "M20 32h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2v-2c0-2.21-1.79-4-4-4s-4 1.79-4 4v2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm1.6-12a2.4 2.4 0 0 1 4.8 0v2h-4.8v-2zM34 2H14c-2.21 0-4 1.79-4 4v36c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm0 36H14V10h20v28z",
	"material/device/screen-lock-rotation": "M46.51 25.54l-5.14-5.14-2.83 2.83 4.43 4.43-11.31 11.31L9.03 16.34 20.34 5.03l4.19 4.19 2.83-2.83-4.9-4.9a3 3 0 0 0-4.24 0L5.49 14.22a3 3 0 0 0 0 4.24L29.53 42.5a3 3 0 0 0 4.24 0L46.5 29.77a2.979 2.979 0 0 0 .01-4.23zM16.93 40.97C10.4 37.87 5.71 31.52 5 24H2c1.02 12.32 11.32 22 23.9 22 .45 0 .88-.04 1.33-.07L19.6 38.3l-2.67 2.67zM32 18h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2V5c0-2.76-2.24-5-5-5s-5 2.24-5 5v1a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2zm1.6-13c0-1.88 1.52-3.4 3.4-3.4s3.4 1.52 3.4 3.4v1h-6.8V5z",
	"material/device/screen-rotation": "M32.97 5.03C39.5 8.13 44.19 14.48 44.9 22h3C46.88 9.68 36.58 0 24 0c-.45 0-.88.04-1.33.07L30.3 7.7l2.67-2.67zM20.46 3.49a3 3 0 0 0-4.24 0L3.49 16.22a3 3 0 0 0 0 4.24L27.53 44.5a3 3 0 0 0 4.24 0L44.5 31.77a3 3 0 0 0 0-4.24L20.46 3.49zm9.2 38.89L5.61 18.34 18.34 5.61l24.04 24.04-12.72 12.73zm-14.63.59C8.5 39.87 3.81 33.52 3.1 26h-3C1.12 38.32 11.42 48 24 48c.45 0 .88-.04 1.33-.07L17.7 40.3l-2.67 2.67z",
	"material/device/sd-storage": "M36 4H20L8.04 16 8 40c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zM24 16h-4V8h4v8zm6 0h-4V8h4v8zm6 0h-4V8h4v8z",
	"material/device/settings-system-daydream": "M18 32h13c2.76 0 5-2.24 5-5s-2.24-5-5-5h-.1c-.49-3.39-3.38-6-6.9-6-2.8 0-5.2 1.66-6.32 4.04h-.33A5.994 5.994 0 0 0 12 26c0 3.31 2.69 6 6 6zM42 6H6c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h36c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm0 32.03H6V9.97h36v28.06z",
	"material/device/signal-cellular-0-bar": "M4 44h40V4z",
	"material/device/signal-cellular-1-bar": "M4 44h40V4z",
	"material/device/signal-cellular-2-bar": "M4 44h40V4z",
	"material/device/signal-cellular-3-bar": "M4 44h40V4z",
	"material/device/signal-cellular-4-bar": "M4 44h40V4z",
	"material/device/signal-cellular-connected-no-internet-0-bar": "M44 16V4L4 44h32V16z",
	"material/device/signal-cellular-connected-no-internet-1-bar": "M44 16V4L4 44h32V16z",
	"material/device/signal-cellular-connected-no-internet-2-bar": "M44 16V4L4 44h32V16z",
	"material/device/signal-cellular-connected-no-internet-3-bar": "M44 16V4L4 44h32V16z",
	"material/device/signal-cellular-connected-no-internet-4-bar": "M40 36h4V20h-4v16zm0 8h4v-4h-4v4zM4 44h32V16h8V4L4 44z",
	"material/device/signal-cellular-no-sim": "M37.98 10c0-2.21-1.77-4-3.98-4H20l-4.68 4.68L38 33.36 37.98 10zM7.3 7.76L4.76 10.3 10 15.55V38c0 2.21 1.79 4 4 4h20.02c.7 0 1.35-.2 1.92-.51l3.76 3.76 2.54-2.55L7.3 7.76z",
	"material/device/signal-cellular-null": "M40 13.66V40H13.66L40 13.66M44 4L4 44h40V4z",
	"material/device/signal-cellular-off": "M42 2L24.82 19.18 42 36.36V2zM9.55 9L7 11.54l12.73 12.73L2 42h35.45l4 4L44 43.45 9.55 9z",
	"material/device/signal-wifi-0-bar": "M24.02 42.98L47.28 14c-.9-.68-9.85-8-23.28-8C10.57 6 1.62 13.32.72 14l23.26 28.98.02.02.02-.02z",
	"material/device/signal-wifi-1-bar-lock": "M41 19c.7 0 1.4.1 2.1.2l4.2-5.2c-.9-.7-9.8-8-23.3-8S1.6 13.3.7 14L24 43l7-8.7V29c0-5.5 4.5-10 10-10z",
	"material/device/signal-wifi-1-bar": "M24.02 42.98L47.28 14c-.9-.68-9.85-8-23.28-8S1.62 13.32.72 14l23.26 28.98.02.02.02-.02z",
	"material/device/signal-wifi-2-bar-lock": "M41 19c.7 0 1.4.1 2.1.2l4.2-5.2c-.9-.7-9.9-8-23.3-8S1.6 13.3.7 14L24 43l7-8.7V29c0-5.5 4.5-10 10-10z",
	"material/device/signal-wifi-2-bar": "M24.02 42.98L47.28 14c-.9-.68-9.85-8-23.28-8S1.62 13.32.72 14l23.26 28.98.02.02.02-.02z",
	"material/device/signal-wifi-3-bar-lock": "M41 19c.7 0 1.4.1 2.1.2l4.2-5.2c-.9-.7-9.8-8-23.3-8S1.6 13.3.7 14L24 43l7-8.7V29c0-5.5 4.5-10 10-10z",
	"material/device/signal-wifi-3-bar": "M24.02 42.98L47.28 14c-.9-.68-9.85-8-23.28-8S1.62 13.32.72 14l23.26 28.98.02.02.02-.02z",
	"material/device/signal-wifi-4-bar-lock": "M41 19c.72 0 1.41.08 2.09.22L47.28 14c-.9-.68-9.85-8-23.28-8S1.62 13.32.72 14l23.26 28.98.02.02.02-.02 6.98-8.7V29c0-5.52 4.48-10 10-10zm5 13v-3c0-2.76-2.24-5-5-5s-5 2.24-5 5v3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-2 0h-6v-3c0-1.66 1.34-3 3-3s3 1.34 3 3v3z",
	"material/device/signal-wifi-4-bar": "M24.02 42.98L47.28 14c-.9-.68-9.85-8-23.28-8S1.62 13.32.72 14l23.26 28.98.02.02.02-.02z",
	"material/device/signal-wifi-off": "M47.28 14c-.9-.68-9.85-8-23.28-8-3.01 0-5.78.38-8.3.96L36.36 27.6 47.28 14zM6.55 2.89L4 5.44l4.11 4.11c-4.28 1.97-6.92 4.1-7.39 4.46l23.26 28.98.02.01.02-.02 7.8-9.72 6.63 6.63L41 37.34 6.55 2.89z",
	"material/device/storage": "M4 40h40v-8H4v8zm4-6h4v4H8v-4zM4 8v8h40V8H4zm8 6H8v-4h4v4zM4 28h40v-8H4v8zm4-6h4v4H8v-4z",
	"material/device/usb": "M30 14v8h2v4h-6V10h4l-6-8-6 8h4v16h-6v-4.14c1.41-.73 2.4-2.16 2.4-3.86a4.4 4.4 0 0 0-8.8 0c0 1.7.99 3.13 2.4 3.86V26c0 2.21 1.79 4 4 4h6v6.1c-1.42.73-2.4 2.19-2.4 3.9a4.4 4.4 0 0 0 8.8 0c0-1.71-.98-3.17-2.4-3.9V30h6c2.21 0 4-1.79 4-4v-4h2v-8h-8z",
	"material/device/wallpaper": "M8 8h14V4H8C5.79 4 4 5.79 4 8v14h4V8zm12 18l-8 10h24l-6-8-4.06 5.42L20 26zm14-9c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm6-13H26v4h14v14h4V8c0-2.21-1.79-4-4-4zm0 36H26v4h14c2.21 0 4-1.79 4-4V26h-4v14zM8 26H4v14c0 2.21 1.79 4 4 4h14v-4H8V26z",
	"material/device/widgets": "M26 26v16h16V26H26zM6 42h16V26H6v16zM6 6v16h16V6H6zm27.31-2.63L22 14.69 33.31 26l11.31-11.31L33.31 3.37z",
	"material/device/wifi-lock": "M41 19c.56 0 1.09.08 1.63.16L48 12c-6.69-5.02-15-8-24-8S6.69 6.98 0 12l24 32 7-9.33V29c0-5.52 4.48-10 10-10zm5 13v-3c0-2.76-2.24-5-5-5s-5 2.24-5 5v3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-2 0h-6v-3c0-1.66 1.34-3 3-3s3 1.34 3 3v3z",
	"material/device/wifi-tethering": "M24 22c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm12 4c0-6.63-5.37-12-12-12s-12 5.37-12 12c0 4.44 2.41 8.3 5.99 10.38l2.02-3.48C17.62 31.51 16 28.96 16 26c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.62 5.51-4.01 6.89l2.02 3.48C33.59 34.3 36 30.44 36 26zM24 6C12.95 6 4 14.95 4 26c0 7.39 4.02 13.83 9.99 17.29l2-3.46C11.22 37.07 8 31.91 8 26c0-8.84 7.16-16 16-16s16 7.16 16 16c0 5.91-3.22 11.07-7.99 13.84l2 3.46C39.98 39.83 44 33.39 44 26c0-11.05-8.96-20-20-20z",
};
if (JSC) {
	JSC.internal.registerIcons(icons);
}

})();