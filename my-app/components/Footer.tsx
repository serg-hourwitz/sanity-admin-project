
interface FooterProps {
  title: string
}


export const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <p className="text-white text-center">{title}</p>
    </footer>
  );
}