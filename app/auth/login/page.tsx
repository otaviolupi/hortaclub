

'use client';

import { useInfo } from '@/context/InfoContext';

export default function Signup() {
    const image = "/banner_horta.jpeg";
    const { info } = useInfo();

    return (
        <div className="flex">
            <div style={{
                backgroundImage: `url('${image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.60)",
                height: "100vh",
                width: "35%"
            }}></div>
            <div className="w-[75%]">{info}</div>
        </div>
    )
}