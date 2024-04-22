export const FigmaEmbed = ({ url }: { url: string }) => {
  return (
    <iframe
      style={{
        border: '1px solid rgba(0, 0, 0, 0.1)',
      }}
      width='100%'
      height='450'
      src={url}
      allowFullScreen
    ></iframe>
  );
};
