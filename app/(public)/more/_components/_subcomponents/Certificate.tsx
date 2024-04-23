import Image from "next/image"

export default function Certificate(){
    return (
        <div className="flex flex-col py-10 justify-center items-center" draggable={false} onContextMenu={(e) => e.preventDefault()}>
            <Image src={"/assets/bnsp-certificate.png"} alt={"certificate"} draggable={false} className="max-w-[400px] w-full select-none h-auto px-2 py-2 border-4 border-double border-[#B99470]" sizes="100vw" width={0} height={0}></Image>
        </div>
    )
}