interface IFrameMapsProps {
  className?: string;
}

function IFrameMaps({ className }: IFrameMapsProps) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11757.842503041398!2d13.84562224876091!3d44.85376838478821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd33777d4e079%3A0xb4b1ba15b5128da7!2sSchiavuzzijev%20prilaz%2036%2C%2052100%2C%20Pula!5e0!3m2!1shr!2shr!4v1711478262872!5m2!1shr!2shr"
      className={`w-full h-full ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default IFrameMaps;
