import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] text-white font-bold mx-auto mb-8 sm:mb-10 lg:mb-20 text-center`}
    >
      {tag && <TagLine className="mb-4 justify-center">{tag}</TagLine>}
      {title && (
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          {title}
        </h2>
      )}
      {text && (
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-n-4">
          {text}
        </p>
      )}
    </div>
  );
};

export default Heading;
