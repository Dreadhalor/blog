export const CodeSandboxEmbed = ({
  url,
  title,
}: {
  url: string;
  title: string;
}) => {
  return (
    <iframe
      src={url}
      style={{
        width: '100%',
        height: '500px',
        border: '0',
        borderRadius: '4px',
      }}
      title={title}
    ></iframe>
  );
};
