import image from "../public/41ff08e482a4314896060bebbe40c46e.jpg"
import Image from "next/image"

export default function teste(params) {
    return (
        <div>
            <div className=" h-fit">
                <div className="relative w-20 h-auto bg-red-900">
                    <Image
                        src={image}
                        fill
                        alt="Your Company"
                    />
                </div>
                Name
            </div>
        </div>
    )
};
