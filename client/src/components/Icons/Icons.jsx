import styles from "./Icons.module.css";

function Icons({ type, iconClasses }) {
  switch (type) {
    case "wifi":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
          className={`${styles.icons} ${iconClasses}`}
        >
          <path d="M480-120q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm0-440q75 0 142.5 24T745-470q20 15 20.5 39.5T748-388q-17 17-42 17.5T661-384q-38-26-84-41t-97-15q-51 0-97 15t-84 41q-20 14-45 13t-42-18q-17-18-17-42.5t20-39.5q55-42 122.5-65.5T480-560Zm0-240q125 0 235.5 41T914-643q20 17 21 42t-17 43q-17 17-42 17.5T831-556q-72-59-161.5-91.5T480-680q-100 0-189.5 32.5T129-556q-20 16-45 15.5T42-558q-18-18-17-43t21-42q88-75 198.5-116T480-800Z" />
        </svg>
      );
    case "parking":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
          className={`${styles.icons} ${iconClasses}`}
        >
          <path d="M240-200v20q0 25-17.5 42.5T180-120q-25 0-42.5-17.5T120-180v-286q0-7 1-14t3-13l75-213q8-24 29-39t47-15h410q26 0 47 15t29 39l75 213q2 6 3 13t1 14v286q0 25-17.5 42.5T780-120q-25 0-42.5-17.5T720-180v-20H240Zm-8-360h496l-42-120H274l-42 120Zm68 240q25 0 42.5-17.5T360-380q0-25-17.5-42.5T300-440q-25 0-42.5 17.5T240-380q0 25 17.5 42.5T300-320Zm360 0q25 0 42.5-17.5T720-380q0-25-17.5-42.5T660-440q-25 0-42.5 17.5T600-380q0 25 17.5 42.5T660-320Z" />
        </svg>
      );
    case "tv":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
          className={`${styles.icons} ${iconClasses}`}
        >
          <path d="M160-200q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v40q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160v-40H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z" />
        </svg>
      );
    case "pets":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
          className={`${styles.icons} ${iconClasses}`}
        >
          <path d="M180-475q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180-160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm240 0q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180 160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM266-75q-45 0-75.5-34.5T160-191q0-52 35.5-91t70.5-77q29-31 50-67.5t50-68.5q22-26 51-43t63-17q34 0 63 16t51 42q28 32 49.5 69t50.5 69q35 38 70.5 77t35.5 91q0 47-30.5 81.5T694-75q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z" />
        </svg>
      );
    case "food":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
          className={`${styles.icons} ${iconClasses}`}
        >
          <path d="M280-600v-240q0-17 11.5-28.5T320-880q17 0 28.5 11.5T360-840v240h40v-240q0-17 11.5-28.5T440-880q17 0 28.5 11.5T480-840v240q0 56-34.5 98T360-446v326q0 17-11.5 28.5T320-80q-17 0-28.5-11.5T280-120v-326q-51-14-85.5-56T160-600v-240q0-17 11.5-28.5T200-880q17 0 28.5 11.5T240-840v240h40Zm400 200h-80q-17 0-28.5-11.5T560-440v-240q0-70 51.5-135T718-880q18 0 30 14t12 33v713q0 17-11.5 28.5T720-80q-17 0-28.5-11.5T680-120v-280Z" />
        </svg>
      );
    case "entrance":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
          className={`${styles.icons} ${iconClasses}`}
        >
          <path d="M440-440q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM280-120v-80l240-40v-445q0-15-9-27t-23-14l-208-34v-80l220 36q44 8 72 41t28 77v444q0 29-19 51.5T533-163l-253 43Zm0-80h400v-560H280v560Zm-120 80q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h40v-560q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v560h40q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Z" />
        </svg>
      );
    case "location":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
          className={`${styles.icons} ${iconClasses}`}
        >
          <path d="M480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 79q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 45-17.5 94.5t-51 103Q698-301 648-244T533-127q-11 10-25 15t-28 5Zm0-453Zm0 80q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Z" />
        </svg>
      );
    case "time":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
          className={`${styles.icons} ${iconClasses}`}
        >
          <path d="M520-496v-144q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v159q0 8 3 15.5t9 13.5l132 132q11 11 28 11t28-11q11-11 11-28t-11-28L520-496ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
        </svg>
      );
    case "person":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
          className={`${styles.icons} ${iconClasses}`}
        >
          <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Zm80 0h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
        </svg>
      );
    case "mail":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
          className={`${styles.icons} ${iconClasses}`}
        >
          <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm640-480L501-453q-5 3-10.5 4.5T480-447q-5 0-10.5-1.5T459-453L160-640v400h640v-400ZM480-520l320-200H160l320 200ZM160-640v10-59 1-32 32-.5 58.5-10 400-400Z" />
        </svg>
      );
    case "bin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
          className={`${styles.icons} ${iconClasses}`}
        >
          <path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM400-280q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280ZM280-720v520-520Z" />
        </svg>
      );

    default:
      throw new Error(`No such api exist as ${type}`);
  }
}

export default Icons;
