"use client";
import { RxCross2 } from "react-icons/rx";
import { ImCross } from "react-icons/im";

interface GoogleMapsProps {
  showMap: boolean;
  onClose: () => void;
}

function GoogleMaps({ showMap, onClose }: GoogleMapsProps) {
  return (
    <section className="flex justify-center fixed inset-0 items-center w-screen h-screen bg-black bg-opacity-50 z-50">
      <div className="max-w-6xl px-3 flex flex-col bg-white rounded-md transitionMap">
        <div className="flex justify-between py-3">
          <h1 className="font-bold text-xl">Location of Villa Relax</h1>
          <button onClick={onClose} className="text-xl">
            <RxCross2 />
          </button>
        </div>
        <div className="min-w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32936.50351165916!2d13.832489906293096!3d44.85564064960826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd33777d4e079%3A0xb4b1ba15b5128da7!2sSchiavuzzijev%20prilaz%2036%2C%2052100%2C%20Pula!5e0!3m2!1shr!2shr!4v1703097240777!5m2!1shr!2shr"
            width={1128}
            height={500}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="py-3 flex justify-end">
          <button
            onClick={onClose}
            aria-label="Close Map"
            className="btn-2 flex gap-2"
          >
            Close <ImCross />
          </button>
        </div>
      </div>
    </section>
  );
}

export default GoogleMaps;
