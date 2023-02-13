import React from 'react';

export enum IconTypes {
    filter,
    friends,
    home,
    logo,
    close,
    error,
}

type Props = {
    color?: string;
    size: number;
    iconType: IconTypes;
};

// Display an icon SVG
export default function Icon({ color = 'currentColor', size, iconType }: Props) {
    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            fill={iconType === IconTypes.error ? 'currentColor' : 'none'}
            stroke={color}
            xmlns="http://www.w3.org/2000/svg"
        >
            {getIconSvg(iconType, size)}
        </svg>
    );
}

function getIconSvg(iconType: IconTypes, size: number): JSX.Element {
    let svgContent = null;
    let initSize = null;

    switch (iconType) {
        case IconTypes.filter:
            svgContent = (
                <>
                    <path
                        d="M6 3.5H18"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle
                        cx="3"
                        cy="3.5"
                        r="2.25"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M13 10.5H0.999999"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle
                        cx="3"
                        cy="3"
                        r="2.25"
                        transform="matrix(-1 0 0 1 19 7.5)"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M6 17.5H18"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle
                        cx="3"
                        cy="17.5"
                        r="2.25"
                        strokeWidth="1.5"
                    />
                </>
            );
            break;
        case IconTypes.friends:
            svgContent = (
                <>
                    <circle
                        cx="16.7171"
                        cy="9.82941"
                        r="1.61164"
                        strokeWidth="0.75"
                    />
                    <path
                        d="M19.7632 15.328C19.7632 13.5725 18.3401 12.1494 16.5846 12.1494C15.8692 12.1494 15.2089 12.3858 14.6777 12.7847"
                        strokeWidth="0.85"
                        strokeLinecap="round"
                    />
                    <circle
                        cx="10.3575"
                        cy="8.92143"
                        r="3.13139"
                    />
                    <path
                        d="M15.8048 17.9998C15.8048 14.9915 13.3661 12.5527 10.3577 12.5527C7.34939 12.5527 4.91064 14.9915 4.91064 17.9998"
                        strokeLinecap="round"
                    />
                </>
            );
            break;
        case IconTypes.home:
            svgContent = (
                <>
                    <rect
                        x="4.43984"
                        y="4.43984"
                        width="15.12"
                        height="15.12"
                        rx="1.32"
                        stroke="#EAEAEA"
                        strokeWidth="1.2"
                    />
                    <path
                        d="M5 10.75L19 10.75"
                        stroke="#EAEAEA"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M9.75 11L9.75 19"
                        stroke="#EAEAEA"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                    />
                </>
            );
            break;
        case IconTypes.logo:
            svgContent = (
                <>
                    <path
                        d="M20 10.0087C20 15.5381 15.4853 20.0087 9.97059 20.0087C8.11765 20.0087 6.39706 19.5087 4.91177 18.6263C4.76471 18.5969 4.52941 18.6557 4.42647 18.6851C3.85294 18.8175 3.17647 19.0087 2.91176 19.0822C1.97059 19.244 1.51471 19.1704 1.26471 19.0087C1.05882 18.8763 1.10294 18.7146 1.11765 18.6851C1.14706 18.5969 1.19118 18.5675 1.26471 18.4793C1.36765 18.3763 1.54412 18.244 1.83824 17.8469C2.22059 17.2587 2.30882 16.6116 2.29412 16.3469C0.852941 14.6263 0 12.4057 0 10.0087C0 4.47926 4.45588 0.0380859 9.97059 0.0380859C15.4853 0.0380859 20 4.47926 20 10.0087ZM9.97059 17.6263C14.1618 17.6263 17.6176 14.1999 17.6176 10.0087C17.6176 5.8175 14.1618 2.42044 9.97059 2.42044C5.77941 2.42044 2.39706 5.8175 2.39706 10.0087C2.39706 14.1999 5.77941 17.6263 9.97059 17.6263Z"
                        fill="#274769"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.4853 2.43515C14.7353 0.935145 12.4706 0.0380859 9.98529 0.0380859C4.47059 0.0380859 0 4.50868 0 10.0381C0 12.4499 0.852941 14.6557 2.26471 16.3763C2.27941 16.6557 2.17647 17.2587 1.79412 17.8469C1.5 18.244 1.33824 18.391 1.23529 18.494C1.14706 18.5675 1.11765 18.6116 1.08824 18.6999C1.07353 18.7293 1.07353 18.9204 1.27941 19.0528C1.52941 19.2146 1.98529 19.2734 2.92647 19.1263C3.19118 19.0528 3.88235 18.8616 4.44118 18.7293C4.54412 18.6999 4.79412 18.641 4.92647 18.6704C6.41177 19.5528 8.14706 20.0528 9.98529 20.0528C12.6471 20.0528 15.0735 19.0087 16.8676 17.3028C17 17.1263 17.0294 16.8763 17.0441 16.8028C17.0735 16.1116 16.3971 15.7881 16.2647 15.7293C15.8529 15.5381 15.1471 15.6999 14.8824 15.8469C13.5588 16.9646 11.8529 17.641 9.98529 17.641C5.79412 17.641 2.41176 14.244 2.41176 10.0528C2.41176 5.86162 5.80882 2.46456 9.98529 2.46456C11.6765 2.46456 13.25 3.02338 14.5147 3.96456L14.5 3.94985C14.6176 4.03809 15.0147 4.28809 15.7353 4.00868C16.0588 3.89103 16.5882 3.46456 16.6471 3.18515C16.6912 2.92044 16.5735 2.61162 16.4853 2.43515Z"
                        fill="#3399FF"
                    />
                    <path
                        d="M13.6032 11.435C14.3826 11.435 15.0297 10.8026 15.0297 10.0085C15.0297 9.21438 14.3973 8.58203 13.6032 8.58203C12.8091 8.58203 12.1768 9.21438 12.1768 10.0085C12.1768 10.8026 12.8238 11.435 13.6032 11.435Z"
                        fill="#59A2F6"
                    />
                    <path
                        d="M9.97139 11.435C10.7508 11.435 11.3979 10.8026 11.3979 10.0085C11.3979 9.21438 10.7655 8.58203 9.97139 8.58203C9.17728 8.58203 8.54492 9.21438 8.54492 10.0085C8.54492 10.8026 9.17728 11.435 9.97139 11.435Z"
                        fill="#4480C2"
                    />
                    <path
                        d="M6.33858 11.435C7.11799 11.435 7.76505 10.8026 7.76505 10.0085C7.76505 9.21438 7.1327 8.58203 6.33858 8.58203C5.54446 8.58203 4.91211 9.21438 4.91211 10.0085C4.91211 10.7879 5.54446 11.435 6.33858 11.435Z"
                        fill="#375D86"
                    />
                </>
            );
            break;
        case IconTypes.close:
            svgContent = (
                <>
                    <path
                        d="M4 4L13 13"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M13 4L4 13"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </>
            );
            break;
        case IconTypes.error:
            initSize = 70;
            svgContent = (
                <>
                    <path
                        d="M3.6894531,62.6342773C5.7661133,65.9941406,9.3632812,68,13.3129883,68h43.3740234
	c3.949707,0,7.546875-2.0058594,9.6235352-5.3657227c2.0761719-3.359375,2.2612305-7.4741211,0.4951172-11.0068359
	L45.1186523,8.2539062C43.1899414,4.3964844,39.3129883,2,35,2s-8.1899414,2.3964844-10.1186523,6.2539062L3.1943359,51.6274414
	C1.4282227,55.1601562,1.6132812,59.2749023,3.6894531,62.6342773z M4.9833984,52.5219727L26.6704102,9.1484375
	C28.2822266,5.9248047,31.3959961,4,35,4s6.7177734,1.9248047,8.3295898,5.1484375l21.6870117,43.3735352
	c1.4541016,2.9077148,1.3017578,6.2954102-0.4077148,9.0610352C62.8999023,64.3486328,59.9384766,66,56.6870117,66H13.3129883
	c-3.2514648,0-6.2128906-1.6513672-7.921875-4.4169922C3.6816406,58.8173828,3.5292969,55.4296875,4.9833984,52.5219727z"
                    />
                    <path d="M34.9995117 47.3867188c2.6943359 0 4.8867188-2.1918945 4.8867188-4.8862305V23.1547852c0-2.6943359-2.1923828-4.8862305-4.8867188-4.8862305s-4.8862305 2.1918945-4.8862305 4.8862305v19.3457031C30.1132812 45.1948242 32.3051758 47.3867188 34.9995117 47.3867188zM32.1132812 23.1547852c0-1.5913086 1.2949219-2.8862305 2.8862305-2.8862305 1.5917969 0 2.8867188 1.2949219 2.8867188 2.8862305v19.3457031c0 1.5913086-1.2949219 2.8862305-2.8867188 2.8862305-1.5913086 0-2.8862305-1.2949219-2.8862305-2.8862305V23.1547852zM35 59.4702148c2.7568359 0 5-2.2431641 5-5s-2.2431641-5-5-5-5 2.2431641-5 5S32.2431641 59.4702148 35 59.4702148zM35 51.4702148c1.6542969 0 3 1.3457031 3 3s-1.3457031 3-3 3-3-1.3457031-3-3S33.3457031 51.4702148 35 51.4702148z" />
                </>
            );
            break;
        default:
            return null;
    }

    if (initSize != null) {
        svgContent = <g transform={`scale(${size / initSize}, ${size / initSize})`}>{svgContent}</g>;
    }

    return svgContent;
}
