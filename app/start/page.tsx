import Image from "next/image"

export default function Index() {
    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <div style={{ opacity: 0.15 }}>
            <Image
                src="/bg.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
            />
            </div>
        </div>
    )
}