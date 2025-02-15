export default function Hero({ bgImage, children }) {
    return (
        <div
            className={`bg-cover bg-center  flex items-center justify-center  w-full h-[650px] relative`}
            style={{ backgroundImage: `url(${bgImage})` }}
        >
        
            <div className="absolute inset-0 bg-gradient-to-bl to-black/50 from-[#001AFF]/60"></div>
            <div
                className=" container p-5 space-y-3  flex flex-col justify-center w-full  text-white
 h-full z-10 "
            >
                {children}
            </div>
        </div>
    );
}
